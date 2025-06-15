<script lang="ts">
    import {
      onDestroy,
      onMount,
      tick,
      beforeUpdate,
      afterUpdate,
      createEventDispatcher,
    } from "svelte";
    import { fade } from "svelte/transition";
    import { debounce, throttle } from "lodash-es";

    import { createLock } from "./lock"
    import { ProtoWebSocket} from '$lib/proto-websocket';
    import { makeToast } from "./toast";
    import { getSessionWebSocketUrl } from "./websocket-config";
    import Chat, { type ChatMessage } from "./ui/Chat.svelte";
    import ChooseName from "./ui/ChooseName.svelte";
    import NameList from "./ui/NameList.svelte";
    import NetworkInfo from "./ui/NetworkInfo.svelte";
    import Settings from "./ui/Settings.svelte";
    import Toolbar from "./ui/Toolbar.svelte";
    import XTerm from "./ui/XTerm.svelte";
    import Avatars from "./ui/Avatars.svelte";
    import LiveCursor from "./ui/LiveCursor.svelte";
    import { slide } from "./action/slide";
    import { TouchZoom, INITIAL_ZOOM } from "./action/touchZoom";
    import { arrangeNewTerminal } from "./arrange";
    import { settings } from "./settings";

    import {ws_protocol} from '$lib/proto/generated/web_protocol_pb';

    export let id: string;
  
    const dispatch = createEventDispatcher<{ receiveName: string }>();
  
    // The magic numbers "left" and "top" are used to approximately center the
    // terminal at the time that it is first created.
    const CONSTANT_OFFSET_LEFT = 378;
    const CONSTANT_OFFSET_TOP = 240;
  
    const OFFSET_LEFT_CSS = `calc(50vw - ${CONSTANT_OFFSET_LEFT}px)`;
    const OFFSET_TOP_CSS = `calc(50vh - ${CONSTANT_OFFSET_TOP}px)`;
    const OFFSET_TRANSFORM_ORIGIN_CSS = `calc(-1 * ${OFFSET_LEFT_CSS}) calc(-1 * ${OFFSET_TOP_CSS})`;
  
    // Terminal width and height limits.
    const TERM_MIN_ROWS = 8;
    const TERM_MIN_COLS = 32;
  
    function getConstantOffset() {
      return [
        0.5 * window.innerWidth - CONSTANT_OFFSET_LEFT,
        0.5 * window.innerHeight - CONSTANT_OFFSET_TOP,
      ];
    }
  
    let fabricEl: HTMLElement;
    let touchZoom: TouchZoom;
    let center = [0, 0];
    let zoom = INITIAL_ZOOM;
  
    let showChat = false; // @hmr:keep
    let settingsOpen = false; // @hmr:keep
    let showNetworkInfo = false; // @hmr:keep
  
    onMount(() => {
      touchZoom = new TouchZoom(fabricEl);
      touchZoom.onMove(() => {
        center = touchZoom.center;
        zoom = touchZoom.zoom;
  
        // Blur if the user is currently focused on a terminal.
        //
        // This makes it so that panning does not stop when the cursor happens to
        // intersect with the textarea, which absorbs wheel and touch events.
        if (document.activeElement) {
          const classList = [...document.activeElement.classList];
          if (classList.includes("xterm-helper-textarea")) {
            (document.activeElement as HTMLElement).blur();
          }
        }
  
        showNetworkInfo = false;
      });
    });
  
    /** Returns the mouse position in infinite grid coordinates, offset transformations and zoom. */
    function normalizePosition(event: MouseEvent): [number, number] {
      const [ox, oy] = getConstantOffset();
      return [
        Math.round(center[0] + event.pageX / zoom - ox),
        Math.round(center[1] + event.pageY / zoom - oy),
      ];
    }

    let protoSrocket: ProtoWebSocket | null = null;
  
    let connected = false;
    let exitReason: string | null = null;
  
    /** Bound "write" method for each terminal. */
    const writers: Record<number, (data: string) => void> = {};
    const termWrappers: Record<number, HTMLDivElement> = {};
    const termElements: Record<number, HTMLDivElement> = {};
    const chunknums: Record<number, number> = {};
    const locks: Record<number, any> = {};
    let userId = 0;
    let proto_users: Record<string, ws_protocol.WsUser> | null = null;
    let proto_shells: Record<string, ws_protocol.WsWinsize> | null = null;
    let subscriptions = new Set<number>();
  
    let moving = -1; // Terminal ID that is being dragged.
    let movingOrigin = [0, 0]; // Coordinates of mouse at origin when drag started.
    let proto_movingSize: ws_protocol.WsWinsize; // New [x, y] position of the dragged terminal.
    let movingIsDone = false; // Moving finished but hasn't been acknowledged.
  
    let resizing = -1; // Terminal ID that is being resized.
    let resizingOrigin = [0, 0]; // Coordinates of top-left origin when resize started.
    let resizingCell = [0, 0]; // Pixel dimensions of a single terminal cell.
    let proto_resizingSize: ws_protocol.WsWinsize; // Last resize message sent.
  
    let chatMessages: ChatMessage[] = [];
    let newMessages = false;
  
    let serverLatencies: number[] = [];
    let shellLatencies: number[] = [];
    let availableShells: string[] = [];

    onMount(async () => {

      protoSrocket = new ProtoWebSocket(getSessionWebSocketUrl(`${id}`), {
        onMessage(message) {
          console.log("Received message:", message);
          if (message.hello) {
            userId = message.hello.userId;
            availableShells = message.hello.availableShells;
            dispatch("receiveName", message.hello.hostName);
            makeToast({
              kind: "success",
              message: `Connected to the server.`,
            });
            exitReason = null;
          } else if (message.chunks) {
            let sid = message.chunks.sid;
            let seqnum = message.chunks.index;
            let chunks = message.chunks.chunks;

            console.log(`Received ${chunks.length} chunks for shell ${sid} at index ${seqnum}`);
            locks[sid](async () => {
              await tick();
              chunknums[sid] += chunks.length;
              for (const data of chunks) {
                seqnum += data.length;
                console.log(`Writing ${data.length} bytes to shell ${sid} at index ${seqnum}`);
                console.log(new TextDecoder().decode(data));
                writers[sid](new TextDecoder().decode(data));
              }
            });
          } else if (message.users) {
            proto_users = message.users.users;
          } else if (message.userDiff) {
            const uid = message.userDiff.userId;
            const update: ws_protocol.WsUser = message.userDiff.user;

            // Update the user list with the new user data.
            if (proto_users !== null && update !== null) {
              proto_users[uid] = update;
            }
          } else if (message.shells) {
            proto_shells = message.shells.shells;
            console.log("Proto shells:", proto_shells);
            if (movingIsDone) {
              moving = -1;
            }
            if (proto_shells !== null) {
              const shellIds = Object.keys(proto_shells);
              for (const sid of shellIds) {
                const shellId = Number(sid);
                if (!subscriptions.has(shellId)) {
                  chunknums[shellId] ??= 0;
                  locks[shellId] ??= createLock();
                  subscriptions.add(shellId);
                  const proto_sub: ws_protocol.WsClient = ws_protocol.WsClient.create({
                    subscribe: {
                      shell: shellId,
                      chunkNum: chunknums[shellId]
                    }
                  });
                  protoSrocket?.send(proto_sub);
                }
              }
            }
          } else if (message.shellLatency) {
            const shellLatency: number = message.shellLatency.latency;
            shellLatencies = [...shellLatencies, shellLatency].slice(-10);
          } else if (message.pong) {
            const serverLatency: number = Date.now() - message.pong.timestamp;
            serverLatencies = [...serverLatencies, serverLatency].slice(-10);
          } else if (message.error) {
            console.warn("Server error: " + message.error.message);
          } else if (message.chatBroadcast) {
            const chatBroadcast: ws_protocol.WsServer.ChatBroadcast = message.chatBroadcast;
            // Use the broadcast directly without adding timestamp
            chatMessages = [...chatMessages, chatBroadcast];
            if (!showChat) {
              newMessages = true;
            }
          }
        },

        onConnect() {
          if ($settings.name) {
            const proto_setName: ws_protocol.WsClient = ws_protocol.WsClient.create({
              setName: {
                name: $settings.name
              }
            });
            console.log("Sending setName message:", proto_setName);
            protoSrocket?.send(proto_setName);
          }
          connected = true;
        },

        onDisconnect() {
          connected = false;
          subscriptions.clear();
          proto_users = null;
          serverLatencies = [];
          shellLatencies = [];
        },

        onClose(event) {
          if (event.code === 4404) {
            exitReason = "Failed to connect: " + event.reason;
          } else if (event.code === 4500) {
            exitReason = "Internal server error: " + event.reason;
          }
        }
      });
    });
  
    onDestroy(() => protoSrocket?.dispose());

    // Send periodic ping messages for latency estimation.
    onMount(() => {
      const pingIntervalId = window.setInterval(() => {
        if (protoSrocket?.isConnected) {
          const proto_ping: ws_protocol.WsClient = ws_protocol.WsClient.create({
            ping: {
              timestamp: Date.now()
            }
          });
          protoSrocket.send(proto_ping);
        }
      }, 2000);
      return () => window.clearInterval(pingIntervalId);
    });
  
    function integerMedian(values: number[]) {
      if (values.length === 0) {
        return null;
      }
      const sorted = values.toSorted();
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 !== 0
        ? sorted[mid]
        : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
    }
  
    $: if ($settings.name) {
      
      const proto_setName: ws_protocol.WsClient = ws_protocol.WsClient.create({
        setName: {
          name: $settings.name
        }
      });
      protoSrocket?.send(proto_setName);
    }

    async function handleCreate(shellInfo?: string) {
      const shellsCount = Object.keys(proto_shells ?? {}).length;
      if (shellsCount >= 14) {
        makeToast(
          {
            kind: "error",
            message: "You can only create up to 14 terminals.",
          }
        );
        return;
      }

      const existing = Object.entries(proto_shells || {}).map(([id, winsize]) => ({
        x: winsize.x,
        y: winsize.y,
        width: termWrappers[Number(id)].clientWidth,
        height: termWrappers[Number(id)].clientHeight,
      }));
      const { x, y } = arrangeNewTerminal(existing);
      
      // Use the provided shellInfo or default to the first available shell
      const selectedShell = shellInfo || availableShells[0] || "Zsh;/bin/zsh";
      
      console.log("Creating new terminal with shell:", selectedShell);
      const proto_create: ws_protocol.WsClient = ws_protocol.WsClient.create({
        create: {
          x: x,
          y: y,
          shellInfo: selectedShell
        }
      });
      console.log("Sending create message:", proto_create);
      protoSrocket?.send(proto_create);
      touchZoom.moveTo([x, y], INITIAL_ZOOM);
    }

    async function handleInput(id: number, data: Uint8Array) {
      // TODO: try to check if the offset is required or not
      const ws_client_data: ws_protocol.WsClient = ws_protocol.WsClient.create({
        data: {
          shell: id,
          offset: chunknums[id],
          data: data
        }
      });

      protoSrocket?.send(ws_client_data);
    }
  
    // Stupid hack to preserve input focus when terminals are reordered.
    // See: https://github.com/sveltejs/svelte/issues/3973
    let activeElement: Element | null = null;
  
    beforeUpdate(() => {
      activeElement = document.activeElement;
    });
  
    afterUpdate(() => {
      if (activeElement instanceof HTMLElement) activeElement.focus();
    });
  
    // Global mouse handler logic follows, attached to the window element for smoothness.
    onMount(() => {
      // 50 milliseconds between successive terminal move updates.
      const sendMove = throttle((message: ws_protocol.WsClient) => {
        protoSrocket?.send(message);
      }, 50);
  
      // 80 milliseconds between successive cursor updates.
      const sendCursor = throttle((message: ws_protocol.WsClient) => {
        protoSrocket?.send(message);
      }, 80);
  
      function handleMouse(event: MouseEvent) {
        if (moving !== -1 && !movingIsDone) {
          const [x, y] = normalizePosition(event);
          if (proto_movingSize == undefined){
            proto_movingSize = ws_protocol.WsWinsize.create({
              rows: 0,
              cols: 0,
              x: Math.round(x - movingOrigin[0]),
              y: Math.round(y - movingOrigin[1]),
            })
          } else {
            proto_movingSize.x = Math.round(x - movingOrigin[0]);
            proto_movingSize.y = Math.round(y - movingOrigin[1]);
          }

          const ws_client_move: ws_protocol.WsClient = ws_protocol.WsClient.create({
            move: {
              shell: moving,
              size: proto_movingSize
            }
          });
          sendMove(ws_client_move);
        }
  
        if (resizing !== -1) {
          const cols = Math.max(
            Math.floor((event.pageX - resizingOrigin[0]) / resizingCell[0]),
            TERM_MIN_COLS, // Minimum number of columns.
          );
          const rows = Math.max(
            Math.floor((event.pageY - resizingOrigin[1]) / resizingCell[1]),
            TERM_MIN_ROWS, // Minimum number of rows.
          );
          if (rows !== proto_resizingSize.rows || cols !== proto_resizingSize.cols) {
						proto_resizingSize.rows = rows;
						proto_resizingSize.cols = cols;
						const ws_client_move: ws_protocol.WsClient = ws_protocol.WsClient.create({
							move: {
								shell: resizing,
								size: proto_resizingSize
							}
						});

            protoSrocket?.send(ws_client_move);
          }
        }

        const [x, y] = normalizePosition(event);

        const cursor = ws_protocol.WsCursor.create({
          x: x,
          y: y
        });

        const ws_client_setCursor: ws_protocol.WsClient = ws_protocol.WsClient.create({
          setCursor: {
            cursor: cursor
          }
        });
        sendCursor(ws_client_setCursor);
      }
  
      function handleMouseEnd(event: MouseEvent) {
        if (moving !== -1) {
          movingIsDone = true;
          sendMove.cancel();
          const ws_client_move: ws_protocol.WsClient = ws_protocol.WsClient.create({
            move: {
              shell: moving,
              size: proto_movingSize
            }
          });
          protoSrocket?.send(ws_client_move);
        }
  
        if (resizing !== -1) {
          resizing = -1;
        }
  
        if (event.type === "mouseleave") {
          sendCursor.cancel();
          const ws_client_cursor = ws_protocol.WsClient.create({
            setCursor: {
              cursor: null
            }
          });

          protoSrocket?.send(ws_client_cursor);
        }
      }
  
      window.addEventListener("mousemove", handleMouse);
      window.addEventListener("mouseup", handleMouseEnd);
      document.body.addEventListener("mouseleave", handleMouseEnd);
      return () => {
        window.removeEventListener("mousemove", handleMouse);
        window.removeEventListener("mouseup", handleMouseEnd);
        document.body.removeEventListener("mouseleave", handleMouseEnd);
      };
    });
  
    let focused: number[] = [];
    $: setFocus(focused);
  
    // Wait a small amount of time, since blur events happen before focus events.
    const setFocus = debounce((focused: number[]) => {
      const ws_client_setFocus: ws_protocol.WsClient = ws_protocol.WsClient.create({
        setFocus: {
          shellId: focused[0] ?? null
        }
      });
      protoSrocket?.send(ws_client_setFocus);
    }, 20);
  </script>
  
  <!-- Wheel handler stops native macOS Chrome zooming on pinch. -->
  <main
    class="p-8"
    class:cursor-nwse-resize={resizing !== -1}
    on:wheel={(event) => event.preventDefault()}
  >
    <div
      class="absolute top-8 inset-x-0 flex justify-center pointer-events-none z-10"
    >
      <Toolbar
        {connected}
        {newMessages}
        {availableShells}
        on:create={({ detail: shellInfo }) => handleCreate(shellInfo)}
        on:chat={() => {
          showChat = !showChat;
          newMessages = false;
        }}
        on:settings={() => {
          settingsOpen = true;
        }}
        on:networkInfo={() => {
          showNetworkInfo = !showNetworkInfo;
        }}
      />
  
      {#if showNetworkInfo}
        <div class="absolute top-20 translate-x-[116.5px]">
          <NetworkInfo
            status={connected
              ? "connected"
              : exitReason
              ? "no-shell"
              : "no-server"}
            serverLatency={integerMedian(serverLatencies)}
            shellLatency={integerMedian(shellLatencies)}
          />
        </div>
      {/if}
    </div>
  
    {#if showChat}
      <div
        class="absolute flex flex-col justify-end inset-y-4 right-4 w-80 pointer-events-none z-10"
      >
        <Chat
          {userId}
          messages={chatMessages}
          on:chat={(event) => {
            protoSrocket?.send(ws_protocol.WsClient.create({
              chatMessage: {
                message: event.detail
              }
            }));
          }}
          on:close={() => (showChat = false)}
        />
      </div>
    {/if}
  
    <Settings open={settingsOpen} on:close={() => (settingsOpen = false)} />
  
    <ChooseName />
  
    <!--
      Dotted circle background appears underneath the rest of the elements, but
      moves and zooms with the fabric of the canvas.
    -->
    <div
      class="absolute inset-0 -z-10"
      style:background-image="radial-gradient(#5D707F {zoom}px, transparent 0)"
      style:background-size="{24 * zoom}px {24 * zoom}px"
      style:background-position="{-zoom * center[0]}px {-zoom * center[1]}px"
    ></div>
  
    <div class="py-2">
      {#if exitReason !== null}
        <div class="text-red-400">{exitReason}</div>
      {:else if connected}
        <div class="text-green-400">You are connected!</div>
      {:else}
        <div class="text-yellow-400">Connecting…</div>
      {/if}
  
      <div class="mt-4">
        <NameList proto_users={proto_users || {}} />
      </div>
    </div>
  
    <div class="absolute inset-0 overflow-hidden touch-none" bind:this={fabricEl}>
      {#each Object.entries(proto_shells || {}) as [shellId, winsize] (shellId)}
        {@const id = Number(shellId)}
        {@const ws = id === moving ? proto_movingSize : winsize}
        <div
          class="absolute"
          style:left={OFFSET_LEFT_CSS}
          style:top={OFFSET_TOP_CSS}
          style:transform-origin={OFFSET_TRANSFORM_ORIGIN_CSS}
          transition:fade|local
          use:slide={{ x: ws.x, y: ws.y, center, zoom, immediate: id === moving }}
          bind:this={termWrappers[id]}
        >
          <XTerm
            rows={ws.rows}
            cols={ws.cols}
            bind:write={writers[id]}
            bind:termEl={termElements[id]}
            on:data={({ detail: data }) => handleInput(id, data)}
            on:close={() => {
              const ws_client_close = ws_protocol.WsClient.create({
                close: {
                  shell: id
                }
              });
              protoSrocket?.send(ws_client_close);
            }}
            on:shrink={() => {
              const rows = Math.max(ws.rows - 4, TERM_MIN_ROWS);
              const cols = Math.max(ws.cols - 10, TERM_MIN_COLS);
              if (rows !== ws.rows || cols !== ws.cols) {
                const ws_client_move = ws_protocol.WsClient.create({
                  move: {
                    shell: id,
                    size: {
                      x: ws.x,
                      y: ws.y,
                      rows: rows,
                      cols: cols
                    }
                  }
                });

                protoSrocket?.send(ws_client_move);
              }
            }}
            on:expand={() => {
              const rows = ws.rows + 4;
              const cols = ws.cols + 10;
              const ws_client_move = ws_protocol.WsClient.create({
                  move: {
                    shell: id,
                    size: {
                      x: ws.x,
                      y: ws.y,
                      rows: rows,
                      cols: cols
                    }
                  }
                });

              protoSrocket?.send(ws_client_move);
            }}
            on:bringToFront={() => {
              showNetworkInfo = false;
              const ws_client_move = ws_protocol.WsClient.create({
                move: {
                    shell: id,
                    size: {
                      x: ws.x,
                      y: ws.y,
                      rows: ws.rows,
                      cols: ws.cols
                    }
                  }
              });
              protoSrocket?.send(ws_client_move);
            }}
            on:startMove={({ detail: event }) => {
              const [x, y] = normalizePosition(event);
              moving = id;
              movingOrigin = [x - ws.x, y - ws.y];
              proto_movingSize = ws;
              movingIsDone = false;
            }}
            on:focus={() => {
              focused = [...focused, id];
            }}
            on:blur={() => {
              focused = focused.filter((i) => i !== id);
            }}
          />
  
          <!-- User avatars -->
          <div class="absolute bottom-2.5 right-2.5 pointer-events-none">
            <Avatars
              proto_users={proto_users ?
              Object.fromEntries(
                Object.entries(proto_users)
                .filter(([uid, user]) => Number(uid) !== userId && user.focus === id)
                ) : {}}
            />
          </div>
  
          <!-- Interactable element for resizing -->
          <div
            class="absolute w-5 h-5 -bottom-1 -right-1 cursor-nwse-resize"
            role="button"
            tabindex="0"
            on:mousedown={(event) => {
              const canvasEl = termElements[id].querySelector(".xterm-screen");
              if (canvasEl) {
                resizing = id;
                const r = canvasEl.getBoundingClientRect();
                resizingOrigin = [event.pageX - r.width, event.pageY - r.height];
                resizingCell = [r.width / ws.cols, r.height / ws.rows];
                proto_resizingSize = ws;
              }
            }}
            on:pointerdown={(event) => event.stopPropagation()}
          ></div>
        </div>
      {/each}

      {#each Object.entries(proto_users || {})
        .filter(([uid, user]) => Number(uid) !== userId && user.cursor !== null) as [id, user] (id)}
        <div
          class="absolute"
          style:left={OFFSET_LEFT_CSS}
          style:top={OFFSET_TOP_CSS}
          style:transform-origin={OFFSET_TRANSFORM_ORIGIN_CSS}
          transition:fade|local={{ duration: 200 }}
          use:slide={{
            x: user.cursor?.x ?? 0,
            y: user.cursor?.y ?? 0,
            center,
            zoom,
          }}
        >
          <LiveCursor {user} />
        </div>
      {/each}
    </div>
  </main>

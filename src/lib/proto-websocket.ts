/**
 * Protocol Buffers WebSocket Client
 * 
 * A WebSocket client that uses Protocol Buffers for communication.
 */

import { ws_protocol } from './proto/generated/web_protocol_pb';

// Connection state constants
const RECONNECT_DELAY = 1000; // 1-second delay before reconnecting
const MAX_BUFFER_SIZE = 64;   // Maximum number of messages to buffer when disconnected

export type ProtoWSOptions = {
  // Called when a message is received from the server
  onMessage: (message: any) => void;
  
  // Called when connection is established
  onConnect?: () => void;
  
  // Called when connection is lost
  onDisconnect?: () => void;
  
  // Called when connection closes (both expected and unexpected)
  onClose?: (event: CloseEvent) => void;
};

/**
 * Protocol Buffer WebSocket client for real-time communication.
 */
export class ProtoWebSocket {
  private url: string;
  private options: ProtoWSOptions;
  private ws: WebSocket | null = null;
  private connected: boolean = false;
  private messageBuffer: Uint8Array[] = [];
  private disposed: boolean = false;

  /**
   * Create a new Protocol Buffer WebSocket client.
   * 
   * @param url WebSocket URL to connect to
   * @param options Client configuration options
   */
  constructor(url: string, options: ProtoWSOptions) {
    this.url = url;
    
    // Normalize URL if it's a relative path
    if (this.url.startsWith("/")) {
      this.url = (window.location.protocol === "https:" ? "wss://" : "ws://") +
        window.location.host + this.url;
    }
    
    this.options = options;
    this.connect();
  }

  /**
   * Get current connection status
   */
  get isConnected(): boolean {
    return this.connected;
  }

  /**
   * Connect to the WebSocket server
   */
  private connect(): void {
    if (this.disposed) return;
    
    if (this.ws !== null) {
      throw new Error("WebSocket connection already exists");
    }
    
    this.ws = new WebSocket(this.url);
    // Set binary type to ArrayBuffer for Protocol Buffers
    this.ws.binaryType = "arraybuffer";
    
    this.ws.onopen = () => {
      this.setConnected(true);
    };
    
    this.ws.onclose = (event) => {
      this.options.onClose?.(event);
      this.ws = null;
      this.setConnected(false);
      
      // Try to reconnect after delay
      if (!this.disposed) {
        setTimeout(() => this.connect(), RECONNECT_DELAY);
      }
    };
    
    this.ws.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer) {
        try {
          // Decode the binary message using Protocol Buffers
          const serverMessage = ws_protocol.WsServer.decode(new Uint8Array(event.data));
          this.options.onMessage(serverMessage);
        } catch (error) {
          console.error('Failed to decode Protocol Buffer message:', error);
        }
      } else {
        console.warn('Received non-binary WebSocket message, ignoring');
      }
    };
  }

  /**
   * Update connection state and handle state changes.
   */
  private setConnected(connected: boolean): void {
    if (this.connected === connected) return;
    
    this.connected = connected;
    
    if (connected) {
      this.options.onConnect?.();
      
      // Send any buffered messages
      for (const message of this.messageBuffer) {
        this.ws?.send(message);
      }
      this.messageBuffer = [];
    } else {
      this.options.onDisconnect?.();
    }
  }

  /**
   * Send a message to the WebSocket server.
   * If the connection is not currently established, the message will be buffered.
   * 
   * @param message Protocol Buffer message to send
   */
  public send(message: any): void {
    console.log("Sending message: \n", message);
    let binary: Uint8Array;
    
    try {
      binary = ws_protocol.WsClient.encode(message).finish();
    } catch (error) {
      console.error('Failed to encode Protocol Buffer message:', error);
      return;
    }
    
    if (this.connected && this.ws) {
      this.ws.send(binary);
    } else if (this.messageBuffer.length < MAX_BUFFER_SIZE) {
      // Buffer the message if we're not connected
      this.messageBuffer.push(binary);
    }
  }
  
  /**
   * Helper method to create and send a "setName" message
   */
  public setName(name: string): void {
    this.send(ws_protocol.WsClient.create({
      setName: {
        name
      }
    }));
  }
  
  /**
   * Helper method to create and send a "setCursor" message
   */
  public setCursor(x: number, y: number | null): void {
    const message: any = { setCursor: {} };
    
    if (y !== null) {
      message.setCursor.cursor = { x, y };
    }
    
    this.send(ws_protocol.WsClient.create(message));
  }
  
  /**
   * Helper method to create and send a "setFocus" message
   */
  public setFocus(shellId: number | null): void {
    const message: any = { setFocus: {} };
    
    if (shellId !== null) {
      message.setFocus.shellId = shellId;
    }
    
    this.send(ws_protocol.WsClient.create(message));
  }
  
  /**
   * Helper method to create and send a "create" message for a new shell
   */
  public createShell(x: number, y: number, shellInfo: string = ""): void {
    this.send(ws_protocol.WsClient.create({
      create: {
        x,
        y,
        shellInfo
      }
    }));
  }
  
  /**
   * Helper method to create and send a "close" message
   */
  public closeShell(shell: number): void {
    this.send(ws_protocol.WsClient.create({
      close: {
        shell
      }
    }));
  }
  
  /**
   * Helper method to create and send a "move" message
   */
  public moveShell(shell: number, size: { x: number, y: number, rows: number, cols: number } | null): void {
    const message: any = { move: { shell } };
    
    if (size) {
      message.move.size = {
        x: size.x,
        y: size.y,
        rows: size.rows,
        cols: size.cols
      };
    }
    
    this.send(ws_protocol.WsClient.create(message));
  }
  
  /**
   * Helper method to create and send a "data" message
   */
  public sendData(shell: number, data: Uint8Array, offset: number = 0): void {
    this.send(ws_protocol.WsClient.create({
      data: {
        shell,
        data,
        offset
      }
    }));
  }
  
  /**
   * Helper method to create and send a "subscribe" message
   */
  public subscribe(shell: number, chunkNum: number): void {
    this.send(ws_protocol.WsClient.create({
      subscribe: {
        shell,
        chunkNum
      }
    }));
  }
  
  /**
   * Helper method to create and send a "ping" message
   */
  public ping(timestamp: number ): void {
    this.send(ws_protocol.WsClient.create({
      ping: {
        timestamp: timestamp
      }
    }));
  }

  /**
   * Close the WebSocket connection and clean up.
   */
  public dispose(): void {
    this.disposed = true;
    
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    
    this.setConnected(false);
    this.messageBuffer = [];
  }
}
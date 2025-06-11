import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ws_protocol. */
export namespace ws_protocol {

    /** Properties of a WsWinsize. */
    interface IWsWinsize {

        /** WsWinsize x */
        x?: (number|null);

        /** WsWinsize y */
        y?: (number|null);

        /** WsWinsize rows */
        rows?: (number|null);

        /** WsWinsize cols */
        cols?: (number|null);
    }

    /** Represents a WsWinsize. */
    class WsWinsize implements IWsWinsize {

        /**
         * Constructs a new WsWinsize.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws_protocol.IWsWinsize);

        /** WsWinsize x. */
        public x: number;

        /** WsWinsize y. */
        public y: number;

        /** WsWinsize rows. */
        public rows: number;

        /** WsWinsize cols. */
        public cols: number;

        /**
         * Creates a new WsWinsize instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsWinsize instance
         */
        public static create(properties?: ws_protocol.IWsWinsize): ws_protocol.WsWinsize;

        /**
         * Encodes the specified WsWinsize message. Does not implicitly {@link ws_protocol.WsWinsize.verify|verify} messages.
         * @param message WsWinsize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws_protocol.IWsWinsize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsWinsize message, length delimited. Does not implicitly {@link ws_protocol.WsWinsize.verify|verify} messages.
         * @param message WsWinsize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws_protocol.IWsWinsize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsWinsize message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsWinsize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsWinsize;

        /**
         * Decodes a WsWinsize message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsWinsize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsWinsize;

        /**
         * Verifies a WsWinsize message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsWinsize message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsWinsize
         */
        public static fromObject(object: { [k: string]: any }): ws_protocol.WsWinsize;

        /**
         * Creates a plain object from a WsWinsize message. Also converts values to other types if specified.
         * @param message WsWinsize
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws_protocol.WsWinsize, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsWinsize to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WsWinsize
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WsUser. */
    interface IWsUser {

        /** WsUser name */
        name?: (string|null);

        /** WsUser cursor */
        cursor?: (ws_protocol.IWsCursor|null);

        /** WsUser focus */
        focus?: (number|null);
    }

    /** Represents a WsUser. */
    class WsUser implements IWsUser {

        /**
         * Constructs a new WsUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws_protocol.IWsUser);

        /** WsUser name. */
        public name: string;

        /** WsUser cursor. */
        public cursor?: (ws_protocol.IWsCursor|null);

        /** WsUser focus. */
        public focus?: (number|null);

        /**
         * Creates a new WsUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsUser instance
         */
        public static create(properties?: ws_protocol.IWsUser): ws_protocol.WsUser;

        /**
         * Encodes the specified WsUser message. Does not implicitly {@link ws_protocol.WsUser.verify|verify} messages.
         * @param message WsUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws_protocol.IWsUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsUser message, length delimited. Does not implicitly {@link ws_protocol.WsUser.verify|verify} messages.
         * @param message WsUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws_protocol.IWsUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsUser;

        /**
         * Decodes a WsUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsUser;

        /**
         * Verifies a WsUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsUser
         */
        public static fromObject(object: { [k: string]: any }): ws_protocol.WsUser;

        /**
         * Creates a plain object from a WsUser message. Also converts values to other types if specified.
         * @param message WsUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws_protocol.WsUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WsUser
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WsCursor. */
    interface IWsCursor {

        /** WsCursor x */
        x?: (number|null);

        /** WsCursor y */
        y?: (number|null);
    }

    /** Represents a WsCursor. */
    class WsCursor implements IWsCursor {

        /**
         * Constructs a new WsCursor.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws_protocol.IWsCursor);

        /** WsCursor x. */
        public x: number;

        /** WsCursor y. */
        public y: number;

        /**
         * Creates a new WsCursor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsCursor instance
         */
        public static create(properties?: ws_protocol.IWsCursor): ws_protocol.WsCursor;

        /**
         * Encodes the specified WsCursor message. Does not implicitly {@link ws_protocol.WsCursor.verify|verify} messages.
         * @param message WsCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws_protocol.IWsCursor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsCursor message, length delimited. Does not implicitly {@link ws_protocol.WsCursor.verify|verify} messages.
         * @param message WsCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws_protocol.IWsCursor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsCursor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsCursor;

        /**
         * Decodes a WsCursor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsCursor;

        /**
         * Verifies a WsCursor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsCursor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsCursor
         */
        public static fromObject(object: { [k: string]: any }): ws_protocol.WsCursor;

        /**
         * Creates a plain object from a WsCursor message. Also converts values to other types if specified.
         * @param message WsCursor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws_protocol.WsCursor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsCursor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WsCursor
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WsServer. */
    interface IWsServer {

        /** WsServer hello */
        hello?: (ws_protocol.WsServer.IHello|null);

        /** WsServer users */
        users?: (ws_protocol.WsServer.IUsers|null);

        /** WsServer userDiff */
        userDiff?: (ws_protocol.WsServer.IUserDiff|null);

        /** WsServer shells */
        shells?: (ws_protocol.WsServer.IShells|null);

        /** WsServer chunks */
        chunks?: (ws_protocol.WsServer.IChunks|null);

        /** WsServer shellLatency */
        shellLatency?: (ws_protocol.WsServer.IShellLatency|null);

        /** WsServer pong */
        pong?: (ws_protocol.WsServer.IPong|null);

        /** WsServer error */
        error?: (ws_protocol.WsServer.IError|null);

        /** WsServer chatBroadcast */
        chatBroadcast?: (ws_protocol.WsServer.IChatBroadcast|null);
    }

    /** Represents a WsServer. */
    class WsServer implements IWsServer {

        /**
         * Constructs a new WsServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws_protocol.IWsServer);

        /** WsServer hello. */
        public hello?: (ws_protocol.WsServer.IHello|null);

        /** WsServer users. */
        public users?: (ws_protocol.WsServer.IUsers|null);

        /** WsServer userDiff. */
        public userDiff?: (ws_protocol.WsServer.IUserDiff|null);

        /** WsServer shells. */
        public shells?: (ws_protocol.WsServer.IShells|null);

        /** WsServer chunks. */
        public chunks?: (ws_protocol.WsServer.IChunks|null);

        /** WsServer shellLatency. */
        public shellLatency?: (ws_protocol.WsServer.IShellLatency|null);

        /** WsServer pong. */
        public pong?: (ws_protocol.WsServer.IPong|null);

        /** WsServer error. */
        public error?: (ws_protocol.WsServer.IError|null);

        /** WsServer chatBroadcast. */
        public chatBroadcast?: (ws_protocol.WsServer.IChatBroadcast|null);

        /** WsServer serverMessage. */
        public serverMessage?: ("hello"|"users"|"userDiff"|"shells"|"chunks"|"shellLatency"|"pong"|"error"|"chatBroadcast");

        /**
         * Creates a new WsServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsServer instance
         */
        public static create(properties?: ws_protocol.IWsServer): ws_protocol.WsServer;

        /**
         * Encodes the specified WsServer message. Does not implicitly {@link ws_protocol.WsServer.verify|verify} messages.
         * @param message WsServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws_protocol.IWsServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsServer message, length delimited. Does not implicitly {@link ws_protocol.WsServer.verify|verify} messages.
         * @param message WsServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws_protocol.IWsServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer;

        /**
         * Decodes a WsServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer;

        /**
         * Verifies a WsServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsServer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsServer
         */
        public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer;

        /**
         * Creates a plain object from a WsServer message. Also converts values to other types if specified.
         * @param message WsServer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws_protocol.WsServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsServer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WsServer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WsServer {

        /** Properties of a Hello. */
        interface IHello {

            /** Hello userId */
            userId?: (number|null);

            /** Hello metadata */
            metadata?: (string|null);
        }

        /** Represents a Hello. */
        class Hello implements IHello {

            /**
             * Constructs a new Hello.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IHello);

            /** Hello userId. */
            public userId: number;

            /** Hello metadata. */
            public metadata: string;

            /**
             * Creates a new Hello instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Hello instance
             */
            public static create(properties?: ws_protocol.WsServer.IHello): ws_protocol.WsServer.Hello;

            /**
             * Encodes the specified Hello message. Does not implicitly {@link ws_protocol.WsServer.Hello.verify|verify} messages.
             * @param message Hello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IHello, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Hello message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Hello.verify|verify} messages.
             * @param message Hello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IHello, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Hello message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Hello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.Hello;

            /**
             * Decodes a Hello message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Hello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.Hello;

            /**
             * Verifies a Hello message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Hello message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Hello
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.Hello;

            /**
             * Creates a plain object from a Hello message. Also converts values to other types if specified.
             * @param message Hello
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.Hello, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Hello to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Hello
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Users. */
        interface IUsers {

            /** Users users */
            users?: ({ [k: string]: ws_protocol.IWsUser }|null);
        }

        /** Represents a Users. */
        class Users implements IUsers {

            /**
             * Constructs a new Users.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IUsers);

            /** Users users. */
            public users: { [k: string]: ws_protocol.IWsUser };

            /**
             * Creates a new Users instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Users instance
             */
            public static create(properties?: ws_protocol.WsServer.IUsers): ws_protocol.WsServer.Users;

            /**
             * Encodes the specified Users message. Does not implicitly {@link ws_protocol.WsServer.Users.verify|verify} messages.
             * @param message Users message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IUsers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Users message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Users.verify|verify} messages.
             * @param message Users message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IUsers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Users message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Users
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.Users;

            /**
             * Decodes a Users message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Users
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.Users;

            /**
             * Verifies a Users message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Users message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Users
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.Users;

            /**
             * Creates a plain object from a Users message. Also converts values to other types if specified.
             * @param message Users
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.Users, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Users to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Users
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserDiff. */
        interface IUserDiff {

            /** UserDiff userId */
            userId?: (number|null);

            /** UserDiff user */
            user?: (ws_protocol.IWsUser|null);

            /** UserDiff action */
            action?: (ws_protocol.WsServer.UserDiff.ActionType|null);
        }

        /** Represents a UserDiff. */
        class UserDiff implements IUserDiff {

            /**
             * Constructs a new UserDiff.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IUserDiff);

            /** UserDiff userId. */
            public userId: number;

            /** UserDiff user. */
            public user?: (ws_protocol.IWsUser|null);

            /** UserDiff action. */
            public action?: (ws_protocol.WsServer.UserDiff.ActionType|null);

            /**
             * Creates a new UserDiff instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserDiff instance
             */
            public static create(properties?: ws_protocol.WsServer.IUserDiff): ws_protocol.WsServer.UserDiff;

            /**
             * Encodes the specified UserDiff message. Does not implicitly {@link ws_protocol.WsServer.UserDiff.verify|verify} messages.
             * @param message UserDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IUserDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserDiff message, length delimited. Does not implicitly {@link ws_protocol.WsServer.UserDiff.verify|verify} messages.
             * @param message UserDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IUserDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserDiff message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.UserDiff;

            /**
             * Decodes a UserDiff message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.UserDiff;

            /**
             * Verifies a UserDiff message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserDiff message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserDiff
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.UserDiff;

            /**
             * Creates a plain object from a UserDiff message. Also converts values to other types if specified.
             * @param message UserDiff
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.UserDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserDiff to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserDiff
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UserDiff {

            /** ActionType enum. */
            enum ActionType {
                JOINED = 0,
                LEFT = 1,
                CHANGED = 2
            }
        }

        /** Properties of a Shells. */
        interface IShells {

            /** Shells shells */
            shells?: ({ [k: string]: ws_protocol.IWsWinsize }|null);
        }

        /** Represents a Shells. */
        class Shells implements IShells {

            /**
             * Constructs a new Shells.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IShells);

            /** Shells shells. */
            public shells: { [k: string]: ws_protocol.IWsWinsize };

            /**
             * Creates a new Shells instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Shells instance
             */
            public static create(properties?: ws_protocol.WsServer.IShells): ws_protocol.WsServer.Shells;

            /**
             * Encodes the specified Shells message. Does not implicitly {@link ws_protocol.WsServer.Shells.verify|verify} messages.
             * @param message Shells message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IShells, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Shells message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Shells.verify|verify} messages.
             * @param message Shells message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IShells, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Shells message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Shells
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.Shells;

            /**
             * Decodes a Shells message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Shells
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.Shells;

            /**
             * Verifies a Shells message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Shells message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Shells
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.Shells;

            /**
             * Creates a plain object from a Shells message. Also converts values to other types if specified.
             * @param message Shells
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.Shells, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Shells to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Shells
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Chunks. */
        interface IChunks {

            /** Chunks sid */
            sid?: (number|null);

            /** Chunks index */
            index?: (number|null);

            /** Chunks chunks */
            chunks?: (Uint8Array[]|null);
        }

        /** Represents a Chunks. */
        class Chunks implements IChunks {

            /**
             * Constructs a new Chunks.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IChunks);

            /** Chunks sid. */
            public sid: number;

            /** Chunks index. */
            public index: number;

            /** Chunks chunks. */
            public chunks: Uint8Array[];

            /**
             * Creates a new Chunks instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Chunks instance
             */
            public static create(properties?: ws_protocol.WsServer.IChunks): ws_protocol.WsServer.Chunks;

            /**
             * Encodes the specified Chunks message. Does not implicitly {@link ws_protocol.WsServer.Chunks.verify|verify} messages.
             * @param message Chunks message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IChunks, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Chunks message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Chunks.verify|verify} messages.
             * @param message Chunks message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IChunks, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Chunks message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Chunks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.Chunks;

            /**
             * Decodes a Chunks message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Chunks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.Chunks;

            /**
             * Verifies a Chunks message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Chunks message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Chunks
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.Chunks;

            /**
             * Creates a plain object from a Chunks message. Also converts values to other types if specified.
             * @param message Chunks
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.Chunks, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Chunks to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Chunks
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ShellLatency. */
        interface IShellLatency {

            /** ShellLatency latency */
            latency?: (number|null);
        }

        /** Represents a ShellLatency. */
        class ShellLatency implements IShellLatency {

            /**
             * Constructs a new ShellLatency.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IShellLatency);

            /** ShellLatency latency. */
            public latency: number;

            /**
             * Creates a new ShellLatency instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ShellLatency instance
             */
            public static create(properties?: ws_protocol.WsServer.IShellLatency): ws_protocol.WsServer.ShellLatency;

            /**
             * Encodes the specified ShellLatency message. Does not implicitly {@link ws_protocol.WsServer.ShellLatency.verify|verify} messages.
             * @param message ShellLatency message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IShellLatency, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ShellLatency message, length delimited. Does not implicitly {@link ws_protocol.WsServer.ShellLatency.verify|verify} messages.
             * @param message ShellLatency message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IShellLatency, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ShellLatency message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ShellLatency
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.ShellLatency;

            /**
             * Decodes a ShellLatency message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ShellLatency
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.ShellLatency;

            /**
             * Verifies a ShellLatency message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ShellLatency message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ShellLatency
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.ShellLatency;

            /**
             * Creates a plain object from a ShellLatency message. Also converts values to other types if specified.
             * @param message ShellLatency
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.ShellLatency, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ShellLatency to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ShellLatency
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Pong. */
        interface IPong {

            /** Pong timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a Pong. */
        class Pong implements IPong {

            /**
             * Constructs a new Pong.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IPong);

            /** Pong timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new Pong instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pong instance
             */
            public static create(properties?: ws_protocol.WsServer.IPong): ws_protocol.WsServer.Pong;

            /**
             * Encodes the specified Pong message. Does not implicitly {@link ws_protocol.WsServer.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.Pong;

            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.Pong;

            /**
             * Verifies a Pong message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pong
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.Pong;

            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @param message Pong
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pong to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Pong
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Error. */
        interface IError {

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IError);

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: ws_protocol.WsServer.IError): ws_protocol.WsServer.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link ws_protocol.WsServer.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Error
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChatBroadcast. */
        interface IChatBroadcast {

            /** ChatBroadcast userId */
            userId?: (number|null);

            /** ChatBroadcast message */
            message?: (string|null);

            /** ChatBroadcast userName */
            userName?: (string|null);

            /** ChatBroadcast sentAt */
            sentAt?: (number|Long|null);
        }

        /** Represents a ChatBroadcast. */
        class ChatBroadcast implements IChatBroadcast {

            /**
             * Constructs a new ChatBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsServer.IChatBroadcast);

            /** ChatBroadcast userId. */
            public userId: number;

            /** ChatBroadcast message. */
            public message: string;

            /** ChatBroadcast userName. */
            public userName: string;

            /** ChatBroadcast sentAt. */
            public sentAt: (number|Long);

            /**
             * Creates a new ChatBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatBroadcast instance
             */
            public static create(properties?: ws_protocol.WsServer.IChatBroadcast): ws_protocol.WsServer.ChatBroadcast;

            /**
             * Encodes the specified ChatBroadcast message. Does not implicitly {@link ws_protocol.WsServer.ChatBroadcast.verify|verify} messages.
             * @param message ChatBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsServer.IChatBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatBroadcast message, length delimited. Does not implicitly {@link ws_protocol.WsServer.ChatBroadcast.verify|verify} messages.
             * @param message ChatBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsServer.IChatBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsServer.ChatBroadcast;

            /**
             * Decodes a ChatBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsServer.ChatBroadcast;

            /**
             * Verifies a ChatBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatBroadcast
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsServer.ChatBroadcast;

            /**
             * Creates a plain object from a ChatBroadcast message. Also converts values to other types if specified.
             * @param message ChatBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsServer.ChatBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatBroadcast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChatBroadcast
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a WsClient. */
    interface IWsClient {

        /** WsClient setName */
        setName?: (ws_protocol.WsClient.ISetName|null);

        /** WsClient setCursor */
        setCursor?: (ws_protocol.WsClient.ISetCursor|null);

        /** WsClient setFocus */
        setFocus?: (ws_protocol.WsClient.ISetFocus|null);

        /** WsClient create */
        create?: (ws_protocol.WsClient.ICreate|null);

        /** WsClient close */
        close?: (ws_protocol.WsClient.IClose|null);

        /** WsClient move */
        move?: (ws_protocol.WsClient.IMove|null);

        /** WsClient data */
        data?: (ws_protocol.WsClient.IData|null);

        /** WsClient subscribe */
        subscribe?: (ws_protocol.WsClient.ISubscribe|null);

        /** WsClient ping */
        ping?: (ws_protocol.WsClient.IPing|null);

        /** WsClient chatMessage */
        chatMessage?: (ws_protocol.WsClient.IChatMessage|null);
    }

    /** Represents a WsClient. */
    class WsClient implements IWsClient {

        /**
         * Constructs a new WsClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws_protocol.IWsClient);

        /** WsClient setName. */
        public setName?: (ws_protocol.WsClient.ISetName|null);

        /** WsClient setCursor. */
        public setCursor?: (ws_protocol.WsClient.ISetCursor|null);

        /** WsClient setFocus. */
        public setFocus?: (ws_protocol.WsClient.ISetFocus|null);

        /** WsClient create. */
        public create?: (ws_protocol.WsClient.ICreate|null);

        /** WsClient close. */
        public close?: (ws_protocol.WsClient.IClose|null);

        /** WsClient move. */
        public move?: (ws_protocol.WsClient.IMove|null);

        /** WsClient data. */
        public data?: (ws_protocol.WsClient.IData|null);

        /** WsClient subscribe. */
        public subscribe?: (ws_protocol.WsClient.ISubscribe|null);

        /** WsClient ping. */
        public ping?: (ws_protocol.WsClient.IPing|null);

        /** WsClient chatMessage. */
        public chatMessage?: (ws_protocol.WsClient.IChatMessage|null);

        /** WsClient clientMessage. */
        public clientMessage?: ("setName"|"setCursor"|"setFocus"|"create"|"close"|"move"|"data"|"subscribe"|"ping"|"chatMessage");

        /**
         * Creates a new WsClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsClient instance
         */
        public static create(properties?: ws_protocol.IWsClient): ws_protocol.WsClient;

        /**
         * Encodes the specified WsClient message. Does not implicitly {@link ws_protocol.WsClient.verify|verify} messages.
         * @param message WsClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws_protocol.IWsClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsClient message, length delimited. Does not implicitly {@link ws_protocol.WsClient.verify|verify} messages.
         * @param message WsClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws_protocol.IWsClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient;

        /**
         * Decodes a WsClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient;

        /**
         * Verifies a WsClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsClient
         */
        public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient;

        /**
         * Creates a plain object from a WsClient message. Also converts values to other types if specified.
         * @param message WsClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws_protocol.WsClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WsClient
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WsClient {

        /** Properties of a SetName. */
        interface ISetName {

            /** SetName name */
            name?: (string|null);
        }

        /** Represents a SetName. */
        class SetName implements ISetName {

            /**
             * Constructs a new SetName.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.ISetName);

            /** SetName name. */
            public name: string;

            /**
             * Creates a new SetName instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetName instance
             */
            public static create(properties?: ws_protocol.WsClient.ISetName): ws_protocol.WsClient.SetName;

            /**
             * Encodes the specified SetName message. Does not implicitly {@link ws_protocol.WsClient.SetName.verify|verify} messages.
             * @param message SetName message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.ISetName, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetName message, length delimited. Does not implicitly {@link ws_protocol.WsClient.SetName.verify|verify} messages.
             * @param message SetName message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.ISetName, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetName message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.SetName;

            /**
             * Decodes a SetName message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.SetName;

            /**
             * Verifies a SetName message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetName message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetName
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.SetName;

            /**
             * Creates a plain object from a SetName message. Also converts values to other types if specified.
             * @param message SetName
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.SetName, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetName to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetName
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetCursor. */
        interface ISetCursor {

            /** SetCursor cursor */
            cursor?: (ws_protocol.IWsCursor|null);
        }

        /** Represents a SetCursor. */
        class SetCursor implements ISetCursor {

            /**
             * Constructs a new SetCursor.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.ISetCursor);

            /** SetCursor cursor. */
            public cursor?: (ws_protocol.IWsCursor|null);

            /**
             * Creates a new SetCursor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetCursor instance
             */
            public static create(properties?: ws_protocol.WsClient.ISetCursor): ws_protocol.WsClient.SetCursor;

            /**
             * Encodes the specified SetCursor message. Does not implicitly {@link ws_protocol.WsClient.SetCursor.verify|verify} messages.
             * @param message SetCursor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.ISetCursor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetCursor message, length delimited. Does not implicitly {@link ws_protocol.WsClient.SetCursor.verify|verify} messages.
             * @param message SetCursor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.ISetCursor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetCursor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetCursor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.SetCursor;

            /**
             * Decodes a SetCursor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetCursor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.SetCursor;

            /**
             * Verifies a SetCursor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetCursor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetCursor
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.SetCursor;

            /**
             * Creates a plain object from a SetCursor message. Also converts values to other types if specified.
             * @param message SetCursor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.SetCursor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetCursor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetCursor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetFocus. */
        interface ISetFocus {

            /** SetFocus shellId */
            shellId?: (number|null);
        }

        /** Represents a SetFocus. */
        class SetFocus implements ISetFocus {

            /**
             * Constructs a new SetFocus.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.ISetFocus);

            /** SetFocus shellId. */
            public shellId: number;

            /**
             * Creates a new SetFocus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetFocus instance
             */
            public static create(properties?: ws_protocol.WsClient.ISetFocus): ws_protocol.WsClient.SetFocus;

            /**
             * Encodes the specified SetFocus message. Does not implicitly {@link ws_protocol.WsClient.SetFocus.verify|verify} messages.
             * @param message SetFocus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.ISetFocus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetFocus message, length delimited. Does not implicitly {@link ws_protocol.WsClient.SetFocus.verify|verify} messages.
             * @param message SetFocus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.ISetFocus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetFocus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetFocus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.SetFocus;

            /**
             * Decodes a SetFocus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetFocus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.SetFocus;

            /**
             * Verifies a SetFocus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetFocus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetFocus
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.SetFocus;

            /**
             * Creates a plain object from a SetFocus message. Also converts values to other types if specified.
             * @param message SetFocus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.SetFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetFocus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetFocus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Create. */
        interface ICreate {

            /** Create x */
            x?: (number|null);

            /** Create y */
            y?: (number|null);

            /** Create shellInfo */
            shellInfo?: (string|null);
        }

        /** Represents a Create. */
        class Create implements ICreate {

            /**
             * Constructs a new Create.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.ICreate);

            /** Create x. */
            public x: number;

            /** Create y. */
            public y: number;

            /** Create shellInfo. */
            public shellInfo: string;

            /**
             * Creates a new Create instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Create instance
             */
            public static create(properties?: ws_protocol.WsClient.ICreate): ws_protocol.WsClient.Create;

            /**
             * Encodes the specified Create message. Does not implicitly {@link ws_protocol.WsClient.Create.verify|verify} messages.
             * @param message Create message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.ICreate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Create message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Create.verify|verify} messages.
             * @param message Create message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.ICreate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Create message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Create
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.Create;

            /**
             * Decodes a Create message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Create
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.Create;

            /**
             * Verifies a Create message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Create message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Create
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.Create;

            /**
             * Creates a plain object from a Create message. Also converts values to other types if specified.
             * @param message Create
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.Create, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Create to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Create
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Close. */
        interface IClose {

            /** Close shell */
            shell?: (number|null);
        }

        /** Represents a Close. */
        class Close implements IClose {

            /**
             * Constructs a new Close.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.IClose);

            /** Close shell. */
            public shell: number;

            /**
             * Creates a new Close instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Close instance
             */
            public static create(properties?: ws_protocol.WsClient.IClose): ws_protocol.WsClient.Close;

            /**
             * Encodes the specified Close message. Does not implicitly {@link ws_protocol.WsClient.Close.verify|verify} messages.
             * @param message Close message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.IClose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Close message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Close.verify|verify} messages.
             * @param message Close message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.IClose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Close message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Close
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.Close;

            /**
             * Decodes a Close message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Close
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.Close;

            /**
             * Verifies a Close message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Close message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Close
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.Close;

            /**
             * Creates a plain object from a Close message. Also converts values to other types if specified.
             * @param message Close
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.Close, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Close to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Close
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Move. */
        interface IMove {

            /** Move shell */
            shell?: (number|null);

            /** Move size */
            size?: (ws_protocol.IWsWinsize|null);
        }

        /** Represents a Move. */
        class Move implements IMove {

            /**
             * Constructs a new Move.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.IMove);

            /** Move shell. */
            public shell: number;

            /** Move size. */
            public size?: (ws_protocol.IWsWinsize|null);

            /**
             * Creates a new Move instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Move instance
             */
            public static create(properties?: ws_protocol.WsClient.IMove): ws_protocol.WsClient.Move;

            /**
             * Encodes the specified Move message. Does not implicitly {@link ws_protocol.WsClient.Move.verify|verify} messages.
             * @param message Move message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Move message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Move.verify|verify} messages.
             * @param message Move message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Move message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.Move;

            /**
             * Decodes a Move message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.Move;

            /**
             * Verifies a Move message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Move message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Move
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.Move;

            /**
             * Creates a plain object from a Move message. Also converts values to other types if specified.
             * @param message Move
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Move to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Move
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Data. */
        interface IData {

            /** Data shell */
            shell?: (number|null);

            /** Data data */
            data?: (Uint8Array|null);

            /** Data offset */
            offset?: (number|null);
        }

        /** Represents a Data. */
        class Data implements IData {

            /**
             * Constructs a new Data.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.IData);

            /** Data shell. */
            public shell: number;

            /** Data data. */
            public data: Uint8Array;

            /** Data offset. */
            public offset: number;

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(properties?: ws_protocol.WsClient.IData): ws_protocol.WsClient.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link ws_protocol.WsClient.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Data message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.Data;

            /**
             * Decodes a Data message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.Data;

            /**
             * Verifies a Data message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Data message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Data
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.Data;

            /**
             * Creates a plain object from a Data message. Also converts values to other types if specified.
             * @param message Data
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Data to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Data
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Subscribe. */
        interface ISubscribe {

            /** Subscribe shell */
            shell?: (number|null);

            /** Subscribe chunkNum */
            chunkNum?: (number|null);
        }

        /** Represents a Subscribe. */
        class Subscribe implements ISubscribe {

            /**
             * Constructs a new Subscribe.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.ISubscribe);

            /** Subscribe shell. */
            public shell: number;

            /** Subscribe chunkNum. */
            public chunkNum: number;

            /**
             * Creates a new Subscribe instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Subscribe instance
             */
            public static create(properties?: ws_protocol.WsClient.ISubscribe): ws_protocol.WsClient.Subscribe;

            /**
             * Encodes the specified Subscribe message. Does not implicitly {@link ws_protocol.WsClient.Subscribe.verify|verify} messages.
             * @param message Subscribe message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Subscribe message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Subscribe.verify|verify} messages.
             * @param message Subscribe message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Subscribe message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.Subscribe;

            /**
             * Decodes a Subscribe message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.Subscribe;

            /**
             * Verifies a Subscribe message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Subscribe message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Subscribe
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.Subscribe;

            /**
             * Creates a plain object from a Subscribe message. Also converts values to other types if specified.
             * @param message Subscribe
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.Subscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Subscribe to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Subscribe
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Ping. */
        interface IPing {

            /** Ping timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a Ping. */
        class Ping implements IPing {

            /**
             * Constructs a new Ping.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.IPing);

            /** Ping timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new Ping instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ping instance
             */
            public static create(properties?: ws_protocol.WsClient.IPing): ws_protocol.WsClient.Ping;

            /**
             * Encodes the specified Ping message. Does not implicitly {@link ws_protocol.WsClient.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.Ping;

            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.Ping;

            /**
             * Verifies a Ping message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ping
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.Ping;

            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @param message Ping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ping to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Ping
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChatMessage. */
        interface IChatMessage {

            /** ChatMessage message */
            message?: (string|null);
        }

        /** Represents a ChatMessage. */
        class ChatMessage implements IChatMessage {

            /**
             * Constructs a new ChatMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws_protocol.WsClient.IChatMessage);

            /** ChatMessage message. */
            public message: string;

            /**
             * Creates a new ChatMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatMessage instance
             */
            public static create(properties?: ws_protocol.WsClient.IChatMessage): ws_protocol.WsClient.ChatMessage;

            /**
             * Encodes the specified ChatMessage message. Does not implicitly {@link ws_protocol.WsClient.ChatMessage.verify|verify} messages.
             * @param message ChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws_protocol.WsClient.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ws_protocol.WsClient.ChatMessage.verify|verify} messages.
             * @param message ChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws_protocol.WsClient.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws_protocol.WsClient.ChatMessage;

            /**
             * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws_protocol.WsClient.ChatMessage;

            /**
             * Verifies a ChatMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatMessage
             */
            public static fromObject(object: { [k: string]: any }): ws_protocol.WsClient.ChatMessage;

            /**
             * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
             * @param message ChatMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws_protocol.WsClient.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChatMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

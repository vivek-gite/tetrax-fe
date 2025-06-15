/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const ws_protocol = $root.ws_protocol = (() => {

    /**
     * Namespace ws_protocol.
     * @exports ws_protocol
     * @namespace
     */
    const ws_protocol = {};

    ws_protocol.WsWinsize = (function() {

        /**
         * Properties of a WsWinsize.
         * @memberof ws_protocol
         * @interface IWsWinsize
         * @property {number|null} [x] WsWinsize x
         * @property {number|null} [y] WsWinsize y
         * @property {number|null} [rows] WsWinsize rows
         * @property {number|null} [cols] WsWinsize cols
         */

        /**
         * Constructs a new WsWinsize.
         * @memberof ws_protocol
         * @classdesc Represents a WsWinsize.
         * @implements IWsWinsize
         * @constructor
         * @param {ws_protocol.IWsWinsize=} [properties] Properties to set
         */
        function WsWinsize(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsWinsize x.
         * @member {number} x
         * @memberof ws_protocol.WsWinsize
         * @instance
         */
        WsWinsize.prototype.x = 0;

        /**
         * WsWinsize y.
         * @member {number} y
         * @memberof ws_protocol.WsWinsize
         * @instance
         */
        WsWinsize.prototype.y = 0;

        /**
         * WsWinsize rows.
         * @member {number} rows
         * @memberof ws_protocol.WsWinsize
         * @instance
         */
        WsWinsize.prototype.rows = 0;

        /**
         * WsWinsize cols.
         * @member {number} cols
         * @memberof ws_protocol.WsWinsize
         * @instance
         */
        WsWinsize.prototype.cols = 0;

        /**
         * Creates a new WsWinsize instance using the specified properties.
         * @function create
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {ws_protocol.IWsWinsize=} [properties] Properties to set
         * @returns {ws_protocol.WsWinsize} WsWinsize instance
         */
        WsWinsize.create = function create(properties) {
            return new WsWinsize(properties);
        };

        /**
         * Encodes the specified WsWinsize message. Does not implicitly {@link ws_protocol.WsWinsize.verify|verify} messages.
         * @function encode
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {ws_protocol.IWsWinsize} message WsWinsize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsWinsize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.rows != null && Object.hasOwnProperty.call(message, "rows"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rows);
            if (message.cols != null && Object.hasOwnProperty.call(message, "cols"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cols);
            return writer;
        };

        /**
         * Encodes the specified WsWinsize message, length delimited. Does not implicitly {@link ws_protocol.WsWinsize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {ws_protocol.IWsWinsize} message WsWinsize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsWinsize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsWinsize message from the specified reader or buffer.
         * @function decode
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws_protocol.WsWinsize} WsWinsize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsWinsize.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsWinsize();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
                        break;
                    }
                case 3: {
                        message.rows = reader.int32();
                        break;
                    }
                case 4: {
                        message.cols = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsWinsize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws_protocol.WsWinsize} WsWinsize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsWinsize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsWinsize message.
         * @function verify
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsWinsize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.rows != null && message.hasOwnProperty("rows"))
                if (!$util.isInteger(message.rows))
                    return "rows: integer expected";
            if (message.cols != null && message.hasOwnProperty("cols"))
                if (!$util.isInteger(message.cols))
                    return "cols: integer expected";
            return null;
        };

        /**
         * Creates a WsWinsize message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws_protocol.WsWinsize} WsWinsize
         */
        WsWinsize.fromObject = function fromObject(object) {
            if (object instanceof $root.ws_protocol.WsWinsize)
                return object;
            let message = new $root.ws_protocol.WsWinsize();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.rows != null)
                message.rows = object.rows | 0;
            if (object.cols != null)
                message.cols = object.cols | 0;
            return message;
        };

        /**
         * Creates a plain object from a WsWinsize message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {ws_protocol.WsWinsize} message WsWinsize
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsWinsize.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.rows = 0;
                object.cols = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.rows != null && message.hasOwnProperty("rows"))
                object.rows = message.rows;
            if (message.cols != null && message.hasOwnProperty("cols"))
                object.cols = message.cols;
            return object;
        };

        /**
         * Converts this WsWinsize to JSON.
         * @function toJSON
         * @memberof ws_protocol.WsWinsize
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsWinsize.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WsWinsize
         * @function getTypeUrl
         * @memberof ws_protocol.WsWinsize
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsWinsize.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws_protocol.WsWinsize";
        };

        return WsWinsize;
    })();

    ws_protocol.WsUser = (function() {

        /**
         * Properties of a WsUser.
         * @memberof ws_protocol
         * @interface IWsUser
         * @property {string|null} [name] WsUser name
         * @property {ws_protocol.IWsCursor|null} [cursor] WsUser cursor
         * @property {number|null} [focus] WsUser focus
         */

        /**
         * Constructs a new WsUser.
         * @memberof ws_protocol
         * @classdesc Represents a WsUser.
         * @implements IWsUser
         * @constructor
         * @param {ws_protocol.IWsUser=} [properties] Properties to set
         */
        function WsUser(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsUser name.
         * @member {string} name
         * @memberof ws_protocol.WsUser
         * @instance
         */
        WsUser.prototype.name = "";

        /**
         * WsUser cursor.
         * @member {ws_protocol.IWsCursor|null|undefined} cursor
         * @memberof ws_protocol.WsUser
         * @instance
         */
        WsUser.prototype.cursor = null;

        /**
         * WsUser focus.
         * @member {number|null|undefined} focus
         * @memberof ws_protocol.WsUser
         * @instance
         */
        WsUser.prototype.focus = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WsUser.prototype, "_cursor", {
            get: $util.oneOfGetter($oneOfFields = ["cursor"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WsUser.prototype, "_focus", {
            get: $util.oneOfGetter($oneOfFields = ["focus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WsUser instance using the specified properties.
         * @function create
         * @memberof ws_protocol.WsUser
         * @static
         * @param {ws_protocol.IWsUser=} [properties] Properties to set
         * @returns {ws_protocol.WsUser} WsUser instance
         */
        WsUser.create = function create(properties) {
            return new WsUser(properties);
        };

        /**
         * Encodes the specified WsUser message. Does not implicitly {@link ws_protocol.WsUser.verify|verify} messages.
         * @function encode
         * @memberof ws_protocol.WsUser
         * @static
         * @param {ws_protocol.IWsUser} message WsUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
                $root.ws_protocol.WsCursor.encode(message.cursor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.focus != null && Object.hasOwnProperty.call(message, "focus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.focus);
            return writer;
        };

        /**
         * Encodes the specified WsUser message, length delimited. Does not implicitly {@link ws_protocol.WsUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws_protocol.WsUser
         * @static
         * @param {ws_protocol.IWsUser} message WsUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsUser message from the specified reader or buffer.
         * @function decode
         * @memberof ws_protocol.WsUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws_protocol.WsUser} WsUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsUser.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsUser();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.cursor = $root.ws_protocol.WsCursor.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.focus = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws_protocol.WsUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws_protocol.WsUser} WsUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsUser message.
         * @function verify
         * @memberof ws_protocol.WsUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.cursor != null && message.hasOwnProperty("cursor")) {
                properties._cursor = 1;
                {
                    let error = $root.ws_protocol.WsCursor.verify(message.cursor);
                    if (error)
                        return "cursor." + error;
                }
            }
            if (message.focus != null && message.hasOwnProperty("focus")) {
                properties._focus = 1;
                if (!$util.isInteger(message.focus))
                    return "focus: integer expected";
            }
            return null;
        };

        /**
         * Creates a WsUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws_protocol.WsUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws_protocol.WsUser} WsUser
         */
        WsUser.fromObject = function fromObject(object) {
            if (object instanceof $root.ws_protocol.WsUser)
                return object;
            let message = new $root.ws_protocol.WsUser();
            if (object.name != null)
                message.name = String(object.name);
            if (object.cursor != null) {
                if (typeof object.cursor !== "object")
                    throw TypeError(".ws_protocol.WsUser.cursor: object expected");
                message.cursor = $root.ws_protocol.WsCursor.fromObject(object.cursor);
            }
            if (object.focus != null)
                message.focus = object.focus | 0;
            return message;
        };

        /**
         * Creates a plain object from a WsUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws_protocol.WsUser
         * @static
         * @param {ws_protocol.WsUser} message WsUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.cursor != null && message.hasOwnProperty("cursor")) {
                object.cursor = $root.ws_protocol.WsCursor.toObject(message.cursor, options);
                if (options.oneofs)
                    object._cursor = "cursor";
            }
            if (message.focus != null && message.hasOwnProperty("focus")) {
                object.focus = message.focus;
                if (options.oneofs)
                    object._focus = "focus";
            }
            return object;
        };

        /**
         * Converts this WsUser to JSON.
         * @function toJSON
         * @memberof ws_protocol.WsUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WsUser
         * @function getTypeUrl
         * @memberof ws_protocol.WsUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws_protocol.WsUser";
        };

        return WsUser;
    })();

    ws_protocol.WsCursor = (function() {

        /**
         * Properties of a WsCursor.
         * @memberof ws_protocol
         * @interface IWsCursor
         * @property {number|null} [x] WsCursor x
         * @property {number|null} [y] WsCursor y
         */

        /**
         * Constructs a new WsCursor.
         * @memberof ws_protocol
         * @classdesc Represents a WsCursor.
         * @implements IWsCursor
         * @constructor
         * @param {ws_protocol.IWsCursor=} [properties] Properties to set
         */
        function WsCursor(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsCursor x.
         * @member {number} x
         * @memberof ws_protocol.WsCursor
         * @instance
         */
        WsCursor.prototype.x = 0;

        /**
         * WsCursor y.
         * @member {number} y
         * @memberof ws_protocol.WsCursor
         * @instance
         */
        WsCursor.prototype.y = 0;

        /**
         * Creates a new WsCursor instance using the specified properties.
         * @function create
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {ws_protocol.IWsCursor=} [properties] Properties to set
         * @returns {ws_protocol.WsCursor} WsCursor instance
         */
        WsCursor.create = function create(properties) {
            return new WsCursor(properties);
        };

        /**
         * Encodes the specified WsCursor message. Does not implicitly {@link ws_protocol.WsCursor.verify|verify} messages.
         * @function encode
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {ws_protocol.IWsCursor} message WsCursor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsCursor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified WsCursor message, length delimited. Does not implicitly {@link ws_protocol.WsCursor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {ws_protocol.IWsCursor} message WsCursor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsCursor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsCursor message from the specified reader or buffer.
         * @function decode
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws_protocol.WsCursor} WsCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsCursor.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsCursor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsCursor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws_protocol.WsCursor} WsCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsCursor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsCursor message.
         * @function verify
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsCursor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a WsCursor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws_protocol.WsCursor} WsCursor
         */
        WsCursor.fromObject = function fromObject(object) {
            if (object instanceof $root.ws_protocol.WsCursor)
                return object;
            let message = new $root.ws_protocol.WsCursor();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a WsCursor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {ws_protocol.WsCursor} message WsCursor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsCursor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this WsCursor to JSON.
         * @function toJSON
         * @memberof ws_protocol.WsCursor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsCursor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WsCursor
         * @function getTypeUrl
         * @memberof ws_protocol.WsCursor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsCursor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws_protocol.WsCursor";
        };

        return WsCursor;
    })();

    ws_protocol.WsServer = (function() {

        /**
         * Properties of a WsServer.
         * @memberof ws_protocol
         * @interface IWsServer
         * @property {ws_protocol.WsServer.IHello|null} [hello] WsServer hello
         * @property {ws_protocol.WsServer.IUsers|null} [users] WsServer users
         * @property {ws_protocol.WsServer.IUserDiff|null} [userDiff] WsServer userDiff
         * @property {ws_protocol.WsServer.IShells|null} [shells] WsServer shells
         * @property {ws_protocol.WsServer.IChunks|null} [chunks] WsServer chunks
         * @property {ws_protocol.WsServer.IShellLatency|null} [shellLatency] WsServer shellLatency
         * @property {ws_protocol.WsServer.IPong|null} [pong] WsServer pong
         * @property {ws_protocol.WsServer.IError|null} [error] WsServer error
         * @property {ws_protocol.WsServer.IChatBroadcast|null} [chatBroadcast] WsServer chatBroadcast
         */

        /**
         * Constructs a new WsServer.
         * @memberof ws_protocol
         * @classdesc Represents a WsServer.
         * @implements IWsServer
         * @constructor
         * @param {ws_protocol.IWsServer=} [properties] Properties to set
         */
        function WsServer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsServer hello.
         * @member {ws_protocol.WsServer.IHello|null|undefined} hello
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.hello = null;

        /**
         * WsServer users.
         * @member {ws_protocol.WsServer.IUsers|null|undefined} users
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.users = null;

        /**
         * WsServer userDiff.
         * @member {ws_protocol.WsServer.IUserDiff|null|undefined} userDiff
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.userDiff = null;

        /**
         * WsServer shells.
         * @member {ws_protocol.WsServer.IShells|null|undefined} shells
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.shells = null;

        /**
         * WsServer chunks.
         * @member {ws_protocol.WsServer.IChunks|null|undefined} chunks
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.chunks = null;

        /**
         * WsServer shellLatency.
         * @member {ws_protocol.WsServer.IShellLatency|null|undefined} shellLatency
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.shellLatency = null;

        /**
         * WsServer pong.
         * @member {ws_protocol.WsServer.IPong|null|undefined} pong
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.pong = null;

        /**
         * WsServer error.
         * @member {ws_protocol.WsServer.IError|null|undefined} error
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.error = null;

        /**
         * WsServer chatBroadcast.
         * @member {ws_protocol.WsServer.IChatBroadcast|null|undefined} chatBroadcast
         * @memberof ws_protocol.WsServer
         * @instance
         */
        WsServer.prototype.chatBroadcast = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WsServer serverMessage.
         * @member {"hello"|"users"|"userDiff"|"shells"|"chunks"|"shellLatency"|"pong"|"error"|"chatBroadcast"|undefined} serverMessage
         * @memberof ws_protocol.WsServer
         * @instance
         */
        Object.defineProperty(WsServer.prototype, "serverMessage", {
            get: $util.oneOfGetter($oneOfFields = ["hello", "users", "userDiff", "shells", "chunks", "shellLatency", "pong", "error", "chatBroadcast"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WsServer instance using the specified properties.
         * @function create
         * @memberof ws_protocol.WsServer
         * @static
         * @param {ws_protocol.IWsServer=} [properties] Properties to set
         * @returns {ws_protocol.WsServer} WsServer instance
         */
        WsServer.create = function create(properties) {
            return new WsServer(properties);
        };

        /**
         * Encodes the specified WsServer message. Does not implicitly {@link ws_protocol.WsServer.verify|verify} messages.
         * @function encode
         * @memberof ws_protocol.WsServer
         * @static
         * @param {ws_protocol.IWsServer} message WsServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hello != null && Object.hasOwnProperty.call(message, "hello"))
                $root.ws_protocol.WsServer.Hello.encode(message.hello, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.users != null && Object.hasOwnProperty.call(message, "users"))
                $root.ws_protocol.WsServer.Users.encode(message.users, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.userDiff != null && Object.hasOwnProperty.call(message, "userDiff"))
                $root.ws_protocol.WsServer.UserDiff.encode(message.userDiff, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.shells != null && Object.hasOwnProperty.call(message, "shells"))
                $root.ws_protocol.WsServer.Shells.encode(message.shells, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.chunks != null && Object.hasOwnProperty.call(message, "chunks"))
                $root.ws_protocol.WsServer.Chunks.encode(message.chunks, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.shellLatency != null && Object.hasOwnProperty.call(message, "shellLatency"))
                $root.ws_protocol.WsServer.ShellLatency.encode(message.shellLatency, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.pong != null && Object.hasOwnProperty.call(message, "pong"))
                $root.ws_protocol.WsServer.Pong.encode(message.pong, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.ws_protocol.WsServer.Error.encode(message.error, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.chatBroadcast != null && Object.hasOwnProperty.call(message, "chatBroadcast"))
                $root.ws_protocol.WsServer.ChatBroadcast.encode(message.chatBroadcast, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsServer message, length delimited. Does not implicitly {@link ws_protocol.WsServer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws_protocol.WsServer
         * @static
         * @param {ws_protocol.IWsServer} message WsServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsServer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsServer message from the specified reader or buffer.
         * @function decode
         * @memberof ws_protocol.WsServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws_protocol.WsServer} WsServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsServer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hello = $root.ws_protocol.WsServer.Hello.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.users = $root.ws_protocol.WsServer.Users.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.userDiff = $root.ws_protocol.WsServer.UserDiff.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.shells = $root.ws_protocol.WsServer.Shells.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.chunks = $root.ws_protocol.WsServer.Chunks.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.shellLatency = $root.ws_protocol.WsServer.ShellLatency.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.pong = $root.ws_protocol.WsServer.Pong.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.error = $root.ws_protocol.WsServer.Error.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.chatBroadcast = $root.ws_protocol.WsServer.ChatBroadcast.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsServer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws_protocol.WsServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws_protocol.WsServer} WsServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsServer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsServer message.
         * @function verify
         * @memberof ws_protocol.WsServer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsServer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.hello != null && message.hasOwnProperty("hello")) {
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.Hello.verify(message.hello);
                    if (error)
                        return "hello." + error;
                }
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.Users.verify(message.users);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.userDiff != null && message.hasOwnProperty("userDiff")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.UserDiff.verify(message.userDiff);
                    if (error)
                        return "userDiff." + error;
                }
            }
            if (message.shells != null && message.hasOwnProperty("shells")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.Shells.verify(message.shells);
                    if (error)
                        return "shells." + error;
                }
            }
            if (message.chunks != null && message.hasOwnProperty("chunks")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.Chunks.verify(message.chunks);
                    if (error)
                        return "chunks." + error;
                }
            }
            if (message.shellLatency != null && message.hasOwnProperty("shellLatency")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.ShellLatency.verify(message.shellLatency);
                    if (error)
                        return "shellLatency." + error;
                }
            }
            if (message.pong != null && message.hasOwnProperty("pong")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.Pong.verify(message.pong);
                    if (error)
                        return "pong." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            if (message.chatBroadcast != null && message.hasOwnProperty("chatBroadcast")) {
                if (properties.serverMessage === 1)
                    return "serverMessage: multiple values";
                properties.serverMessage = 1;
                {
                    let error = $root.ws_protocol.WsServer.ChatBroadcast.verify(message.chatBroadcast);
                    if (error)
                        return "chatBroadcast." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WsServer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws_protocol.WsServer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws_protocol.WsServer} WsServer
         */
        WsServer.fromObject = function fromObject(object) {
            if (object instanceof $root.ws_protocol.WsServer)
                return object;
            let message = new $root.ws_protocol.WsServer();
            if (object.hello != null) {
                if (typeof object.hello !== "object")
                    throw TypeError(".ws_protocol.WsServer.hello: object expected");
                message.hello = $root.ws_protocol.WsServer.Hello.fromObject(object.hello);
            }
            if (object.users != null) {
                if (typeof object.users !== "object")
                    throw TypeError(".ws_protocol.WsServer.users: object expected");
                message.users = $root.ws_protocol.WsServer.Users.fromObject(object.users);
            }
            if (object.userDiff != null) {
                if (typeof object.userDiff !== "object")
                    throw TypeError(".ws_protocol.WsServer.userDiff: object expected");
                message.userDiff = $root.ws_protocol.WsServer.UserDiff.fromObject(object.userDiff);
            }
            if (object.shells != null) {
                if (typeof object.shells !== "object")
                    throw TypeError(".ws_protocol.WsServer.shells: object expected");
                message.shells = $root.ws_protocol.WsServer.Shells.fromObject(object.shells);
            }
            if (object.chunks != null) {
                if (typeof object.chunks !== "object")
                    throw TypeError(".ws_protocol.WsServer.chunks: object expected");
                message.chunks = $root.ws_protocol.WsServer.Chunks.fromObject(object.chunks);
            }
            if (object.shellLatency != null) {
                if (typeof object.shellLatency !== "object")
                    throw TypeError(".ws_protocol.WsServer.shellLatency: object expected");
                message.shellLatency = $root.ws_protocol.WsServer.ShellLatency.fromObject(object.shellLatency);
            }
            if (object.pong != null) {
                if (typeof object.pong !== "object")
                    throw TypeError(".ws_protocol.WsServer.pong: object expected");
                message.pong = $root.ws_protocol.WsServer.Pong.fromObject(object.pong);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".ws_protocol.WsServer.error: object expected");
                message.error = $root.ws_protocol.WsServer.Error.fromObject(object.error);
            }
            if (object.chatBroadcast != null) {
                if (typeof object.chatBroadcast !== "object")
                    throw TypeError(".ws_protocol.WsServer.chatBroadcast: object expected");
                message.chatBroadcast = $root.ws_protocol.WsServer.ChatBroadcast.fromObject(object.chatBroadcast);
            }
            return message;
        };

        /**
         * Creates a plain object from a WsServer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws_protocol.WsServer
         * @static
         * @param {ws_protocol.WsServer} message WsServer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsServer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.hello != null && message.hasOwnProperty("hello")) {
                object.hello = $root.ws_protocol.WsServer.Hello.toObject(message.hello, options);
                if (options.oneofs)
                    object.serverMessage = "hello";
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                object.users = $root.ws_protocol.WsServer.Users.toObject(message.users, options);
                if (options.oneofs)
                    object.serverMessage = "users";
            }
            if (message.userDiff != null && message.hasOwnProperty("userDiff")) {
                object.userDiff = $root.ws_protocol.WsServer.UserDiff.toObject(message.userDiff, options);
                if (options.oneofs)
                    object.serverMessage = "userDiff";
            }
            if (message.shells != null && message.hasOwnProperty("shells")) {
                object.shells = $root.ws_protocol.WsServer.Shells.toObject(message.shells, options);
                if (options.oneofs)
                    object.serverMessage = "shells";
            }
            if (message.chunks != null && message.hasOwnProperty("chunks")) {
                object.chunks = $root.ws_protocol.WsServer.Chunks.toObject(message.chunks, options);
                if (options.oneofs)
                    object.serverMessage = "chunks";
            }
            if (message.shellLatency != null && message.hasOwnProperty("shellLatency")) {
                object.shellLatency = $root.ws_protocol.WsServer.ShellLatency.toObject(message.shellLatency, options);
                if (options.oneofs)
                    object.serverMessage = "shellLatency";
            }
            if (message.pong != null && message.hasOwnProperty("pong")) {
                object.pong = $root.ws_protocol.WsServer.Pong.toObject(message.pong, options);
                if (options.oneofs)
                    object.serverMessage = "pong";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.ws_protocol.WsServer.Error.toObject(message.error, options);
                if (options.oneofs)
                    object.serverMessage = "error";
            }
            if (message.chatBroadcast != null && message.hasOwnProperty("chatBroadcast")) {
                object.chatBroadcast = $root.ws_protocol.WsServer.ChatBroadcast.toObject(message.chatBroadcast, options);
                if (options.oneofs)
                    object.serverMessage = "chatBroadcast";
            }
            return object;
        };

        /**
         * Converts this WsServer to JSON.
         * @function toJSON
         * @memberof ws_protocol.WsServer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsServer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WsServer
         * @function getTypeUrl
         * @memberof ws_protocol.WsServer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsServer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws_protocol.WsServer";
        };

        WsServer.Hello = (function() {

            /**
             * Properties of a Hello.
             * @memberof ws_protocol.WsServer
             * @interface IHello
             * @property {number|null} [userId] Hello userId
             * @property {string|null} [hostName] Hello hostName
             * @property {Array.<string>|null} [availableShells] Hello availableShells
             */

            /**
             * Constructs a new Hello.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a Hello.
             * @implements IHello
             * @constructor
             * @param {ws_protocol.WsServer.IHello=} [properties] Properties to set
             */
            function Hello(properties) {
                this.availableShells = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Hello userId.
             * @member {number} userId
             * @memberof ws_protocol.WsServer.Hello
             * @instance
             */
            Hello.prototype.userId = 0;

            /**
             * Hello hostName.
             * @member {string} hostName
             * @memberof ws_protocol.WsServer.Hello
             * @instance
             */
            Hello.prototype.hostName = "";

            /**
             * Hello availableShells.
             * @member {Array.<string>} availableShells
             * @memberof ws_protocol.WsServer.Hello
             * @instance
             */
            Hello.prototype.availableShells = $util.emptyArray;

            /**
             * Creates a new Hello instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {ws_protocol.WsServer.IHello=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.Hello} Hello instance
             */
            Hello.create = function create(properties) {
                return new Hello(properties);
            };

            /**
             * Encodes the specified Hello message. Does not implicitly {@link ws_protocol.WsServer.Hello.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {ws_protocol.WsServer.IHello} message Hello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hello.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.hostName != null && Object.hasOwnProperty.call(message, "hostName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.hostName);
                if (message.availableShells != null && message.availableShells.length)
                    for (let i = 0; i < message.availableShells.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.availableShells[i]);
                return writer;
            };

            /**
             * Encodes the specified Hello message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Hello.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {ws_protocol.WsServer.IHello} message Hello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hello.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Hello message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.Hello} Hello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hello.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.Hello();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.hostName = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.availableShells && message.availableShells.length))
                                message.availableShells = [];
                            message.availableShells.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Hello message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.Hello} Hello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hello.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Hello message.
             * @function verify
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hello.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.hostName != null && message.hasOwnProperty("hostName"))
                    if (!$util.isString(message.hostName))
                        return "hostName: string expected";
                if (message.availableShells != null && message.hasOwnProperty("availableShells")) {
                    if (!Array.isArray(message.availableShells))
                        return "availableShells: array expected";
                    for (let i = 0; i < message.availableShells.length; ++i)
                        if (!$util.isString(message.availableShells[i]))
                            return "availableShells: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Hello message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.Hello} Hello
             */
            Hello.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.Hello)
                    return object;
                let message = new $root.ws_protocol.WsServer.Hello();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.hostName != null)
                    message.hostName = String(object.hostName);
                if (object.availableShells) {
                    if (!Array.isArray(object.availableShells))
                        throw TypeError(".ws_protocol.WsServer.Hello.availableShells: array expected");
                    message.availableShells = [];
                    for (let i = 0; i < object.availableShells.length; ++i)
                        message.availableShells[i] = String(object.availableShells[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Hello message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {ws_protocol.WsServer.Hello} message Hello
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hello.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.availableShells = [];
                if (options.defaults) {
                    object.userId = 0;
                    object.hostName = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.hostName != null && message.hasOwnProperty("hostName"))
                    object.hostName = message.hostName;
                if (message.availableShells && message.availableShells.length) {
                    object.availableShells = [];
                    for (let j = 0; j < message.availableShells.length; ++j)
                        object.availableShells[j] = message.availableShells[j];
                }
                return object;
            };

            /**
             * Converts this Hello to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.Hello
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hello.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Hello
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.Hello
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Hello.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.Hello";
            };

            return Hello;
        })();

        WsServer.Users = (function() {

            /**
             * Properties of a Users.
             * @memberof ws_protocol.WsServer
             * @interface IUsers
             * @property {Object.<string,ws_protocol.IWsUser>|null} [users] Users users
             */

            /**
             * Constructs a new Users.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a Users.
             * @implements IUsers
             * @constructor
             * @param {ws_protocol.WsServer.IUsers=} [properties] Properties to set
             */
            function Users(properties) {
                this.users = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Users users.
             * @member {Object.<string,ws_protocol.IWsUser>} users
             * @memberof ws_protocol.WsServer.Users
             * @instance
             */
            Users.prototype.users = $util.emptyObject;

            /**
             * Creates a new Users instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {ws_protocol.WsServer.IUsers=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.Users} Users instance
             */
            Users.create = function create(properties) {
                return new Users(properties);
            };

            /**
             * Encodes the specified Users message. Does not implicitly {@link ws_protocol.WsServer.Users.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {ws_protocol.WsServer.IUsers} message Users message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Users.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.users != null && Object.hasOwnProperty.call(message, "users"))
                    for (let keys = Object.keys(message.users), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.ws_protocol.WsUser.encode(message.users[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Users message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Users.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {ws_protocol.WsServer.IUsers} message Users message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Users.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Users message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.Users} Users
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Users.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.Users(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.users === $util.emptyObject)
                                message.users = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = $root.ws_protocol.WsUser.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.users[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Users message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.Users} Users
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Users.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Users message.
             * @function verify
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Users.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.users != null && message.hasOwnProperty("users")) {
                    if (!$util.isObject(message.users))
                        return "users: object expected";
                    let key = Object.keys(message.users);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "users: integer key{k:int32} expected";
                        {
                            let error = $root.ws_protocol.WsUser.verify(message.users[key[i]]);
                            if (error)
                                return "users." + error;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a Users message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.Users} Users
             */
            Users.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.Users)
                    return object;
                let message = new $root.ws_protocol.WsServer.Users();
                if (object.users) {
                    if (typeof object.users !== "object")
                        throw TypeError(".ws_protocol.WsServer.Users.users: object expected");
                    message.users = {};
                    for (let keys = Object.keys(object.users), i = 0; i < keys.length; ++i) {
                        if (typeof object.users[keys[i]] !== "object")
                            throw TypeError(".ws_protocol.WsServer.Users.users: object expected");
                        message.users[keys[i]] = $root.ws_protocol.WsUser.fromObject(object.users[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Users message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {ws_protocol.WsServer.Users} message Users
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Users.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.users = {};
                let keys2;
                if (message.users && (keys2 = Object.keys(message.users)).length) {
                    object.users = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.users[keys2[j]] = $root.ws_protocol.WsUser.toObject(message.users[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Users to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.Users
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Users.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Users
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.Users
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Users.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.Users";
            };

            return Users;
        })();

        WsServer.UserDiff = (function() {

            /**
             * Properties of a UserDiff.
             * @memberof ws_protocol.WsServer
             * @interface IUserDiff
             * @property {number|null} [userId] UserDiff userId
             * @property {ws_protocol.IWsUser|null} [user] UserDiff user
             * @property {ws_protocol.WsServer.UserDiff.ActionType|null} [action] UserDiff action
             */

            /**
             * Constructs a new UserDiff.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a UserDiff.
             * @implements IUserDiff
             * @constructor
             * @param {ws_protocol.WsServer.IUserDiff=} [properties] Properties to set
             */
            function UserDiff(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserDiff userId.
             * @member {number} userId
             * @memberof ws_protocol.WsServer.UserDiff
             * @instance
             */
            UserDiff.prototype.userId = 0;

            /**
             * UserDiff user.
             * @member {ws_protocol.IWsUser|null|undefined} user
             * @memberof ws_protocol.WsServer.UserDiff
             * @instance
             */
            UserDiff.prototype.user = null;

            /**
             * UserDiff action.
             * @member {ws_protocol.WsServer.UserDiff.ActionType|null|undefined} action
             * @memberof ws_protocol.WsServer.UserDiff
             * @instance
             */
            UserDiff.prototype.action = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserDiff.prototype, "_action", {
                get: $util.oneOfGetter($oneOfFields = ["action"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new UserDiff instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {ws_protocol.WsServer.IUserDiff=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.UserDiff} UserDiff instance
             */
            UserDiff.create = function create(properties) {
                return new UserDiff(properties);
            };

            /**
             * Encodes the specified UserDiff message. Does not implicitly {@link ws_protocol.WsServer.UserDiff.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {ws_protocol.WsServer.IUserDiff} message UserDiff message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserDiff.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.ws_protocol.WsUser.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.action);
                return writer;
            };

            /**
             * Encodes the specified UserDiff message, length delimited. Does not implicitly {@link ws_protocol.WsServer.UserDiff.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {ws_protocol.WsServer.IUserDiff} message UserDiff message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserDiff.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserDiff message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.UserDiff} UserDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserDiff.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.UserDiff();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.user = $root.ws_protocol.WsUser.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.action = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserDiff message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.UserDiff} UserDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserDiff.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserDiff message.
             * @function verify
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserDiff.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    let error = $root.ws_protocol.WsUser.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.action != null && message.hasOwnProperty("action")) {
                    properties._action = 1;
                    switch (message.action) {
                    default:
                        return "action: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a UserDiff message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.UserDiff} UserDiff
             */
            UserDiff.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.UserDiff)
                    return object;
                let message = new $root.ws_protocol.WsServer.UserDiff();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".ws_protocol.WsServer.UserDiff.user: object expected");
                    message.user = $root.ws_protocol.WsUser.fromObject(object.user);
                }
                switch (object.action) {
                default:
                    if (typeof object.action === "number") {
                        message.action = object.action;
                        break;
                    }
                    break;
                case "JOINED":
                case 0:
                    message.action = 0;
                    break;
                case "LEFT":
                case 1:
                    message.action = 1;
                    break;
                case "CHANGED":
                case 2:
                    message.action = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a UserDiff message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {ws_protocol.WsServer.UserDiff} message UserDiff
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserDiff.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.user = null;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.ws_protocol.WsUser.toObject(message.user, options);
                if (message.action != null && message.hasOwnProperty("action")) {
                    object.action = options.enums === String ? $root.ws_protocol.WsServer.UserDiff.ActionType[message.action] === undefined ? message.action : $root.ws_protocol.WsServer.UserDiff.ActionType[message.action] : message.action;
                    if (options.oneofs)
                        object._action = "action";
                }
                return object;
            };

            /**
             * Converts this UserDiff to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.UserDiff
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserDiff.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserDiff
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.UserDiff
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserDiff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.UserDiff";
            };

            /**
             * ActionType enum.
             * @name ws_protocol.WsServer.UserDiff.ActionType
             * @enum {number}
             * @property {number} JOINED=0 JOINED value
             * @property {number} LEFT=1 LEFT value
             * @property {number} CHANGED=2 CHANGED value
             */
            UserDiff.ActionType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JOINED"] = 0;
                values[valuesById[1] = "LEFT"] = 1;
                values[valuesById[2] = "CHANGED"] = 2;
                return values;
            })();

            return UserDiff;
        })();

        WsServer.Shells = (function() {

            /**
             * Properties of a Shells.
             * @memberof ws_protocol.WsServer
             * @interface IShells
             * @property {Object.<string,ws_protocol.IWsWinsize>|null} [shells] Shells shells
             */

            /**
             * Constructs a new Shells.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a Shells.
             * @implements IShells
             * @constructor
             * @param {ws_protocol.WsServer.IShells=} [properties] Properties to set
             */
            function Shells(properties) {
                this.shells = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Shells shells.
             * @member {Object.<string,ws_protocol.IWsWinsize>} shells
             * @memberof ws_protocol.WsServer.Shells
             * @instance
             */
            Shells.prototype.shells = $util.emptyObject;

            /**
             * Creates a new Shells instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {ws_protocol.WsServer.IShells=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.Shells} Shells instance
             */
            Shells.create = function create(properties) {
                return new Shells(properties);
            };

            /**
             * Encodes the specified Shells message. Does not implicitly {@link ws_protocol.WsServer.Shells.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {ws_protocol.WsServer.IShells} message Shells message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Shells.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shells != null && Object.hasOwnProperty.call(message, "shells"))
                    for (let keys = Object.keys(message.shells), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.ws_protocol.WsWinsize.encode(message.shells[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Shells message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Shells.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {ws_protocol.WsServer.IShells} message Shells message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Shells.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Shells message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.Shells} Shells
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shells.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.Shells(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.shells === $util.emptyObject)
                                message.shells = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = $root.ws_protocol.WsWinsize.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.shells[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Shells message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.Shells} Shells
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shells.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Shells message.
             * @function verify
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Shells.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shells != null && message.hasOwnProperty("shells")) {
                    if (!$util.isObject(message.shells))
                        return "shells: object expected";
                    let key = Object.keys(message.shells);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "shells: integer key{k:int32} expected";
                        {
                            let error = $root.ws_protocol.WsWinsize.verify(message.shells[key[i]]);
                            if (error)
                                return "shells." + error;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a Shells message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.Shells} Shells
             */
            Shells.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.Shells)
                    return object;
                let message = new $root.ws_protocol.WsServer.Shells();
                if (object.shells) {
                    if (typeof object.shells !== "object")
                        throw TypeError(".ws_protocol.WsServer.Shells.shells: object expected");
                    message.shells = {};
                    for (let keys = Object.keys(object.shells), i = 0; i < keys.length; ++i) {
                        if (typeof object.shells[keys[i]] !== "object")
                            throw TypeError(".ws_protocol.WsServer.Shells.shells: object expected");
                        message.shells[keys[i]] = $root.ws_protocol.WsWinsize.fromObject(object.shells[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Shells message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {ws_protocol.WsServer.Shells} message Shells
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Shells.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.shells = {};
                let keys2;
                if (message.shells && (keys2 = Object.keys(message.shells)).length) {
                    object.shells = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.shells[keys2[j]] = $root.ws_protocol.WsWinsize.toObject(message.shells[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Shells to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.Shells
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Shells.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Shells
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.Shells
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Shells.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.Shells";
            };

            return Shells;
        })();

        WsServer.Chunks = (function() {

            /**
             * Properties of a Chunks.
             * @memberof ws_protocol.WsServer
             * @interface IChunks
             * @property {number|null} [sid] Chunks sid
             * @property {number|null} [index] Chunks index
             * @property {Array.<Uint8Array>|null} [chunks] Chunks chunks
             */

            /**
             * Constructs a new Chunks.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a Chunks.
             * @implements IChunks
             * @constructor
             * @param {ws_protocol.WsServer.IChunks=} [properties] Properties to set
             */
            function Chunks(properties) {
                this.chunks = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Chunks sid.
             * @member {number} sid
             * @memberof ws_protocol.WsServer.Chunks
             * @instance
             */
            Chunks.prototype.sid = 0;

            /**
             * Chunks index.
             * @member {number} index
             * @memberof ws_protocol.WsServer.Chunks
             * @instance
             */
            Chunks.prototype.index = 0;

            /**
             * Chunks chunks.
             * @member {Array.<Uint8Array>} chunks
             * @memberof ws_protocol.WsServer.Chunks
             * @instance
             */
            Chunks.prototype.chunks = $util.emptyArray;

            /**
             * Creates a new Chunks instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {ws_protocol.WsServer.IChunks=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.Chunks} Chunks instance
             */
            Chunks.create = function create(properties) {
                return new Chunks(properties);
            };

            /**
             * Encodes the specified Chunks message. Does not implicitly {@link ws_protocol.WsServer.Chunks.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {ws_protocol.WsServer.IChunks} message Chunks message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chunks.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sid != null && Object.hasOwnProperty.call(message, "sid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sid);
                if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
                if (message.chunks != null && message.chunks.length)
                    for (let i = 0; i < message.chunks.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.chunks[i]);
                return writer;
            };

            /**
             * Encodes the specified Chunks message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Chunks.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {ws_protocol.WsServer.IChunks} message Chunks message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chunks.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Chunks message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.Chunks} Chunks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chunks.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.Chunks();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.sid = reader.int32();
                            break;
                        }
                    case 2: {
                            message.index = reader.int32();
                            break;
                        }
                    case 3: {
                            if (!(message.chunks && message.chunks.length))
                                message.chunks = [];
                            message.chunks.push(reader.bytes());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Chunks message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.Chunks} Chunks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chunks.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Chunks message.
             * @function verify
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chunks.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sid != null && message.hasOwnProperty("sid"))
                    if (!$util.isInteger(message.sid))
                        return "sid: integer expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                if (message.chunks != null && message.hasOwnProperty("chunks")) {
                    if (!Array.isArray(message.chunks))
                        return "chunks: array expected";
                    for (let i = 0; i < message.chunks.length; ++i)
                        if (!(message.chunks[i] && typeof message.chunks[i].length === "number" || $util.isString(message.chunks[i])))
                            return "chunks: buffer[] expected";
                }
                return null;
            };

            /**
             * Creates a Chunks message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.Chunks} Chunks
             */
            Chunks.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.Chunks)
                    return object;
                let message = new $root.ws_protocol.WsServer.Chunks();
                if (object.sid != null)
                    message.sid = object.sid | 0;
                if (object.index != null)
                    message.index = object.index | 0;
                if (object.chunks) {
                    if (!Array.isArray(object.chunks))
                        throw TypeError(".ws_protocol.WsServer.Chunks.chunks: array expected");
                    message.chunks = [];
                    for (let i = 0; i < object.chunks.length; ++i)
                        if (typeof object.chunks[i] === "string")
                            $util.base64.decode(object.chunks[i], message.chunks[i] = $util.newBuffer($util.base64.length(object.chunks[i])), 0);
                        else if (object.chunks[i].length >= 0)
                            message.chunks[i] = object.chunks[i];
                }
                return message;
            };

            /**
             * Creates a plain object from a Chunks message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {ws_protocol.WsServer.Chunks} message Chunks
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Chunks.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.chunks = [];
                if (options.defaults) {
                    object.sid = 0;
                    object.index = 0;
                }
                if (message.sid != null && message.hasOwnProperty("sid"))
                    object.sid = message.sid;
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.chunks && message.chunks.length) {
                    object.chunks = [];
                    for (let j = 0; j < message.chunks.length; ++j)
                        object.chunks[j] = options.bytes === String ? $util.base64.encode(message.chunks[j], 0, message.chunks[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.chunks[j]) : message.chunks[j];
                }
                return object;
            };

            /**
             * Converts this Chunks to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.Chunks
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Chunks.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Chunks
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.Chunks
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Chunks.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.Chunks";
            };

            return Chunks;
        })();

        WsServer.ShellLatency = (function() {

            /**
             * Properties of a ShellLatency.
             * @memberof ws_protocol.WsServer
             * @interface IShellLatency
             * @property {number|null} [latency] ShellLatency latency
             */

            /**
             * Constructs a new ShellLatency.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a ShellLatency.
             * @implements IShellLatency
             * @constructor
             * @param {ws_protocol.WsServer.IShellLatency=} [properties] Properties to set
             */
            function ShellLatency(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ShellLatency latency.
             * @member {number} latency
             * @memberof ws_protocol.WsServer.ShellLatency
             * @instance
             */
            ShellLatency.prototype.latency = 0;

            /**
             * Creates a new ShellLatency instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {ws_protocol.WsServer.IShellLatency=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.ShellLatency} ShellLatency instance
             */
            ShellLatency.create = function create(properties) {
                return new ShellLatency(properties);
            };

            /**
             * Encodes the specified ShellLatency message. Does not implicitly {@link ws_protocol.WsServer.ShellLatency.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {ws_protocol.WsServer.IShellLatency} message ShellLatency message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ShellLatency.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.latency != null && Object.hasOwnProperty.call(message, "latency"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.latency);
                return writer;
            };

            /**
             * Encodes the specified ShellLatency message, length delimited. Does not implicitly {@link ws_protocol.WsServer.ShellLatency.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {ws_protocol.WsServer.IShellLatency} message ShellLatency message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ShellLatency.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ShellLatency message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.ShellLatency} ShellLatency
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ShellLatency.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.ShellLatency();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.latency = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ShellLatency message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.ShellLatency} ShellLatency
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ShellLatency.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ShellLatency message.
             * @function verify
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ShellLatency.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.latency != null && message.hasOwnProperty("latency"))
                    if (!$util.isInteger(message.latency))
                        return "latency: integer expected";
                return null;
            };

            /**
             * Creates a ShellLatency message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.ShellLatency} ShellLatency
             */
            ShellLatency.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.ShellLatency)
                    return object;
                let message = new $root.ws_protocol.WsServer.ShellLatency();
                if (object.latency != null)
                    message.latency = object.latency | 0;
                return message;
            };

            /**
             * Creates a plain object from a ShellLatency message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {ws_protocol.WsServer.ShellLatency} message ShellLatency
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ShellLatency.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.latency = 0;
                if (message.latency != null && message.hasOwnProperty("latency"))
                    object.latency = message.latency;
                return object;
            };

            /**
             * Converts this ShellLatency to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.ShellLatency
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ShellLatency.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ShellLatency
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.ShellLatency
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ShellLatency.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.ShellLatency";
            };

            return ShellLatency;
        })();

        WsServer.Pong = (function() {

            /**
             * Properties of a Pong.
             * @memberof ws_protocol.WsServer
             * @interface IPong
             * @property {number|Long|null} [timestamp] Pong timestamp
             */

            /**
             * Constructs a new Pong.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a Pong.
             * @implements IPong
             * @constructor
             * @param {ws_protocol.WsServer.IPong=} [properties] Properties to set
             */
            function Pong(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pong timestamp.
             * @member {number|Long} timestamp
             * @memberof ws_protocol.WsServer.Pong
             * @instance
             */
            Pong.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Pong instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {ws_protocol.WsServer.IPong=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.Pong} Pong instance
             */
            Pong.create = function create(properties) {
                return new Pong(properties);
            };

            /**
             * Encodes the specified Pong message. Does not implicitly {@link ws_protocol.WsServer.Pong.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {ws_protocol.WsServer.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Pong.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {ws_protocol.WsServer.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.Pong();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pong message.
             * @function verify
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pong.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.Pong} Pong
             */
            Pong.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.Pong)
                    return object;
                let message = new $root.ws_protocol.WsServer.Pong();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {ws_protocol.WsServer.Pong} message Pong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pong.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                return object;
            };

            /**
             * Converts this Pong to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.Pong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pong.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Pong
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.Pong
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Pong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.Pong";
            };

            return Pong;
        })();

        WsServer.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof ws_protocol.WsServer
             * @interface IError
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {ws_protocol.WsServer.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error message.
             * @member {string} message
             * @memberof ws_protocol.WsServer.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {ws_protocol.WsServer.IError=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link ws_protocol.WsServer.Error.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {ws_protocol.WsServer.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link ws_protocol.WsServer.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {ws_protocol.WsServer.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.Error();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.Error)
                    return object;
                let message = new $root.ws_protocol.WsServer.Error();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {ws_protocol.WsServer.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Error
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.Error
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.Error";
            };

            return Error;
        })();

        WsServer.ChatBroadcast = (function() {

            /**
             * Properties of a ChatBroadcast.
             * @memberof ws_protocol.WsServer
             * @interface IChatBroadcast
             * @property {number|null} [userId] ChatBroadcast userId
             * @property {string|null} [message] ChatBroadcast message
             * @property {string|null} [userName] ChatBroadcast userName
             * @property {number|Long|null} [sentAt] ChatBroadcast sentAt
             */

            /**
             * Constructs a new ChatBroadcast.
             * @memberof ws_protocol.WsServer
             * @classdesc Represents a ChatBroadcast.
             * @implements IChatBroadcast
             * @constructor
             * @param {ws_protocol.WsServer.IChatBroadcast=} [properties] Properties to set
             */
            function ChatBroadcast(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatBroadcast userId.
             * @member {number} userId
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @instance
             */
            ChatBroadcast.prototype.userId = 0;

            /**
             * ChatBroadcast message.
             * @member {string} message
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @instance
             */
            ChatBroadcast.prototype.message = "";

            /**
             * ChatBroadcast userName.
             * @member {string} userName
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @instance
             */
            ChatBroadcast.prototype.userName = "";

            /**
             * ChatBroadcast sentAt.
             * @member {number|Long} sentAt
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @instance
             */
            ChatBroadcast.prototype.sentAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ChatBroadcast instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {ws_protocol.WsServer.IChatBroadcast=} [properties] Properties to set
             * @returns {ws_protocol.WsServer.ChatBroadcast} ChatBroadcast instance
             */
            ChatBroadcast.create = function create(properties) {
                return new ChatBroadcast(properties);
            };

            /**
             * Encodes the specified ChatBroadcast message. Does not implicitly {@link ws_protocol.WsServer.ChatBroadcast.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {ws_protocol.WsServer.IChatBroadcast} message ChatBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatBroadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
                if (message.sentAt != null && Object.hasOwnProperty.call(message, "sentAt"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.sentAt);
                return writer;
            };

            /**
             * Encodes the specified ChatBroadcast message, length delimited. Does not implicitly {@link ws_protocol.WsServer.ChatBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {ws_protocol.WsServer.IChatBroadcast} message ChatBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsServer.ChatBroadcast} ChatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatBroadcast.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsServer.ChatBroadcast();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.message = reader.string();
                            break;
                        }
                    case 3: {
                            message.userName = reader.string();
                            break;
                        }
                    case 4: {
                            message.sentAt = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChatBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsServer.ChatBroadcast} ChatBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatBroadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatBroadcast message.
             * @function verify
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatBroadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.sentAt != null && message.hasOwnProperty("sentAt"))
                    if (!$util.isInteger(message.sentAt) && !(message.sentAt && $util.isInteger(message.sentAt.low) && $util.isInteger(message.sentAt.high)))
                        return "sentAt: integer|Long expected";
                return null;
            };

            /**
             * Creates a ChatBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsServer.ChatBroadcast} ChatBroadcast
             */
            ChatBroadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsServer.ChatBroadcast)
                    return object;
                let message = new $root.ws_protocol.WsServer.ChatBroadcast();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.message != null)
                    message.message = String(object.message);
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.sentAt != null)
                    if ($util.Long)
                        (message.sentAt = $util.Long.fromValue(object.sentAt)).unsigned = false;
                    else if (typeof object.sentAt === "string")
                        message.sentAt = parseInt(object.sentAt, 10);
                    else if (typeof object.sentAt === "number")
                        message.sentAt = object.sentAt;
                    else if (typeof object.sentAt === "object")
                        message.sentAt = new $util.LongBits(object.sentAt.low >>> 0, object.sentAt.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ChatBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {ws_protocol.WsServer.ChatBroadcast} message ChatBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatBroadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.message = "";
                    object.userName = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.sentAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sentAt = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.sentAt != null && message.hasOwnProperty("sentAt"))
                    if (typeof message.sentAt === "number")
                        object.sentAt = options.longs === String ? String(message.sentAt) : message.sentAt;
                    else
                        object.sentAt = options.longs === String ? $util.Long.prototype.toString.call(message.sentAt) : options.longs === Number ? new $util.LongBits(message.sentAt.low >>> 0, message.sentAt.high >>> 0).toNumber() : message.sentAt;
                return object;
            };

            /**
             * Converts this ChatBroadcast to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChatBroadcast
             * @function getTypeUrl
             * @memberof ws_protocol.WsServer.ChatBroadcast
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChatBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsServer.ChatBroadcast";
            };

            return ChatBroadcast;
        })();

        return WsServer;
    })();

    ws_protocol.WsClient = (function() {

        /**
         * Properties of a WsClient.
         * @memberof ws_protocol
         * @interface IWsClient
         * @property {ws_protocol.WsClient.ISetName|null} [setName] WsClient setName
         * @property {ws_protocol.WsClient.ISetCursor|null} [setCursor] WsClient setCursor
         * @property {ws_protocol.WsClient.ISetFocus|null} [setFocus] WsClient setFocus
         * @property {ws_protocol.WsClient.ICreate|null} [create] WsClient create
         * @property {ws_protocol.WsClient.IClose|null} [close] WsClient close
         * @property {ws_protocol.WsClient.IMove|null} [move] WsClient move
         * @property {ws_protocol.WsClient.IData|null} [data] WsClient data
         * @property {ws_protocol.WsClient.ISubscribe|null} [subscribe] WsClient subscribe
         * @property {ws_protocol.WsClient.IPing|null} [ping] WsClient ping
         * @property {ws_protocol.WsClient.IChatMessage|null} [chatMessage] WsClient chatMessage
         */

        /**
         * Constructs a new WsClient.
         * @memberof ws_protocol
         * @classdesc Represents a WsClient.
         * @implements IWsClient
         * @constructor
         * @param {ws_protocol.IWsClient=} [properties] Properties to set
         */
        function WsClient(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsClient setName.
         * @member {ws_protocol.WsClient.ISetName|null|undefined} setName
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.setName = null;

        /**
         * WsClient setCursor.
         * @member {ws_protocol.WsClient.ISetCursor|null|undefined} setCursor
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.setCursor = null;

        /**
         * WsClient setFocus.
         * @member {ws_protocol.WsClient.ISetFocus|null|undefined} setFocus
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.setFocus = null;

        /**
         * WsClient create.
         * @member {ws_protocol.WsClient.ICreate|null|undefined} create
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.create = null;

        /**
         * WsClient close.
         * @member {ws_protocol.WsClient.IClose|null|undefined} close
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.close = null;

        /**
         * WsClient move.
         * @member {ws_protocol.WsClient.IMove|null|undefined} move
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.move = null;

        /**
         * WsClient data.
         * @member {ws_protocol.WsClient.IData|null|undefined} data
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.data = null;

        /**
         * WsClient subscribe.
         * @member {ws_protocol.WsClient.ISubscribe|null|undefined} subscribe
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.subscribe = null;

        /**
         * WsClient ping.
         * @member {ws_protocol.WsClient.IPing|null|undefined} ping
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.ping = null;

        /**
         * WsClient chatMessage.
         * @member {ws_protocol.WsClient.IChatMessage|null|undefined} chatMessage
         * @memberof ws_protocol.WsClient
         * @instance
         */
        WsClient.prototype.chatMessage = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WsClient clientMessage.
         * @member {"setName"|"setCursor"|"setFocus"|"create"|"close"|"move"|"data"|"subscribe"|"ping"|"chatMessage"|undefined} clientMessage
         * @memberof ws_protocol.WsClient
         * @instance
         */
        Object.defineProperty(WsClient.prototype, "clientMessage", {
            get: $util.oneOfGetter($oneOfFields = ["setName", "setCursor", "setFocus", "create", "close", "move", "data", "subscribe", "ping", "chatMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WsClient instance using the specified properties.
         * @function create
         * @memberof ws_protocol.WsClient
         * @static
         * @param {ws_protocol.IWsClient=} [properties] Properties to set
         * @returns {ws_protocol.WsClient} WsClient instance
         */
        WsClient.create = function create(properties) {
            return new WsClient(properties);
        };

        /**
         * Encodes the specified WsClient message. Does not implicitly {@link ws_protocol.WsClient.verify|verify} messages.
         * @function encode
         * @memberof ws_protocol.WsClient
         * @static
         * @param {ws_protocol.IWsClient} message WsClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.setName != null && Object.hasOwnProperty.call(message, "setName"))
                $root.ws_protocol.WsClient.SetName.encode(message.setName, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.setCursor != null && Object.hasOwnProperty.call(message, "setCursor"))
                $root.ws_protocol.WsClient.SetCursor.encode(message.setCursor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.setFocus != null && Object.hasOwnProperty.call(message, "setFocus"))
                $root.ws_protocol.WsClient.SetFocus.encode(message.setFocus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.create != null && Object.hasOwnProperty.call(message, "create"))
                $root.ws_protocol.WsClient.Create.encode(message.create, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.close != null && Object.hasOwnProperty.call(message, "close"))
                $root.ws_protocol.WsClient.Close.encode(message.close, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.move != null && Object.hasOwnProperty.call(message, "move"))
                $root.ws_protocol.WsClient.Move.encode(message.move, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.ws_protocol.WsClient.Data.encode(message.data, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.subscribe != null && Object.hasOwnProperty.call(message, "subscribe"))
                $root.ws_protocol.WsClient.Subscribe.encode(message.subscribe, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
                $root.ws_protocol.WsClient.Ping.encode(message.ping, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.chatMessage != null && Object.hasOwnProperty.call(message, "chatMessage"))
                $root.ws_protocol.WsClient.ChatMessage.encode(message.chatMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsClient message, length delimited. Does not implicitly {@link ws_protocol.WsClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws_protocol.WsClient
         * @static
         * @param {ws_protocol.IWsClient} message WsClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsClient message from the specified reader or buffer.
         * @function decode
         * @memberof ws_protocol.WsClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws_protocol.WsClient} WsClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsClient.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.setName = $root.ws_protocol.WsClient.SetName.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.setCursor = $root.ws_protocol.WsClient.SetCursor.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.setFocus = $root.ws_protocol.WsClient.SetFocus.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.create = $root.ws_protocol.WsClient.Create.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.close = $root.ws_protocol.WsClient.Close.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.move = $root.ws_protocol.WsClient.Move.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.data = $root.ws_protocol.WsClient.Data.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.subscribe = $root.ws_protocol.WsClient.Subscribe.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.ping = $root.ws_protocol.WsClient.Ping.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.chatMessage = $root.ws_protocol.WsClient.ChatMessage.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws_protocol.WsClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws_protocol.WsClient} WsClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsClient message.
         * @function verify
         * @memberof ws_protocol.WsClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.setName != null && message.hasOwnProperty("setName")) {
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.SetName.verify(message.setName);
                    if (error)
                        return "setName." + error;
                }
            }
            if (message.setCursor != null && message.hasOwnProperty("setCursor")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.SetCursor.verify(message.setCursor);
                    if (error)
                        return "setCursor." + error;
                }
            }
            if (message.setFocus != null && message.hasOwnProperty("setFocus")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.SetFocus.verify(message.setFocus);
                    if (error)
                        return "setFocus." + error;
                }
            }
            if (message.create != null && message.hasOwnProperty("create")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.Create.verify(message.create);
                    if (error)
                        return "create." + error;
                }
            }
            if (message.close != null && message.hasOwnProperty("close")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.Close.verify(message.close);
                    if (error)
                        return "close." + error;
                }
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.Move.verify(message.move);
                    if (error)
                        return "move." + error;
                }
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.Data.verify(message.data);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.subscribe != null && message.hasOwnProperty("subscribe")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.Subscribe.verify(message.subscribe);
                    if (error)
                        return "subscribe." + error;
                }
            }
            if (message.ping != null && message.hasOwnProperty("ping")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.Ping.verify(message.ping);
                    if (error)
                        return "ping." + error;
                }
            }
            if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                if (properties.clientMessage === 1)
                    return "clientMessage: multiple values";
                properties.clientMessage = 1;
                {
                    let error = $root.ws_protocol.WsClient.ChatMessage.verify(message.chatMessage);
                    if (error)
                        return "chatMessage." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WsClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws_protocol.WsClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws_protocol.WsClient} WsClient
         */
        WsClient.fromObject = function fromObject(object) {
            if (object instanceof $root.ws_protocol.WsClient)
                return object;
            let message = new $root.ws_protocol.WsClient();
            if (object.setName != null) {
                if (typeof object.setName !== "object")
                    throw TypeError(".ws_protocol.WsClient.setName: object expected");
                message.setName = $root.ws_protocol.WsClient.SetName.fromObject(object.setName);
            }
            if (object.setCursor != null) {
                if (typeof object.setCursor !== "object")
                    throw TypeError(".ws_protocol.WsClient.setCursor: object expected");
                message.setCursor = $root.ws_protocol.WsClient.SetCursor.fromObject(object.setCursor);
            }
            if (object.setFocus != null) {
                if (typeof object.setFocus !== "object")
                    throw TypeError(".ws_protocol.WsClient.setFocus: object expected");
                message.setFocus = $root.ws_protocol.WsClient.SetFocus.fromObject(object.setFocus);
            }
            if (object.create != null) {
                if (typeof object.create !== "object")
                    throw TypeError(".ws_protocol.WsClient.create: object expected");
                message.create = $root.ws_protocol.WsClient.Create.fromObject(object.create);
            }
            if (object.close != null) {
                if (typeof object.close !== "object")
                    throw TypeError(".ws_protocol.WsClient.close: object expected");
                message.close = $root.ws_protocol.WsClient.Close.fromObject(object.close);
            }
            if (object.move != null) {
                if (typeof object.move !== "object")
                    throw TypeError(".ws_protocol.WsClient.move: object expected");
                message.move = $root.ws_protocol.WsClient.Move.fromObject(object.move);
            }
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".ws_protocol.WsClient.data: object expected");
                message.data = $root.ws_protocol.WsClient.Data.fromObject(object.data);
            }
            if (object.subscribe != null) {
                if (typeof object.subscribe !== "object")
                    throw TypeError(".ws_protocol.WsClient.subscribe: object expected");
                message.subscribe = $root.ws_protocol.WsClient.Subscribe.fromObject(object.subscribe);
            }
            if (object.ping != null) {
                if (typeof object.ping !== "object")
                    throw TypeError(".ws_protocol.WsClient.ping: object expected");
                message.ping = $root.ws_protocol.WsClient.Ping.fromObject(object.ping);
            }
            if (object.chatMessage != null) {
                if (typeof object.chatMessage !== "object")
                    throw TypeError(".ws_protocol.WsClient.chatMessage: object expected");
                message.chatMessage = $root.ws_protocol.WsClient.ChatMessage.fromObject(object.chatMessage);
            }
            return message;
        };

        /**
         * Creates a plain object from a WsClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws_protocol.WsClient
         * @static
         * @param {ws_protocol.WsClient} message WsClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.setName != null && message.hasOwnProperty("setName")) {
                object.setName = $root.ws_protocol.WsClient.SetName.toObject(message.setName, options);
                if (options.oneofs)
                    object.clientMessage = "setName";
            }
            if (message.setCursor != null && message.hasOwnProperty("setCursor")) {
                object.setCursor = $root.ws_protocol.WsClient.SetCursor.toObject(message.setCursor, options);
                if (options.oneofs)
                    object.clientMessage = "setCursor";
            }
            if (message.setFocus != null && message.hasOwnProperty("setFocus")) {
                object.setFocus = $root.ws_protocol.WsClient.SetFocus.toObject(message.setFocus, options);
                if (options.oneofs)
                    object.clientMessage = "setFocus";
            }
            if (message.create != null && message.hasOwnProperty("create")) {
                object.create = $root.ws_protocol.WsClient.Create.toObject(message.create, options);
                if (options.oneofs)
                    object.clientMessage = "create";
            }
            if (message.close != null && message.hasOwnProperty("close")) {
                object.close = $root.ws_protocol.WsClient.Close.toObject(message.close, options);
                if (options.oneofs)
                    object.clientMessage = "close";
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                object.move = $root.ws_protocol.WsClient.Move.toObject(message.move, options);
                if (options.oneofs)
                    object.clientMessage = "move";
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                object.data = $root.ws_protocol.WsClient.Data.toObject(message.data, options);
                if (options.oneofs)
                    object.clientMessage = "data";
            }
            if (message.subscribe != null && message.hasOwnProperty("subscribe")) {
                object.subscribe = $root.ws_protocol.WsClient.Subscribe.toObject(message.subscribe, options);
                if (options.oneofs)
                    object.clientMessage = "subscribe";
            }
            if (message.ping != null && message.hasOwnProperty("ping")) {
                object.ping = $root.ws_protocol.WsClient.Ping.toObject(message.ping, options);
                if (options.oneofs)
                    object.clientMessage = "ping";
            }
            if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                object.chatMessage = $root.ws_protocol.WsClient.ChatMessage.toObject(message.chatMessage, options);
                if (options.oneofs)
                    object.clientMessage = "chatMessage";
            }
            return object;
        };

        /**
         * Converts this WsClient to JSON.
         * @function toJSON
         * @memberof ws_protocol.WsClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WsClient
         * @function getTypeUrl
         * @memberof ws_protocol.WsClient
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsClient.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws_protocol.WsClient";
        };

        WsClient.SetName = (function() {

            /**
             * Properties of a SetName.
             * @memberof ws_protocol.WsClient
             * @interface ISetName
             * @property {string|null} [name] SetName name
             */

            /**
             * Constructs a new SetName.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a SetName.
             * @implements ISetName
             * @constructor
             * @param {ws_protocol.WsClient.ISetName=} [properties] Properties to set
             */
            function SetName(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetName name.
             * @member {string} name
             * @memberof ws_protocol.WsClient.SetName
             * @instance
             */
            SetName.prototype.name = "";

            /**
             * Creates a new SetName instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {ws_protocol.WsClient.ISetName=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.SetName} SetName instance
             */
            SetName.create = function create(properties) {
                return new SetName(properties);
            };

            /**
             * Encodes the specified SetName message. Does not implicitly {@link ws_protocol.WsClient.SetName.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {ws_protocol.WsClient.ISetName} message SetName message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetName.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified SetName message, length delimited. Does not implicitly {@link ws_protocol.WsClient.SetName.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {ws_protocol.WsClient.ISetName} message SetName message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetName.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetName message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.SetName} SetName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetName.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.SetName();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SetName message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.SetName} SetName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetName.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetName message.
             * @function verify
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetName.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a SetName message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.SetName} SetName
             */
            SetName.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.SetName)
                    return object;
                let message = new $root.ws_protocol.WsClient.SetName();
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a SetName message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {ws_protocol.WsClient.SetName} message SetName
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetName.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this SetName to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.SetName
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetName.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetName
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.SetName
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.SetName";
            };

            return SetName;
        })();

        WsClient.SetCursor = (function() {

            /**
             * Properties of a SetCursor.
             * @memberof ws_protocol.WsClient
             * @interface ISetCursor
             * @property {ws_protocol.IWsCursor|null} [cursor] SetCursor cursor
             */

            /**
             * Constructs a new SetCursor.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a SetCursor.
             * @implements ISetCursor
             * @constructor
             * @param {ws_protocol.WsClient.ISetCursor=} [properties] Properties to set
             */
            function SetCursor(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetCursor cursor.
             * @member {ws_protocol.IWsCursor|null|undefined} cursor
             * @memberof ws_protocol.WsClient.SetCursor
             * @instance
             */
            SetCursor.prototype.cursor = null;

            /**
             * Creates a new SetCursor instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {ws_protocol.WsClient.ISetCursor=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.SetCursor} SetCursor instance
             */
            SetCursor.create = function create(properties) {
                return new SetCursor(properties);
            };

            /**
             * Encodes the specified SetCursor message. Does not implicitly {@link ws_protocol.WsClient.SetCursor.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {ws_protocol.WsClient.ISetCursor} message SetCursor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetCursor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
                    $root.ws_protocol.WsCursor.encode(message.cursor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SetCursor message, length delimited. Does not implicitly {@link ws_protocol.WsClient.SetCursor.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {ws_protocol.WsClient.ISetCursor} message SetCursor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetCursor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetCursor message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.SetCursor} SetCursor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetCursor.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.SetCursor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.cursor = $root.ws_protocol.WsCursor.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SetCursor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.SetCursor} SetCursor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetCursor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetCursor message.
             * @function verify
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetCursor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cursor != null && message.hasOwnProperty("cursor")) {
                    let error = $root.ws_protocol.WsCursor.verify(message.cursor);
                    if (error)
                        return "cursor." + error;
                }
                return null;
            };

            /**
             * Creates a SetCursor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.SetCursor} SetCursor
             */
            SetCursor.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.SetCursor)
                    return object;
                let message = new $root.ws_protocol.WsClient.SetCursor();
                if (object.cursor != null) {
                    if (typeof object.cursor !== "object")
                        throw TypeError(".ws_protocol.WsClient.SetCursor.cursor: object expected");
                    message.cursor = $root.ws_protocol.WsCursor.fromObject(object.cursor);
                }
                return message;
            };

            /**
             * Creates a plain object from a SetCursor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {ws_protocol.WsClient.SetCursor} message SetCursor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetCursor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.cursor = null;
                if (message.cursor != null && message.hasOwnProperty("cursor"))
                    object.cursor = $root.ws_protocol.WsCursor.toObject(message.cursor, options);
                return object;
            };

            /**
             * Converts this SetCursor to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.SetCursor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetCursor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetCursor
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.SetCursor
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetCursor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.SetCursor";
            };

            return SetCursor;
        })();

        WsClient.SetFocus = (function() {

            /**
             * Properties of a SetFocus.
             * @memberof ws_protocol.WsClient
             * @interface ISetFocus
             * @property {number|null} [shellId] SetFocus shellId
             */

            /**
             * Constructs a new SetFocus.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a SetFocus.
             * @implements ISetFocus
             * @constructor
             * @param {ws_protocol.WsClient.ISetFocus=} [properties] Properties to set
             */
            function SetFocus(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetFocus shellId.
             * @member {number} shellId
             * @memberof ws_protocol.WsClient.SetFocus
             * @instance
             */
            SetFocus.prototype.shellId = 0;

            /**
             * Creates a new SetFocus instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {ws_protocol.WsClient.ISetFocus=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.SetFocus} SetFocus instance
             */
            SetFocus.create = function create(properties) {
                return new SetFocus(properties);
            };

            /**
             * Encodes the specified SetFocus message. Does not implicitly {@link ws_protocol.WsClient.SetFocus.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {ws_protocol.WsClient.ISetFocus} message SetFocus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetFocus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shellId != null && Object.hasOwnProperty.call(message, "shellId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shellId);
                return writer;
            };

            /**
             * Encodes the specified SetFocus message, length delimited. Does not implicitly {@link ws_protocol.WsClient.SetFocus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {ws_protocol.WsClient.ISetFocus} message SetFocus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetFocus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetFocus message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.SetFocus} SetFocus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetFocus.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.SetFocus();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shellId = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SetFocus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.SetFocus} SetFocus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetFocus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetFocus message.
             * @function verify
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetFocus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shellId != null && message.hasOwnProperty("shellId"))
                    if (!$util.isInteger(message.shellId))
                        return "shellId: integer expected";
                return null;
            };

            /**
             * Creates a SetFocus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.SetFocus} SetFocus
             */
            SetFocus.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.SetFocus)
                    return object;
                let message = new $root.ws_protocol.WsClient.SetFocus();
                if (object.shellId != null)
                    message.shellId = object.shellId | 0;
                return message;
            };

            /**
             * Creates a plain object from a SetFocus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {ws_protocol.WsClient.SetFocus} message SetFocus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetFocus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.shellId = 0;
                if (message.shellId != null && message.hasOwnProperty("shellId"))
                    object.shellId = message.shellId;
                return object;
            };

            /**
             * Converts this SetFocus to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.SetFocus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetFocus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetFocus
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.SetFocus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetFocus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.SetFocus";
            };

            return SetFocus;
        })();

        WsClient.Create = (function() {

            /**
             * Properties of a Create.
             * @memberof ws_protocol.WsClient
             * @interface ICreate
             * @property {number|null} [x] Create x
             * @property {number|null} [y] Create y
             * @property {string|null} [shellInfo] Create shellInfo
             */

            /**
             * Constructs a new Create.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a Create.
             * @implements ICreate
             * @constructor
             * @param {ws_protocol.WsClient.ICreate=} [properties] Properties to set
             */
            function Create(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Create x.
             * @member {number} x
             * @memberof ws_protocol.WsClient.Create
             * @instance
             */
            Create.prototype.x = 0;

            /**
             * Create y.
             * @member {number} y
             * @memberof ws_protocol.WsClient.Create
             * @instance
             */
            Create.prototype.y = 0;

            /**
             * Create shellInfo.
             * @member {string} shellInfo
             * @memberof ws_protocol.WsClient.Create
             * @instance
             */
            Create.prototype.shellInfo = "";

            /**
             * Creates a new Create instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {ws_protocol.WsClient.ICreate=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.Create} Create instance
             */
            Create.create = function create(properties) {
                return new Create(properties);
            };

            /**
             * Encodes the specified Create message. Does not implicitly {@link ws_protocol.WsClient.Create.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {ws_protocol.WsClient.ICreate} message Create message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Create.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
                if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
                if (message.shellInfo != null && Object.hasOwnProperty.call(message, "shellInfo"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.shellInfo);
                return writer;
            };

            /**
             * Encodes the specified Create message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Create.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {ws_protocol.WsClient.ICreate} message Create message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Create.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Create message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.Create} Create
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Create.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.Create();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.x = reader.int32();
                            break;
                        }
                    case 2: {
                            message.y = reader.int32();
                            break;
                        }
                    case 3: {
                            message.shellInfo = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Create message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.Create} Create
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Create.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Create message.
             * @function verify
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Create.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x))
                        return "x: integer expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y))
                        return "y: integer expected";
                if (message.shellInfo != null && message.hasOwnProperty("shellInfo"))
                    if (!$util.isString(message.shellInfo))
                        return "shellInfo: string expected";
                return null;
            };

            /**
             * Creates a Create message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.Create} Create
             */
            Create.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.Create)
                    return object;
                let message = new $root.ws_protocol.WsClient.Create();
                if (object.x != null)
                    message.x = object.x | 0;
                if (object.y != null)
                    message.y = object.y | 0;
                if (object.shellInfo != null)
                    message.shellInfo = String(object.shellInfo);
                return message;
            };

            /**
             * Creates a plain object from a Create message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {ws_protocol.WsClient.Create} message Create
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Create.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.shellInfo = "";
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = message.y;
                if (message.shellInfo != null && message.hasOwnProperty("shellInfo"))
                    object.shellInfo = message.shellInfo;
                return object;
            };

            /**
             * Converts this Create to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.Create
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Create.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Create
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.Create
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Create.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.Create";
            };

            return Create;
        })();

        WsClient.Close = (function() {

            /**
             * Properties of a Close.
             * @memberof ws_protocol.WsClient
             * @interface IClose
             * @property {number|null} [shell] Close shell
             */

            /**
             * Constructs a new Close.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a Close.
             * @implements IClose
             * @constructor
             * @param {ws_protocol.WsClient.IClose=} [properties] Properties to set
             */
            function Close(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Close shell.
             * @member {number} shell
             * @memberof ws_protocol.WsClient.Close
             * @instance
             */
            Close.prototype.shell = 0;

            /**
             * Creates a new Close instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {ws_protocol.WsClient.IClose=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.Close} Close instance
             */
            Close.create = function create(properties) {
                return new Close(properties);
            };

            /**
             * Encodes the specified Close message. Does not implicitly {@link ws_protocol.WsClient.Close.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {ws_protocol.WsClient.IClose} message Close message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Close.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shell != null && Object.hasOwnProperty.call(message, "shell"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shell);
                return writer;
            };

            /**
             * Encodes the specified Close message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Close.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {ws_protocol.WsClient.IClose} message Close message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Close.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Close message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.Close} Close
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Close.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.Close();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shell = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Close message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.Close} Close
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Close.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Close message.
             * @function verify
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Close.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shell != null && message.hasOwnProperty("shell"))
                    if (!$util.isInteger(message.shell))
                        return "shell: integer expected";
                return null;
            };

            /**
             * Creates a Close message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.Close} Close
             */
            Close.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.Close)
                    return object;
                let message = new $root.ws_protocol.WsClient.Close();
                if (object.shell != null)
                    message.shell = object.shell | 0;
                return message;
            };

            /**
             * Creates a plain object from a Close message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {ws_protocol.WsClient.Close} message Close
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Close.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.shell = 0;
                if (message.shell != null && message.hasOwnProperty("shell"))
                    object.shell = message.shell;
                return object;
            };

            /**
             * Converts this Close to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.Close
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Close.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Close
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.Close
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Close.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.Close";
            };

            return Close;
        })();

        WsClient.Move = (function() {

            /**
             * Properties of a Move.
             * @memberof ws_protocol.WsClient
             * @interface IMove
             * @property {number|null} [shell] Move shell
             * @property {ws_protocol.IWsWinsize|null} [size] Move size
             */

            /**
             * Constructs a new Move.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a Move.
             * @implements IMove
             * @constructor
             * @param {ws_protocol.WsClient.IMove=} [properties] Properties to set
             */
            function Move(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Move shell.
             * @member {number} shell
             * @memberof ws_protocol.WsClient.Move
             * @instance
             */
            Move.prototype.shell = 0;

            /**
             * Move size.
             * @member {ws_protocol.IWsWinsize|null|undefined} size
             * @memberof ws_protocol.WsClient.Move
             * @instance
             */
            Move.prototype.size = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Move.prototype, "_size", {
                get: $util.oneOfGetter($oneOfFields = ["size"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Move instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {ws_protocol.WsClient.IMove=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.Move} Move instance
             */
            Move.create = function create(properties) {
                return new Move(properties);
            };

            /**
             * Encodes the specified Move message. Does not implicitly {@link ws_protocol.WsClient.Move.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {ws_protocol.WsClient.IMove} message Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Move.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shell != null && Object.hasOwnProperty.call(message, "shell"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shell);
                if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                    $root.ws_protocol.WsWinsize.encode(message.size, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Move message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Move.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {ws_protocol.WsClient.IMove} message Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Move.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Move message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.Move} Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Move.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.Move();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shell = reader.int32();
                            break;
                        }
                    case 2: {
                            message.size = $root.ws_protocol.WsWinsize.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Move message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.Move} Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Move.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Move message.
             * @function verify
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Move.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.shell != null && message.hasOwnProperty("shell"))
                    if (!$util.isInteger(message.shell))
                        return "shell: integer expected";
                if (message.size != null && message.hasOwnProperty("size")) {
                    properties._size = 1;
                    {
                        let error = $root.ws_protocol.WsWinsize.verify(message.size);
                        if (error)
                            return "size." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Move message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.Move} Move
             */
            Move.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.Move)
                    return object;
                let message = new $root.ws_protocol.WsClient.Move();
                if (object.shell != null)
                    message.shell = object.shell | 0;
                if (object.size != null) {
                    if (typeof object.size !== "object")
                        throw TypeError(".ws_protocol.WsClient.Move.size: object expected");
                    message.size = $root.ws_protocol.WsWinsize.fromObject(object.size);
                }
                return message;
            };

            /**
             * Creates a plain object from a Move message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {ws_protocol.WsClient.Move} message Move
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Move.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.shell = 0;
                if (message.shell != null && message.hasOwnProperty("shell"))
                    object.shell = message.shell;
                if (message.size != null && message.hasOwnProperty("size")) {
                    object.size = $root.ws_protocol.WsWinsize.toObject(message.size, options);
                    if (options.oneofs)
                        object._size = "size";
                }
                return object;
            };

            /**
             * Converts this Move to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.Move
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Move.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Move
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.Move
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Move.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.Move";
            };

            return Move;
        })();

        WsClient.Data = (function() {

            /**
             * Properties of a Data.
             * @memberof ws_protocol.WsClient
             * @interface IData
             * @property {number|null} [shell] Data shell
             * @property {Uint8Array|null} [data] Data data
             * @property {number|null} [offset] Data offset
             */

            /**
             * Constructs a new Data.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a Data.
             * @implements IData
             * @constructor
             * @param {ws_protocol.WsClient.IData=} [properties] Properties to set
             */
            function Data(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Data shell.
             * @member {number} shell
             * @memberof ws_protocol.WsClient.Data
             * @instance
             */
            Data.prototype.shell = 0;

            /**
             * Data data.
             * @member {Uint8Array} data
             * @memberof ws_protocol.WsClient.Data
             * @instance
             */
            Data.prototype.data = $util.newBuffer([]);

            /**
             * Data offset.
             * @member {number} offset
             * @memberof ws_protocol.WsClient.Data
             * @instance
             */
            Data.prototype.offset = 0;

            /**
             * Creates a new Data instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {ws_protocol.WsClient.IData=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.Data} Data instance
             */
            Data.create = function create(properties) {
                return new Data(properties);
            };

            /**
             * Encodes the specified Data message. Does not implicitly {@link ws_protocol.WsClient.Data.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {ws_protocol.WsClient.IData} message Data message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Data.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shell != null && Object.hasOwnProperty.call(message, "shell"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shell);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.offset);
                return writer;
            };

            /**
             * Encodes the specified Data message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Data.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {ws_protocol.WsClient.IData} message Data message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Data.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.Data} Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Data.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.Data();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shell = reader.int32();
                            break;
                        }
                    case 2: {
                            message.data = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.offset = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Data message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.Data} Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Data.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Data message.
             * @function verify
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Data.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shell != null && message.hasOwnProperty("shell"))
                    if (!$util.isInteger(message.shell))
                        return "shell: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.offset != null && message.hasOwnProperty("offset"))
                    if (!$util.isInteger(message.offset))
                        return "offset: integer expected";
                return null;
            };

            /**
             * Creates a Data message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.Data} Data
             */
            Data.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.Data)
                    return object;
                let message = new $root.ws_protocol.WsClient.Data();
                if (object.shell != null)
                    message.shell = object.shell | 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                if (object.offset != null)
                    message.offset = object.offset | 0;
                return message;
            };

            /**
             * Creates a plain object from a Data message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {ws_protocol.WsClient.Data} message Data
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Data.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.shell = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    object.offset = 0;
                }
                if (message.shell != null && message.hasOwnProperty("shell"))
                    object.shell = message.shell;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.offset != null && message.hasOwnProperty("offset"))
                    object.offset = message.offset;
                return object;
            };

            /**
             * Converts this Data to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.Data
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Data.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Data
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.Data
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Data.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.Data";
            };

            return Data;
        })();

        WsClient.Subscribe = (function() {

            /**
             * Properties of a Subscribe.
             * @memberof ws_protocol.WsClient
             * @interface ISubscribe
             * @property {number|null} [shell] Subscribe shell
             * @property {number|null} [chunkNum] Subscribe chunkNum
             */

            /**
             * Constructs a new Subscribe.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a Subscribe.
             * @implements ISubscribe
             * @constructor
             * @param {ws_protocol.WsClient.ISubscribe=} [properties] Properties to set
             */
            function Subscribe(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Subscribe shell.
             * @member {number} shell
             * @memberof ws_protocol.WsClient.Subscribe
             * @instance
             */
            Subscribe.prototype.shell = 0;

            /**
             * Subscribe chunkNum.
             * @member {number} chunkNum
             * @memberof ws_protocol.WsClient.Subscribe
             * @instance
             */
            Subscribe.prototype.chunkNum = 0;

            /**
             * Creates a new Subscribe instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {ws_protocol.WsClient.ISubscribe=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.Subscribe} Subscribe instance
             */
            Subscribe.create = function create(properties) {
                return new Subscribe(properties);
            };

            /**
             * Encodes the specified Subscribe message. Does not implicitly {@link ws_protocol.WsClient.Subscribe.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {ws_protocol.WsClient.ISubscribe} message Subscribe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Subscribe.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.shell != null && Object.hasOwnProperty.call(message, "shell"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shell);
                if (message.chunkNum != null && Object.hasOwnProperty.call(message, "chunkNum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chunkNum);
                return writer;
            };

            /**
             * Encodes the specified Subscribe message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Subscribe.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {ws_protocol.WsClient.ISubscribe} message Subscribe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Subscribe.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Subscribe message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.Subscribe} Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Subscribe.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.Subscribe();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shell = reader.int32();
                            break;
                        }
                    case 2: {
                            message.chunkNum = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Subscribe message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.Subscribe} Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Subscribe.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Subscribe message.
             * @function verify
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Subscribe.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shell != null && message.hasOwnProperty("shell"))
                    if (!$util.isInteger(message.shell))
                        return "shell: integer expected";
                if (message.chunkNum != null && message.hasOwnProperty("chunkNum"))
                    if (!$util.isInteger(message.chunkNum))
                        return "chunkNum: integer expected";
                return null;
            };

            /**
             * Creates a Subscribe message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.Subscribe} Subscribe
             */
            Subscribe.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.Subscribe)
                    return object;
                let message = new $root.ws_protocol.WsClient.Subscribe();
                if (object.shell != null)
                    message.shell = object.shell | 0;
                if (object.chunkNum != null)
                    message.chunkNum = object.chunkNum | 0;
                return message;
            };

            /**
             * Creates a plain object from a Subscribe message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {ws_protocol.WsClient.Subscribe} message Subscribe
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Subscribe.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.shell = 0;
                    object.chunkNum = 0;
                }
                if (message.shell != null && message.hasOwnProperty("shell"))
                    object.shell = message.shell;
                if (message.chunkNum != null && message.hasOwnProperty("chunkNum"))
                    object.chunkNum = message.chunkNum;
                return object;
            };

            /**
             * Converts this Subscribe to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.Subscribe
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Subscribe.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Subscribe
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.Subscribe
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Subscribe.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.Subscribe";
            };

            return Subscribe;
        })();

        WsClient.Ping = (function() {

            /**
             * Properties of a Ping.
             * @memberof ws_protocol.WsClient
             * @interface IPing
             * @property {number|Long|null} [timestamp] Ping timestamp
             */

            /**
             * Constructs a new Ping.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a Ping.
             * @implements IPing
             * @constructor
             * @param {ws_protocol.WsClient.IPing=} [properties] Properties to set
             */
            function Ping(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Ping timestamp.
             * @member {number|Long} timestamp
             * @memberof ws_protocol.WsClient.Ping
             * @instance
             */
            Ping.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Ping instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {ws_protocol.WsClient.IPing=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.Ping} Ping instance
             */
            Ping.create = function create(properties) {
                return new Ping(properties);
            };

            /**
             * Encodes the specified Ping message. Does not implicitly {@link ws_protocol.WsClient.Ping.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {ws_protocol.WsClient.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link ws_protocol.WsClient.Ping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {ws_protocol.WsClient.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.Ping();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Ping message.
             * @function verify
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.Ping} Ping
             */
            Ping.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.Ping)
                    return object;
                let message = new $root.ws_protocol.WsClient.Ping();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {ws_protocol.WsClient.Ping} message Ping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                return object;
            };

            /**
             * Converts this Ping to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.Ping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Ping
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.Ping
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.Ping";
            };

            return Ping;
        })();

        WsClient.ChatMessage = (function() {

            /**
             * Properties of a ChatMessage.
             * @memberof ws_protocol.WsClient
             * @interface IChatMessage
             * @property {string|null} [message] ChatMessage message
             */

            /**
             * Constructs a new ChatMessage.
             * @memberof ws_protocol.WsClient
             * @classdesc Represents a ChatMessage.
             * @implements IChatMessage
             * @constructor
             * @param {ws_protocol.WsClient.IChatMessage=} [properties] Properties to set
             */
            function ChatMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatMessage message.
             * @member {string} message
             * @memberof ws_protocol.WsClient.ChatMessage
             * @instance
             */
            ChatMessage.prototype.message = "";

            /**
             * Creates a new ChatMessage instance using the specified properties.
             * @function create
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {ws_protocol.WsClient.IChatMessage=} [properties] Properties to set
             * @returns {ws_protocol.WsClient.ChatMessage} ChatMessage instance
             */
            ChatMessage.create = function create(properties) {
                return new ChatMessage(properties);
            };

            /**
             * Encodes the specified ChatMessage message. Does not implicitly {@link ws_protocol.WsClient.ChatMessage.verify|verify} messages.
             * @function encode
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {ws_protocol.WsClient.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ws_protocol.WsClient.ChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {ws_protocol.WsClient.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws_protocol.WsClient.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws_protocol.WsClient.ChatMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws_protocol.WsClient.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatMessage message.
             * @function verify
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws_protocol.WsClient.ChatMessage} ChatMessage
             */
            ChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.ws_protocol.WsClient.ChatMessage)
                    return object;
                let message = new $root.ws_protocol.WsClient.ChatMessage();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {ws_protocol.WsClient.ChatMessage} message ChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ChatMessage to JSON.
             * @function toJSON
             * @memberof ws_protocol.WsClient.ChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChatMessage
             * @function getTypeUrl
             * @memberof ws_protocol.WsClient.ChatMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws_protocol.WsClient.ChatMessage";
            };

            return ChatMessage;
        })();

        return WsClient;
    })();

    return ws_protocol;
})();

export { $root as default };

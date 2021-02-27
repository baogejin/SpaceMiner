/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * MSGID enum.
 * @exports MSGID
 * @enum {number}
 * @property {number} REQ_LOGIN=1 REQ_LOGIN value
 * @property {number} RSP_LOGIN=2 RSP_LOGIN value
 * @property {number} REQ_GAME_CHAT=3 REQ_GAME_CHAT value
 * @property {number} INF_GAME_CHAT=4 INF_GAME_CHAT value
 * @property {number} REQ_MATCH=5 REQ_MATCH value
 * @property {number} RSP_MATCH=6 RSP_MATCH value
 * @property {number} INF_MATCH_SUCCESS=7 INF_MATCH_SUCCESS value
 * @property {number} REQ_START_GAME=8 REQ_START_GAME value
 * @property {number} INF_GAME_START=9 INF_GAME_START value
 * @property {number} INF_PLAYER_POSITION=10 INF_PLAYER_POSITION value
 * @property {number} INF_PLAYER_TURN=11 INF_PLAYER_TURN value
 * @property {number} REQ_SHIP_UPGRADE=12 REQ_SHIP_UPGRADE value
 * @property {number} INF_SHIP_UPGRADE=13 INF_SHIP_UPGRADE value
 * @property {number} REQ_SHIP_OPT=14 REQ_SHIP_OPT value
 * @property {number} INF_SHIP_OPT=15 INF_SHIP_OPT value
 * @property {number} INF_GAME_END=16 INF_GAME_END value
 * @property {number} REQ_END_TURN=17 REQ_END_TURN value
 */
$root.MSGID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "REQ_LOGIN"] = 1;
    values[valuesById[2] = "RSP_LOGIN"] = 2;
    values[valuesById[3] = "REQ_GAME_CHAT"] = 3;
    values[valuesById[4] = "INF_GAME_CHAT"] = 4;
    values[valuesById[5] = "REQ_MATCH"] = 5;
    values[valuesById[6] = "RSP_MATCH"] = 6;
    values[valuesById[7] = "INF_MATCH_SUCCESS"] = 7;
    values[valuesById[8] = "REQ_START_GAME"] = 8;
    values[valuesById[9] = "INF_GAME_START"] = 9;
    values[valuesById[10] = "INF_PLAYER_POSITION"] = 10;
    values[valuesById[11] = "INF_PLAYER_TURN"] = 11;
    values[valuesById[12] = "REQ_SHIP_UPGRADE"] = 12;
    values[valuesById[13] = "INF_SHIP_UPGRADE"] = 13;
    values[valuesById[14] = "REQ_SHIP_OPT"] = 14;
    values[valuesById[15] = "INF_SHIP_OPT"] = 15;
    values[valuesById[16] = "INF_GAME_END"] = 16;
    values[valuesById[17] = "REQ_END_TURN"] = 17;
    return values;
})();

/**
 * RESULTID enum.
 * @exports RESULTID
 * @enum {number}
 * @property {number} SUCCESS=0 SUCCESS value
 */
$root.RESULTID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SUCCESS"] = 0;
    return values;
})();

$root.ReqLogin = (function() {

    /**
     * Properties of a ReqLogin.
     * @exports IReqLogin
     * @interface IReqLogin
     */

    /**
     * Constructs a new ReqLogin.
     * @exports ReqLogin
     * @classdesc Represents a ReqLogin.
     * @implements IReqLogin
     * @constructor
     * @param {IReqLogin=} [p] Properties to set
     */
    function ReqLogin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReqLogin instance using the specified properties.
     * @function create
     * @memberof ReqLogin
     * @static
     * @param {IReqLogin=} [properties] Properties to set
     * @returns {ReqLogin} ReqLogin instance
     */
    ReqLogin.create = function create(properties) {
        return new ReqLogin(properties);
    };

    /**
     * Encodes the specified ReqLogin message. Does not implicitly {@link ReqLogin.verify|verify} messages.
     * @function encode
     * @memberof ReqLogin
     * @static
     * @param {IReqLogin} m ReqLogin message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqLogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReqLogin message from the specified reader or buffer.
     * @function decode
     * @memberof ReqLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqLogin} ReqLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqLogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqLogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqLogin;
})();

$root.RspLogin = (function() {

    /**
     * Properties of a RspLogin.
     * @exports IRspLogin
     * @interface IRspLogin
     * @property {RESULTID|null} [result] RspLogin result
     * @property {number|null} [uin] RspLogin uin
     */

    /**
     * Constructs a new RspLogin.
     * @exports RspLogin
     * @classdesc Represents a RspLogin.
     * @implements IRspLogin
     * @constructor
     * @param {IRspLogin=} [p] Properties to set
     */
    function RspLogin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RspLogin result.
     * @member {RESULTID} result
     * @memberof RspLogin
     * @instance
     */
    RspLogin.prototype.result = 0;

    /**
     * RspLogin uin.
     * @member {number} uin
     * @memberof RspLogin
     * @instance
     */
    RspLogin.prototype.uin = 0;

    /**
     * Creates a new RspLogin instance using the specified properties.
     * @function create
     * @memberof RspLogin
     * @static
     * @param {IRspLogin=} [properties] Properties to set
     * @returns {RspLogin} RspLogin instance
     */
    RspLogin.create = function create(properties) {
        return new RspLogin(properties);
    };

    /**
     * Encodes the specified RspLogin message. Does not implicitly {@link RspLogin.verify|verify} messages.
     * @function encode
     * @memberof RspLogin
     * @static
     * @param {IRspLogin} m RspLogin message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspLogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            w.uint32(8).int32(m.result);
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(16).int32(m.uin);
        return w;
    };

    /**
     * Decodes a RspLogin message from the specified reader or buffer.
     * @function decode
     * @memberof RspLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RspLogin} RspLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspLogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RspLogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.int32();
                break;
            case 2:
                m.uin = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RspLogin;
})();

$root.ReqGameChat = (function() {

    /**
     * Properties of a ReqGameChat.
     * @exports IReqGameChat
     * @interface IReqGameChat
     * @property {string|null} [msg] ReqGameChat msg
     */

    /**
     * Constructs a new ReqGameChat.
     * @exports ReqGameChat
     * @classdesc Represents a ReqGameChat.
     * @implements IReqGameChat
     * @constructor
     * @param {IReqGameChat=} [p] Properties to set
     */
    function ReqGameChat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReqGameChat msg.
     * @member {string} msg
     * @memberof ReqGameChat
     * @instance
     */
    ReqGameChat.prototype.msg = "";

    /**
     * Creates a new ReqGameChat instance using the specified properties.
     * @function create
     * @memberof ReqGameChat
     * @static
     * @param {IReqGameChat=} [properties] Properties to set
     * @returns {ReqGameChat} ReqGameChat instance
     */
    ReqGameChat.create = function create(properties) {
        return new ReqGameChat(properties);
    };

    /**
     * Encodes the specified ReqGameChat message. Does not implicitly {@link ReqGameChat.verify|verify} messages.
     * @function encode
     * @memberof ReqGameChat
     * @static
     * @param {IReqGameChat} m ReqGameChat message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGameChat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
            w.uint32(10).string(m.msg);
        return w;
    };

    /**
     * Decodes a ReqGameChat message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGameChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqGameChat} ReqGameChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGameChat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqGameChat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.msg = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqGameChat;
})();

$root.InfGameChat = (function() {

    /**
     * Properties of an InfGameChat.
     * @exports IInfGameChat
     * @interface IInfGameChat
     * @property {number|null} [uin] InfGameChat uin
     * @property {string|null} [msg] InfGameChat msg
     */

    /**
     * Constructs a new InfGameChat.
     * @exports InfGameChat
     * @classdesc Represents an InfGameChat.
     * @implements IInfGameChat
     * @constructor
     * @param {IInfGameChat=} [p] Properties to set
     */
    function InfGameChat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfGameChat uin.
     * @member {number} uin
     * @memberof InfGameChat
     * @instance
     */
    InfGameChat.prototype.uin = 0;

    /**
     * InfGameChat msg.
     * @member {string} msg
     * @memberof InfGameChat
     * @instance
     */
    InfGameChat.prototype.msg = "";

    /**
     * Creates a new InfGameChat instance using the specified properties.
     * @function create
     * @memberof InfGameChat
     * @static
     * @param {IInfGameChat=} [properties] Properties to set
     * @returns {InfGameChat} InfGameChat instance
     */
    InfGameChat.create = function create(properties) {
        return new InfGameChat(properties);
    };

    /**
     * Encodes the specified InfGameChat message. Does not implicitly {@link InfGameChat.verify|verify} messages.
     * @function encode
     * @memberof InfGameChat
     * @static
     * @param {IInfGameChat} m InfGameChat message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfGameChat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(8).int32(m.uin);
        if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
            w.uint32(18).string(m.msg);
        return w;
    };

    /**
     * Decodes an InfGameChat message from the specified reader or buffer.
     * @function decode
     * @memberof InfGameChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfGameChat} InfGameChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfGameChat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfGameChat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uin = r.int32();
                break;
            case 2:
                m.msg = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfGameChat;
})();

$root.ReqMatch = (function() {

    /**
     * Properties of a ReqMatch.
     * @exports IReqMatch
     * @interface IReqMatch
     */

    /**
     * Constructs a new ReqMatch.
     * @exports ReqMatch
     * @classdesc Represents a ReqMatch.
     * @implements IReqMatch
     * @constructor
     * @param {IReqMatch=} [p] Properties to set
     */
    function ReqMatch(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReqMatch instance using the specified properties.
     * @function create
     * @memberof ReqMatch
     * @static
     * @param {IReqMatch=} [properties] Properties to set
     * @returns {ReqMatch} ReqMatch instance
     */
    ReqMatch.create = function create(properties) {
        return new ReqMatch(properties);
    };

    /**
     * Encodes the specified ReqMatch message. Does not implicitly {@link ReqMatch.verify|verify} messages.
     * @function encode
     * @memberof ReqMatch
     * @static
     * @param {IReqMatch} m ReqMatch message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMatch.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReqMatch message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqMatch} ReqMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMatch.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqMatch();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqMatch;
})();

$root.RspMatch = (function() {

    /**
     * Properties of a RspMatch.
     * @exports IRspMatch
     * @interface IRspMatch
     * @property {RESULTID|null} [result] RspMatch result
     */

    /**
     * Constructs a new RspMatch.
     * @exports RspMatch
     * @classdesc Represents a RspMatch.
     * @implements IRspMatch
     * @constructor
     * @param {IRspMatch=} [p] Properties to set
     */
    function RspMatch(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RspMatch result.
     * @member {RESULTID} result
     * @memberof RspMatch
     * @instance
     */
    RspMatch.prototype.result = 0;

    /**
     * Creates a new RspMatch instance using the specified properties.
     * @function create
     * @memberof RspMatch
     * @static
     * @param {IRspMatch=} [properties] Properties to set
     * @returns {RspMatch} RspMatch instance
     */
    RspMatch.create = function create(properties) {
        return new RspMatch(properties);
    };

    /**
     * Encodes the specified RspMatch message. Does not implicitly {@link RspMatch.verify|verify} messages.
     * @function encode
     * @memberof RspMatch
     * @static
     * @param {IRspMatch} m RspMatch message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspMatch.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            w.uint32(8).int32(m.result);
        return w;
    };

    /**
     * Decodes a RspMatch message from the specified reader or buffer.
     * @function decode
     * @memberof RspMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RspMatch} RspMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspMatch.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RspMatch();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RspMatch;
})();

$root.InfMatchSuccess = (function() {

    /**
     * Properties of an InfMatchSuccess.
     * @exports IInfMatchSuccess
     * @interface IInfMatchSuccess
     * @property {number|null} [uin] InfMatchSuccess uin
     */

    /**
     * Constructs a new InfMatchSuccess.
     * @exports InfMatchSuccess
     * @classdesc Represents an InfMatchSuccess.
     * @implements IInfMatchSuccess
     * @constructor
     * @param {IInfMatchSuccess=} [p] Properties to set
     */
    function InfMatchSuccess(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfMatchSuccess uin.
     * @member {number} uin
     * @memberof InfMatchSuccess
     * @instance
     */
    InfMatchSuccess.prototype.uin = 0;

    /**
     * Creates a new InfMatchSuccess instance using the specified properties.
     * @function create
     * @memberof InfMatchSuccess
     * @static
     * @param {IInfMatchSuccess=} [properties] Properties to set
     * @returns {InfMatchSuccess} InfMatchSuccess instance
     */
    InfMatchSuccess.create = function create(properties) {
        return new InfMatchSuccess(properties);
    };

    /**
     * Encodes the specified InfMatchSuccess message. Does not implicitly {@link InfMatchSuccess.verify|verify} messages.
     * @function encode
     * @memberof InfMatchSuccess
     * @static
     * @param {IInfMatchSuccess} m InfMatchSuccess message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfMatchSuccess.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(8).int32(m.uin);
        return w;
    };

    /**
     * Decodes an InfMatchSuccess message from the specified reader or buffer.
     * @function decode
     * @memberof InfMatchSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfMatchSuccess} InfMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfMatchSuccess.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfMatchSuccess();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uin = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfMatchSuccess;
})();

$root.ReqStartGame = (function() {

    /**
     * Properties of a ReqStartGame.
     * @exports IReqStartGame
     * @interface IReqStartGame
     */

    /**
     * Constructs a new ReqStartGame.
     * @exports ReqStartGame
     * @classdesc Represents a ReqStartGame.
     * @implements IReqStartGame
     * @constructor
     * @param {IReqStartGame=} [p] Properties to set
     */
    function ReqStartGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReqStartGame instance using the specified properties.
     * @function create
     * @memberof ReqStartGame
     * @static
     * @param {IReqStartGame=} [properties] Properties to set
     * @returns {ReqStartGame} ReqStartGame instance
     */
    ReqStartGame.create = function create(properties) {
        return new ReqStartGame(properties);
    };

    /**
     * Encodes the specified ReqStartGame message. Does not implicitly {@link ReqStartGame.verify|verify} messages.
     * @function encode
     * @memberof ReqStartGame
     * @static
     * @param {IReqStartGame} m ReqStartGame message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReqStartGame message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStartGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqStartGame} ReqStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqStartGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqStartGame;
})();

$root.InfGameStart = (function() {

    /**
     * Properties of an InfGameStart.
     * @exports IInfGameStart
     * @interface IInfGameStart
     * @property {Array.<number>|null} [arrRes] InfGameStart arrRes
     */

    /**
     * Constructs a new InfGameStart.
     * @exports InfGameStart
     * @classdesc Represents an InfGameStart.
     * @implements IInfGameStart
     * @constructor
     * @param {IInfGameStart=} [p] Properties to set
     */
    function InfGameStart(p) {
        this.arrRes = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfGameStart arrRes.
     * @member {Array.<number>} arrRes
     * @memberof InfGameStart
     * @instance
     */
    InfGameStart.prototype.arrRes = $util.emptyArray;

    /**
     * Creates a new InfGameStart instance using the specified properties.
     * @function create
     * @memberof InfGameStart
     * @static
     * @param {IInfGameStart=} [properties] Properties to set
     * @returns {InfGameStart} InfGameStart instance
     */
    InfGameStart.create = function create(properties) {
        return new InfGameStart(properties);
    };

    /**
     * Encodes the specified InfGameStart message. Does not implicitly {@link InfGameStart.verify|verify} messages.
     * @function encode
     * @memberof InfGameStart
     * @static
     * @param {IInfGameStart} m InfGameStart message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfGameStart.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.arrRes != null && m.arrRes.length) {
            w.uint32(10).fork();
            for (var i = 0; i < m.arrRes.length; ++i)
                w.int32(m.arrRes[i]);
            w.ldelim();
        }
        return w;
    };

    /**
     * Decodes an InfGameStart message from the specified reader or buffer.
     * @function decode
     * @memberof InfGameStart
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfGameStart} InfGameStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfGameStart.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfGameStart();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.arrRes && m.arrRes.length))
                    m.arrRes = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.arrRes.push(r.int32());
                } else
                    m.arrRes.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfGameStart;
})();

$root.PlayerPosition = (function() {

    /**
     * Properties of a PlayerPosition.
     * @exports IPlayerPosition
     * @interface IPlayerPosition
     * @property {number|null} [uin] PlayerPosition uin
     * @property {number|null} [posX] PlayerPosition posX
     * @property {number|null} [posY] PlayerPosition posY
     */

    /**
     * Constructs a new PlayerPosition.
     * @exports PlayerPosition
     * @classdesc Represents a PlayerPosition.
     * @implements IPlayerPosition
     * @constructor
     * @param {IPlayerPosition=} [p] Properties to set
     */
    function PlayerPosition(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerPosition uin.
     * @member {number} uin
     * @memberof PlayerPosition
     * @instance
     */
    PlayerPosition.prototype.uin = 0;

    /**
     * PlayerPosition posX.
     * @member {number} posX
     * @memberof PlayerPosition
     * @instance
     */
    PlayerPosition.prototype.posX = 0;

    /**
     * PlayerPosition posY.
     * @member {number} posY
     * @memberof PlayerPosition
     * @instance
     */
    PlayerPosition.prototype.posY = 0;

    /**
     * Creates a new PlayerPosition instance using the specified properties.
     * @function create
     * @memberof PlayerPosition
     * @static
     * @param {IPlayerPosition=} [properties] Properties to set
     * @returns {PlayerPosition} PlayerPosition instance
     */
    PlayerPosition.create = function create(properties) {
        return new PlayerPosition(properties);
    };

    /**
     * Encodes the specified PlayerPosition message. Does not implicitly {@link PlayerPosition.verify|verify} messages.
     * @function encode
     * @memberof PlayerPosition
     * @static
     * @param {IPlayerPosition} m PlayerPosition message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerPosition.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(8).int32(m.uin);
        if (m.posX != null && Object.hasOwnProperty.call(m, "posX"))
            w.uint32(16).int32(m.posX);
        if (m.posY != null && Object.hasOwnProperty.call(m, "posY"))
            w.uint32(24).int32(m.posY);
        return w;
    };

    /**
     * Decodes a PlayerPosition message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerPosition
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerPosition} PlayerPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerPosition.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerPosition();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uin = r.int32();
                break;
            case 2:
                m.posX = r.int32();
                break;
            case 3:
                m.posY = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerPosition;
})();

$root.InfPlayerPosition = (function() {

    /**
     * Properties of an InfPlayerPosition.
     * @exports IInfPlayerPosition
     * @interface IInfPlayerPosition
     * @property {Array.<IPlayerPosition>|null} [positions] InfPlayerPosition positions
     */

    /**
     * Constructs a new InfPlayerPosition.
     * @exports InfPlayerPosition
     * @classdesc Represents an InfPlayerPosition.
     * @implements IInfPlayerPosition
     * @constructor
     * @param {IInfPlayerPosition=} [p] Properties to set
     */
    function InfPlayerPosition(p) {
        this.positions = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfPlayerPosition positions.
     * @member {Array.<IPlayerPosition>} positions
     * @memberof InfPlayerPosition
     * @instance
     */
    InfPlayerPosition.prototype.positions = $util.emptyArray;

    /**
     * Creates a new InfPlayerPosition instance using the specified properties.
     * @function create
     * @memberof InfPlayerPosition
     * @static
     * @param {IInfPlayerPosition=} [properties] Properties to set
     * @returns {InfPlayerPosition} InfPlayerPosition instance
     */
    InfPlayerPosition.create = function create(properties) {
        return new InfPlayerPosition(properties);
    };

    /**
     * Encodes the specified InfPlayerPosition message. Does not implicitly {@link InfPlayerPosition.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerPosition
     * @static
     * @param {IInfPlayerPosition} m InfPlayerPosition message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerPosition.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.positions != null && m.positions.length) {
            for (var i = 0; i < m.positions.length; ++i)
                $root.PlayerPosition.encode(m.positions[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an InfPlayerPosition message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerPosition
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfPlayerPosition} InfPlayerPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerPosition.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfPlayerPosition();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.positions && m.positions.length))
                    m.positions = [];
                m.positions.push($root.PlayerPosition.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfPlayerPosition;
})();

$root.InfPlayerTurn = (function() {

    /**
     * Properties of an InfPlayerTurn.
     * @exports IInfPlayerTurn
     * @interface IInfPlayerTurn
     * @property {number|null} [uin] InfPlayerTurn uin
     */

    /**
     * Constructs a new InfPlayerTurn.
     * @exports InfPlayerTurn
     * @classdesc Represents an InfPlayerTurn.
     * @implements IInfPlayerTurn
     * @constructor
     * @param {IInfPlayerTurn=} [p] Properties to set
     */
    function InfPlayerTurn(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfPlayerTurn uin.
     * @member {number} uin
     * @memberof InfPlayerTurn
     * @instance
     */
    InfPlayerTurn.prototype.uin = 0;

    /**
     * Creates a new InfPlayerTurn instance using the specified properties.
     * @function create
     * @memberof InfPlayerTurn
     * @static
     * @param {IInfPlayerTurn=} [properties] Properties to set
     * @returns {InfPlayerTurn} InfPlayerTurn instance
     */
    InfPlayerTurn.create = function create(properties) {
        return new InfPlayerTurn(properties);
    };

    /**
     * Encodes the specified InfPlayerTurn message. Does not implicitly {@link InfPlayerTurn.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerTurn
     * @static
     * @param {IInfPlayerTurn} m InfPlayerTurn message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerTurn.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(8).int32(m.uin);
        return w;
    };

    /**
     * Decodes an InfPlayerTurn message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerTurn
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfPlayerTurn} InfPlayerTurn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerTurn.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfPlayerTurn();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uin = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfPlayerTurn;
})();

$root.ReqShipUpgrade = (function() {

    /**
     * Properties of a ReqShipUpgrade.
     * @exports IReqShipUpgrade
     * @interface IReqShipUpgrade
     * @property {number|null} [type] ReqShipUpgrade type
     */

    /**
     * Constructs a new ReqShipUpgrade.
     * @exports ReqShipUpgrade
     * @classdesc Represents a ReqShipUpgrade.
     * @implements IReqShipUpgrade
     * @constructor
     * @param {IReqShipUpgrade=} [p] Properties to set
     */
    function ReqShipUpgrade(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReqShipUpgrade type.
     * @member {number} type
     * @memberof ReqShipUpgrade
     * @instance
     */
    ReqShipUpgrade.prototype.type = 0;

    /**
     * Creates a new ReqShipUpgrade instance using the specified properties.
     * @function create
     * @memberof ReqShipUpgrade
     * @static
     * @param {IReqShipUpgrade=} [properties] Properties to set
     * @returns {ReqShipUpgrade} ReqShipUpgrade instance
     */
    ReqShipUpgrade.create = function create(properties) {
        return new ReqShipUpgrade(properties);
    };

    /**
     * Encodes the specified ReqShipUpgrade message. Does not implicitly {@link ReqShipUpgrade.verify|verify} messages.
     * @function encode
     * @memberof ReqShipUpgrade
     * @static
     * @param {IReqShipUpgrade} m ReqShipUpgrade message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqShipUpgrade.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        return w;
    };

    /**
     * Decodes a ReqShipUpgrade message from the specified reader or buffer.
     * @function decode
     * @memberof ReqShipUpgrade
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqShipUpgrade} ReqShipUpgrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqShipUpgrade.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqShipUpgrade();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqShipUpgrade;
})();

$root.InfShipUpgrade = (function() {

    /**
     * Properties of an InfShipUpgrade.
     * @exports IInfShipUpgrade
     * @interface IInfShipUpgrade
     * @property {number|null} [type] InfShipUpgrade type
     * @property {number|null} [uin] InfShipUpgrade uin
     */

    /**
     * Constructs a new InfShipUpgrade.
     * @exports InfShipUpgrade
     * @classdesc Represents an InfShipUpgrade.
     * @implements IInfShipUpgrade
     * @constructor
     * @param {IInfShipUpgrade=} [p] Properties to set
     */
    function InfShipUpgrade(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfShipUpgrade type.
     * @member {number} type
     * @memberof InfShipUpgrade
     * @instance
     */
    InfShipUpgrade.prototype.type = 0;

    /**
     * InfShipUpgrade uin.
     * @member {number} uin
     * @memberof InfShipUpgrade
     * @instance
     */
    InfShipUpgrade.prototype.uin = 0;

    /**
     * Creates a new InfShipUpgrade instance using the specified properties.
     * @function create
     * @memberof InfShipUpgrade
     * @static
     * @param {IInfShipUpgrade=} [properties] Properties to set
     * @returns {InfShipUpgrade} InfShipUpgrade instance
     */
    InfShipUpgrade.create = function create(properties) {
        return new InfShipUpgrade(properties);
    };

    /**
     * Encodes the specified InfShipUpgrade message. Does not implicitly {@link InfShipUpgrade.verify|verify} messages.
     * @function encode
     * @memberof InfShipUpgrade
     * @static
     * @param {IInfShipUpgrade} m InfShipUpgrade message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfShipUpgrade.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(16).int32(m.uin);
        return w;
    };

    /**
     * Decodes an InfShipUpgrade message from the specified reader or buffer.
     * @function decode
     * @memberof InfShipUpgrade
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfShipUpgrade} InfShipUpgrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfShipUpgrade.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfShipUpgrade();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.uin = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfShipUpgrade;
})();

$root.ReqShipOpt = (function() {

    /**
     * Properties of a ReqShipOpt.
     * @exports IReqShipOpt
     * @interface IReqShipOpt
     * @property {number|null} [type] ReqShipOpt type
     * @property {number|null} [posX] ReqShipOpt posX
     * @property {number|null} [posY] ReqShipOpt posY
     */

    /**
     * Constructs a new ReqShipOpt.
     * @exports ReqShipOpt
     * @classdesc Represents a ReqShipOpt.
     * @implements IReqShipOpt
     * @constructor
     * @param {IReqShipOpt=} [p] Properties to set
     */
    function ReqShipOpt(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReqShipOpt type.
     * @member {number} type
     * @memberof ReqShipOpt
     * @instance
     */
    ReqShipOpt.prototype.type = 0;

    /**
     * ReqShipOpt posX.
     * @member {number} posX
     * @memberof ReqShipOpt
     * @instance
     */
    ReqShipOpt.prototype.posX = 0;

    /**
     * ReqShipOpt posY.
     * @member {number} posY
     * @memberof ReqShipOpt
     * @instance
     */
    ReqShipOpt.prototype.posY = 0;

    /**
     * Creates a new ReqShipOpt instance using the specified properties.
     * @function create
     * @memberof ReqShipOpt
     * @static
     * @param {IReqShipOpt=} [properties] Properties to set
     * @returns {ReqShipOpt} ReqShipOpt instance
     */
    ReqShipOpt.create = function create(properties) {
        return new ReqShipOpt(properties);
    };

    /**
     * Encodes the specified ReqShipOpt message. Does not implicitly {@link ReqShipOpt.verify|verify} messages.
     * @function encode
     * @memberof ReqShipOpt
     * @static
     * @param {IReqShipOpt} m ReqShipOpt message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqShipOpt.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        if (m.posX != null && Object.hasOwnProperty.call(m, "posX"))
            w.uint32(16).int32(m.posX);
        if (m.posY != null && Object.hasOwnProperty.call(m, "posY"))
            w.uint32(24).int32(m.posY);
        return w;
    };

    /**
     * Decodes a ReqShipOpt message from the specified reader or buffer.
     * @function decode
     * @memberof ReqShipOpt
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqShipOpt} ReqShipOpt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqShipOpt.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqShipOpt();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.posX = r.int32();
                break;
            case 3:
                m.posY = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqShipOpt;
})();

$root.InfShipOpt = (function() {

    /**
     * Properties of an InfShipOpt.
     * @exports IInfShipOpt
     * @interface IInfShipOpt
     * @property {number|null} [uin] InfShipOpt uin
     * @property {number|null} [type] InfShipOpt type
     * @property {number|null} [posX] InfShipOpt posX
     * @property {number|null} [posY] InfShipOpt posY
     * @property {boolean|null} [result] InfShipOpt result
     */

    /**
     * Constructs a new InfShipOpt.
     * @exports InfShipOpt
     * @classdesc Represents an InfShipOpt.
     * @implements IInfShipOpt
     * @constructor
     * @param {IInfShipOpt=} [p] Properties to set
     */
    function InfShipOpt(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfShipOpt uin.
     * @member {number} uin
     * @memberof InfShipOpt
     * @instance
     */
    InfShipOpt.prototype.uin = 0;

    /**
     * InfShipOpt type.
     * @member {number} type
     * @memberof InfShipOpt
     * @instance
     */
    InfShipOpt.prototype.type = 0;

    /**
     * InfShipOpt posX.
     * @member {number} posX
     * @memberof InfShipOpt
     * @instance
     */
    InfShipOpt.prototype.posX = 0;

    /**
     * InfShipOpt posY.
     * @member {number} posY
     * @memberof InfShipOpt
     * @instance
     */
    InfShipOpt.prototype.posY = 0;

    /**
     * InfShipOpt result.
     * @member {boolean} result
     * @memberof InfShipOpt
     * @instance
     */
    InfShipOpt.prototype.result = false;

    /**
     * Creates a new InfShipOpt instance using the specified properties.
     * @function create
     * @memberof InfShipOpt
     * @static
     * @param {IInfShipOpt=} [properties] Properties to set
     * @returns {InfShipOpt} InfShipOpt instance
     */
    InfShipOpt.create = function create(properties) {
        return new InfShipOpt(properties);
    };

    /**
     * Encodes the specified InfShipOpt message. Does not implicitly {@link InfShipOpt.verify|verify} messages.
     * @function encode
     * @memberof InfShipOpt
     * @static
     * @param {IInfShipOpt} m InfShipOpt message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfShipOpt.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(8).int32(m.uin);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).int32(m.type);
        if (m.posX != null && Object.hasOwnProperty.call(m, "posX"))
            w.uint32(24).int32(m.posX);
        if (m.posY != null && Object.hasOwnProperty.call(m, "posY"))
            w.uint32(32).int32(m.posY);
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            w.uint32(40).bool(m.result);
        return w;
    };

    /**
     * Decodes an InfShipOpt message from the specified reader or buffer.
     * @function decode
     * @memberof InfShipOpt
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfShipOpt} InfShipOpt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfShipOpt.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfShipOpt();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uin = r.int32();
                break;
            case 2:
                m.type = r.int32();
                break;
            case 3:
                m.posX = r.int32();
                break;
            case 4:
                m.posY = r.int32();
                break;
            case 5:
                m.result = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfShipOpt;
})();

$root.InfGameEnd = (function() {

    /**
     * Properties of an InfGameEnd.
     * @exports IInfGameEnd
     * @interface IInfGameEnd
     * @property {number|null} [uin] InfGameEnd uin
     */

    /**
     * Constructs a new InfGameEnd.
     * @exports InfGameEnd
     * @classdesc Represents an InfGameEnd.
     * @implements IInfGameEnd
     * @constructor
     * @param {IInfGameEnd=} [p] Properties to set
     */
    function InfGameEnd(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InfGameEnd uin.
     * @member {number} uin
     * @memberof InfGameEnd
     * @instance
     */
    InfGameEnd.prototype.uin = 0;

    /**
     * Creates a new InfGameEnd instance using the specified properties.
     * @function create
     * @memberof InfGameEnd
     * @static
     * @param {IInfGameEnd=} [properties] Properties to set
     * @returns {InfGameEnd} InfGameEnd instance
     */
    InfGameEnd.create = function create(properties) {
        return new InfGameEnd(properties);
    };

    /**
     * Encodes the specified InfGameEnd message. Does not implicitly {@link InfGameEnd.verify|verify} messages.
     * @function encode
     * @memberof InfGameEnd
     * @static
     * @param {IInfGameEnd} m InfGameEnd message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfGameEnd.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uin != null && Object.hasOwnProperty.call(m, "uin"))
            w.uint32(8).int32(m.uin);
        return w;
    };

    /**
     * Decodes an InfGameEnd message from the specified reader or buffer.
     * @function decode
     * @memberof InfGameEnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InfGameEnd} InfGameEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfGameEnd.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InfGameEnd();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uin = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return InfGameEnd;
})();

$root.ReqEndTurn = (function() {

    /**
     * Properties of a ReqEndTurn.
     * @exports IReqEndTurn
     * @interface IReqEndTurn
     */

    /**
     * Constructs a new ReqEndTurn.
     * @exports ReqEndTurn
     * @classdesc Represents a ReqEndTurn.
     * @implements IReqEndTurn
     * @constructor
     * @param {IReqEndTurn=} [p] Properties to set
     */
    function ReqEndTurn(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReqEndTurn instance using the specified properties.
     * @function create
     * @memberof ReqEndTurn
     * @static
     * @param {IReqEndTurn=} [properties] Properties to set
     * @returns {ReqEndTurn} ReqEndTurn instance
     */
    ReqEndTurn.create = function create(properties) {
        return new ReqEndTurn(properties);
    };

    /**
     * Encodes the specified ReqEndTurn message. Does not implicitly {@link ReqEndTurn.verify|verify} messages.
     * @function encode
     * @memberof ReqEndTurn
     * @static
     * @param {IReqEndTurn} m ReqEndTurn message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqEndTurn.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReqEndTurn message from the specified reader or buffer.
     * @function decode
     * @memberof ReqEndTurn
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqEndTurn} ReqEndTurn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqEndTurn.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqEndTurn();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqEndTurn;
})();

module.exports = $root;

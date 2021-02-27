import * as $protobuf from "protobufjs";
/** MSGID enum. */
export enum MSGID {
    REQ_LOGIN = 1,
    RSP_LOGIN = 2,
    REQ_GAME_CHAT = 3,
    INF_GAME_CHAT = 4,
    REQ_MATCH = 5,
    RSP_MATCH = 6,
    INF_MATCH_SUCCESS = 7,
    REQ_START_GAME = 8,
    INF_GAME_START = 9,
    INF_PLAYER_POSITION = 10,
    INF_PLAYER_TURN = 11,
    REQ_SHIP_UPGRADE = 12,
    INF_SHIP_UPGRADE = 13,
    REQ_SHIP_OPT = 14,
    INF_SHIP_OPT = 15,
    INF_GAME_END = 16,
    REQ_END_TURN = 17
}

/** RESULTID enum. */
export enum RESULTID {
    SUCCESS = 0
}

/** Represents a ReqLogin. */
export class ReqLogin implements IReqLogin {

    /**
     * Constructs a new ReqLogin.
     * @param [p] Properties to set
     */
    constructor(p?: IReqLogin);

    /**
     * Creates a new ReqLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqLogin instance
     */
    public static create(properties?: IReqLogin): ReqLogin;

    /**
     * Encodes the specified ReqLogin message. Does not implicitly {@link ReqLogin.verify|verify} messages.
     * @param m ReqLogin message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqLogin, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqLogin message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReqLogin;
}

/** Represents a RspLogin. */
export class RspLogin implements IRspLogin {

    /**
     * Constructs a new RspLogin.
     * @param [p] Properties to set
     */
    constructor(p?: IRspLogin);

    /** RspLogin result. */
    public result: RESULTID;

    /** RspLogin uin. */
    public uin: number;

    /**
     * Creates a new RspLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspLogin instance
     */
    public static create(properties?: IRspLogin): RspLogin;

    /**
     * Encodes the specified RspLogin message. Does not implicitly {@link RspLogin.verify|verify} messages.
     * @param m RspLogin message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRspLogin, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspLogin message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RspLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RspLogin;
}

/** Represents a ReqGameChat. */
export class ReqGameChat implements IReqGameChat {

    /**
     * Constructs a new ReqGameChat.
     * @param [p] Properties to set
     */
    constructor(p?: IReqGameChat);

    /** ReqGameChat msg. */
    public msg: string;

    /**
     * Creates a new ReqGameChat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGameChat instance
     */
    public static create(properties?: IReqGameChat): ReqGameChat;

    /**
     * Encodes the specified ReqGameChat message. Does not implicitly {@link ReqGameChat.verify|verify} messages.
     * @param m ReqGameChat message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqGameChat, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGameChat message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqGameChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReqGameChat;
}

/** Represents an InfGameChat. */
export class InfGameChat implements IInfGameChat {

    /**
     * Constructs a new InfGameChat.
     * @param [p] Properties to set
     */
    constructor(p?: IInfGameChat);

    /** InfGameChat uin. */
    public uin: number;

    /** InfGameChat msg. */
    public msg: string;

    /**
     * Creates a new InfGameChat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfGameChat instance
     */
    public static create(properties?: IInfGameChat): InfGameChat;

    /**
     * Encodes the specified InfGameChat message. Does not implicitly {@link InfGameChat.verify|verify} messages.
     * @param m InfGameChat message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfGameChat, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfGameChat message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfGameChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfGameChat;
}

/** Represents a ReqMatch. */
export class ReqMatch implements IReqMatch {

    /**
     * Constructs a new ReqMatch.
     * @param [p] Properties to set
     */
    constructor(p?: IReqMatch);

    /**
     * Creates a new ReqMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMatch instance
     */
    public static create(properties?: IReqMatch): ReqMatch;

    /**
     * Encodes the specified ReqMatch message. Does not implicitly {@link ReqMatch.verify|verify} messages.
     * @param m ReqMatch message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqMatch, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMatch message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReqMatch;
}

/** Represents a RspMatch. */
export class RspMatch implements IRspMatch {

    /**
     * Constructs a new RspMatch.
     * @param [p] Properties to set
     */
    constructor(p?: IRspMatch);

    /** RspMatch result. */
    public result: RESULTID;

    /**
     * Creates a new RspMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspMatch instance
     */
    public static create(properties?: IRspMatch): RspMatch;

    /**
     * Encodes the specified RspMatch message. Does not implicitly {@link RspMatch.verify|verify} messages.
     * @param m RspMatch message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRspMatch, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspMatch message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RspMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RspMatch;
}

/** Represents an InfMatchSuccess. */
export class InfMatchSuccess implements IInfMatchSuccess {

    /**
     * Constructs a new InfMatchSuccess.
     * @param [p] Properties to set
     */
    constructor(p?: IInfMatchSuccess);

    /** InfMatchSuccess uin. */
    public uin: number;

    /**
     * Creates a new InfMatchSuccess instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfMatchSuccess instance
     */
    public static create(properties?: IInfMatchSuccess): InfMatchSuccess;

    /**
     * Encodes the specified InfMatchSuccess message. Does not implicitly {@link InfMatchSuccess.verify|verify} messages.
     * @param m InfMatchSuccess message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfMatchSuccess, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfMatchSuccess message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfMatchSuccess;
}

/** Represents a ReqStartGame. */
export class ReqStartGame implements IReqStartGame {

    /**
     * Constructs a new ReqStartGame.
     * @param [p] Properties to set
     */
    constructor(p?: IReqStartGame);

    /**
     * Creates a new ReqStartGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartGame instance
     */
    public static create(properties?: IReqStartGame): ReqStartGame;

    /**
     * Encodes the specified ReqStartGame message. Does not implicitly {@link ReqStartGame.verify|verify} messages.
     * @param m ReqStartGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqStartGame, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReqStartGame;
}

/** Represents an InfGameStart. */
export class InfGameStart implements IInfGameStart {

    /**
     * Constructs a new InfGameStart.
     * @param [p] Properties to set
     */
    constructor(p?: IInfGameStart);

    /** InfGameStart arrRes. */
    public arrRes: number[];

    /**
     * Creates a new InfGameStart instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfGameStart instance
     */
    public static create(properties?: IInfGameStart): InfGameStart;

    /**
     * Encodes the specified InfGameStart message. Does not implicitly {@link InfGameStart.verify|verify} messages.
     * @param m InfGameStart message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfGameStart, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfGameStart message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfGameStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfGameStart;
}

/** Represents a PlayerPosition. */
export class PlayerPosition implements IPlayerPosition {

    /**
     * Constructs a new PlayerPosition.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerPosition);

    /** PlayerPosition uin. */
    public uin: number;

    /** PlayerPosition posX. */
    public posX: number;

    /** PlayerPosition posY. */
    public posY: number;

    /**
     * Creates a new PlayerPosition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerPosition instance
     */
    public static create(properties?: IPlayerPosition): PlayerPosition;

    /**
     * Encodes the specified PlayerPosition message. Does not implicitly {@link PlayerPosition.verify|verify} messages.
     * @param m PlayerPosition message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerPosition, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerPosition message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerPosition;
}

/** Represents an InfPlayerPosition. */
export class InfPlayerPosition implements IInfPlayerPosition {

    /**
     * Constructs a new InfPlayerPosition.
     * @param [p] Properties to set
     */
    constructor(p?: IInfPlayerPosition);

    /** InfPlayerPosition positions. */
    public positions: IPlayerPosition[];

    /**
     * Creates a new InfPlayerPosition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerPosition instance
     */
    public static create(properties?: IInfPlayerPosition): InfPlayerPosition;

    /**
     * Encodes the specified InfPlayerPosition message. Does not implicitly {@link InfPlayerPosition.verify|verify} messages.
     * @param m InfPlayerPosition message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfPlayerPosition, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerPosition message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfPlayerPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfPlayerPosition;
}

/** Represents an InfPlayerTurn. */
export class InfPlayerTurn implements IInfPlayerTurn {

    /**
     * Constructs a new InfPlayerTurn.
     * @param [p] Properties to set
     */
    constructor(p?: IInfPlayerTurn);

    /** InfPlayerTurn uin. */
    public uin: number;

    /**
     * Creates a new InfPlayerTurn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerTurn instance
     */
    public static create(properties?: IInfPlayerTurn): InfPlayerTurn;

    /**
     * Encodes the specified InfPlayerTurn message. Does not implicitly {@link InfPlayerTurn.verify|verify} messages.
     * @param m InfPlayerTurn message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfPlayerTurn, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerTurn message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfPlayerTurn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfPlayerTurn;
}

/** Represents a ReqShipUpgrade. */
export class ReqShipUpgrade implements IReqShipUpgrade {

    /**
     * Constructs a new ReqShipUpgrade.
     * @param [p] Properties to set
     */
    constructor(p?: IReqShipUpgrade);

    /** ReqShipUpgrade type. */
    public type: number;

    /**
     * Creates a new ReqShipUpgrade instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqShipUpgrade instance
     */
    public static create(properties?: IReqShipUpgrade): ReqShipUpgrade;

    /**
     * Encodes the specified ReqShipUpgrade message. Does not implicitly {@link ReqShipUpgrade.verify|verify} messages.
     * @param m ReqShipUpgrade message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqShipUpgrade, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqShipUpgrade message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqShipUpgrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReqShipUpgrade;
}

/** Represents an InfShipUpgrade. */
export class InfShipUpgrade implements IInfShipUpgrade {

    /**
     * Constructs a new InfShipUpgrade.
     * @param [p] Properties to set
     */
    constructor(p?: IInfShipUpgrade);

    /** InfShipUpgrade type. */
    public type: number;

    /** InfShipUpgrade uin. */
    public uin: number;

    /**
     * Creates a new InfShipUpgrade instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfShipUpgrade instance
     */
    public static create(properties?: IInfShipUpgrade): InfShipUpgrade;

    /**
     * Encodes the specified InfShipUpgrade message. Does not implicitly {@link InfShipUpgrade.verify|verify} messages.
     * @param m InfShipUpgrade message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfShipUpgrade, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfShipUpgrade message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfShipUpgrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfShipUpgrade;
}

/** Represents a ReqShipOpt. */
export class ReqShipOpt implements IReqShipOpt {

    /**
     * Constructs a new ReqShipOpt.
     * @param [p] Properties to set
     */
    constructor(p?: IReqShipOpt);

    /** ReqShipOpt type. */
    public type: number;

    /** ReqShipOpt posX. */
    public posX: number;

    /** ReqShipOpt posY. */
    public posY: number;

    /**
     * Creates a new ReqShipOpt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqShipOpt instance
     */
    public static create(properties?: IReqShipOpt): ReqShipOpt;

    /**
     * Encodes the specified ReqShipOpt message. Does not implicitly {@link ReqShipOpt.verify|verify} messages.
     * @param m ReqShipOpt message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqShipOpt, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqShipOpt message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqShipOpt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReqShipOpt;
}

/** Represents an InfShipOpt. */
export class InfShipOpt implements IInfShipOpt {

    /**
     * Constructs a new InfShipOpt.
     * @param [p] Properties to set
     */
    constructor(p?: IInfShipOpt);

    /** InfShipOpt uin. */
    public uin: number;

    /** InfShipOpt type. */
    public type: number;

    /** InfShipOpt posX. */
    public posX: number;

    /** InfShipOpt posY. */
    public posY: number;

    /** InfShipOpt result. */
    public result: boolean;

    /**
     * Creates a new InfShipOpt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfShipOpt instance
     */
    public static create(properties?: IInfShipOpt): InfShipOpt;

    /**
     * Encodes the specified InfShipOpt message. Does not implicitly {@link InfShipOpt.verify|verify} messages.
     * @param m InfShipOpt message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfShipOpt, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfShipOpt message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfShipOpt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfShipOpt;
}

/** Represents an InfGameEnd. */
export class InfGameEnd implements IInfGameEnd {

    /**
     * Constructs a new InfGameEnd.
     * @param [p] Properties to set
     */
    constructor(p?: IInfGameEnd);

    /** InfGameEnd uin. */
    public uin: number;

    /**
     * Creates a new InfGameEnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfGameEnd instance
     */
    public static create(properties?: IInfGameEnd): InfGameEnd;

    /**
     * Encodes the specified InfGameEnd message. Does not implicitly {@link InfGameEnd.verify|verify} messages.
     * @param m InfGameEnd message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInfGameEnd, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfGameEnd message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InfGameEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InfGameEnd;
}

/** Represents a ReqEndTurn. */
export class ReqEndTurn implements IReqEndTurn {

    /**
     * Constructs a new ReqEndTurn.
     * @param [p] Properties to set
     */
    constructor(p?: IReqEndTurn);

    /**
     * Creates a new ReqEndTurn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqEndTurn instance
     */
    public static create(properties?: IReqEndTurn): ReqEndTurn;

    /**
     * Encodes the specified ReqEndTurn message. Does not implicitly {@link ReqEndTurn.verify|verify} messages.
     * @param m ReqEndTurn message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqEndTurn, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqEndTurn message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqEndTurn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReqEndTurn;
}

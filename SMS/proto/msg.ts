// Generated by protod v0.3.3
import {
  boolField,
  enumField,
  FieldSet,
  fromBytes,
  fromJSON,
  int32Field,
  JSON,
  packedField,
  repeatedField,
  stringField,
  toBytes,
  toJSON,
} from "../deps.ts";

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
  REQ_END_TURN = 17,
}

export enum RESULTID {
  SUCCESS = 0,
}

export class ReqLogin {
  constructor() { }

  static fields = {};

  static fromBytes(): ReqLogin {
    return new ReqLogin();
  }

  static fromJSON(): ReqLogin {
    return new ReqLogin();
  }

  toBytes(): Uint8Array {
    return Uint8Array.of();
  }

  toJSON() {
    return {};
  }
}

export class RspLogin {
  result: RESULTID;
  uin: number;

  constructor(init: Partial<RspLogin>) {
    this.result = init.result ?? RESULTID.SUCCESS;
    this.uin = init.uin ?? 0;
  }

  static fields: FieldSet<RspLogin> = {
    result: [1, enumField(RESULTID)],
    uin: [2, int32Field],
  };

  static fromBytes(bytes: Uint8Array): RspLogin {
    return new RspLogin(
      fromBytes<RspLogin>(bytes, RspLogin.fields),
    );
  }

  static fromJSON(json: JSON): RspLogin {
    return new RspLogin(
      fromJSON<RspLogin>(json, RspLogin.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<RspLogin>(this, RspLogin.fields);
  }

  toJSON() {
    return toJSON<RspLogin>(this, RspLogin.fields);
  }
}

export class ReqGameChat {
  msg: string;

  constructor(init: Partial<ReqGameChat>) {
    this.msg = init.msg ?? "";
  }

  static fields: FieldSet<ReqGameChat> = {
    msg: [1, stringField],
  };

  static fromBytes(bytes: Uint8Array): ReqGameChat {
    return new ReqGameChat(
      fromBytes<ReqGameChat>(bytes, ReqGameChat.fields),
    );
  }

  static fromJSON(json: JSON): ReqGameChat {
    return new ReqGameChat(
      fromJSON<ReqGameChat>(json, ReqGameChat.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<ReqGameChat>(this, ReqGameChat.fields);
  }

  toJSON() {
    return toJSON<ReqGameChat>(this, ReqGameChat.fields);
  }
}

export class InfGameChat {
  uin: number;
  msg: string;

  constructor(init: Partial<InfGameChat>) {
    this.uin = init.uin ?? 0;
    this.msg = init.msg ?? "";
  }

  static fields: FieldSet<InfGameChat> = {
    uin: [1, int32Field],
    msg: [2, stringField],
  };

  static fromBytes(bytes: Uint8Array): InfGameChat {
    return new InfGameChat(
      fromBytes<InfGameChat>(bytes, InfGameChat.fields),
    );
  }

  static fromJSON(json: JSON): InfGameChat {
    return new InfGameChat(
      fromJSON<InfGameChat>(json, InfGameChat.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfGameChat>(this, InfGameChat.fields);
  }

  toJSON() {
    return toJSON<InfGameChat>(this, InfGameChat.fields);
  }
}

export class ReqMatch {
  constructor() { }

  static fields = {};

  static fromBytes(): ReqMatch {
    return new ReqMatch();
  }

  static fromJSON(): ReqMatch {
    return new ReqMatch();
  }

  toBytes(): Uint8Array {
    return Uint8Array.of();
  }

  toJSON() {
    return {};
  }
}

export class RspMatch {
  result: RESULTID;

  constructor(init: Partial<RspMatch>) {
    this.result = init.result ?? RESULTID.SUCCESS;
  }

  static fields: FieldSet<RspMatch> = {
    result: [1, enumField(RESULTID)],
  };

  static fromBytes(bytes: Uint8Array): RspMatch {
    return new RspMatch(
      fromBytes<RspMatch>(bytes, RspMatch.fields),
    );
  }

  static fromJSON(json: JSON): RspMatch {
    return new RspMatch(
      fromJSON<RspMatch>(json, RspMatch.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<RspMatch>(this, RspMatch.fields);
  }

  toJSON() {
    return toJSON<RspMatch>(this, RspMatch.fields);
  }
}

export class InfMatchSuccess {
  uin: number;

  constructor(init: Partial<InfMatchSuccess>) {
    this.uin = init.uin ?? 0;
  }

  static fields: FieldSet<InfMatchSuccess> = {
    uin: [1, int32Field],
  };

  static fromBytes(bytes: Uint8Array): InfMatchSuccess {
    return new InfMatchSuccess(
      fromBytes<InfMatchSuccess>(bytes, InfMatchSuccess.fields),
    );
  }

  static fromJSON(json: JSON): InfMatchSuccess {
    return new InfMatchSuccess(
      fromJSON<InfMatchSuccess>(json, InfMatchSuccess.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfMatchSuccess>(this, InfMatchSuccess.fields);
  }

  toJSON() {
    return toJSON<InfMatchSuccess>(this, InfMatchSuccess.fields);
  }
}

export class ReqStartGame {
  constructor() { }

  static fields = {};

  static fromBytes(): ReqStartGame {
    return new ReqStartGame();
  }

  static fromJSON(): ReqStartGame {
    return new ReqStartGame();
  }

  toBytes(): Uint8Array {
    return Uint8Array.of();
  }

  toJSON() {
    return {};
  }
}

export class InfGameStart {
  arrRes: number[];

  constructor(init: Partial<InfGameStart>) {
    this.arrRes = init.arrRes ?? [];
  }

  static fields: FieldSet<InfGameStart> = {
    arrRes: [1, packedField(int32Field)],
  };

  static fromBytes(bytes: Uint8Array): InfGameStart {
    return new InfGameStart(
      fromBytes<InfGameStart>(bytes, InfGameStart.fields),
    );
  }

  static fromJSON(json: JSON): InfGameStart {
    return new InfGameStart(
      fromJSON<InfGameStart>(json, InfGameStart.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfGameStart>(this, InfGameStart.fields);
  }

  toJSON() {
    return toJSON<InfGameStart>(this, InfGameStart.fields);
  }
}

export class PlayerPosition {
  uin: number;
  posX: number;
  posY: number;

  constructor(init: Partial<PlayerPosition>) {
    this.uin = init.uin ?? 0;
    this.posX = init.posX ?? 0;
    this.posY = init.posY ?? 0;
  }

  static fields: FieldSet<PlayerPosition> = {
    uin: [1, int32Field],
    posX: [2, int32Field],
    posY: [3, int32Field],
  };

  static fromBytes(bytes: Uint8Array): PlayerPosition {
    return new PlayerPosition(
      fromBytes<PlayerPosition>(bytes, PlayerPosition.fields),
    );
  }

  static fromJSON(json: JSON): PlayerPosition {
    return new PlayerPosition(
      fromJSON<PlayerPosition>(json, PlayerPosition.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<PlayerPosition>(this, PlayerPosition.fields);
  }

  toJSON() {
    return toJSON<PlayerPosition>(this, PlayerPosition.fields);
  }
}

export class InfPlayerPosition {
  positions: PlayerPosition[];

  constructor(init: Partial<InfPlayerPosition>) {
    this.positions = init.positions ?? [];
  }

  static fields: FieldSet<InfPlayerPosition> = {
    positions: [1, repeatedField(PlayerPosition)],
  };

  static fromBytes(bytes: Uint8Array): InfPlayerPosition {
    return new InfPlayerPosition(
      fromBytes<InfPlayerPosition>(bytes, InfPlayerPosition.fields),
    );
  }

  static fromJSON(json: JSON): InfPlayerPosition {
    return new InfPlayerPosition(
      fromJSON<InfPlayerPosition>(json, InfPlayerPosition.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfPlayerPosition>(this, InfPlayerPosition.fields);
  }

  toJSON() {
    return toJSON<InfPlayerPosition>(this, InfPlayerPosition.fields);
  }
}

export class InfPlayerTurn {
  uin: number;

  constructor(init: Partial<InfPlayerTurn>) {
    this.uin = init.uin ?? 0;
  }

  static fields: FieldSet<InfPlayerTurn> = {
    uin: [1, int32Field],
  };

  static fromBytes(bytes: Uint8Array): InfPlayerTurn {
    return new InfPlayerTurn(
      fromBytes<InfPlayerTurn>(bytes, InfPlayerTurn.fields),
    );
  }

  static fromJSON(json: JSON): InfPlayerTurn {
    return new InfPlayerTurn(
      fromJSON<InfPlayerTurn>(json, InfPlayerTurn.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfPlayerTurn>(this, InfPlayerTurn.fields);
  }

  toJSON() {
    return toJSON<InfPlayerTurn>(this, InfPlayerTurn.fields);
  }
}

export class ReqShipUpgrade {
  type: number;

  constructor(init: Partial<ReqShipUpgrade>) {
    this.type = init.type ?? 0;
  }

  static fields: FieldSet<ReqShipUpgrade> = {
    type: [1, int32Field],
  };

  static fromBytes(bytes: Uint8Array): ReqShipUpgrade {
    return new ReqShipUpgrade(
      fromBytes<ReqShipUpgrade>(bytes, ReqShipUpgrade.fields),
    );
  }

  static fromJSON(json: JSON): ReqShipUpgrade {
    return new ReqShipUpgrade(
      fromJSON<ReqShipUpgrade>(json, ReqShipUpgrade.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<ReqShipUpgrade>(this, ReqShipUpgrade.fields);
  }

  toJSON() {
    return toJSON<ReqShipUpgrade>(this, ReqShipUpgrade.fields);
  }
}

export class InfShipUpgrade {
  type: number;
  uin: number;

  constructor(init: Partial<InfShipUpgrade>) {
    this.type = init.type ?? 0;
    this.uin = init.uin ?? 0;
  }

  static fields: FieldSet<InfShipUpgrade> = {
    type: [1, int32Field],
    uin: [2, int32Field],
  };

  static fromBytes(bytes: Uint8Array): InfShipUpgrade {
    return new InfShipUpgrade(
      fromBytes<InfShipUpgrade>(bytes, InfShipUpgrade.fields),
    );
  }

  static fromJSON(json: JSON): InfShipUpgrade {
    return new InfShipUpgrade(
      fromJSON<InfShipUpgrade>(json, InfShipUpgrade.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfShipUpgrade>(this, InfShipUpgrade.fields);
  }

  toJSON() {
    return toJSON<InfShipUpgrade>(this, InfShipUpgrade.fields);
  }
}

export class ReqShipOpt {
  type: number;
  posX: number;
  posY: number;

  constructor(init: Partial<ReqShipOpt>) {
    this.type = init.type ?? 0;
    this.posX = init.posX ?? 0;
    this.posY = init.posY ?? 0;
  }

  static fields: FieldSet<ReqShipOpt> = {
    type: [1, int32Field],
    posX: [2, int32Field],
    posY: [3, int32Field],
  };

  static fromBytes(bytes: Uint8Array): ReqShipOpt {
    return new ReqShipOpt(
      fromBytes<ReqShipOpt>(bytes, ReqShipOpt.fields),
    );
  }

  static fromJSON(json: JSON): ReqShipOpt {
    return new ReqShipOpt(
      fromJSON<ReqShipOpt>(json, ReqShipOpt.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<ReqShipOpt>(this, ReqShipOpt.fields);
  }

  toJSON() {
    return toJSON<ReqShipOpt>(this, ReqShipOpt.fields);
  }
}

export class InfShipOpt {
  uin: number;
  type: number;
  posX: number;
  posY: number;
  result: boolean;

  constructor(init: Partial<InfShipOpt>) {
    this.uin = init.uin ?? 0;
    this.type = init.type ?? 0;
    this.posX = init.posX ?? 0;
    this.posY = init.posY ?? 0;
    this.result = init.result ?? false;
  }

  static fields: FieldSet<InfShipOpt> = {
    uin: [1, int32Field],
    type: [2, int32Field],
    posX: [3, int32Field],
    posY: [4, int32Field],
    result: [5, boolField],
  };

  static fromBytes(bytes: Uint8Array): InfShipOpt {
    return new InfShipOpt(
      fromBytes<InfShipOpt>(bytes, InfShipOpt.fields),
    );
  }

  static fromJSON(json: JSON): InfShipOpt {
    return new InfShipOpt(
      fromJSON<InfShipOpt>(json, InfShipOpt.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfShipOpt>(this, InfShipOpt.fields);
  }

  toJSON() {
    return toJSON<InfShipOpt>(this, InfShipOpt.fields);
  }
}

export class InfGameEnd {
  uin: number;

  constructor(init: Partial<InfGameEnd>) {
    this.uin = init.uin ?? 0;
  }

  static fields: FieldSet<InfGameEnd> = {
    uin: [1, int32Field],
  };

  static fromBytes(bytes: Uint8Array): InfGameEnd {
    return new InfGameEnd(
      fromBytes<InfGameEnd>(bytes, InfGameEnd.fields),
    );
  }

  static fromJSON(json: JSON): InfGameEnd {
    return new InfGameEnd(
      fromJSON<InfGameEnd>(json, InfGameEnd.fields),
    );
  }

  toBytes(): Uint8Array {
    return toBytes<InfGameEnd>(this, InfGameEnd.fields);
  }

  toJSON() {
    return toJSON<InfGameEnd>(this, InfGameEnd.fields);
  }
}

export class ReqEndTurn {
  constructor() { }

  static fields = {};

  static fromBytes(): ReqEndTurn {
    return new ReqEndTurn();
  }

  static fromJSON(): ReqEndTurn {
    return new ReqEndTurn();
  }

  toBytes(): Uint8Array {
    return Uint8Array.of();
  }

  toJSON() {
    return {};
  }
}



import { Player } from "./Player.ts";
import { PlayerMgr } from "./PlayerMgr.ts";
import { InfGameEnd, InfShipUpgrade, InfGameStart, InfMatchSuccess, InfPlayerPosition, MSGID, PlayerPosition, InfGameChat, InfPlayerTurn, InfShipOpt } from "./proto/msg.ts";
import { RoomMgr } from "./RoomMgr.ts";

export class Room {
    private m_arrPlayers: Array<PlayerInfo>;
    private m_iTurn: number;
    private m_arrRes: Array<number> = [];
    constructor(uin1: number, uin2: number) {
        this.m_arrPlayers = new Array<PlayerInfo>();
        this.m_arrPlayers.push(new PlayerInfo(uin1));
        this.m_arrPlayers.push(new PlayerInfo(uin2));
        this.InfMatchSuccess(uin1, uin2);
        this.InfMatchSuccess(uin2, uin1);
        this.m_iTurn = -1;
    }

    private InfMatchSuccess(uin1: number, uin2: number): void {
        let player = PlayerMgr.Get().GetPlayer(uin1);
        if (!player) {
            return;
        }
        let inf: InfMatchSuccess = new InfMatchSuccess({});
        inf.uin = uin2;
        player.Send(MSGID.INF_MATCH_SUCCESS, inf.toBytes());
    }

    public SetPlayerReady(uin: number): void {
        let allReady: boolean = true;
        for (let i = 0; i < this.m_arrPlayers.length; i++) {
            if (this.m_arrPlayers[i].m_iUin == uin) {
                this.m_arrPlayers[i].m_bReady = true;
            }
            if (this.m_arrPlayers[i].m_bReady == false) {
                allReady = false;
            }
        }
        if (allReady) {
            //游戏开始，随机地图
            let arrRes: Array<number> = new Array<number>();
            let arrSort: Array<number> = new Array<number>();
            let mapRes: Map<number, number> = new Map<number, number>();
            for (let i = 0; i < 36; i++) {
                let r: number = Math.floor(Math.random() * 1000);
                arrRes.push(r);
                arrSort.push(r);
            }
            arrSort.sort((a, b) => {
                return a - b;
            });
            for (let i = 0; i < 36; i++) {
                mapRes.set(arrSort[i], Math.floor(i / 10) + 1);
            }
            for (let i = 0; i < 36; i++) {
                arrRes[i] = mapRes.get(arrRes[i]) ?? 0;
            }
            let inf: InfGameStart = new InfGameStart({});
            inf.arrRes = arrRes;
            this.m_arrRes = arrRes;
            this.InfAll(MSGID.INF_GAME_START, inf.toBytes());
            setTimeout(this.InfPlayerPosition.bind(this), 1000);
        }
    }

    private InfAll(msgId: number, body: Uint8Array): void {
        for (let i = 0; i < this.m_arrPlayers.length; i++) {
            let player = PlayerMgr.Get().GetPlayer(this.m_arrPlayers[i].m_iUin);
            if (player) {
                player.Send(msgId, body);
            }
        }
    }

    private InfPlayerPosition(): void {
        let pos1: number = Math.floor(Math.random() * 86400);
        let pos2: number = Math.floor(Math.random() * 86400);
        if (pos1 == pos2) {
            pos2 += 1;
        }
        pos1 = pos1 % 36;
        pos2 = pos2 % 36;
        let inf: InfPlayerPosition = new InfPlayerPosition({});
        inf.positions = new Array<PlayerPosition>();
        inf.positions.push(new PlayerPosition({ uin: this.m_arrPlayers[0].m_iUin, posX: pos1 % 6, posY: Math.floor(pos1 / 6) }));
        inf.positions.push(new PlayerPosition({ uin: this.m_arrPlayers[1].m_iUin, posX: pos2 % 6, posY: Math.floor(pos2 / 6) }));
        this.m_arrPlayers[0].m_iX = pos1 % 6;
        this.m_arrPlayers[0].m_iY = Math.floor(pos1 / 6);
        this.m_arrPlayers[1].m_iX = pos2 % 6;
        this.m_arrPlayers[1].m_iY = Math.floor(pos2 / 6);
        this.InfAll(MSGID.INF_PLAYER_POSITION, inf.toBytes());
        //玩家获得矿石
        this.PlayerGetMine(this.m_arrPlayers[0], pos1);
        this.PlayerGetMine(this.m_arrPlayers[1], pos2);
        setTimeout(this.StartTurn.bind(this), 1000);
    }

    private PlayerGetMine(p: PlayerInfo, pos: number): void {
        if (pos < 0 || pos >= 36) {
            return;
        }
        p.m_iMine += this.m_arrRes[pos];
        this.m_arrRes[pos] = 0;
    }

    private StartTurn(): void {
        this.m_iTurn = 0;
        this.InfTurn();
    }

    public EndTurn(uin: number): void {
        if (this.m_arrPlayers[this.m_iTurn % 2].m_iUin == uin) {
            this.m_iTurn += 1;
            this.InfTurn();
        }
    }

    private InfTurn(): void {
        if (this.m_iTurn < 0) {
            return;
        }
        let inf: InfPlayerTurn = new InfPlayerTurn({});
        inf.uin = this.m_arrPlayers[this.m_iTurn % 2].m_iUin;
        this.InfAll(MSGID.INF_PLAYER_TURN, inf.toBytes());
    }

    public InfGameChat(uin: number, msg: string): void {
        let inf: InfGameChat = new InfGameChat({});
        inf.uin = uin;
        inf.msg = msg;
        this.InfAll(MSGID.INF_GAME_CHAT, inf.toBytes());
    }

    public ShipUpgrade(uin: number, type: number): void {
        for (let i = 0; i < this.m_arrPlayers.length; i++) {
            if (this.m_arrPlayers[i].m_iUin == uin) {
                let num: number = this.m_arrPlayers[i].GetNumByType(type);
                let mine: number = (num + 1) * (num + 2) / 2;
                if (this.m_arrPlayers[i].m_iMine >= mine) {
                    this.m_arrPlayers[i].m_iMine -= mine;
                    this.m_arrPlayers[i].UpgradeByType(type);
                    let inf: InfShipUpgrade = new InfShipUpgrade({});
                    inf.uin = uin;
                    inf.type = type;
                    this.InfAll(MSGID.INF_SHIP_UPGRADE, inf.toBytes());
                }
                break;
            }
        }
    }

    public ShipOpt(uin: number, type: number, x: number, y: number): void {
        let self = this.GetSelf(uin);
        let enemy = this.GetEnemy(uin);
        if (!self || !enemy) {
            return;
        }
        let dx: number = self.m_iX - x;
        let dy: number = self.m_iY - y;
        if (dx < 0) {
            dx = -dx;
        }
        if (dy < 0) {
            dy = -dy;
        }
        let dis: number = dx + dy;
        let rate: number = 0;
        let inf: InfShipOpt = new InfShipOpt({});
        inf.uin = uin;
        inf.type = type;
        inf.posX = x;
        inf.posY = y;
        if (type == 1) {

            if (!enemy || enemy.m_iX != x || enemy.m_iY != y) {
                return;
            }
            if (self.m_iAttackDis >= dis) {
                rate = 100;
            } else {
                rate = 100 - (dis - self.m_iAttackDis) * 20;
                if (rate < 0) {
                    rate = 0;
                }
            }
            if (this.GetRateResult(rate)) {
                //攻击成功
                inf.result = true;
                enemy.m_iLife -= self.m_iAttack;
            } else {
                //攻击失败
                inf.result = false;
            }
        } else if (type == 2) {
            if (self.m_iMineDis >= dis) {
                rate = 100;
            } else {
                rate = 100 - (dis - self.m_iMineDis) * 20;
                if (rate < 0) {
                    rate = 0;
                }
            }
            if (this.GetRateResult(rate)) {
                //采矿成功
                inf.result = true;
                this.PlayerGetMine(self, y * 6 + x);
            } else {
                //采矿失败
                inf.result = false;
            }
        } else if (type == 3) {
            let mine: number = dis * (dis + 1) / 2;
            if (self.m_iMine >= mine) {
                self.m_iMine -= mine;
                let minX: number = Math.min(self.m_iX, x);
                let maxX: number = Math.max(self.m_iX, x);
                let minY: number = Math.min(self.m_iY, y);
                let maxY: number = Math.max(self.m_iY, y);
                for (let i = minX; i <= maxX; i++) {
                    for (let j = minY; j <= maxY; j++) {
                        this.PlayerGetMine(self, j * 6 + i);
                    }
                }
                self.m_iX = x;
                self.m_iY = y;
                inf.result = true;
            } else {
                return;
            }
        } else {
            return;
        }
        this.InfAll(MSGID.INF_SHIP_OPT, inf.toBytes());
        if (self.m_iLife <= 0) {
            let endInf: InfGameEnd = new InfGameEnd({});
            endInf.uin = enemy.m_iUin;
            this.InfAll(MSGID.INF_GAME_END, endInf.toBytes());
            this.ClearRoom();
        } else if (enemy.m_iLife <= 0) {
            let endInf: InfGameEnd = new InfGameEnd({});
            endInf.uin = self.m_iUin;
            this.InfAll(MSGID.INF_GAME_END, endInf.toBytes());
            this.ClearRoom();
        }
    }

    private GetRateResult(rate: number): boolean {
        let r: number = Math.floor(Math.random() * 1333) % 100;
        console.log(r, rate);
        if (r < rate) {
            return true;
        }
        return false;
    }

    private GetSelf(uin: number): PlayerInfo | undefined {
        for (let i = 0; i < this.m_arrPlayers.length; i++) {
            if (this.m_arrPlayers[i].m_iUin == uin) {
                return this.m_arrPlayers[i];
            }
        }
        return undefined;
    }

    private GetEnemy(uin: number): PlayerInfo | undefined {
        for (let i = 0; i < this.m_arrPlayers.length; i++) {
            if (this.m_arrPlayers[i].m_iUin != uin) {
                return this.m_arrPlayers[i];
            }
        }
        return undefined;
    }

    private ClearRoom(): void {
        for (let i = 0; i < this.m_arrPlayers.length; i++) {
            RoomMgr.Get().ClearRoomByUin(this.m_arrPlayers[i].m_iUin);
        }
    }
}

class PlayerInfo {
    public m_iUin: number;
    public m_bReady: boolean = false;
    public m_iX: number = 0;
    public m_iY: number = 0;
    public m_iLife: number = 10;
    public m_iAttack: number = 1;
    public m_iAttackDis: number = 1;
    public m_iMine: number = 0;
    public m_iMineDis: number = 1;
    constructor(uin: number) {
        this.m_iUin = uin;
    }

    public GetNumByType(type: number): number {
        switch (type) {
            case 1:
                return this.m_iAttack;
            case 2:
                return this.m_iAttackDis;
            case 3:
                return this.m_iMineDis;
        }
        return 0;
    }

    public UpgradeByType(type: number): void {
        switch (type) {
            case 1:
                this.m_iAttack++;
                break;
            case 2:
                this.m_iAttackDis++;
                break;
            case 3:
                this.m_iMineDis++;
                break;
        }
    }
}
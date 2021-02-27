import { Player } from "./Player.ts";
import { PlayerMgr } from "./PlayerMgr.ts";
import { InfGameStart, InfMatchSuccess, InfPlayerPosition, MSGID, PlayerPosition, InfGameChat, InfPlayerTurn } from "./proto/msg.ts";

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
        this.InfAll(MSGID.INF_PLAYER_POSITION, inf.toBytes());
        setTimeout(this.StartTurn.bind(this), 1000);
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
}
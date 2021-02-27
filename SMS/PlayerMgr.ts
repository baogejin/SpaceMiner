import { Player } from "./Player.ts";
import { WebSocket, acceptWebSocket, isWebSocketCloseEvent, isWebSocketPingEvent } from "./deps.ts";
import { InfGameChat, MSGID } from "./proto/msg.ts";
export class PlayerMgr {
    private static m_pInstance: PlayerMgr;
    public static Get(): PlayerMgr {
        if (!PlayerMgr.m_pInstance) {
            PlayerMgr.m_pInstance = new PlayerMgr();
        }
        return PlayerMgr.m_pInstance;
    }
    private m_mapPlayer: Map<number, Player>;//已登录
    private m_arrPlayer: Array<Player>;//未登录
    public m_iLastUin: number = 1;
    constructor() {
        this.m_arrPlayer = new Array<Player>();
        this.m_mapPlayer = new Map<number, Player>();
    }

    public NewPlayer(sock: WebSocket): void {
        let player: Player = new Player(sock);
        this.m_arrPlayer.push(player);
    }

    public AddPlayerToMap(player: Player): void {
        if (player.m_iUin <= 0) {
            return;
        }
        let index: number = this.m_arrPlayer.indexOf(player);
        if (index > 0) {
            this.m_arrPlayer.splice(index, 1);
        }
        this.m_mapPlayer.set(player.m_iUin, player);
    }

    public DelPlayer(player: Player): void {
        if (player.m_iUin == 0) {
            let index: number = this.m_arrPlayer.indexOf(player);
            if (index > 0) {
                this.m_arrPlayer.splice(index, 1);
            }
        } else {
            this.m_mapPlayer.delete(player.m_iUin);
        }
    }

    public DelPlayerByUin(uin: number): void {
        if (uin > 0) {
            this.m_mapPlayer.delete(uin);
        }
    }

    public GetPlayer(uin: number): Player | undefined {
        if (uin > 0) {
            return this.m_mapPlayer.get(uin);
        }
        return undefined;
    }

    public ChatTest(uin: number, msg: string): void {
        let inf: InfGameChat = new InfGameChat({});
        inf.uin = uin;
        inf.msg = msg;
        this.m_mapPlayer.forEach((player, uin) => {
            player.Send(MSGID.INF_GAME_CHAT, inf.toBytes());
        });
    }
}
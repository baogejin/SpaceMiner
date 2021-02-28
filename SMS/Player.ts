import { WebSocket, acceptWebSocket, isWebSocketCloseEvent, isWebSocketPingEvent } from "./deps.ts";
import { MsgHeader } from "./MsgHeader.ts";
import { PlayerMgr } from "./PlayerMgr.ts";
import { RspMatch } from "./proto/msg.ts";
import { MSGID, RESULTID, RspLogin, ReqGameChat, ReqShipUpgrade, ReqShipOpt } from "./proto/msg.ts";
import { Room } from "./Room.ts";
import { RoomMgr } from "./RoomMgr.ts";
export class Player {
    public m_iUin: number = 0;
    private m_stWebsocket: WebSocket;
    private m_stMsgHeader: MsgHeader;
    private m_mapHandle: Map<number, Function>;
    constructor(sock: WebSocket) {
        this.m_stWebsocket = sock;
        this.m_stMsgHeader = new MsgHeader();
        this.m_mapHandle = new Map<number, Function>();
        this.RegisterMsg();
        this.Listen();
    }

    private RegisterMsg(): void {
        this.m_mapHandle.set(MSGID.REQ_LOGIN, this.OnReqLogin.bind(this));
        this.m_mapHandle.set(MSGID.REQ_GAME_CHAT, this.OnReqGameChat.bind(this));
        this.m_mapHandle.set(MSGID.REQ_MATCH, this.OnReqMatch.bind(this));
        this.m_mapHandle.set(MSGID.REQ_START_GAME, this.OnReqStartGame.bind(this));
        this.m_mapHandle.set(MSGID.REQ_END_TURN, this.OnReqEndTurn.bind(this));
        this.m_mapHandle.set(MSGID.REQ_SHIP_UPGRADE, this.OnReqShipUpgrade.bind(this));
        this.m_mapHandle.set(MSGID.REQ_SHIP_OPT, this.OnReqShipOpt.bind(this));
    }

    private async Listen(): Promise<void> {
        try {
            for await (const ev of this.m_stWebsocket) {
                if (ev instanceof Uint8Array) {
                    // binary message.
                    this.m_stMsgHeader.Decode(ev);
                    console.log(this.m_stMsgHeader);
                    this.HandleMsg(this.m_stMsgHeader.m_iMessageID, this.m_stMsgHeader.m_stBody)
                } else if (isWebSocketCloseEvent(ev)) {
                    // close.
                    const { code, reason } = ev;
                    console.log("ws:Close", code, reason);
                    PlayerMgr.Get().DelPlayer(this);
                } else {
                    //其他类型的不处理
                }

            }
        } catch (err) {
            console.error(`failed to receive frame: ${err}`);

            if (!this.m_stWebsocket.isClosed) {
                await this.m_stWebsocket.close(1000).catch(console.error);
            }
        }
    }

    private HandleMsg(msgId: number, body: Uint8Array): void {
        if (this.m_mapHandle.has(msgId)) {
            let f = this.m_mapHandle.get(msgId);
            if (f) {
                f(body);
            }
        } else {
            console.log("消息没有找到处理函数，msgid", msgId);
        }
    }

    public CheckConn(): boolean {
        if (this.m_stWebsocket.isClosed) {
            PlayerMgr.Get().DelPlayer(this);
            return false;
        }
        return true;
    }

    public Send(msgId: number, body: Uint8Array): void {
        if (!this.CheckConn()) {
            return;
        }
        this.m_stMsgHeader.m_iMessageID = msgId;
        this.m_stWebsocket.send(new Uint8Array(this.m_stMsgHeader.Encode(body)));
    }

    private OnReqLogin(body: Uint8Array): void {
        this.m_iUin = PlayerMgr.Get().m_iLastUin++;
        this.m_stMsgHeader.m_iUin = this.m_iUin;
        PlayerMgr.Get().AddPlayerToMap(this);
        console.log("player login,uin", this.m_iUin);
        let rsp: RspLogin = new RspLogin({});
        rsp.result = RESULTID.SUCCESS;
        rsp.uin = this.m_iUin;
        this.Send(MSGID.RSP_LOGIN, rsp.toBytes());
    }

    private OnReqGameChat(body: Uint8Array): void {
        let req: ReqGameChat = ReqGameChat.fromBytes(body);
        if (this.m_iUin == 0) {
            //没登录呢
            return;
        }
        let room = RoomMgr.Get().GetRoom(this.m_iUin);
        if (room) {
            room.InfGameChat(this.m_iUin, req.msg);
        }
    }

    private OnReqMatch(body: Uint8Array): void {
        if (this.m_iUin == 0) {
            return;
        }
        let rsp: RspMatch = new RspMatch({});
        this.Send(MSGID.RSP_MATCH, rsp.toBytes());
        RoomMgr.Get().AddMatchPlayer(this.m_iUin);
    }

    private OnReqStartGame(body: Uint8Array): void {
        let room = RoomMgr.Get().GetRoom(this.m_iUin);
        if (room) {
            room.SetPlayerReady(this.m_iUin);
        }
    }

    private OnReqEndTurn(body: Uint8Array): void {
        let room = RoomMgr.Get().GetRoom(this.m_iUin);
        if (room) {
            room.EndTurn(this.m_iUin);
        }
    }

    private OnReqShipUpgrade(body: Uint8Array): void {
        let req: ReqShipUpgrade = ReqShipUpgrade.fromBytes(body);
        let room = RoomMgr.Get().GetRoom(this.m_iUin);
        if (room) {
            room.ShipUpgrade(this.m_iUin, req.type);
        }
    }

    private OnReqShipOpt(body: Uint8Array): void {
        let req: ReqShipOpt = ReqShipOpt.fromBytes(body);
        let room = RoomMgr.Get().GetRoom(this.m_iUin);
        if (room) {
            room.ShipOpt(this.m_iUin, req.type, req.posX, req.posY);
        }
    }
}
import { NetMgr } from "./NetMgr";
import { MSGID, ReqEndTurn, ReqGameChat, ReqLogin, ReqMatch, ReqStartGame } from "./proto/msg";

export class ServerHander {
    private static m_pInstance: ServerHander;
    public static Get(): ServerHander {
        if (!ServerHander.m_pInstance) {
            ServerHander.m_pInstance = new ServerHander();
        }
        return ServerHander.m_pInstance;
    }
    constructor() {
        this.Init();
    }

    private Init(): void {

    }

    public ReqLogin(): void {
        let req: ReqLogin = ReqLogin.create();
        let buf: Uint8Array = ReqLogin.encode(req).finish();
        NetMgr.Get().Send(MSGID.REQ_LOGIN, buf);
    }

    public ReqGameChat(msg: string): void {
        let req: ReqGameChat = ReqGameChat.create();
        req.msg = msg;
        let buf: Uint8Array = ReqGameChat.encode(req).finish();
        NetMgr.Get().Send(MSGID.REQ_GAME_CHAT, buf);
    }

    public ReqMatch(): void {
        let req: ReqMatch = ReqMatch.create();
        let buf: Uint8Array = ReqMatch.encode(req).finish();
        NetMgr.Get().Send(MSGID.REQ_MATCH, buf);
    }

    public ReqStartGame(): void {
        let req: ReqStartGame = ReqStartGame.create();
        let buf: Uint8Array = ReqStartGame.encode(req).finish();
        NetMgr.Get().Send(MSGID.REQ_START_GAME, buf);
    }

    public ReqEndTurn(): void {
        let req: ReqEndTurn = ReqEndTurn.create();
        let buf: Uint8Array = ReqEndTurn.encode(req).finish();
        NetMgr.Get().Send(MSGID.REQ_END_TURN, buf);
    }
}
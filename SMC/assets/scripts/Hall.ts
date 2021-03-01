import EventMgr from "./EventMgr";
import { Global } from "./Glabal";
import { InfMatchSuccess, MSGID } from "./proto/msg";
import { ServerHander } from "./ServerHandler";

export class Hall {
    private static m_pInstance: Hall;
    public static Get(): Hall {
        if (!Hall.m_pInstance) {
            Hall.m_pInstance = new Hall();
        }
        return Hall.m_pInstance;
    }
    private m_stMatchBtn: cc.Node;
    private m_stLabNode: cc.Node;

    public Init(matchBtn: cc.Node, labNode: cc.Node): void {
        this.m_stMatchBtn = matchBtn;
        this.m_stLabNode = labNode;

        this.m_stMatchBtn.on(cc.Node.EventType.TOUCH_END, this.OnMatch, this);
        EventMgr.Get().BindEvent(MSGID.RSP_MATCH, this.OnRspMatch, this);
        EventMgr.Get().BindEvent(MSGID.INF_MATCH_SUCCESS, this.OnMatchSuccess, this);
    }

    private OnMatchSuccess(body: Uint8Array): void {
        let inf: InfMatchSuccess = InfMatchSuccess.decode(body);
        Global.ENEMY = inf.uin;
        cc.director.loadScene("GameScene", () => {
            console.log("匹配成功，切换到游戏场景");
        });
    }

    private OnRspMatch(): void {
        this.m_stMatchBtn.active = false;
        this.m_stLabNode.active = true;
    }

    private OnMatch(): void {
        ServerHander.Get().ReqMatch();
    }
}
import { ChatRender } from "./ChatRender";
import EventMgr from "./EventMgr";
import { Global } from "./Glabal";
import { InfGameChat, MSGID } from "./proto/msg";
import { ServerHander } from "./ServerHandler";

export class ChatMgr {
    private m_stScrollView: cc.ScrollView;
    private m_stContent: cc.Node;
    private m_stEditBox: cc.EditBox;
    private m_stSendBtn: cc.Node;
    private m_stChatRenderPrefab: cc.Prefab;
    private m_arrChat: Array<ChatRender>;
    public Init(chatNode: cc.Node, chatRenderPrefab: cc.Prefab) {
        this.m_stScrollView = chatNode.getChildByName("scrollview").getComponent(cc.ScrollView);
        this.m_stContent = this.m_stScrollView.content;
        this.m_stContent.height = 0;
        this.m_stEditBox = chatNode.getChildByName("editbox").getComponent(cc.EditBox);
        this.m_stSendBtn = chatNode.getChildByName("send");
        this.m_stChatRenderPrefab = chatRenderPrefab;

        this.m_arrChat = new Array<ChatRender>();

        this.m_stSendBtn.on(cc.Node.EventType.TOUCH_END, this.OnSendMsg, this);

        EventMgr.Get().BindEvent(MSGID.INF_GAME_CHAT, this.OnInfGameChat, this);
    }

    private OnSendMsg(): void {
        if (this.m_stEditBox.string == "") {
            return;
        }
        else {
            ServerHander.Get().ReqGameChat(this.m_stEditBox.string);
            this.m_stEditBox.string = "";
        }
    }

    public AddMsg(msg: string): void {
        let render: ChatRender = new ChatRender(cc.instantiate(this.m_stChatRenderPrefab));
        render.SetMsg(msg);
        render.node.parent = this.m_stContent;
        render.node.y = -this.m_stContent.height;
        this.m_stContent.height += render.node.height;
        this.m_arrChat.push(render);
        if (this.m_stContent.height > this.m_stScrollView.node.height) {
            this.m_stScrollView.scrollToBottom();
        }
    }

    private OnInfGameChat(body: Uint8Array): void {
        let inf: InfGameChat = InfGameChat.decode(body);
        this.AddMsg(`${inf.uin == Global.UIN ? "自己" : "敌方"}:${inf.msg}`);
    }
}
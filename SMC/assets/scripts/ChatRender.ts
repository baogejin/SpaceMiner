export class ChatRender {
    private m_stSkin: cc.Node;
    private m_stMsgLab: cc.Label;
    constructor(inst: cc.Node) {
        this.m_stSkin = inst;
        this.m_stMsgLab = this.m_stSkin.getChildByName("label").getComponent(cc.Label);
    }

    public get node(): cc.Node {
        return this.m_stSkin;
    }

    public SetMsg(msg: string): void {
        this.m_stMsgLab.string = msg;
        this.m_stMsgLab._forceUpdateRenderData();
        this.node.height = this.m_stMsgLab.node.height + 3;
    }
}
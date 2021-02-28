export class AlertMgr {
    private m_stAlertNode: cc.Node;
    private m_stLab: cc.Label;
    private m_stSure: cc.Node;
    private m_stCancel: cc.Node;
    private m_fnCB: Function = null;
    public Init(alertNode: cc.Node): void {
        this.m_stAlertNode = alertNode;
        this.m_stLab = this.m_stAlertNode.getChildByName("label").getComponent(cc.Label);
        this.m_stSure = this.m_stAlertNode.getChildByName("sure");
        this.m_stCancel = this.m_stAlertNode.getChildByName("cancel");

        this.m_stSure.on(cc.Node.EventType.TOUCH_END, this.OnSure, this);
        this.m_stCancel.on(cc.Node.EventType.TOUCH_END, this.OnCancel, this);
    }

    private OnSure(): void {
        this.m_stAlertNode.active = false;
        if (this.m_fnCB) {
            this.m_fnCB();
        }
    }

    private OnCancel(): void {
        this.m_stAlertNode.active = false;
    }

    public ShowAlert(desc: string, cb: Function = null): void {
        this.m_fnCB = cb;
        this.m_stLab.string = desc;
        this.m_stAlertNode.active = true;
    }
}
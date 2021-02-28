export class SelectMgr {
    private m_stSelectNode: cc.Node;
    private m_stMine: cc.Node;
    private m_stMove: cc.Node;
    private m_fnMineCB: Function;
    private m_fnMoveCB: Function;
    public Init(selectNode: cc.Node): void {
        this.m_stSelectNode = selectNode;
        this.m_stMine = this.m_stSelectNode.getChildByName("mine");
        this.m_stMove = this.m_stSelectNode.getChildByName("move");

        this.m_stMine.on(cc.Node.EventType.TOUCH_END, this.OnMine, this);
        this.m_stMove.on(cc.Node.EventType.TOUCH_END, this.OnMove, this);
    }

    public ShowSelect(mineCB: Function, moveCB: Function) {
        this.m_stSelectNode.active = true;
        this.m_fnMineCB = mineCB;
        this.m_fnMoveCB = moveCB;
    }

    private OnMine(): void {
        this.m_stSelectNode.active = false;
        this.m_fnMineCB();
    }

    private OnMove(): void {
        this.m_stSelectNode.active = false;
        this.m_fnMoveCB();
    }
}
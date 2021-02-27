import { Game } from "./Game";

export class MapGrid {
    private m_stSkin: cc.Node;
    private m_iIdx: number;
    private m_iX: number;
    private m_iY: number;
    public m_iMine: number;
    private m_stLab: cc.Label;
    constructor(inst: cc.Node, idx: number) {
        this.m_stSkin = inst;
        this.m_stLab = this.m_stSkin.getChildByName("label").getComponent(cc.Label);
        this.m_iIdx = idx;
        this.m_iX = idx % 6;
        this.m_iY = Math.floor(idx / 6);
        this.m_stSkin.setPosition(Game.Map.GetGridPosition(this.m_iX, this.m_iY));

        this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this);
    }

    public get node(): cc.Node {
        return this.m_stSkin;
    }

    private OnTouchEnd(): void {
        Game.Map.MoveTest(this.m_iX, this.m_iY);
    }

    public SetMine(iMine: number): void {
        this.m_iMine = iMine;
        if (this.m_iMine > 0) {
            this.m_stLab.node.active = true;
            this.m_stLab.string = this.m_iMine.toString();
        }
    }
}
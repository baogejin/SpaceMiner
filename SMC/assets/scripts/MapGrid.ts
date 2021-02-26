import { Game } from "./Game";

export class MapGrid {
    private m_stSkin: cc.Node;
    private m_iIdx: number;
    private m_iX: number;
    private m_iY: number;
    constructor(inst: cc.Node, idx: number) {
        this.m_stSkin = inst;
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
}
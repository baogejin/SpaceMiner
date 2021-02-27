import { Game } from "./Game";

export class Ship {
    private m_stSkin: cc.Node;
    public m_iX: number;
    public m_iY: number;
    constructor(inst: cc.Node) {
        this.m_stSkin = inst;
    }

    public get node(): cc.Node {
        return this.m_stSkin;
    }

    public SetPos(iX: number, iY: number): void {
        this.m_iX = iX;
        this.m_iY = iY;
        this.node.active = true;
        this.node.setPosition(Game.Map.GetGridPosition(iX, iY));
    }

    public MoveTo(iX: number, iY: number): void {
        let dx: number = iX > this.m_iX ? iX - this.m_iX : this.m_iX - iX;
        let dy: number = iY > this.m_iY ? iY - this.m_iY : this.m_iY - iY;
        this.m_iX = iX;
        this.m_iY = iY;
        cc.tween(this.node).to((dx + dy) * 0.5, { position: Game.Map.GetGridPosition(iX, iY) }).start();
    }
}
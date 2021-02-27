import { Global } from "./Glabal";
import { ServerHander } from "./ServerHandler";

export class PlayerInfo {
    private m_stSkin: cc.Node;
    private m_stNameLab: cc.Label;
    private m_stLifeLab: cc.Label;
    private m_stAttackLab: cc.Label;
    private m_stAttackDisLab: cc.Label;
    private m_stMineDisLab: cc.Label;
    private m_stMineLab: cc.Label;
    private m_stAttackBtn: cc.Node;
    private m_stAttackDisBtn: cc.Node;
    private m_stMineDisBtn: cc.Node;
    private m_stEndBtn: cc.Node;
    private m_stBtnNode: cc.Node;

    public m_iUin: number;
    public m_iLife: number = 10;
    public m_iAttack: number = 1;
    public m_iAttackDis: number = 1;
    public m_iMine: number = 0;
    public m_iMineDis: number = 1;
    constructor(inst: cc.Node, uin: number) {
        this.m_stSkin = inst;
        this.m_iUin = uin;
        this.m_stNameLab = this.m_stSkin.getChildByName("name").getComponent(cc.Label);
        this.m_stLifeLab = this.m_stSkin.getChildByName("life").getComponent(cc.Label);
        this.m_stAttackLab = this.m_stSkin.getChildByName("attack").getComponent(cc.Label);
        this.m_stAttackDisLab = this.m_stSkin.getChildByName("attack_dis").getComponent(cc.Label);
        this.m_stMineDisLab = this.m_stSkin.getChildByName("mine_dis").getComponent(cc.Label);
        this.m_stMineLab = this.m_stSkin.getChildByName("mine").getComponent(cc.Label);
        this.m_stBtnNode = this.m_stSkin.getChildByName("btn_node");
        this.m_stAttackBtn = this.m_stBtnNode.getChildByName("attack_btn");
        this.m_stAttackDisBtn = this.m_stBtnNode.getChildByName("attack_dis_btn");
        this.m_stMineDisBtn = this.m_stBtnNode.getChildByName("mine_dis_btn");
        this.m_stEndBtn = this.m_stBtnNode.getChildByName("end_btn");

        if (uin == Global.UIN) {
            this.m_stNameLab.string = "我的飞船";
        } else {
            this.m_stNameLab.string = "敌方飞船";
        }
        this.m_stBtnNode.active = false;

        this.m_stEndBtn.on(cc.Node.EventType.TOUCH_END, this.EndTurn, this);
    }

    public get noed(): cc.Node {
        return this.m_stSkin;
    }

    public ShowBtns(): void {
        this.m_stBtnNode.active = true;
    }

    public HideBtns(): void {
        this.m_stBtnNode.active = false;
    }

    private EndTurn(): void {
        ServerHander.Get().ReqEndTurn();
    }
}
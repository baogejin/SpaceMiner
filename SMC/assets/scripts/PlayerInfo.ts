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
    constructor(inst: cc.Node) {
        this.m_stSkin = inst;
        this.m_stNameLab = this.m_stSkin.getChildByName("name").getComponent(cc.Label);
        this.m_stLifeLab = this.m_stSkin.getChildByName("life").getComponent(cc.Label);
        this.m_stAttackLab = this.m_stSkin.getChildByName("attack").getComponent(cc.Label);
        this.m_stAttackDisLab = this.m_stSkin.getChildByName("attack_dis").getComponent(cc.Label);
        this.m_stMineDisLab = this.m_stSkin.getChildByName("mine_dis").getComponent(cc.Label);
        this.m_stMineLab = this.m_stSkin.getChildByName("mine").getComponent(cc.Label);
        this.m_stAttackBtn = this.m_stSkin.getChildByName("attack_btn");
        this.m_stAttackDisBtn = this.m_stSkin.getChildByName("attack_dis_btn");
        this.m_stMineDisBtn = this.m_stSkin.getChildByName("mine_dis_btn");
    }

    public get noed(): cc.Node {
        return this.m_stSkin;
    }
}
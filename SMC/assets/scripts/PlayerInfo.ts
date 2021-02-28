import EventMgr from "./EventMgr";
import { Game } from "./Game";
import { Global } from "./Glabal";
import { InfShipUpgrade, MSGID } from "./proto/msg";
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
    private m_iLife: number = 10;
    private m_iAttack: number = 1;
    private m_iAttackDis: number = 1;
    private m_iMine: number = 0;
    private m_iMineDis: number = 1;
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
        this.m_stAttackBtn.on(cc.Node.EventType.TOUCH_END, this.OnReqUpgradeAttack, this);
        this.m_stAttackDisBtn.on(cc.Node.EventType.TOUCH_END, this.OnReqUpgradeAttackDis, this);
        this.m_stMineDisBtn.on(cc.Node.EventType.TOUCH_END, this.OnReqUpgradeMineDis, this);

        EventMgr.Get().BindEvent(MSGID.INF_SHIP_UPGRADE, this.OnShipUpgrade, this);
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

    private OnReqUpgradeAttack(): void {
        let mine = (this.m_iAttack + 2) * (this.m_iAttack + 1) / 2;
        if (mine > this.m_iMine) {
            //矿石不足
            Game.Alert.ShowAlert(`矿石不足，升级攻击力到${this.m_iAttack + 1}需要${mine}矿石，当前拥有${this, this.m_iMine}矿石`);
        } else {
            Game.Alert.ShowAlert(`确定要花费${mine}矿石将攻击力升级到${this.m_iAttack + 1}吗？`, () => {
                ServerHander.Get().ReqShipUpgrade(1);
            })
        }
    }

    private OnReqUpgradeAttackDis(): void {
        let mine = (this.m_iAttackDis + 2) * (this.m_iAttackDis + 1) / 2;
        if (mine > this.m_iMine) {
            //矿石不足
            Game.Alert.ShowAlert(`矿石不足，升级攻击距离到${this.m_iAttackDis + 1}需要${mine}矿石，当前拥有${this, this.m_iMine}矿石`);
        } else {
            Game.Alert.ShowAlert(`确定要花费${mine}矿石将攻击距离升级到${this.m_iAttackDis + 1}吗？`, () => {
                ServerHander.Get().ReqShipUpgrade(2);
            })
        }
    }

    private OnReqUpgradeMineDis(): void {
        let mine = (this.m_iMineDis + 2) * (this.m_iMineDis + 1) / 2;
        if (mine > this.m_iMine) {
            //矿石不足
            Game.Alert.ShowAlert(`矿石不足，升级采矿距离到${this.m_iMineDis + 1}需要${mine}矿石，当前拥有${this, this.m_iMine}矿石`);
        } else {
            Game.Alert.ShowAlert(`确定要花费${mine}矿石将采矿距离升级到${this.m_iMineDis + 1}吗？`, () => {
                ServerHander.Get().ReqShipUpgrade(3);
            })
        }
    }

    public get Life(): number {
        return this.m_iLife;
    }

    public ReduceLife(num: number): void {
        this.m_iLife -= num;
        this.m_stLifeLab.string = `生命值 ${this.m_iLife}`;
    }

    public get Attack(): number {
        return this.m_iAttack;
    }

    public UpgradeAttack(): void {
        this.m_iAttack++;
        let mine = (this.m_iAttack + 1) * this.m_iAttack / 2;
        this.ReduceMine(mine);
        this.m_stAttackLab.string = `攻击力 ${this.m_iAttack}`;
        Game.Chat.AddMsg(`${this.m_stNameLab.string}升级了攻击力到${this.m_iAttack}，消耗了${mine}矿石`);
    }

    public get AttackDis(): number {
        return this.m_iAttackDis;
    }

    public UpgradeAttackDis(): void {
        this.m_iAttackDis++;
        let mine = (this.m_iAttackDis + 1) * this.m_iAttackDis / 2;
        this.ReduceMine(mine);
        this.m_stAttackDisLab.string = `攻击距离 ${this.m_iAttackDis}`;
        Game.Chat.AddMsg(`${this.m_stNameLab.string}升级了攻击距离到${this.m_iAttackDis}，消耗了${mine}矿石`);
    }

    public get Mine(): number {
        return this.m_iMine;
    }

    public AddMine(num: number): void {
        this.m_iMine += num;
        this.m_stMineLab.string = `矿石 ${this.m_iMine}`;
    }

    public ReduceMine(num: number): void {
        this.m_iMine -= num;
        this.m_stMineLab.string = `矿石 ${this.m_iMine}`;
    }

    public get MineDis(): number {
        return this.m_iMineDis;
    }

    public UpgradeMineDis(): void {
        this.m_iMineDis++;
        let mine = (this.m_iMineDis + 1) * this.m_iMineDis / 2;
        this.ReduceMine(mine);
        this.m_stMineDisLab.string = `采矿距离 ${this.m_iMineDis}`;
        Game.Chat.AddMsg(`${this.m_stNameLab.string}升级了采矿距离到${this.m_iMineDis}，消耗了${mine}矿石`);
    }

    private OnShipUpgrade(body: Uint8Array): void {
        let inf: InfShipUpgrade = InfShipUpgrade.decode(body);
        if (inf.uin == this.m_iUin) {
            switch (inf.type) {
                case 1:
                    this.UpgradeAttack();
                    break;
                case 2:
                    this.UpgradeAttackDis();
                    break;
                case 3:
                    this.UpgradeMineDis();
                    break;

            }
        }
    }
}
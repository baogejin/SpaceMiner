import { Game } from "./Game";
import { Global } from "./Glabal";
import { PlayerInfo } from "./PlayerInfo";

export class PlayerMgr {
    private m_stPlayerInfoPrefab: cc.Prefab;
    private m_stMyInfo: PlayerInfo;
    private m_stEnemyInfo: PlayerInfo;
    private m_stPlayerNode: cc.Node;
    public Init(playerInfoPrefab: cc.Prefab, playerNode: cc.Node): void {
        this.m_stPlayerInfoPrefab = playerInfoPrefab;
        this.m_stPlayerNode = playerNode;
        this.m_stMyInfo = new PlayerInfo(cc.instantiate(this.m_stPlayerInfoPrefab), Global.UIN);
        this.m_stMyInfo.noed.x = -160;
        this.m_stMyInfo.noed.parent = this.m_stPlayerNode;

        this.m_stEnemyInfo = new PlayerInfo(cc.instantiate(this.m_stPlayerInfoPrefab), Global.ENEMY);
        this.m_stEnemyInfo.noed.x = 160;
        this.m_stEnemyInfo.noed.parent = this.m_stPlayerNode;
    }

    public UpdateTurn(): void {
        if (Global.UIN == Global.CUR_TURN) {
            this.m_stMyInfo.ShowBtns();
        } else {
            this.m_stMyInfo.HideBtns();
        }
    }

    public AddMine(uin: number, mine: number): void {
        if (uin == Global.UIN) {
            this.m_stMyInfo.AddMine(mine);
        } else if (uin == Global.ENEMY) {
            this.m_stEnemyInfo.AddMine(mine);
        }
    }

    public ReduceMine(uin: number, mine: number): void {
        if (uin == Global.UIN) {
            this.m_stMyInfo.ReduceMine(mine);
        } else if (uin == Global.ENEMY) {
            this.m_stEnemyInfo.ReduceMine(mine);
        }
    }

    public GetMyInfo(): PlayerInfo {
        return this.m_stMyInfo;
    }

    public MyAttack(): void {
        this.m_stEnemyInfo.ReduceLife(this.m_stMyInfo.Attack);
        Game.Chat.AddMsg(`我的飞船发起了攻击，成功命中，对敌方飞船造成了${this.m_stMyInfo.Attack}点伤害`);
    }

    public EnemyAttack(): void {
        this.m_stMyInfo.ReduceLife(this.m_stEnemyInfo.Attack);
        Game.Chat.AddMsg(`敌方飞船发起了攻击，成功命中，对我的飞船造成了${this.m_stEnemyInfo.Attack}点伤害`);
    }
}
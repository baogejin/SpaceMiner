import EventMgr from "./EventMgr";
import { Game } from "./Game";
import { Global } from "./Glabal";
import { MapGrid } from "./MapGrid";
import { InfGameStart, InfPlayerPosition, InfPlayerTurn, MSGID } from "./proto/msg";
import { Ship } from "./Ship";

export class MapMgr {
    private m_arrGrids: Array<MapGrid>;
    private m_stGridPrefab: cc.Prefab;
    private m_stShipPrefab: cc.Prefab;
    private m_stMapNode: cc.Node;
    private m_stShip: Ship;
    private m_stEnemyShip: Ship;

    public Init(gridPrefab: cc.Prefab, shipPrefab: cc.Prefab, mapNode: cc.Node): void {
        this.m_stGridPrefab = gridPrefab;
        this.m_stShipPrefab = shipPrefab;
        this.m_stMapNode = mapNode;
        this.m_arrGrids = new Array<MapGrid>();
        for (let i = 0; i < 36; i++) {
            let grid: MapGrid = new MapGrid(cc.instantiate(this.m_stGridPrefab), i);
            grid.node.parent = mapNode;
            this.m_arrGrids.push(grid);
        }
        this.m_stShip = new Ship(cc.instantiate(this.m_stShipPrefab));
        this.m_stShip.node.parent = this.m_stMapNode;
        this.m_stShip.node.active = false;
        this.m_stShip.node.color = new cc.Color(125, 255, 125);
        this.m_stEnemyShip = new Ship(cc.instantiate(this.m_stShipPrefab));
        this.m_stEnemyShip.node.parent = this.m_stMapNode;
        this.m_stEnemyShip.node.active = false;
        this, this.m_stEnemyShip.node.color = new cc.Color(255, 125, 125);

        EventMgr.Get().BindEvent(MSGID.INF_GAME_START, this.OnGameStart, this);
        EventMgr.Get().BindEvent(MSGID.INF_PLAYER_POSITION, this.OnInfPlayerPosition, this);
        EventMgr.Get().BindEvent(MSGID.INF_PLAYER_TURN, this.OnInfPlayerTurn, this);
    }

    public GetGridPosition(iX: number, iY: number): cc.Vec2 {
        return new cc.Vec2(-300 + 120 * iX, -300 + 120 * iY);
    }

    public MoveTest(iX: number, iY: number): void {
        this.m_stShip.MoveTo(iX, iY);
    }

    public OnGameStart(body: Uint8Array): void {
        let inf: InfGameStart = InfGameStart.decode(body);
        if (inf.arrRes.length != 36) {
            console.error("初始资源数量不对啊", inf.arrRes.length);
            return;
        }
        for (let i = 0; i < 36; i++) {
            this.m_arrGrids[i].SetMine(inf.arrRes[i]);
        }
        Game.Chat.AddMsg("游戏开始，欢迎来到未开辟的新矿场");
    }

    private OnInfPlayerPosition(body: Uint8Array): void {
        let inf: InfPlayerPosition = InfPlayerPosition.decode(body);
        console.log(inf);
        for (let i = 0; i < inf.positions.length; i++) {
            if (inf.positions[i].uin == Global.UIN) {
                this.m_stShip.SetPos(inf.positions[i].posX, inf.positions[i].posY);
                Game.Chat.AddMsg("我的飞船入场");
            } else {
                this.m_stEnemyShip.SetPos(inf.positions[i].posX, inf.positions[i].posY);
                Game.Chat.AddMsg("敌方飞船入场");
            }
        }
    }

    private OnInfPlayerTurn(body: Uint8Array): void {
        let inf: InfPlayerTurn = InfPlayerTurn.decode(body);
        Global.CUR_TURN = inf.uin;
        Game.Player.UpdateTurn();
        Game.Chat.AddMsg(`${inf.uin == Global.UIN ? "我的" : "敌方"}回合开始`);
    }
}
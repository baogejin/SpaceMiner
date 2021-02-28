import EventMgr from "./EventMgr";
import { Game } from "./Game";
import { Global } from "./Glabal";
import { MapGrid } from "./MapGrid";
import { PlayerInfo } from "./PlayerInfo";
import { InfGameEnd, InfGameStart, InfPlayerPosition, InfPlayerTurn, InfShipOpt, MSGID } from "./proto/msg";
import { ServerHander } from "./ServerHandler";
import { Ship } from "./Ship";

export class MapMgr {
    private m_arrGrids: Array<MapGrid>;
    private m_stGridPrefab: cc.Prefab;
    private m_stShipPrefab: cc.Prefab;
    private m_stMapNode: cc.Node;
    private m_stShip: Ship;
    private m_stEnemyShip: Ship;
    private m_bOpted: boolean;
    private m_stBullet: cc.Node;

    public Init(gridPrefab: cc.Prefab, shipPrefab: cc.Prefab, mapNode: cc.Node, bulletPrefab: cc.Prefab): void {
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
        this.m_stEnemyShip.node.color = new cc.Color(255, 125, 125);
        this.m_stBullet = cc.instantiate(bulletPrefab);
        this.m_stBullet.parent = this.m_stMapNode;
        this.m_stBullet.active = false;

        EventMgr.Get().BindEvent(MSGID.INF_GAME_START, this.OnGameStart, this);
        EventMgr.Get().BindEvent(MSGID.INF_PLAYER_POSITION, this.OnInfPlayerPosition, this);
        EventMgr.Get().BindEvent(MSGID.INF_PLAYER_TURN, this.OnInfPlayerTurn, this);
        EventMgr.Get().BindEvent(MSGID.INF_SHIP_OPT, this.OnShipOpt, this);
        EventMgr.Get().BindEvent(MSGID.INF_GAME_END, this.OnGameEnd, this);
    }

    public GetGridPosition(iX: number, iY: number): cc.Vec2 {
        return new cc.Vec2(-300 + 120 * iX, -300 + 120 * iY);
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
                let num = this.PlayerGetMine(inf.positions[i].uin, inf.positions[i].posX, inf.positions[i].posY);
                Game.Chat.AddMsg(`我的飞船入场，获得了${num}矿石`);
            } else {
                this.m_stEnemyShip.SetPos(inf.positions[i].posX, inf.positions[i].posY);
                let num = this.PlayerGetMine(inf.positions[i].uin, inf.positions[i].posX, inf.positions[i].posY);
                Game.Chat.AddMsg(`敌方飞船入场，获得了${num}矿石`);
            }
        }
    }

    private PlayerGetMine(uin: number, posX: number, posY: number): number {
        let num: number = this.m_arrGrids[posY * 6 + posX].GetMine();
        Game.Player.AddMine(uin, num);
        return num;
    }

    private OnInfPlayerTurn(body: Uint8Array): void {
        let inf: InfPlayerTurn = InfPlayerTurn.decode(body);
        Global.CUR_TURN = inf.uin;
        if (inf.uin == Global.UIN) {
            this.m_bOpted = false;
        }
        Game.Player.UpdateTurn();
        Game.Chat.AddMsg(`${inf.uin == Global.UIN ? "我的回合开始，点击地图格子可以进行飞船操作" : "敌方回合开始"}`);
    }

    public OptGrid(iX: number, iY: number): void {
        if (Global.CUR_TURN != Global.UIN || this.m_bOpted) {
            return;
        }
        if (this.m_stShip.m_iX == iX && this.m_stShip.m_iY == iY) {
            return;
        }
        let dx: number = this.m_stShip.m_iX - iX;
        if (dx < 0) {
            dx = -dx;
        }
        let dy: number = this.m_stShip.m_iY - iY;
        if (dy < 0) {
            dy = -dy;
        }
        let dis: number = dx + dy;
        let myInfo: PlayerInfo = Game.Player.GetMyInfo();

        if (this.m_stEnemyShip.m_iX == iX && this.m_stEnemyShip.m_iY == iY) {
            //点击的敌方飞船
            let rate: number = 0;
            if (myInfo.AttackDis >= dis) {
                rate = 100;
            } else {
                rate = 100 - (dis - myInfo.AttackDis) * 20;
                if (rate < 0) {
                    rate = 0;
                }
            }
            Game.Alert.ShowAlert(`确定要攻击敌方吗？当前距离成功率${rate}%`, () => {
                ServerHander.Get().ReqShipOpt(1, iX, iY);
            });
            return;
        } else {
            let canMove: boolean = true;
            let canMine: boolean = this.m_arrGrids[iY * 6 + iX].Mine > 0;
            if (iX != this.m_stShip.m_iX && iY != this.m_stShip.m_iY) {
                canMove = false;
            } else {
                let minX: number = Math.min(this.m_stShip.m_iX, iX);
                let maxX: number = Math.max(this.m_stShip.m_iX, iX);
                let minY: number = Math.min(this.m_stShip.m_iY, iY);
                let maxY: number = Math.max(this.m_stShip.m_iY, iY);
                //看有没有敌船阻挡
                for (let i = minX; i <= maxX; i++) {
                    for (let j = minY; j <= maxY; j++) {
                        if (this.m_stEnemyShip.m_iX == i && this.m_stEnemyShip.m_iY == j) {
                            canMove = false;
                        }
                    }
                }
            }
            if (canMove && !canMine) {
                let mine: number = (dis + 1) * dis / 2;
                if (myInfo.Mine < mine) {
                    Game.Alert.ShowAlert(`移动所需矿石不足，需要${mine}矿石，拥有${myInfo.Mine}矿石`);
                } else {
                    Game.Alert.ShowAlert(`确定要移动到这个区域吗？将要消耗${mine}矿石`, () => {
                        ServerHander.Get().ReqShipOpt(3, iX, iY);
                    });
                }
            } else if (!canMove && canMine) {
                let rate: number = 0;
                if (myInfo.MineDis >= dis) {
                    rate = 100;
                } else {
                    rate = 100 - (dis - myInfo.MineDis) * 20;
                    if (rate < 0) {
                        rate = 0;
                    }
                }
                Game.Alert.ShowAlert(`确定要挖这个矿吗？当前距离成功率${rate}%`, () => {
                    ServerHander.Get().ReqShipOpt(2, iX, iY);
                });
            } else if (canMine && canMove) {
                Game.Select.ShowSelect(() => {
                    let rate: number = 0;
                    if (myInfo.MineDis >= dis) {
                        rate = 100;
                    } else {
                        rate = 100 - (dis - myInfo.MineDis) * 20;
                        if (rate < 0) {
                            rate = 0;
                        }
                    }
                    Game.Alert.ShowAlert(`确定要挖这个矿吗？当前距离成功率${rate}%`, () => {
                        ServerHander.Get().ReqShipOpt(2, iX, iY);
                    });
                }, () => {
                    let mine: number = (dis + 1) * dis / 2;
                    if (myInfo.Mine < mine) {
                        Game.Alert.ShowAlert(`移动所需矿石不足，需要${mine}矿石，拥有${myInfo.Mine}矿石`);
                    } else {
                        Game.Alert.ShowAlert(`确定要移动到这个区域吗？将要消耗${mine}矿石`, () => {
                            ServerHander.Get().ReqShipOpt(3, iX, iY);
                        });
                    }
                });
            }
        }
    }

    private OnShipOpt(body: Uint8Array): void {
        let inf: InfShipOpt = InfShipOpt.decode(body);
        this.m_bOpted = true;
        if (inf.type == 1) {
            if (inf.uin == Global.UIN && (this.m_stEnemyShip.m_iX != inf.posX || this.m_stEnemyShip.m_iY != inf.posY)) {
                console.error("信息不同步了");
                return;
            }
            if (inf.uin == Global.ENEMY && (this.m_stShip.m_iX != inf.posX || this.m_stShip.m_iY != inf.posY)) {
                console.error("信息不同步了");
                return;
            }
            if (inf.uin == Global.UIN) {
                this.BulletFly(this.m_stShip.m_iX, this.m_stShip.m_iY, inf.posX, inf.posY);
            } else {
                this.BulletFly(this.m_stEnemyShip.m_iX, this.m_stEnemyShip.m_iY, inf.posX, inf.posY);
            }
            if (inf.result) {
                if (inf.uin == Global.UIN) {
                    Game.Player.MyAttack();
                } else {
                    Game.Player.EnemyAttack();
                }
            } else {
                Game.Chat.AddMsg(`${inf.uin == Global.UIN ? "我的飞船" : "敌方飞船"}发起了攻击，距离太远，未命中`);
            }
        } else if (inf.type == 2) {
            if (inf.uin == Global.UIN) {
                this.BulletFly(this.m_stShip.m_iX, this.m_stShip.m_iY, inf.posX, inf.posY);
            } else {
                this.BulletFly(this.m_stEnemyShip.m_iX, this.m_stEnemyShip.m_iY, inf.posX, inf.posY);
            }
            if (inf.result) {
                let num = this.PlayerGetMine(inf.uin, inf.posX, inf.posY);
                Game.Chat.AddMsg(`${inf.uin == Global.UIN ? "我的飞船" : "敌方飞船"}对（${inf.posX + 1}，${inf.posY + 1}）区域进行了开采，开采成功，获得了${num}矿石`);
            } else {
                Game.Chat.AddMsg(`${inf.uin == Global.UIN ? "我的飞船" : "敌方飞船"}对（${inf.posX + 1}，${inf.posY + 1}）区域进行了开采，距离太远，开采失败`);
            }
        } else if (inf.type == 3) {
            let ship: Ship = inf.uin == Global.UIN ? this.m_stShip : this.m_stEnemyShip;
            let minX = Math.min(ship.m_iX, inf.posX);
            let maxX = Math.max(ship.m_iX, inf.posX);
            let minY = Math.min(ship.m_iY, inf.posY);
            let maxY = Math.max(ship.m_iY, inf.posY);
            let num = 0;
            let dis = maxX - minX + maxY - minY;
            let mine = dis * (dis + 1) / 2;
            Game.Player.ReduceMine(inf.uin, mine);
            for (let i = minX; i <= maxX; i++) {
                for (let j = minY; j <= maxY; j++) {
                    num += this.PlayerGetMine(inf.uin, i, j);
                }
            }
            ship.MoveTo(inf.posX, inf.posY);
            Game.Chat.AddMsg(`${inf.uin == Global.UIN ? "我的飞船" : "敌方飞船"}移动到了（${inf.posX + 1}，${inf.posY + 1}）区域，消耗了${mine}矿石，途中采集了${num}矿石`);
        }
    }

    private OnGameEnd(body: Uint8Array): void {
        let inf: InfGameEnd = InfGameEnd.decode(body);
        setTimeout(() => {
            Game.Alert.ShowAlert(`你${inf.uin == Global.UIN ? "赢" : "输"}了\n重新打开或者刷新网页再次体验游戏`);
        }, 2000);
    }

    private BulletFly(sx, sy, ex, ey): void {
        let spos: cc.Vec2 = this.GetGridPosition(sx, sy)
        let epos: cc.Vec2 = this.GetGridPosition(ex, ey);
        this.m_stBullet.setPosition(spos);
        this.m_stBullet.active = true;
        let dis: number = cc.Vec2.distance(spos, epos);
        console.log(dis);
        cc.tween(this.m_stBullet)
            .to(dis / 400, { position: epos })
            .call(() => { this.m_stBullet.active = false })
            .start();
    }
}
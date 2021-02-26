import { MapGrid } from "./MapGrid";
import { Ship } from "./Ship";

export class MapMgr {
    private m_arrGrids: Array<MapGrid>;
    private m_stGridPrefab: cc.Prefab;
    private m_stShipPrefab: cc.Prefab;
    private m_stMapNode: cc.Node;
    private m_stShip: Ship;

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
        this.m_stShip.SetPos(0, 0);
        this.m_stShip.node.parent = this.m_stMapNode;
    }

    public GetGridPosition(iX: number, iY: number): cc.Vec2 {
        return new cc.Vec2(-300 + 120 * iX, -300 + 120 * iY);
    }

    public MoveTest(iX: number, iY: number): void {
        this.m_stShip.MoveTo(iX, iY);
    }
}
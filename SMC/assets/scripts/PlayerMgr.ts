import { PlayerInfo } from "./PlayerInfo";

export class PlayerMgr {
    private m_stPlayerInfoPrefab: cc.Prefab;
    private m_stMyInfo: PlayerInfo;
    private m_stEnemyInfo: PlayerInfo;
    private m_stPlayerNode: cc.Node;
    public Init(playerInfoPrefab: cc.Prefab, playerNode: cc.Node): void {
        this.m_stPlayerInfoPrefab = playerInfoPrefab;
        this.m_stPlayerNode = playerNode;
        this.m_stMyInfo = new PlayerInfo(cc.instantiate(this.m_stPlayerInfoPrefab));
        this.m_stMyInfo.noed.x = -160;
        this.m_stMyInfo.noed.parent = this.m_stPlayerNode;

        this.m_stEnemyInfo = new PlayerInfo(cc.instantiate(this.m_stPlayerInfoPrefab));
        this.m_stEnemyInfo.noed.x = 160;
        this.m_stEnemyInfo.noed.parent = this.m_stPlayerNode;
    }
}
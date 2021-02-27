import { Player } from "./Player.ts";
import { PlayerMgr } from "./PlayerMgr.ts";
import { Room } from "./Room.ts";

export class RoomMgr {
    private static m_pInstance: RoomMgr
    public static Get(): RoomMgr {
        if (!RoomMgr.m_pInstance) {
            RoomMgr.m_pInstance = new RoomMgr();
        }
        return RoomMgr.m_pInstance;
    }

    private m_mapRoom: Map<number, Room> = new Map<number, Room>();
    private m_iWaitPlayer: number = 0;
    public AddMatchPlayer(uin: number): void {
        if (this.m_iWaitPlayer == 0) {
            this.m_iWaitPlayer = uin;
        } else if (this.m_iWaitPlayer == uin) {
            return;
        } else {
            let player = PlayerMgr.Get().GetPlayer(this.m_iWaitPlayer);
            if (!player || !player.CheckConn()) {
                this.m_iWaitPlayer = uin;
            } else {
                //两个人开始吧
                let room: Room = new Room(this.m_iWaitPlayer, uin);
                this.m_mapRoom.set(this.m_iWaitPlayer, room);
                this.m_mapRoom.set(uin, room);
                this.m_iWaitPlayer = 0;
            }
        }
    }

    public GetRoom(uin: number): Room | undefined {
        return this.m_mapRoom.get(uin);
    }
}
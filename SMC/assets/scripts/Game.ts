import { ChatMgr } from "./ChatMgr";
import { MapMgr } from "./MapMgr";
import { PlayerMgr } from "./PlayerMgr";

export class Game {
    private static m_pMapMgr: MapMgr;
    private static m_pPlayerMgr: PlayerMgr;
    private static m_pChatMgr: ChatMgr;

    public static Init(): void {
        Game.m_pMapMgr = new MapMgr();
        Game.m_pPlayerMgr = new PlayerMgr();
        Game.m_pChatMgr = new ChatMgr();
    }

    public static get Map(): MapMgr {
        return Game.m_pMapMgr;
    }

    public static get Player(): PlayerMgr {
        return Game.m_pPlayerMgr;
    }

    public static get Chat(): ChatMgr {
        return Game.m_pChatMgr;
    }
}
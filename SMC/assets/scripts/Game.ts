import { AlertMgr } from "./AlterMgr";
import { ChatMgr } from "./ChatMgr";
import { MapMgr } from "./MapMgr";
import { PlayerMgr } from "./PlayerMgr";
import { SelectMgr } from "./SelectMgr";

export class Game {
    private static m_pMapMgr: MapMgr;
    private static m_pPlayerMgr: PlayerMgr;
    private static m_pChatMgr: ChatMgr;
    private static m_pAlertMgr: AlertMgr;
    private static m_pSelectMgr: SelectMgr;

    public static Init(): void {
        Game.m_pMapMgr = new MapMgr();
        Game.m_pPlayerMgr = new PlayerMgr();
        Game.m_pChatMgr = new ChatMgr();
        Game.m_pAlertMgr = new AlertMgr();
        Game.m_pSelectMgr = new SelectMgr();
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

    public static get Alert(): AlertMgr {
        return Game.m_pAlertMgr;
    }

    public static get Select(): SelectMgr {
        return Game.m_pSelectMgr;
    }
}
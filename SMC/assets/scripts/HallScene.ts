// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventMgr from "./EventMgr";
import { Global } from "./Glabal";
import { InfMatchSuccess, MSGID } from "./proto/msg";
import { ServerHander } from "./ServerHandler";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property(cc.Node)
    matchBtn: cc.Node = null;

    @property(cc.Node)
    matchLab: cc.Node = null;

    start() {
        this.matchBtn.on(cc.Node.EventType.TOUCH_END, this.OnMatch, this);
        EventMgr.Get().BindEvent(MSGID.RSP_MATCH, this.OnRspMatch, this);
        EventMgr.Get().BindEvent(MSGID.INF_MATCH_SUCCESS, this.OnMatchSuccess, this);
    }

    // update (dt) {}

    private OnMatch(): void {
        ServerHander.Get().ReqMatch();
    }

    onDestroy() {
        EventMgr.Get().UnBindTarget(this);
    }

    private OnMatchSuccess(body: Uint8Array): void {
        let inf: InfMatchSuccess = InfMatchSuccess.decode(body);
        Global.ENEMY = inf.uin;
        cc.director.loadScene("GameScene", () => {
            console.log("匹配成功，切换到游戏场景");
        });
    }

    private OnRspMatch(): void {
        this.matchBtn.active = false;
        this.matchLab.active = true;
    }
}

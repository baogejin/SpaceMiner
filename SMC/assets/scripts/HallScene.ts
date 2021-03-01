// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventMgr from "./EventMgr";
import { Global } from "./Glabal";
import { Hall } from "./Hall";
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
        Hall.Get().Init(this.matchBtn, this.matchLab);
    }

    // update (dt) {}



}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Game } from "./Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    mapGridPrefab: cc.Prefab = null;

    @property(cc.Node)
    mapNode: cc.Node = null;

    @property(cc.Prefab)
    shipPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    playerInfoPrefab: cc.Prefab = null;

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property(cc.Node)
    chatNode: cc.Node = null;

    @property(cc.Prefab)
    chatRenderPrefab: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        Game.Init();
        Game.Map.Init(this.mapGridPrefab, this.shipPrefab, this.mapNode);
        Game.Player.Init(this.playerInfoPrefab, this.playerNode);
        Game.Chat.Init(this.chatNode, this.chatRenderPrefab);
    }

    // update (dt) {}
}

var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.mainScene = new Main();
        this.startChallengePage = new StartChallengePage();
        this.answeringPage = new AnsweringPage();
        this.succeedPage = new SucceedPage();
        this.popupsPage = new PopupsPage();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    // 删除其他场景
    SceneManager.prototype.removeOtherScene = function (scene) {
        var _this = this;
        var arr = [this.mainScene, this.startChallengePage, this.answeringPage, this.succeedPage, this.popupsPage];
        arr.forEach(function (item) {
            if (scene === item) {
                return;
            }
            if (item.parent) {
                _this._stage.removeChild(item);
            }
        });
    };
    // 删除指定场景
    SceneManager.removeScene = function (scene) {
        console.log('removeScene');
        this.instance._stage.removeChild(this.instance[scene]);
    };
    // 添加指定场景
    SceneManager.addScene = function (scene) {
        console.log('addScene');
        this.instance._stage.addChild(this.instance[scene]);
    };
    // 设置根场景
    SceneManager.prototype.setScene = function (s) {
        this._stage = s;
    };
    // 开始场景
    SceneManager.toStartScene = function () {
        console.log('开始场景', this.instance);
        this.instance._stage.addChild(this.instance['startChallengePage']);
    };
    // 游戏场景
    SceneManager.toMainScene = function () {
        this.instance._stage.addChild(this.instance.mainScene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");

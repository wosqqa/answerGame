var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartChallengePage = (function (_super) {
    __extends(StartChallengePage, _super);
    function StartChallengePage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/answer/StartChallengePage.exml";
        return _this;
    }
    StartChallengePage.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartChallengePage.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        console.log('渲染挑战', AnswerData.index.data.is_finished);
        var startData = AnswerData.index.data;
        this.sightsTitle.text = startData.level_name + ' 土地公';
        // this.topBg.source = startData.ticket.image;
        /**获取头像图片 */
        var imgLoader = new egret.ImageLoader();
        egret.ImageLoader.crossOrigin = "anonymous";
        imgLoader.load(startData.ticket.image);
        imgLoader.once(egret.Event.COMPLETE, function (e) {
            var texture = new egret.Texture();
            texture.bitmapData = e.currentTarget.data;
            _this.topBg.texture = texture;
        }, this);
        if (startData.is_finished == 1) {
            this.startBtn.visible = true;
        }
        else {
            this.stopBtn.visible = true;
        }
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('点击挑战');
            SceneManager.removeScene('startChallengePage');
            SceneManager.addScene('answeringPage');
        }, this);
    };
    return StartChallengePage;
}(eui.Component));
__reflect(StartChallengePage.prototype, "StartChallengePage", ["eui.UIComponent", "egret.DisplayObject"]);

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
var PopupsPage = (function (_super) {
    __extends(PopupsPage, _super);
    function PopupsPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/answer/PopupsPage.exml";
        return _this;
    }
    PopupsPage.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PopupsPage.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var that = this;
        console.log('有值', that['close']);
        GameUtil.tap(that['close'], function () {
            SceneManager.removeScene('popupsPage');
        }, that);
    };
    return PopupsPage;
}(BaseScene));
__reflect(PopupsPage.prototype, "PopupsPage");

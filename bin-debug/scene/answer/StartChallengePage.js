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
        _super.prototype.childrenCreated.call(this);
        var that = this;
        var startData = AnswerData.index;
        console.log('有值', that['topBg']);
        // that['sightsTitle'].text = startData.level_name + ' 土地公';
        // that['topBg'].source = startData.ticket.image;
        // ResUtil.loadCrossImageByUrl({url:'https://tpc.googlesyndication.com/simgad/4039498861058963312?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkD8UQsD5MPPN2NqlMzeYr_hqgvOg'},(res)=> {
        // 	console.log('加载网络图片显示', res);
        // 	that['topBg'].texture = res.texture;
        // })
        if (startData.is_finished == 0) {
            that['startBtn'].visible = true;
        }
        else {
            that['startBtn'].visible = true;
        }
        GameUtil.tap(that['startBtn'], function () {
            Router.to({
                name: 'answering'
            });
        }, that);
        GameUtil.tap(that['stopBtn'], function () {
            that.toast('按钮不可点击');
        }, that);
    };
    return StartChallengePage;
}(BaseScene));
__reflect(StartChallengePage.prototype, "StartChallengePage");

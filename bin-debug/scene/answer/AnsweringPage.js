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
var AnsweringPage = (function (_super) {
    __extends(AnsweringPage, _super);
    function AnsweringPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/answer/AnsweringPage.exml";
        return _this;
    }
    AnsweringPage.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    AnsweringPage.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var that = this;
        console.log('有值', that, that['QuestionItemRenderer']);
        that['myDataList'].dataProvider = new eui.ArrayCollection(AnswerData.heading); //设计列表的index数以及每一项的内容
        that['myDataList'].itemRendererSkinName = 'QuestionItemRenderer';
        that.addChild(that['myDataList']);
        that['myDataList'].addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);
        GameUtil.tap(that['back'], function () {
            Router.to({
                name: 'game'
            });
        }, that);
        GameUtil.tap(that['anclick'], function () {
            console.log('点击错误', that['anclick'].skinName);
            // let popups = new PopupsPage()
            // GameUtil.mainStage.addChild(PopupsPage)
            // SceneManager.removeScene(that['testbb']);
            that.removeChild(that['testbb']);
            that['anclick'].skinName = 'CorrectButtonSkin';
        }, that);
    };
    AnsweringPage.prototype.onChange = function (e) {
        //获取点击消息
        this['myDataList'].selectedItem.question = '你是我改变的值啊';
        console.log(this['myDataList'].selectedItem, this['myDataList'].selectedIndex);
        console.log(this['myDataList'].selectedItems, this['myDataList'].selectedIndices);
    };
    return AnsweringPage;
}(BaseScene));
__reflect(AnsweringPage.prototype, "AnsweringPage");

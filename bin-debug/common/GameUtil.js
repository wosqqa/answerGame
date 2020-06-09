var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 工具类
 */
var GameUtil = (function () {
    function GameUtil() {
    }
    /**
     * 获取舞台高度
     */
    GameUtil.getStageHeight = function () {
        return SceneManager.instance._stage.height;
    };
    /*
     * 获取舞台宽度
     */
    GameUtil.getStageWidth = function () {
        return SceneManager.instance._stage.width;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    GameUtil.createBitmapByName = function (name, type) {
        if (type === void 0) { type = 'png'; }
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_' + type);
        result.texture = texture;
        return result;
    };
    return GameUtil;
}());
__reflect(GameUtil.prototype, "GameUtil");

/**
 * 工具类
 */
class GameUtil {
    /**
     * 获取舞台高度
     */
    public static getStageHeight(): number {
        return SceneManager.instance._stage.height
    }

    /*
     * 获取舞台宽度
     */
    public static getStageWidth(): number {
        return SceneManager.instance._stage.width
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    public static createBitmapByName(name: string, type: string = 'png') {
        let result = new egret.Bitmap()
        let texture: egret.Texture = RES.getRes(name + '_' + type)
        result.texture = texture
        return result
    }
}
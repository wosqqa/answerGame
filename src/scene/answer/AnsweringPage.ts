class AnsweringPage extends BaseScene {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/answer/AnsweringPage.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		let that = this;
		console.log('有值', that, that['QuestionItemRenderer']);
        that['myDataList'].dataProvider = new eui.ArrayCollection(AnswerData.heading);//设计列表的index数以及每一项的内容
        that['myDataList'].itemRendererSkinName  = 'QuestionItemRenderer';
        that.addChild(that['myDataList']);
		
        that['myDataList'].addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);
		GameUtil.tap(that['back'], ()=> {
			Router.to({ // 跳转到默认页面
				name: 'game'
			})
		}, that)
		GameUtil.tap(that['anclick'], ()=> {
			console.log('点击错误',that['anclick'].skinName);
			// let popups = new PopupsPage()
			// GameUtil.mainStage.addChild(PopupsPage)
			// SceneManager.removeScene(that['testbb']);
			that.removeChild(that['testbb']);
			that['anclick'].skinName = 'CorrectButtonSkin'
		}, that)
		
	}
	private onChange(e:eui.PropertyEvent):void{
        //获取点击消息
		this['myDataList'].selectedItem.question = '你是我改变的值啊'
        console.log(this['myDataList'].selectedItem,this['myDataList'].selectedIndex)
        console.log(this['myDataList'].selectedItems,this['myDataList'].selectedIndices)
    }
}
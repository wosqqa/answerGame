class PopupsPage  extends BaseScene {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/answer/PopupsPage.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		let that = this;
		console.log('有值', that['close']);
		GameUtil.tap(that['close'], ()=> {
			SceneManager.removeScene('popupsPage')
		}, that)
	}
	
}
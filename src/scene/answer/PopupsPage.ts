class PopupsPage extends eui.Component implements  eui.UIComponent {
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
	}
	
}
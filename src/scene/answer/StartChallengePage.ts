class StartChallengePage extends eui.Component implements  eui.UIComponent {
	public startBtn:eui.Image;
	public stopBtn:eui.Image;
	public sightsTitle:eui.Label;
	public topBg:eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/answer/StartChallengePage.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		console.log('渲染挑战',AnswerData.index.data.is_finished);
		let startData = AnswerData.index.data;
		this.sightsTitle.text = startData.level_name + ' 土地公';
		// this.topBg.source = startData.ticket.image;
		/**获取头像图片 */
		let imgLoader: egret.ImageLoader = new egret.ImageLoader();
		egret.ImageLoader.crossOrigin = "anonymous";
		imgLoader.load(startData.ticket.image);
		imgLoader.once(egret.Event.COMPLETE, (e: egret.Event) => {
			let texture = new egret.Texture();
			texture.bitmapData = e.currentTarget.data;
			this.topBg.texture = texture;
		}, this);
		
		if(startData.is_finished==1){
			this.startBtn.visible = true
		}else{
			this.stopBtn.visible = true
		}
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
			console.log('点击挑战')
			SceneManager.removeScene('startChallengePage');
			SceneManager.addScene('answeringPage');
		},this)
	}
	
}
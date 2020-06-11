class StartChallengePage  extends BaseScene {
	
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
		let that = this;
		let startData = AnswerData.index;
		console.log('有值', that['topBg']);
		// that['sightsTitle'].text = startData.level_name + ' 土地公';
		// that['topBg'].source = startData.ticket.image;
		// ResUtil.loadCrossImageByUrl({url:'https://tpc.googlesyndication.com/simgad/4039498861058963312?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkD8UQsD5MPPN2NqlMzeYr_hqgvOg'},(res)=> {
		// 	console.log('加载网络图片显示', res);
		// 	that['topBg'].texture = res.texture;
		// })
		if(startData.is_finished==0){//条件判断按钮的显示
			that['startBtn'].visible = true
		}else{
			that['startBtn'].visible = true
		}
		GameUtil.tap(that['startBtn'], ()=> {
			Router.to({ // 跳转到默认页面
				name: 'answering'
			})
		}, that)
		GameUtil.tap(that['stopBtn'], ()=> {
			that.toast('按钮不可点击')
		}, that)
	}
}
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
		let startData = AnswerData.index.data;
		setTimeout(function() {
			that['sightsTitle'].text = startData.level_name + ' 土地公';
			// that['topBg'].source = startData.ticket.image;
			console.log('图片URL>>图片地址不支持跨域', that['topBg'].texture);
			ResUtil.loadCrossImageByUrl({url:'https://tpc.googlesyndication.com/simgad/4039498861058963312?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkD8UQsD5MPPN2NqlMzeYr_hqgvOg'},(res)=> {
				console.log('网络图片', res);
				that['topBg'].texture = res.texture;
			})
			console.log('21渲染挑战', that['topBg']);
			if(startData.is_finished==0){//条件判断按钮的显示
				that['startBtn'].visible = true
			}else{
				that['startBtn'].visible = true
			}
			GameUtil.tap(that['startBtn'], ()=> {
				that.toast('点击')
				Router.to({ // 跳转到默认页面
					name: 'answering'
				})
			}, that)
			GameUtil.tap(that['stopBtn'], ()=> {
				that.toast('按钮不可点击')
			}, that)
		}, 150);
	}
}
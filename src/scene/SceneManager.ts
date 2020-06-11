class SceneManager {
  public _stage: egret.DisplayObjectContainer; // 根场景
  public startChallengePage: StartChallengePage;
  public answeringPage: AnsweringPage;
  public popupsPage: PopupsPage;
  public succeedPage: SucceedPage;
  constructor() {
    this.startChallengePage = new StartChallengePage();
    this.answeringPage = new AnsweringPage();
    this.popupsPage = new PopupsPage();
    this.succeedPage = new SucceedPage();
		console.log('SceneManager构造函数',this.popupsPage)
  }

  // 获取单例
  static sceneManager: SceneManager;
  static get instance() {
    if (!this.sceneManager) {
      this.sceneManager = new SceneManager();
    }
    return this.sceneManager;
  }

  // 删除其他场景
  private removeOtherScene(scene) {
    let arr = [this.startChallengePage, this.answeringPage];
    arr.forEach(item => {
      if (scene === item) {
        return
      }
      if (item.parent) {
        this._stage.removeChild(item)
      }
    })
  }
  // 删除场景
  static removeScene(scene) {
    this.instance._stage.removeChild(scene);
  }

  // 新增场景
  static addScene(scene) {
    this.instance._stage.addChild(this.instance[scene]);
  }

  // 设置根场景
  public setScene(s: egret.Stage) {
    this._stage = s;
  }

  // 开始场景
  static toStartScene() {
    this.instance._stage.addChild(this.instance['startChallengePage']);
  }

  // 游戏场景
  static toMainScene() {
    this.instance._stage.addChild(this.instance.startChallengePage)
  }
}


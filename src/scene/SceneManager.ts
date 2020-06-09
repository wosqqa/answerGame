class SceneManager {
  public _stage: egret.DisplayObjectContainer; // 根场景
  public mainScene: Main;
  public startChallengePage: StartChallengePage;
  public answeringPage: AnsweringPage;
  public succeedPage: SucceedPage;
  public popupsPage: PopupsPage;

  constructor() {
    this.mainScene = new Main();
    this.startChallengePage = new StartChallengePage();
    this.answeringPage = new AnsweringPage();
    this.succeedPage = new SucceedPage();
    this.popupsPage = new PopupsPage();
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
    let arr = [this.mainScene,this.startChallengePage,this.answeringPage,this.succeedPage,this.popupsPage];
    arr.forEach(item => {
      if (scene === item) {
        return
      }
      if (item.parent) {
        this._stage.removeChild(item)
      }
    })
  }
  // 删除指定场景
  static removeScene(scene) {
    console.log('removeScene')
    this.instance._stage.removeChild(this.instance[scene]);
  }

  // 添加指定场景
  static addScene(scene) {
    console.log('addScene')
    this.instance._stage.addChild(this.instance[scene]);
  }

  // 设置根场景
  public setScene(s: egret.DisplayObjectContainer) {
    this._stage = s;
  }

  // 开始场景
  static toStartScene() {
    console.log('开始场景',this.instance)
    this.instance._stage.addChild(this.instance['startChallengePage']);
  }

  // 游戏场景
  static toMainScene() {
    this.instance._stage.addChild(this.instance.mainScene)
  }
}


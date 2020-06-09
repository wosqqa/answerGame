var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//通信类
var HttpServer = (function () {
    function HttpServer() {
    }
    HttpServer.ListenEvent = function (request, cb) {
        request.addEventListener(egret.Event.COMPLETE, function (e) {
            var request = e.currentTarget;
            var response = request.response;
            if (cb) {
                cb(JSON.parse(response));
            }
        }, null);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
            if (cb) {
                cb(e);
            }
        }, null);
    };
    //get 请求
    HttpServer.get = function (url, cb) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open(url, egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        HttpServer.ListenEvent(request, cb);
        request.send();
    };
    //post请求
    HttpServer.post = function (url, params, cb) {
        var postData = HttpServer.queryString(params);
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open(url, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        HttpServer.ListenEvent(request, cb);
        request.send(postData);
    };
    //也是post 不过是json 
    HttpServer.put = function (url, params, cb) {
        var postData = JSON.stringify(params);
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open(url, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/json");
        HttpServer.ListenEvent(request, cb);
        request.send(postData);
    };
    //跨域
    HttpServer.jsonp = function (route, param, callback) {
        /**jsoncallback是服务端调用的方法  这里要看你的服务端写的方法是什么名称
        * 如果url后面还有参数，则para为arg0=para1&arg1=para2&jsoncallback格式
        */
        // var para = `${param}&callback`;
        // var loader:egret.URLLoader=new egret.URLLoader();
        // let url = GameData.IP + route;
        // var req:egret.URLRequest=new egret.URLRequest(url+"?"+para+"=");
        // loader._request = req;
        // JsonpReq.process(loader,callback);
        // loader.addEventListener(egret.Event.COMPLETE,(evt)=>{
        //     console.log(evt);
        // },this);
    };
    //把参数转成key=value格式
    HttpServer.queryString = function (params) {
        if (!params) {
            return;
        }
        var str = "";
        var idx = 0;
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                str += key + "=" + params[key].toString() + "&";
            }
        }
        return str.substr(0, str.length - 1);
    };
    /**获取福猪信息
     *
     * **/
    HttpServer.getUserData = function (callback) {
        // let data = this.getBaseData();
        // let info = {};
        // info["lt"] = data["lt"];
        // let func = "getPigGameUserInfo" + Math.random().toString().slice(2);
        // window[func] = function(res){
        //     HttpServer.isTimeout = false;
        //     if(!res){
        //         GameView.instance().showAbnormalView();
        //         return;
        //     }
        //     if(res.code == 0){
        //         GameData.userData = res.data;
        //         callback();
        //     }
        //     else if(res.code == 2){
        //         //异常
        //         GameView.instance().showAbnormalView("账号异常,请向客服申述");
        //     }
        //     else{
        //         GameView.instance().showAbnormalView(res.message);
        //     }
        // }
        // //超时
        // this.isTimeout = true;
        // let idx = egret.setTimeout(()=>{
        //     egret.clearTimeout(idx);
        //     if(this.isTimeout){
        //         GameView.instance().showAbnormalView();
        //     }
        // },this,15*1000);
        // AppCenter.sendNativeRequest("getinfo/index",info,func,true);
    };
    HttpServer.isTimeout = false;
    return HttpServer;
}());
__reflect(HttpServer.prototype, "HttpServer");

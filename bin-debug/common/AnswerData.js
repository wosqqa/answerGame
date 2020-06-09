var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AnswerData = (function () {
    function AnswerData() {
    }
    AnswerData.index = {
        "user_gc": 0,
        "code": 0,
        "message": "ok",
        "data": {
            "is_finished": 1,
            "level": 1,
            "level_name": "东方明珠",
            "ticket": {
                "image": "https://resources.dftoutiao.com/songheng/toutiao/newbackstageimg/uploads/2020-04-13/5e947ab06f76a.png",
                "big_image": "https://resources.dftoutiao.com/songheng/toutiao/newbackstageimg/uploads/2020-04-13/5e947b3cad7e8.png",
                "desc": "位于北京市中心，面积达44万平方米，可容纳100万人举行盛大集会，是世界上最大的城市广场。",
                "name": "天安门广场"
            },
            "info": {
                "finished_level": 1,
                "all_level": 3,
                "today_level_chance": 2,
                "level_chance": 3,
                "ratio": 1,
                "min_gold": 10,
                "max_gold": 25
            }
        }
    };
    AnswerData.testLevel = [
        { image: 'pig28Imgs_json.pig_1', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
        { image: 'pig28Imgs_json.pig_12', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
        { image: 'pig28Imgs_json.pig_13', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
        { image: 'pig28Imgs_json.pig_14', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
        { image: 'pig28Imgs_json.pig_16', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
        { image: 'pig28Imgs_json.pig_18', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
        { image: 'pig28Imgs_json.pig_19', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' }
    ];
    return AnswerData;
}());
__reflect(AnswerData.prototype, "AnswerData");

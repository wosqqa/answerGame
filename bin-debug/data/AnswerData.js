var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AnswerData = (function () {
    function AnswerData() {
    }
    AnswerData.index = {
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
    };
    AnswerData.heading = [{
            "question": "烤乳猪是哪个菜系的代表菜",
            "choice0": "川菜",
            "choice1": "粤菜",
            "choice2": "鲁菜",
            "ansno": "1"
        },
        {
            "question": "广州的市花是?",
            "choice0": "红棉花",
            "choice1": "牡丹",
            "choice2": "荷花",
            "ansno": "0"
        },
        {
            "question": "天安门属于北京的哪里?",
            "choice0": "故宫",
            "choice1": "天坛",
            "choice2": "长城",
            "ansno": "0"
        }
    ];
    return AnswerData;
}());
__reflect(AnswerData.prototype, "AnswerData");

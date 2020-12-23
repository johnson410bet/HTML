$(function() {
    var articleArray = [
        [
            "2",
            "会走动的直播神器－暖阳Carry全队！",
            "2020/12/17 18:00",
            "https://p0.itc.cn/images01/20200909/f538736cd46342cda061744c5e684ee7.jpeg",
            "<p>KPL赛季结束后，许多战队选手陷入了恶补直播合同的泥沼中。而WB.TS中，最Carry的非暖阳莫属－直播时不仅话多效果好，各个位置也都能打！很快地，诗酒便开始直播解说暖阳的直播，千世虽表面谴责诗酒的作法，却也老实地开始套娃解说，见队友纷纷这么做，阿豆当然也蹭了上去；顿时整队只剩神人乖乖地做直播，其他人全靠暖阳喂活。从这大可看出，WB.TS多少走出了未能夺冠的阴霾，期待在明年的冬冠与KPL春季赛时，看见齐天王者能荣耀大胜！</p>",
            "hide",
            "推荐：WB.TS胜"
        ],
        [
            "2",
            "Kear泪洒采访现场，发博道歉！",
            "2020/12/06 12:00",
            "https://storage.inewsdb.com/5a510b99a7751cbc48544626ac4c1f99.jpg",
            "<p>昨晚WB.TS惨遭LGD零封后，Kear上采访席时并没甩锅，直接坦承了自己的BP耽误了选手的发挥，觉得很对不起对他有期待的粉丝。赛后，Kear也发了微博正式道歉，感谢俱乐部对他的信任，今天BP没有做好，很对不起大家。然而，逝者已矣，再多的懊悔都换不回逝去的曾经，期待战队通过此仗寻回过往的绝佳状态，并在冬冠以王者之姿凯旋归来！</p>",
            "hide",
            "推荐：WB.TS胜"
        ],
        [
            "2",
            "WB.TS临时换帅，却抱憾而归！",
            "2020/12/05 21:00",
            "https://i2.hdslb.com/bfs/archive/1c555ab8cca25267a8b307970572b6cf006f8c1f.jpg@480w_270h_1c",
            "<p>WB.TS上仗虽以4:0大胜广州TTG，但在外界质疑胖胖的执教能力下，领导层火速换帅，让Kear接替教练的位置，期待能为WB.TS再夺下一座冠军。然而昨日与LGD的比赛中，Kear的应变能力显然没比先前来得好，在对手有意的狙击下，没能拿出有效的策略和判断挽救颓势，终究以0:4不敌LGD，仅能止步4强，暂时休兵！</p>",
            "hide",
            "推荐：WB.TS胜"
        ],
        [
            "2",
            "月光最想遇到的对手－WB.TS！",
            "2020/12/05 12:00",
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2113176354,4089626709&fm=11&gp=0.jpg",
            "<p>DYG昨日以4-2战胜AG超玩会，如愿进军总决赛；而AG超玩会则须等LGD与WB.TS分出高下，再与胜者争夺总决赛的位置！败于DYG后，月光在赛后采访坦言自己在技术面上有失误，愿负全责，更表示在下一场比赛中，最想遇见昔日宿敌WB.TS。但WB.TS换下胖胖后，让两冠教练Kear重回主帅的位置－这阵容曾击败过无数战队，当然也包括AG超玩会－实力非常强悍！而月光能否如愿面对往日的对手，就看今晚WB.TS的表现了。</p>",
            "hide",
            "推荐：WB.TS胜"
        ]
    ]
    /*---- article page ----*/
    var articleLength = articleArray.length;
    for (i = 1; i < articleLength; i++) {
        $(".esports-contant-page .section .container").append($(".article-feed:first").clone());
    }
    for (i = 0; i < articleLength; i++) {
        $(".esports-contant-page .article-feed").eq(i).attr("data-sort", articleArray[i][0]);
        $(".esports-contant-page .article-feed").eq(i).children("h3").text(articleArray[i][1]);
        $(".esports-contant-page .article-feed").eq(i).children("h6").text(articleArray[i][2]);
        $(".esports-contant-page .article-feed").eq(i).children("img").attr("src", articleArray[i][3]);
        $(".esports-contant-page .article-feed").eq(i).children(".article-content").html(articleArray[i][4]);
        $(".esports-contant-page .article-feed").eq(i).children(".prophet").addClass(articleArray[i][5]);
        $(".esports-contant-page .article-feed").eq(i).children(".prophet").children("h5").text(articleArray[i][6]);
    }
    /*---- lobby page ----*/
    if ($(".esports-lobby-page")[0]) {
        for (i = 0; i < 4; i++) {
            $(".esports-lobby-page #wbts .news .news-block").eq(i).find(".news-photo img").attr("src", articleArray[i][3]);
            $(".esports-lobby-page #wbts .news .news-block").eq(i).find(".news-info .news-subject").text(articleArray[i][1]);
            $(".esports-lobby-page #wbts .news .news-block").eq(i).find(".news-info .news-time").text(articleArray[i][2]);
        }
    }

})
$(function() {
    var articleArray = [
        [
            "1",
            "2020LOL全明星1v1单挑赛！",
            "2020/12/16 20:00",
            "https://image.jasve.com/2056/9e06614a2d0dfae4956089eca9f479fe.jpg",
            "<p>现役打退役，打的是回忆－Karsa将面对曾经被封为“上单之光”的大哥Gogoing，而JKL将面临更难缠的对手，中国首个LOL世界冠军微笑(高学成)。</p><p>在数据面与对角色的熟悉度上，现役选手理所当然应当获胜。但在笔者看来，现役与退役选手竞技的重点，在于交流想法、促使现役选手激荡出更多火花，这种传承比胜负来得重要。而在众多电竞迷心中，当代明星与退役传奇，是不能比的。</p>",
            "show",
            "推荐：KARSA胜，JKL胜"
        ],
        [
            "2",
            "2020LOL全明星赛完整人员名单！",
            "2020/12/16 19:00",
            "https://image.jasve.com/2056/52ed39a9f717eb7ac588bfed3cfd6ee8.jpg",
            "<p>年末最华丽的战队阵容－369、Karsa、Rookie、JKL与Baolan，对上Canna、Canyon、Faker、Deft与Beryl－LPL与LCK将争夺最强赛区的名号，谁能取胜笑到最后？快下注支持您热爱的战队！</p>",
            "hide",
            "推荐：TES不胜"
        ],
        [
            "2",
            "2020LOL全明星赛赛程公布了！",
            "2020/12/16 18:00",
            "https://imgres.vipxap.com/vipxap/189/941934-202012171139065fdad2daccea5.jpg",
            "<p>12/18，LPL全明星选手迎战完LJL与VCS后，将进行1v1单挑战！</p><p>12/19，当天中午展开LPL与LCK单排之王和传奇人物的对决，接著进行1v1单挑战的决赛，选出LPL最强的单挑霸主！最后連3场与LCK的全明星赛，绝对精彩无比！</p>",
            "hide",
            "推荐：TES不胜"
        ],
        [
            "2",
            "德玛西亚杯将于12月21日开打！",
            "2020/12/16 18:00",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4106550373,730152095&fm=26&gp=0.jpg",
            "<p>今年德杯有24个战队相互较劲！作为S10的最强4个LPL战队－TES、SN、JDG与LGD－将直接晋升到四分之一决赛，而另外20个战队将分4组，通过单循环赛取每组排名首位的战队进入淘汰赛。</p><p>赛程-<br>12/21-22 小组赛<br>12/24-25 四分之一决赛<br>12/26 半决赛<br>12/27 决赛</p>",
            "hide",
            "推荐：TES不胜"
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
            $(".esports-lobby-page #tes .news .news-block").eq(i).find(".news-photo img").attr("src", articleArray[i][3]);
            $(".esports-lobby-page #tes .news .news-block").eq(i).find(".news-info .news-subject").text(articleArray[i][1]);
            $(".esports-lobby-page #tes .news .news-block").eq(i).find(".news-info .news-time").text(articleArray[i][2]);
        }
    }

})
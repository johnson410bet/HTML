$(function() {
    /*---- team stats ----*/
    // tes
    var tesStatsArray = [
        "114胜/82败",
        "58%"
    ]

    // wbts
    var wbtsStatsArray = [
        "86胜/46败",
        "65%"
    ]

    // aster
    var asterStatsArray = [
        "320胜/286败",
        "52%"
    ]

    /*---- overview data ----*/
    // tes
    var tesOverviewArray = [
        [
            "12/19 13:45",
            "2020 LOL 全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318025769880_100X100.png",
            "LPL传奇人物",
            "https://img1.famulei.com/z/6334165/p/1912/0318425011859_100X100.png",
            "LCK传奇人物"
        ],
        [
            "12/19 15:30",
            "2020 LOL 全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318025769880_100X100.png",
            "LPL票选英雄",
            "https://img1.famulei.com/z/6334165/p/1912/0318425011859_100X100.png",
            "LCK票选英雄"
        ],
        [
            "12/19 16:30",
            "2020 LOL 全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318025769880_100X100.png",
            "LPL极限闪击",
            "https://img1.famulei.com/z/6334165/p/1912/0318425011859_100X100.png",
            "LCK极限闪击"
        ],
        [
            "12/19 17:30",
            "2020 LOL 全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318025769880_100X100.png",
            "LPL征召模式",
            "https://img1.famulei.com/z/6334165/p/1912/0318425011859_100X100.png",
            "LCK征召模式"
        ]
    ]

    // wbts
    var wbtsOverviewArray = [
        [
            "12/18 15:30",
            "2020 LOL 全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318025769880_100X100.png",
            "LPL全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318425011859_100X100.png",
            "LJL全明星"
        ]
    ]

    // aster
    var asterOverviewArray = [
        [
            "12/22 20:01",
            "虎牙DOTA2冬季邀请赛 BO3",
            "https://qn.feijing88.com/feijing-home/egame/image/20190514/61abc7b7ba564d2a839f9f8f1b56fffc.jpg-200x200",
            "RNG",
            "https://qn.feijing88.com/feijing-home/egame/image/20190621/a0f2a744d7924515852ac324a6acee53.png-200x200",
            "Aster"
        ]
    ]

    // set team stats
    $(".esports-lobby-page #tes .team-stats #record").text(tesStatsArray[0]);
    $(".esports-lobby-page #tes .team-stats #percent").text(tesStatsArray[1]);
    $(".esports-lobby-page #wbts .team-stats #record").text(wbtsStatsArray[0]);
    $(".esports-lobby-page #wbts .team-stats #percent").text(wbtsStatsArray[1]);
    $(".esports-lobby-page #aster .team-stats #record").text(asterStatsArray[0]);
    $(".esports-lobby-page #aster .team-stats #percent").text(asterStatsArray[1]);

    // set overview data
    var tesOverviewLength = tesOverviewArray.length;
    for (i = 1; i < tesOverviewLength; i++) {
        $(".esports-lobby-page .overview ul").append($(".esports-lobby-page .overview ul li:first").clone());
    }
    for (i = 0; i < tesOverviewLength; i++) {
        $(".esports-lobby-page #tes .overview ul li").eq(i).find(".time").text(tesOverviewArray[i][0]);
        $(".esports-lobby-page #tes .overview ul li").eq(i).find(".leagues").text(tesOverviewArray[i][1]);
        $(".esports-lobby-page #tes .overview ul li").eq(i).find(".team-name:first img").attr("src", tesOverviewArray[i][2]);
        $(".esports-lobby-page #tes .overview ul li").eq(i).find(".team-name:first span").text(tesOverviewArray[i][3]);
        $(".esports-lobby-page #tes .overview ul li").eq(i).find(".team-name:last img").attr("src", tesOverviewArray[i][4]);
        $(".esports-lobby-page #tes .overview ul li").eq(i).find(".team-name:last span").text(tesOverviewArray[i][5]);
    }
    var wbtsOverviewLength = wbtsOverviewArray.length;
    for (i = 1; i < wbtsOverviewLength; i++) {
        $(".esports-lobby-page .overview ul").append($(".esports-lobby-page .overview ul li:first").clone());
    }
    for (i = 0; i < wbtsOverviewLength; i++) {
        $(".esports-lobby-page #wbts .overview ul li").eq(i).find(".time").text(wbtsOverviewArray[i][0]);
        $(".esports-lobby-page #wbts .overview ul li").eq(i).find(".leagues").text(wbtsOverviewArray[i][1]);
        $(".esports-lobby-page #wbts .overview ul li").eq(i).find(".team-name:first img").attr("src", wbtsOverviewArray[i][2]);
        $(".esports-lobby-page #wbts .overview ul li").eq(i).find(".team-name:first span").text(wbtsOverviewArray[i][3]);
        $(".esports-lobby-page #wbts .overview ul li").eq(i).find(".team-name:last img").attr("src", wbtsOverviewArray[i][4]);
        $(".esports-lobby-page #wbts .overview ul li").eq(i).find(".team-name:last span").text(wbtsOverviewArray[i][5]);
    }
    var asterOverviewLength = asterOverviewArray.length;
    for (i = 1; i < asterOverviewLength; i++) {
        $(".esports-lobby-page .overview ul").append($(".esports-lobby-page .overview ul li:first").clone());
    }
    for (i = 0; i < asterOverviewLength; i++) {
        $(".esports-lobby-page #aster .overview ul li").eq(i).find(".time").text(asterOverviewArray[i][0]);
        $(".esports-lobby-page #aster .overview ul li").eq(i).find(".leagues").text(asterOverviewArray[i][1]);
        $(".esports-lobby-page #aster .overview ul li").eq(i).find(".team-name:first img").attr("src", asterOverviewArray[i][2]);
        $(".esports-lobby-page #aster .overview ul li").eq(i).find(".team-name:first span").text(asterOverviewArray[i][3]);
        $(".esports-lobby-page #aster .overview ul li").eq(i).find(".team-name:last img").attr("src", asterOverviewArray[i][4]);
        $(".esports-lobby-page #aster .overview ul li").eq(i).find(".team-name:last span").text(asterOverviewArray[i][5]);
    }








})
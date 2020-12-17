$(function() {
    // team stats
    var statsArray = [
        "114胜/82败",
        "58%"
    ]
    $(".esports-lobby-page .team-stats #record").text(statsArray[0]);
    $(".esports-lobby-page .team-stats #percent").text(statsArray[1]);


    // overview data
    var overviewArray = [
        [
            "12/18 15:30",
            "2020 LOL 全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318025769880_100X100.png",
            "LPL全明星",
            "https://img1.famulei.com/z/6334165/p/1912/0318425011859_100X100.png",
            "LJL全明星"
        ]
    ]
    var overviewLength = overviewArray.length;
    // console.log(articleLength);
    for (i = 1; i < overviewLength; i++) {
        $(".esports-lobby-page .overview ul").append($(".esports-lobby-page .overview ul li:first").clone());
    }
    // console.log(articleArray[0][0]);
    for (i = 0; i < overviewLength; i++) {
        $(".esports-lobby-page .overview ul li").eq(i).find(".time").text(overviewArray[i][0]);
        $(".esports-lobby-page .overview ul li").eq(i).find(".leagues").text(overviewArray[i][1]);
        $(".esports-lobby-page .overview ul li").eq(i).find(".team-name:first img").attr("src", overviewArray[i][2]);
        $(".esports-lobby-page .overview ul li").eq(i).find(".team-name:first span").text(overviewArray[i][3]);
        $(".esports-lobby-page .overview ul li").eq(i).find(".team-name:last img").attr("src", overviewArray[i][4]);
        $(".esports-lobby-page .overview ul li").eq(i).find(".team-name:last span").text(overviewArray[i][5]);
    }







})
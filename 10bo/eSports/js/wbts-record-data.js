$(function() {
    var recordArray = [
        [
            "负",
            "2020 KPL秋季赛-BO7",
            "2020/12/05 19:00",
            "https://qn.feijing88.com/egame/kog/team/79e13e38c66eaab3e199a7f66e90444d.png",
            "LGD",
            "3:1",
            "https://qn.feijing88.com/feijing-home/egame/image/2020916/ea504c67268d4b9baee0878b1b51ecfc.png",
            "WB.TS",
            "cc**66",
            "15,938元",
            "ae******08",
            "12,663元",
            "rv*****27",
            "11,279元",
            "63***ne",
            "7,584元",
            "q9****5f",
            "5,623元"
        ],
        [
            "胜",
            "2020 KPL秋季赛-BO7",
            "2020/11/29 19:00",
            "https://qn.feijing88.com/feijing-home/egame/image/2020916/ad4eafb5e9404507b5e7a28f89ae5cd6.png",
            "广州TTG",
            "0:4",
            "https://qn.feijing88.com/feijing-home/egame/image/2020916/ea504c67268d4b9baee0878b1b51ecfc.png",
            "WB.TS",
            "cr******wz",
            "27,647元",
            "ex****5j",
            "10,892元",
            "y3******95",
            "6,352元",
            "xi******yu",
            "4,470元",
            "8p****5k",
            "3,132元"
        ],
        [
            "负",
            "2020 KPL秋季赛-BO7",
            "2020/11/27 19:00",
            "https://qn.feijing88.com/feijing-home/egame/image/2020916/ea504c67268d4b9baee0878b1b51ecfc.png",
            "WB.TS",
            "0:4",
            "https://qn.feijing88.com/feijing-home/egame/image/202084/1f82b4c63ad34e3ebd3812eb0fbc32e6.png",
            "AG超玩会",
            "va******rb",
            "13,591元",
            "ts***54",
            "8,242元",
            "y3******95",
            "5,831元",
            "ae******08",
            "5,392元",
            "xi******yu",
            "4,206元"
        ]
    ]
    /*---- record page ----*/
    var recordLength = recordArray.length;
    for (i = 1; i < recordLength; i++) {
        $(".esports-contant-page .section .container").append($(".winning-record:first").clone());
    }
    for (i = 0; i < recordLength; i++) {
        $(".esports-contant-page .winning-record").eq(i).find(".games-winning").text(recordArray[i][0]);
        $(".esports-contant-page .winning-record").eq(i).find(".games-info .leagues").text(recordArray[i][1]);
        $(".esports-contant-page .winning-record").eq(i).find(".games-info .time").text(recordArray[i][2]);
        $(".esports-contant-page .winning-record").eq(i).find(".cscore .team-name:first img").attr("src", recordArray[i][3]);
        $(".esports-contant-page .winning-record").eq(i).find(".cscore .team-name:first span").text(recordArray[i][4]);
        $(".esports-contant-page .winning-record").eq(i).find(".cscore .game-score").text(recordArray[i][5]);
        $(".esports-contant-page .winning-record").eq(i).find(".cscore .team-name:last img").attr("src", recordArray[i][6]);
        $(".esports-contant-page .winning-record").eq(i).find(".cscore .team-name:last span").text(recordArray[i][7]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .name").eq(0).text(recordArray[i][8]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .award").eq(0).text(recordArray[i][9]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .name").eq(1).text(recordArray[i][10]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .award").eq(1).text(recordArray[i][11]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .name").eq(2).text(recordArray[i][12]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .award").eq(2).text(recordArray[i][13]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .name").eq(3).text(recordArray[i][14]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .award").eq(3).text(recordArray[i][15]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .name").eq(4).text(recordArray[i][16]);
        $(".esports-contant-page .winning-record").eq(i).find(".award-table .award").eq(4).text(recordArray[i][17]);
    }
    /*---- lobby page ----*/
    if ($(".esports-lobby-page")[0]) {
        for (i = 0; i < 2; i++) {
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".games-winning").text(recordArray[0][0]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".games-info .leagues").text(recordArray[0][1]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".games-info .time").text(recordArray[0][2]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".cscore .team-name:first img").attr("src", recordArray[0][3]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".cscore .team-name:first span").text(recordArray[0][4]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".cscore .game-score").text(recordArray[0][5]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".cscore .team-name:last img").attr("src", recordArray[0][6]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".cscore .team-name:last span").text(recordArray[0][7]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .name").eq(0).text(recordArray[0][8]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .award").eq(0).text(recordArray[0][9]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .name").eq(1).text(recordArray[0][10]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .award").eq(1).text(recordArray[0][11]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .name").eq(2).text(recordArray[0][12]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .award").eq(2).text(recordArray[0][13]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .name").eq(3).text(recordArray[0][14]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .award").eq(3).text(recordArray[0][15]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .name").eq(4).text(recordArray[0][16]);
            $(".esports-lobby-page #wbts .winning-record").eq(i).find(".award-table .award").eq(4).text(recordArray[0][17]);
        }
    }















})
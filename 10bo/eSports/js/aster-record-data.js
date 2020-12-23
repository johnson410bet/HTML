$(function() {
    var recordArray = [
        [
            "胜",
            "2020 虎牙邀请赛-BO3",
            "2020/12/21 19:44",
            "https://www.sndjoss.com/game/dota/team/5a935a45c09b79ba0a8a84241beaaf87.png",
            "iG",
            "0:2",
            "https://www.sndjoss.com/game/dota/team/aa627c51a357f8845c33d69ae9382c1d.png",
            "Aster",
            "ae******08",
            "21,054元",
            "29****zf",
            "13,405元",
            "w9*****wv",
            "9,906元",
            "79***6v",
            "6,740元",
            "pk******2x",
            "5,470元"
        ],
        [
            "胜",
            "2020 虎牙邀请赛-BO3",
            "2020/12/20 19:32",
            "https://www.sndjoss.com/game/dota/team/e70dca41d4a3ffebc8dca5d0fae9ffbf.png",
            "CDEC",
            "0:2",
            "https://www.sndjoss.com/game/dota/team/aa627c51a357f8845c33d69ae9382c1d.png",
            "Aster",
            "ts***54",
            "33,847元",
            "ex****5j",
            "14,619元",
            "ae******08",
            "14,308元",
            "dj***4z",
            "10,214元",
            "bw****sm",
            "8,049元"
        ],
        [
            "胜",
            "2020 虎牙邀请赛-BO3",
            "2020/12/18 20:49",
            "https://www.sndjoss.com/game/dota/team/5a935a45c09b79ba0a8a84241beaaf87.png",
            "AG",
            "0:2",
            "https://www.sndjoss.com/game/dota/team/aa627c51a357f8845c33d69ae9382c1d.png",
            "Aster",
            "ts***54",
            "30,402元",
            "y3******95",
            "26,386元",
            "gg*****cj",
            "21,122元",
            "ae******08",
            "16,020元",
            "kb***yr",
            "13,382元"
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
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".games-winning").text(recordArray[0][0]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".games-info .leagues").text(recordArray[0][1]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".games-info .time").text(recordArray[0][2]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".cscore .team-name:first img").attr("src", recordArray[0][3]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".cscore .team-name:first span").text(recordArray[0][4]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".cscore .game-score").text(recordArray[0][5]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".cscore .team-name:last img").attr("src", recordArray[0][6]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".cscore .team-name:last span").text(recordArray[0][7]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .name").eq(0).text(recordArray[0][8]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .award").eq(0).text(recordArray[0][9]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .name").eq(1).text(recordArray[0][10]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .award").eq(1).text(recordArray[0][11]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .name").eq(2).text(recordArray[0][12]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .award").eq(2).text(recordArray[0][13]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .name").eq(3).text(recordArray[0][14]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .award").eq(3).text(recordArray[0][15]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .name").eq(4).text(recordArray[0][16]);
            $(".esports-lobby-page #aster .winning-record").eq(i).find(".award-table .award").eq(4).text(recordArray[0][17]);
        }
    }















})
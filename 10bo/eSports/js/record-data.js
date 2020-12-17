$(function() {
    var recordArray = [
        [
            "负",
            "S10 世界总决赛-淘汰赛",
            "2020/10/25 18:00",
            "http://www.2cpseo.com/storage/dj/October2019/57fae97dfdd5e061300de0bb281de36d.jpg",
            "SN",
            "3:1",
            "http://www.2cpseo.com/storage/images/3ed8dd342606d85ecb45d4abae4330f8.png",
            "TES",
            "da********85",
            "19,530元",
            "gt*****yt",
            "13,247元",
            "yy******3w",
            "8,824元",
            "sr*******92",
            "7,673元",
            "da*****23",
            "1,817元"
        ],
        [
            "胜",
            "S10 世界总决赛-淘汰赛",
            "2020/10/17 18:00",
            "http://www.2cpseo.com/storage/images/3ed8dd342606d85ecb45d4abae4330f8.png",
            "TES",
            "3:2",
            "http://www.2cpseo.com/storage/images/b7491c4361752b35d290983dabf7a077.png",
            "FNC",
            "ci******99",
            "26,533元",
            "dv****nn",
            "18,229元",
            "84*******5t",
            "10,032元",
            "rq******bn",
            "7,724元",
            "ve*******75",
            "5,679元"
        ],
        [
            "胜",
            "S10 世界总决赛-小组赛",
            "2020/10/11 21:00",
            "http://www.2cpseo.com/storage/images/3ed8dd342606d85ecb45d4abae4330f8.png",
            "DRX",
            "0:1",
            "images/fnc.png",
            "TES",
            "sh******63",
            "19,528元",
            "84*******5t",
            "13,627元",
            "ae******08",
            "12,363元",
            "47********a5",
            "10,096元",
            "qq*******28",
            "7,422元"
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
            $(".esports-lobby-page .winning-record").eq(i).find(".games-winning").text(recordArray[0][0]);
            $(".esports-lobby-page .winning-record").eq(i).find(".games-info .leagues").text(recordArray[0][1]);
            $(".esports-lobby-page .winning-record").eq(i).find(".games-info .time").text(recordArray[0][2]);
            $(".esports-lobby-page .winning-record").eq(i).find(".cscore .team-name:first img").attr("src", recordArray[0][3]);
            $(".esports-lobby-page .winning-record").eq(i).find(".cscore .team-name:first span").text(recordArray[0][4]);
            $(".esports-lobby-page .winning-record").eq(i).find(".cscore .game-score").text(recordArray[0][5]);
            $(".esports-lobby-page .winning-record").eq(i).find(".cscore .team-name:last img").attr("src", recordArray[0][6]);
            $(".esports-lobby-page .winning-record").eq(i).find(".cscore .team-name:last span").text(recordArray[0][7]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .name").eq(0).text(recordArray[0][8]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .award").eq(0).text(recordArray[0][9]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .name").eq(1).text(recordArray[0][10]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .award").eq(1).text(recordArray[0][11]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .name").eq(2).text(recordArray[0][12]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .award").eq(2).text(recordArray[0][13]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .name").eq(3).text(recordArray[0][14]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .award").eq(3).text(recordArray[0][15]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .name").eq(4).text(recordArray[0][16]);
            $(".esports-lobby-page .winning-record").eq(i).find(".award-table .award").eq(4).text(recordArray[0][17]);
        }
    }















})
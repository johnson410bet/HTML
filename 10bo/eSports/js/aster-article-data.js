$(function() {
    var articleArray = [
        [
            "2",
            "5战全胜－Aster顺利晋级淘汰赛！",
            "2020/12/23 12:00",
            "https://wx3.sinaimg.cn/mw690/0079PpMOgy1glwzryd4o8j30jg0rbjta.jpg",
            "<p>Aster近期气势如虹，连续4场小组赛都以2-0击败对手；而昨日在虎牙冬季邀请赛中又以2-0战胜RNG，达成小组赛5战全胜，以B组首位之姿进军淘汰赛，将在今晚8点与iG进行BO3的焦点战，期待Aster再度迎接胜利！</p>",
            "hide",
            "推荐：Aster胜"
        ],
        [
            "2",
            "RNG或成Aster的最大对手？",
            "2020/12/22 12:00",
            "https://wx2.sinaimg.cn/mw690/0079PpMOgy1glvtkup1lij30jg0rbabz.jpg",
            "<p>今晚即将进行虎牙冬季邀请赛的最后一场小组赛，Aster与RNG皆以4战全胜并列B组第一位。而在过往战绩上，RNG面对CDEC时小败一场，但接著2小场皆胜保住了连胜佳绩；Aster则是相对稳定，皆以2-0碾压遇过的所有对手。此战赛果将会如何？快关注今晚的战役！</p>",
            "hide",
            "推荐：Aster胜"
        ],
        [
            "2",
            "Aster即将连取4胜！",
            "2020/12/21 12:00",
            "https://wx2.sinaimg.cn/mw690/0079PpMOgy1glunsrhy24j30jg0rbwgf.jpg",
            "<p>经过昨日与CDEC的激烈后，星辰又以2-0这完美比分战胜对手，达成3战连胜！今晚将面对曾被CDEC击败过的iG.V，想必心态上是相当轻松；而在过往战绩方面，iG.V至今3战只赢过AG，其它两战皆以0-2不敌对手，表现相当糟糕。本战Aster有望再下一城，在虎牙冬季邀请赛连取4胜！</p>",
            "hide",
            "推荐：Aster胜"
        ],
        [
            "2",
            "CDEC不好惹！Aster能保持连胜佳绩吗？",
            "2020/12/20 12:00",
            "https://wx1.sinaimg.cn/mw690/0079PpMOgy1gltfdybf8wj30jg0rbgnk.jpg",
            "<p>Aster以2-0的零封佳绩接连战胜SAG与AG，将在今晚虎牙冬季邀请赛和CDEC分高下。在过往的战绩中，CDEC接续战胜了AG、iG.V与SAG，却在与RNG的对战中出现失误，饮恨败于RNG，但战队实力仍与RNG不相上下，Aster得小心应付才有望从此战中脱颖而出！</p>",
            "hide",
            "推荐：Aster胜"
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
            $(".esports-lobby-page #aster .news .news-block").eq(i).find(".news-photo img").attr("src", articleArray[i][3]);
            $(".esports-lobby-page #aster .news .news-block").eq(i).find(".news-info .news-subject").text(articleArray[i][1]);
            $(".esports-lobby-page #aster .news .news-block").eq(i).find(".news-info .news-time").text(articleArray[i][2]);
        }
    }

})
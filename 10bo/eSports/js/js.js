$(function() {
    // choise team
    $(".esports-header .team-select").click(function() {
        $(".esports-header").toggleClass("open-select");
    })
    $(".team-select li").click(function() {
        $(".team-select span").text($(this).text())
    })
    // opan/close the top5
    // start
    $(".winning-record").first().addClass("award-open").find(".more span").text("关闭");
    $(".winning-record .games-winning").each(function() {
        if ($(this).text() === "胜") {
            $(this).addClass("win");
            // console.log($(this));
        }
    })

    $(".winning-record .more").click(function() {
        $(this).parent().toggleClass("award-open");
        if ($(this).children("span").text() === "关闭") {
            $(this).children("span").text("查看")
        } else {
            $(this).children("span").text("关闭")
        }
        // $(this).children("span").text("查看")
    })
})
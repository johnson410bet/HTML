$(function() {
    /*---- nav ----*/
    // index
    $(".esports-nav li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".esports-nav-desktop li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })

    // record page and article page
    $(".esports-header .team-select").click(function() {
        $(".esports-header").toggleClass("open-select");
    })
    $(".team-select li").click(function() {
        $(".team-select span").text($(this).text())
    })

    /*---- record ----*/
    // initial
    $(".winning-record").first().addClass("award-open").find(".more span").text("关闭");
    $(".winning-record .games-winning").each(function() {
        if ($(this).text() === "胜") {
            $(this).addClass("win");
            // console.log($(this));
        }
    })
    //open the top 5
    $(".winning-record .more").click(function() {
        $(this).parent().toggleClass("award-open");
        if ($(this).children("span").text() === "关闭") {
            $(this).children("span").text("查看")
        } else {
            $(this).children("span").text("关闭")
        }
    })
    /*---- article ----*/
    // filter
    $(".article-filter li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var sortName = $(this).attr("data-sort");
        // console.log(sortName);
        if (sortName == 0) {
            $(".article-feed").show();
        } else {
            $(".article-feed").each(function() {
                if ($(this).attr("data-sort") != sortName) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            })
        }
    })
    





})
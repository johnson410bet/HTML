$(function() {
    // spon-photo select-menu
    $(".select-menu li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".spon-photo .photo-wrap").eq($(this).index()).addClass("show").siblings().removeClass("show");
    })

    // photo-slide
    $(".photo-slide .next").click(function() {
        $(this).parent().parent().addClass("active");
    })
    $(".photo-slide .prev").click(function() {
        $(this).parent().parent().removeClass("active");
    })

    // photo-popup
    $(".photo-wrap .photo img").click(function() {
        $(".spon-popup").addClass("show");
        $(this).addClass("active");
        $(".spon-popup .all-photo").empty();
        $(this).parents(".photo-wrap").find('img').each(function() {
            $(".spon-popup .all-photo").append($(this).clone());
        })
        $(".spon-popup .spon-popup-photo img").attr('src', $(".spon-popup .all-photo img.active").attr('src'));
    })
    $(".spon-popup .btn-close-popup").click(function() {
        $(".spon-popup").removeClass("show");
        $(".photo-wrap .photo img.active").removeClass("active");
    })
    $(".spon-popup-slide .next").click(function() {
        if ($(".spon-popup .all-photo img").last().hasClass("active")) {
            $(".spon-popup .all-photo img").first().addClass("active").siblings().removeClass("active");
        } else {
            $(".spon-popup .all-photo img.active").removeClass("active").next().addClass("active");
        }
        $(".spon-popup .spon-popup-photo img").attr('src', $(".spon-popup .all-photo img.active").attr('src'));
    })
    $(".spon-popup-slide .prev").click(function() {
        if ($(".spon-popup .all-photo img").first().hasClass("active")) {
            $(".spon-popup .all-photo img").last().addClass("active").siblings().removeClass("active");
        } else {
            $(".spon-popup .all-photo img.active").removeClass("active").prev().addClass("active");
        }
        $(".spon-popup .spon-popup-photo img").attr('src', $(".spon-popup .all-photo img.active").attr('src'));
    })

    // spon-game
    var _left = -50;
    $(".spon-games .spon-slide .prev").click(function() {
        if ($(".games-scroll-x li.active:first").prev().length > 0) {
            _left = _left + 25;
            $(".games-scroll-x").css("left", _left + "%");
            $(".games-scroll-x li.active:first").prev().addClass("active");
            $(".games-scroll-x li.active:last").removeClass("active");
        }
    })
    $(".spon-games .spon-slide .next").click(function() {
        if ($(".games-scroll-x li.active:last").next().length > 0) {
            _left = _left - 25;
            $(".games-scroll-x").css("left", _left + "%");
            $(".games-scroll-x li.active:last").next().addClass("active");
            $(".games-scroll-x li.active:first").removeClass("active");
        }

    })


})
$(function() {
    // nav
    $(".nav li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var navLiEq = $(".nav li.active").index();
        console.log(navLiEq);
        $(".all-digital>ul>li").eq(navLiEq).addClass("active").siblings().removeClass("active");
    })

    // tnc
    $(".tnc-switch").click(function() {
        $(".tnc-text").slideToggle();
    })
})
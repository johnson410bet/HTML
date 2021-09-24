$(function() {
    $(".btn-popup").click(function() {
        getID = $(this).attr("href");
        $(getID).removeClass("hide");
        $("body").css("overflow", "hidden");

        // 210924 load the leaderboard content
        $(".lb-content").empty().append($(this).parents(".leader-outer").clone());

    })
    $(".popup-close").click(function() {
        $(".popup-wrap").addClass("hide");
        $("body").css("overflow", "auto");
    })

    $(".vip-promotion-categories li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var promotionCategoriesName = $(this).attr("data-name");
        $("." + promotionCategoriesName).addClass("active").siblings().removeClass("active");
    })

    // $(".vip-leaderboard-categories li").click(function() {
    //     $(this).addClass("active").siblings().removeClass("active");
    //     var leaderboardCategoriesName = $(this).attr("data-name");
    //     $("." + leaderboardCategoriesName).addClass("active").siblings().removeClass("active");
    //     $(".lb-content").empty().append($(".vip-leaderboard-block .active .leader-outer").clone());
    // })

    fairiesChangeImageByMonth();

    /*Leaderboard*/
    // leaderboardHeaderHandler(vipLeaderboard.promotion, "leaderboardBlock1");
    // leaderboardHandler(vipLeaderboard.leaderboard, "leaderboardBlock1");
    // leaderboardHeaderHandler(vipLeaderboard2.promotion, "leaderboardBlock2");
    // leaderboardHandler(vipLeaderboard2.leaderboard, "leaderboardBlock2");
    // $(".lb-content").append($(".vip-leaderboard-block .active .leader-outer").clone());

});

//Leaderboard
// function leaderboardHeaderHandler(promotion, block) {
//     $(`.vip-leaderboard-categories li[data-name="${block}"]`).text(promotion.category);
//     let $lbTitle = $("." + block + " .lb-title");
//     let $lbDate = $("." + block + " .lb-date");
//     if (promotion.name != null && promotion.name != "") $lbTitle.text(promotion.name);
//     if (promotion.link != null && promotion.link != "") $lbTitle.attr("href", promotion.link);
//     if (promotion.click != null && promotion.click != "") $lbTitle.attr("onClick", promotion.click);
//     if (promotion.date != null && promotion.date != "") $lbDate.text(promotion.date);
// }

// function leaderboardHandler(leaderboard, block) {
//     let topNum = 3,
//         template1 = "",
//         template2 = "";

//     leaderboard.map(function(lb, index) {
//         if (index < topNum) {
//             template1 += `<li><div class="no">${index+1}</div><div class="name">${lb.id}</div><div class="rank">${lb.gift}</div></li>`; //vipLeaderboard.leaderboard[0].id
//         } else {
//             template2 += `<tr><td>${index+1}</td><td>${lb.id}</td><td>${lb.gift}</td></tr>`;
//         }
//     });

//     $("." + block + " .leader-top ul").append(template1); //left
//     $("." + block + " .leader-list tbody").append(template2); //right
// }

function fairiesChangeImageByMonth() {
    let date = new Date();
    let imgMonth = date.getMonth() + 1;
    let fairiesURL = "https://content.ep45jdw8dc.com/resp/vip/fairies/";
    let photosImg = document.querySelectorAll('.photos-img');
    for (let i = 0; i < photosImg.length; i++) {
        let imgNo = photosImg[i].querySelector('img').dataset.imgno;
        let imgSrc = `${fairiesURL}${imgMonth}/Photos-${imgNo}.jpg`;
        photosImg[i].querySelector('img').src = imgSrc;
    }
    let videoElement = document.querySelectorAll('video');
    for (let i = 0; i < videoElement.length; i++) {
        videoElement[i].querySelector('source').src = `${fairiesURL}${imgMonth}/video.mp4`;
        videoElement[i].load();
    }
}
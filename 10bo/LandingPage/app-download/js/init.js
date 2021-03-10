var fingerprint = null;
var os = null;
var brand = 'shiboo';
//Production domain
var domain = 'jtoerep9bn.datasecure.online';
//Staging domain
// var domain = 'stg-j76rw.datasecure.online';
var eventUrl = 'https://' + domain + '/api/v1/stats';
var spinnerOpts = {
    lines: 14, // The number of lines to draw
    length: 28, // The length of each line
    width: 12, // The line thickness
    radius: 44, // The radius of the inner circle
    scale: 0.2, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    color: '#ffffff', // CSS color or array of colors
    fadeColor: 'transparent', // CSS color or array of colors
    speed: 1, // Rounds per second
    rotate: 0, // The rotation offset
    animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
    direction: 1, // 1: clockwise, -1: counterclockwise
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    className: 'spinner', // The CSS class to assign to the spinner
    top: '50%', // Top position relative to parent
    left: '50%', // Left position relative to parent
    shadow: '0 0 1px transparent', // Box-shadow for the lines
    position: 'absolute' // Element positioning
};

function androidClickInstall() {
    downloadEvent();

    $(".dlText").hide();
    $(".loading-indicator").show();
    $(".download_android").prop('disabled', true);

    let downloadButton = document.getElementById("download-button-android");
    downloadButton.style.opacity = "0.5";

    var btag = getUrlParam().btag;
    var dlUrl = "https://" + domain + "/download/shiboo/android/latest";

    if (btag && btag.length > 0) {
        dlUrl = dlUrl + "?btag=" + btag
    }

    document.location.href = dlUrl;
    $('.android_container .loading-spinner').show();
    setTimeout(function () {
        $(".download_android").prop('disabled', false);

        $(".dlText").show();
        $('.android_container .loading-spinner').hide();

        downloadButton.style.opacity = "1";

    }, 15000);

}

function iosClickInstall() {
    downloadEvent();

    $(".dlText-ios").hide();
    $(".loading-indicator-ios").show();
    $(".download_ios").prop('disabled', true);

    let downloadButton = document.getElementById("download-button-ios");
    downloadButton.style.opacity = "0.5";

    $('.ios_container .loading-spinner').show();
    setTimeout(function () {
        $(".download_ios").prop('disabled', false);

        $(".dlText-ios").show();
        $('.ios_container .loading-spinner').hide();
        downloadButton.style.opacity = "1";

    }, 15000);

    var dlUrl = "itms-services://?action=download-manifest&amp;url=https://" + domain + "/10bet/manifest.plist";

    document.location.href = dlUrl;
}

function pageLoadedEvent() {
    console.log(fingerprint); // an array of components: {key: ..., value: ...}
    console.log("Send Page Loaded Event!!!");
    $.ajax({
        contentType: "application/json",
        dataType: "json",
        type: 'POST',
        url: eventUrl,
        data: JSON.stringify({
            'event': "visit",
            'platform': os,
            'brand': brand,
            'btag': getUrlParam().btag,
            'fingerprint': fingerprint
        })
    });
}

function downloadEvent() {
    $.ajax({
        contentType: "application/json",
        dataType: "json",
        type: 'POST',
        url: eventUrl,
        data: JSON.stringify({
            'event': "download",
            'platform': os,
            'brand': brand,
            'btag': getUrlParam().btag,
            'fingerprint': fingerprint
        })
    });
}

function createQRCode(address) {
    var text = 'https://' + document.domain + '/unblocker/home.html';
    if (address !== "") {
        text = address;
    }

    $('#qrcode').qrcode({
        width: 146,
        height: 146,
        text: text
    });

    $('.loading_frame').hide();
}

function detectmob() {
    return !!(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.toLowerCase().indexOf("android") > -1
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i));
}


$(function () {
        getUrlParam();
        var iosList = [
            {imgurl: 'assets/ltios_01.jpg'},
            {imgurl: 'assets/ltios_02.jpg'},
            {imgurl: 'assets/ltios_03.jpg'},
            {imgurl: 'assets/ltios_04.jpg'},
            {imgurl: 'assets/ltios_05.jpg'},
            {imgurl: 'assets/ltios_06.jpg'}
        ];

        function is_weixin() {
            var ua = navigator.userAgent.toLowerCase();
            return ua.match(".*micromessenger.*");
        }

        function is_mobileQQ() {
            var ua = navigator.userAgent.toLowerCase();
            return ua.match(".*qq.*");
        }

        function is_webview() {
            var ua = navigator.userAgent.toLowerCase();
            return (
                    (ua.match(".*linux;.*; wv.*version/[.0-9][.0-9].*chrome/[.0-9]* mobile.*")
                        || ua.match(".*linux;.*;.*version/[.0-9][.0-9].*chrome/[.0-9]* mobile.*"))
                    //miui browser matches webview UA
                    && !ua.match(".*miuibrowser.*")
                )
                || ua.match(".*[iphone|ipad];.* qbwebviewtype/.*");
        }

        var isWeixin = is_weixin();
        var isMobileQQ = is_mobileQQ();
        var isMobile = detectmob();
        var isWebview = is_webview();
        //legacy code
        if (isWebview || isWeixin) {
            $(".weixin_tip").show();
            $(".download").hide();
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                $("#tips").attr("src", "assets/live_weixin.png");
            } else if (/(Android)/i.test(navigator.userAgent)) {
                $("#tips").attr("src", "assets/live_weixin.png");
            }
        } else {
            if (isMobile) {
                $(".download").show();
                $(".weixin_tip").hide();
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    os = "ios";
                    $(".android_container").hide();
                    $(".ios_container").show();
                    $(".swiper-wrapper").html('');
                    for (var i = 0; i < iosList.length; i++) {
                        $(".swiper-wrapper").append('<div class="swiper-slide"><img src="' + iosList[i].imgurl + '" alt=""/></div>')
                    }
                } else if (
                    navigator.userAgent.toLowerCase().indexOf("android") > -1
                    || /(Android)/i.test(navigator.userAgent)) {
                    os = "android";
                    $(".android_container").show();
                    $(".ios_container").hide();
                    $(".swiper-wrapper").html('');
                    $(".torial").hide();
                    $(".instruction-button").hide();
                }
            } else {

                var qrUrl = window.location.href;
                createQRCode(qrUrl);
                $('.mobile_body').show();
                $(".download").hide();
            }
        }

        $(".instruction-button, .goToInstruction").click(function () {
            $('html,body').animate({
                scrollTop: $("#tutorial").offset().top
            }, 'slow');
        });

        //figerprint
        var options = {
            excludes: {
                cpuClass: true, doNotTrack: true,
                fontsFlash: true, userAgent: true, plugins: true,
                language: true, touchSupport: true,
                fonts: true
            }
        };

        if (window.requestIdleCallback) {
            requestIdleCallback(function () {
                Fingerprint2.get(options, function (components) {
                    fingerprint = components;
                    pageLoadedEvent();
                })
            })
        } else {
            setTimeout(function () {
                Fingerprint2.get(options, function (components) {
                    fingerprint = components;
                    pageLoadedEvent();
                })
            }, 500)
        }
    }
);
new Swiper('.swiper-container', {
    effect: 'slide',
    pagination: '.swiper-pagination',
    initialSlide: 0,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    observer: true,
    observeParents: true
});

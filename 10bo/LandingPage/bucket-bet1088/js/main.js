$(document).ready(function () {

    function changeCtaLinks() {
        for (var links = document.getElementsByClassName('btn'), i = 0; i < links.length; i++)
            links[i].setAttribute("href", fullUrl + links[i].pathname);
    }

    if (window.location.href.indexOf('https://www.10bet1818.com') > -1) {
        fullUrl = 'https://www.100b108.com';
        changeCtaLinks();
    } else if (window.location.href.indexOf('https://www.10bet1881.com') > -1) {
        fullUrl = 'https://www.108b108.com';
        changeCtaLinks();
    } else if (window.location.href.indexOf('https://www.10bet10000.com') > -1) {
        fullUrl = 'https://wl10bet1000.adsrv.eacdn.com/C.ashx?btag=a_2005965b_2951c_&affid=2002799&siteid=2005965&adid=2951&c=';
        changeCtaLinks();
    }

});
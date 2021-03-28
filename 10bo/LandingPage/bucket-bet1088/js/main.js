$(document).ready(function () {

    function changeCtaLinks() {
        for (var links = document.getElementsByClassName('btn'), i = 0; i < links.length; i++)
            links[i].setAttribute("href", fullUrl + links[i].pathname);
    }

    if (window.location.href.indexOf('https://www.10bet1818.com') > -1) {
        fullUrl = 'https://wl10bet1000.adsrv.eacdn.com/C.ashx?btag=a_2003215b_2960c_&affid=2002867&siteid=2003215&adid=2960&c=';
        changeCtaLinks();
    } else if (window.location.href.indexOf('https://www.10bet1881.com') > -1) {
        fullUrl = 'https://wl10bet1000.adsrv.eacdn.com/C.ashx?btag=a_2003215b_2960c_&affid=2002867&siteid=2003215&adid=2960&c=';
        changeCtaLinks();
    } else if (window.location.href.indexOf('https://www.10bet10000.com') > -1) {
        fullUrl = 'https://wl10bet1000.adsrv.eacdn.com/C.ashx?btag=a_2003215b_2960c_&affid=2002867&siteid=2003215&adid=2960&c=';
        changeCtaLinks();
    }

});
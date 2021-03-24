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
        fullUrl = 'https://www.10bo16.com';
        changeCtaLinks();
    }

});
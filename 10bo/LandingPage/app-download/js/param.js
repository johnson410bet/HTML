function getUrlParam() {
  var url = decodeURI(window.location.href);
  var thisParam = {};
  if (url.indexOf('?') !== -1) {
    var str = url.split('?')[1];
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      thisParam[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  }
  return thisParam;
}

/**
 * Kerpoof_Lite.js
 *
 * Copyright Disney. All Rights Reserved
 */


// Global variables
var ie     = document.all;
var nn6    = document.getElementById&&!document.all;
var opera  = window.opera?true:false; // was: (navigator.appName=="Opera");
var safari = (navigator.userAgent.toLowerCase().indexOf("safari") >0 );
var lin    = (/Linux/i.test(navigator.userAgent));
var firefox   = /firefox/i.test(navigator.userAgent);
var ff1_5     = /firefox.1\.5/i.test(navigator.userAgent);
var ff2_0     = /firefox.2\.0/i.test(navigator.userAgent);
var ie6       = /msie.6\./i.test(navigator.userAgent);

// Detect CSS1Compat (aka strict) mode vs backCompat (aka quirks) mode
var CSSStrict = /css\dcompat/i.test(document.compatMode);

embellish_w_args = function(V) {
  var S = window.location.search;
  if (S.length>0) {
    S = S.substring(1,S.length);
    var A = S.split('&');
    for (var i in A) {
      var B = A[i].split('=');
      if (B.length == 1) {
        V[B[0]] = true;
      }
      else {
        V[B[0]] = unescape(B[1]);
      }
    }
  }
  V['hash']     = window.location.hash,
  V['host']     = window.location.host,
  V['hostname'] = window.location.hostname,
  V['href']     = window.location.href,
  V['pathname'] = window.location.pathname,
  V['port']     = window.location.port,
  V['protocol'] = window.location.protocol,
  V['search']   = window.location.search
  return V;
}

// - - - - - - - - - - - - - - - - -

function puts(s) {
  if (s && nn6 && window.console) {
    eval("console."+"log("+"s"+")");
  }
}


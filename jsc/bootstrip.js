(function(){var g=this;
function h(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function m(a){return"function"==h(a)}function n(a,b,c){return a.call.apply(a.bind,arguments)}function p(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:p;return q.apply(null,arguments)};function r(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function s(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function t(a){g.setTimeout(function(){throw a;},0)}var u;
function v(){if(g.Promise&&g.Promise.resolve){var a=g.Promise.resolve();return function(b){a.then(function(){try{b()}catch(a){t(a)}})}}var b=g.MessageChannel;"undefined"===typeof b&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(b=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d=b.location.protocol+
"//"+b.location.host,a=q(function(a){if(a.origin==d||a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof b){var c=new b,e={},d=e;c.port1.onmessage=function(){e=e.next;var a=e.l;e.l=null;a()};return function(a){d.next={l:a};d=d.next;c.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){g.setTimeout(a,0)}};function w(a,b){if(!x){var c=y;m(g.setImmediate)?g.setImmediate(c):(u||(u=v()),u(c));x=!0}z.push(new A(a,b))}var x=!1,z=[];function y(){for(;z.length;){var a=z;z=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.a.call(c.b)}catch(e){t(e)}}}x=!1}function A(a,b){this.a=a;this.b=b};function C(a,b){this.b=D;this.f=void 0;this.a=this.e=null;this.c=this.d=!1;try{var c=this;a.call(b,function(a){E(c,F,a)},function(a){E(c,G,a)})}catch(e){E(this,G,e)}}var D=0,F=2,G=3;C.prototype.then=function(a,b,c){return H(this,m(a)?a:null,m(b)?b:null,c)};r(C);function I(a,b){a.a&&a.a.length||a.b!=F&&a.b!=G||J(a);a.a||(a.a=[]);a.a.push(b)}
function H(a,b,c,e){var d={j:null,m:null,n:null};d.j=new C(function(a,k){d.m=b?function(c){try{var d=b.call(e,c);a(d)}catch(B){k(B)}}:a;d.n=c?function(b){try{var d=c.call(e,b);a(d)}catch(B){k(B)}}:k});d.j.e=a;I(a,d);return d.j}C.prototype.g=function(a){this.b=D;E(this,F,a)};C.prototype.h=function(a){this.b=D;E(this,G,a)};
function E(a,b,c){if(a.b==D){if(a==c)b=G,c=new TypeError("Promise cannot resolve to itself");else{if(s(c)){a.b=1;c.then(a.g,a.h,a);return}var e=typeof c;if("object"==e&&null!=c||"function"==e)try{var d=c.then;if(m(d)){K(a,c,d);return}}catch(f){b=G,c=f}}a.f=c;a.b=b;J(a);b!=G||L(a,c)}}function K(a,b,c){function e(b){f||(f=!0,a.h(b))}function d(b){f||(f=!0,a.g(b))}a.b=1;var f=!1;try{c.call(b,d,e)}catch(k){e(k)}}function J(a){a.d||(a.d=!0,w(a.k,a))}
C.prototype.k=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=0;b<a.length;b++){var c=a[b],e=this.f;if(this.b==F)c.m(e);else{for(var d=void 0,d=this;d&&d.c;d=d.e)d.c=!1;c.n(e)}}}this.d=!1};function L(a,b){a.c=!0;w(function(){a.c&&M.call(null,b)})}var M=t;var N=Array.prototype,O=N.some?function(a,b,c){return N.some.call(a,b,c)}:function(a,b,c){for(var e=a.length,d="string"==typeof a?a.split(""):a,f=0;f<e;f++)if(f in d&&b.call(c,d[f],f,a))return!0;return!1};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function P(a,b){this.c=[];this.p=b||null;this.a=this.f=!1;this.b=void 0;this.k=this.e=!1;this.d=0;this.g=null;this.o=0}P.prototype.h=function(a,b){this.e=!1;this.f=!0;this.b=b;this.a=!a;Q(this)};function S(a,b,c){a.c.push([b,c,void 0]);a.f&&Q(a)}P.prototype.then=function(a,b,c){var e,d,f=new C(function(a,b){e=a;d=b});S(this,e,function(a){d(a)});return f.then(a,b,c)};r(P);function T(a){return O(a.c,function(a){return m(a[1])})}
function Q(a){if(a.d&&a.f&&T(a)){var b=a.d,c=U[b];c&&(g.clearTimeout(c.i),delete U[b]);a.d=0}a.g&&(a.g.o--,delete a.g);for(var b=a.b,e=c=!1;a.c.length&&!a.e;){var d=a.c.shift(),f=d[0],k=d[1],d=d[2];if(f=a.a?k:f)try{var l=f.call(d||a.p,b);void 0!==l&&(a.a=a.a&&(l==b||l instanceof Error),a.b=b=l);s(b)&&(e=!0,a.e=!0)}catch(R){b=R,a.a=!0,T(a)||(c=!0)}}a.b=b;e&&(l=q(a.h,a,!0),e=q(a.h,a,!1),b instanceof P?(S(b,l,e),b.k=!0):b.then(l,e));c&&(b=new V(b),U[b.i]=b,a.d=b.i)}
function V(a){this.i=g.setTimeout(q(this.b,this),0);this.a=a}V.prototype.b=function(){delete U[this.i];throw this.a;};var U={};function W(a){chrome.storage.local.get("ydn-crm-track",function(b){var c=b["ydn-crm-track"];b="jsc/ydn.crm-0.10.24.js";navigator.onLine&&"Edge"==c?b="https://ydn-src-1.storage.googleapis.com/jsc/ydn.crm-edge.js":"Beta"==c?b="jsc/ydn.crm-0.10.24.js":"RC"==c&&(b="jsc/ydn.crm-0.10.24.js");c=document.createElement("script");c.onload=a;c.type="text/javascript";var e={};e["ydn-crm-src"]=b;chrome.storage.local.set(e);c.src=b;document.getElementsByTagName("head")[0].appendChild(c)})}var X=["loadApp"],Y=g;
X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===W?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=W;})();

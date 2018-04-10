(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ua:!0},ea={};try{ea.__proto__=da;ca=ea.ua;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ja(a){if(a){for(var b=ia,c=["Object","assign"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&ha(b,c,{configurable:!0,writable:!0,value:a})}}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ja(function(a){return a||ka});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function la(a){return"boolean"==typeof a}
function ma(a){return"number"==typeof a}
function u(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function na(){}
function oa(a){a.ea=void 0;a.getInstance=function(){return a.ea?a.ea:a.ea=new a}}
function pa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==pa(a)}
function qa(a){var b=pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ra(a){return"function"==pa(a)}
function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=wa:x=xa;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function ya(a,b){u(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Aa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ba=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function Ca(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Da(a,b){var c=za(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ea(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ja(a){if(!Ka.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(La,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ma,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Na,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Oa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Pa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Qa,"&#0;"));return a}
var La=/&/g,Ma=/</g,Na=/>/g,Oa=/"/g,Pa=/'/g,Qa=/\x00/g,Ka=/[\x00&<>"']/;function Ra(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Sa;a:{var Ua=p.navigator;if(Ua){var Va=Ua.userAgent;if(Va){Sa=Va;break a}}Sa=""}function D(a){return-1!=Sa.indexOf(a)}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a,b){var c=qa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a){for(var b in a)return!1;return!0}
function ab(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function bb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function cb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<db.length;f++)c=db[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var fb=D("Opera"),gb=D("Trident")||D("MSIE"),hb=D("Edge"),ib=D("Gecko")&&!(-1!=Sa.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),jb=-1!=Sa.toLowerCase().indexOf("webkit")&&!D("Edge");function kb(){var a=p.document;return a?a.documentMode:void 0}
var lb;a:{var mb="",nb=function(){var a=Sa;if(ib)return/rv:([^\);]+)(\)|;)/.exec(a);if(hb)return/Edge\/([\d\.]+)/.exec(a);if(gb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jb)return/WebKit\/(\S+)/.exec(a);if(fb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nb&&(mb=nb?nb[1]:"");if(gb){var ob=kb();if(null!=ob&&ob>parseFloat(mb)){lb=String(ob);break a}}lb=mb}var pb=lb,qb;var rb=p.document;qb=rb&&gb?kb()||("CSS1Compat"==rb.compatMode?parseInt(pb,10):5):void 0;var sb=!gb||9<=Number(qb);function tb(){this.b="";this.f=ub}
tb.prototype.J=!0;tb.prototype.H=function(){return this.b};
tb.prototype.da=!0;tb.prototype.Z=function(){return 1};
function vb(a){return a instanceof tb&&a.constructor===tb&&a.f===ub?a.b:"type_error:TrustedResourceUrl"}
var ub={};function E(){this.b="";this.f=wb}
E.prototype.J=!0;E.prototype.H=function(){return this.b};
E.prototype.da=!0;E.prototype.Z=function(){return 1};
function xb(a){return a instanceof E&&a.constructor===E&&a.f===wb?a.b:"type_error:SafeUrl"}
var yb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function zb(a){if(a instanceof E)return a;a=a.J?a.H():String(a);yb.test(a)||(a="about:invalid#zClosurez");return Ab(a)}
var wb={};function Ab(a){var b=new E;b.b=a;return b}
Ab("about:blank");function Bb(){this.b="";this.g=Cb;this.f=null}
Bb.prototype.da=!0;Bb.prototype.Z=function(){return this.f};
Bb.prototype.J=!0;Bb.prototype.H=function(){return this.b};
var Cb={};function Db(a,b){var c=new Bb;c.b=a;c.f=b;return c}
Db("<!DOCTYPE html>",0);Db("",0);Db("<br>",0);function Eb(a,b){var c=b instanceof E?b:zb(b);a.href=xb(c)}
function Fb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?vb(b):b instanceof tb?vb(b):b instanceof E?xb(b):zb(b).H()}
function Gb(a,b){a.src=vb(b)}
;function Hb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=Hb.prototype;k.clone=function(){return new Hb(this.x,this.y)};
k.equals=function(a){return a instanceof Hb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ib(a,b){this.width=a;this.height=b}
k=Ib.prototype;k.clone=function(){return new Ib(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Jb(a){var b=document;return r(a)?b.getElementById(a):a}
function Kb(a,b){Wa(b,function(b,d){b&&b.J&&(b=b.H());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Lb.hasOwnProperty(d)?a.setAttribute(Lb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Lb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Mb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!sb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ja(g.name),'"');if(g.type){f.push(' type="',Ja(g.type),'"');var h={};eb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Kb(f,g));2<d.length&&Nb(e,f,d);return f}
function Nb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!qa(f)||sa(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(sa(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ra(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ea(f):f,d)}}}
function Ob(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Qb(a){Rb();var b=new tb;b.b=a;return b}
var Rb=na;var Sb=/^[\w+/_-]+[=]{0,2}$/;function Tb(){var a=p.document.querySelector("script[nonce]");if(a&&(a=a.nonce||a.getAttribute("nonce"))&&Sb.test(a))return a}
;function Ub(a){var b=Vb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Wb(){var a=[];Ub(function(b){a.push(b)});
return a}
var Vb={bb:"allow-forms",cb:"allow-modals",eb:"allow-orientation-lock",fb:"allow-pointer-lock",gb:"allow-popups",hb:"allow-popups-to-escape-sandbox",ib:"allow-presentation",jb:"allow-same-origin",kb:"allow-scripts",lb:"allow-top-navigation",mb:"allow-top-navigation-by-user-activation"},Xb=Pb(function(){return Wb()});
function Yb(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};C(Xb(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;var Zb=document,F=window;function $b(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function ac(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)}
function bc(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)}
;function cc(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;p.google_image_requests||(p.google_image_requests=[]);var d=p.document.createElement("img");if(b){var e=function(){b&&Da(p.google_image_requests,d);bc(d,"load",e);bc(d,"error",e)};
ac(d,"load",e);ac(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;p.google_image_requests.push(d)}
;var dc=(new Date).getTime();function ec(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function fc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var t=1518500249}else m=d^f^h,t=1859775393;else 60>c?(m=d&f|h&(d|f),t=2400959708):(m=d^f^h,t=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+t+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64;for(;d<c;)if(f[m++]=a[d++],t++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64}
function d(){var a=[],d=8*t;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,t;a();return{reset:a,update:c,digest:d,wa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function gc(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),hc(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=hc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function hc(a){var b=fc();b.update(a);return b.wa().toLowerCase()}
;function ic(a){this.b=a||{cookie:""}}
k=ic.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ia(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ia(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var jc=new ic("undefined"==typeof document?null:document);jc.f=3950;function kc(a){var b=ec(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new ic(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new ic(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,gc(ec(d),b,a||null)].join(" "):null}return null}
;function lc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
lc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function mc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function nc(a){p.setTimeout(function(){throw a;},0)}
var oc;
function pc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ka;c.ka=null;a()}};
return function(a){d.next={ka:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function qc(){this.f=this.b=null}
var sc=new lc(function(){return new rc},function(a){a.reset()});
qc.prototype.add=function(a,b){var c=sc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
qc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function rc(){this.next=this.scope=this.b=null}
rc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
rc.prototype.reset=function(){this.next=this.scope=this.b=null};function tc(a,b){uc||vc();wc||(uc(),wc=!0);xc.add(a,b)}
var uc;function vc(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);uc=function(){a.then(yc)}}else uc=function(){var a=yc;
!ra(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(oc||(oc=pc()),oc(a)):p.setImmediate(a)}}
var wc=!1,xc=new qc;function yc(){for(var a;a=xc.remove();){try{a.b.call(a.scope)}catch(b){nc(b)}mc(sc,a)}wc=!1}
;var zc=null,Ac=null;function Bc(){this.f=-1}
;function Cc(){this.f=64;this.b=[];this.j=[];this.l=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
A(Cc,Bc);Cc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function Dc(a,b,c){c||(c=0);var d=a.l;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
Cc.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)Dc(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Dc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Dc(this,e);f=0;break}}this.g=f;this.i+=b}};
Cc.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;Dc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function G(){this.g=this.g;this.B=this.B}
G.prototype.g=!1;G.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Ec(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
G.prototype.m=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Fc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Gc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];qa(d)?Gc.apply(null,d):Fc(d)}}
;function Hc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function Ic(a,b){if(a.classList)var c=a.classList.contains(b);else c=Hc(a),c=0<=za(c,b);return c}
function Jc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ic(a,"inverted-hdpi")&&(a.className=Aa(Hc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var Kc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Lc(){}
Lc.prototype.next=function(){throw Kc;};
Lc.prototype.D=function(){return this};
function Mc(a){if(a instanceof Lc)return a;if("function"==typeof a.D)return a.D(!1);if(qa(a)){var b=0,c=new Lc;c.next=function(){for(;;){if(b>=a.length)throw Kc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Nc(a,b){if(qa(a))try{C(a,b,void 0)}catch(c){if(c!==Kc)throw c;}else{a=Mc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Kc)throw c;}}}
function Oc(a){if(qa(a))return Ea(a);a=Mc(a);var b=[];Nc(a,function(a){b.push(a)});
return b}
;function Pc(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Pc)for(c=Qc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Qc(a){Rc(a);return a.b.concat()}
k=Pc.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||Sc;Rc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Sc(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.h=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&Rc(this),!0):!1};
function Rc(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
k.forEach=function(a,b){for(var c=Qc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new Pc(this)};
k.D=function(a){Rc(this);var b=0,c=this.h,d=this,e=new Lc;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Kc;var e=d.b[b++];return a?e:d.g[e]};
return e};(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",na,b);p.removeEventListener("test",na,b);return a})();function Tc(a){var b=[];Uc(new Vc,a,b);return b.join("")}
function Vc(){}
function Uc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Uc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Wc(d,c),c.push(":"),Uc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Wc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Xc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Yc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Wc(a,b){b.push('"',a.replace(Yc,function(a){var b=Xc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Xc[a]=b);return b}),'"')}
;function Zc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function $c(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.l=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=na)try{var c=this;a.call(b,function(a){ad(c,2,a)},function(a){ad(c,3,a)})}catch(d){ad(this,3,d)}}
function bd(){this.next=this.context=this.onRejected=this.g=this.b=null;this.f=!1}
bd.prototype.reset=function(){this.context=this.onRejected=this.g=this.b=null;this.f=!1};
var cd=new lc(function(){return new bd},function(a){a.reset()});
function dd(a,b,c){var d=cd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function ed(a){return new H(function(b,c){c(a)})}
function fd(a,b,c){gd(a,b,c,null)||tc(y(b,a))}
function hd(a){return new H(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],fd(e,b,c)})}
function id(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Y:!0,value:f}:{Y:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],fd(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
H.prototype.then=function(a,b,c){return jd(this,ra(a)?a:null,ra(b)?b:null,c)};
Zc(H);function kd(a,b){var c=dd(b,b,void 0);c.f=!0;ld(a,c);return a}
function md(a,b){return jd(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&tc(function(){var b=new nd(a);od(this,b)},this)};
function od(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?od(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):pd(c),qd(c,e,3,b)))}a.g=null}else ad(a,3,b)}
function ld(a,b){a.f||2!=a.b&&3!=a.b||rd(a);a.h?a.h.next=b:a.f=b;a.h=b}
function jd(a,b,c,d){var e=dd(null,null,null);e.b=new H(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof nd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;ld(a,e);return e.b}
H.prototype.o=function(a){this.b=0;ad(this,2,a)};
H.prototype.w=function(a){this.b=0;ad(this,3,a)};
function ad(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,gd(c,a.o,a.w,a)||(a.l=c,a.b=b,a.g=null,rd(a),3!=b||c instanceof nd||sd(a,c)))}
function gd(a,b,c,d){if(a instanceof H)return ld(a,dd(b||na,c||null,d)),!0;if($c(a))return a.then(b,c,d),!0;if(sa(a))try{var e=a.then;if(ra(e))return td(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function td(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function rd(a){a.j||(a.j=!0,tc(a.B,a))}
function pd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
H.prototype.B=function(){for(var a;a=pd(this);)qd(this,a,this.b,this.l);this.j=!1};
function qd(a,b,c,d){if(3==c&&b.onRejected&&!b.f)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,ud(b,c,d);else try{b.f?b.g.call(b.context):ud(b,c,d)}catch(e){vd.call(null,e)}mc(cd,b)}
function ud(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function sd(a,b){a.i=!0;tc(function(){a.i&&vd.call(null,b)})}
var vd=nc;function nd(a){B.call(this,a)}
A(nd,B);nd.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.l=!!a}
A(I,G);k=I.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function wd(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ca(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
k.K=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=na):(c&&Da(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.I=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];xd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.K(c)}}return 0!=e}return!1};
function xd(a,b,c){tc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.K,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.m=function(){I.u.m.call(this);this.clear();this.h.length=0};function yd(a){this.b=a}
yd.prototype.set=function(a,b){q(b)?this.b.set(a,Tc(b)):this.b.remove(a)};
yd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
yd.prototype.remove=function(a){this.b.remove(a)};function zd(a){this.b=a}
A(zd,yd);function Ad(a){this.data=a}
function Bd(a){return!q(a)||a instanceof Ad?a:new Ad(a)}
zd.prototype.set=function(a,b){zd.u.set.call(this,a,Bd(b))};
zd.prototype.f=function(a){a=zd.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
zd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Cd(a){this.b=a}
A(Cd,zd);Cd.prototype.set=function(a,b,c){if(b=Bd(b)){if(c){if(c<z()){Cd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}Cd.u.set.call(this,a,b)};
Cd.prototype.f=function(a){var b=Cd.u.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())Cd.prototype.remove.call(this,a);else return b}};function Dd(a){this.b=a}
A(Dd,Cd);function Ed(){}
;function Fd(){}
A(Fd,Ed);Fd.prototype.clear=function(){var a=Oc(this.D(!0)),b=this;C(a,function(a){b.remove(a)})};function Gd(a){this.b=a}
A(Gd,Fd);k=Gd.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.D=function(a){var b=0,c=this.b,d=new Lc;d.next=function(){if(b>=c.length)throw Kc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Hd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(Hd,Gd);function Id(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(Id,Gd);function Jd(a,b){this.f=a;this.b=null;if(gb&&!(9<=Number(qb))){Kd||(Kd=new Pc);this.b=Kd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Kd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(Jd,Fd);var Ld={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Kd=null;function Md(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Ld[a]})}
k=Jd.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Md(a),b);Nd(this)};
k.get=function(a){a=this.b.getAttribute(Md(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Md(a));Nd(this)};
k.D=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Lc;d.next=function(){if(b>=c.length)throw Kc;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Nd(this)};
function Nd(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Od(a,b){this.f=a;this.b=b+"::"}
A(Od,Fd);Od.prototype.set=function(a,b){this.f.set(this.b+a,b)};
Od.prototype.get=function(a){return this.f.get(this.b+a)};
Od.prototype.remove=function(a){this.f.remove(this.b+a)};
Od.prototype.D=function(a){var b=this.f.D(!0),c=this,d=new Lc;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function Pd(a){if(!ra(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function Rd(){var a=null;return md(new H(function(b,c){a=Pd(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var Sd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(Sd)}
function Td(a){return a?decodeURI(a):a}
function Ud(a,b,c){if(w(b))for(var d=0;d<b.length;d++)Ud(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Vd(a){var b=[],c;for(c in a)Ud(c,a[c],b);return b.join("&")}
function Wd(a,b){var c=Vd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Xd(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");Fb(e,b,"preload");d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var Yd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Zd=/\.(cn|com\.bi|do|sl|ba|by|ma)$/;function $d(a){return Yd.test(a)&&!Zd.test(a)}
var ae=p;function be(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];K[3]>=z()&&b.push("adsid="+encodeURIComponent(K[1]));return a+"?"+b.join("&")}
var K,L;function ce(){ae=p;K=ae.googleToken=ae.googleToken||{};var a=z();K[1]&&K[3]>a&&0<K[2]||(K[1]="",K[2]=-1,K[3]=-1,K[4]="",K[6]="");L=ae.googleIMState=ae.googleIMState||{};$d(L[1])||(L[1]=".google.com");w(L[5])||(L[5]=[]);la(L[6])||(L[6]=!1);w(L[7])||(L[7]=[]);ma(L[8])||(L[8]=0)}
function de(){ce();return K[1]}
var M={ca:function(){return 0<L[8]},
Oa:function(){L[8]++},
Pa:function(){0<L[8]&&L[8]--},
Qa:function(){L[8]=0},
shouldRetry:function(){return!1},
la:function(){return L[5]},
ja:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ha:function(){if(!M.ca()){var a=p.document,b=function(b){b=be(b);a:{try{var c=Tb();break a}catch(h){}c=void 0}var d=c;Xd(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=Qb(b);Gb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),M.Oa()}catch(h){}},c=L[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function ee(a){ce();var b=ae.googleToken[5]||0;a&&(0!=b||K[3]>=z()?M.ja(a):(M.la().push(a),M.ha()));K[3]>=z()&&K[2]>=z()||M.ha()}
function fe(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";ce();1==e?M.Qa():M.Pa();if(!f&&M.shouldRetry())$d(".google.com")&&(L[1]=".google.com"),M.ha();else{var t=ae.googleToken=ae.googleToken||{},N=0==e&&f&&r(f)&&!g&&ma(h)&&0<h&&ma(l)&&0<l&&r(m);g=g&&!M.ca()&&(!(K[3]>=z())||"NT"==K[1]);var Ga=!(K[3]>=
z())&&0!=e;if(N||g||Ga)g=z(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&cc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),t[5]=e,t[1]=f,t[2]=h,t[3]=l,t[4]=m,t[6]=b,ce();if(N||!M.ca()){e=M.la();for(f=0;f<e.length;f++)M.ja(e[f]);e.length=0}}};
ee(a)}
;function ge(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var he=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",he,void 0);function P(a){ge(he,arguments)}
function Q(a,b){return a in he?he[a]:b}
function ie(a){return Q(a,void 0)}
function je(){return Q("PLAYER_CONFIG",{})}
;function ke(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
;function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;function le(a){a&&(a.dataset?a.dataset[me("loaded")]="true":a.setAttribute("data-loaded","true"))}
function ne(a,b){return a?a.dataset?a.dataset[me(b)]:a.getAttribute("data-"+b):null}
var oe={};function me(a){return oe[a]||(oe[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function T(a,b){ra(a)&&(a=ke(a));return window.setTimeout(a,b)}
function pe(a){window.clearTimeout(a)}
;var qe=v("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;u("ytPubsubPubsubInstance",qe,void 0);var re=v("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",re,void 0);var se=v("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",se,void 0);var te=v("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",te,void 0);
function ue(a,b){var c=ve();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){re[d]&&b.apply(window,c)};
try{te[a]?f():T(f,0)}catch(g){R(g)}},void 0);
re[d]=!0;se[a]||(se[a]=[]);se[a].push(d);return d}return 0}
function we(a){var b=ve();b&&(ma(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete re[a]}))}
function xe(a,b){var c=ve();c&&c.publish.apply(c,arguments)}
function ye(a){var b=ve();if(b)if(b.clear(a),a)ze(a);else for(var c in se)ze(c)}
function ve(){return v("ytPubsubPubsubInstance")}
function ze(a){se[a]&&(a=se[a],C(a,function(a){re[a]&&delete re[a]}),a.length=0)}
;var Ae=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Be=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ce(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ae,""),c=c.replace(Be,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else De(a,b)}
function De(a,b){var c=Ee(a),d=document.getElementById(c),e=d&&ne(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=ue(c,b);var g=""+(b[ua]||(b[ua]=++va));Fe[g]=e}f||(d=Ge(a,c,function(){ne(d,"loaded")||(le(d),xe(c),T(y(ye,c),0))}))}}
function Ge(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Gb(d,Qb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function He(a){a=Ee(a);var b=document.getElementById(a);b&&(ye(a),b.parentNode.removeChild(b))}
function Ie(a,b){if(a&&b){var c=""+(b[ua]||(b[ua]=++va));(c=Fe[c])&&we(c)}}
function Ee(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ra(a)}
var Fe={};var Je=null;function Ke(){var a=Q("BG_I",null),b=Q("BG_IU",null),c=Q("BG_P",void 0);b?Ce(b,function(){window.botguard?Le(c):(He(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?Le(c):R(Error("Unable to load Botguard from JS"),"WARNING"))}
function Le(a){Je=new window.botguard.bg(a);S("botguard_periodic_refresh")&&O()}
function Me(){return null!=Je}
function Ne(){return Je?Je.invoke():null}
;z();var Oe=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Pe(){if(!Oe)return null;var a=Oe();return"open"in a?a:null}
function Qe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Re(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Fa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Se={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Te=!1;
function Ue(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=Td(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Td(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in Se){if((e=d=Q(Se[f]))&&!(e=c)){e=f;var g=Q("CORS_HEADER_WHITELIST")||{},h=Td(J(a)[3]||null);e=h?(g=g[h])?0<=za(g,e):!1:!0}e&&(b[f]=d)}return b}
function Ve(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=We(a,b);var d=Xe(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&pe(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ga&&b.ga.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.na&&0<b.timeout&&(f=T(function(){e||(e=!0,pe(f),b.na.call(b.context||p))},b.timeout))}else Ye(a,b)}
function Ye(a,b){var c=b.format||"JSON";a=We(a,b);var d=Xe(a,b),e=!1,f,g=Ze(a,function(a){if(!e){e=!0;f&&pe(f);var d=Qe(a),g=null;if(d||400<=a.status&&500>a.status)g=$e(c,a,b.qb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ga&&b.ga.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.L&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),pe(f),b.L.call(b.context||p,g))},b.timeout));
return g}
function We(a,b){b.Ba&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.ab;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Re(f[1]||"");for(var g in d)f[g]=d[g];a=Wd(c,f)+e}return a}
function Xe(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=ie("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.rb||Td(J(a)[3]||null)&&!b.withCredentials&&Td(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Re(e),eb(e,f),e=b.oa&&"JSON"==b.oa?JSON.stringify(e):Vd(e));f=e||f&&!$a(f);!Te&&f&&"POST"!=b.method&&(Te=!0,R(Error("AJAX request with postData should use POST")));
return e}
function $e(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?af(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=bf(a)})}c&&cf(d);
return d}
function cf(a){if(sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Db(a[b],null);a[c]=d}else cf(a[b])}}
function af(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function bf(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function df(a,b){b.method="POST";b.A||(b.A={});Ye(a,b)}
function Ze(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ke(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Pe();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ue(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var ef={},ff=0;
function gf(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Sa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof E||(a=a.J?a.H():String(a),yb.test(a)||(a="about:invalid#zClosurez"),a=Ab(a)),b=xb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Bb?a=b:(a=null,b.da&&(a=b.Z()),b=Ja(b.J?b.H():String(b)),a=Db(b,a)),a=encodeURIComponent(String(Tc(a instanceof Bb&&a.constructor===Bb&&a.g===Cb?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=Mb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ze(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ze(a,b,"GET","",d):hf(a,b))}
function hf(a,b){var c=new Image,d=""+ff++;ef[d]=c;c.onload=c.onerror=function(){b&&ef[d]&&b();delete ef[d]};
c.src=a}
;var jf={},kf=0;
function lf(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=kf)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(N){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(N){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(jf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},A:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.A.stack=l);for(var m in f)h.A["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var t in m)h.A[t]=m[t];Ye(Q("ECATCHER_REPORT_HOST","")+"/error_204",h);jf[a.message]=!0;kf++}}}
;var mf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",mf,void 0);function nf(a){ge(mf,arguments)}
;function of(){}
function pf(a,b){return qf(a,1,b)}
;function rf(){}
n(rf,of);function qf(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function sf(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):pe(a)}}
rf.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
rf.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
oa(rf);rf.getInstance();var tf=[],uf=!1;function vf(){if("1"!=Xa(je(),"args","privembed")){var a=function(){uf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
Ce("//static.doubleclick.net/instream/ad_status.js",a);tf.push(pf(function(){uf||"google_ad_status"in window||(Ie("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},5E3))}}
function wf(){return parseInt(Q("DCLKSTAT",0),10)}
;var xf=0;u("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++xf},void 0);var yf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function zf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in yf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Af(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
zf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
zf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
zf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=v("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",Za,void 0);var Bf=v("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",Bf,void 0);
function Cf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f=la(e[4])&&e[4]==!!d,g=sa(e[4])&&sa(d)&&bb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Df=Pb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Cf(a,b,c,d);if(e)return e;e=++Bf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new zf(d);if(!Ob(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new zf(b);
b.currentTarget=a;return c.call(a,b)};
g=ke(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Df()||la(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d];return e}
function Ef(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Za){var b=Za[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Df()||la(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[a]}}))}
;function Ff(a){this.o=a;this.b=null;this.i=0;this.l=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.h=0;this.C=V(window,"mousemove",x(this.F,this));a=x(this.w,this);ra(a)&&(a=ke(a));this.G=window.setInterval(a,25)}
A(Ff,G);Ff.prototype.F=function(a){q(a.b)||Af(a);var b=a.b;q(a.f)||Af(a);this.b=new Hb(b,a.f)};
Ff.prototype.w=function(){if(this.b){var a=O();if(0!=this.i){var b=this.l,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.o();this.j=d}this.i=a;this.l=this.b;this.h=(this.h+1)%4}};
Ff.prototype.m=function(){window.clearInterval(this.G);Ef(this.C)};var Gf={};
function Hf(a){var b=void 0===a?{}:a;a=void 0===b.Ca?!0:b.Ca;b=void 0===b.Ma?!1:b.Ma;if(null==v("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&If();V(document,"keydown",If);V(document,"keyup",If);V(document,"mousedown",If);V(document,"mouseup",If);a&&(b?V(window,"touchmove",function(){Jf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Jf("resize",200)}),V(window,"scroll",function(){Jf("scroll",200)})));
new Ff(function(){Jf("mouse",100)});
V(document,"touchstart",If,{passive:!0});V(document,"touchend",If,{passive:!0})}}
function Jf(a,b){Gf[a]||(Gf[a]=!0,pf(function(){If();Gf[a]=!1},b))}
function If(){null==v("_lact",window)&&Hf();var a=z();u("_lact",a,window);-1==v("_fact",window)&&u("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function Kf(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var Lf=Math.pow(2,16)-1,Mf={log_event:"events",log_interaction:"interactions"},Nf=Object.create(null);Nf.log_event="GENERIC_EVENT_LOGGING";Nf.log_interaction="INTERACTION_LOGGING";var Of={},Pf=0,W=v("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",W,void 0);var Qf=v("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",Qf,void 0);var Rf=v("ytLoggingTransportDispatchedStats_")||{};u("ytLoggingTransportDispatchedStats_",Rf,void 0);
u("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Sf(a,b){if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Qf[a.V.token]=d;c=Tf(a.endpoint,a.V.token)}else c=Tf(a.endpoint);c.push(a.payload);Of[a.endpoint]=new b;c.length>=(Number(S("web_logging_max_batch")||0)||20)?Uf():Vf()}
function Uf(){pe(Pf);if(!$a(W)){for(var a in W){var b=Of[a];if(b){var c=void 0,d=a,e=b,f=Mf[d],g=Rf[d]||{};Rf[d]=g;b=Math.round(O());for(c in W[d]){var h=e.b;h={client:{hl:h.Fa,gl:h.Ea,clientName:h.Da,clientVersion:h.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(h.client.screenDensityFloat=String(l));Q("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});h={context:h};h[f]=Tf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(l=Qf[c])a:{var m=h,t=c;if(l.videoId)var N="VIDEO";else if(l.playlistId)N="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:t,scope:N}]}delete Qf[c];l=h;l.requestTimeMs=b;(N=Q("EVENT_ID",void 0))&&S("enable_gel_web_client_event_id")&&(m=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>Lf&&(m=1),P("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:N,clientCounter:m});
Wf(e,d,h,{retry:!0})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete W[a]}}$a(W)||Vf()}}
function Vf(){pe(Pf);Pf=T(Uf,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function Tf(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
;function Xf(a,b,c,d){var e=Yf,f={};f.eventTimeMs=Math.round(c||O());f[a]=b;f.context={lastActivityMs:String(c?-1:Kf())};Sf({endpoint:"log_event",payload:f,V:d},e)}
;function Zf(a){var b={"X-Goog-Visitor-Id":Q("VISITOR_DATA","")},c;a?c="Bearer "+v("gapi.auth.getToken")().nb:c=kc([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));return b}
function $f(a){a=Object.assign({},a);delete a.Authorization;var b=kc();if(b){var c=new Cc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!zc)for(zc={},Ac={},c=0;65>c;c++)zc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Ac[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Ac;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,t=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[t],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function ag(a,b,c,d){jc.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function bg(){var a=new Hd;(a=a.isAvailable()?new Od(a,"yt.innertube"):null)||(a=new Jd("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Cd(a):null;this.f=document.domain||window.location.hostname}
bg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Tc(b))}catch(f){return}else e=escape(b);ag(a,e,c,this.f)};
bg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=jc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
bg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;jc.remove(""+a,"/",void 0===b?"youtube.com":b)};var cg=new bg;function dg(a,b,c,d){if(d)return null;d=cg.get("nextId",!0)||1;var e=cg.get("requests",!0)||{};e[d]={method:a,request:b,authState:$f(c),requestTime:Math.round(O())};cg.set("nextId",d+1,86400,!0);cg.set("requests",e,86400,!0);return d}
function eg(a){var b=cg.get("requests",!0)||{};delete b[a];cg.set("requests",b,86400,!0)}
function fg(a){var b=cg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=$f(Zf(!1));bb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Wf(a,d.method,e,{}));delete b[c]}}cg.set("requests",b,86400,!0)}}
;function Yf(a){var b=this;this.b=a||{innertubeApiKey:ie("INNERTUBE_API_KEY"),innertubeApiVersion:ie("INNERTUBE_API_VERSION"),Da:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:ie("INNERTUBE_CONTEXT_CLIENT_VERSION"),Fa:ie("INNERTUBE_CONTEXT_HL"),Ea:ie("INNERTUBE_CONTEXT_GL"),Ga:ie("INNERTUBE_HOST_OVERRIDE")||"",Ha:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};qf(function(){fg(b)},0,5E3)}
function Wf(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",A:c,oa:"JSON",L:function(){d.L()},
na:d.L,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ma:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
sb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.b.Ha||!1,g=Zf(f);Object.assign(e.headers,g);var h="",l=a.b.Ga;l&&(h=l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);h=""+h+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey;var m;if(d.retry&&S("retry_web_logging_batches")&&(m=dg(b,c,g,f))){var t=e.onSuccess,N=e.ma;e.onSuccess=function(a,b){eg(m);t(a,b)};
c.ma=function(a,b){eg(m);N(a,b)}}try{S("use_fetch_for_op_xhr")?Ve(h,e):df(h,e)}catch(Ga){if("InvalidAccessError"==Ga)m&&(eg(m),m=0),R(Error("An extension is blocking network request."),"WARNING");
else throw Ga;}m&&qf(function(){fg(a)},0,5E3)}
;var gg=z().toString();
function hg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(gg)for(a=1,b=0;b<gg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^gg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ig=hg();function jg(a){this.b=a}
function kg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=kg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var lg=1;function mg(){var a=Q("ROOT_VE_TYPE",void 0);return a?new jg({veType:a}):null}
function ng(){var a=Q("client-screen-nonce")||Q("EVENT_ID");return a?a:null}
function og(a,b){function c(){setTimeout(function(){a&&Xf("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ig,clientScreenNonce:a})},0)}
P("client-screen-nonce",a);P("ROOT_VE_TYPE",b);"requestAnimationFrame"in window?window.requestAnimationFrame(c):c()}
;function pg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Td(J(window.location.href)[3]||null);f&&e.push(f);f=Td(J(d)[3]||null);if(0<=za(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Eb(e,d),d=e.href),d){f=J(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
ng();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ra(d).toString(36),b=b?Vd(b):"",ag(d,b,h||5))}else h="ST-"+Ra(d).toString(36),b=b?Vd(b):"",ag(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var t=void 0===t?window:t;c=t.location;a=Wd(a,l)+m;a=a instanceof E?a:zb(a);c.href=xb(a)}return!0}
;function qg(a,b,c){rg({attachChild:{csn:a,parentVisualElement:kg(b),visualElements:[kg(c)]}})}
function rg(a){var b=Yf;a.eventTimeMs=Math.round(O());a.lactMs=Kf();Sf({endpoint:"log_interaction",payload:a},b)}
;function sg(a){a=a||{};this.url=a.url||"";this.args=a.args||cb(tg);this.assets=a.assets||{};this.attrs=a.attrs||cb(ug);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var tg={enablejsapi:1},ug={};sg.prototype.clone=function(){var a=new sg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==pa(c)?cb(c):c}return a};function vg(){G.call(this);this.b=[]}
n(vg,G);vg.prototype.m=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.pb)}G.prototype.m.call(this)};var wg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function xg(a){a=a||"";if(window.spf){var b=a.match(wg);spf.style.load(a,b?b[1]:"",void 0)}else yg(a)}
function yg(a){var b=zg(a),c=document.getElementById(b),d=c&&ne(c,"loaded");d||c&&!d||(c=Ag(a,b,function(){ne(c,"loaded")||(le(c),xe(b),T(y(ye,b),0))}))}
function Ag(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qb(a);Fb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function zg(a){var b=document.createElement("A");a=Ab(a);Eb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ra(b)}
;var Bg=v("ytLoggingLatencyUsageStats_")||{};u("ytLoggingLatencyUsageStats_",Bg,void 0);var Cg=0;function Dg(a){Bg[a]=Bg[a]||{count:0};var b=Bg[a];b.count++;b.time=O();Cg||(Cg=qf(Eg,0,5E3));return 10<b.count?(11==b.count&&lf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function Eg(){var a=O(),b;for(b in Bg)6E4<a-Bg[b].time&&delete Bg[b];Cg=0}
;function Fg(a,b){this.version=a;this.args=b}
;function Gg(a){this.topic=a}
Gg.prototype.toString=function(){return this.topic};var Hg=v("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;u("ytPubsub2Pubsub2Instance",Hg,void 0);u("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);u("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ig(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Jg(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function Kg(){var a=Jg(),b;for(b in a)sf(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function Lg(a,b){Fg.call(this,1,arguments)}
n(Lg,Fg);function Mg(a,b){Fg.call(this,1,arguments)}
n(Mg,Fg);var Ng=new Gg("aft-recorded"),Og=new Gg("timing-sent");var Pg={vc:!0},Y={},Qg=(Y.ad_allowed="adTypesAllowed",Y.ad_at="adType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_nav="isNavigation",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr=
"prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Rg="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Sg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Tg=!1;function Wg(){var a=Xg().info.yt_lt="hot_bg";Yg().info_yt_lt=a;if(Zg())if("yt_lt"in Qg){var b=Qg.yt_lt;0<=za(Sg,b)&&(a=!!a);if(Zg()){var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;a=$g();b=Object.keys(c).join("");Dg("info_"+b+"_"+a)||(c.clientActionNonce=a,Xf("latencyActionInfo",c,void 0,void 0))}}else 0<=za(Rg,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function ah(){var a=bh();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var ch=x(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||na,X);function $g(){var a=Xg().nonce;a||(a=hg(),Xg().nonce=a);return a}
function bh(){return Xg().tick}
function Yg(){var a=Xg();"gel"in a||(a.gel={});return a.gel}
function Xg(){return v("ytcsi.data_")||dh()}
function dh(){var a={tick:{},info:{}};u("ytcsi.data_",a,void 0);return a}
function eh(a,b){u("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function fh(){var a=bh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Xg().info.yt_pvis}
function Zg(){return!!S("csi_on_gel")}
function gh(){Kg();if(!Zg()){var a=bh(),b=Xg().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&w(a[f])){var d=f.slice(1);if(d in Pg){var e=Ba(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=v("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))hh(a,f),dh(),ch(),eh(!1,void 0),Q("TIMING_ACTION")&&P("PREVIOUS_ACTION",Q("TIMING_ACTION")),P("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:Q("TIMING_ACTION",void 0)};e=Wg.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+v("ytplayer.config.assets.js");(h=X.getEntriesByName?X.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):
delete b.h5jse}a.aft=ah();fh()&&"youtube"==g&&(Wg(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=O();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=v("ytdebug.logTiming"))&&a(d,b);hh(d,f,void 0);Ig(Og,new Mg(b.aft+(e||0),void 0))}}}
function hh(a,b,c){if(S("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],u("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";S("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||gf(a,void 0,void 0,void 0,
f)}catch(g){gf(a,void 0,void 0,void 0,f)}}else gf(a);eh(!0,c)}
function ih(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=bh();var c=O();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=Jg();if(c=b[a])sf(c),b[a]=0;Yg()["tick_"+a]=void 0;O();Zg()?(b=$g(),"_start"==a?Dg("baseline_"+b)||Xf("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):Dg("tick_"+a+"_"+b)||Xf("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=ie("TIMING_ACTION"),
a=bh(),v("ytglobal.timingready_")&&b&&a._start&&(b=ah()))){S("tighter_critical_section")&&!Tg&&(Ig(Ng,new Lg(Math.round(b-a._start),void 0)),Tg=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&gh()}}
;function jh(a,b){G.call(this);this.l=this.S=a;this.G=b;this.o=!1;this.f={};this.P=this.F=null;this.w=new I;Ec(this,y(Fc,this.w));this.i={};this.N=this.R=this.h=this.X=this.b=null;this.M=!1;this.j=this.C=null;this.T={};this.sa=["onReady"];this.W=null;this.ia=NaN;this.O={};kh(this);this.U("WATCH_LATER_VIDEO_ADDED",this.Ja.bind(this));this.U("WATCH_LATER_VIDEO_REMOVED",this.Ka.bind(this));this.U("onAdAnnounce",this.va.bind(this));this.ta=new vg(this);Ec(this,y(Fc,this.ta))}
n(jh,G);k=jh.prototype;
k.fa=function(a){if(!this.g){a instanceof sg||(a=new sg(a));this.X=a;this.b=a.clone();this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.G,this.b.attrs.id=this.G);this.l.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.R||(this.R=lh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.l.style.width=$b(Number(a)||a);if(a=this.b.attrs.height)this.l.style.height=$b(Number(a)||
a);mh(this);this.o&&nh(this)}};
k.ya=function(){return this.X};
function nh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function oh(a){var b=!0,c=ph(a);c&&a.b&&(a=a.b,b=ne(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function mh(a){if(!a.g&&!a.M){var b=oh(a);if(b&&"html5"==(ph(a)?"html5":null))a.N="html5",a.o||qh(a);else if(rh(a),a.N="html5",b&&a.j)a.S.appendChild(a.j),qh(a);else{a.b.loaded=!0;var c=!1;a.C=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.S,b);qh(a)};
a.M=!0;b?a.C():(Ce(a.b.assets.js,a.C),xg(a.b.assets.css),sh(a)&&!c&&u("yt.player.Application.create",null,void 0))}}}
function ph(a){var b=Jb(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function qh(a){if(!a.g){var b=ph(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||th(a)):a.ia=T(function(){qh(a)},50)}}
function th(a){kh(a);a.o=!0;var b=ph(a);b.addEventListener&&(a.F=uh(a,b,"addEventListener"));b.removeEventListener&&(a.P=uh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=uh(a,b,e))}for(var f in a.i)a.F(f,a.i[f]);nh(a);a.R&&a.R(a.f);a.w.I("onReady",a.f)}
function uh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,R(e,"WARNING",void 0,void 0,void 0))}}}
function kh(a){a.o=!1;if(a.P)for(var b in a.i)a.P(b,a.i[b]);for(var c in a.O)pe(parseInt(c,10));a.O={};a.F=null;a.P=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.U.bind(a);a.f.removeEventListener=a.Ra.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.za.bind(a);a.f.getPlayerType=a.Aa.bind(a);a.f.getCurrentVideoConfig=a.ya.bind(a);a.f.loadNewVideoConfig=a.fa.bind(a);a.f.isReady=a.Ia.bind(a)}
k.Ia=function(){return this.o};
k.U=function(a,b){var c=this,d=lh(this,b);if(d){if(!(0<=za(this.sa,a)||this.i[a])){var e=vh(this,a);this.F&&this.F(a,e)}this.w.subscribe(a,d);"onReady"==a&&this.o&&T(function(){d(c.f)},0)}};
k.Ra=function(a,b){if(!this.g){var c=lh(this,b);c&&wd(this.w,a,c)}};
function lh(a,b){var c=b;if("string"==typeof b){if(a.T[b])return a.T[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.T[b]=c}return c?c:null}
function vh(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.w.I(b,c);else{var f=T(function(){if(!a.g){a.w.I(b,c);var d=a.O,e=String(f);e in d&&delete d[e]}},0);
ab(a.O,String(f))}};
return c}
k.va=function(a){xe("a11y-announce",a)};
k.Ja=function(a){xe("WATCH_LATER_VIDEO_ADDED",a)};
k.Ka=function(a){xe("WATCH_LATER_VIDEO_REMOVED",a)};
k.Aa=function(){return this.N||(ph(this)?"html5":null)};
k.za=function(){return this.W};
function rh(a){ih("dcp");a.cancel();kh(a);a.N=null;a.b&&(a.b.loaded=!1);var b=ph(a);b&&(oh(a)||!sh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.S;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.C&&Ie(this.b.assets.js,this.C);pe(this.ia);this.M=!1};
k.m=function(){rh(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){R(b)}this.T=null;for(var a in this.i)p[this.i[a]]=null;this.X=this.b=this.f=null;delete this.S;delete this.l;G.prototype.m.call(this)};
function sh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var wh={},xh="player_uid_"+(1E9*Math.random()>>>0);function yh(a){var b="player";b=r(b)?Jb(b):b;var c=xh+"_"+(b[ua]||(b[ua]=++va)),d=wh[c];if(d)return d.fa(a),d.f;d=new jh(b,c);wh[c]=d;xe("player-added",d.f);Ec(d,y(zh,d));T(function(){d.fa(a)},0);
return d.f}
function zh(a){delete wh[a.G]}
;function Ah(){var a=Bh(),b=Ch();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var Ch=Pb(function(){var a=new Hd;return a.isAvailable()?new Dd(a):null}),Bh=Pb(function(){var a=new Id;
return a.isAvailable()?new Dd(a):null});function Dh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Eh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Fh(a)}
function Fh(a,b,c){if(sa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Gh(a,b,c,d){if(sa(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Hh(a){var b=a.video_id||a.videoId;if(r(b)){var c=Ah()||{},d=Ah()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=Ch();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function Ih(a){G.call(this);this.b=a;this.b.subscribe("command",this.pa,this);this.f={};this.i=!1}
A(Ih,G);k=Ih.prototype;k.start=function(){this.i||this.g||(this.i=!0,Jh(this.b,"RECEIVING"))};
k.pa=function(a,b,c){if(this.i&&!this.g){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Ta,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&Kh(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=Lh(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=Mh(a,c))&&this.i&&!this.g&&Jh(this.b,a,c))}}};
k.Ta=function(a,b){this.i&&!this.g&&Jh(this.b,a,this.aa(a,b))};
k.aa=function(a,b){if(null!=b)return{value:b}};
function Kh(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.m=function(){var a=this.b;a.g||wd(a.b,"command",this.pa,this);this.b=null;for(var b in this.f)Kh(this,b);Ih.u.m.call(this)};function Nh(a,b){Ih.call(this,b);this.h=a;this.start()}
A(Nh,Ih);Nh.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
Nh.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function Lh(a,b){switch(a){case "loadVideoById":return b=Fh(b),Hh(b),[b];case "cueVideoById":return b=Fh(b),Hh(b),[b];case "loadVideoByPlayerVars":return Hh(b),[b];case "cueVideoByPlayerVars":return Hh(b),[b];case "loadPlaylist":return b=Gh(b),Hh(b),[b];case "cuePlaylist":return b=Gh(b),Hh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Mh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Nh.prototype.aa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Nh.u.aa.call(this,a,b)};
Nh.prototype.m=function(){Nh.u.m.call(this);delete this.h};function Oh(a,b,c,d){G.call(this);this.f=b||null;this.o="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.C=!!a;this.l=x(this.w,this);window.addEventListener("message",this.l)}
n(Oh,G);Oh.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.C&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=za(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
Oh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Tc(a);c.postMessage(d,this.o)}catch(e){R(e,"WARNING")}}};
Oh.prototype.m=function(){window.removeEventListener("message",this.l);G.prototype.m.call(this)};function Ph(a,b,c){Oh.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Ph,Oh);function Qh(){var a=this.f=new Ph(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Na,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=Qh.prototype;k.Na=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Rh(this,a)),this.i[a]=!0)):this.ra(a,b,c)};
k.ra=function(){};
function Rh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.xa=function(){this.j=!0;this.sendMessage("initialDelivery",this.ba());this.sendMessage("onReady");C(this.h,this.qa,this);this.h=[]};
k.ba=function(){return null};
function Sh(a,b){a.sendMessage("infoDelivery",b)}
k.qa=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.qa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Th(a){Qh.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.La,this));this.addEventListener("onVideoProgress",x(this.Xa,this));this.addEventListener("onVolumeChange",x(this.Ya,this));this.addEventListener("onApiChange",x(this.Sa,this));this.addEventListener("onPlaybackQualityChange",x(this.Ua,this));this.addEventListener("onPlaybackRateChange",x(this.Va,this));this.addEventListener("onStateChange",x(this.Wa,this));this.addEventListener("onWebglSettingsChanged",x(this.Za,
this))}
A(Th,Qh);k=Th.prototype;k.ra=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&Dh(a)){var d=b;if(sa(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Fh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Eh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Gh.apply(window,d)}d=e}Hh(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);Dh(a)&&Sh(this,this.ba())}};
k.La=function(){var a=x(this.xa,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ba=function(){if(!this.b)return null;var a=this.b.getApiInterface();Da(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Wa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Sh(this,a)};
k.Ua=function(a){Sh(this,{playbackQuality:a})};
k.Va=function(a){Sh(this,{playbackRate:a})};
k.Sa=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Ya=function(){Sh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Xa=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Sh(this,a)};
k.Za=function(){if(this.b.getSphericalProperties){var a={sphericalProperties:this.b.getSphericalProperties()};Sh(this,a)}};
k.dispose=function(){Th.u.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Uh(){G.call(this);this.b=new I;Ec(this,y(Fc,this.b))}
A(Uh,G);Uh.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
Uh.prototype.j=function(a,b){this.g||this.b.I.apply(this.b,arguments)};function Vh(a,b,c){Uh.call(this);this.f=a;this.h=b;this.i=c}
A(Vh,Uh);function Jh(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(Tc(a),d.h))}}
Vh.prototype.m=function(){this.h=this.f=null;Vh.u.m.call(this)};function Wh(a,b,c){G.call(this);this.b=a;this.h=c;this.i=V(window,"message",x(this.j,this));this.f=new Vh(this,a,b);Ec(this,y(Fc,this.f))}
A(Wh,G);Wh.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.g||c.j("command",b.command,b.data,a.origin))}};
Wh.prototype.m=function(){Ef(this.i);this.b=null;Wh.u.m.call(this)};function Xh(){var a=cb(Yh),b;return md(new H(function(c,d){a.onSuccess=function(a){Qe(a)?c(a):d(new Zh("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Zh("Unknown request error","net.unknown",a))};
a.L=function(a){d(new Zh("Request timed out","net.timeout",a))};
b=Ye("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof nd&&b.abort();
return ed(a)})}
function Zh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Zh,B);function $h(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
$h.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),$c(a)?a:ai(a)):2===this.f&&b?(a=b.call(c,this.b),$c(a)?a:bi(a)):this};
$h.prototype.getValue=function(){return this.b};
Zc($h);function bi(a){var b=new $h;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function ai(a){var b=new $h;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function ci(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof di;this.isTimeout=a instanceof Zh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof nd}
n(ci,B);ci.prototype.name="BiscottiError";function di(){B.call(this,"Biscotti ID is missing from server")}
n(di,B);di.prototype.name="BiscottiMissingError";var Yh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ei=null;function fi(){if("1"===Xa(je(),"args","privembed"))return ed(Error("Biscotti ID is not available in private embed mode"));ei||(ei=md(Xh().then(gi),function(a){return hi(2,a)}));
return ei}
function gi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new di;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new di;a=a.id;ii(a);ei=ai(a);ji(18E5,2);return a}
function hi(a,b){var c=new ci(b);ii("");ei=bi(c);0<a&&ji(12E4,a-1);throw c;}
function ji(a,b){T(function(){md(Xh().then(gi,function(a){return hi(b,a)}),na)},a)}
function ii(a){u("yt.ads.biscotti.lastId_",a,void 0)}
function ki(){try{var a=v("yt.ads.biscotti.getId_");return a?a():fi()}catch(b){return ed(b)}}
;function li(a){B.apply(this,arguments)}
n(li,B);li.prototype.name="YuzuError";function mi(){var a=new li("ID is missing"),b=new li("Timeout"),c=null,d=!1;fe(function(){c=de();d=!0});
if(d)return c?ai(c):bi(a);var e=new H(function(b,c){fe(function(){var d=de();d?b(d):c(a)})}),f=Rd().then(function(){return ed(b)});
return kd(hd([e,f]),function(){return f.cancel()})}
;function ni(a){if("1"!==Xa(je(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||ya("yt.ads.biscotti.getId_",fi));try{var b=ki();if(S("enable_yuzu")){v("yt.ads.yuzu.getId_")||u("yt.ads.yuzu.getId_",mi,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=ed(d)}}else c=ed(new li("unimplemented"));id([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Y||a.Y){b=b.value;a=a.value;var c={};c.dt=dc;c.flash="0";a:{try{var d=window.top.location.href}catch(Ta){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?F:h;try{var l=h.history.length}catch(Ta){l=0}d.u_his=l;d.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(d.u_h=F.screen.height,d.u_w=F.screen.width,d.u_ah=F.screen.availHeight,d.u_aw=F.screen.availWidth,d.u_cd=F.screen.colorDepth);F.navigator&&F.navigator.plugins&&(d.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(d.u_nmime=
F.navigator.mimeTypes.length);d.ca_type="image";if(S("enable_server_side_search_pyv")||S("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var t=l.screenY}catch(Ta){}try{var N=l.outerWidth;var Ga=l.outerHeight}catch(Ta){}try{var Ug=l.innerWidth;var Vg=l.innerHeight}catch(Ta){}m=[l.screenLeft,l.screenTop,m,t,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,N,Ga,Ug,Vg];t=window.top;try{var U=(t||window).document,ta="CSS1Compat"==U.compatMode?U.documentElement:
U.body;var Ha=(new Ib(ta.clientWidth,ta.clientHeight)).round()}catch(Ta){Ha=new Ib(-12245933,-12245933)}U={};ta=0;p.SVGElement&&p.document.createElementNS&&(ta|=1);t=Yb();t["allow-top-navigation-by-user-activation"]&&(ta|=2);t["allow-popups-to-escape-sandbox"]&&(ta|=4);U.bc=ta;U.bih=Ha.height;U.biw=Ha.width;U.brdim=m.join();Ha=(U.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Zb.visibilityState||Zb.webkitVisibilityState||Zb.mozVisibilityState||""]||0,U.wgl=!!F.WebGLRenderingContext,U);
for(var Qd in Ha)d[Qd]=Ha[Qd]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=oi++;df("//www.youtube.com/ad_data_204",{Ba:!1,A:d,withCredentials:!0})}});
T(ni,18E5)}catch(d){R(d)}}}
var oi=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};u("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function pi(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=jc.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=pi.prototype;k.get=function(a,b){qi(a);ri(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){qi(a);ri(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){qi(a);ri(a);delete Z[a]};
k.save=function(){var a=this.b,b=[],c;for(c in Z)b.push(c+"="+encodeURIComponent(String(Z[c])));ag(a,b.join("&"),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
function ri(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function qi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function si(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
oa(pi);var ti=null,ui=null,vi=null,wi={};function xi(a){Xf(a.payload_name,a.payload,void 0,void 0)}
function yi(a){var b=a.id;a=a.ve_type;var c=lg++;a=new jg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});wi[b]=a;b=ng();c=mg();b&&c&&qg(b,c,a)}
function zi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(og(b,a),a=mg()))for(var c in wi){var d=wi[c];d&&qg(b,a,d)}}
function Ai(a){wi[a.id]=new jg({trackingParams:a.tracking_params})}
function Bi(a){var b=ng();a=wi[a.id];b&&a&&(S("interaction_click_on_gel_web")?Xf("visualElementGestured",{csn:b,ve:kg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):rg({click:{csn:b,visualElement:kg(a)}}))}
function Ci(a){a=a.ids;var b=ng();if(b)for(var c=0;c<a.length;c++){var d=wi[a[c]];d&&Xf("visualElementShown",{csn:b,ve:kg(d),eventType:1})}}
function Di(){var a=ti;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;u("yt.setConfig",P,void 0);u("yt.config.set",P,void 0);u("yt.setMsg",nf,void 0);u("yt.msgs.set",nf,void 0);u("yt.logging.errors.log",lf,void 0);
u("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);ni(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Hh(a.args);ti=a=yh(a);a.addEventListener("onScreenChanged",zi);a.addEventListener("onLogClientVeCreated",yi);a.addEventListener("onLogServerVeCreated",Ai);a.addEventListener("onLogToGel",xi);
a.addEventListener("onLogVeClicked",Bi);a.addEventListener("onLogVesShown",Ci);a.addEventListener("onReady",Di);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?vi=new Th(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(ui=new Wh(window.parent,b,c),vi=new Nh(a,ui.f));Q("BG_P")&&(Q("BG_I")||Q("BG_IU"))&&Ke();vf()},void 0);
u("yt.www.watch.ads.restrictioncookie.spr",function(a){gf(a+"mac_204?action_fcts=1");return!0},void 0);
var Ei=ke(function(){ih("ol");var a=pi.getInstance(),b=!!((si("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Ic(document.body,"exp-invert-logo"))if(c&&!Ic(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):Ic(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&Ic(document.body,"inverted-hdpi")&&Jc();b!=c&&(b="f"+(Math.floor(119/31)+1),d=si(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),Fi=ke(function(){var a=ti;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&(Je=null);a=0;for(var b=tf.length;a<b;a++)sf(tf[a]);tf.length=0;He("//static.doubleclick.net/instream/ad_status.js");uf=!1;P("DCLKSTAT",0);Gc(vi,ui);if(a=ti)a.removeEventListener("onScreenChanged",zi),a.removeEventListener("onLogClientVeCreated",yi),a.removeEventListener("onLogServerVeCreated",Ai),a.removeEventListener("onLogToGel",xi),a.removeEventListener("onLogVeClicked",Bi),a.removeEventListener("onLogVesShown",Ci),a.removeEventListener("onReady",
Di),a.destroy();wi={}});
window.addEventListener?(window.addEventListener("load",Ei),window.addEventListener("unload",Fi)):window.attachEvent&&(window.attachEvent("onload",Ei),window.attachEvent("onunload",Fi));ya("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||Me);ya("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||Ne);ya("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||wf);ya("yt.player.exports.navigate",v("yt.player.exports.navigate")||pg);
ya("yt.util.activity.init",v("yt.util.activity.init")||Hf);ya("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||Kf);ya("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||If);}).call(this);

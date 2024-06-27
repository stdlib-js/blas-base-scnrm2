// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function e(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(r){return t.exec(r).slice(1)};function o(){for(var r="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(r=o+"/"+r,t="/"===o.charAt(0))}return(t?"/":"")+(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function i(r){var t=a(r),n="/"===y(r,-1);return(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function a(r){return"/"===r.charAt(0)}function c(){return i(g(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function u(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=o(r).substr(1),e=o(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),c=a,u=0;u<a;u++)if(n[u]!==i[u]){c=u;break}var s=[];for(u=c;u<n.length;u++)s.push("..");return(s=s.concat(i.slice(c))).join("/")}function s(r){var e=n(r),t=e[0],o=e[1];return t||o?(o&&(o=o.substr(0,o.length-1)),t+o):"."}function f(r,e){var t=n(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function l(r){return n(r)[3]}var p={extname:l,basename:f,dirname:s,sep:"/",delimiter:":",relative:u,join:c,isAbsolute:a,normalize:i,resolve:o};function g(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var y="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},h=r(Object.freeze({__proto__:null,basename:f,default:p,delimiter:":",dirname:s,extname:l,isAbsolute:a,join:c,normalize:i,relative:u,resolve:o,sep:"/"})),b=Object,d=/./,v="function"==typeof Object.defineProperty?Object.defineProperty:null,w=Object.defineProperty;function m(r){return"number"==typeof r}function j(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+j(o):j(o)+r,n&&(r="-"+r)),r}var E=String.prototype.toLowerCase,A=String.prototype.toUpperCase;function O(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===A.call(r.specifier)?A.call(t):E.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var S=Math.abs,x=String.prototype.toLowerCase,k=String.prototype.toUpperCase,T=String.prototype.replace,F=/e\+(\d)$/,P=/e-(\d)$/,I=/^(\d+)$/,V=/^(\d+)e/,M=/\.0$/,R=/\.0*e/,$=/(\..*[^0])0*e/;function C(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!m(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":S(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=T.call(t,$,"$1e"),t=T.call(t,R,"e"),t=T.call(t,M,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=T.call(t,F,"e+0$1"),t=T.call(t,P,"e-0$1"),r.alternate&&(t=T.call(t,I,"$1."),t=T.call(t,V,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===k.call(r.specifier)?k.call(t):x.call(t)}function B(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var N=String.fromCharCode,L=isNaN,q=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Z(r){var e,t,n,o,i,a,c,u,s,f,l,p,g;if(!q(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,L(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=O(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!L(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(i)?String(n.arg):N(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,l=n.width,p=n.padRight,g=void 0,(g=l-f.length)<0?f:f=p?f+B(g):B(g)+f)),a+=n.arg||"",c+=1}return a}var z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=z.exec(r);n;)(e=r.slice(o,z.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),o=z.lastIndex,n=z.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function X(r){var e,t;if("string"!=typeof r)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Z.apply(null,e)}var D,Y=Object.prototype,J=Y.toString,H=Y.__defineGetter__,K=Y.__defineSetter__,Q=Y.__lookupGetter__,rr=Y.__lookupSetter__;D=function(){try{return v({},"x",{}),!0}catch(r){return!1}}()?w:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Q.call(r,e)||rr.call(r,e)?(n=r.__proto__,r.__proto__=Y,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,e,t.get),a&&K&&K.call(r,e,t.set),r};var er=D;function tr(r,e,t){er(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function nr(r){return"boolean"==typeof r}var or="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ir(){return or&&"symbol"==typeof Symbol.toStringTag}var ar,cr=Object.prototype.toString,ur=Object.prototype.hasOwnProperty,sr="function"==typeof Symbol?Symbol:void 0,fr="function"==typeof sr?sr.toStringTag:"";ar=ir()?function(r){var e,t,n,o,i;if(null==r)return cr.call(r);t=r[fr],i=fr,e=null!=(o=r)&&ur.call(o,i);try{r[fr]=void 0}catch(e){return cr.call(r)}return n=cr.call(r),e?r[fr]=t:delete r[fr],n}:function(r){return cr.call(r)};var lr=ar,pr=Boolean,gr=Boolean.prototype.toString,yr=ir();function hr(r){return"object"==typeof r&&(r instanceof pr||(yr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===lr(r)))}function br(r){return nr(r)||hr(r)}tr(br,"isPrimitive",nr),tr(br,"isObject",hr);var dr="object"==typeof self?self:null,vr="object"==typeof window?window:null,wr="object"==typeof globalThis?globalThis:null,mr=function(r){if(arguments.length){if(!nr(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(wr)return wr;if(dr)return dr;if(vr)return vr;throw new Error("unexpected error. Unable to resolve global object.")}(),jr=mr.document&&mr.document.childNodes,_r=Int8Array;function Er(){return/^\s*function\s*([^(]*)/i}var Ar,Or=/^\s*function\s*([^(]*)/i;tr(Er,"REGEXP",Or),Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)};var Sr=Ar;function xr(r){return null!==r&&"object"==typeof r}var kr=function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xr);function Tr(r){var e,t,n,o;if(("Object"===(t=lr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Or.exec(n.toString()))return e[1]}return xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}tr(xr,"isObjectLikeArray",kr);var Fr,Pr,Ir="function"==typeof d||"object"==typeof _r||"function"==typeof jr?function(r){return Tr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Tr(r).toLowerCase():e},Vr=Object.getPrototypeOf;Pr=Object.getPrototypeOf,Fr="function"===Ir(Pr)?Vr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===lr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Mr=Fr;function Rr(r){return null==r?null:(r=b(r),Mr(r))}function $r(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===lr(r))return!0;r=Rr(r)}return!1}var Cr,Br="function"==typeof Math.fround?Math.fround:null,Nr="function"==typeof Float32Array,Lr=Number.POSITIVE_INFINITY,qr="function"==typeof Float32Array?Float32Array:null,Gr="function"==typeof Float32Array?Float32Array:void 0;Cr=function(){var r,e;if("function"!=typeof qr)return!1;try{r=function(r){return Nr&&r instanceof Float32Array||"[object Float32Array]"===lr(r)}(e=new qr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Lr}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Zr=Cr,zr=new Zr(1),Wr="function"==typeof Br?Br:function(r){return zr[0]=r,zr[0]},Ur=34028234663852886e22;function Xr(r){return Math.abs(r)}function Dr(r){return Wr(Wr(r)*Wr(r))}var Yr=Math.sqrt;function Jr(r){return Wr(Yr(Wr(r)))}var Hr=108420217e-27,Kr=450359963e7,Qr=377789319e14,re=132348898e-31;function ee(r,e,t,n){var o,i,a,c,u,s,f,l,p,g,y,h,b,d,v;if(r<=0)return 0;for(v=0,a=new Zr((d=e).buffer,d.byteOffset+d.BYTES_PER_ELEMENT*v,2*(d.length-v)),h=2*t,y=2*n,o=!0,i=0,c=0,u=0,s=0,p=1,b=0;b<r;b++)(g=Xr(a[y]))>Kr?(c=Wr(c+Dr(g*re)),o=!1):g<Hr?o&&(s=Wr(s+Dr(g*Qr))):u=Wr(u+Wr(g*g)),(g=Xr(a[y+1]))>Kr?(c=Wr(c+Dr(g*re)),o=!1):g<Hr?o&&(s=Wr(s+Dr(g*Qr))):u=Wr(u+Wr(g*g)),y+=h;return c>0?((u>0||u>Ur||u!=u)&&(c=Wr(c+Wr(Wr(u*re)*re))),p=Wr(1/re),i=c):s>0?u>0||u>Ur||u!=u?(u=Jr(u),(s=Wr(Jr(s)/Qr))>u?(l=u,f=s):(l=s,f=u),p=1,i=Wr(Wr(f*f)*Wr(1+Dr(l/f)))):(p=Wr(1/Qr),i=s):(p=1,i=u),Wr(Jr(i)*p)}function te(r,e,t){return r<=0?0:ee(r,e,t,t<0?(1-r)*t:0)}tr(te,"ndarray",ee);var ne=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return $r(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,h.join)("/home/runner/work/blas-base-scnrm2/blas-base-scnrm2/lib","./native.js"));return $r(ne)?te:ne},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).scnrm2=e();
//# sourceMappingURL=browser.js.map

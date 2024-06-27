// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).scnrm2=e(r.require$$0)}(this,(function(r){"use strict";var e=Object,t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function c(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(o):a(o)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function l(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,j,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,h,"e-0$1"),r.alternate&&(t=d.call(t,b,"$1."),t=d.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var S=String.fromCharCode,x=isNaN,A=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,i,a,u,f,s,p,g,d,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,x(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(i)?String(n.arg):S(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+E(y):E(y)+p)),a+=n.arg||"",u+=1}return a}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var P,$=Object.prototype,C=$.toString,R=$.__defineGetter__,B=$.__defineSetter__,M=$.__lookupGetter__,N=$.__lookupSetter__;P=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(M.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var q=P;function L(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y,z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";Y=W()?function(r){var e,t,n,o,i;if(null==r)return U.call(r);t=r[D],i=D,e=null!=(o=r)&&X.call(o,i);try{r[D]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[D]=t:delete r[D],n}:function(r){return U.call(r)};var J=Y,H=Boolean,K=Boolean.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return G(r)||rr(r)}L(er,"isPrimitive",G),L(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,or="object"==typeof global?global:null,ir="object"==typeof globalThis?globalThis:null;var ar=function(r){if(arguments.length){if(!G(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(tr)return tr;if(nr)return nr;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var lr,sr=/^\s*function\s*([^(]*)/i;L(fr,"REGEXP",sr),lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var pr=lr;function gr(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr);function yr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return gr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(gr,"isObjectLikeArray",dr);var hr="function"==typeof t||"object"==typeof ur||"function"==typeof cr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};var br,vr,wr=Object.getPrototypeOf;vr=Object.getPrototypeOf,br="function"===hr(vr)?wr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var mr=br;function jr(r){return null==r?null:(r=e(r),mr(r))}function _r(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===J(r))return!0;r=jr(r)}return!1}var Er="function"==typeof Math.fround?Math.fround:null,Sr="function"==typeof Float32Array;var xr=Number.POSITIVE_INFINITY,Ar="function"==typeof Float32Array?Float32Array:null;var Or,Tr="function"==typeof Float32Array?Float32Array:void 0;Or=function(){var r,e;if("function"!=typeof Ar)return!1;try{r=function(r){return Sr&&r instanceof Float32Array||"[object Float32Array]"===J(r)}(e=new Ar([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===xr}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var kr=Or,Fr=new kr(1);var Ir="function"==typeof Er?Er:function(r){return Fr[0]=r,Fr[0]},Vr=34028234663852886e22;function Pr(r){return Math.abs(r)}function $r(r){return Ir(Ir(r)*Ir(r))}var Cr=Math.sqrt;function Rr(r){return Ir(Cr(Ir(r)))}var Br=108420217e-27,Mr=450359963e7,Nr=377789319e14,qr=132348898e-31;function Lr(r,e,t,n){var o,i,a,c,u,f,l,s,p,g,d,y,h,b,v;if(r<=0)return 0;for(v=0,a=new kr((b=e).buffer,b.byteOffset+b.BYTES_PER_ELEMENT*v,2*(b.length-v)),y=2*t,d=2*n,o=!0,i=0,c=0,u=0,f=0,p=1,h=0;h<r;h++)(g=Pr(a[d]))>Mr?(c=Ir(c+$r(g*qr)),o=!1):g<Br?o&&(f=Ir(f+$r(g*Nr))):u=Ir(u+Ir(g*g)),(g=Pr(a[d+1]))>Mr?(c=Ir(c+$r(g*qr)),o=!1):g<Br?o&&(f=Ir(f+$r(g*Nr))):u=Ir(u+Ir(g*g)),d+=y;return c>0?((u>0||u>Vr||u!=u)&&(c=Ir(c+Ir(Ir(u*qr)*qr))),p=Ir(1/qr),i=c):f>0?u>0||u>Vr||u!=u?(u=Rr(u),(f=Ir(Rr(f)/Nr))>u?(s=u,l=f):(s=f,l=u),p=1,i=Ir(Ir(l*l)*Ir(1+$r(s/l)))):(p=Ir(1/Nr),i=f):(p=1,i=u),Ir(Rr(i)*p)}function Gr(r,e,t){return r<=0?0:Lr(r,e,t,t<0?(1-r)*t:0)}L(Gr,"ndarray",Lr);var Zr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return _r(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js"));return _r(Zr)?Gr:Zr}));
//# sourceMappingURL=index.js.map

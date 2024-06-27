"use strict";var d=function(v,t){return function(){return t||v((t={exports:{}}).exports,t),t.exports}};var j=d(function(V,L){
var e=require('@stdlib/number-float64-base-to-float32/dist'),O=require('@stdlib/constants-float32-max/dist'),R=require('@stdlib/math-base-special-absf/dist'),o=require('@stdlib/math-base-special-abs2f/dist'),g=require('@stdlib/math-base-special-sqrtf/dist'),C=require('@stdlib/strided-base-reinterpret-complex64/dist'),w=108420217e-27,F=450359963e7,y=377789319e14,c=132348898e-31;function D(v,t,n,l){var q,u,b,s,r,i,m,p,f,a,x,A,E;if(v<=0)return 0;for(b=C(t,0),A=n*2,x=l*2,q=!0,u=0,s=0,r=0,i=0,f=1,E=0;E<v;E++)a=R(b[x]),a>F?(s=e(s+o(a*c)),q=!1):a<w?q&&(i=e(i+o(a*y))):r=e(r+e(a*a)),a=R(b[x+1]),a>F?(s=e(s+o(a*c)),q=!1):a<w?q&&(i=e(i+o(a*y))):r=e(r+e(a*a)),x+=A;return s>0?((r>0||r>O||r!==r)&&(s=e(s+e(e(r*c)*c))),f=e(1/c),u=s):i>0?r>0||r>O||r!==r?(r=g(r),i=e(g(i)/y),i>r?(p=r,m=i):(p=i,m=r),f=1,u=e(e(m*m)*e(1+o(p/m)))):(f=e(1/y),u=i):(f=1,u=r),e(g(u)*f)}L.exports=D
});var T=d(function(W,M){
var G=j();function H(v,t,n){var l;return v<=0?0:(n<0?l=(1-v)*n:l=0,G(v,t,n,l))}M.exports=H
});var z=d(function(X,k){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=T(),J=j();I(h,"ndarray",J);k.exports=h
});var K=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=z(),_,B=P(K(__dirname,"./native.js"));Q(B)?_=S:_=B;module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

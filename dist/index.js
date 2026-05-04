"use strict";var p=function(t,v){return function(){return v||t((v={exports:{}}).exports,v),v.exports}};var g=p(function(V,F){
var e=require('@stdlib/number-float64-base-to-float32/dist'),A=require('@stdlib/constants-float32-max/dist'),O=require('@stdlib/math-base-special-absf/dist'),l=require('@stdlib/math-base-special-abs2f/dist'),E=require('@stdlib/math-base-special-sqrtf/dist'),B=require('@stdlib/strided-base-reinterpret-complex64/dist'),R=108420217e-27,w=450359963e7,x=377789319e14,m=132348898e-31;function C(t,v,o,z){var n,u,y,s,r,i,q,b,f,a,c,_,d;if(t<=0)return 0;for(y=B(v,0),_=o*2,c=z*2,n=!0,u=0,s=0,r=0,i=0,f=1,d=0;d<t;d++)a=O(y[c]),a>w?(s=e(s+l(a*m)),n=!1):a<R?n&&(i=e(i+l(a*x))):r=e(r+e(a*a)),a=O(y[c+1]),a>w?(s=e(s+l(a*m)),n=!1):a<R?n&&(i=e(i+l(a*x))):r=e(r+e(a*a)),c+=_;return s>0?((r>0||r>A||r!==r)&&(s=e(s+e(e(r*m)*m))),f=e(1/m),u=s):i>0?r>0||r>A||r!==r?(r=E(r),i=e(E(i)/x),i>r?(b=r,q=i):(b=i,q=r),f=1,u=e(e(q*q)*e(1+l(b/q)))):(f=e(1/x),u=i):(f=1,u=r),e(E(u)*f)}F.exports=C
});var M=p(function(W,L){
var D=require('@stdlib/strided-base-stride2offset/dist'),G=g();function H(t,v,o){return G(t,v,o,D(t,o))}L.exports=H
});var h=p(function(Y,X){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=M(),J=g();I(T,"ndarray",J);X.exports=T
});var K=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=h(),j,k=P(K(__dirname,"./native.js"));Q(k)?j=S:j=k;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

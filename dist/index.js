"use strict";var p=function(t,s){return function(){try{return s||t((s={exports:{}}).exports,s),s.exports}catch(u){throw (s=0, u)}};};var g=p(function(V,F){
var e=require('@stdlib/number-float64-base-to-float32/dist'),A=require('@stdlib/constants-float32-max/dist'),O=require('@stdlib/math-base-special-absf/dist'),m=require('@stdlib/math-base-special-abs2f/dist'),E=require('@stdlib/math-base-special-sqrtf/dist'),B=require('@stdlib/strided-base-reinterpret-complex64/dist'),R=108420217e-27,w=450359963e7,x=377789319e14,o=132348898e-31;function C(t,s,u,z){var q,f,y,v,r,i,l,b,n,a,c,_,d;if(t<=0)return 0;for(y=B(s,0),_=u*2,c=z*2,q=!0,f=0,v=0,r=0,i=0,n=1,d=0;d<t;d++)a=O(y[c]),a>w?(v=e(v+m(a*o)),q=!1):a<R?q&&(i=e(i+m(a*x))):r=e(r+e(a*a)),a=O(y[c+1]),a>w?(v=e(v+m(a*o)),q=!1):a<R?q&&(i=e(i+m(a*x))):r=e(r+e(a*a)),c+=_;return v>0?((r>0||r>A||r!==r)&&(v=e(v+e(e(r*o)*o))),n=e(1/o),f=v):i>0?r>0||r>A||r!==r?(r=E(r),i=e(E(i)/x),i>r?(b=r,l=i):(b=i,l=r),n=1,f=e(e(l*l)*e(1+m(b/l)))):(n=e(1/x),f=i):(n=1,f=r),e(E(f)*n)}F.exports=C
});var M=p(function(W,L){
var D=require('@stdlib/strided-base-stride2offset/dist'),G=g();function H(t,s,u){return G(t,s,u,D(t,u))}L.exports=H
});var h=p(function(Y,X){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=M(),J=g();I(T,"ndarray",J);X.exports=T
});var K=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=h(),j,k=P(K(__dirname,"./native.js"));Q(k)?j=S:j=k;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

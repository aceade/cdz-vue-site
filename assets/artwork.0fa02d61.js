import{f as Mt,r as or,g as pn,h as hn,w as mn,p as En,i as sr,j as bn,k as yn,o as ye,a as Ue,d as q,l as at,m as An,n as cr,q as _e,s as wn,b as be,N as Tn,u as Ie,F as wt,t as ur,e as Sn}from"./Navbar.7ae20e92.js";function lr(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function xn(e,r,t){return r&&lr(e.prototype,r),t&&lr(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var fr="(prefers-reduced-motion: reduce)",Ne=1,In=2,Oe=3,Pe=4,Ke=5,tt=6,ot=7,Ln={CREATED:Ne,MOUNTED:In,IDLE:Oe,MOVING:Pe,SCROLLING:Ke,DRAGGING:tt,DESTROYED:ot};function le(e){e.length=0}function me(e,r,t){return Array.prototype.slice.call(e,r,t)}function $(e){return e.bind.apply(e,[null].concat(me(arguments,1)))}var Lt=setTimeout,Nt=function(){};function dr(e){return requestAnimationFrame(e)}function lt(e,r){return typeof r===e}function We(e){return!zt(e)&&lt("object",e)}var Vt=Array.isArray,Nr=$(lt,"function"),he=$(lt,"string"),ft=$(lt,"undefined");function zt(e){return e===null}function Rr(e){return e instanceof HTMLElement}function Me(e){return Vt(e)?e:[e]}function ne(e,r){Me(e).forEach(r)}function Ft(e,r){return e.indexOf(r)>-1}function rt(e,r){return e.push.apply(e,Me(r)),e}function ge(e,r,t){e&&ne(r,function(n){n&&e.classList[t?"add":"remove"](n)})}function ae(e,r){ge(e,he(r)?r.split(" "):r,!0)}function Ze(e,r){ne(r,e.appendChild.bind(e))}function $t(e,r){ne(e,function(t){var n=(r||t).parentNode;n&&n.insertBefore(t,r)})}function He(e,r){return Rr(e)&&(e.msMatchesSelector||e.matches).call(e,r)}function kr(e,r){var t=e?me(e.children):[];return r?t.filter(function(n){return He(n,r)}):t}function Je(e,r){return r?kr(e,r)[0]:e.firstElementChild}var st=Object.keys;function Ae(e,r,t){if(e){var n=st(e);n=t?n.reverse():n;for(var i=0;i<n.length;i++){var c=n[i];if(c!=="__proto__"&&r(e[c],c)===!1)break}}return e}function Ye(e){return me(arguments,1).forEach(function(r){Ae(r,function(t,n){e[n]=r[n]})}),e}function pe(e){return me(arguments,1).forEach(function(r){Ae(r,function(t,n){Vt(t)?e[n]=t.slice():We(t)?e[n]=pe({},We(e[n])?e[n]:{},t):e[n]=t})}),e}function vr(e,r){Me(r||st(e)).forEach(function(t){delete e[t]})}function oe(e,r){ne(e,function(t){ne(r,function(n){t&&t.removeAttribute(n)})})}function M(e,r,t){We(r)?Ae(r,function(n,i){M(e,i,n)}):ne(e,function(n){zt(t)||t===""?oe(n,r):n.setAttribute(r,String(t))})}function Re(e,r,t){var n=document.createElement(e);return r&&(he(r)?ae(n,r):M(n,r)),t&&Ze(t,n),n}function Q(e,r,t){if(ft(t))return getComputedStyle(e)[r];zt(t)||(e.style[r]=""+t)}function ct(e,r){Q(e,"display",r)}function Or(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function re(e,r){return e.getAttribute(r)}function _r(e,r){return e&&e.classList.contains(r)}function ee(e){return e.getBoundingClientRect()}function we(e){ne(e,function(r){r&&r.parentNode&&r.parentNode.removeChild(r)})}function Cr(e){return Je(new DOMParser().parseFromString(e,"text/html").body)}function se(e,r){e.preventDefault(),r&&(e.stopPropagation(),e.stopImmediatePropagation())}function Dr(e,r){return e&&e.querySelector(r)}function Ut(e,r){return r?me(e.querySelectorAll(r)):[]}function ce(e,r){ge(e,r,!1)}function Rt(e){return e.timeStamp}function ve(e){return he(e)?e:e?e+"px":""}var J="splide",Bt="data-"+J;function Be(e,r){if(!e)throw new Error("["+J+"] "+(r||""))}var Ce=Math.min,je=Math.max,ut=Math.floor,Xe=Math.ceil,Z=Math.abs;function Pr(e,r,t){return Z(e-r)<t}function nt(e,r,t,n){var i=Ce(r,t),c=je(r,t);return n?i<e&&e<c:i<=e&&e<=c}function $e(e,r,t){var n=Ce(r,t),i=je(r,t);return Ce(je(n,e),i)}function kt(e){return+(e>0)-+(e<0)}function Ot(e,r){return ne(r,function(t){e=e.replace("%s",""+t)}),e}function Gt(e){return e<10?"0"+e:""+e}var gr={};function Nn(e){return""+e+Gt(gr[e]=(gr[e]||0)+1)}function Mr(){var e=[];function r(s,l,f,a){i(s,l,function(o,E,v){var m="addEventListener"in o,g=m?o.removeEventListener.bind(o,E,f,a):o.removeListener.bind(o,f);m?o.addEventListener(E,f,a):o.addListener(f),e.push([o,E,v,f,g])})}function t(s,l,f){i(s,l,function(a,o,E){e=e.filter(function(v){return v[0]===a&&v[1]===o&&v[2]===E&&(!f||v[3]===f)?(v[4](),!1):!0})})}function n(s,l,f){var a,o=!0;return typeof CustomEvent=="function"?a=new CustomEvent(l,{bubbles:o,detail:f}):(a=document.createEvent("CustomEvent"),a.initCustomEvent(l,o,!1,f)),s.dispatchEvent(a),a}function i(s,l,f){ne(s,function(a){a&&ne(l,function(o){o.split(" ").forEach(function(E){var v=E.split(".");f(a,v[0],v[1])})})})}function c(){e.forEach(function(s){s[4]()}),le(e)}return{bind:r,unbind:t,dispatch:n,destroy:c}}var de="mounted",pr="ready",fe="move",Ve="moved",Vr="shifted",Wt="click",zr="active",Fr="inactive",$r="visible",Ur="hidden",Br="slide:keydown",B="refresh",K="updated",Te="resize",Ht="resized",Gr="drag",Wr="dragging",Hr="dragged",dt="scroll",xe="scrolled",Yt="destroy",Yr="arrows:mounted",jr="arrows:updated",Xr="pagination:mounted",qr="pagination:updated",jt="navigation:mounted",Xt="autoplay:play",Kr="autoplay:playing",qt="autoplay:pause",Kt="lazyload:loaded";function G(e){var r=e?e.event.bus:document.createDocumentFragment(),t=Mr();function n(c,s){t.bind(r,Me(c).join(" "),function(l){s.apply(s,Vt(l.detail)?l.detail:[])})}function i(c){t.dispatch(r,c,me(arguments,1))}return e&&e.event.on(Yt,t.destroy),Ye(t,{bus:r,on:n,off:$(t.unbind,r),emit:i})}function vt(e,r,t,n){var i=Date.now,c,s=0,l,f=!0,a=0;function o(){if(!f){if(s=e?Ce((i()-c)/e,1):1,t&&t(s),s>=1&&(r(),c=i(),n&&++a>=n))return v();dr(o)}}function E(b){!b&&g(),c=i()-(b?s*e:0),f=!1,dr(o)}function v(){f=!0}function m(){c=i(),s=0,t&&t(s)}function g(){l&&cancelAnimationFrame(l),s=0,l=0,f=!0}function u(b){e=b}function _(){return f}return{start:E,rewind:m,pause:v,cancel:g,set:u,isPaused:_}}function Rn(e){var r=e;function t(i){r=i}function n(i){return Ft(Me(i),r)}return{set:t,is:n}}function kn(e,r){var t;function n(){t||(t=vt(r||0,function(){e(),t=null},null,1),t.start())}return n}function On(e,r,t){var n=e.state,i=t.breakpoints||{},c=t.reducedMotion||{},s=Mr(),l=[];function f(){var g=t.mediaQuery==="min";st(i).sort(function(u,_){return g?+u-+_:+_-+u}).forEach(function(u){o(i[u],"("+(g?"min":"max")+"-width:"+u+"px)")}),o(c,fr),E()}function a(g){g&&s.destroy()}function o(g,u){var _=matchMedia(u);s.bind(_,"change",E),l.push([g,_])}function E(){var g=n.is(ot),u=t.direction,_=l.reduce(function(b,p){return pe(b,p[1].matches?p[0]:{})},{});vr(t),m(_),t.destroy?e.destroy(t.destroy==="completely"):g?(a(!0),e.mount()):u!==t.direction&&e.refresh()}function v(g){matchMedia(fr).matches&&(g?pe(t,c):vr(t,st(c)))}function m(g,u){pe(t,g),u&&pe(Object.getPrototypeOf(t),g),n.is(Ne)||e.emit(K,t)}return{setup:f,destroy:a,reduce:v,set:m}}var _t="Arrow",gt=_t+"Left",pt=_t+"Right",Zr=_t+"Up",Jr=_t+"Down",hr="rtl",ht="ttb",Tt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Zr,pt],ArrowRight:[Jr,gt]};function Cn(e,r,t){function n(c,s,l){l=l||t.direction;var f=l===hr&&!s?1:l===ht?0:-1;return Tt[c]&&Tt[c][f]||c.replace(/width|left|right/i,function(a,o){var E=Tt[a.toLowerCase()][f]||a;return o>0?E.charAt(0).toUpperCase()+E.slice(1):E})}function i(c){return c*(t.direction===hr?1:-1)}return{resolve:n,orient:i}}var ue="role",ke="tabindex",Dn="disabled",ie="aria-",Qe=ie+"controls",Qr=ie+"current",mr=ie+"selected",te=ie+"label",Zt=ie+"labelledby",en=ie+"hidden",Jt=ie+"orientation",qe=ie+"roledescription",Er=ie+"live",br=ie+"busy",yr=ie+"atomic",Qt=[ue,ke,Dn,Qe,Qr,te,Zt,en,Jt,qe],St=J,Ar=J+"__track",Pn=J+"__list",mt=J+"__slide",tn=mt+"--clone",Mn=mt+"__container",er=J+"__arrows",Et=J+"__arrow",rn=Et+"--prev",nn=Et+"--next",bt=J+"__pagination",an=bt+"__page",Vn=J+"__progress",zn=Vn+"__bar",Fn=J+"__toggle",$n=J+"__spinner",Un=J+"__sr",Bn="is-initialized",Se="is-active",on="is-prev",sn="is-next",Ct="is-visible",Dt="is-loading",cn="is-focus-in",Gn=[Se,Ct,on,sn,Dt,cn],Wn={slide:mt,clone:tn,arrows:er,arrow:Et,prev:rn,next:nn,pagination:bt,page:an,spinner:$n};function Hn(e,r){if(Nr(e.closest))return e.closest(r);for(var t=e;t&&t.nodeType===1&&!He(t,r);)t=t.parentElement;return t}var Yn=5,wr=200,un="touchstart mousedown",xt="touchmove mousemove",It="touchend touchcancel mouseup click";function jn(e,r,t){var n=G(e),i=n.on,c=n.bind,s=e.root,l=t.i18n,f={},a=[],o=[],E=[],v,m,g;function u(){w(),L(),p()}function _(){i(B,b),i(B,u),i(K,p),c(document,un+" keydown",function(S){g=S.type==="keydown"},{capture:!0}),c(s,"focusin",function(){ge(s,cn,!!g)})}function b(S){var N=Qt.concat("style");le(a),ce(s,o),ce(v,E),oe([v,m],N),oe(s,S?N:["style",qe])}function p(){ce(s,o),ce(v,E),o=x(St),E=x(Ar),ae(s,o),ae(v,E),M(s,te,t.label),M(s,Zt,t.labelledby)}function w(){v=V("."+Ar),m=Je(v,"."+Pn),Be(v&&m,"A track/list element is missing."),rt(a,kr(m,"."+mt+":not(."+tn+")")),Ae({arrows:er,pagination:bt,prev:rn,next:nn,bar:zn,toggle:Fn},function(S,N){f[N]=V("."+S)}),Ye(f,{root:s,track:v,list:m,slides:a})}function L(){var S=s.id||Nn(J),N=t.role;s.id=S,v.id=v.id||S+"-track",m.id=m.id||S+"-list",!re(s,ue)&&s.tagName!=="SECTION"&&N&&M(s,ue,N),M(s,qe,l.carousel),M(m,ue,"presentation")}function V(S){var N=Dr(s,S);return N&&Hn(N,"."+St)===s?N:void 0}function x(S){return[S+"--"+t.type,S+"--"+t.direction,t.drag&&S+"--draggable",t.isNavigation&&S+"--nav",S===St&&Se]}return Ye(f,{setup:u,mount:_,destroy:b})}var De="slide",ze="loop",yt="fade";function Xn(e,r,t,n){var i=G(e),c=i.on,s=i.emit,l=i.bind,f=e.Components,a=e.root,o=e.options,E=o.isNavigation,v=o.updateOnMove,m=o.i18n,g=o.pagination,u=o.slideFocus,_=f.Direction.resolve,b=re(n,"style"),p=re(n,te),w=t>-1,L=Je(n,"."+Mn),V=Ut(n,o.focusableNodes||""),x;function S(){w||(n.id=a.id+"-slide"+Gt(r+1),M(n,ue,g?"tabpanel":"group"),M(n,qe,m.slide),M(n,te,p||Ot(m.slideLabel,[r+1,e.length]))),N()}function N(){l(n,"click",$(s,Wt,X)),l(n,"keydown",$(s,Br,X)),c([Ve,Vr,xe],A),c(jt,D),v&&c(fe,y)}function k(){x=!0,i.destroy(),ce(n,Gn),oe(n,Qt),M(n,"style",b),M(n,te,p||"")}function D(){var h=e.splides.map(function(C){var d=C.splide.Components.Slides.getAt(r);return d?d.slide.id:""}).join(" ");M(n,te,Ot(m.slideX,(w?t:r)+1)),M(n,Qe,h),M(n,ue,u?"button":""),u&&oe(n,qe)}function y(){x||A()}function A(){if(!x){var h=e.index;O(),I(),ge(n,on,r===h-1),ge(n,sn,r===h+1)}}function O(){var h=R();h!==_r(n,Se)&&(ge(n,Se,h),M(n,Qr,E&&h||""),s(h?zr:Fr,X))}function I(){var h=H(),C=!h&&(!R()||w);if(e.state.is([Pe,Ke])||M(n,en,C||""),M(V,ke,C?-1:""),u&&M(n,ke,C?-1:0),h!==_r(n,Ct)&&(ge(n,Ct,h),s(h?$r:Ur,X)),!h&&document.activeElement===n){var d=f.Slides.getAt(e.index);d&&Or(d.slide)}}function z(h,C,d){Q(d&&L||n,h,C)}function R(){var h=e.index;return h===r||o.cloneStatus&&h===t}function H(){if(e.is(yt))return R();var h=ee(f.Elements.track),C=ee(n),d=_("left",!0),P=_("right",!0);return ut(h[d])<=Xe(C[d])&&ut(C[P])<=Xe(h[P])}function Y(h,C){var d=Z(h-r);return!w&&(o.rewind||e.is(ze))&&(d=Ce(d,e.length-d)),d<=C}var X={index:r,slideIndex:t,slide:n,container:L,isClone:w,mount:S,destroy:k,update:A,style:z,isWithin:Y};return X}function qn(e,r,t){var n=G(e),i=n.on,c=n.emit,s=n.bind,l=r.Elements,f=l.slides,a=l.list,o=[];function E(){v(),i(B,m),i(B,v),i([de,B],function(){o.sort(function(y,A){return y.index-A.index})})}function v(){f.forEach(function(y,A){u(y,A,-1)})}function m(){V(function(y){y.destroy()}),le(o)}function g(){V(function(y){y.update()})}function u(y,A,O){var I=Xn(e,A,O,y);I.mount(),o.push(I)}function _(y){return y?x(function(A){return!A.isClone}):o}function b(y){var A=r.Controller,O=A.toIndex(y),I=A.hasFocus()?1:t.perPage;return x(function(z){return nt(z.index,O,O+I-1)})}function p(y){return x(y)[0]}function w(y,A){ne(y,function(O){if(he(O)&&(O=Cr(O)),Rr(O)){var I=f[A];I?$t(O,I):Ze(a,O),ae(O,t.classes.slide),N(O,$(c,Te))}}),c(B)}function L(y){we(x(y).map(function(A){return A.slide})),c(B)}function V(y,A){_(A).forEach(y)}function x(y){return o.filter(Nr(y)?y:function(A){return he(y)?He(A.slide,y):Ft(Me(y),A.index)})}function S(y,A,O){V(function(I){I.style(y,A,O)})}function N(y,A){var O=Ut(y,"img"),I=O.length;I?O.forEach(function(z){s(z,"load error",function(){--I||A()})}):A()}function k(y){return y?f.length:o.length}function D(){return o.length>t.perPage}return{mount:E,destroy:m,update:g,register:u,get:_,getIn:b,getAt:p,add:w,remove:L,forEach:V,filter:x,style:S,getLength:k,isEnough:D}}function Kn(e,r,t){var n=G(e),i=n.on,c=n.bind,s=n.emit,l=r.Slides,f=r.Direction.resolve,a=r.Elements,o=a.root,E=a.track,v=a.list,m=l.getAt,g=l.style,u,_;function b(){p(),c(window,"resize load",kn($(s,Te))),i([K,B],p),i(Te,w)}function p(){_=null,u=t.direction===ht,Q(o,"maxWidth",ve(t.width)),Q(E,f("paddingLeft"),L(!1)),Q(E,f("paddingRight"),L(!0)),w()}function w(){var R=ee(o);(!_||_.width!==R.width||_.height!==R.height)&&(Q(E,"height",V()),g(f("marginRight"),ve(t.gap)),g("width",S()),g("height",N(),!0),_=R,s(Ht))}function L(R){var H=t.padding,Y=f(R?"right":"left");return H&&ve(H[Y]||(We(H)?0:H))||"0px"}function V(){var R="";return u&&(R=x(),Be(R,"height or heightRatio is missing."),R="calc("+R+" - "+L(!1)+" - "+L(!0)+")"),R}function x(){return ve(t.height||ee(v).width*t.heightRatio)}function S(){return t.autoWidth?null:ve(t.fixedWidth)||(u?"":k())}function N(){return ve(t.fixedHeight)||(u?t.autoHeight?null:k():x())}function k(){var R=ve(t.gap);return"calc((100%"+(R&&" + "+R)+")/"+(t.perPage||1)+(R&&" - "+R)+")"}function D(){return ee(v)[f("width")]}function y(R,H){var Y=m(R||0);return Y?ee(Y.slide)[f("width")]+(H?0:I()):0}function A(R,H){var Y=m(R);if(Y){var X=ee(Y.slide)[f("right")],h=ee(v)[f("left")];return Z(X-h)+(H?0:I())}return 0}function O(){return A(e.length-1,!0)-A(-1,!0)}function I(){var R=m(0);return R&&parseFloat(Q(R.slide,f("marginRight")))||0}function z(R){return parseFloat(Q(E,f("padding"+(R?"Right":"Left"))))||0}return{mount:b,listSize:D,slideSize:y,sliderSize:O,totalSize:A,getPadding:z}}var Zn=2;function Jn(e,r,t){var n=G(e),i=n.on,c=n.emit,s=r.Elements,l=r.Slides,f=r.Direction.resolve,a=[],o;function E(){v(),i(B,m),i(B,v),i([K,Te],g)}function v(){(o=b())&&(u(o),c(Te))}function m(){we(a),le(a)}function g(){o<b()&&c(B)}function u(p){var w=l.get().slice(),L=w.length;if(L){for(;w.length<p;)rt(w,w);rt(w.slice(-p),w.slice(0,p)).forEach(function(V,x){var S=x<p,N=_(V.slide,x);S?$t(N,w[0].slide):Ze(s.list,N),rt(a,N),l.register(N,x-p+(S?0:L),V.index)})}}function _(p,w){var L=p.cloneNode(!0);return ae(L,t.classes.clone),L.id=e.root.id+"-clone"+Gt(w+1),L}function b(){var p=t.clones;if(!e.is(ze))p=0;else if(!p){var w=t[f("fixedWidth")]&&r.Layout.slideSize(0),L=w&&Xe(ee(s.track)[f("width")]/w);p=L||t[f("autoWidth")]&&e.length||t.perPage*Zn}return p}return{mount:E,destroy:m}}function Qn(e,r,t){var n=G(e),i=n.on,c=n.emit,s=e.state.set,l=r.Layout,f=l.slideSize,a=l.getPadding,o=l.totalSize,E=l.listSize,v=l.sliderSize,m=r.Direction,g=m.resolve,u=m.orient,_=r.Elements,b=_.list,p=_.track,w;function L(){w=r.Transition,i([de,Ht,K,B],V)}function V(){r.Controller.isBusy()||(r.Scroll.cancel(),S(e.index),r.Slides.update())}function x(h,C,d,P){h!==C&&Y(h>d)&&(y(),N(D(I(),h>d),!0)),s(Pe),c(fe,C,d,h),w.start(C,function(){s(Oe),c(Ve,C,d,h),P&&P()})}function S(h){N(O(h,!0))}function N(h,C){if(!e.is(yt)){var d=C?h:k(h);Q(b,"transform","translate"+g("X")+"("+d+"px)"),h!==d&&c(Vr)}}function k(h){if(e.is(ze)){var C=A(h),d=C>r.Controller.getEnd(),P=C<0;(P||d)&&(h=D(h,d))}return h}function D(h,C){var d=h-H(C),P=v();return h-=u(P*(Xe(Z(d)/P)||1))*(C?1:-1),h}function y(){N(I()),w.cancel()}function A(h){for(var C=r.Slides.get(),d=0,P=1/0,W=0;W<C.length;W++){var F=C[W].index,j=Z(O(F,!0)-h);if(j<=P)P=j,d=F;else break}return d}function O(h,C){var d=u(o(h-1)-R(h));return C?z(d):d}function I(){var h=g("left");return ee(b)[h]-ee(p)[h]+u(a(!1))}function z(h){return t.trimSpace&&e.is(De)&&(h=$e(h,0,u(v()-E()))),h}function R(h){var C=t.focus;return C==="center"?(E()-f(h,!0))/2:+C*f(h)||0}function H(h){return O(h?r.Controller.getEnd():0,!!t.trimSpace)}function Y(h){var C=u(D(I(),h));return h?C>=0:C<=b[g("scrollWidth")]-ee(p)[g("width")]}function X(h,C){C=ft(C)?I():C;var d=h!==!0&&u(C)<u(H(!1)),P=h!==!1&&u(C)>u(H(!0));return d||P}return{mount:L,move:x,jump:S,translate:N,shift:D,cancel:y,toIndex:A,toPosition:O,getPosition:I,getLimit:H,exceededLimit:X,reposition:V}}function ei(e,r,t){var n=G(e),i=n.on,c=r.Move,s=c.getPosition,l=c.getLimit,f=c.toPosition,a=r.Slides,o=a.isEnough,E=a.getLength,v=e.is(ze),m=e.is(De),g=$(D,!1),u=$(D,!0),_=t.start||0,b=_,p,w,L;function V(){x(),i([K,B],x)}function x(){p=E(!0),w=t.perMove,L=t.perPage;var d=$e(_,0,p-1);d!==_&&(_=d,c.reposition())}function S(d,P,W){if(!C()){var F=k(d),j=O(F);j>-1&&(P||j!==_)&&(Y(j),c.move(F,j,b,W))}}function N(d,P,W,F){r.Scroll.scroll(d,P,W,function(){Y(O(c.toIndex(s()))),F&&F()})}function k(d){var P=_;if(he(d)){var W=d.match(/([+\-<>])(\d+)?/)||[],F=W[1],j=W[2];F==="+"||F==="-"?P=y(_+ +(""+F+(+j||1)),_):F===">"?P=j?z(+j):g(!0):F==="<"&&(P=u(!0))}else P=v?d:$e(d,0,I());return P}function D(d,P){var W=w||(h()?1:L),F=y(_+W*(d?-1:1),_,!(w||h()));return F===-1&&m&&!Pr(s(),l(!d),1)?d?0:I():P?F:O(F)}function y(d,P,W){if(o()){var F=I(),j=A(d);j!==d&&(P=d,d=j,W=!1),d<0||d>F?!w&&(nt(0,d,P,!0)||nt(F,P,d,!0))?d=z(R(d)):v?d=W?d<0?-(p%L||L):p:d:t.rewind?d=d<0?F:0:d=-1:W&&d!==P&&(d=z(R(P)+(d<P?-1:1)))}else d=-1;return d}function A(d){if(m&&t.trimSpace==="move"&&d!==_)for(var P=s();P===f(d,!0)&&nt(d,0,e.length-1,!t.rewind);)d<_?--d:++d;return d}function O(d){return v?(d+p)%p||0:d}function I(){return je(p-(h()||v&&w?1:L),0)}function z(d){return $e(h()?d:L*d,0,I())}function R(d){return h()?d:ut((d>=I()?p-1:d)/L)}function H(d){var P=c.toIndex(d);return m?$e(P,0,I()):P}function Y(d){d!==_&&(b=_,_=d)}function X(d){return d?b:_}function h(){return!ft(t.focus)||t.isNavigation}function C(){return e.state.is([Pe,Ke])&&!!t.waitForTransition}return{mount:V,go:S,scroll:N,getNext:g,getPrev:u,getAdjacent:D,getEnd:I,setIndex:Y,getIndex:X,toIndex:z,toPage:R,toDest:H,hasFocus:h,isBusy:C}}var ti="http://www.w3.org/2000/svg",ri="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",et=40;function ni(e,r,t){var n=G(e),i=n.on,c=n.bind,s=n.emit,l=t.classes,f=t.i18n,a=r.Elements,o=r.Controller,E=a.arrows,v=a.track,m=E,g=a.prev,u=a.next,_,b,p={};function w(){V(),i(K,L)}function L(){x(),w()}function V(){var A=t.arrows;A&&!(g&&u)&&k(),g&&u&&(Ye(p,{prev:g,next:u}),ct(m,A?"":"none"),ae(m,b=er+"--"+t.direction),A&&(S(),y(),M([g,u],Qe,v.id),s(Yr,g,u)))}function x(){n.destroy(),ce(m,b),_?(we(E?[g,u]:m),g=u=null):oe([g,u],Qt)}function S(){i([Ve,B,xe],y),c(u,"click",$(N,">")),c(g,"click",$(N,"<"))}function N(A){o.go(A,!0)}function k(){m=E||Re("div",l.arrows),g=D(!0),u=D(!1),_=!0,Ze(m,[g,u]),!E&&$t(m,v)}function D(A){var O='<button class="'+l.arrow+" "+(A?l.prev:l.next)+'" type="button"><svg xmlns="'+ti+'" viewBox="0 0 '+et+" "+et+'" width="'+et+'" height="'+et+'" focusable="false"><path d="'+(t.arrowPath||ri)+'" />';return Cr(O)}function y(){var A=e.index,O=o.getPrev(),I=o.getNext(),z=O>-1&&A<O?f.last:f.prev,R=I>-1&&A>I?f.first:f.next;g.disabled=O<0,u.disabled=I<0,M(g,te,z),M(u,te,R),s(jr,g,u,O,I)}return{arrows:p,mount:w,destroy:x}}var ii=Bt+"-interval";function ai(e,r,t){var n=G(e),i=n.on,c=n.bind,s=n.emit,l=vt(t.interval,e.go.bind(e,">"),S),f=l.isPaused,a=r.Elements,o=r.Elements,E=o.root,v=o.toggle,m=t.autoplay,g,u,_=m==="pause";function b(){m&&(p(),v&&M(v,Qe,a.track.id),_||w(),x())}function p(){t.pauseOnHover&&c(E,"mouseenter mouseleave",function(k){g=k.type==="mouseenter",V()}),t.pauseOnFocus&&c(E,"focusin focusout",function(k){u=k.type==="focusin",V()}),v&&c(v,"click",function(){_?w():L(!0)}),i([fe,dt,B],l.rewind),i(fe,N)}function w(){f()&&r.Slides.isEnough()&&(l.start(!t.resetProgress),u=g=_=!1,x(),s(Xt))}function L(k){k===void 0&&(k=!0),_=!!k,x(),f()||(l.pause(),s(qt))}function V(){_||(g||u?L(!1):w())}function x(){v&&(ge(v,Se,!_),M(v,te,t.i18n[_?"play":"pause"]))}function S(k){var D=a.bar;D&&Q(D,"width",k*100+"%"),s(Kr,k)}function N(k){var D=r.Slides.getAt(k);l.set(D&&+re(D.slide,ii)||t.interval)}return{mount:b,destroy:l.cancel,play:w,pause:L,isPaused:f}}function oi(e,r,t){var n=G(e),i=n.on;function c(){t.cover&&(i(Kt,$(l,!0)),i([de,K,B],$(s,!0)))}function s(f){r.Slides.forEach(function(a){var o=Je(a.container||a.slide,"img");o&&o.src&&l(f,o,a)})}function l(f,a,o){o.style("background",f?'center/cover no-repeat url("'+a.src+'")':"",!0),ct(a,f?"none":"")}return{mount:c,destroy:$(s,!1)}}var si=10,ci=600,ui=.6,li=1.5,fi=800;function di(e,r,t){var n=G(e),i=n.on,c=n.emit,s=e.state.set,l=r.Move,f=l.getPosition,a=l.getLimit,o=l.exceededLimit,E=l.translate,v,m,g=1;function u(){i(fe,w),i([K,B],L)}function _(x,S,N,k,D){var y=f();if(w(),N){var A=r.Layout.sliderSize(),O=kt(x)*A*ut(Z(x)/A)||0;x=l.toPosition(r.Controller.toDest(x%A))+O}var I=Pr(y,x,1);g=1,S=I?0:S||je(Z(x-y)/li,fi),m=k,v=vt(S,b,$(p,y,x,D),1),s(Ke),c(dt),v.start()}function b(){s(Oe),m&&m(),c(xe)}function p(x,S,N,k){var D=f(),y=x+(S-x)*V(k),A=(y-D)*g;E(D+A),e.is(De)&&!N&&o()&&(g*=ui,Z(A)<si&&_(a(o(!0)),ci,!1,m,!0))}function w(){v&&v.cancel()}function L(){v&&!v.isPaused()&&(w(),b())}function V(x){var S=t.easingFunc;return S?S(x):1-Math.pow(1-x,4)}return{mount:u,destroy:w,scroll:_,cancel:L}}var Le={passive:!1,capture:!0};function vi(e,r,t){var n=G(e),i=n.on,c=n.emit,s=n.bind,l=n.unbind,f=e.state,a=r.Move,o=r.Scroll,E=r.Controller,v=r.Elements.track,m=r.Media.reduce,g=r.Direction,u=g.resolve,_=g.orient,b=a.getPosition,p=a.exceededLimit,w,L,V,x,S,N=!1,k,D,y;function A(){s(v,xt,Nt,Le),s(v,It,Nt,Le),s(v,un,I,Le),s(v,"click",H,{capture:!0}),s(v,"dragstart",se),i([de,K],O)}function O(){var T=t.drag;ar(!T),x=T==="free"}function I(T){if(k=!1,!D){var U=At(T);vn(T.target)&&(U||!T.button)&&(E.isBusy()?se(T,!0):(y=U?v:window,S=f.is([Pe,Ke]),V=null,s(y,xt,z,Le),s(y,It,R,Le),a.cancel(),o.cancel(),Y(T)))}}function z(T){if(f.is(tt)||(f.set(tt),c(Gr)),T.cancelable)if(S){a.translate(w+dn(W(T)));var U=F(T)>wr,Ee=N!==(N=p());(U||Ee)&&Y(T),k=!0,c(Wr),se(T)}else C(T)&&(S=h(T),se(T))}function R(T){f.is(tt)&&(f.set(Oe),c(Hr)),S&&(X(T),se(T)),l(y,xt,z),l(y,It,R),S=!1}function H(T){!D&&k&&se(T,!0)}function Y(T){V=L,L=T,w=b()}function X(T){var U=d(T),Ee=P(U),Fe=t.rewind&&t.rewindByDrag;m(!1),x?E.scroll(Ee,0,t.snap):e.is(yt)?E.go(_(kt(U))<0?Fe?"<":"-":Fe?">":"+"):e.is(De)&&N&&Fe?E.go(p(!0)?">":"<"):E.go(E.toDest(Ee),!0),m(!0)}function h(T){var U=t.dragMinThreshold,Ee=We(U),Fe=Ee&&U.mouse||0,gn=(Ee?U.touch:+U)||10;return Z(W(T))>(At(T)?gn:Fe)}function C(T){return Z(W(T))>Z(W(T,!0))}function d(T){if(e.is(ze)||!N){var U=F(T);if(U&&U<wr)return W(T)/U}return 0}function P(T){return b()+kt(T)*Ce(Z(T)*(t.flickPower||600),x?1/0:r.Layout.listSize()*(t.flickMaxPages||1))}function W(T,U){return ir(T,U)-ir(j(T),U)}function F(T){return Rt(T)-Rt(j(T))}function j(T){return L===T&&V||L}function ir(T,U){return(At(T)?T.changedTouches[0]:T)["page"+u(U?"Y":"X")]}function dn(T){return T/(N&&e.is(De)?Yn:1)}function vn(T){var U=t.noDrag;return!He(T,"."+an+", ."+Et)&&(!U||!He(T,U))}function At(T){return typeof TouchEvent!="undefined"&&T instanceof TouchEvent}function _n(){return S}function ar(T){D=T}return{mount:A,disable:ar,isDragging:_n}}var _i={Spacebar:" ",Right:pt,Left:gt,Up:Zr,Down:Jr};function tr(e){return e=he(e)?e:e.key,_i[e]||e}var Tr="keydown";function gi(e,r,t){var n=G(e),i=n.on,c=n.bind,s=n.unbind,l=e.root,f=r.Direction.resolve,a,o;function E(){v(),i(K,m),i(K,v),i(fe,u)}function v(){var b=t.keyboard;b&&(a=b==="global"?window:l,c(a,Tr,_))}function m(){s(a,Tr)}function g(b){o=b}function u(){var b=o;o=!0,Lt(function(){o=b})}function _(b){if(!o){var p=tr(b);p===f(gt)?e.go("<"):p===f(pt)&&e.go(">")}}return{mount:E,destroy:m,disable:g}}var Ge=Bt+"-lazy",it=Ge+"-srcset",pi="["+Ge+"], ["+it+"]";function hi(e,r,t){var n=G(e),i=n.on,c=n.off,s=n.bind,l=n.emit,f=t.lazyLoad==="sequential",a=[de,B,Ve,xe],o=[];function E(){t.lazyLoad&&(v(),i(B,v),f||i(a,m))}function v(){le(o),r.Slides.forEach(function(b){Ut(b.slide,pi).forEach(function(p){var w=re(p,Ge),L=re(p,it);if(w!==p.src||L!==p.srcset){var V=t.classes.spinner,x=p.parentElement,S=Je(x,"."+V)||Re("span",V,x);o.push([p,b,S]),p.src||ct(p,"none")}})}),f&&_()}function m(){o=o.filter(function(b){var p=t.perPage*((t.preloadPages||1)+1)-1;return b[1].isWithin(e.index,p)?g(b):!0}),o.length||c(a)}function g(b){var p=b[0];ae(b[1].slide,Dt),s(p,"load error",$(u,b)),M(p,"src",re(p,Ge)),M(p,"srcset",re(p,it)),oe(p,Ge),oe(p,it)}function u(b,p){var w=b[0],L=b[1];ce(L.slide,Dt),p.type!=="error"&&(we(b[2]),ct(w,""),l(Kt,w,L),l(Te)),f&&_()}function _(){o.length&&g(o.shift())}return{mount:E,destroy:$(le,o)}}function mi(e,r,t){var n=G(e),i=n.on,c=n.emit,s=n.bind,l=r.Slides,f=r.Elements,a=r.Controller,o=a.hasFocus,E=a.getIndex,v=a.go,m=r.Direction.resolve,g=[],u,_;function b(){p(),i([K,B],b),t.pagination&&l.isEnough()&&(i([fe,dt,xe],N),w(),N(),c(Xr,{list:u,items:g},S(e.index)))}function p(){u&&(we(f.pagination?me(u.children):u),ce(u,_),le(g),u=null),n.destroy()}function w(){var k=e.length,D=t.classes,y=t.i18n,A=t.perPage,O=o()?k:Xe(k/A);u=f.pagination||Re("ul",D.pagination,f.track.parentElement),ae(u,_=bt+"--"+x()),M(u,ue,"tablist"),M(u,te,y.select),M(u,Jt,x()===ht?"vertical":"");for(var I=0;I<O;I++){var z=Re("li",null,u),R=Re("button",{class:D.page,type:"button"},z),H=l.getIn(I).map(function(X){return X.slide.id}),Y=!o()&&A>1?y.pageX:y.slideX;s(R,"click",$(L,I)),t.paginationKeyboard&&s(R,"keydown",$(V,I)),M(z,ue,"presentation"),M(R,ue,"tab"),M(R,Qe,H.join(" ")),M(R,te,Ot(Y,I+1)),M(R,ke,-1),g.push({li:z,button:R,page:I})}}function L(k){v(">"+k,!0)}function V(k,D){var y=g.length,A=tr(D),O=x(),I=-1;A===m(pt,!1,O)?I=++k%y:A===m(gt,!1,O)?I=(--k+y)%y:A==="Home"?I=0:A==="End"&&(I=y-1);var z=g[I];z&&(Or(z.button),v(">"+I),se(D,!0))}function x(){return t.paginationDirection||t.direction}function S(k){return g[a.toPage(k)]}function N(){var k=S(E(!0)),D=S(E());if(k){var y=k.button;ce(y,Se),oe(y,mr),M(y,ke,-1)}if(D){var A=D.button;ae(A,Se),M(A,mr,!0),M(A,ke,"")}c(qr,{list:u,items:g},k,D)}return{items:g,mount:b,destroy:p,getAt:S,update:N}}var Ei=[" ","Enter"];function bi(e,r,t){var n=t.isNavigation,i=t.slideFocus,c=[];function s(){e.options={slideFocus:ft(i)?n:i}}function l(){e.splides.forEach(function(u){u.isParent||(o(e,u.splide),o(u.splide,e))}),n&&E()}function f(){c.forEach(function(u){u.destroy()}),le(c)}function a(){f(),l()}function o(u,_){var b=G(u);b.on(fe,function(p,w,L){_.go(_.is(ze)?L:p)}),c.push(b)}function E(){var u=G(e),_=u.on;_(Wt,m),_(Br,g),_([de,K],v),c.push(u),u.emit(jt,e.splides)}function v(){M(r.Elements.list,Jt,t.direction===ht?"vertical":"")}function m(u){e.go(u.index)}function g(u,_){Ft(Ei,tr(_))&&(m(u),se(_))}return{setup:s,mount:l,destroy:f,remount:a}}function yi(e,r,t){var n=G(e),i=n.bind,c=0;function s(){t.wheel&&i(r.Elements.track,"wheel",l,Le)}function l(a){if(a.cancelable){var o=a.deltaY,E=o<0,v=Rt(a),m=t.wheelMinThreshold||0,g=t.wheelSleep||0;Z(o)>m&&v-c>g&&(e.go(E?"<":">"),c=v),f(E)&&se(a)}}function f(a){return!t.releaseWheel||e.state.is(Pe)||r.Controller.getAdjacent(a)!==-1}return{mount:s}}var Ai=90;function wi(e,r,t){var n=G(e),i=n.on,c=r.Elements.track,s=t.live&&!t.isNavigation,l=Re("span",Un),f=vt(Ai,$(o,!1));function a(){s&&(v(!r.Autoplay.isPaused()),M(c,yr,!0),l.textContent="\u2026",i(Xt,$(v,!0)),i(qt,$(v,!1)),i([Ve,xe],$(o,!0)))}function o(m){M(c,br,m),m?(Ze(c,l),f.start()):we(l)}function E(){oe(c,[Er,yr,br]),we(l)}function v(m){s&&M(c,Er,m?"off":"polite")}return{mount:a,disable:v,destroy:E}}var Ti=Object.freeze({__proto__:null,Media:On,Direction:Cn,Elements:jn,Slides:qn,Layout:Kn,Clones:Jn,Move:Qn,Controller:ei,Arrows:ni,Autoplay:ai,Cover:oi,Scroll:di,Drag:vi,Keyboard:gi,LazyLoad:hi,Pagination:mi,Sync:bi,Wheel:yi,Live:wi}),Si={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},xi={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Wn,i18n:Si,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Ii(e,r,t){var n=G(e),i=n.on;function c(){i([de,B],function(){Lt(function(){r.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})}function s(l,f){var a=r.Elements.track;Q(a,"height",ve(ee(a).height)),Lt(function(){f(),Q(a,"height","")})}return{mount:c,start:s,cancel:Nt}}function Li(e,r,t){var n=G(e),i=n.bind,c=r.Move,s=r.Controller,l=r.Scroll,f=r.Elements.list,a=$(Q,f,"transition"),o;function E(){i(f,"transitionend",function(u){u.target===f&&o&&(m(),o())})}function v(u,_){var b=c.toPosition(u,!0),p=c.getPosition(),w=g(u);Z(b-p)>=1&&w>=1?t.useScroll?l.scroll(b,w,!1,_):(a("transform "+w+"ms "+t.easing),c.translate(b,!0),o=_):(c.jump(u),_())}function m(){a(""),l.cancel()}function g(u){var _=t.rewindSpeed;if(e.is(De)&&_){var b=s.getIndex(!0),p=s.getEnd();if(b===0&&u>=p||b>=p&&u===0)return _}return t.speed}return{mount:E,start:v,cancel:m}}var Ni=function(){function e(t,n){this.event=G(),this.Components={},this.state=Rn(Ne),this.splides=[],this._o={},this._E={};var i=he(t)?Dr(document,t):t;Be(i,i+" is invalid."),this.root=i,n=pe({label:re(i,te)||"",labelledby:re(i,Zt)||""},xi,e.defaults,n||{});try{pe(n,JSON.parse(re(i,Bt)))}catch{Be(!1,"Invalid JSON")}this._o=Object.create(pe({},n))}var r=e.prototype;return r.mount=function(n,i){var c=this,s=this.state,l=this.Components;Be(s.is([Ne,ot]),"Already mounted!"),s.set(Ne),this._C=l,this._T=i||this._T||(this.is(yt)?Ii:Li),this._E=n||this._E;var f=Ye({},Ti,this._E,{Transition:this._T});return Ae(f,function(a,o){var E=a(c,l,c._o);l[o]=E,E.setup&&E.setup()}),Ae(l,function(a){a.mount&&a.mount()}),this.emit(de),ae(this.root,Bn),s.set(Oe),this.emit(pr),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Oe)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,i){return this.event.on(n,i),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var i;return(i=this.event).emit.apply(i,[n].concat(me(arguments,1))),this},r.add=function(n,i){return this._C.Slides.add(n,i),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(B),this},r.destroy=function(n){n===void 0&&(n=!0);var i=this.event,c=this.state;return c.is(Ne)?G(this).on(pr,this.destroy.bind(this,n)):(Ae(this._C,function(s){s.destroy&&s.destroy(n)},!0),i.emit(Yt),i.destroy(),n&&le(this.splides),c.set(ot)),this},xn(e,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),rr=Ni;rr.defaults={};rr.STATES=Ln;const Sr=[zr,Yr,jr,qt,Xt,Kr,Wt,Yt,Gr,Hr,Wr,Ur,Fr,Kt,de,fe,Ve,jt,Xr,qr,B,Te,Ht,dt,xe,K,$r],ln="splide";function xr(e){return e!==null&&typeof e=="object"}function Ri(e,r){if(e){const t=Object.keys(e);for(let n=0;n<t.length;n++){const i=t[n];if(i!=="__proto__"&&r(e[i],i)===!1)break}}return e}function fn(e,r){const t=e;return Ri(r,(n,i)=>{Array.isArray(n)?t[i]=n.slice():xr(n)?t[i]=fn(xr(t[i])?t[i]:{},n):t[i]=n}),t}var nr=(e,r)=>{const t=e.__vccOpts||e;for(const[n,i]of r)t[n]=i;return t};const ki=Mt({name:"SplideTrack",setup(){bn(()=>{var e;const r=yn(ln);(e=r==null?void 0:r.value)==null||e.refresh()})}}),Oi={class:"splide__track"},Ci={class:"splide__list"};function Di(e,r,t,n,i,c){return ye(),Ue("div",Oi,[q("ul",Ci,[at(e.$slots,"default")])])}var Pt=nr(ki,[["render",Di]]);const Pi=Mt({name:"Splide",emits:Sr.map(e=>`splide:${e}`),components:{SplideTrack:Pt},props:{tag:{default:"div",type:String},options:{default:{},type:Object},extensions:Object,transition:Function,hasTrack:{default:!0,type:Boolean}},setup(e,r){const t=or(),n=or();pn(()=>{n.value&&(t.value=new rr(n.value,e.options),f(t.value),t.value.mount(e.extensions,e.transition))}),hn(()=>{var a;(a=t.value)==null||a.destroy()}),mn(()=>fn({},e.options),a=>{t.value&&(t.value.options=a)},{deep:!0}),En(ln,t);const i=sr(()=>{var a;return((a=t.value)==null?void 0:a.index)||0}),c=sr(()=>{var a;return((a=t.value)==null?void 0:a.length)||0});function s(a){var o;(o=t.value)==null||o.go(a)}function l(a){var o;(o=t.value)==null||o.sync(a)}function f(a){Sr.forEach(o=>{a.on(o,(...E)=>{r.emit(`splide:${o}`,a,...E)})})}return{splide:t,root:n,index:i,length:c,go:s,sync:l}}});function Mi(e,r,t,n,i,c){const s=An("SplideTrack");return ye(),cr(wn(e.tag),{class:"splide",ref:"root"},{default:_e(()=>[e.hasTrack?(ye(),cr(s,{key:0},{default:_e(()=>[at(e.$slots,"default")]),_:3})):at(e.$slots,"default",{key:1})]),_:3},512)}var Ir=nr(Pi,[["render",Mi]]);const Vi=Mt({name:"SplideSlide"}),zi={class:"splide__slide"};function Fi(e,r,t,n,i,c){return ye(),Ue("li",zi,[at(e.$slots,"default")])}var Lr=nr(Vi,[["render",Fi]]);const $i={class:"wrapper"},Ui=q("h2",{id:"scenery"},"Scenes",-1),Bi=q("div",{class:"splide__progress"},[q("div",{class:"splide__progress__bar"})],-1),Gi={style:{position:"relative"}},Wi=["href"],Hi=["src","alt"],Yi=q("h2",{id:"characters"},"Characters",-1),ji=q("div",{class:"splide__progress"},[q("div",{class:"splide__progress__bar"})],-1),Xi={style:{position:"relative"}},qi=["href"],Ki=["src","alt"],Zi={__name:"Artwork",setup(e){const r={rewind:!0,gap:"1rem",autoplay:!0,height:"15rem",autoWidth:!0,authHeight:!0},t={rewind:!0,gap:"1rem",autoplay:!0,height:"20rem",autoWidth:!0,authHeight:!0},n=[{src:"https://aceade.files.wordpress.com/2020/11/waitingforthetrain-1.jpg",alt:"A pencil sketch of some shady characters ducking behind a wall with a train in the background"},{src:"https://aceade.files.wordpress.com/2021/02/paisti_v4_quartersize.png",alt:"Four children leaning against a wall in a yard"},{src:"https://aceade.files.wordpress.com/2021/04/dropoff_v1.png?w=1024",alt:""},{src:"https://aceade.files.wordpress.com/2022/01/orc_and_banshee_v2.jpg",alt:""},{src:"https://aceade.files.wordpress.com/2022/04/snakerecon.jpg",alt:"A pair of humanoid snakes lurking in the grass. One holds a telescope to their left eye"},{src:"https://aceade.files.wordpress.com/2022/01/brandubhgame_v2.jpg",alt:"A group of Fomorian/orcish children playing a board game"},{src:"https://aceade.files.wordpress.com/2022/01/youdontneedthese_v2.jpg",alt:"A teenage girl pulling the sunglass off a boy's face to reveal blood-red eyes. A cigarette has fallen from his open mouth"}],i=[{src:"https://aceade.files.wordpress.com/2022/02/maebh.jpg",alt:"A portrait of an orcish girl in a sailor's dress"},{src:"https://aceade.files.wordpress.com/2022/02/seamus.jpg",alt:"A portrait of an orcish teenager with albinism"},{src:"https://aceade.files.wordpress.com/2021/02/diarmuid_smoking_v2_quartersize.png",alt:"Profile portrait of a teenage boy with yellow sunglasses, staring off into the distance. He has a cigarette in his right hand and is exhaling smoke"},{src:"https://aceade.files.wordpress.com/2021/03/siobhan_portrait_v2_quartersize.png",alt:"Portrait of a teenage girl in a grey blouse and red shawl. The left side of her head is stubbled"},{src:"https://aceade.files.wordpress.com/2020/09/aidan_and_grainne_v1.png",alt:""}];return(c,s)=>(ye(),Ue(wt,null,[be(Tn),q("main",null,[q("div",$i,[Ui,be(Ie(Ir),{id:"splide_scenes","aria-labelledby":"scenery",options:r,"has-track":!1},{default:_e(()=>[Bi,q("div",Gi,[be(Ie(Pt),null,{default:_e(()=>[(ye(),Ue(wt,null,ur(n,l=>be(Ie(Lr),{key:l.alt},{default:_e(()=>[q("a",{href:l.src,target:"_newtab"},[q("img",{src:l.src,alt:l.alt},null,8,Hi)],8,Wi)]),_:2},1024)),64))]),_:1})])]),_:1}),Yi,be(Ie(Ir),{id:"splide_characters","aria-labelledby":"characters",options:t,"has-track":!1},{default:_e(()=>[ji,q("div",Xi,[be(Ie(Pt),null,{default:_e(()=>[(ye(),Ue(wt,null,ur(i,l=>be(Ie(Lr),{key:l.alt},{default:_e(()=>[q("a",{href:l.src,target:"_newtab"},[q("img",{src:l.src,alt:l.alt},null,8,Ki)],8,qi)]),_:2},1024)),64))]),_:1})])]),_:1})])])],64))}};Sn(Zi).mount("#app");

import{_ as m,S as h,g as x,h as v,r as a,o as t,j as l,w as o,d as i,c as r,k as d,F as n,i as g,t as p}from"./Footer.f5229b5e.js";const w={props:{slides:Array,options:Object,objectType:{type:String,validator(_){return["pdf","video"].includes(_)}},hasTrack:{type:Boolean,default:!1}},components:{Splide:h,SplideTrack:x,SplideSlide:v}},y=i("div",{class:"splide__progress"},[i("div",{class:"splide__progress__bar"})],-1),k={style:{position:"relative"}},S=["data"],z={id:"storyTitle"},j={class:"intro"},T={class:"intro"},B=i("hr",null,null,-1),C=["href"],P={id:"storyTitle"},X=["src","width","height"];function D(_,F,s,N,V,A){const c=a("SplideSlide"),f=a("splide-track"),u=a("splide");return t(),l(u,{id:"splide_stories",options:s.options,"has-track":!1},{default:o(()=>[y,i("div",k,[s.objectType==="pdf"?(t(),l(f,{key:0},{default:o(()=>[(t(!0),r(n,null,d(s.slides,e=>(t(),l(c,{key:e.title},{default:o(()=>[i("object",{"aria-labelledby":"storyTitle",class:"story_embed",type:"application/pdf",width:"100%",data:e.src},[i("label",z,p(e.title),1),i("div",j,[(t(!0),r(n,null,d(e.intro,b=>(t(),r("p",T,p(b),1))),256))]),B,i("a",{href:e.src},"Download full version",8,C)],8,S)]),_:2},1024))),128))]),_:1})):g("",!0),s.objectType==="video"?(t(),l(f,{key:1},{default:o(()=>[(t(!0),r(n,null,d(s.slides,e=>(t(),l(c,{key:e.title},{default:o(()=>[i("label",P,p(e.title),1),i("iframe",{src:e.src,width:e.width,height:e.height,frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"},null,8,X)]),_:2},1024))),128))]),_:1})):g("",!0)])]),_:1},8,["options"])}var L=m(w,[["render",D]]);export{L as P};
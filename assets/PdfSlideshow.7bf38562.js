import{S as m,a as x,b as h}from"./vue-splide.esm.5daadbd0.js";import{_ as y,r as a,o as i,h as l,w as o,d as t,a as r,i as d,e as p,g,t as n}from"./Footer.621e0363.js";const v={props:{slides:Array,options:Object,objectType:{type:String,validator(_){return["pdf","video"].includes(_)}},hasTrack:{type:Boolean,default:!1}},components:{Splide:m,SplideTrack:x,SplideSlide:h}},w=t("div",{class:"splide__progress"},[t("div",{class:"splide__progress__bar"})],-1),k={style:{position:"relative"}},S=["data"],z={id:"storyTitle"},j={class:"intro"},T=t("hr",null,null,-1),B=["href"],C={id:"storyTitle"},P=["src","width","height"];function X(_,D,s,N,V,A){const c=a("SplideSlide"),f=a("splide-track"),u=a("splide");return i(),l(u,{id:"splide_stories",options:s.options,"has-track":!1},{default:o(()=>[w,t("div",k,[s.objectType==="pdf"?(i(),l(f,{key:0},{default:o(()=>[(i(!0),r(p,null,d(s.slides,e=>(i(),l(c,{key:e.title},{default:o(()=>[t("object",{"aria-labelledby":"storyTitle",class:"story_embed",type:"application/pdf",width:"100%",data:e.src},[t("label",z,n(e.title),1),(i(!0),r(p,null,d(e.intro,b=>(i(),r("p",j,n(b),1))),256)),T,t("a",{href:e.src},"Download full version",8,B)],8,S)]),_:2},1024))),128))]),_:1})):g("",!0),s.objectType==="video"?(i(),l(f,{key:1},{default:o(()=>[(i(!0),r(p,null,d(s.slides,e=>(i(),l(c,{key:e.title},{default:o(()=>[t("label",C,n(e.title),1),t("iframe",{src:e.src,width:e.width,height:e.height,frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"},null,8,P)]),_:2},1024))),128))]),_:1})):g("",!0)])]),_:1},8,["options"])}var L=y(v,[["render",X]]);export{L as P};

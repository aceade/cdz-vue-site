import{S as m,a as k,b as g}from"./vue-splide.esm-Cw_zTfaY.js";import{_ as S,r as f,f as l,o as t,w as a,a as o,g as _,c as r,F as n,j as d,t as i}from"./Footer-BjKh6QV9.js";const w={props:{slides:Array,options:Object,objectType:{type:String,validator(h){return["pdf","video","story"].includes(h)}},hasTrack:{type:Boolean,default:!1}},components:{Splide:g,SplideTrack:k,SplideSlide:m}},T={style:{position:"relative"}},v=["data"],j={id:"storyTitle"},B={class:"intro"},x={class:"intro"},C=["href"],D={id:"storyTitle"},F=["src","width","height"],N={id:"storyTitle"},P={class:"blurb"};function V(h,c,s,A,E,L){const p=f("SplideSlide"),u=f("splide-track"),b=f("splide");return t(),l(b,{id:"splide_stories",options:s.options,"has-track":!1},{default:a(()=>[c[1]||(c[1]=o("div",{class:"splide__progress"},[o("div",{class:"splide__progress__bar"})],-1)),o("div",T,[s.objectType==="pdf"?(t(),l(u,{key:0},{default:a(()=>[(t(!0),r(n,null,d(s.slides,e=>(t(),l(p,{key:e.title},{default:a(()=>[o("object",{"aria-labelledby":"storyTitle",class:"story_embed",type:"application/pdf",width:"100%",data:e.src},[o("label",j,i(e.title),1),o("div",B,[(t(!0),r(n,null,d(e.intro,y=>(t(),r("p",x,i(y),1))),256))]),c[0]||(c[0]=o("hr",null,null,-1)),e.src.length>0?(t(),r("a",{key:0,href:e.src},"Download full version",8,C)):_("",!0)],8,v)]),_:2},1024))),128))]),_:1})):_("",!0),s.objectType==="video"||s.objectType==="page"?(t(),l(u,{key:1},{default:a(()=>[(t(!0),r(n,null,d(s.slides,e=>(t(),l(p,{key:e.title},{default:a(()=>[o("label",D,i(e.title),1),o("iframe",{src:e.src,width:e.width,height:e.height,frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"},null,8,F)]),_:2},1024))),128))]),_:1})):_("",!0),s.objectType==="story"?(t(),l(u,{key:2},{default:a(()=>[(t(!0),r(n,null,d(s.slides,e=>(t(),l(p,{key:e.title},{default:a(()=>[o("label",N,i(e.title),1),(t(!0),r(n,null,d(e.paragraphs,y=>(t(),r("p",null,i(y),1))),256)),o("p",P,i(e.author),1)]),_:2},1024))),128))]),_:1})):_("",!0)])]),_:1},8,["options"])}const z=S(w,[["render",V]]);export{z as P};

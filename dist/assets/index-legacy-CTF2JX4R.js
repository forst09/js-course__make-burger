System.register([],(function(e,t){"use strict";return{execute:function(){var e=document.createElement("style");e.textContent='html,body,body div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,figure,footer,header,menu,nav,section,time,mark,audio,video,details,summary{margin:0;padding:0;border:0;background:transparent}article,aside,figure,footer,header,nav,section,details,summary{display:block}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}*{padding:0;margin:0;outline:none;box-sizing:border-box}object,embed{max-width:100%}img{max-width:none}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;color:inherit}a{text-decoration:none}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted #000;cursor:help}table{border-collapse:collapse;border-spacing:0}th{font-weight:700;vertical-align:bottom}td{font-weight:400;vertical-align:top}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}pre{white-space:pre;white-space:pre-wrap;white-space:pre-line;word-wrap:break-word}input[type=radio]{vertical-align:text-bottom}input[type=checkbox]{vertical-align:bottom}.ie7 input[type=checkbox]{vertical-align:baseline}.ie6 input{vertical-align:text-bottom}table{font-size:inherit;font:100%}small{font-size:85%}strong{font-weight:700}td,td img{vertical-align:top}sub,sup{font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}pre,code,kbd,samp{font-family:monospace,sans-serif}.clickable,label,input[type=button],input[type=submit],input[type=file],button{cursor:pointer}button,input,select,textarea{margin:0}button,input[type=button]{overflow:visible}.ie7 img{-ms-interpolation-mode:bicubic}.clearfix:before,.clearfix:after{content:" ";display:block;height:0;overflow:hidden}.clearfix:after{clear:both}.clearfix{zoom:1}a,button,input,textarea{-webkit-appearance:none}button{outline:none;border:none}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}@font-face{font-family:OpenSans;src:url('+new URL("../fonts/OpenSans.woff2",t.meta.url).href+') format("woff2"),url('+new URL("../fonts/OpenSans.woff",t.meta.url).href+') format("woff"),url('+new URL("../fonts/OpenSans.ttf",t.meta.url).href+') format("truetype");font-style:normal;font-display:swap}:root{--primary-titan-white: #F5F5FF;--primary-primary: #5243C2;--primary-danger: #FF4D4F;--red-red-200: #FFEDED;--primary-black: #1F2939;--primary-white: #FFFFFF;--primary-black-squeeze: #F0F7FA;--br-xs: 8px;--br-s: 16px;--br-xl: 99px;--shadow: 0px 6px 80px 0px rgba(0, 0, 0, .04), 0px 2.507px 33.422px 0px rgba(0, 0, 0, .03), 0px 1.34px 17.869px 0px rgba(0, 0, 0, .02), 0px .751px 10.017px 0px rgba(0, 0, 0, .02), 0px .399px 5.32px 0px rgba(0, 0, 0, .02), 0px .166px 2.214px 0px rgba(0, 0, 0, .01)}html,body{position:relative;font-family:OpenSans,sans-serif;font-style:normal;font-weight:400;font-size:16px;line-height:normal;color:var(--text-primary);height:100%}body{touch-action:pan-x pan-y;background-color:var(--bg-primary);overflow-x:hidden}.img{display:flex;align-items:center;justify-content:center}.img__img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.visually-hidden{border:0;clip:rect(0 0 0 0);height:auto;margin:0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.scroll-lock{overflow-y:hidden}.btn-text-icon{display:inline-flex;padding:6px 12px;justify-content:center;align-items:center;gap:4px;background-color:var(--red-red-200);color:var(--primary-danger);border-radius:var(--br-xl);font-size:16px;font-weight:600;line-height:1.25em;transition:background-color .3s ease,color .3s ease}.btn-text-icon:before{content:"";width:16px;aspect-ratio:1;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-position:center center;mask-position:center center;background-color:var(--primary-danger);transition:background-color .3s ease}.btn-text-icon--phone:before{-webkit-mask-image:url('+new URL("../icons/phone.svg",t.meta.url).href+");mask-image:url("+new URL("../icons/phone.svg",t.meta.url).href+')}.btn-text-icon:disabled{pointer-events:none;opacity:.5}.link-text{font-size:16px;font-weight:600;line-height:1.25em;color:var(--primary-black);transition:color .3s ease}.title-h6{font-family:OpenSans,sans-serif;font-size:16px;font-weight:600;line-height:normal}.header{padding:32px 0}.header__container,.header__left,.header__right{display:flex;align-items:center;justify-content:space-between}.header__left{gap:80px}.header__right{gap:60px}.header__menu{display:none}.container{width:100%;margin:0 auto}.container--xl{max-width:1920px;padding:0 60px}.container--m{max-width:1664px;padding:0 60px}.logo{padding:20px;width:80px;aspect-ratio:1;background-color:var(--primary-titan-white);border-radius:50%}.tabs-btns{display:flex;align-items:center;gap:59px}.tabs-btns__btn{position:relative;padding:14px 0;font-family:OpenSans,sans-serif;font-size:16px;font-weight:400;line-height:1.25em;background-color:transparent;transition:font-weight .3s ease}.tabs-btns__btn:after{content:"";position:absolute;left:0;bottom:5px;width:100%;height:2px;background-color:var(--primary-primary);opacity:0;transition:opacity .3s ease,bottom .3s ease}.tabs-btns__btn.tabs-btns__btn--active{font-weight:600}.tabs-btns__btn.tabs-btns__btn--active:after{bottom:0;opacity:1}.user{position:relative}.user__image{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--primary-titan-white);width:58px;aspect-ratio:1;border-radius:var(--br-xl)}.user__country{margin-left:-10px;margin-top:15px;width:10px;height:10px;border:1px solid var(--primary-titan-white);border-radius:100%}.user__icon{width:24px;aspect-ratio:1}.user__name{display:none}.user__dropdown{position:absolute;right:0;top:95%;padding-top:18px;opacity:0;pointer-events:none;transition:opacity .3s ease,top .3s ease}.user__drowdown-wrapper{position:relative;display:flex;flex-direction:column;gap:32px;padding:16px;background-color:var(--primary-white);box-shadow:var(--shadow);width:209px;border-radius:var(--br-s)}.user__drowdown-wrapper:before{content:"";position:absolute;right:16px;top:-10px;width:20px;height:10px;background-image:url('+new URL("../icons/triangle.svg",t.meta.url).href+');background-position:center center;background-repeat:no-repeat;background-size:cover}.user__navigation{position:relative}.user__navigation:before{content:"";position:absolute;left:0;top:-16px;width:100%;height:1px;background-color:var(--primary-black-squeeze)}.user__navigation-item{padding:8px;position:relative;border-radius:var(--br-xs)}.user__navigation-item--active{background-color:var(--primary-titan-white)}.user__navigation-item--active .user__navigation-link{font-weight:600}.user__navigation-item--red{color:var(--primary-danger)}.user__navigation-link{font-size:14px;line-height:1.42em;transition:font-weight .3s ease}.user__navigation-link:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.main{--main-height: calc(100vh - var(--header-height));display:flex;min-height:calc(100vh - var(--header-height))}.main__img{width:54%}.main__img-img{-o-object-position:center 40%;object-position:center 40%}.main__form-wrapper{position:relative;width:46%;height:100%}.main__form{margin-top:40px}.main__form-wrap-form{padding:103px 93px}@media (max-width: 1365px){.main{position:relative;align-items:center;justify-content:center;padding:40px 0}.main__img{position:absolute;left:0;top:0;width:100%;height:100%}.main__form-wrapper{background:var(--bg-primary);overflow:hidden;width:100%;max-width:600px}}@media (max-width: 1024px){.container{padding:0 16px}.main__form-wrap-form{padding:53px 43px}.main__form{margin-top:24px}}@media (max-width: 767px){body{font-size:16px}.title{font-size:27px}.main{padding:40px 16px}.main__form-wrap-form{padding:24px 12px}}@media (hover: hover){.btn-text-icon:hover{background-color:var(--primary-danger);color:var(--primary-titan-white)}.btn-text-icon:hover:before{background-color:var(--primary-titan-white)}.link-text:hover{color:var(--primary-primary)}.tabs-btns__btn:hover{font-weight:600}.user:hover .user__dropdown{opacity:1;top:100%;pointer-events:all}.user__navigation-link:hover{font-weight:600}}\n',document.head.appendChild(e),document.addEventListener("DOMContentLoaded",(()=>{!function(){if(window.innerWidth>1024){const e=document.querySelector(".header");e&&(e.querySelector(".header__left").append(e.querySelector(".header__tabs")),e.querySelector(".header__right").append(e.querySelector(".header__call")),e.querySelector(".header__right").append(e.querySelector(".header__phone")),e.querySelector(".header__right").append(e.querySelector(".header__user")))}}(),function(){const e=document.querySelectorAll("[data-tab]"),t=document.querySelectorAll(".tab-wrap");e.length>0&&t.length>0&&(e.forEach((i=>{i.addEventListener("click",(r=>{r.preventDefault(),e.forEach((e=>{e.classList.remove("tabs-btns__btn--active")}));const a=i.getAttribute("data-tab");[...e].find((e=>e.closest(".header")&&e.getAttribute("data-tab")===a)).classList.add("tabs-btns__btn--active"),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("id")===a&&e.classList.add("active")}))}))})),t[0].classList.add("active"),e[0].classList.add("tabs-btns__btn--active"))}()}))}}}));

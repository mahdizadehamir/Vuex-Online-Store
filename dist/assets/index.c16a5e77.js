var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,i=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&s(e,a,t[a]);return e},n=(e,o)=>t(e,a(o));import{r as c,c as d,a as m,o as u,m as p,b as g,n as h,t as f,d as b,w as k,e as v,v as x,f as w,F as y,g as I,h as D,i as B,j as C,k as S,l as P,p as L,q as j,s as A,_ as E,u as M,x as T,y as O}from"./vendor.48f74d51.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var _=(e,t)=>{for(const[a,o]of t)e[a]=o;return e};const z={class:"lg:max-w-7xl lg:mx-auto md:container md:mx-auto"};var H=_({},[["render",function(e,t){const a=c("router-view");return u(),d("div",z,[m(a,{key:e.$route.path})])}]]);const R={computed:i(i({},p("products",["products"])),p("basket",["selectedItems"])),props:["productTitle","productDes","productPrice","productPic"],emits:["addingToBasket"]},$={class:"bg-white dark:bg-blue-900 shadow-lg hover:shadow-xl rounded-lg"},q=[g("div",{class:"text-right"},[g("button",{class:"text-pink-500 hover:text-pink-600 p-2 rounded-full",style:{background:"rgba(0, 0, 0, 0.3)"}},[g("svg",{class:"w-6 h-6",viewBox:"0 0 24 24"},[g("path",{fill:"currentColor",d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})])])],-1)],F={class:"flex flex-col justify-center items-start px-2 pt-2"},K={class:"p-2 flex-grow items-center"},Z={class:"text-lg font-product dark:text-white"},V={class:"text-gray-500 font-product text-xs dark:text-white mt-3"},N={class:"self-end p-2 text-right dark:text-white"},G={class:"font-bold text-black dark:text-white text-lg font-product"},U={dir:"rtl"},Y=g("span",{class:"text-sm"},"تومان",-1),J={class:"flex justify-center items-center px-2 pb-2"},Q={class:"p-2"};var W=_(R,[["render",function(e,t,a,o,r,l){return u(),d("div",$,[g("div",{class:"bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover",style:h({backgroundImage:`url('${a.productPic}')`})},q,4),g("div",F,[g("div",K,[g("h1",Z,f(a.productTitle),1),g("p",V,f(a.productDes),1)]),g("div",N,[g("div",G,[g("span",U,[b(f(a.productPrice)+" ",1),Y])])])]),g("div",J,[g("div",Q,[g("button",{onClick:t[0]||(t[0]=t=>e.$emit("addingToBasket")),class:"font-product block w-full dark:bg-gray-600 dark:text-white bg-green-400 hover:bg-gray-100 dark:hover:bg-yellow-700 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase"}," اضافه کردن به کارت ")])])])}]]);const X={methods:{enableDarkMode(){null===localStorage.theme||"light"===localStorage.theme?localStorage.theme="dark":localStorage.theme="light"},enableDarkMode2(){document.getElementById("switchTheme").addEventListener("click",(function(){let e=document.querySelector("html").classList;"dark"==localStorage.theme?(e.remove("dark"),localStorage.removeItem("theme")):(e.add("dark"),localStorage.theme="dark")}))}},mounted(){var e=document.getElementById("theme-toggle-dark-icon"),t=document.getElementById("theme-toggle-light-icon");"dark"===localStorage.getItem("color-theme")||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.classList.remove("hidden"):e.classList.remove("hidden"),document.getElementById("theme-toggle").addEventListener("click",(function(){e.classList.toggle("hidden"),t.classList.toggle("hidden"),localStorage.getItem("color-theme")?"light"===localStorage.getItem("color-theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))}))}},ee={dir:"rtl",class:"bg-white dark:bg-gray-900 shadow-lg m-5 rounded-2xl font-titr"},te={class:"container flex flex-wrap justify-between items-center mx-auto"},ae=g("a",{href:"#",class:"flex"},[g("img",{src:"/Vuex-Online-Store/assets/favpng_safe-room-house-amiran-hotel.507fae30.png",alt:"",class:"w-24 text-white p-3"}),g("span",{class:"px-2 font-titr self-center text-lg font-semibold whitespace-nowrap dark:text-white"},"فروشگاه اینترنتی امیران")],-1),oe=g("button",{"data-collapse-toggle":"mobile-menu",type:"button",class:"inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"mobile-menu-2","aria-expanded":"false"},[g("span",{class:"sr-only"},"Open main menu"),g("svg",{class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[g("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})]),g("svg",{class:"hidden w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[g("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),re={class:"hidden w-full md:block md:w-auto",id:"mobile-menu"},le={class:"flex flex-col justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"},se=g("li",null,[g("a",{href:"",class:"inline-block py-4 px-2 text-green-500 border-b-4 border-green-500 text-2xl font-titr ml-5"},[g("svg",{class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})])])],-1),ie=g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-basket",width:"30",height:"30",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),g("polyline",{points:"7 10 12 4 17 10"}),g("path",{d:"M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"}),g("circle",{cx:"12",cy:"15",r:"2"})],-1),ne=v('<li><button id="theme-toggle" type="button" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"><svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg><svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></li>',1);var ce=_({components:{ProductCard:W,NavigationBar:_(X,[["render",function(e,t,a,o,r,l){const s=c("router-link");return u(),d("nav",ee,[g("div",te,[ae,oe,g("div",re,[g("ul",le,[se,g("li",null,[m(s,{class:"inline-block py-4 dark:text-gray-300 text-gray-500 font-titr text-2xl dark:hover:text-green-500 hover:text-green-500 transition duration-300",to:{name:"Basket"}},{default:k((()=>[ie])),_:1})]),ne])])])])}]]),VueperSlides:x.exports.VueperSlides,VueperSlide:x.exports.VueperSlide},computed:i(i({},p("products",["products"])),p("basket",["selectedItems"])),methods:n(i({},w("basket",["addToCounter"])),{notify(){this.$notify({type:"success",text:"آیتم به سبد خرید اضافه شد"})},ToRial(e){e.toString(),e=e.replace(/\,/g,"");for(var t=new RegExp("(-?[0-9]+)([0-9]{3})");t.test(e);)e=e.replace(t,"$1,$2");return e}}),beforeCreate(){"dark"===localStorage.getItem("color-theme")||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},data:()=>({slides:[{id:0,image:'<img src="../../assets/images/slides/98a06d45de142b379f6d236526aa9ada-shop-online-web-slider-design.jpeg" alt="">'},{id:1,image:'<img src="../../assets/images/slides/aa72abca784117244de372b5e9926988-online-shopping-slider-template.jpeg" alt="">'},{id:2,image:'<img src="../../assets/images/slides/eppi125_Slider_965x355-1200x441.jpeg" alt="">'}]})},[["render",function(e,t,a,o,r,l){const s=c("NavigationBar"),i=c("vueper-slide"),n=c("vueper-slides"),p=c("ProductCard"),g=c("notifications");return u(),d(y,null,[m(s),m(n,{autoplay:"",fade:"",arrows:!1,touchable:!0,class:"adv-slider no-shadow md:w-3/4 mx-auto p-3 mb-4","arrows-inside":"","bullets-inside":"","transition-speed":"250"},{default:k((()=>[(u(!0),d(y,null,I(r.slides,(e=>(u(),D(i,{key:e.id,content:e.image},null,8,["content"])))),128))])),_:1}),m(n,{arrows:!1,class:"no-shadow max-w-4xl mx-auto p-4",touchable:!0,"fixed-height":"500px","visible-slides":3,"slide-multiple":"",gap:3,"slide-ratio":1/4,"dragging-distance":200,breakpoints:{800:{visibleSlides:1,slideMultiple:2}}},{default:k((()=>[(u(!0),d(y,null,I(e.products,(t=>(u(),D(i,{key:t.id},{content:k((()=>[m(p,{productTitle:t.title,productDes:t.detail,productPrice:l.ToRial(t.price),productPic:t.picture,onAddingToBasket:a=>{e.addToCounter(t),l.notify()}},null,8,["productTitle","productDes","productPrice","productPic","onAddingToBasket"])])),_:2},1024)))),128))])),_:1}),m(g,{width:250,position:"bottom left ",class:"text-center"})],64)}]]);const de={props:["productPicture","productTitle","productDetail","productPrice","totalPrice","count","input","value","updateCount"],emits:["updateCount","trashButton"],methods:{},computed:{}},me={class:"flex lg:flex-row justify-between items-center rounded-lg shoadow-md bg-white dark:bg-gray-900 mt-3 p-2 w-full shadow-lg"},ue={href:"#",class:"flex flex-col items-center md:flex-row md:w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700",alt:""},pe=["src"],ge={class:"flex flex-col justify-between p-4 leading-normal"},he={class:"mb-2 font-product font-extrabold text-lg tracking-tight text-gray-900 dark:text-white"},fe={class:"mb-3 font-product font-normal text-gray-700 dark:text-gray-400"},be={class:"flex flex-col dark:text-white justify-between items-center p-4"},ke={class:"font-product"},ve={class:"flex flex-row justify-between"},xe=["value"],we=g("label",{for:"count"},":تعداد",-1),ye={class:"font-product mt-3"};const Ie={components:{BasketCard:_(de,[["render",function(e,t,a,o,r,l){const s=c("fa");return u(),d("div",me,[g("a",ue,[g("img",{class:"object-cover w-full h-52 rounded-t-lg md:h-52 md:w-52 md:rounded-md md:rounded-l-lg",src:a.productPicture,alt:""},null,8,pe),g("div",ge,[g("h5",he,f(a.productTitle),1),g("p",fe,f(a.productDetail),1)])]),g("div",be,[g("p",ke,f(a.productPrice)+" :قیمت واحد ",1),g("div",ve,[g("input",{class:"w-16 mr-4 border-2 font-product dark:text-black text-center",type:"number",name:"count",value:a.count,onChange:t[0]||(t[0]=t=>e.$emit("updateCount",t))},null,40,xe),we]),g("p",ye,"جمع مبلغ : "+f(a.totalPrice)+" تومان",1)]),g("a",{href:"#",onClick:t[1]||(t[1]=t=>e.$emit("trashButton"))},[m(s,{class:"dark:text-white",icon:"trash"})])])}]])},data:()=>({}),computed:n(i(i({},p("products",["products"])),p("basket",["basketItems","allPrice"])),{basketAllPrice:function(){let e=0;for(let t=0;t<this.basketItems.length;t++)e+=parseFloat(this.basketItems[t].qun)*parseFloat(this.products[this.basketItems[t].id].price);return e}}),methods:n(i({ToRial(e){e=e.toString().replace(/\,/g,"");for(var t=new RegExp("(-?[0-9]+)([0-9]{3})");t.test(e);)e=e.replace(t,"$1,$2");return e}},w("basket",["deleteItem","changeCount"])),{myBackButtonFunction(){this.$router.go(-1)}}),mounted(){document.addEventListener("backbutton",this.myBackButtonFunction,!1)},beforeUnmount(){document.removeEventListener("backbutton",this.myBackButtonFunction)},beforeCreate(){"dark"===localStorage.getItem("color-theme")||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}},De={class:"flex flex-row justify-between flex-wrap min-h-screen m-auto"},Be={class:"flex flex-col md:w-3/5 md:ml-3 sm:w-full w-full"},Ce={class:"flex flex-row justify-between"},Se=g("p",{class:"mb-1"},"جمع سبد خرید",-1),Pe={class:"font-[1100] text-lg mb-1 ml-3"},Le=g("p",{class:""}," هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد ",-1),je=b("ادامه فرایند خرید ");var Ae=_(Ie,[["render",function(e,t,a,o,r,l){const s=c("BasketCard"),i=c("router-link");return u(),d("div",De,[g("div",Be,[(u(!0),d(y,null,I(e.basketItems,(t=>(u(),d("div",{key:t.id},[m(s,{productDetail:e.products[t.id].detail,productPicture:e.products[t.id].picture,productTitle:e.products[t.id].title,productPrice:l.ToRial(e.products[t.id].price),count:t.qun,totalPrice:l.ToRial(t.qun*e.products[t.id].price),onUpdateCount:a=>e.changeCount([e.basketItems.indexOf(t),a.target.value]),onTrashButton:a=>e.deleteItem(t)},null,8,["productDetail","productPicture","productTitle","productPrice","count","totalPrice","onUpdateCount","onTrashButton"])])))),128))]),g("div",{dir:"rtl",class:B(["flex flex-col justify-start md:mt-3 md:mr-3 sm:mt-2 rounded-lg shadow-md dark:bg-gray-900 dark:text-white bg-white font-product max-h-72 p-2 md:w-1/3 sm:w-4/5 w-full",[0===e.basketItems.length?"hidden":"display"]])},[g("div",Ce,[Se,g("span",Pe,f(l.ToRial(l.basketAllPrice)+" تومان"),1)]),Le,m(i,{to:"/Checkout",class:"rounded-lg bg-red-500 mt-4 p-4 text-white text-center md:w-4/5 sm:w-3/5 sm:self-center"},{default:k((()=>[je])),_:1})],2)])}]]);const Ee={data:()=>({myProvince:null}),computed:i(i(i({},p("provinces",["provinces"])),p({provinciData:e=>e.provinces.provinceSelect})),C("provinces",["showProvinceCity"])),methods:{updateSelect(e){this.$store.commit("provinces/updateSelect",e.target.value)}}},Me=g("div",{class:"font-bold text-center mt-5"},"فروشگاه اینترنتی امیران",-1),Te={dir:"rtl",class:"flex flex-row p-4 justify-center mt-4 w-full"},Oe=b("سبد خرید"),_e=g("div",{class:"hr-line relative inline-block w-1/12 border-b-2 border-red-500 self-center md:mx-5"},null,-1),ze=b("دریافت آدرس پستی و نحوه ارسال"),He=g("div",{class:"hr-line relative inline-block w-1/12 border-b-2 border-black self-center md:mx-5"},null,-1),Re=b("نحوه پرداخت"),$e={class:"flex flex-row border-2 border-black mt-2 p-2 md:w-5/6 mx-auto"},qe=g("div",{class:"summary w-1/4 border-2 border-black"},null,-1),Fe={dir:"rtl",class:"flex flex-row justify-around order w-3/4 border-2 border-black"},Ke={class:"shippingInfo"},Ze=g("h2",{class:"font-bold mt-2 p-1"},"اطلاعات شناسایی و آدرس پستی",-1),Ve={class:"mt-2 p-3",action:""},Ne=v('<label class="block" for="firstname"> نام:</label><input class="mt-1 border-2 border-black w-40" name="firstname" type="text"><label class="block mt-2" for="lastname">نام خانوادگی :</label><input type="text" name="lastname" class="mt-1 border-2 border-black w-40"><label class="block mt-2" for="address">آدرس تحویل مرسوله :</label><input class="border-2 border-black" type="text" name="address"><input class="border-2 border-black block mt-2" type="text" placeholder="ادامه آدرس"><label class="block mt-2" for="state">استان :</label>',8),Ge=["value"],Ue=g("label",{class:"block mt-2",for:"city"},"شهر :",-1),Ye={name:"city"},Je=["value"],Qe=g("label",{class:"block mt-2",for:"zipcode"},"کد پستی : ",-1),We=g("input",{type:"number",name:"zipcode"},null,-1),Xe=v('<div class="contactInfo"><h2 class="font-bold p-1 mt-2">نحوه برقراری ارتباط با شما</h2><form action=""><label class="block mt-2" for="email">ایمیل :</label><input type="email"><label class="block mt-2" for="phone">شماره تلفن :</label><input type="number"></form></div>',1);const et=[{path:"/",name:"Home",component:ce},{path:"/basket",name:"Basket",component:Ae},{path:"/checkout",name:"Checkout",component:_(Ee,[["render",function(e,t,a,o,r,l){const s=c("router-link");return u(),d(y,null,[Me,g("div",Te,[m(s,{class:"rounded p-2 border-2 border-black",to:{name:"Basket"}},{default:k((()=>[Oe])),_:1}),_e,m(s,{class:"rounded p-2 border-2 bg-red-500 text-white",to:{name:"Checkout"}},{default:k((()=>[ze])),_:1}),He,m(s,{class:"rounded p-2 border-2 border-black",to:{name:"PayMethod"}},{default:k((()=>[Re])),_:1})]),g("div",$e,[qe,g("div",Fe,[g("div",Ke,[Ze,g("form",Ve,[Ne,g("select",{onInput:t[0]||(t[0]=(...e)=>l.updateSelect&&l.updateSelect(...e)),class:"mt-1",name:"state"},[(u(!0),d(y,null,I(e.provinces,(e=>(u(),d("option",{key:e,value:e.id},f(e.name),9,Ge)))),128))],32),Ue,g("select",Ye,[(u(!0),d(y,null,I(e.showProvinceCity,(e=>(u(),d("option",{key:e,value:e},f(e),9,Je)))),128))]),Qe,We])]),Xe])])],64)}]])},{path:"/Payment",name:"PayMethod",component:_({},[["render",function(e,t,a,o,r,l){return u(),d("div",null,"Hellow")}]])}],tt=S({history:P(),routes:et});const at=L({modules:{products:{namespaced:!0,state:()=>({products:[{id:0,title:"لاستیک خودرو بارز ",detail:"گارانتی ۵۰ ماهه",price:"5000000",picture:"https://arnestire.com/wp-content/uploads/2019/07/185-65-14-p640.jpg"},{id:1,title:"A52 گوشی موبایل ",detail:"گارانتی 12 ماهه",price:"6800000",picture:"https://m-cdn.phonearena.com/images/articles/369868-940/Samsung-Galaxy-A52-in-blue-and-black.webp"},{id:2,title:"Oral B دهانشویه مارک ",detail:"پاک کننده جرم های دندان",price:"200000",picture:"https://dkstatics-public.digikala.com/digikala-products/4383652.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80"},{id:3,title:"هندزفری اپل",detail:"گارانتی ۲۴ ماهه",price:"4800000",picture:"https://midonesti.com/wp-content/uploads/2021/11/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A2%DB%8C%D9%81%D9%88%D9%86-%D8%A7%D9%88%D8%B1%D8%AC%DB%8C%D9%86%D8%A7%D9%84-%D9%82%DB%8C%D9%85%D8%AA-%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A7%D9%BE%D9%84-%D8%A8%D8%A7-%D8%B3%DB%8C%D9%85.jpg"}]}),getters:{},mutations:{},actions:{}},basket:{namespaced:!0,state:()=>({selectedItems:[],basketItems:[],counter:{}}),getters:{},mutations:{addToCounter(e,t){e.selectedItems.push(t),console.log(e.selectedItems);const a={};for(let o=0;o<e.selectedItems.length;o++)a[e.selectedItems[o].id]?a[e.selectedItems[o].id]+=1:a[e.selectedItems[o].id]=1;for(let o in a)e.basketItems.push({id:parseInt(o),qun:a[o]});e.basketItems=e.basketItems.slice().reverse().filter(((e,t,a)=>a.findIndex((t=>t.id===e.id))===t)).reverse(),console.log(e.basketItems)},deleteItem(e,t){const a=e.basketItems.findIndex((e=>e.id===t.id));e.basketItems.splice(a,1),e.selectedItems.splice(0,e.selectedItems.length)},changeCount(e,t){e.basketItems[t[0]].qun=t[1]}},actions:{}},provinces:{namespaced:!0,state:()=>({provinces:{AZ_sh:{name:"آذربایجان شرقی",id:0,cities:["کشکسرای","سهند","سیس","دوزدوزان","تیمورلو","صوفیان","سردرود","هادیشهر","هشترود","زرنق","ترکمانچای","ورزقان","تسوج","زنوز","ایلخچی","شرفخانه","مهربان","مبارک شهر","تیکمه داش","باسمنج","سیه رود","میانه","خمارلو","خواجه","بناب مرند","قره آغاج","وایقان","مراغه","ممقان","خامنه","خسروشاه","لیلان","نظرکهریزی","اهر","بخشایش","آقکند","جوان قلعه","کلیبر","مرند","اسکو","شندآباد","شربیان","گوگان","بستان آباد","تبریز","جلفا","اچاچی","هریس","یامچی","خاروانا","کوزه کنان","خداجو(خراجو)","آذرشهر","شبستر","سراب","ملکان","بناب","هوراند","کلوانق","ترک","عجب شیر","آبش احمد"]},AZ_gh:{name:"آذربایجان غربی",id:1,cities:["تازه شهر","نالوس","ایواوغلی","شاهین دژ","گردکشانه","باروق","سیلوانه","بازرگان","نازک علیا","ربط","تکاب","دیزج دیز","سیمینه","نوشین","میاندوآب","مرگنلر","سلماس","آواجیق","قطور","محمودآباد","خوی","نقده","سرو","خلیفان","پلدشت","میرآباد","اشنویه","زرآباد","بوکان","پیرانشهر","چهاربرج","قوشچی","شوط","ماکو","سیه چشمه","سردشت","کشاورز","فیرورق","محمدیار","ارومیه","مهاباد","قره ضیاءالدین"]},ARD:{name:"اردبیل",id:2,cities:["پارس آباد","فخراباد","کلور","نیر","اردبیل","اسلام اباد","تازه کندانگوت","مشگین شهر","جعفرآباد","نمین","اصلاندوز","مرادلو","خلخال","کوراییم","هیر","گیوی","گرمی","لاهرود","هشتجین","عنبران","تازه کند","قصابه","رضی","سرعین","بیله سوار","آبی بیگلو"]},ESF:{name:"اصفهان",id:3,cities:["گزبرخوار","زیار","زرین شهر","گلشن","پیربکران","خالدآباد","سجزی","گوگد","تیران","ونک","دهق","زواره","کاشان","ابوزیدآباد","اصغرآباد","بافران","شهرضا","خور","مجلسی","هرند","فولادشهر","کمشچه","کلیشادوسودرجان","لای بید","قهجاورستان","چرمهین","رزوه","فریدونشهر","طرق رود","نصرآباد","برزک","سفیدشهر","سمیرم","گلدشت","اردستان","جوشقان قالی","بویین ومیاندشت","کرکوند","درچه","انارک","دولت آباد","ایمانشهر","گرگاب","حسن اباد","سده لنجان","حبیب آباد","بهاران شهر","میمه","تودشک","گلشهر","رضوانشهر","داران","علویجه","نیک آباد","مشکات","آران وبیدگل","خوانسار","نجف آباد","منظریه","فرخی","دیزیچه","اژیه","زاینده رود","خورزوق","قهدریجان","شاهین شهر","بهارستان","چمگردان","دهاقان","برف انبار","بادرود","کوهپایه","گلپایگان","عسگران","حنا","کهریزسنگ","مهاباد","کامو و چوگان","افوس","زیباشهر","کوشک","نایین","سین","زازران","مبارکه","ورزنه","ورنامخواست","شاپورآباد","فلاورجان","وزوان","اصفهان","باغ بهادران","چادگان","دامنه","نطنز","محمدآباد","نیاسر","نوش آباد","کمه","جوزدان","قمصر","جندق","طالخونچه","خمینی شهر","باغشاد","دستگرد","ابریشم"]},ALB:{name:"البرز",id:4,cities:["چهارباغ","آسارا","کرج","طالقان","شهرجدیدهشتگرد","محمدشهر","مشکین دشت","نظرآباد","هشتگرد","ماهدشت","اشتهارد","کوهسار","گرمدره","تنکمان","گلسار","کمال شهر","فردیس"]},ILA:{name:"ایلام",id:5,cities:["آبدانان","شباب","موسیان","بدره","ایلام","ایوان","مهران","آسمان آباد","پهله","مهر","سراب باغ","بلاوه","میمه","دره شهر","ارکواز","مورموری","توحید","دهلران","لومار","چوار","زرنه","صالح آباد","سرابله","ماژین","دلگشا"]},BOS:{name:"بوشهر",id:6,cities:["ریز","برازجان","بندرریگ","اهرم","دوراهک","خورموج","نخل تقی","کلمه","بندردیلم","وحدتیه","بنک","چغادک","بندردیر","کاکی","جم","دالکی","بندرگناوه","آباد","آبدان","خارک","شنبه","بوشکان","انارستان","شبانکاره","سیراف","دلوار","بردستان","بادوله","عسلویه","تنگ ارم","امام حسن","سعد آباد","بندرکنگان","بوشهر","بردخون","آب پخش"]},TEH:{name:"تهران",id:7,cities:["شاهدشهر","پیشوا","جوادآباد","ارجمند","ری","نصیرشهر","رودهن","اندیشه","نسیم شهر","صباشهر","ملارد","شمشک","پاکدشت","باقرشهر","احمد آباد مستوفی","کیلان","قرچک","فردوسیه","گلستان","ورامین","فیروزکوه","فشم","پرند","آبعلی","چهاردانگه","تهران","بومهن","وحیدیه","صفادشت","لواسان","فرون اباد","کهریزک","رباطکریم","آبسرد","باغستان","صالحیه","شهریار","قدس","تجریش","شریف آباد","حسن آباد","اسلامشهر","دماوند","پردیس"]},CHB:{name:"چهارمحال و بختیاری",id:8,cities:["وردنجان","گوجان","گهرو","سورشجان","سرخون","شهرکرد","منج","بروجن","پردنجان","سامان","فرخ شهر","صمصامی","طاقانک","کاج","نقنه","لردگان","باباحیدر","دستنا","سودجان","بازفت","هفشجان","سردشت","فرادبنه","چلیچه","بن","فارسان","شلمزار","نافچ","دشتک","بلداجی","آلونی","گندمان","جونقان","ناغان","هارونی","چلگرد","کیان","اردل","سفیددشت","مال خلیفه"]},KH_jo:{name:"خراسان جنوبی",id:9,cities:["اسلامیه","شوسف","قاین","عشق آباد","طبس مسینا","ارسک","آیسک","نیمبلوک","دیهوک","سربیشه","محمدشهر","بیرجند","فردوس","نهبندان","اسفدن","گزیک","حاجی آباد","سه قلعه","آرین شهر","مود","خوسف","قهستان","بشرویه","سرایان","خضری دشت بیاض","طبس","اسدیه","زهان"]},KH_ra:{name:"خراسان رضوی",id:10,cities:["بار","نیل شهر","جنگل","درود","رباط سنگ","سلطان آباد","فریمان","گناباد","کاریز","همت آباد","سلامی","باجگیران","بجستان","چناران","درگز","کلات","چکنه","نصرآباد","بردسکن","مشهد","کدکن","نقاب","قلندرآباد","کاشمر","شاندیز","نشتیفان","ششتمد","شادمهر","عشق آباد","چاپشلو","رشتخوار","قدمگاه","صالح آباد","داورزن","فرهادگرد","کاخک","مشهدریزه","جغتای","مزدآوند","قوچان","یونسی","سنگان","نوخندان","کندر","نیشابور","احمدابادصولت","شهراباد","رضویه","تربت حیدریه","باخرز","سفیدسنگ","بیدخت","تایباد","فیروزه","قاسم آباد","سبزوار","فیض آباد","گلمکان","لطف آباد","شهرزو","خرو","تربت جام","انابد","ملک آباد","بایک","دولت آباد","سرخس","ریوش","طرقبه","خواف","روداب","خلیل آباد"]},KH_sh:{name:"خراسان شمالی",id:11,cities:["چناران شهر","راز","پیش قلعه","قوشخانه","شوقان","اسفراین","گرمه","قاضی","شیروان","حصارگرمخان","آشخانه","تیتکانلو","جاجرم","بجنورد","درق","آوا","زیارت","سنخواست","صفی آباد","ایور","فاروج","لوجلی"]},KHZ:{name:"خوزستان",id:12,cities:["هفتگل","بیدروبه","شاوور","حمزه","گتوند","شرافت","منصوریه","زهره","رامهرمز","بندرامام خمینی","کوت عبداله","میداود","چغامیش","ملاثانی","چم گلک","حر","شمس آباد","آبژدان","چویبده","مسجدسلیمان","مقاومت","ترکالکی","دارخوین","سردشت","لالی","کوت سیدنعیم","حمیدیه","دهدز","قلعه تل","میانرود","رفیع","اندیمشک","الوان","سالند","صالح شهر","اروندکنار","سرداران","تشان","رامشیر","شادگان","بندرماهشهر","جایزان","بستان","ویس","اهواز","فتح المبین","شهر امام","قلعه خواجه","حسینیه","گلگیر","مینوشهر","سماله","شوشتر","بهبهان","هندیجان","ابوحمیظه","آغاجاری","ایذه","صیدون","سیاه منصور","هویزه","آزادی","شوش","دزفول","جنت مکان","آبادان","گوریه","خرمشهر","مشراگه","خنافره","چمران","امیدیه","سوسنگرد","شیبان","الهایی","باغ ملک","صفی آباد"]},ZAN:{name:"زنجان",id:13,cities:["سجاس","زرین رود","آب بر","ارمغانخانه","کرسف","هیدج","سلطانیه","خرمدره","نیک پی","قیدار","ابهر","دندی","حلب","نوربهار","گرماب","چورزق","زنجان","سهرورد","صایین قلعه","ماه نشان","زرین آباد"]},SEM:{name:"سمنان",id:14,cities:["ایوانکی","مجن","دامغان","سرخه","مهدی شهر","شاهرود","سمنان","کهن آباد","گرمسار","کلاته خیج","دیباج","درجزین","رودیان","بسطام","امیریه","میامی","شهمیرزاد","بیارجمند","کلاته","آرادان"]},SBL:{name:"سیستان و بلوچستان",id:15,cities:["محمدی","شهرک علی اکبر","بنجار","گلمورتی","نگور","راسک","بنت","قصرقند","جالق","هیدوچ","نوک آباد","زهک","بمپور","پیشین","گشت","محمدآباد","زاهدان","زابلی","چاه بهار","زرآباد","بزمان","اسپکه","فنوج","سراوان","ادیمی","زابل","دوست محمد","ایرانشهر","سرباز","سیرکان","میرجاوه","نصرت آباد","سوران","خاش","کنارک","محمدان","نیک شهر"]},FAR:{name:"فارس",id:16,cities:["کازرون","کارزین (فتح آباد)","فدامی","خومه زار","سلطان شهر","فیروزآباد","دبیران","باب انار","رامجرد","سروستان","قره بلاغ","ارسنجان","دژکرد","بیرم","دهرم","شیراز","ایزدخواست","علامرودشت","اوز","وراوی","بیضا","نی ریز","کنارتخته","امام شهر","جهرم","بابامنیر","گراش","فسا","شهرپیر","حسن اباد","کامفیروز","خنج","خانه زنیان","استهبان","بوانات","لطیفی","فراشبند","زرقان","صغاد","اشکنان","قایمیه","گله دار","دوبرجی","آباده طشک","خرامه","میمند","افزر","دوزه","سیدان","کوپن","زاهدشهر","قادراباد","سده","بنارویه","سعادت شهر","شهرصدرا","سورمق","حسامی","جویم","خوزی","اردکان","قطرویه","نودان","مبارک آباددیز","داراب","نورآباد","کوار","نوبندگان","حاجی آباد","خاوران","مرودشت","کوهنجان","ششده","مزایجان","ایج","خور","نوجین","لپویی","بهمن","اهل","خشت","مهر","جنت شهر","مشکان","بالاده","قیر","قطب آباد","خانیمن","مصیری","میانشهر","صفاشهر","اقلید","عمادده","مادرسلیمان","داریان","رونیز","کره ای","لار","اسیر","هماشهر","آباده","لامرد"]},GHZ:{name:"قزوین",id:17,cities:["سگزآباد","بیدستان","کوهین","رازمیان","خرمدشت","آبگرم","شال","شریفیه","اقبالیه","نرجه","ارداق","الوند","خاکعلی","سیردان","ضیاڈآباد","بویین زهرا","محمدیه","محمودآبادنمونه","معلم کلایه","اسفرورین","آوج","دانسفهان","آبیک","قزوین","تاکستان"]},GHO:{name:"قم",id:18,cities:["کهک","قم","سلفچگان","جعفریه","قنوات","دستجرد"]},KOR:{name:"کردستان",id:19,cities:["قروه","توپ آغاج","سروآباد","بویین سفلی","زرینه","دلبران","سنندج","یاسوکند","موچش","بانه","مریوان","سریش آباد","صاحب","دهگلان","بابارشانی","دیواندره","برده رشه","شویشه","بیجار","اورامان تخت","کانی سور","کانی دینار","دزج","سقز","بلبان آباد","پیرتاج","کامیاران","آرمرده","چناره"]},KER:{name:"کرمان",id:20,cities:["کهنوج","بلوک","پاریز","گنبکی","زنگی آباد","بم","خانوک","کیانشهر","جوپار","عنبرآباد","جوزم","نظام شهر","لاله زار","کشکوییه","زیدآباد","هنزا","چترود","جبالبارز","سیرجان","رودبار","کرمان","بافت","صفاییه","منوجان","اندوهجرد","هجدک","خورسند","امین شهر","بردسیر","رفسنجان","هماشهر","محمدآباد","اختیارآباد","بروات","ریحان","کوهبنان","ماهان","دوساری","دهج","فاریاب","گلزار","بهرمان","بلورد","فهرج","کاظم آباد","جیرفت","نجف شهر","قلعه گنج","باغین","بزنجان","زرند","نودژ","گلباف","راور","خاتون اباد","نرماشیر","دشتکار","مس سرچشمه","خواجو شهر","رابر","راین","درب بهشت","یزدان شهر","زهکلوت","محی آباد","مردهک","شهداد","ارزوییه","نگار","شهربابک","انار"]},KSH:{name:"کرمانشاه",id:21,cities:["سنقر","شاهو","بانوره","تازه آباد","هلشی","جوانرود","قصرشیرین","نوسود","کرند","کوزران","بیستون","حمیل","گیلانغرب","سطر","روانسر","پاوه","ازگله","کرمانشاه","میان راهان","کنگاور","سرپل ذهاب","ریجاب","باینگان","هرسین","اسلام آبادغرب","سرمست","سومار","نودشه","گهواره","رباط","صحنه","گودین"]},KHB:{name:"کهگیلویه وبویراحمد",id:22,cities:["گراب سفلی","لنده","سی سخت","دهدشت","یاسوج","سرفاریاب","دوگنبدان","چیتاب","لیکک","دیشموک","مادوان","باشت","پاتاوه","قلعه رییسی","مارگون","چرام","سوق"]},GOL:{name:"گلستان",id:23,cities:["سیمین شهر","مزرعه","رامیان","فراغی","گنبدکاووس","کردکوی","مراوه","بندرترکمن","نگین شهر","آق قلا","سرخنکلاته","گالیکش","سنگدوین","دلند","بندرگز","نوده خاندوز","مینودشت","گرگان","گمیش تپه","علی اباد","خان ببین","کلاله","اینچه برون","فاضل آباد","تاتارعلیا","نوکنده","آزادشهر","انبارآلوم","جلین"]},GIL:{name:"گیلان",id:24,cities:["منجیل","شلمان","خشکبیجار","ماکلوان","سنگر","مرجقل","لیسار","رضوانشهر","رحیم آباد","لوندویل","احمدسرگوراب","لوشان","اطاقور","لشت نشاء","فومن","چوبر","بازار جمعه","کلاچای","بندرانزلی","املش","رستم آباد","لاهیجان","توتکابن","لنگرود","کوچصفهان","صومعه سرا","اسالم","دیلمان","رودسر","کیاشهر","شفت","رودبار","کومله","رشت","ماسوله","خمام","ماسال","واجارگاه","هشتپر (تالش)","پره سر","بره سر","آستارا","رودبنه","جیرنده","چاف و چمخاله","لولمان","گوراب زرمیخ","حویق","سیاهکل","چابکسر","آستانه اشرفیه","رانکوه"]},LOR:{name:"لرستان",id:25,cities:["چالانچولان","بیران شهر","ویسیان","شول آباد","پلدختر","کوهدشت","هفت چشمه","بروجرد","الشتر","مومن آباد","دورود","زاغه","چقابل","الیگودرز","معمولان","کوهنانی","نورآباد","سپیددشت","سراب دوره","ازنا","گراب","خرم آباد","اشترینان","فیروزآباد","درب گنبد"]},MAZ:{name:"مازندران",id:26,cities:["گلوگاه","پل سفید","دابودشت","چالوس","کیاسر","بهنمیر","تنکابن","کلاردشت","ایزدشهر","گتاب","سلمان شهر","ارطه","امیرکلا","کوهی خیل","پایین هولار","گزنک","محمودآباد","رامسر","نوشهر","خلیل شهر","کیاکلا","نور","مرزیکلا","فریدونکنار","زیرآب","امامزاده عبدالله","هچیرود","فریم","هادی شهر","نشتارود","پول","بهشهر","کلارآباد","بلده","بابل","جویبار","آلاشت","آمل","نکا","کتالم وسادات شهر","بابلسر","شیرود","شیرگاه","رویان","زرگرمحله","عباس اباد","قایم شهر","خوش رودپی","مرزن آباد","ساری","رینه","سرخرود","خرم آباد","کجور","رستمکلا","سورک","چمستان"]},MAR:{name:"مرکزی",id:27,cities:["آستانه","خنجین","نراق","کمیجان","آشتیان","رازقان","مهاجران","غرق آباد","خنداب","قورچی باشی","خشکرود","ساروق","محلات","شازند","ساوه","میلاجرد","تفرش","زاویه","اراک","توره","نوبران","فرمهین","دلیجان","پرندک","کارچان","نیمور","هندودر","آوه","جاورسیان","خمین","مامونیه","داودآباد","شهباز"]},HOR:{name:"هرمزگان",id:28,cities:["بیکاء","تیرور","گروک","قشم","کوشکنار","کیش","سرگز","بندرعباس","زیارتعلی","سندرک","کوهستک","لمزان","رویدر","قلعه قاضی","فارغان","ابوموسی","هشتبندی","سردشت","درگهان","پارسیان","کنگ","جناح","تازیان پایین","دهبارز","میناب","سیریک","سوزا","خمیر","چارک","حاجی اباد","فین","بندرجاسک","گوهران","هرمز","دشتی","بندرلنگه","بستک","تخت"]},HAM:{name:"همدان",id:29,cities:["زنگنه","دمق","سرکان","آجین","جورقان","برزول","فامنین","سامن","بهار","فرسفج","شیرین سو","مریانج","فیروزان","قروه درجزین","ازندریان","لالجین","گل تپه","گیان","ملایر","صالح آباد","تویسرکان","اسدآباد","همدان","نهاوند","رزن","جوکار","مهاجران","کبودرآهنگ","قهاوند"]},YAZ:{name:"یزد",id:30,cities:["مروست","مهردشت","حمیدیا","تفت","اشکذر","ندوشن","یزد","عقدا","بهاباد","ابرکوه","زارچ","نیر","اردکان","هرات","بفروییه","شاهدیه","بافق","خضرآباد","میبد","مهریز","احمدآباد"]}},provinceSelect:null}),getters:{showProvinceCity:e=>{const t=Object.entries(e.provinces);for(let a=0;a<t.length;a++)if(t[a][1].id===e.provinceSelect)return t[a][1].cities}},mutations:{updateSelect(e,t){e.provinceSelect=parseInt(t)}},actions:{}}},plugins:[j()]});A.add(E),M(H).component("fa",T).use(O).use(tt).use(at).mount("#app");

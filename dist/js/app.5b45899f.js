(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("85ec"),r=n.n(s);r.a},"06ab":function(t,e,n){},"29d6":function(t,e,n){"use strict";var s=n("7e9f"),r=n.n(s);r.a},"2eca":function(t,e,n){"use strict";var s=n("35cb"),r=n.n(s);r.a},"303a":function(t,e,n){"use strict";var s=n("3df8"),r=n.n(s);r.a},3427:function(t,e,n){"use strict";var s=n("6ac3"),r=n.n(s);r.a},"35cb":function(t,e,n){},"3df8":function(t,e,n){},"4d00":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var s={};n.r(s),n.d(s,"formatDate",(function(){return Oe}));n("4de4"),n("4160"),n("b64b"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("AppHeader"),n("div",{staticClass:"app-contents"},[n("router-view")],1),n("AppFooter"),n("ToastPopup")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"appHeader",class:{fixed:t.isFixed}},[n("div",[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v(" MEMO "),t.isLoggedIn?n("span",[t._v("by "+t._s(this.$store.state.user.nickname))]):t._e()])],1),n("div",{staticClass:"navigations"},[t.isLoggedIn?[n("a",{staticClass:"logout-button",attrs:{href:"javascript:;"},on:{click:t.logout}},[t._v("Logout")])]:[n("router-link",{attrs:{to:"/login"}},[t._v("Login")]),n("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")])]],2)])},u=[],l=(n("b0c0"),n("5530")),d=n("2f62"),p=new a["a"],m={computed:Object(l["a"])({},Object(d["b"])(["isLoggedIn"])),data:function(){return{navHeight:0,isFixed:!1}},watch:{$route:"looseHeader"},methods:{logout:function(){p.$emit("show:toast","User logged out"),this.$store.commit("LOGOUT"),this.$router.push("/")},checkHeight:function(){window.scrollY>5?this.stickHeader():this.looseHeader()},stickHeader:function(){this.isFixed=!0,document.querySelector(".main").classList.add("sticky")},looseHeader:function(){this.isFixed=!1,document.querySelector(".main").classList.remove("sticky")}},mounted:function(){"main"===this.$route.name&&(this.navHeight=this.$refs.appHeader.offsetHeight,window.addEventListener("scroll",this.checkHeight))},beforeDestroy:function(){window.removeEventListener("scroll",this.checkHeight)}},f=m,v=(n("3427"),n("2877")),h=Object(v["a"])(f,c,u,!1,null,"614a24d0",null),g=h.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",[t._v("© 2020")])])}],_={},x=_,k=(n("8391"),Object(v["a"])(x,b,w,!1,null,"1088113b",null)),C=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toast",class:t.toastAnimationClass},[t._v(" "+t._s(t.message)+" ")])},P=[],$={data:function(){return{open:!1,message:""}},computed:{toastAnimationClass:function(){return this.open?"show":null}},methods:{showToast:function(t){this.message=t,this.open=!0,clearTimeout(r),r=setTimeout(this.hideToast,2e3)},hideToast:function(){this.open=!1}},created:function(){p.$on("show:toast",this.showToast)},beforeDestroy:function(){p.$off("show:toast",this.showToast)}},j=$,y=(n("94c4"),Object(v["a"])(j,O,P,!1,null,"3b39a924",null)),E=y.exports,L={components:{AppHeader:g,ToastPopup:E,AppFooter:C}},T=L,F=(n("034f"),Object(v["a"])(T,o,i,!1,null,null,null)),H=F.exports,D=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main form-container"},[n("LoginForm")],1)},S=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("div",{staticClass:"form-wrapper form-wrapper-sm"},[n("PageHeader",[t._v("Login")]),n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("div",[n("label",{attrs:{for:"username"}},[t._v("ID")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",[n("label",{attrs:{for:"password"}},[t._v("PW")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"btn"},[t._v("login")])]),n("p",{staticClass:"log"},[t._v(" "+t._s(t.logMessage)+" ")])],1)])},I=[],N=(n("96cf"),n("1da1")),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[t._t("default")],2)},B=[],A={},V=A,G=(n("2eca"),Object(v["a"])(V,U,B,!1,null,null,null)),q=G.exports,J={components:{PageHeader:q},data:function(){return{username:"",password:"",logMessage:""}},methods:{submitForm:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.username&&t.password){e.next=3;break}return alert("Fill in the account information"),e.abrupt("return");case 3:return e.prev=3,e.next=6,t.$store.dispatch("LOGIN",{username:t.username,password:t.password});case 6:n=e.sent,console.log(n),p.$emit("show:toast",n.data.message),t.$router.push("/main"),t.initForm(),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](3),console.log(e.t0),t.logMessage=e.t0.response.data;case 17:case"end":return e.stop()}}),e,null,[[3,13]])})))()},initForm:function(){this.username="",this.password=""}}},K=J,W=(n("7ca9"),Object(v["a"])(K,R,I,!1,null,"474eccfb",null)),Y=W.exports,z={components:{LoginForm:Y}},Q=z,X=Object(v["a"])(Q,M,S,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main form-container"},[n("SignupForm")],1)},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("div",{staticClass:"form-wrapper form-wrapper-sm"},[n("PageHeader",[t._v("Sign Up")]),n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.registerUser(e)}}},[n("div",[n("label",{attrs:{for:"username"}},[t._v("ID")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],class:t.usernameValidClass,attrs:{type:"text",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("p",{staticClass:"validation-text"},[t.isUsernameValid?t._e():n("span",{staticClass:"warning"},[t._v(" Please enter an email address ")])])]),n("div",[n("label",{attrs:{for:"password"}},[t._v("PW")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:t.passwordValidClass,attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("p",{staticClass:"validation-text"},[t.isPasswordValid?t._e():n("span",{staticClass:"warning"},[t._v(" Password must be over 8 letters ")])])]),n("div",[n("label",{attrs:{for:"nickname"}},[t._v("Nickname")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],class:t.nicknameValidClass,attrs:{type:"text",id:"nickname"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),n("button",{staticClass:"btn",class:t.isButtonDisabled,attrs:{type:"submit",disabled:t.isButtonDisabled}},[t._v(" Create ")])]),n("p",{staticClass:"log"},[t._v(" "+t._s(t.logMessage)+" ")])],1)])},st=[],rt=n("bc3a"),at=n.n(rt);n("d3b7"),n("ac1f"),n("5319");function ot(t){document.cookie="til_auth=".concat(t)}function it(t){document.cookie="til_user=".concat(t)}function ct(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function ut(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,"$1")}function lt(t){document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")}a["a"].use(d["a"]);var dt=new d["a"].Store({state:{user:{},token:""},getters:{isLoggedIn:function(t){return!!t.token||ut()},userToken:function(t){return t.token}},mutations:{SET_USER:function(t,e){t.user=e},SET_TOKEN:function(t,e){t.token=e},LOGOUT:function(t){t.user=null,t.token=null,lt("til_auth"),lt("til_user")}},actions:{LOGIN:function(t,e){return Object(N["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=t.commit,n.next=3,gt(e);case 3:return r=n.sent,s("SET_USER",r.data.user),s("SET_TOKEN",r.data.token),it(r.data.user.username),ot(r.data.token),n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))()}}});function pt(t){return t.interceptors.request.use((function(t){return t.headers.Authorization=dt.getters["userToken"]||ct(),t}),(function(t){return Promise.reject(t.response)})),t.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t.response)})),t}function mt(t,e){var n=at.a.create(Object.assign({baseURL:t},e));return n}function ft(t,e){var n=at.a.create(Object.assign({baseURL:t},e));return pt(n),n}var vt=mt("https://obscure-fortress-47742.herokuapp.com/"),ht=ft("".concat("https://obscure-fortress-47742.herokuapp.com/","posts/"));function gt(t){return vt.post("login",t)}function bt(t){return vt.post("signup",t)}function wt(t){var e=/\S+@\S+\.\S+/;return e.test(t)}function _t(t){return t.length>=8}var xt={components:{PageHeader:q},data:function(){return{username:"",password:"",nickname:"",logMessage:""}},computed:{usernameValidClass:function(){if(this.username)return wt(this.username)?"valid":"invalid"},isUsernameValid:function(){return!this.username||wt(this.username)},passwordValidClass:function(){if(this.password)return _t(this.password)?"valid":"invalid"},isPasswordValid:function(){return!this.password||_t(this.password)},nicknameValidClass:function(){return this.nickname?"valid":null},isButtonDisabled:function(){return this.username&&this.password&&this.nickname&&wt(this.username)&&_t(this.password)?null:"disabled"}},methods:{registerUser:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,bt({username:t.username,password:t.password,nickname:t.nickname});case 3:t.logMessage="User is created",t.initForm(),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0.response),409===e.t0.response.status&&(t.logMessage="".concat(t.username," already exists"));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},initForm:function(){this.username="",this.password="",this.nickname=""}}},kt=xt,Ct=(n("c4dd"),Object(v["a"])(kt,nt,st,!1,null,"c97b3cf2",null)),Ot=Ct.exports,Pt={components:{SignupForm:Ot}},$t=Pt,jt=Object(v["a"])($t,tt,et,!1,null,null,null),yt=jt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main list-container contents"},[n("PageHeader",[t._v("Today I Learned")]),t.postItems?n("ul",t._l(t.postItems,(function(e){return n("li",{key:e._id},[n("div",{staticClass:"post-title"},[n("router-link",{attrs:{to:"/post/"+e._id}},[t._v(t._s(e.title))])],1),n("div",{staticClass:"post-contents"},[t._v(" "+t._s(e.contents)+" ")]),n("div",{staticClass:"post-time"},[t._v(" "+t._s(t._f("formatDate")(e.createdAt))+" "),n("i",{staticClass:"icon ion-md-create",on:{click:function(n){return t.editPost(e._id)}}},[t._v("✚")]),n("i",{staticClass:"icon ion-md-trash",on:{click:function(n){return t.removePost(e._id)}}},[t._v("ー")])])])})),0):n("LoadingSpinner")],1),n("CreateButton")],1)},Lt=[],Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-container"},[n("div",{staticClass:"spinner"})])}],Ht={},Dt=Ht,Mt=(n("303a"),Object(v["a"])(Dt,Tt,Ft,!1,null,"5f760534",null)),St=Mt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"create-button",attrs:{to:"/new"}},[n("i",{staticClass:"icon ion-md-add"},[t._v("＋")])])},It=[],Nt={},Ut=Nt,Bt=(n("e06c"),Object(v["a"])(Ut,Rt,It,!1,null,"5bac13de",null)),At=Bt.exports;function Vt(t){return ht.post("/",t)}function Gt(){return ht.get("/")}function qt(t){return ht.get(t)}function Jt(t,e){return ht.put(t,e)}function Kt(t){return ht.delete(t)}var Wt={components:{CreateButton:At,PageHeader:q,LoadingSpinner:St},data:function(){return{postItems:null}},methods:{fetchData:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Gt();case 3:return n=e.sent,s=n.data.posts,t.postItems=s,e.abrupt("return");case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()},editPost:function(t){this.$router.push("/post/".concat(t))},removePost:function(t){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,!confirm("Delete it?")){n.next=8;break}return n.next=4,Kt(t);case 4:return s=n.sent,n.next=7,e.fetchData();case 7:p.$emit("show:toast","".concat(s.data.title," was deleted"));case 8:n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()}},created:function(){this.fetchData()}},Yt=Wt,zt=(n("d254"),Object(v["a"])(Yt,Et,Lt,!1,null,"a8480174",null)),Qt=zt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main form-container"},[n("PostAddForm")],1)},Zt=[],te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("PageHeader",[t._v("Create Post")]),n("div",{staticClass:"form-wrapper"},[n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"title",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",[n("label",{attrs:{for:"contents"}},[t._v("Contents")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contents,expression:"contents"}],attrs:{name:"contents",id:"contents",cols:"30",rows:"5"},domProps:{value:t.contents},on:{input:function(e){e.target.composing||(t.contents=e.target.value)}}}),n("p",{staticClass:"validation-text",class:{reverse:t.isContentTooLong}},[t.isContentTooLong?n("span",{staticClass:"warning"},[t._v("Maximum Length is 50")]):t._e(),n("span",[t._v(t._s(t.contentsLength)+" / 250")])])]),n("button",{staticClass:"btn",class:t.isButtonDisabled,attrs:{type:"submit",disabled:t.isButtonDisabled}},[t._v(" Create ")])]),n("p",{staticClass:"log"},[t._v(" "+t._s(t.resultMessage)+" ")])])],1)},ee=[],ne={components:{PageHeader:q},data:function(){return{title:"",contents:"",resultMessage:""}},computed:{contentsLength:function(){return this.contents.length},isContentTooLong:function(){return this.contents.length>250},isButtonDisabled:function(){return!this.title||!this.contents||this.contents.length>50?"disabled":null}},methods:{submitForm:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Vt({title:t.title,contents:t.contents});case 3:n=e.sent,p.$emit("show:toast","".concat(n.data.data.title," was created")),t.$router.push("/main"),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.resultMessage=e.t0.data.message;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},se=ne,re=(n("b13c"),Object(v["a"])(se,te,ee,!1,null,"31482ddd",null)),ae=re.exports,oe={components:{PostAddForm:ae}},ie=oe,ce=Object(v["a"])(ie,Xt,Zt,!1,null,null,null),ue=ce.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main form-container"},[n("PostEditForm")],1)},de=[],pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("PageHeader",[t._v("Edit Post")]),n("div",{staticClass:"form-wrapper"},[n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.editForm(e)}}},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"title",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",[n("label",{attrs:{for:"contents"}},[t._v("Contents")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contents,expression:"contents"}],attrs:{name:"contents",id:"contents",cols:"30",rows:"5"},domProps:{value:t.contents},on:{input:function(e){e.target.composing||(t.contents=e.target.value)}}})]),n("button",{staticClass:"btn",class:t.isButtonDisabled,attrs:{type:"submit",disabled:t.isButtonDisabled}},[t._v(" Edit ")])]),n("p",{staticClass:"log"},[t._v(" "+t._s(t.resultMessage)+" ")])])],1)},me=[],fe={components:{PageHeader:q},data:function(){return{title:"",contents:"",resultMessage:""}},computed:{isButtonDisabled:function(){return this.title&&this.contents?null:"disabled"}},methods:{setForm:function(t){var e=t.title,n=t.contents;this.title=e,this.contents=n},editForm:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$route.params.id,e.next=4,Jt(n,{title:t.title,contents:t.contents});case 4:s=e.sent,p.$emit("show:toast","".concat(s.data.title," was editted")),t.$router.push("/main"),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0),t.resultMessage=e.t0.data.error.errmsg;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},created:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){var n,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$route.params.id,e.next=4,qt(n);case 4:s=e.sent,r=s.data,t.setForm(r),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},ve=fe,he=(n("29d6"),Object(v["a"])(ve,pe,me,!1,null,"7dc33273",null)),ge=he.exports,be={components:{PostEditForm:ge}},we=be,_e=Object(v["a"])(we,le,de,!1,null,null,null),xe=_e.exports;a["a"].use(D["a"]);var ke=new D["a"]({mode:"history",routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:Z,beforeEnter:function(t,e,n){dt.getters["isLoggedIn"]?n("/main"):n()}},{path:"/signup",name:"signup",component:yt},{path:"/main",name:"main",component:Qt,beforeEnter:Ce},{path:"/new",name:"new",component:ue,beforeEnter:Ce},{path:"/post/:id",name:"detail",component:xe,beforeEnter:Ce}]});function Ce(t,e,n){dt.getters["isLoggedIn"]||ut()?n():(alert("sign in please"),n("/login"))}n("99af");function Oe(t){var e=new Date(t),n=e.getFullYear(),s=e.getMonth()+1;s=s>9?s:"0".concat(s);var r=e.getDate(),a=e.getHours();a=a>9?a:"0".concat(a);var o=e.getMinutes();return"".concat(n,"-").concat(s,"-").concat(r," ").concat(a,":").concat(o)}a["a"].config.productionTip=!1,Object.keys(s).forEach((function(t){return a["a"].filter(t,s[t])})),new a["a"]({router:ke,store:dt,render:function(t){return t(H)}}).$mount("#app")},"5d64":function(t,e,n){},"6ac3":function(t,e,n){},"7ca9":function(t,e,n){"use strict";var s=n("06ab"),r=n.n(s);r.a},"7e9f":function(t,e,n){},8391:function(t,e,n){"use strict";var s=n("de0f"),r=n.n(s);r.a},"85ec":function(t,e,n){},"94c4":function(t,e,n){"use strict";var s=n("fba2"),r=n.n(s);r.a},"9d5c":function(t,e,n){},b13c:function(t,e,n){"use strict";var s=n("b1e1"),r=n.n(s);r.a},b1e1:function(t,e,n){},c4dd:function(t,e,n){"use strict";var s=n("9d5c"),r=n.n(s);r.a},d254:function(t,e,n){"use strict";var s=n("5d64"),r=n.n(s);r.a},de0f:function(t,e,n){},e06c:function(t,e,n){"use strict";var s=n("4d00"),r=n.n(s);r.a},fba2:function(t,e,n){}});
//# sourceMappingURL=app.5b45899f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{175:function(t,e,n){"use strict";n.r(e);var r={components:{changeTheme:n(252).default},data:function(){return{selectedItem:null,menu:[{title:"个人信息"},{title:"设置"},{title:"选择账户"},{title:"退出"}],change:[["暴躁小河豚","mdi-google-downasaur"],["温柔小妹妹","mdi-face-woman-shimmer"]],drawer:!1,items:[{icon:"mdi-food",title:"吃饭",to:"/firstApp"},{icon:"mdi-sleep",title:"睡觉",to:"/sleep"},{icon:"mdi-chart-bubble",title:"打豆豆",to:"/beatpea"},{icon:"mdi-school",title:"学习",to:"/study"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},methods:{},abc:function(){console.log("a")}},o=n(58),l=n(67),c=n.n(l),v=n(380),m=n(193),d=n(370),_=n(168),f=n(143),h=n(169),V=n(170),k=n(109),x=n(171),w=n(176),y=n(50),I=n(177),C=n(96),L=n(371),j=n(384),N=n(382),T=n(173),A=n(174),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-toolbar",{attrs:{height:"55px"}},[n("v-app-bar-nav-icon",{attrs:{depressed:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"grey--text"},[n("span",{staticClass:"font-weight-light"},[t._v("Gu")]),t._v(" "),n("span",[t._v("KeXin")])]),t._v(" "),n("v-spacer"),t._v(" "),n("changeTheme"),t._v(" "),n("v-btn",{attrs:{text:"",color:"grey darken-3",small:""}},[n("span",[t._v("sign out")]),t._v(" "),n("v-icon",{attrs:{right:""}},[t._v("mdi-exit-to-app")])],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://pbs.twimg.com/profile_images/1387279201330294786/ViYiqphH.jpg"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("顾可欣")])],1)],1),t._v(" "),n("v-menu",{attrs:{"open-on-hover":"",right:"","offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-list-item",t._g(t._b({attrs:{link:""}},"v-list-item",o,!1),r),[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("john@vuetifyjs.com")])],1),t._v(" "),n("v-list-item-action",[n("v-icon",{attrs:{dark:""}},[t._v("mdi-menu-down")])],1)],1)]}}])},[t._v(" "),n("v-list",t._l(t.menu,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{nuxt:"",to:e.to}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1),t._v(" "),n("v-list-group",{attrs:{value:!1,"prepend-icon":"mdi-concourse-ci"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("变身")])]},proxy:!0}])},[t._v(" "),t._l(t.change,(function(e,i){var title=e[0],r=e[1];return n("v-list-item",{key:i,staticClass:"ml-4",attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(r)}})],1),t._v(" "),n("v-list-item-title",{domProps:{textContent:t._s(title)}})],1)}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBarNavIcon:v.a,VBtn:m.a,VDivider:d.a,VIcon:_.a,VImg:f.a,VList:h.a,VListGroup:V.a,VListItem:k.a,VListItemAction:x.a,VListItemAvatar:w.a,VListItemContent:y.a,VListItemGroup:I.a,VListItemIcon:C.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VMenu:L.a,VNavigationDrawer:j.a,VSpacer:N.a,VToolbar:T.a,VToolbarTitle:A.a})},222:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7388ab72",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";var r={components:{navbar:n(175).default},data:function(){return{}},methods:{}},o=n(58),l=n(67),c=n.n(l),v=n(379),m=n(385),d=n(383),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("navbar"),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{Navbar:n(175).default}),c()(component,{VApp:v.a,VContainer:m.a,VMain:d.a})},252:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{dark:!1}},methods:{changeTheme:function(){this.dark=!this.dark,this.$vuetify.theme.dark=this.dark}}},o=n(58),l=n(67),c=n.n(l),v=n(193),m=n(168),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:t.changeTheme}},[t.dark?n("v-icon",[t._v("mdi-brightness-4")]):n("v-icon",[t._v("mdi-brightness-7")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:m.a})},264:function(t,e,n){n(265),t.exports=n(266)},290:function(t,e,n){"use strict";n(222)},291:function(t,e,n){var r=n(18)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},76:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(290),n(58)),l=n(67),c=n.n(l),v=n(379),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[264,9,4,10]]]);
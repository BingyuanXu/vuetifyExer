(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7,8],{398:function(t,e,r){var content=r(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("83583c80",content,!0,{sourceMap:!1})},399:function(t,e,r){"use strict";r.r(e);var n,o=r(4),l=(r(34),{data:function(){return{dialog:!1,date:null,breakfast:null,lunch:null,dinner:null,mood:null,menu:null,loading:!1,snackbar:!1}},methods:{submitData:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,e={breakfast:this.breakfast,lunch:this.lunch,dinner:this.dinner,mood:this.mood,date:this.date},this.$refs.myForm.validate()&&this.$fire.firestore.collection("project").add(e).then((function(){r.loading=!1,r.snackbar=!0})),this.dialog=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}}),c=r(52),d=r(65),v=r.n(d),f=r(197),m=r(424),_=r(391),h=r(497),x=r(390),k=r(506),y=r(498),C=r(499),V=r(169),O=r(376),w=r(500),j=r(507),D=r(501),S=r(387),P=r(496),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-snackbar",{attrs:{app:"",timeout:2e3,value:t.snackbar,centered:"",top:"",color:"primary",outlined:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("\n        Close\n      ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    upload successful!\n\n    ")]),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"grey--text text--lighten-1"},"v-btn",o,!1),n),[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-playlist-plus")]),t._v("\n          add food\n        ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[t._v("吃饭饭")])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"myForm"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Breakfast*",required:""},model:{value:t.breakfast,callback:function(e){t.breakfast=e},expression:"breakfast"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Lunch*",required:""},model:{value:t.lunch,callback:function(e){t.lunch=e},expression:"lunch"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Dinner*",required:""},model:{value:t.dinner,callback:function(e){t.dinner=e},expression:"dinner"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{items:["bad","normal","happy","excellent"],label:"Mood*",required:""},model:{value:t.mood,callback:function(e){t.mood=e},expression:"mood"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-menu",{ref:"menu",attrs:{transition:"scale-transition","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Select Data","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n            Close\n          ")]),t._v(" "),r("v-btn",{attrs:{loading:t.loading,color:"blue darken-1",text:""},on:{click:t.submitData}},[t._v("\n            Save\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:h.a,VContainer:x.a,VDatePicker:k.a,VDialog:y.a,VForm:C.a,VIcon:V.a,VMenu:O.a,VRow:w.a,VSelect:j.a,VSnackbar:D.a,VSpacer:S.a,VTextField:P.a})},416:function(t,e,r){"use strict";r(398)},417:function(t,e,r){var n=r(18)(!1);n.push([t.i,".v-chip.normal{background-color:rgba(0,251,255,.982)!important;color:#000}.v-chip.happy{background:#40ff00!important;color:#000}.v-chip.bad{background:#ff0!important;color:#000}.v-chip.excellent{background:red!important;color:#000}.borderleft.normal{border-left:4px solid rgba(0,251,255,.982)}.borderleft.happy{border-left:4px solid #40ff00}.borderleft.bad{border-left:4px solid #ff0}.borderleft.excellent{border-left:4px solid red}",""]),t.exports=n},436:function(t,e,r){"use strict";r.r(e);r(8),r(9),r(12),r(13),r(14);var n=r(2);r(10);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={components:{addFood:r(399).default},props:{},created:function(){var t=this;this.$fire.firestore.collection("project").onSnapshot((function(e){var r=e.docChanges();console.log(r),r.forEach((function(e){"added"===e.type&&t.foods.push(l(l({},e.doc.data()),{},{id:e.doc.id}))}))}))},data:function(){return{foods:[]}}},d=(r(416),r(52)),v=r(65),f=r.n(v),m=r(424),_=r(430),h=r(497),x=r(390),k=r(375),y=r(500),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center align-center justify-space-around mt-5"},[r("h1",{staticClass:"float-left mt-n1 grey--text"},[t._v("Daily Meal")]),t._v(" "),r("v-container",[r("addFood",{staticClass:"float-right"})],1),t._v(" "),r("v-card",{staticClass:"grey darken-4 mt-5 borderleft"},t._l(t.foods,(function(e,n){return r("v-container",{key:n,attrs:{borderleft:""}},[r("v-row",{class:"borderleft "+e.mood},[r("v-col",[r("div",{staticClass:"grey--text text-caption"},[t._v("Breakfast")]),t._v(" "),r("div",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(e.breakfast))])]),t._v(" "),r("v-col",[r("div",{staticClass:"grey--text text-caption"},[t._v("Lunch")]),t._v(" "),r("div",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(e.lunch))])]),t._v(" "),r("v-col",[r("div",{staticClass:"grey--text text-caption"},[t._v("Dinner")]),t._v(" "),r("div",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(e.dinner))])]),t._v(" "),r("v-col",[r("div",{staticClass:"grey--text text-caption"},[t._v("Mood")]),t._v(" "),r("div",{staticClass:"text--lighten-1"},[r("v-chip",{class:e.mood,attrs:{small:""}},[t._v(t._s(e.mood))])],1)]),t._v(" "),r("v-col",[r("div",{staticClass:"grey--text text-caption"},[t._v("Data")]),t._v(" "),r("div",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(e.date))])])],1),t._v(" "),r("v-divider",{staticClass:"mt-3 mb-n2"})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCard:m.a,VChip:_.a,VCol:h.a,VContainer:x.a,VDivider:k.a,VRow:y.a})},508:function(t,e,r){"use strict";r.r(e);var n={components:{dietList:r(436).default}},o=r(52),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("dietList")}),[],!1,null,null,null);e.default=component.exports}}]);
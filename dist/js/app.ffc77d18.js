(function(t){function e(e){for(var n,o,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e74":function(t){t.exports=JSON.parse('[{"id":1,"name":"東京スカイツリー","address":"東京都墨田区押上１丁目１−２","lat":35.710067,"lng":139.8085},{"id":2,"name":"東京タワー","address":"東京都港区芝公園４丁目２−８","lat":35.65858,"lng":139.743244}]')},"452c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("Google Maps API Demo")]),a("b-navbar-nav",t._l(t.apiList,(function(e){return a("b-nav-item-dropdown",{key:e.name,attrs:{apiList:t.apiList,text:e.name}},t._l(e.list,(function(n){return a("b-dropdown-item",{key:n.key,attrs:{api:e.list,href:"#"}},[t._v(t._s(n.name))])})),1)})),1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],attrs:{right:""}},[a("b-icon",{attrs:{icon:"layout-sidebar-inset","aria-label":"Toggle Left Sidebar"}})],1),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{right:""}},[a("b-icon",{attrs:{icon:"layout-sidebar-inset-reverse","aria-label":"Toggle Left Sidebar"}})],1)],1)],1)],1),a("b-sidebar",{attrs:{id:"sidebar-1",title:"Sidebar","z-index":"1",visible:"","no-header":"",shadow:""}},[a("h4",{staticClass:"px-3 py-2",attrs:{id:"sidebar-no-header-title"}},[t._v("Custom header sidebar")]),a("div",{staticClass:"px-3 py-2"},[a("b-card",{attrs:{"header-bg-variant":"primary","header-text-variant":"white","no-body":""}},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],attrs:{href:"#add-body"},on:{click:function(t){t.preventDefault()}}},[a("b-card-header",{attrs:{"header-bg-variant":"primary","header-text-variant":"white"}},[t._v(" 新規作成 ")])],1),a("b-collapse",{attrs:{id:"add-body"}},[a("b-card-body",[a("AddToggleButton")],1)],1)],1),a("b-list-group-item",[t._v("新規追加")]),a("b-list-group-item",[t._v("編集")]),a("b-list-group-item",[t._v("削除")]),a("b-list-group-item",[t._v("検索")])],1)]),a("b-sidebar",{attrs:{id:"sidebar-right",title:"Sidebar","z-index":"1",visible:"","no-header":"",right:"",shadow:""}},[a("PoiList")],1),a("Map")],1)},i=[],o=(a("96cf"),a("1da1")),s=a("f464"),l=a.n(s),u="AIzaSyDXxld2WqZDKvaRE-QBd_wdHThk1arProk",c={icon:{fillColor:"#FF0000",fillOpacity:.8,scale:16,strokeColor:"#FF0000",strokeWeight:1}},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button-group",{attrs:{size:"sm"}},t._l(t.buttons,(function(e,n){return a("b-button",{key:n,attrs:{pressed:e.state,variant:"primary"},on:{"update:pressed":function(a){return t.$set(e,"state",a)},click:function(e){return t.change(n)}}},[a("b-icon",{attrs:{icon:e.caption,"aria-label":"Help"}})],1)})),1)],1)},p=[],g=(a("4160"),a("159b"),{data:function(){return{myToggle:!1,buttons:[{caption:"hand-index",state:!0},{caption:"geo-alt",state:!1},{caption:"pentagon",state:!1},{caption:"slash",state:!1}]}},computed:{modes:function(){return this.$store.state.google?[this.$store.state.google.maps.drawing.OverlayType.DEFAULT,this.$store.state.google.maps.drawing.OverlayType.MARKER,this.$store.state.google.maps.drawing.OverlayType.POLYGON,this.$store.state.google.maps.drawing.OverlayType.POLYLINE]:[]}},methods:{change:function(t){this.buttons.forEach((function(e,a){return e.state=a===t})),this.$store.commit("changeDrawingMode",this.modes[t])}}}),f=g,b=a("2877"),m=Object(b["a"])(f,d,p,!1,null,null,null),h=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"googleMap",staticClass:"map"})])},y=[],w=(a("d81d"),a("5530")),_=a("2f62"),M={name:"Map",data:function(){return{map:null}},computed:Object(w["a"])(Object(w["a"])({},Object(_["b"])(["google"])),{},{google:function(){return this.$store.state.google},mapConfig:function(){return this.$store.state.mapConfig},pois:function(){return this.$store.state.pois},drawingManager:function(){return this.$store.state.drawingManager}}),mounted:function(){var t=this;this.$store.watch((function(t,e){return e.getGoogle}),(function(e){null!==e&&t.initializeMap()}))},methods:{initializeMap:function(){var t=this,e=this.$refs.googleMap;console.log(this.mapConfig),this.map=new this.google.maps.Map(e,this.mapConfig),this.$store.commit("setDrawingManager",new this.google.maps.drawing.DrawingManager({drawingControl:!1})),this.drawingManager.setMap(this.map),this.pois.forEach((function(e){var a=new t.google.maps.Marker(Object(w["a"])({map:t.map,position:new t.google.maps.LatLng(e.lat,e.lng),label:{text:String(e.id),color:"#FFFFFF",fontSize:"20px"}},c));a.setMap(t.map)}))}}},O=M,x=(a("7c65"),Object(b["a"])(O,v,y,!1,null,"7c81a3d5",null)),k=x.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"px-3 py-2",attrs:{id:"sidebar-no-header-title"}},[t._v("Custom header sidebar")]),a("div",{staticClass:"px-3 py-2"},[a("b-list-group",[t._l(t.pois,(function(e){return[a("b-list-group-item",{key:e.id},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[t._v(" "+t._s(e.name)+" "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v(t._s(e.id))])],1),a("p",{staticClass:"mb-1"},[t._v(" "+t._s(e.address)+" ")])])]}))],2)],1)])},j=[],C={name:"Map",props:{},data:function(){return{google:null,map:null}},computed:{pois:function(){return this.$store.state.pois}},mounted:function(){},methods:{}},L=C,S=Object(b["a"])(L,$,j,!1,null,"18dbc8ec",null),T=S.exports,P={name:"App",components:{AddToggleButton:h,Map:k,PoiList:T},data:function(){return{apiList:{map:{name:"マップ",list:[{key:"pin",name:"ピンの表示"},{key:"polygon",name:"ポリゴンの表示"},{key:"style",name:"地図切り替え"}]},route:{name:"ルート",list:[{key:"search",name:"ルート検索"}]},place:{name:"プレイス",list:[{key:"search",name:"場所の検索"},{key:"geocoding",name:"ジオコーディング"}]}}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t.$store,e.next=3,l()({apiKey:u,libraries:["drawing"]});case 3:e.t1=e.sent,e.t0.dispatch.call(e.t0,"loadGoogleMapsApi",e.t1);case 5:case"end":return e.stop()}}),e)})))()}},D=P,F=(a("d7e3"),a("b0a0"),Object(b["a"])(D,r,i,!1,null,"2d385294",null)),E=F.exports,A=a("0e74");n["default"].use(_["a"]);var z=new _["a"].Store({state:{google:null,drawingManager:null,mapConfig:{center:{lat:35.68944,lng:139.69167},zoom:10},pois:function(){return A}()},getters:{getGoogle:function(t){return t.google}},mutations:{setGoogle:function(t,e){t.google=e},setDrawingManager:function(t,e){t.drawingManager=e},changeDrawingMode:function(t,e){t.drawingManager.setDrawingMode(e)}},actions:{loadGoogleMapsApi:function(t,e){var a=t.commit;a("setGoogle",e)}},modules:{}}),G=a("5f5b"),N=a("b1e0");a("f9e3"),a("2dd8");n["default"].config.productionTip=!0,n["default"].use(G["a"]),n["default"].use(N["a"]),new n["default"]({store:z,render:function(t){return t(E)}}).$mount("#app")},"7a87":function(t,e,a){},"7c65":function(t,e,a){"use strict";a("7a87")},b0a0:function(t,e,a){"use strict";a("452c")},d7e3:function(t,e,a){"use strict";a("ddc1")},ddc1:function(t,e,a){}});
//# sourceMappingURL=app.ffc77d18.js.map
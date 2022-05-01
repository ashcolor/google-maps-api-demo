import{_ as b,o as u,c as _,a as B,d as v,u as g,b as h,e as s,t as f,r as x,F as $,f as I,I as k,g as m,n as y,h as E,w as S,v as w,T as P,i as D,j as C,p as M,k as W}from"./entry-6cb434f0.mjs";const V={},j={class:"border-b border-slate-100"},L=B('<div class="navbar bg-base-100 shadow"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl">Google Maps API\u30C7\u30E2</a></div><div class="flex-none"><a href="https://github.com/ashcolor/google-maps-api-demo" target="_blank"><button class="btn btn-square btn-ghost"><i class="fa-brands fa-github fa-2x"></i></button></a></div></div>',1),O=[L];function A(i,n){return u(),_("header",j,O)}var z=b(V,[["render",A]]);const T=v({setup(i,{expose:n}){n();const t=g(),e=h(()=>t.center),a=h(()=>t.northEast),r=h(()=>t.southWest),o=h(()=>t.zoom),c={mapStore:t,center:e,northEast:a,southWest:r,zoom:o};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),N={class:"text-xs"},U=s("p",null,"position",-1);function H(i,n,t,e,a,r){return u(),_("div",N,[U,s("p",null,"Center:"+f(e.center),1),s("p",null,"Nouth East:"+f(e.northEast),1),s("p",null,"South West:"+f(e.southWest),1),s("p",null,"zoom:"+f(e.zoom),1)])}var R=b(T,[["render",H]]);const q=v({setup(i,{expose:n}){n();const t=x(0),e=g(),o={selectedMode:t,mapStore:e,modes:[{icon:"ph:cursor",type:null},{icon:"ph:map-pin",type:"Point"},{icon:"ph:polygon",type:"Polygon"},{icon:"ph:line-segments",type:"LineString"}],setDrawingMode:(c,l)=>{t.value=c,e.setDrawingMode(l)},Icon:k};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),G={class:"btn-group justify-center"},J=["onClick"];function K(i,n,t,e,a,r){return u(),_("div",G,[(u(),_($,null,I(e.modes,(o,c)=>s("button",{key:c,onClick:l=>e.setDrawingMode(c,o.type),class:y(["btn btn-outline w-12 p-0 bg-white",[c===e.selectedMode?"btn-active":""]])},[m(e.Icon,{icon:o.icon,width:"24",height:"24"},null,8,["icon"])],10,J)),64))])}var Q=b(q,[["render",K]]);const X=v({setup(i,{expose:n}){n();const t=g(),e=h(()=>t.activeFeature),a=t.showInfoWindow,r=t.hideInfoWindow,o=h(()=>{const d=[];return t.features.forEach(p=>{p.getProperty("visible")!==!1&&d.push(p)}),d}),l={mapStore:t,activeFeature:e,showInfoWindow:a,hideInfoWindow:r,features:o,clickedItem:d=>{d===e.value?r():a(d)}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),Y={class:"prose-sm bg-white w-auto h-auto m-0 p-1 divide-y divide-slate-200"},Z={class:"text-center font-semibold"},ee=["onClick"],te={class:"text-sm text-primary"},se={class:"text-xs text-black/50"};function oe(i,n,t,e,a,r){return u(),_("div",Y,[s("div",Z,f(e.features.length)+" \u4EF6\u306E\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u3059",1),(u(!0),_($,null,I(e.features,o=>(u(),_("div",{onClick:c=>e.clickedItem(o),class:y(["p-2 cursor-pointer",o===e.activeFeature?"bg-secondary":""])},[s("div",te,f(o.getId())+" "+f(o.properties.name),1),s("div",se,f(o.properties.address),1)],10,ee))),256))])}var ne=b(X,[["render",oe]]);const ae=v({setup(i,{expose:n}){n();const t=g(),e=h(()=>t.isEditing),a=t.finishSave,r=x(""),o=x(""),l={mapStore:t,isEditing:e,finishSave:a,name:r,address:o,clickSave:()=>{const d=t.map.data.getFeatureById(t.editingFeatureId);d.setProperty("name",r.value),d.setProperty("address",o.value),a()}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),re={class:"modal-box"},ce=s("h3",{class:"font-bold text-lg"},"\u65B0\u898F\u767B\u9332",-1),ie={class:"form-control"},le=s("label",{class:"label"},[s("span",{class:"label-text"},"\u5730\u540D")],-1),de={class:"form-control"},ue=s("label",{class:"label"},[s("span",{class:"label-text"},"\u4F4F\u6240")],-1);function _e(i,n,t,e,a,r){return u(),E(P,{to:"body"},[s("div",{class:y(["modal",[e.isEditing?"modal-open":""]])},[s("div",re,[ce,s("div",ie,[le,S(s("input",{type:"text",placeholder:"\u5730\u540D",class:"input input-bordered","onUpdate:modelValue":n[0]||(n[0]=o=>e.name=o)},null,512),[[w,e.name]])]),s("div",de,[ue,S(s("input",{type:"text",placeholder:"\u4F4F\u6240",class:"input input-bordered","onUpdate:modelValue":n[1]||(n[1]=o=>e.address=o)},null,512),[[w,e.address]])]),s("div",{class:"modal-action"},[s("label",{for:"my-modal",class:"btn",onClick:e.clickSave},"\u4FDD\u5B58")])])],2)])}var pe=b(ae,[["render",_e]]);const he=v({setup(i,{expose:n}){n();const t=g(),e=h(()=>t.activeFeature),a=t.setInfoWindowContent,r=x(null),o=h(()=>(a(r),e.value===null?[]:D.getPropertiesFromFeatureObject(e.value))),c={mapStore:t,activeFeature:e,setInfoWindowContent:a,root:r,properties:o};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),fe={class:"hidden"},me={ref:"root"},be={class:"text-sm m-2"},ve={class:"text-xs text-black/50 m-2"};function ge(i,n,t,e,a,r){return u(),_("div",fe,[s("div",me,[s("p",be,f(e.properties.name),1),s("p",ve,f(e.properties.address),1)],512)])}var xe=b(he,[["render",ge]]);const Se=v({setup(i,{expose:n}){n();const t=g(),e=t.execCallbackAfterLoadMap;C(()=>{e(a)});const a=()=>{const o=document.getElementById("search-input"),c=new google.maps.places.SearchBox(o);t.map.addListener("bounds_changed",()=>{c.setBounds(t.map.getBounds())}),c.addListener("places_changed",()=>{const l=c.getPlaces();if(l.length==0)return;const d=new google.maps.LatLngBounds;l.forEach(p=>{!p.geometry||!p.geometry.location||(p.geometry.viewport?d.union(p.geometry.viewport):d.extend(p.geometry.location))}),t.map.fitBounds(d)})},r={mapStore:t,execCallbackAfterLoadMap:e,initAutocomplete:a};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),we={class:"form-control w-full max-w-xs"},$e=s("label",{class:"label"},[s("span",{class:"label-text"},"\u5730\u540D\u30FB\u99C5\u540D")],-1),ye=s("input",{id:"search-input",type:"text",placeholder:"\u5730\u540D\u30FB\u99C5\u540D\u3067\u63A2\u3059",class:"input input-bordered w-full max-w-xs"},null,-1),Fe=[$e,ye];function Ie(i,n,t,e,a,r){return u(),_("div",we,Fe)}var Ce=b(Se,[["render",Ie]]);const Be=v({setup(i,{expose:n}){n();const t=g(),e=h(()=>t.features),a=x(""),o={mapStore:t,features:e,searchWord:a,execSearch:()=>{e.value.forEach(c=>{let l=!1;Object.keys(c.properties).forEach(p=>{c.properties[p].toString().indexOf(a.value)!==-1&&(l=!0)}),t.map.data.getFeatureById(c.getId()).setProperty("visible",l)})}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),ke={class:"form-control w-full max-w-xs"},Ee=s("label",{class:"label"},[s("span",{class:"label-text"},"\u30D5\u30EA\u30FC\u30EF\u30FC\u30C9")],-1);function Pe(i,n,t,e,a,r){return u(),_("div",ke,[Ee,S(s("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>e.searchWord=o),onChange:e.execSearch,id:"search-input",type:"text",placeholder:"\u30D5\u30EA\u30FC\u30EF\u30FC\u30C9\u3067\u63A2\u3059",class:"input input-bordered w-full max-w-xs"},null,544),[[w,e.searchWord]])])}var De=b(Be,[["render",Pe]]);const Me=v({setup(i,{expose:n}){n(),C(()=>{g().initMap("map")});const t={TopHeaderVue:z,LogViewerVue:R,DrawingManagerSelect:Q,FeatureList:ne,RegisterModal:pe,InfoWindow:xe,PlaceSearchBox:Ce,FeatureSearchBox:De};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),F=i=>(M("data-v-077b5de3"),i=i(),W(),i),We={class:"w-full h-full"},Ve={class:"w-full h-full flex"},je={class:"prose flex-none w-72 p-4 bg-base-200"},Le={class:"w-fit mx-auto"},Oe=F(()=>s("div",{class:"divider"},null,-1)),Ae=F(()=>s("div",{class:"divider"},null,-1)),ze={class:"grow relative"},Te=F(()=>s("div",{id:"map",class:"w-full h-full"},null,-1)),Ne={class:"absolute z-10 bottom-10 left-2 bg-white bg-opacity-50"},Ue={class:"prose flex-none w-72 p-4 bg-base-200"};function He(i,n,t,e,a,r){return u(),_($,null,[m(e.TopHeaderVue),s("main",We,[s("div",Ve,[s("div",je,[s("div",Le,[m(e.DrawingManagerSelect),Oe,m(e.PlaceSearchBox),m(e.FeatureSearchBox),Ae])]),s("div",ze,[Te,s("div",Ne,[m(e.LogViewerVue)]),m(e.InfoWindow)]),s("div",Ue,[m(e.FeatureList)])])]),m(e.RegisterModal)],64)}var qe=b(Me,[["render",He],["__scopeId","data-v-077b5de3"]]);export{qe as default};

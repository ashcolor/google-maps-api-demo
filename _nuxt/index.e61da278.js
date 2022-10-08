import{a as S,o as u,b as _,e as I,f,h as b,i as h,j as e,t as m,u as d,r as x,F as y,k as C,l as v,I as k,m as $,c as E,w as g,v as w,T as D,p as M,q as B,s as W,x as L}from"./entry.34844afc.js";const P={},A={class:"border-b border-slate-100"},V=I('<div class="navbar bg-base-100 shadow"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl">Google Maps API\u30C7\u30E2</a></div><div class="flex-none"><a href="https://github.com/ashcolor/google-maps-api-demo" target="_blank"><button class="btn btn-square btn-ghost"><i class="fa-brands fa-github fa-2x"></i></button></a></div></div>',1),z=[V];function j(r,t){return u(),_("header",A,z)}const N=S(P,[["render",j]]),T={class:"text-xs"},U=e("p",null,"position",-1),O=f({__name:"LogViewer",setup(r){const t=b(),l=h(()=>t.center),i=h(()=>t.northEast),a=h(()=>t.southWest),s=h(()=>t.zoom);return(c,o)=>(u(),_("div",T,[U,e("p",null,"Center:"+m(d(l)),1),e("p",null,"Nouth East:"+m(d(i)),1),e("p",null,"South West:"+m(d(a)),1),e("p",null,"zoom:"+m(d(s)),1)]))}}),q={class:"btn-group justify-center"},G=["onClick"],H=f({__name:"DrawingManagerSelect",setup(r){const t=x(0),l=b(),i=[{icon:"ph:cursor",type:null},{icon:"ph:map-pin",type:"Point"},{icon:"ph:polygon",type:"Polygon"},{icon:"ph:line-segments",type:"LineString"}],a=(s,c)=>{t.value=s,l.setDrawingMode(c)};return(s,c)=>(u(),_("div",q,[(u(),_(y,null,C(i,(o,n)=>e("button",{key:n,onClick:p=>a(n,o.type),class:$(["btn btn-outline w-12 p-0 bg-white",[n===t.value?"btn-active":""]])},[v(d(k),{icon:o.icon,width:"24",height:"24"},null,8,["icon"])],10,G)),64))]))}}),R={class:"prose-sm bg-white w-auto h-auto m-0 p-1 divide-y divide-slate-200"},J={class:"text-center font-semibold"},K=["onClick"],Q={class:"text-sm text-primary"},X={class:"text-xs text-black/50"},Y=f({__name:"FeatureList",setup(r){const t=b(),l=h(()=>t.activeFeature),i=t.showInfoWindow,a=t.hideInfoWindow,s=h(()=>{const o=[];return t.features.forEach(n=>{n.getProperty("visible")!==!1&&o.push(n)}),o}),c=o=>{o===l.value?a():i(o)};return(o,n)=>(u(),_("div",R,[e("div",J,m(d(s).length)+" \u4EF6\u306E\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u3059",1),(u(!0),_(y,null,C(d(s),p=>(u(),_("div",{onClick:ke=>c(p),class:$(["p-2 cursor-pointer",p===d(l)?"bg-secondary":""])},[e("div",Q,m(p.getId())+" "+m(p.properties.name),1),e("div",X,m(p.properties.address),1)],10,K))),256))]))}}),Z={class:"modal-box"},ee=e("h3",{class:"font-bold text-lg"},"\u65B0\u898F\u767B\u9332",-1),te={class:"form-control"},se=e("label",{class:"label"},[e("span",{class:"label-text"},"\u5730\u540D")],-1),oe={class:"form-control"},ne=e("label",{class:"label"},[e("span",{class:"label-text"},"\u4F4F\u6240")],-1),ae=f({__name:"RegisterModal",setup(r){const t=b(),l=h(()=>t.isEditing),i=t.finishSave,a=x(""),s=x(""),c=()=>{const o=t.map.data.getFeatureById(t.editingFeatureId);o.setProperty("name",a.value),o.setProperty("address",s.value),i()};return(o,n)=>(u(),E(D,{to:"body"},[e("div",{class:$(["modal",[d(l)?"modal-open":""]])},[e("div",Z,[ee,e("div",te,[se,g(e("input",{type:"text",placeholder:"\u5730\u540D",class:"input input-bordered","onUpdate:modelValue":n[0]||(n[0]=p=>a.value=p)},null,512),[[w,a.value]])]),e("div",oe,[ne,g(e("input",{type:"text",placeholder:"\u4F4F\u6240",class:"input input-bordered","onUpdate:modelValue":n[1]||(n[1]=p=>s.value=p)},null,512),[[w,s.value]])]),e("div",{class:"modal-action"},[e("label",{for:"my-modal",class:"btn",onClick:c},"\u4FDD\u5B58")])])],2)]))}}),ce={class:"hidden"},le={class:"text-sm m-2"},ie={class:"text-xs text-black/50 m-2"},re=f({__name:"InfoWindow",setup(r){const t=b(),l=h(()=>t.activeFeature),i=t.setInfoWindowContent,a=x(null),s=h(()=>(i(a),l.value===null?[]:M.getPropertiesFromFeatureObject(l.value)));return(c,o)=>(u(),_("div",ce,[e("div",{ref_key:"root",ref:a},[e("p",le,m(d(s).name),1),e("p",ie,m(d(s).address),1)],512)]))}}),ue={class:"form-control w-full max-w-xs"},de=e("label",{class:"label"},[e("span",{class:"label-text"},"\u5730\u540D\u30FB\u99C5\u540D")],-1),_e=e("input",{id:"search-input",type:"text",placeholder:"\u5730\u540D\u30FB\u99C5\u540D\u3067\u63A2\u3059",class:"input input-bordered w-full max-w-xs"},null,-1),pe=[de,_e],he=f({__name:"PlaceSearchBox",setup(r){const t=b(),l=t.execCallbackAfterLoadMap;B(()=>{l(i)});const i=()=>{const a=document.getElementById("search-input"),s=new google.maps.places.SearchBox(a);t.map.addListener("bounds_changed",()=>{s.setBounds(t.map.getBounds())}),s.addListener("places_changed",()=>{const c=s.getPlaces();if(c.length==0)return;const o=new google.maps.LatLngBounds;c.forEach(n=>{!n.geometry||!n.geometry.location||(n.geometry.viewport?o.union(n.geometry.viewport):o.extend(n.geometry.location))}),t.map.fitBounds(o)})};return(a,s)=>(u(),_("div",ue,pe))}}),me={class:"form-control w-full max-w-xs"},ve=e("label",{class:"label"},[e("span",{class:"label-text"},"\u30D5\u30EA\u30FC\u30EF\u30FC\u30C9")],-1),fe=f({__name:"FeatureSearchBox",setup(r){const t=b(),l=h(()=>t.features),i=x(""),a=()=>{l.value.forEach(s=>{let c=!1;Object.keys(s.properties).forEach(n=>{s.properties[n].toString().indexOf(i.value)!==-1&&(c=!0)}),t.map.data.getFeatureById(s.getId()).setProperty("visible",c)})};return(s,c)=>(u(),_("div",me,[ve,g(e("input",{"onUpdate:modelValue":c[0]||(c[0]=o=>i.value=o),onChange:a,id:"search-input",type:"text",placeholder:"\u30D5\u30EA\u30FC\u30EF\u30FC\u30C9\u3067\u63A2\u3059",class:"input input-bordered w-full max-w-xs"},null,544),[[w,i.value]])]))}}),F=r=>(W("data-v-308df5c7"),r=r(),L(),r),be={class:"w-full h-full"},xe={class:"w-full h-full flex"},ge={class:"prose flex-none w-72 p-4 bg-base-200"},we={class:"w-fit mx-auto"},ye=F(()=>e("div",{class:"divider"},null,-1)),$e=F(()=>e("div",{class:"divider"},null,-1)),Fe={class:"grow relative"},Se=F(()=>e("div",{id:"map",class:"w-full h-full"},null,-1)),Ce={class:"absolute z-10 bottom-10 left-2 bg-white bg-opacity-50"},Be={class:"prose flex-none w-72 p-4 bg-base-200"},Ie=f({__name:"index",setup(r){return B(()=>{b().initMap("map")}),(t,l)=>(u(),_(y,null,[v(N),e("main",be,[e("div",xe,[e("div",ge,[e("div",we,[v(H),ye,v(he),v(fe),$e])]),e("div",Fe,[Se,e("div",Ce,[v(O)]),v(re)]),e("div",Be,[v(Y)])])]),v(ae)],64))}});const De=S(Ie,[["__scopeId","data-v-308df5c7"]]);export{De as default};

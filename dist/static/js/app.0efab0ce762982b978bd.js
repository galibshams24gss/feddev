webpackJsonp([1],{"7zck":function(e,t){},EV3G:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("7+uW"),s=(r("j1ja"),r("MU8w"),r("hKoQ")),a=r.n(s),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{dark:""}},[t("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[t("v-flex",{attrs:{xs12:"",id:"prlx"}},[t("v-layout",{attrs:{"align-center":"",column:""}},[t("main",[t("router-view")],1)])],1)],1)],1)},staticRenderFns:[]};var n=r("VU/8")({data:function(){return{}},name:"App"},o,!1,function(e){r("EV3G")},"data-v-5513c9ec",null).exports,d=r("NYxO"),l={namespaced:!0,state:{properties:[{ID:"01",Street_Number:"36",Street:"Wyndham Street",Suburb:"Alexandria",State:"NSW",PostCode:"2015",Unit_Number:"01",Street_Type:"Residential",Property_Type:"Apartment"},{ID:"02",Street_Number:"18",Street:"Raglan Street",Suburb:"Redfern",State:"NSW",PostCode:"2016",Unit_Number:"02",Street_Type:"Residential",Property_Type:"Apartment"},{ID:"03",Street_Number:"180",Street:"York Street",Suburb:"Central",State:"NSW",PostCode:"2020",Unit_Number:"07",Street_Type:"Residential",Property_Type:"House"},{ID:"04",Street_Number:"47",Street:"Taylor Street",Suburb:"Yagoona",State:"NSW",PostCode:"2198",Unit_Number:"11",Street_Type:"Residential",Property_Type:"House"},{ID:"05",Street_Number:"29",Street:"Pitt Street",Suburb:"Chatswood",State:"NSW",PostCode:"2100",Unit_Number:"12",Street_Type:"Residential",Property_Type:"Apartment"},{ID:"06",Street_Number:"77",Street:"George Street",Suburb:"Brookevale",State:"NSW",PostCode:"2090",Unit_Number:"08",Street_Type:"Residential",Property_Type:"House"},{ID:"07",Street_Number:"25",Street:"Elizabeth Street",Suburb:"St Peters",State:"NSW",PostCode:"2020",Unit_Number:"10",Street_Type:"Residential",Property_Type:"Apartment"},{ID:"08",Street_Number:"85",Street:"Yangoora Street",Suburb:"Lakemba",State:"NSW",PostCode:"2196",Unit_Number:"03",Street_Type:"Residential",Property_Type:"House"},{ID:"09",Street_Number:"25",Street:"Nenagh Street",Suburb:"North Manly",State:"NSW",PostCode:"2100",Unit_Number:"04",Street_Type:"Residential",Property_Type:"House"}]},getters:{properties:function(e){return e.properties}},mutations:{fetchProperties:function(e,t){e.properties=t}},actions:{}};i.default.use(d.a);var u=new d.a.Store({modules:{fed:l},state:{},getters:{},mutations:{},actions:{}}),p=r("/ocq"),m={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"text-xs-center mt-5"},[this._v("Session Lost")])},staticRenderFns:[]},c=r("VU/8")({},m,!1,null,null,null).exports,_=r("woOf"),S=r.n(_),b={data:function(){return{search:"",pagination:{rowsPerPage:5},dialog:!1,headers:[{text:"ID",value:"ID"},{text:"Street_Number",value:"Street_Number"},{text:"Street",value:"Street"},{text:"Suburb",value:"Suburb"},{text:"State",value:"State"},{text:"PostCode",value:"PostCode"},{text:"Unit_Number",value:"Unit_Number"},{text:"Street_Type",value:"Street_Type"},{text:"Property_Type",value:"Property_Type"},{text:"Actions",value:"id",sortable:!1}],editedIndex:-1,editedItem:{ID:"",Street_Number:"",Street:"",Suburb:"",State:"",PostCode:"",Unit_Number:"",Street_Type:"",Property_Type:""},initialItem:{ID:"",Street_Number:"",Street:"",Suburb:"",State:"",PostCode:"",Unit_Number:"",Street_Type:"",Property_Type:""}}},computed:{properties:function(){return this.$store.getters["fed/properties"]},addItem:function(){return-1===this.editedIndex?"New Item":"Edit Item"},pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}},watch:{dialog:function(e){e||this.close()}},created:function(){},methods:{edit:function(e){this.dialog=!0,this.editedIndex=this.properties.indexOf(e),this.editedItem=this.properties[this.properties.indexOf(e)],this.editedItem.ID=this.properties[this.properties.indexOf(e)].ID,this.editedItem.Street_Number=this.properties[this.properties.indexOf(e)].Street_Number,this.editedItem.Street=this.properties[this.properties.indexOf(e)].Street,this.editedItem.Suburb=this.properties[this.properties.indexOf(e)].Suburb,this.editedItem.State=this.properties[this.properties.indexOf(e)].State,this.editedItem.PostCode=this.properties[this.properties.indexOf(e)].PostCode,this.editedItem.Unit_Number=this.properties[this.properties.indexOf(e)].Unit_Number,this.editedItem.Street_Type=this.properties[this.properties.indexOf(e)].Street_Type,this.editedItem.Property_Type=this.properties[this.properties.indexOf(e)].Property_Type},deleteSelected:function(e){var t=this.properties.indexOf(e);confirm("Please confirm to delete")&&this.properties.splice(t,1),axios.delete(this.properties+e.id).then(function(e){})},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=S()({},e.initialItem),e.editedIndex=-1},300)},saveChanges:function(){var e=this;this.editedIndex>-1?(axios.put(this.properties+this.editedItem.ID,{Street_Number:this.editedItem.Street_Number,Street:this.editedItem.Street,Suburb:this.editedItem.Suburb,State:this.editedItem.State,PostCode:this.editedItem.PostCode,Unit_Number:this.editedItem.Unit_Number,Street_Type:this.editedItem.Street_Type,Property_Type:this.editedItem.Property_Type}).then(function(t){e.initialItem=t.data}),this.initialItem=this.editedItem):(axios.post(this.properties,{Street_Number:this.editedItem.Street_Number,Street:this.editedItem.Street,Suburb:this.editedItem.Suburb,State:this.editedItem.State,PostCode:this.editedItem.PostCode,Unit_Number:this.editedItem.Unit_Number,Street_Type:this.editedItem.Street_Type,Property_Type:this.editedItem.Property_Type}).then(function(e){}),this.properties.push(this.editedItem)),this.close()}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"teal accent-4",dark:""},slot:"activator"},[e._v("Add New")]),e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.addItem))])]),e._v(" "),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"ID"},model:{value:e.editedItem.ID,callback:function(t){e.$set(e.editedItem,"ID",t)},expression:"editedItem.ID"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Street_Number"},model:{value:e.editedItem.Street_Number,callback:function(t){e.$set(e.editedItem,"Street_Number",t)},expression:"editedItem.Street_Number"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Street"},model:{value:e.editedItem.Street,callback:function(t){e.$set(e.editedItem,"Street",t)},expression:"editedItem.Street"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Suburb"},model:{value:e.editedItem.Suburb,callback:function(t){e.$set(e.editedItem,"Suburb",t)},expression:"editedItem.Suburb"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"State"},model:{value:e.editedItem.State,callback:function(t){e.$set(e.editedItem,"State",t)},expression:"editedItem.State"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Unit_Number"},model:{value:e.editedItem.Unit_Number,callback:function(t){e.$set(e.editedItem,"Unit_Number",t)},expression:"editedItem.Unit_Number"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Street_Type"},model:{value:e.editedItem.Street_Type,callback:function(t){e.$set(e.editedItem,"Street_Type",t)},expression:"editedItem.Street_Type"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Property_Type"},model:{value:e.editedItem.Property_Type,callback:function(t){e.$set(e.editedItem,"Property_Type",t)},expression:"editedItem.Property_Type"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"error",flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{color:"success",flat:""},nativeOn:{click:function(t){return e.saveChanges(t)}}},[e._v("Save")])],1)],1)],1),e._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search Here","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.properties,search:e.search,pagination:e.pagination,"hide-actions":""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.ID))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Street_Number))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Street))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Suburb))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.State))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.PostCode))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Unit_Number))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Street_Type))]),e._v(" "),r("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Property_Type))]),e._v(" "),r("td",{staticClass:"justify-center layout px-0"},[r("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(r){e.edit(t.item)}}},[r("v-icon",{attrs:{color:"warning"}},[e._v("edit")])],1),e._v(" "),r("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(r){e.deleteSelected(t.item)}}},[r("v-icon",{attrs:{color:"error"}},[e._v("delete")])],1)],1)]}}])},[r("v-alert",{staticClass:"text-sm-left",attrs:{slot:"no-results",value:!0,color:"error"},slot:"no-results"},[e._v('\n            Sorry, Search result for "'+e._s(e.search)+'" has no results!\n    ')])],1),e._v(" "),r("div",{staticClass:"text-xs-center pt-2"},[r("v-pagination",{attrs:{length:e.pages},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1)],1)},staticRenderFns:[]},h=r("VU/8")(b,v,!1,null,null,null).exports;i.default.use(p.a);var x=[{path:"/",name:"Home",component:h},{path:"/notfound",name:"NotFound",component:c},{path:"*",name:"All",component:h}],f=new p.a({mode:"history",routes:x}),I=r("3EgV"),y=r.n(I),N=(r("7zck"),r("mtWM")),P=r.n(N);a.a.Promise,a.a.polyfill(),i.default.use(y.a),i.default.use(d.a),window.axios=P.a,i.default.config.productionTip=!1,new i.default({el:"#app",router:f,store:u,components:{App:n},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.0efab0ce762982b978bd.js.map
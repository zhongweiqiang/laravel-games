webpackJsonp([45],{CiFk:function(t,e){},FrRF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=a("bOdI"),s=a.n(r),o=a("AaXs"),l=a("rxb8"),n=a("MArX"),c=a("CN/e"),d=a("/JS7"),m=a("xSRQ"),p=a("4vAe"),u={props:{onAdd:{type:Function,default:null}},components:{SaleAdd:p.default,StartTime:c.default,EndTime:d.default,MyModal:m.default},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),games:[],prices:[],users:[]}},created:function(){this.getUserList(),this.getGameList()},methods:(i={handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,a){console.log(a),t||(console.log("Received values of form: ",a),e.$emit("search",a))})},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},handleGameChange:function(t){console.log("selected "+t),t||this.form.setFieldsValue({price_id:void 0}),this.getPriceList(t)}},s()(i,"filterOption",function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0}),s()(i,"getGameList",function(){var t=this;Object(o.e)().then(function(e){t.games=e.data})}),s()(i,"getPriceList",function(t){var e=this;Object(l.g)({game_id:t}).then(function(t){e.prices=t.data})}),s()(i,"getUserList",function(t){var e=this;Object(n.g)().then(function(t){e.users=t.data})}),i)},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-row",[t.hasPermission("sale.add")?a("a-col",{staticStyle:{height:"58px","margin-left":"10px"},attrs:{xs:20,sm:16,md:10,lg:3,xl:3}},[a("a-row",[a("a-col",{staticStyle:{"margin-top":"10px"}},[a("sale-add",{attrs:{"on-add":t.onAdd}})],1),t._v(" "),a("a-col",[a("my-modal")],1)],1)],1):t._e(),t._v(" "),a("a-col",{attrs:{span:20}},[a("a-form",{attrs:{form:t.form,layout:"inline"},on:{submit:t.handleSubmit}},[a("a-row",{staticStyle:{height:"30px","margin-left":"10px"}},[a("a-col",{attrs:{span:22}},[a("a-row",[a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:6,xs:20,sm:16,md:10,lg:6,xl:6}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["game_id"],expression:"['game_id']"}],staticStyle:{width:"160px"},attrs:{showSearch:"",placeholder:"选择游戏",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"},on:{change:t.handleGameChange}},t._l(t.games,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:6,xs:20,sm:16,md:10,lg:6,xl:6}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status"],expression:"['status']"}],staticStyle:{width:"160px"},attrs:{showSearch:"",placeholder:"订单状态",allowClear:"",size:"small"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("正常挂单")]),t._v(" "),a("a-select-option",{attrs:{value:"2"}},[t._v("部分交易")])],1)],1)],1)],1),t._v(" "),a("a-row",{style:{marginTop:"10px"}},[a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:5,xs:20,sm:16,md:10,lg:6,xl:6}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["price_id"],expression:"['price_id']"}],staticStyle:{width:"160px"},attrs:{showSearch:"",placeholder:"选择面值",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"}},t._l(t.prices,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.gold))])}),1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:6,xs:20,sm:16,md:10,lg:6,xl:5}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_id"],expression:"['user_id']"}],staticStyle:{width:"160px"},attrs:{showSearch:"",placeholder:"选择用户",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"}},t._l(t.users,function(e){return a("a-select-option",{key:e.user_id,attrs:{value:e.user_id}},[t._v(t._s(e.nickname))])}),1)],1)],1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},style:{display:"flex",justifyItems:"center",alignItems:"center",height:"58px"},attrs:{span:6,xs:20,sm:16,md:10,lg:1,xl:1,offset:1}},[a("a-form-item",[a("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[t._v("搜索")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(u,f,!1,function(t){a("CiFk")},"data-v-bdaabae6",null);e.default=h.exports}});
//# sourceMappingURL=45.46d595a0b4eebe96cb1e.js.map
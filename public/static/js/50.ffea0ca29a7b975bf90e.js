webpackJsonp([50],{avFX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=a("bOdI"),i=a.n(o),s=a("AaXs"),n=a("rxb8"),l=a("MArX"),c=a("7bjY"),m=a("SaGP"),d={props:{onAdd:{type:Function,default:null}},components:{StartTime:c.default,EndTime:m.default},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),games:[],prices:[],users:[]}},created:function(){this.getUserList(),this.getGameList()},methods:(r={handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,a){console.log(a),t||(console.log("Received values of form: ",a),e.$emit("search",a))})},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},handleGameChange:function(t){console.log("selected "+t),t||this.form.setFieldsValue({price_id:void 0}),this.getPriceList(t)}},i()(r,"filterOption",function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0}),i()(r,"getGameList",function(){var t=this;Object(s.e)().then(function(e){t.games=e.data})}),i()(r,"getPriceList",function(t){var e=this;Object(n.g)({game_id:t}).then(function(t){e.prices=t.data})}),i()(r,"getUserList",function(t){var e=this;Object(l.g)().then(function(t){e.users=t.data})}),r)},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",[a("a-col",{attrs:{span:14}},[a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-col",{attrs:{span:22}},[a("a-row",{staticStyle:{height:"30px","margin-left":"10px"}},[a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:8}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["game_id"],expression:"['game_id']"}],attrs:{showSearch:"",placeholder:"选择游戏",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"},on:{change:t.handleGameChange}},t._l(t.games,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:8}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status"],expression:"['status']"}],attrs:{showSearch:"",placeholder:"订单状态",allowClear:"",size:"small"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("正常挂单")]),t._v(" "),a("a-select-option",{attrs:{value:"2"}},[t._v("部分交易")]),t._v(" "),a("a-select-option",{attrs:{value:"3"}},[t._v("交易完成")]),t._v(" "),a("a-select-option",{attrs:{value:"4"}},[t._v("订单下架")])],1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:8}},[a("a-form-item",[a("start-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["start_time"],expression:"['start_time']"}]})],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:8}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["price_id"],expression:"['price_id']"}],attrs:{showSearch:"",placeholder:"选择面值",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"}},t._l(t.prices,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.gold))])}),1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:8}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["order_num"],expression:"['order_num']"}],attrs:{placeholder:"请输入定单号",size:"small",allowClear:""}})],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:8}},[a("a-form-item",[a("end-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["end_time"],expression:"['end_time']"}]})],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:6}})],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"24px"},attrs:{span:2}},[a("a-form-item",[a("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[t._v("搜索")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(d,p,!1,function(t){a("e1TD")},"data-v-58331cf8",null);e.default=u.exports},e1TD:function(t,e){}});
//# sourceMappingURL=50.ffea0ca29a7b975bf90e.js.map
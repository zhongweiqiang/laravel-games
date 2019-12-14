webpackJsonp([39],{Gnkd:function(t,e,a){"use strict";e.b=function(t){return Object(r.a)({url:"/v1/stock/statistic",method:"get",params:t})},e.a=function(t){return Object(r.a)({url:"/v1/stock/statistic_export",method:"get",params:t,responseType:"blob"})};var r=a("vLgD")},W8al:function(t,e){},rtPm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("AaXs"),i=a("rxb8"),s=a("vMJZ"),o=a("Gnkd"),n=a("+xxY"),l=a("KlBG"),c=a("3UNf"),m={components:{StartTime:n.default,EndTime:l.default},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),games:[],prices:[],users:[]}},created:function(){this.getGameList(),this.getUserList("son")},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,a){t||(console.log("Received values of form: ",a),e.$emit("search",a))})},exportStatisticStock:function(){Object(o.a)(this.form.getFieldsValue()).then(function(t){console.log(t);c(t.data,"库存统计.xlsx")})},handleGameChange:function(t){console.log("selected "+t),t||this.form.setFieldsValue({price_id:void 0}),this.getPriceList(t)},handleTypeChange:function(t){this.form.setFieldsValue({user_id:void 0}),this.getUserList(t)},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},getGameList:function(){var t=this;Object(r.e)().then(function(e){t.games=e.data})},getPriceList:function(t){var e=this;Object(i.g)({game_id:t}).then(function(t){e.prices=t.data})},getUserList:function(t){var e=this;Object(s.p)({user_type:t}).then(function(t){e.users=t.data})},reset:function(){this.form.resetFields()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"z-index":"999"}},[a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-row",{staticStyle:{height:"60px","margin-left":"10px"}},[a("a-col",{attrs:{span:24}},[a("a-row",[a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:20,sm:16,md:10,lg:8,xl:6}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["game_id"],expression:"['game_id']"}],attrs:{showSearch:"",placeholder:"选择游戏",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"},on:{change:t.handleGameChange}},t._l(t.games,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:20,sm:16,md:10,lg:8,xl:6}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["price_id"],expression:"['price_id']"}],attrs:{showSearch:"",placeholder:"选择面值",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"}},t._l(t.prices,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.gold))])}),1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:20,sm:16,md:10,lg:8,xl:6}},[a("a-form-item",[a("start-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["start_time"],expression:"['start_time']"}]})],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:20,sm:16,md:10,lg:8,xl:6}},[a("a-form-item",[a("end-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["end_time"],expression:"['end_time']"}]})],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:20,sm:16,md:10,lg:8,xl:6}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_type"],expression:"['user_type']"}],attrs:{showSearch:"",placeholder:"选择账户类型",allowClear:"",size:"small"},on:{change:t.handleTypeChange}},[a("a-select-option",{attrs:{value:"son"}},[t._v("子账户")]),t._v(" "),a("a-select-option",{attrs:{value:"user"}},[t._v("主账户")])],1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:20,sm:16,md:10,lg:8,xl:6}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_id"],expression:"['user_id']"}],attrs:{showSearch:"",placeholder:"选择用户",optionFilterProp:"children",filterOption:t.filterOption,allowClear:"",size:"small"}},t._l(t.users,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:10,sm:10,md:10,lg:3,xl:2}},[a("a-form-item",[a("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[t._v("搜索")])],1)],1),t._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:10,sm:10,md:10,lg:3,xl:2}},[t.hasPermission("statistic.export")?a("a-form-item",[a("a-button",{attrs:{size:"small",type:"primary"},on:{click:t.exportStatisticStock}},[t._v("导出")])],1):t._e()],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(m,d,!1,function(t){a("W8al")},"data-v-49f1eab8",null);e.default=p.exports}});
//# sourceMappingURL=39.ffb3949bfbfc9fbdd92a.js.map
webpackJsonp([13,44,69],{"1qaf":function(e,t){},BWAs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={components:{BuyUserTable:a("Zlcb").default},props:{id:{type:Number,default:null}},data:function(){return{visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(e){console.log(e),this.visible=!1}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:e.showModal}},[e._v("购买人")]),e._v(" "),a("a-modal",{attrs:{title:"购买详情",footer:null,width:"50%"},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("buy-user-table",{attrs:{id:e.id}})],1)],1)},staticRenderFns:[]},r=a("VU/8")(n,i,!1,null,null,null);t.default=r.exports},LrB0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a("bOdI"),r=a.n(i),o=a("AaXs"),s=a("rxb8"),l=a("MArX"),c=a("kxWF"),d=a("pjix"),u={props:{onAdd:{type:Function,default:null}},components:{StartTime:c.default,EndTime:d.default},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),games:[],prices:[],users:[]}},created:function(){this.getUserList(),this.getGameList()},methods:(n={handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){console.log(a),e||(console.log("Received values of form: ",a),t.$emit("search",a))})},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},handleGameChange:function(e){console.log("selected "+e),e||this.form.setFieldsValue({price_id:void 0}),this.getPriceList(e)}},r()(n,"filterOption",function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}),r()(n,"getGameList",function(){var e=this;Object(o.e)().then(function(t){e.games=t.data})}),r()(n,"getPriceList",function(e){var t=this;Object(s.g)({game_id:e}).then(function(e){t.prices=e.data})}),r()(n,"getUserList",function(e){var t=this;Object(l.g)().then(function(e){t.users=e.data})}),n)},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-row",[a("a-col",{attrs:{span:20}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticStyle:{"margin-left":"10px"}},[a("a-col",{attrs:{span:14}},[a("a-row",[a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:24,md:18,lg:12,xl:8}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["game_id"],expression:"['game_id']"}],attrs:{showSearch:"",placeholder:"选择游戏",optionFilterProp:"children",filterOption:e.filterOption,allowClear:"",size:"small"},on:{change:e.handleGameChange}},e._l(e.games,function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:24,md:18,lg:12,xl:8}},[a("a-form-item",[a("a-input",{attrs:{placeholder:"恭喜发财",size:"small",allowClear:""}})],1)],1),e._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:24,md:18,lg:12,xl:8}},[a("a-form-item",[a("start-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["start_time"],expression:"['start_time']"}]})],1)],1)],1),e._v(" "),a("a-row",{style:{marginTop:"10px"}},[a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:24,md:18,lg:12,xl:8}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["price_id"],expression:"['price_id']"}],attrs:{showSearch:"",placeholder:"选择面值",optionFilterProp:"children",filterOption:e.filterOption,allowClear:"",size:"small"}},e._l(e.prices,function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.gold))])}),1)],1)],1),e._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:24,md:18,lg:12,xl:8}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["order_num"],expression:"['order_num']"}],attrs:{placeholder:"请输入定单号",size:"small",allowClear:""}})],1)],1),e._v(" "),a("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:24,md:18,lg:12,xl:8}},[a("a-form-item",[a("end-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["end_time"],expression:"['end_time']"}]})],1)],1)],1)],1),e._v(" "),a("a-col",{style:{marginTop:"24px"},attrs:{xs:20,sm:16,md:10,lg:1,xl:1,offset:1}},[a("a-form-item",[a("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[e._v("搜索")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,m,!1,function(e){a("1qaf")},"data-v-bd0a2d8c",null);t.default=p.exports},PsBX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),r=a("DAs4"),o=a("BWAs"),s=a("LrB0"),l=[{title:"id",dataIndex:"id",sorter:!0,align:"center"},{title:"卖家账户",dataIndex:"user",align:"center"},{title:"游戏名称",dataIndex:"game",align:"center"},{title:"面值名称",dataIndex:"price",align:"center"},{title:"购买数量",dataIndex:"unit",align:"center"},{title:"订单单价",dataIndex:"unit_price",align:"center"},{title:"订单号",dataIndex:"order_num",align:"center"},{title:"购买时间",dataIndex:"created_at",align:"center"}],c={components:{BuyUserModal:o.default,OnSearch:s.default},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"normal_login"})},data:function(){return{data:[],pagination:{pageSize:this.$store.getters.pagesize},loading:!1,columns:l,selectedRowKeys:[],name:"",filters:{},search:{}}},mounted:function(){this.fetch({pageSize:this.pagination.pageSize,type:"all"}),console.log(this.config)},methods:{onSearch:function(e){this.search=e,this.fetch(i()({},e,{pageSize:this.pagination.pageSize,type:"all"}))},onUpdate:function(){this.fetch(i()({},this.getPagination(),this.search))},buy:function(){this.onUpdate()},getPagination:function(){return{pageSize:this.pagination.pageSize,page:this.pagination.current,sortField:this.pagination.sortField,sortOrder:this.pagination.sortOrder}},handleTableChange:function(e,t,a){var n=i()({},this.pagination);n.current=e.current,n.sortField=a.field,n.sortOrder=a.order,this.pagination=n,this.filters=t,this.fetch(i()({pageSize:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order},t,this.search))},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,Object(r.c)(t).then(function(t){console.log(t.data);var a=i()({},e.pagination),n=t.data;e.data=n.data,a.total=n.total,e.pagination=a,e.loading=!1})},destroyAll:function(){this.$destroyAll()},onSelectChange:function(e){console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-row",{staticStyle:{"z-index":"2"}},[a("on-search",{on:{search:e.onSearch}})],1),e._v(" "),a("a-row",[a("a-col",{staticStyle:{"margin-top":"50px"}},[a("a-table",{attrs:{columns:e.columns,rowKey:function(e){return e.id},dataSource:e.data,pagination:e.pagination,loading:e.loading,scroll:{x:1100}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"user",fn:function(t){return a("span",{},[e._v(e._s(t.user.nickname))])}},{key:"game",fn:function(t){return a("span",{},[e._v(e._s(t.game.name))])}},{key:"price",fn:function(t){return a("span",{},[e._v(e._s(t.price.gold))])}},{key:"owner_user_id",fn:function(t){return a("span",{},[t.son?a("div",[e._v(e._s(t.son.name))]):a("div",[e._v(e._s(t.user.name))])])}}])})],1)],1),e._v(" "),a("a-divider")],1)},staticRenderFns:[]};var u=a("VU/8")(c,d,!1,function(e){a("blz6")},null,null);t.default=u.exports},blz6:function(e,t){}});
//# sourceMappingURL=13.bc6fd1ab9a86f3d8b965.js.map
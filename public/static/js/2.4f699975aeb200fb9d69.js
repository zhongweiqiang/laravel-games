webpackJsonp([2],{ewjc:function(e,t){},mn3h:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n("bOdI"),o=n.n(i),r=n("AaXs"),s=n("rxb8"),l=n("MArX"),c=n("ad6i"),d=n("v3NY"),u=n("vFBE"),p=n("KzTZ"),f={props:{onAdd:{type:Function,default:null}},components:{BuyAdd:p.default,StartTime:c.default,EndTime:d.default,MyModal:u.default},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),games:[],prices:[],users:[]}},created:function(){this.getUserList(),this.getGameList()},methods:(a={handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,n){console.log(n),e||(console.log("Received values of form: ",n),t.$emit("search",n))})},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},handleGameChange:function(e){console.log("selected "+e),e||this.form.setFieldsValue({price_id:void 0}),this.getPriceList(e)}},o()(a,"filterOption",function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}),o()(a,"getGameList",function(){var e=this;Object(r.e)().then(function(t){e.games=t.data})}),o()(a,"getPriceList",function(e){var t=this;Object(s.g)({game_id:e}).then(function(e){t.prices=e.data})}),o()(a,"getUserList",function(e){var t=this;Object(l.g)().then(function(e){t.users=e.data})}),a)},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-row",[e.hasPermission("sale.add")?n("a-col",{staticStyle:{height:"58px","margin-left":"10px","margin-top":"10px"},attrs:{xs:20,sm:16,md:10,lg:3,xl:3}},[n("a-row",[n("a-col",[n("buy-add",{attrs:{"on-add":e.onAdd}})],1),e._v(" "),n("a-col",[n("my-modal")],1)],1)],1):e._e(),e._v(" "),n("a-col",{attrs:{span:20}},[n("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[n("a-row",{staticStyle:{height:"30px","margin-left":"10px"}},[n("a-col",{attrs:{span:22}},[n("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:6}},[n("a-form-item",[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["game_id"],expression:"['game_id']"}],attrs:{showSearch:"",placeholder:"选择游戏",optionFilterProp:"children",filterOption:e.filterOption,allowClear:"",size:"small"},on:{change:e.handleGameChange}},e._l(e.games,function(t){return n("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),n("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:6}},[n("a-form-item",[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["price_id"],expression:"['price_id']"}],attrs:{showSearch:"",placeholder:"选择面值",optionFilterProp:"children",filterOption:e.filterOption,allowClear:"",size:"small"}},e._l(e.prices,function(t){return n("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.gold))])}),1)],1)],1),e._v(" "),n("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:6}},[n("a-form-item",[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status"],expression:"['status']"}],attrs:{showSearch:"",placeholder:"订单状态",allowClear:"",size:"small"}},[n("a-select-option",{attrs:{value:"1"}},[e._v("正常挂单")]),e._v(" "),n("a-select-option",{attrs:{value:"2"}},[e._v("部分交易")])],1)],1)],1),e._v(" "),n("a-col",{staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:18,md:12,lg:8,xl:6}},[n("a-form-item",[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_id"],expression:"['user_id']"}],attrs:{showSearch:"",placeholder:"选择用户",optionFilterProp:"children",filterOption:e.filterOption,allowClear:"",size:"small"}},e._l(e.users,function(t){return n("a-select-option",{key:t.user_id,attrs:{value:t.user_id}},[e._v(e._s(t.nickname))])}),1)],1)],1)],1),e._v(" "),n("a-col",{style:{display:"flex",justifyItems:"center",alignItems:"center",marginTop:"10px"},attrs:{xs:20,sm:16,md:10,lg:1,xl:1,offset:1}},[n("a-form-item",[n("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[e._v("搜索")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(f,m,!1,function(e){n("v1uo")},"data-v-d5fe8e92",null);t.default=h.exports},v1uo:function(e,t){},vFBE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{TableList:n("wrnH").default},data:function(){return{visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(e){console.log(e),this.visible=!1}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-button",{staticStyle:{"margin-top":"7px"},attrs:{type:"primary",size:"small"},on:{click:e.showModal}},[e._v("我的求购")]),e._v(" "),n("a-modal",{attrs:{title:"Basic Modal",footer:null,width:"80%"},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("table-list")],1)],1)},staticRenderFns:[]},o=n("VU/8")(a,i,!1,null,null,null);t.default=o.exports},wrnH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),o=n("wIDu"),r=n("mn3h"),s=n("iFq7"),l=[{title:"id",dataIndex:"id",sorter:!0,align:"center"},{title:"用户账户",key:"user",align:"center",scopedSlots:{customRender:"user"}},{title:"游戏名称",key:"game",align:"center",scopedSlots:{customRender:"game"}},{title:"面值名称",key:"price",align:"center",scopedSlots:{customRender:"price"}},{title:"发布数量",dataIndex:"default_unit",align:"center"},{title:"剩余数量",dataIndex:"unit",align:"center"},{title:"订单单价",dataIndex:"unit_price",align:"center"},{title:"订单总价",key:"total_money",align:"center",scopedSlots:{customRender:"total_money"}},{title:"状态",dataIndex:"status",align:"center"},{title:"发布时间",dataIndex:"created_at",align:"center"}],c={components:{OnSearch:r.default,DropDown:s.default},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"normal_login"})},data:function(){return{data:[],pagination:{pageSize:12},loading:!1,columns:l,selectedRowKeys:[],name:"",filters:{},search:{}}},mounted:function(){this.fetch({pageSize:this.pagination.pageSize}),console.log(this.config)},methods:{onSearch:function(e){this.search=e,this.fetch(i()({},e,{pageSize:this.pagination.pageSize}))},onUpdate:function(){this.fetch(i()({},this.getPagination(),this.search))},buy:function(){this.onUpdate()},getPagination:function(){return{pageSize:this.pagination.pageSize,page:this.pagination.current,sortField:this.pagination.sortField,sortOrder:this.pagination.sortOrder}},status:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=this;status({id:e}).then(function(e){t.fetch(t.getPagination())})}),handleTableChange:function(e,t,n){var a=i()({},this.pagination);a.current=e.current,a.sortField=n.field,a.sortOrder=n.order,this.pagination=a,this.filters=t,this.fetch(i()({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t,this.search))},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,Object(o.j)(t).then(function(t){console.log(t.data);var n=i()({},e.pagination),a=t.data;e.data=a.data,n.total=a.total,e.pagination=n,e.loading=!1})},destroyAll:function(){this.$destroyAll()},onSelectChange:function(e){console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-row",[n("a-col",{staticStyle:{"margin-top":"20px"}},[n("a-table",{attrs:{columns:e.columns,rowKey:function(e){return e.id},dataSource:e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"user",fn:function(t){return n("span",{},[e._v(e._s(t.user.nickname))])}},{key:"game",fn:function(t){return n("span",{},[e._v(e._s(t.game.name))])}},{key:"price",fn:function(t){return n("span",{},[e._v(e._s(t.price.gold))])}},{key:"total_money",fn:function(t){return n("span",{},[e._v(e._s(t.unit*t.unit_price))])}},{key:"owner_user_id",fn:function(t){return n("span",{},[t.son?n("div",[e._v(e._s(t.son.name))]):n("div",[e._v(e._s(t.user.name))])])}}])})],1)],1),e._v(" "),n("a-divider")],1)},staticRenderFns:[]};var u=n("VU/8")(c,d,!1,function(e){n("ewjc")},null,null);t.default=u.exports}});
//# sourceMappingURL=2.4f699975aeb200fb9d69.js.map
webpackJsonp([1],{"0U0d":function(e,t){},"4er+":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={props:{title:{type:String,default:null},content:{type:String,default:null}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"font-size":"14px","line-height":"22px","margin-bottom":"7px",color:"rgba(0, 0, 0, 0.65)"}},[t("a-row",[t("a-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[t("p",{staticStyle:{"margin-right":"8px",display:"inline-block",color:"rgba(0, 0, 0, 0.85)"}},[this._v(this._s(this.title))])]),this._v(" "),t("a-col",{attrs:{span:17,offset:1}},[this._v("\n        "+this._s(this.content)+"\n      ")])],1)],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(e){i("PjAd")},null,null).exports,s=i("vMJZ"),r={components:{descriptionItem:o},data:function(){return{visible:!1,pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px",textAlign:"center"},pStyle2:{marginBottom:"24px"},info:{userinfo:{},role:{}}}},created:function(){this.userinfo()},methods:{showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},userinfo:function(){var e=this;Object(s.g)().then(function(t){console.log(t),e.info=t.data,e.$store.dispatch("user/info",t.data)})}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a-drawer",{attrs:{width:"340",placement:"right",closable:!1,visible:e.visible},on:{close:e.onClose}},[i("p",{style:[e.pStyle,e.pStyle2]},[e._v("用户详情")]),e._v(" "),i("a-row",[i("a-col",[i("description-item",{attrs:{title:"用户名",content:e.info.name}})],1),e._v(" "),i("a-col",[e.info.userinfo?i("description-item",{attrs:{title:"用户昵称",content:e.info.userinfo.nickname}}):e._e()],1)],1),e._v(" "),i("a-row",[i("a-col",[i("description-item",{attrs:{title:"角色",content:e.info.role.name}})],1),e._v(" "),i("a-col",[i("description-item",{attrs:{title:"登陆时间",content:e.info.last_login_time}})],1)],1),e._v(" "),i("a-row",[i("a-col",[i("description-item",{attrs:{title:"登陆ip",content:e.info.last_login_ip}})],1),e._v(" "),i("a-col",[e.info.userinfo?i("description-item",{attrs:{title:"收费模式",content:e.info.userinfo.charge_status}}):e._e()],1)],1),e._v(" "),i("a-row",[i("a-col",[e.info.userinfo?i("description-item",{attrs:{title:"账户余额",content:e.info.userinfo.money}}):e._e()],1),e._v(" "),i("a-col",[e.info.userinfo?i("description-item",{attrs:{title:"冻结金额",content:e.info.userinfo.fro_money}}):e._e()],1)],1),e._v(" "),i("a-divider")],1)],1)},staticRenderFns:[]},c=i("VU/8")(r,l,!1,null,null,null).exports,m={data:function(){return{visible:!1,formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"})}},watch:{visible:function(e,t){0==e&&this.form.resetFields()}},methods:{showModal:function(){this.visible=!0},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,i){if(!e){if(i.new_password!=i.re_new_password)return void t.$message.error("两次密码不一致");console.log("Received values of form: ",i),Object(s.r)(i).then(function(e){console.log(e),200==e.code&&(t.visible=!1),t.$message.success(e.message)})}})}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a-modal",{attrs:{title:"登录密码修改",footer:null},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[i("a-form-item",{attrs:{label:"原始密码","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["old_password",{rules:[{required:!0,message:"请输入原始密码"}]}],expression:"['old_password', { rules: [{ required: true, message: '请输入原始密码' }] }]"}],attrs:{placeholder:"请输入密码"}})],1),e._v(" "),i("a-form-item",{attrs:{label:"新密码","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["new_password",{rules:[{required:!0,message:"请输入新密码"}]}],expression:"['new_password', { rules: [{ required: true, message: '请输入新密码' }] }]"}],attrs:{placeholder:"请输入密码"}})],1),e._v(" "),i("a-form-item",{attrs:{label:"确认密码","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["re_new_password",{rules:[{required:!0,message:"请确认密码"}]}],expression:"['re_new_password', { rules: [{ required: true, message: '请确认密码' }] }]"}],attrs:{placeholder:"确认密码"}})],1),e._v(" "),i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:10}}},[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("修改")])],1)],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(m,d,!1,function(e){i("FgXo")},"data-v-a7fae21e",null).exports,p={data:function(){return{visible:!1,formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"})}},watch:{visible:function(e,t){0==e&&this.form.resetFields()}},methods:{showModal:function(){this.visible=!0},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,i){if(!e){if(i.new_password!=i.re_new_password)return void t.$message.error("两次密码不一致");console.log("Received values of form: ",i),Object(s.j)(i).then(function(e){console.log(e),200==e.code&&(t.visible=!1),t.$message.success(e.message)})}})}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a-modal",{attrs:{title:"支付密码修改",footer:null},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[i("a-form-item",{attrs:{label:"原始密码","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["old_password",{rules:[{required:!0,message:"请输入原始密码"}]}],expression:"['old_password', { rules: [{ required: true, message: '请输入原始密码' }] }]"}],attrs:{placeholder:"请输入密码"}})],1),e._v(" "),i("a-form-item",{attrs:{label:"新密码","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["new_password",{rules:[{required:!0,message:"请输入新密码"}]}],expression:"['new_password', { rules: [{ required: true, message: '请输入新密码' }] }]"}],attrs:{placeholder:"请输入密码"}})],1),e._v(" "),i("a-form-item",{attrs:{label:"确认密码","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["re_new_password",{rules:[{required:!0,message:"请确认密码"}]}],expression:"['re_new_password', { rules: [{ required: true, message: '请确认密码' }] }]"}],attrs:{placeholder:"确认密码"}})],1),e._v(" "),i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:10}}},[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("修改")])],1)],1)],1)],1)},staticRenderFns:[]};var h=i("VU/8")(p,f,!1,function(e){i("wbvF")},"data-v-4d3a245f",null).exports,v=i("MArX"),_={props:{nickname:{type:String,default:null}},data:function(){return{visible:!1,formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"})}},watch:{visible:function(e,t){0==e&&this.form.resetFields()}},methods:{showModal:function(){var e=this;this.visible=!0,setTimeout(function(){e.form.setFieldsValue({old_nickname:e.nickname})},100)},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,i){e||(console.log("Received values of form: ",i),Object(v.g)(i).then(function(e){console.log(e),t.visible=!1,t.$message.success(e.message)}))})}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a-modal",{attrs:{title:"昵称修改",footer:null,width:"35%"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[i("a-form-item",{attrs:{label:"原始昵称","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["old_nickname"],expression:"['old_nickname']"}],attrs:{disabled:""}})],1),e._v(" "),i("a-form-item",{attrs:{label:"新昵称","label-col":{span:4},"wrapper-col":{span:18}}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["new_nickname",{rules:[{required:!0,message:"请输入新昵称"}]}],expression:"['new_nickname', { rules: [{ required: true, message: '请输入新昵称' }] }]"}],attrs:{placeholder:"请输入新昵称"}})],1),e._v(" "),i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:10}}},[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("修改")])],1)],1)],1)],1)},staticRenderFns:[]};var g={components:{UserDetail:c,UserEdit:u,PayEdit:h,NickModal:i("VU/8")(_,b,!1,function(e){i("sNSM")},"data-v-4cd54d2c",null).exports},data:function(){return{visible:!1,nickname:""}},methods:{onClick:function(e){var t=e.key;switch(console.log("Click on item "+t),parseInt(t)){case 1:this.$refs.detail.showDrawer();break;case 2:this.$refs.edit.showModal();break;case 3:this.$refs.pay.showModal();break;case 4:this.logout();break;case 5:this.judge_status()}},logout:function(){var e=this;this.$store.dispatch("user/logout").then(function(){e.$router.push({name:"Login"})})},judge_status:function(){var e=this;console.log("nickname"),Object(v.d)().then(function(t){if(e.nickname=t.data.nickname,0==t.data.nickname_change_times)e.$refs.nick.showModal();else{var i=e;e.$confirm({title:"是否修改昵称?",content:"昵称只能修改一次, 再次修改成功后扣除"+t.data.money+"元",onOk:function(){console.log("修改"),i.$refs.nick.showModal()},onCancel:function(){},okText:"修改",cancelText:"取消"})}})}}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{display:"inline-block"}},[i("a-dropdown",[i("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[i("a-avatar",{attrs:{shape:"square",icon:"user"}})],1),e._v(" "),i("a-menu",{attrs:{slot:"overlay"},on:{click:e.onClick},slot:"overlay"},[e.hasPermission("user.info")?i("a-menu-item",{key:"1"},[e._v("用户信息")]):e._e(),e._v(" "),i("a-menu-item",{key:"2"},[e._v("密码修改")]),e._v(" "),e.hasPermission("user.info.edit")?i("a-menu-item",{key:"3"},[e._v("支付修改")]):e._e(),e._v(" "),e.hasPermission("user.info.edit")?i("a-menu-item",{key:"5"},[e._v("昵称修改")]):e._e(),e._v(" "),i("a-menu-item",{key:"4"},[e._v("退出")])],1)],1),e._v(" "),i("user-detail",{ref:"detail",attrs:{visible:e.visible}}),e._v(" "),i("user-edit",{ref:"edit"}),e._v(" "),i("pay-edit",{ref:"pay"}),e._v(" "),i("nick-modal",{ref:"nick",attrs:{nickname:e.nickname}})],1)},staticRenderFns:[]},y=i("VU/8")(g,w,!1,null,null,null).exports,x={props:{time:{type:String,default:"一月"},price:{type:Number,default:1500},a:{type:Boolean,default:!0}}},k={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{changeColor:e.a,originColor:!e.a},staticStyle:{display:"inline-block",width:"160px",height:"67px","border-radius":"5px",cursor:"pointer"}},[i("a-row",[i("a-col",{staticStyle:{"line-height":"65px",background:"#ededed","text-align":"center","font-size":"24px","font-weight":"500",color:"#707070"},attrs:{span:10}},[e._v(e._s(e.time))]),e._v(" "),i("a-col",{staticStyle:{"font-size":"24px","font-weight":"600px",color:"#f5622e","line-height":"65px"},attrs:{span:14}},[e._v("￥"+e._s(e.price))])],1)],1)},staticRenderFns:[]};var S={components:{price:i("VU/8")(x,k,!1,function(e){i("0U0d")},null,null).exports},data:function(){return{ModalText:"Content of the modal",visible:!1,confirmLoading:!1,a1:!1,a2:!1,a3:!1,a4:!1,description:"",member:{one_month:{price:0,duration:"一月"},two_month:{price:0,duration:"两月"},three_month:{price:0,duration:"三月"},six_month:{price:0,duration:"六月"}},time:""}},beforeMount:function(){this.member_description()},watch:{visible:function(e,t){0==e&&(this.time="")}},methods:{confirm:function(){if(console.log(this.time),!this.time)return this.$message.error("请选择套餐"),!1;var e=this;this.$confirm({title:"套餐确认！",content:"月租用户购买后时间将叠加至现有截止时间，非月租用户将转为月租用户",onOk:function(){Object(v.e)({time:e.time}).then(function(t){console.log(t),e.$message.success("购买成功"),e.reset()})},onCancel:function(){},okText:"确认",cancelText:"取消"})},reset:function(){this.visible=!1,this.time="",this.a1=!1,this.a2=!1,this.a3=!1,this.a4=!1},member1:function(){this.a1=!0,this.a2=!1,this.a3=!1,this.a4=!1,this.time=1},member2:function(){this.a1=!1,this.a2=!0,this.a3=!1,this.a4=!1,this.time=2},member3:function(){this.a1=!1,this.a2=!1,this.a3=!0,this.a4=!1,this.time=3},member4:function(){this.a1=!1,this.a2=!1,this.a3=!1,this.a4=!0,this.time=6},member_description:function(){var e=this;Object(s.n)().then(function(t){e.description=t.data.description,e.member=t.data.money})},showModal:function(){1!=this.$store.getters.info.role_id?this.visible=!0:this.$message.info("管理员无法开通")},handleOk:function(e){var t=this;this.ModalText="The modal will be closed after two seconds",this.confirmLoading=!0,setTimeout(function(){t.visible=!1,t.confirmLoading=!1},2e3)},handleCancel:function(e){console.log("Clicked cancel button"),this.visible=!1}}},$={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"member",staticStyle:{display:"inline-block"},on:{click:e.showModal}},[e._v("开通会员")]),e._v(" "),i("a-modal",{ref:"modal",attrs:{title:"开通会员",visible:e.visible,confirmLoading:e.confirmLoading,footer:null,width:"600px"},on:{ok:e.handleOk,cancel:e.handleCancel}},[i("a-row",[i("a-col",{attrs:{span:16}},[i("a-row",[i("a-col",{attrs:{span:12},on:{click:e.member1}},[i("price",{attrs:{price:e.member.one_month.price,time:e.member.one_month.duration,a:e.a1}})],1),e._v(" "),i("a-col",{attrs:{span:12},on:{click:e.member2}},[i("price",{attrs:{price:e.member.two_month.price,time:e.member.two_month.duration,a:e.a2}})],1),e._v(" "),i("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:12},on:{click:e.member3}},[i("price",{attrs:{price:e.member.three_month.price,time:e.member.three_month.duration,a:e.a3}})],1),e._v(" "),i("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:12},on:{click:e.member4}},[i("price",{attrs:{price:e.member.six_month.price,time:e.member.six_month.duration,a:e.a4}})],1)],1)],1),e._v(" "),i("a-col",{staticStyle:{color:"#666"},attrs:{span:8}},[i("a-row",[e._v(e._s(e.description))]),e._v(" "),i("a-row",{staticStyle:{"margin-top":""}},[i("a-button",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确认")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var F=i("VU/8")(S,$,!1,function(e){i("pwDH")},"data-v-75df9772",null).exports,M=i("bUp0"),C={components:{UserInfo:y,StartMember:F},data:function(){return{collapsed:!1,menus:[],info:{userinfo:{charge_status:""}}}},created:function(){console.log("this is in layout"),this.getMenu(),this.getElement(),this.getPageSize()},mounted:function(){this.getInfo()},methods:{member:function(){console.log("member")},getInfo:function(){var e=this;Object(s.g)().then(function(t){e.info=t.data})},home:function(){this.$router.push({name:"Dashboard"})},getMenu:function(){var e=this;Object(M.h)().then(function(t){e.menus=t.data})},getElement:function(){this.$store.dispatch("user/getElement")},getPageSize:function(){this.$store.dispatch("user/setPageSize")}}},j={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout",{staticStyle:{"z-index":"999"},attrs:{id:"components-layout-demo-custom-trigger"}},[i("a-layout-sider",{staticStyle:{overflow:"auto","z-index":"999"},attrs:{trigger:null,collapsible:""},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[i("div",{staticClass:"logo"}),e._v(" "),i("a-menu",{attrs:{mode:"inline",theme:"dark",inlineCollapsed:e.collapsed}},[i("a-menu-item",{key:"1"},[i("router-link",{attrs:{to:"/dashboard"}},[i("a-icon",{attrs:{type:"home"}}),e._v(" "),i("span",[e._v("首页")])],1)],1),e._v(" "),e._l(e.menus,function(t){return i("a-sub-menu",{key:t.path},[i("span",{attrs:{slot:"title"},slot:"title"},[i("a-icon",{attrs:{type:t.icon}}),e._v(" "),i("span",[e._v(e._s(t.title))])],1),e._v(" "),e._l(t.children,function(t){return i("a-menu-item",{key:t.path},[i("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))])],1)})],2)})],2)],1),e._v(" "),i("a-layout",[i("div",{staticStyle:{background:"#eee",position:"fixed","z-index":"999",width:"100%",height:"100px","box-shadow":"0 0 20px #bbb inset"}},[i("a-layout-header",{staticStyle:{background:"#fff",padding:"0","z-index":"999"}},[i("a-row",[i("a-col",{attrs:{span:2}},[i("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:function(){return e.collapsed=!e.collapsed}}})],1),e._v(" "),i("a-col",{attrs:{span:22}},[i("a-row",[i("a-col",{attrs:{span:10}}),e._v(" "),i("a-col",{attrs:{span:3}},[i("div",{staticStyle:{display:"inline-block",color:"purple"}},["1"!=e.info.role_id?i("span",{attrs:{color:"red"}},[e._v("账户余额："+e._s(e.info.userinfo.money))]):e._e()])]),e._v(" "),i("a-col",{attrs:{span:3}},[i("div",{staticStyle:{display:"inline-block",color:"red","font-size":"13px"}},[e._v("\n                  到期时间：\n                  "),"1"==e.info.role_id?i("span",[e._v("永不过期")]):"月租收费"==e.info.userinfo.charge_status?i("span",[e._v(e._s(e.info.userinfo.expire_time))]):i("span",[e._v(e._s(e.info.userinfo.charge_status))])])]),e._v(" "),i("a-col",{attrs:{span:3}},[i("div",{staticClass:"ddd",on:{click:e.member}},[i("start-member")],1)]),e._v(" "),i("a-col",{attrs:{span:1}},[i("user-info")],1)],1)],1)],1)],1),e._v(" "),i("div",{staticStyle:{padding:"6px 0px 6px 24px",background:"#eee"}},[i("a-breadcrumb",[i("a-breadcrumb-item",{attrs:{href:""}},[i("router-link",{attrs:{to:"/"}},[i("a-icon",{attrs:{type:"home"}}),e._v(" "),i("span",[e._v("首页")])],1)],1),e._v(" "),this.$route.meta.title?i("a-breadcrumb-item",[e._v(e._s(this.$route.meta.title))]):e._e()],1)],1)],1),e._v(" "),i("a-layout-content",{style:{margin:"0px 16px 24px 16px",padding:"115px 10px 24px 24px",background:"#fff",minHeight:"280px"}},[i("router-view")],1)],1)],1)},staticRenderFns:[]};var q=i("VU/8")(C,j,!1,function(e){i("mwnI")},null,null);t.default=q.exports},FgXo:function(e,t){},PjAd:function(e,t){},mwnI:function(e,t){},pwDH:function(e,t){},sNSM:function(e,t){},wbvF:function(e,t){}});
//# sourceMappingURL=1.ebcf85715370a54afb3b.js.map
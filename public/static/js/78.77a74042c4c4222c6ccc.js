webpackJsonp([78],{q5TH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("//Fk"),s=a.n(r),o=a("zp1X"),i=(a("/Luh"),{name:"PermEdit",props:{onAdd:{type:Function,default:null},onEdit:{type:Function,default:null},id:{type:Number,default:null}},data:function(){return{form:this.$form.createForm(this),visible:!1,perms:[]}},mounted:function(){},methods:{showDrawer:function(){this.getPermList()},onClose:function(){this.visible=!1},getPermList:function(){var e=this;Object(o.f)().then(function(t){e.detail(),e.perms=t.data})},detail:function(){var e=this;new s.a(function(t){Object(o.c)({id:e.id}).then(function(a){console.log(a),delete a.data.id,delete a.data.key,e.visible=!0,t(a)})}).then(function(t){e.form.setFieldsValue(t.data)})},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){e||(console.log("Received values of form: ",a),a.id=t.id,Object(o.d)(a).then(function(e){t.onEdit(),t.$message.success(e.message),setTimeout(function(){t.onClose()},100)}))})}}}),n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline"}},[a("a-button",{staticStyle:{"margin-top":"4px"},attrs:{size:"small",type:"primary"},on:{click:e.showDrawer}},[a("a-icon",{attrs:{type:"edit"}})],1),e._v(" "),a("a-drawer",{attrs:{title:"权限修改",width:"60%",visible:e.visible,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"},destroyOnClose:!0},on:{close:e.onClose}},[a("a-form",{attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"权限名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入权限名称"}]}],expression:"['name', {\n                rules: [{ required: true, message: '请输入权限名称' }]\n              }]"}],attrs:{placeholder:"请输入权限名称"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"路由路径"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["uri",{rules:[{required:!0,message:"请输入路由路径"}]}],expression:"['uri', {\n                rules: [{ required: true, message: '请输入路由路径' }]\n              }]"}],staticStyle:{width:"100%"},attrs:{addonBefore:"http://example.com/api/v1/",placeholder:"请输入路由路径"}})],1)],1)],1),e._v(" "),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"请求方式"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["method",{rules:[{required:!0,message:"请选择请求方式"}]}],expression:"['method', {\n                rules: [{ required: true, message: '请选择请求方式' }]\n              }]"}],attrs:{placeholder:"请选择请求方式"}},[a("a-select-option",{attrs:{value:"GET"}},[e._v("GET")]),e._v(" "),a("a-select-option",{attrs:{value:"POST"}},[e._v("POST")]),e._v(" "),a("a-select-option",{attrs:{value:"DELETE"}},[e._v("DELETE")]),e._v(" "),a("a-select-option",{attrs:{value:"PUT"}},[e._v("PUT")])],1)],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"父级权限"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id",{rules:[{required:!0,message:"请选择父级权限"}]}],expression:"['parent_id', {\n                rules: [{ required: true, message: '请选择父级权限' }]\n              }]"}],attrs:{placeholder:"请选择父级权限"}},e._l(e.perms,function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1)],1)],1),e._v(" "),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"权限描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"请输入权限描述"}]}],expression:"['description', {\n                rules: [{ required: true, message: '请输入权限描述' }]\n              }]"}],attrs:{rows:4,placeholder:"请输入权限描述"}})],1)],1)],1),e._v(" "),a("a-form-item",{attrs:{"wrapper-col":{span:24,offset:0}}},[a("a-row",[a("a-col",{attrs:{span:5,offset:19}},[a("a-button",{style:{marginRight:"8px"},attrs:{size:"small"},on:{click:e.onClose}},[e._v("取消")]),e._v(" "),a("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")(i,n,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=78.77a74042c4c4222c6ccc.js.map
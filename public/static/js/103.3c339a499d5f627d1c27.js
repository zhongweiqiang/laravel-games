webpackJsonp([103],{M0Gg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("AaXs"),s={props:{okText:{type:String,default:"提交"},cancelText:{type:String,default:"取消"},onAdd:{type:Function,default:null}},data:function(){return{visible:!1,confirmLoading:!1,formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"})}},created:function(){},methods:{showModal:function(){this.visible=!0},handleCancel:function(e){this.visible=!1,this.form.resetFields()},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){e||(console.log(a),t.confirmLoading=!0,Object(r.a)(a).then(function(e){t.onAdd(),t.$message.success(e.message),t.visible=!1,t.confirmLoading=!1,t.form.resetFields()}))})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-button",{attrs:{size:"small",type:"primary"},on:{click:e.showModal}},[e._t("default",[a("a-icon",{attrs:{type:"plus"}}),e._v("游戏\n    ")])],2),e._v(" "),a("a-modal",{staticStyle:{"min-width":"400px"},attrs:{title:"游戏添加",visible:e.visible,confirmLoading:e.confirmLoading,footer:null,width:"35%"},on:{cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"游戏名称","label-col":{span:5},"wrapper-col":{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"游戏名称必须填写"}]}],expression:"['name', { rules: [{ required: true, message: '游戏名称必须填写' }] }]"}],attrs:{placeholder:"请输入游戏名称"}})],1),e._v(" "),a("a-form-item",{attrs:{label:"游戏包名","label-col":{span:5},"wrapper-col":{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["productIdentifier",{rules:[{required:!0,message:"游戏包名称必须填写"}]}],expression:"['productIdentifier', { rules: [{ required: true, message: '游戏包名称必须填写' }] }]"}],attrs:{placeholder:"请输入游戏包名"}})],1),e._v(" "),a("a-form-item",{attrs:{label:"游戏描述","label-col":{span:5},"wrapper-col":{span:18}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"游戏描述称必须填写"}]}],expression:"['description', { rules: [{ required: true, message: '游戏描述称必须填写' }] }]"}],attrs:{placeholder:"请输入游戏描述"}})],1),e._v(" "),a("a-form-item",{attrs:{"wrapper-col":{span:10,offset:14}}},[a("a-row",[a("a-col",{style:{textAlign:"left"},attrs:{span:8}},[a("a-button",{attrs:{size:"small"},on:{click:e.handleCancel}},[e._v("返回")])],1),e._v(" "),a("a-col",{style:{textAlign:"left"},attrs:{span:8}},[a("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")(s,i,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=103.3c339a499d5f627d1c27.js.map
webpackJsonp([56],{KIb2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("zCbX");var a=r("vMJZ"),i=r("Nfce"),o=r("JXzB"),s={components:{StartTime:i.default,EndTime:o.default},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),users:[]}},created:function(){this.getUserList("user")},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,r){e||(console.log("Received values of form: ",r),t.$emit("search",r))})},handleTypeChange:function(e){this.form.setFieldsValue({user_id:void 0}),this.getUserList(e)},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},getUserList:function(e){var t=this;Object(a.p)({user_type:e}).then(function(e){t.users=e.data})},reset:function(){this.form.resetFields()}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"z-index":"999"}},[r("a-form",{attrs:{form:e.form,layout:"inline"},on:{submit:e.handleSubmit}},[r("a-row",{staticStyle:{height:"60px","margin-left":"10px"}},[r("a-col",{attrs:{span:24}},[r("a-row",[r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_id"],expression:"['user_id']"}],staticStyle:{width:"160px"},attrs:{showSearch:"",placeholder:"选择用户",optionFilterProp:"children",filterOption:e.filterOption,allowClear:"",size:"small"}},e._l(e.users,function(t){return r("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("start-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["start_time"],expression:"['start_time']"}]})],1)],1),e._v(" "),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("end-time",{directives:[{name:"decorator",rawName:"v-decorator",value:["end_time"],expression:"['end_time']"}]})],1)],1),e._v(" "),r("a-col",{attrs:{span:2}},[r("a-form-item",[r("a-button",{attrs:{size:"small",type:"primary","html-type":"submit"}},[e._v("搜索")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(s,n,!1,function(e){r("PHfm")},"data-v-483e2c98",null);t.default=l.exports},PHfm:function(e,t){}});
//# sourceMappingURL=56.d046b08b0be406e3a0f3.js.map
webpackJsonp([66],{QUQc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("Bbw+");var i=n("DAs4"),o=n("AWGc"),s=n("vSJi"),u={props:{id:{type:Number,default:null},info:{type:Object,default:null},onBuy:{type:Function,default:null}},components:{BuyModal:o.default,SaleEdit:s.default},mounted:function(){},data:function(){return{user_id:this.$store.getters.info.id}},methods:{handleButtonClick:function(e){console.log("click left button",e)},handleMenuClick:function(e){switch(console.log("click",e.key),Number(e.key)){case 1:this.buy_store();break;case 2:this.down(this.id);break;case 3:this.update_store()}},down:function(e){this.$createElement;var t=this;this.$confirm({title:"确认下架?",content:function(e){return e("div",{style:"color:red;"},["下架后可重新上架"])},onOk:function(){Object(i.e)({id:e}).then(function(e){t.$message.success(e.message),t.$emit("update")})},onCancel:function(){t.$message.info("取消下架")}})},buy_store:function(){this.$refs.buy.visible=!0},update_store:function(){this.$refs.edit.showModal()}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{display:"inline"}},[n("a-dropdown",{attrs:{placement:"bottomRight"}},[n("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[e.user_id!=e.info.user_id?n("a-menu-item",{key:"1"},[n("buy-modal",{ref:"buy",attrs:{info:e.info,"on-buy":e.onBuy}})],1):e._e(),e._v(" "),e.user_id==e.info.user_id?n("a-menu-item",{key:"2"},[n("div",[n("a-icon",{attrs:{type:"money"}}),e._v("下架\n        ")],1)]):e._e(),e._v(" "),e.user_id==e.info.user_id?n("a-menu-item",{key:"3"},[n("sale-edit",{ref:"edit",attrs:{info:e.info,"on-update":e.onBuy}})],1):e._e()],1),e._v(" "),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"small",type:"primary"}},[e._v("\n      操作\n      "),n("a-icon",{attrs:{type:"down"}})],1)],1)],1)},staticRenderFns:[]},l=n("VU/8")(u,a,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=66.42bf1505a476f1197306.js.map
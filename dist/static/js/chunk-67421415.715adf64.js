(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67421415"],{"2f77":function(s,e,t){"use strict";t("f299")},4065:function(s,e,t){"use strict";t("d2c9")},"9ed6":function(s,e,t){"use strict";t.r(e);var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:s.loginForm,rules:s.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[s._v("登录")])]),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:s.loginForm.username,callback:function(e){s.$set(s.loginForm,"username",e)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{key:s.passwordType,ref:"password",attrs:{type:s.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.handleLogin(e)}},model:{value:s.loginForm.password,callback:function(e){s.$set(s.loginForm,"password",e)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:s.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===s.passwordType?"eye":"eye-open"}})],1)],1),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:s.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),s.handleLogin(e)}}},[s._v("登录")]),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[s._v("username: admin")]),t("span",[s._v("password: any")])])],1)],1)},o=[],a=(t("61f7"),{name:"Login",data:function(){return{loginForm:{username:"admin",password:"111111"},loginRules:{},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(s){this.redirect=s.query&&s.query.redirect},immediate:!0}},methods:{showPwd:function(){var s=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){s.$refs.password.focus()}))},handleLogin:function(){var s=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;s.loading=!0,s.$store.dispatch("user/login",s.loginForm).then((function(){s.$router.push({path:s.redirect||"/"}),s.loading=!1})).catch((function(){s.loading=!1}))}))}}}),r=a,i=(t("4065"),t("2f77"),t("2877")),l=Object(i["a"])(r,n,o,!1,null,"4d7bac28",null);e["default"]=l.exports},d2c9:function(s,e,t){},f299:function(s,e,t){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3092a95d"],{"0fea":function(e,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return c});var n=r("b775"),i={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function a(e){return Object(n["b"])({url:i.role,method:"get",params:e})}function o(e){return Object(n["b"])({url:i.service,method:"get",params:e})}function s(e){return Object(n["b"])({url:i.permissionNoPager,method:"get",params:e})}function c(e){return Object(n["b"])({url:i.orgTree,method:"get",params:e})}},"88bc":function(e,t,r){(function(t){var r=1/0,n=9007199254740991,i="[object Arguments]",a="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,n=e?e.length:0,i=Array(n);while(++r<n)i[r]=t(e[r],r,e);return i}function f(e,t){var r=-1,n=t.length,i=e.length;while(++r<n)e[i+r]=t[r];return e}var h=Object.prototype,p=h.hasOwnProperty,b=h.toString,g=u.Symbol,v=h.propertyIsEnumerable,y=g?g.isConcatSpreadable:void 0,k=Math.max;function j(e,t,r,n,i){var a=-1,o=e.length;r||(r=_),i||(i=[]);while(++a<o){var s=e[a];t>0&&r(s)?t>1?j(s,t-1,r,n,i):f(i,s):n||(i[i.length]=s)}return i}function w(e,t){return e=Object(e),O(e,t,function(t,r){return r in e})}function O(e,t,r){var n=-1,i=t.length,a={};while(++n<i){var o=t[n],s=e[o];r(s,o)&&(a[o]=s)}return a}function x(e,t){return t=k(void 0===t?e.length-1:t,0),function(){var r=arguments,n=-1,i=k(r.length-t,0),a=Array(i);while(++n<i)a[n]=r[t+n];n=-1;var o=Array(t+1);while(++n<t)o[n]=r[n];return o[t]=a,d(e,this,o)}}function _(e){return P(e)||C(e)||!!(y&&e&&e[y])}function A(e){if("string"==typeof e||I(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function C(e){return q(e)&&p.call(e,"callee")&&(!v.call(e,"callee")||b.call(e)==i)}var P=Array.isArray;function S(e){return null!=e&&E(e.length)&&!N(e)}function q(e){return $(e)&&S(e)}function N(e){var t=F(e)?b.call(e):"";return t==a||t==o}function E(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function $(e){return!!e&&"object"==typeof e}function I(e){return"symbol"==typeof e||$(e)&&b.call(e)==s}var J=x(function(e,t){return null==e?{}:w(e,m(j(t,1),A))});e.exports=J}).call(this,r("c8ba"))},"98bb":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{style:{height:"100%"},attrs:{bordered:!1}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:4}},[r("a-list",{attrs:{itemLayout:"vertical",dataSource:e.roles},scopedSlots:e._u([{key:"renderItem",fn:function(t,n){return r("a-list-item",{key:n},[r("a-list-item-meta",{style:{marginBottom:"0"}},[r("span",{staticStyle:{"text-align":"center",display:"block"},attrs:{slot:"description"},slot:"description"},[e._v(e._s(t.describe))]),r("a",{staticStyle:{"text-align":"center",display:"block"},attrs:{slot:"title"},on:{click:function(r){return e.edit(t)}},slot:"title"},[e._v(e._s(t.name))])])],1)}}])})],1),r("a-col",{attrs:{md:20}},[r("div",{staticStyle:{"max-width":"800px"}},[e.isMobile()?r("a-divider"):e._e(),e.mdl.id?r("div",[r("h3",[e._v("角色："+e._s(e.mdl.name))])]):e._e(),r("a-form",{attrs:{form:e.form,layout:e.isMobile()?"vertical":"horizontal"}},[r("a-form-item",{attrs:{label:"唯一键"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{rules:[{required:!0,message:"Please input unique key!"}]}],expression:"[ 'id', {rules: [{ required: true, message: 'Please input unique key!' }]} ]"}],attrs:{placeholder:"请填写唯一键"}})],1),r("a-form-item",{attrs:{label:"角色名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"Please input role name!"}]}],expression:"[ 'name', {rules: [{ required: true, message: 'Please input role name!' }]} ]"}],attrs:{placeholder:"请填写角色名称"}})],1),r("a-form-item",{attrs:{label:"状态"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{rules:[]}],expression:"[ 'status', {rules: []} ]"}]},[r("a-select-option",{attrs:{value:1}},[e._v("正常")]),r("a-select-option",{attrs:{value:2}},[e._v("禁用")])],1)],1),r("a-form-item",{attrs:{label:"备注说明"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe",{rules:[{required:!0,message:"Please input role name!"}]}],expression:"[ 'describe', {rules: [{ required: true, message: 'Please input role name!' }]} ]"}],attrs:{row:3,placeholder:"请填写角色名称"}})],1),r("a-form-item",{attrs:{label:"拥有权限"}},e._l(e.permissions,function(t,n){return r("a-row",{key:n,attrs:{gutter:16}},[r("a-col",{attrs:{xl:4,lg:24}},[e._v("\n                "+e._s(t.name)+"：\n              ")]),r("a-col",{attrs:{xl:20,lg:24}},[t.actionsOptions.length>0?r("a-checkbox",{attrs:{indeterminate:t.indeterminate,checked:t.checkedAll},on:{change:function(r){return e.onChangeCheckAll(r,t)}}},[e._v("\n                  全选\n                ")]):e._e(),r("a-checkbox-group",{attrs:{options:t.actionsOptions},on:{change:function(r){return e.onChangeCheck(t)}},model:{value:t.selected,callback:function(r){e.$set(t,"selected",r)},expression:"permission.selected"}})],1)],1)}),1)],1)],1)])],1)],1)},i=[],a=(r("ac6a"),r("5176")),o=r.n(a),s=r("0fea"),c=r("ac0d"),l=r("bade"),u=r("88bc"),d=r.n(u),m={name:"RoleList",mixins:[c["c"]],components:{},data:function(){return{form:this.$form.createForm(this),mdl:{},roles:[],permissions:[]}},created:function(){var e=this;Object(s["c"])().then(function(t){e.roles=t.result.data,e.roles.push({id:"-1",name:"新增角色",describe:"新增一个角色"}),console.log("this.roles",e.roles)}),this.loadPermissions()},methods:{callback:function(e){console.log(e)},add:function(){this.edit({id:0})},edit:function(e){var t=this;if(this.mdl=o()({},e),this.mdl.permissions&&this.permissions){var r={};this.mdl.permissions.forEach(function(e){r[e.permissionId]=e.actionEntitySet.map(function(e){return e.action})}),console.log("permissionsAction",r),this.permissions.forEach(function(e){var n=r[e.id];e.selected=n||[],t.onChangeCheck(e)}),console.log("this.permissions",this.permissions)}this.$nextTick(function(){t.form.setFieldsValue(d()(t.mdl,"id","name","status","describe"))}),console.log("this.mdl",this.mdl)},onChangeCheck:function(e){e.indeterminate=!!e.selected.length&&e.selected.length<e.actionsOptions.length,e.checkedAll=e.selected.length===e.actionsOptions.length},onChangeCheckAll:function(e,t){console.log("permission:",t),o()(t,{selected:e.target.checked?t.actionsOptions.map(function(e){return e.value}):[],indeterminate:!1,checkedAll:e.target.checked})},loadPermissions:function(){var e=this;Object(s["b"])().then(function(t){var r=t.result;e.permissions=r.map(function(e){var t=Object(l["a"])(e.actionData);return e.checkedAll=!1,e.selected=[],e.indeterminate=!1,e.actionsOptions=t.map(function(e){return{label:e.describe,value:e.action}}),e})})}}},f=m,h=r("2877"),p=Object(h["a"])(f,n,i,!1,null,"6a693515",null);t["default"]=p.exports},bade:function(e,t,r){"use strict";function n(e){try{return JSON.parse(e)}catch(t){console.log("err",t.message)}return[]}r.d(t,"a",function(){return n})}}]);
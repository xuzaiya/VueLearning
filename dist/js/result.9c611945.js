(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["result"],{"3ada":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{staticStyle:{margin:"-24px -24px 0px"},attrs:{bordered:!1}},[i("result",{attrs:{type:"success",description:t.description,title:t.title}},[i("template",{slot:"action"},[i("a-button",{attrs:{type:"primary"}},[t._v("返回列表")]),i("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("查看项目")]),i("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("打印")])],1),i("div",[i("div",{staticStyle:{"font-size":"16px",color:"rgba(0, 0, 0, 0.85)","font-weight":"500","margin-bottom":"20px"}},[t._v("项目名称")]),i("a-row",{staticStyle:{"margin-bottom":"16px"}},[i("a-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:6}},[i("span",{staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[t._v("项目 ID：")]),t._v("\n          20180724089\n        ")]),i("a-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:6}},[i("span",{staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[t._v("负责人：")]),t._v("\n          曲丽丽是谁？\n        ")]),i("a-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:12}},[i("span",{staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[t._v("生效时间：")]),t._v("\n          2016-12-12 ~ 2017-12-12\n        ")])],1),i("a-steps",{attrs:{current:1,direction:t.isMobile()&&t.directionType.vertical||t.directionType.horizontal,progressDot:""}},[i("a-step",[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("创建项目")]),i("template",{slot:"description"},[i("div",{staticStyle:{fontSize:"12px",color:"rgba(0, 0, 0, 0.45)",position:"relative",left:"42px","text-align":"left"},attrs:{slot:"description"},slot:"description"},[i("div",{staticStyle:{margin:"8px 0 4px"}},[t._v("\n                曲丽丽\n                "),i("a-icon",{staticStyle:{"margin-left":"8px"},attrs:{type:"dingding-o"}})],1),i("div",[t._v("2016-12-12 12:32")])])])],2),i("a-step",{attrs:{title:"部门初审"}},[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("部门初审")]),i("template",{slot:"description"},[i("div",{staticStyle:{fontSize:"12px",color:"rgba(0, 0, 0, 0.45)",position:"relative",left:"42px","text-align":"left"},attrs:{slot:"description"},slot:"description"},[i("div",{staticStyle:{margin:"8px 0 4px"}},[t._v("\n                周毛毛\n                "),i("a-icon",{staticStyle:{"margin-left":"8px",color:"#00A0E9"},attrs:{type:"dingding-o"}})],1),i("div",[i("a",{attrs:{href:""}},[t._v("催一下")])])])])],2),i("a-step",{attrs:{title:"财务复核"}},[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("财务复核")])]),i("a-step",{attrs:{title:"完成"}},[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("完成")])])],1)],1)],2)],1)},s=[],r=i("2af9"),n=i("ac0d"),l={horizontal:"horizontal",vertical:"vertical"},o={name:"Success",components:{Result:r["n"]},mixins:[n["c"]],data:function(){return{title:"提交成功",description:"提交结果页用于反馈一系列操作任务的处理结果，\n 如果仅是简单操作，使用 Message 全局提示反馈即可。\n 本文字区域可以展示简单的补充说明，如果有类似展示\n “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。",directionType:l}}},c=o,p=i("2877"),d=Object(p["a"])(c,a,s,!1,null,"429362da",null);e["default"]=d.exports},f32b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{staticStyle:{margin:"-24px -24px 0px"},attrs:{bordered:!1}},[i("result",{attrs:{type:"error",title:t.title,description:t.description}},[i("template",{slot:"action"},[i("a-button",{attrs:{type:"primary"}},[t._v("返回修改")])],1),i("div",[i("div",{staticStyle:{"font-size":"16px",color:"rgba(0, 0, 0, 0.85)","font-weight":"500","margin-bottom":"16px"}},[t._v("\n        您提交的内容有如下错误：\n      ")]),i("div",{staticStyle:{"margin-bottom":"16px"}},[i("a-icon",{staticStyle:{color:"#f5222d","margin-right":"8px"},attrs:{type:"close-circle-o"}}),t._v("\n        您的账户已被冻结\n        "),i("a",{staticStyle:{"margin-left":"16px"}},[t._v("立即解冻 "),i("a-icon",{attrs:{type:"right"}})],1)],1),i("div",[i("a-icon",{staticStyle:{color:"#f5222d","margin-right":"8px"},attrs:{type:"close-circle-o"}}),t._v("\n        您的账户还不具备申请资格\n        "),i("a",{staticStyle:{"margin-left":"16px"}},[t._v("立即升级 "),i("a-icon",{attrs:{type:"right"}})],1)],1)])],2)],1)},s=[],r=i("2af9"),n={name:"Error",components:{Result:r["n"]},data:function(){return{title:"提交失败",description:"请核对并修改以下信息后，再重新提交。"}}},l=n,o=i("2877"),c=Object(o["a"])(l,a,s,!1,null,"3e1661b9",null);e["default"]=c.exports}}]);
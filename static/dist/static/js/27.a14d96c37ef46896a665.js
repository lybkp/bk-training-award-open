(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{217:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.tableMixins=void 0;var a={data:function t(){return{pagination:{count:0,limit:10,current:1}}}};e.tableMixins=a},290:function(t,e,n){"use strict";n.r(e);var a=n(291);var r=n.n(a);for(var u in a)if(u!=="default")(function(t){n.d(e,t,function(){return a[t]})})(u);e["default"]=r.a},291:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var a=n(217);var r={name:"ended-review",mixins:[a.tableMixins],data:function t(){return{endedReviewRemoteData:[{}],loading:false}},computed:{endedReviewData:function t(e){return e.endedReviewRemoteData}},mounted:function t(){this.handleInit()},methods:{handleInit:function t(){},handleGetDetail:function t(){}}};e.default=r},351:function(t,e,n){"use strict";n.r(e);var a=n(390);var r=n(290);for(var u in r)if(u!=="default")(function(t){n.d(e,t,function(){return r[t]})})(u);var l=n(7);var i=Object(l["a"])(r["default"],a["a"],a["b"],false,null,null,null);e["default"]=i.exports},390:function(t,e,n){"use strict";var a=function(){var t=this;var e=t.$createElement;var n=t._self._c||e;return n("self-table",{attrs:{data:t.endedReviewData,loading:t.loading}},[n("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项名称",prop:"ip"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项开始时间",prop:"source"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项截止时间",prop:"status"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项咨询人",prop:"create_time"}}),t._v(" "),n("bk-table-column",{attrs:{label:"评语"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("bk-select",{attrs:{readonly:true}},[n("bk-option",[t._v(t._s(e.row))])],1)]}}])}),t._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("bk-button",{attrs:{text:true},on:{click:function(n){t.handleGetDetail(e.row)}}})]}}])})],1)};var r=[];n.d(e,"a",function(){return a});n.d(e,"b",function(){return r})}}]);
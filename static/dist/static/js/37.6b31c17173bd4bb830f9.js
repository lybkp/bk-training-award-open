(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{213:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.tableMixins=void 0;var e={data:function t(){return{pagination:{count:0,limit:10,current:1},loading:false}}};n.tableMixins=e},305:function(t,n,a){"use strict";a.r(n);var e=a(306);var o=a.n(e);for(var i in e)if(i!=="default")(function(t){a.d(n,t,function(){return e[t]})})(i);n["default"]=o.a},306:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var e=a(213);var o=a(22);var i=a(8);var r={name:"group-pending-approval",mixins:[e.tableMixins],data:function t(){return{pendingApprovalRemoteData:[]}},computed:{pendingApprovalData:function t(n){return n.pendingApprovalRemoteData}},mounted:function t(){this.handleInit()},methods:{handleInit:function t(){Promise.all([this.handleGetGroupPendingApproval()])},handleGetGroupPendingApproval:function t(){var n=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.curren;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading)return;this.loading=true;var r={page:a,size:e,group_id:this.$bus.curGlobalGroupId,approval_state:i.GROUP_PENDING_APPROVAL};return(0,o.getGroupApproval)(r).then(function(t){var n=t.data;console.log(n)}).finally(function(t){n.loading=false})},handleToPassGroupUser:function t(n){var a={apply_id:n["applyId"],is_allow:true};this.handlePostGroupManage([a])},handleRejectGroupUser:function t(n){var a={apply_id:n["applyId"],is_allow:false};this.handlePostGroupManage([a])},handlePostGroupManage:function t(n){return(0,o.postGroupManage)(n).then(function(t){console.log(t)}).finally(function(t){})}}};n.default=r},362:function(t,n,a){"use strict";a.r(n);var e=a(403);var o=a(305);for(var i in o)if(i!=="default")(function(t){a.d(n,t,function(){return o[t]})})(i);var r=a(7);var l=Object(r["a"])(o["default"],e["a"],e["b"],false,null,null,null);n["default"]=l.exports},403:function(t,n,a){"use strict";var e=function(){var t=this;var n=t.$createElement;var a=t._self._c||n;return a("self-table",{attrs:{data:t.pendingApprovalData,loading:false,pagination:t.pagination},on:{"update:pagination":function(n){t.pagination=n},"page-change":function(n){t.handleInit()}}},[a("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项名称",prop:"ip"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项开始时间",prop:"source"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项截止时间",prop:"status"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项咨询人",prop:"create_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("bk-button",{staticClass:"mr10",attrs:{text:true},on:{click:function(a){t.handleToPassGroupUser(n.row)}}},[t._v("\n                通过\n            ")]),t._v(" "),a("bk-popconfirm",{attrs:{trigger:"click",width:280}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"demo-custom"},[a("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon color-danger"}),t._v(" "),a("span",{staticClass:"content-text"},[t._v("确认拒绝该用户的申请？")])])]),t._v(" "),a("bk-button",{staticClass:"mr10 ml10",attrs:{theme:"danger",text:true},on:{click:function(a){t.handleRejectGroupUser(n.row)}}},[t._v("\n                    拒绝\n                ")])],1)]}}])})],1)};var o=[];a.d(n,"a",function(){return e});a.d(n,"b",function(){return o})}}]);
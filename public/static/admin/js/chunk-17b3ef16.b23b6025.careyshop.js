(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17b3ef16"],{"2e3c":function(e,t,a){},"38c4":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"},nativeOn:{submit:function(e){e.preventDefault()}}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:function(t){return e.handleCreate("create")}}},[e._v("新增顶层菜单")])],1):e._e(),a("el-form-item",[a("el-button-group",[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",disabled:e.loading},on:{click:function(t){return e.checkedNodes(!0)}}},[e._v("展开")]),a("el-button",{attrs:{icon:"el-icon-remove-outline",disabled:e.loading},on:{click:function(t){return e.checkedNodes(!1)}}},[e._v("收起")])],1)],1),a("el-form-item",{attrs:{label:"过滤"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{disabled:e.loading,placeholder:"输入关键词进行过滤","prefix-icon":"el-icon-search",clearable:!0},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[e.hackReset?a("el-tree",{ref:"tree",staticClass:"tree-scroll",attrs:{"node-key":"menu_id",data:e.treeData,props:e.treeProps,"filter-node-method":e.filterNode,"highlight-current":!0,"default-expand-all":e.isExpandAll,"default-expanded-keys":e.expanded,"allow-drag":e.allowDrag,draggable:!0},on:{"node-click":e.handleNodeClick,"node-drop":e.handleDrop},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,n=t.data;return a("span",{staticClass:"custom-tree-node action"},[a("span",{staticClass:"brother-showing",class:{"status-tree":!n.status}},[e.auth.move?a("i",{staticClass:"el-icon-sort move-tree cs-mr-5"}):e._e(),n.icon?a("i",{class:"iconfont icon"+n.icon}):n.children?a("i",{class:"el-icon-"+(r.expanded?"folder-opened":"folder")}):a("i",{staticClass:"el-icon-document"}),e._v(" "+e._s(r.label)+" ")]),a("span",{staticClass:"active"},[e.auth.add?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.handleAppend(n.menu_id)}}},[e._v(" 新增 ")]):e._e(),e.auth.status?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.enable(n.menu_id,n.status)}}},[e._v(" "+e._s(n.status?"禁用":"启用")+" ")]):e._e(),e.auth.del?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.remove(n.menu_id)}}},[e._v(" 删除 ")]):e._e()],1)])}}],null,!1,3302727039)}):e._e()],1),a("el-col",{attrs:{span:14}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.auth.add||e.auth.set,expression:"auth.add || auth.set"}],staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.textMap[e.formStatus]))]),"create"===e.formStatus&&e.auth.add?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:e.formLoading},on:{click:e.create}},[e._v("确定")]):"update"===e.formStatus&&e.auth.set?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:e.formLoading},on:{click:e.update}},[e._v("修改")]):e._e()],1),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"上级菜单",prop:"parent_id"}},[a("el-cascader",{key:e.form.parent_id,staticStyle:{width:"100%"},attrs:{placeholder:"不选择表示顶层菜单 试试搜索：首页",options:e.treeData,props:e.cascaderProps,filterable:"",clearable:""},model:{value:e.form.parent_id,callback:function(t){e.$set(e.form,"parent_id",t)},expression:"form.parent_id"}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入菜单名称",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"别名",prop:"alias"}},[a("el-input",{attrs:{placeholder:"可输入菜单别名",clearable:!0},model:{value:e.form.alias,callback:function(t){e.$set(e.form,"alias",t)},expression:"form.alias"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"图标",prop:"icon"}},[a("cs-icon-select",{attrs:{"user-input":!0,placeholder:"可选择菜单图标"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:0,max:255,"controls-position":"right"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"模块"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.module,callback:function(t){e.module=t},expression:"module"}},e._l(e.treeModule,(function(t,r){return a("el-radio-button",{key:r,attrs:{label:r,disabled:e.module!==r}},[e._v(e._s(t))])})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"导航",prop:"is_navi"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.form.is_navi,callback:function(t){e.$set(e.form,"is_navi",t)},expression:"form.is_navi"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"链接类型",prop:"type"}},[a("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio",{attrs:{label:"0"}},[e._v("模块")]),a("el-radio",{attrs:{label:"1"}},[e._v("外链")])],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[a("el-radio-group",{model:{value:e.form.target,callback:function(t){e.$set(e.form,"target",t)},expression:"form.target"}},[a("el-radio",{attrs:{label:"_self"}},[e._v("当前窗口")]),a("el-radio",{attrs:{label:"_blank"}},[e._v("新窗口")])],1)],1)],1)],1),a("el-form-item",{attrs:{label:"URL",prop:"url"}},[a("el-input",{attrs:{placeholder:"可输入链接地址",clearable:!0},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),a("el-form-item",{attrs:{label:"参数",prop:"params"}},[a("el-input",{attrs:{placeholder:"可输入链接参数",clearable:!0},model:{value:e.form.params,callback:function(t){e.$set(e.form,"params",t)},expression:"form.params"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"可输入菜单备注",type:"textarea",rows:3},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1)],1)],1)},n=[],s=(a("4de4"),a("4160"),a("c975"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("5530")),i=a("a308"),o={props:{treeData:{default:function(){return[]}},loading:{default:!1},module:{default:""}},data:function(){return{hackReset:!0,isExpandAll:!1,expanded:[],filterText:"",treeModule:{},treeProps:{label:"name",children:"children"},cascaderProps:{value:"menu_id",label:"name",children:"children",checkStrictly:!0,emitPath:!1},auth:{add:!1,del:!1,set:!1,status:!1,move:!1},form:{parent_id:void 0,name:void 0,alias:void 0,icon:void 0,remark:void 0,type:"0",url:void 0,params:void 0,target:"_self",is_navi:"0",sort:50},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:32,message:"长度不能大于 32 个字符",trigger:"blur"}],alias:[{max:16,message:"长度不能大于 16 个字符",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}],type:[{required:!0,message:"链接类型不能为空",trigger:"blur"}],url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],params:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],remark:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]},formStatus:"create",formLoading:!1,textMap:{create:"新增菜单",update:"编辑菜单"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){var e=this;Object(i["e"])().then((function(t){e.treeModule=t||{}})).then((function(){e._validationAuth()}))},methods:{_validationAuth:function(){this.auth.add=this.$permission("/setting/auth/menu/add"),this.auth.del=this.$permission("/setting/auth/menu/del"),this.auth.set=this.$permission("/setting/auth/menu/set"),this.auth.status=this.$permission("/setting/auth/menu/status"),this.auth.move=this.$permission("/setting/auth/menu/move")},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},checkedNodes:function(e){var t=this;this.filterText="",this.expanded=[],this.hackReset=!1,this.$nextTick((function(){t.isExpandAll=e,t.hackReset=!0}))},resetForm:function(){this.form={parent_id:0,name:"",alias:"",icon:"",remark:"",type:"0",url:"",params:"",target:"_self",is_navi:"0",sort:50}},resetElements:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create";this.$nextTick((function(){e.$refs.form.clearValidate()})),this.formStatus=t,this.formLoading=!1},handleNodeClick:function(e){(this.auth.add||this.auth.set)&&(this.resetForm(),this.resetElements("update"),this.form=Object(s["a"])(Object(s["a"])({},e),{},{type:e.type.toString(),is_navi:e.is_navi.toString()}))},handleCreate:function(e){this.resetForm(),this.resetElements(e),this.$refs.tree.getCurrentKey()&&this.$refs.tree.setCurrentKey(null)},handleAppend:function(e){this.handleCreate("create"),this.$refs.tree.setCurrentKey(e),this.form.parent_id=e},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.formLoading=!0,Object(i["a"])(Object(s["a"])(Object(s["a"])({},e.form),{},{module:e.module})).then((function(t){e.isExpandAll||(e.expanded=[t.data.parent_id||t.data.menu_id]),e.$emit("refresh"),e.$message.success("操作成功")})).catch((function(){e.formLoading=!1})))}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.formLoading=!0,Object(i["g"])(e.form).then((function(t){e.isExpandAll||(e.expanded=[t.data.parent_id||t.data.menu_id]),e.$emit("refresh"),e.$message.success("操作成功")})).catch((function(){e.formLoading=!1})))}))},remove:function(e){var t=this;this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(i["b"])(e).then((function(){t.$refs.tree.remove(t.$refs.tree.getNode(e)),t.handleCreate("create"),t.$message.success("操作成功")}))})).catch((function(){}))},enable:function(e,t){var a=this;this.$confirm("状态的切换会影响上下级菜单，是否确认操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(i["h"])(e,t?0:1).then((function(){a.isExpandAll||(a.expanded=[a.$refs.tree.getNode(e).data.parent_id||e]),a.$emit("refresh"),a.$message.success("操作成功")}))})).catch((function(){}))},handleDrop:function(e,t,a,r){var n=this,s={menu_id:e.data.menu_id,parent_id:e.data.parent_id},o=[];"inner"===a?s.parent_id=t.key:(s.parent_id=t.data.parent_id,t.parent.childNodes.forEach((function(e,t){o.push(e.key),e.data.sort=t+1}))),Object(i["g"])(s).then((function(t){e.data.parent_id=t.data.parent_id})).catch((function(){n.$emit("refresh")})),o.length>0&&Object(i["f"])(o).catch((function(){n.$emit("refresh")}))},allowDrag:function(){return this.auth.move}}},l=o,c=(a("8e0c"),a("2877")),d=Object(c["a"])(l,r,n,!1,null,"ee861508",null);t["default"]=d.exports},"8e0c":function(e,t,a){"use strict";var r=a("2e3c"),n=a.n(r);n.a}}]);
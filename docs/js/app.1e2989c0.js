(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),s=o.n(n);s.a},"53a9":function(t,e,o){"use strict";var n=o("d65d"),s=o.n(n);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a={name:"App"},r=a,l=(o("034f"),o("2877")),c=Object(l["a"])(r,s,i,!1,null,null,null),d=c.exports,u=o("9483");Object(u["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=o("8c4f"),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"fix-top"},[o("form",{staticClass:"input-form",on:{submit:function(e){return e.preventDefault(),t.doAdd(e)}}},[o("label",{staticClass:"form-label",attrs:{for:"comment"}},[t._v("Todo")]),o("input",{ref:"comment",staticClass:"input-comment flex-grow-1",attrs:{type:"text",id:"comment"}}),o("button",{staticClass:"btn-regular",attrs:{type:"submit"}},[t._v("OK")])]),o("div",{staticClass:"status-boxes"},[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.isAllSelected},on:{click:t.selectAll}}),o("span",{staticClass:"status-label"},[t._v("All")]),o("span",{staticClass:"badge",class:t.badgeColor(-1)},[t._v("\n          "+t._s(t.todoCounts(-1))+"\n        ")])]),t._l(t.options,(function(e){return o("label",{key:e.value},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.filterOption,expression:"filterOption"}],attrs:{type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(t.filterOption)?t._i(t.filterOption,e.value)>-1:t.filterOption},on:{change:function(o){var n=t.filterOption,s=o.target,i=!!s.checked;if(Array.isArray(n)){var a=e.value,r=t._i(n,a);s.checked?r<0&&(t.filterOption=n.concat([a])):r>-1&&(t.filterOption=n.slice(0,r).concat(n.slice(r+1)))}else t.filterOption=i}}}),o("span",{staticClass:"status-label"},[t._v(t._s(e.label))]),o("span",{staticClass:"badge",class:t.badgeColor(e.value)},[t._v("\n          "+t._s(t.todoCounts(e.value))+"\n        ")])])})),o("button",{staticClass:"btn-red",on:{click:t.deleteDone}},[t._v("Clear Done")]),o("button",{staticClass:"btn-switch-green",class:{"switch-on":t.canRemove},on:{click:function(e){t.canRemove=!t.canRemove}}},[t._v("Edit")])],2)]),o("div",{staticClass:"main-content"},[o("div",{staticClass:"list-group"},[o("draggable",{attrs:{handle:".move-icon"},on:{end:t.onDragEnd},model:{value:t.filteredTodos,callback:function(e){t.filteredTodos=e},expression:"filteredTodos"}},t._l(t.filteredTodos,(function(e){return o("todo-item",{key:e.id,staticClass:"list-group-item list-style",attrs:{todo:e,canRemove:t.canRemove},on:{changeState:t.doChangeState,edit:t.editComment,remove:t.doRemove}})})),1)],1)]),t.isModal?o("modal-dialog",{attrs:{todo:t.editingItem},on:{close:t.closeModal}}):t._e()],1)},m=[],h=o("bd86"),p=(o("ac6a"),o("8615"),o("20d6"),o("6762"),o("2fdb"),o("d225")),b=o("b0b4"),g="vue-todolist",C=function(){function t(){Object(p["a"])(this,t)}return Object(b["a"])(t,null,[{key:"fetch",value:function(){var t=JSON.parse(localStorage.getItem(g)||"[]");return t.forEach((function(t,e){t.id=e,t["note"]=t.note||""})),t}},{key:"save",value:function(t){localStorage.setItem(g,JSON.stringify(t))}}]),t}(),w=o("310e"),O=o.n(w),y={Todo:{value:0,label:"Todo"},InProgress:{value:1,label:"In Progress"},Done:{value:2,label:"Done"}};function x(t){switch(t){case y.Todo.value:return"badge-light circle-button-border";case y.InProgress.value:return"badge-warning";case y.Done.value:return"badge-success";default:return"badge-info"}}var _=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"flex-container"},[o("div",{staticClass:"move-icon"},[o("font-awesome-icon",{attrs:{icon:"ellipsis-v",size:"xs"}})],1),o("div",{on:{click:t.changeEventHandler}},[o("span",{staticClass:"circle-button pointer",class:t.badgeColor(t.todo.state)})]),o("div",{staticClass:"flex-grow-1 no-wrap todo-text",attrs:{title:t.todo.comment}},[t._v("\n      "+t._s(t.todo.comment)+"\n    ")]),o("div",{on:{click:t.editEventHandler}},[o("font-awesome-icon",{staticClass:"pointer",attrs:{icon:"edit",size:"xs"}})],1),o("transition",{attrs:{name:"slide-fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.canRemove,expression:"canRemove"}],on:{click:t.removeEventHandler}},[o("span",{staticClass:"pointer"},[t._v("×")])])])],1)])},k=[],T={name:"todo-item",props:{todo:Object,canRemove:Boolean},data:function(){return{}},methods:{changeEventHandler:function(){this.$emit("changeState",this.todo.id)},badgeColor:function(t){return x(t)},editEventHandler:function(){this.$emit("edit",this.todo.id)},removeEventHandler:function(){this.$emit("remove",this.todo.id)}}},j=T,I=(o("6959"),Object(l["a"])(j,_,k,!1,null,null,null)),S=I.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"dummy",attrs:{tabindex:"0"}}),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"status-labels"},t._l(t.options,(function(e){return o("label",{key:e.value,staticClass:"status-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],attrs:{type:"radio"},domProps:{value:e.value,checked:t._q(t.state,e.value)},on:{change:function(o){t.state=e.value}}}),o("span",{},[t._v(t._s(e.label))])])})),0)]),o("div",{staticClass:"modal-body"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],ref:"modalcomment",staticClass:"input-text",attrs:{type:"text"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),o("div",{staticClass:"modal-body"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],attrs:{maxlength:"1000",rows:"3"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn-regular modal-default-button",on:{click:t.update}},[t._v("OK")]),o("button",{staticClass:"btn-gray modal-default-button",on:{click:t.cancel}},[t._v("キャンセル")])]),o("div",{staticClass:"dummy",attrs:{tabindex:"0"}})])])])])},P=[],E={name:"modal-dialog",props:{todo:Object},data:function(){return{comment:"",note:"",state:"",options:Object.values(y)}},methods:{update:function(){this.todo["comment"]=this.comment,this.todo["note"]=this.note,this.todo["state"]=this.state,this.$emit("close")},cancel:function(){this.$emit("close")},checkFocus:function(t){null!==t.target&&"dummy"==t.target.className&&this.$refs.modalcomment.focus()}},created:function(){this.comment=this.todo.comment,this.note=this.todo.note||"",this.state=this.todo.state,document.addEventListener("focusin",this.checkFocus,!1)},mounted:function(){this.$refs.modalcomment.focus()},beforeDestroy:function(){document.removeEventListener("focusin",this.checkFocus,!1)}},D=E,$=(o("53a9"),Object(l["a"])(D,A,P,!1,null,"75aa5742",null)),M=$.exports,N=function t(e,o,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(p["a"])(this,t),this.id=e,this.comment=o,this.state=n,this.note=s};function R(t,e,o){return!1===o?t.filter((function(t){return e.includes(t.state)})):t.concat()}function H(t,e){var o=t.findIndex((function(t){return t.id===e}));return t[o]}var F={name:"TodoList",components:{draggable:O.a,TodoItem:S,ModalDialog:M},data:function(){return{todos:[],filteredTodos:[],lastUid:0,options:Object.values(y),filterOption:[y.Todo.value,y.InProgress.value],isAllSelected:!1,isModal:!1,editingItem:null,canRemove:!1}},methods:{doAdd:function(t,e){var o=this.$refs.comment;if(o.value.length){var n=new N(this.lastUid++,o.value,y.Todo.value);this.todos.push(n),o.value=""}},doChangeState:function(t){var e=H(this.todos,t);switch(e.state){case y.Todo.value:e.state=y.InProgress.value;break;case y.InProgress.value:e.state=y.Done.value;break;case y.Done.value:e.state=y.Todo.value;break}},doRemove:function(t){var e=this.todos.findIndex((function(e){return e.id===t}));this.todos.splice(e,1)},editComment:function(t){this.isModal=!0;var e=H(this.todos,t);this.editingItem=e},closeModal:function(){this.isModal=!1,this.editingItem=null},todoCounts:function(t){return this.todos.filter((function(e){return-1===t||e.state===t})).length},badgeColor:function(t){return x(t)},onDragEnd:function(t){var e=0;if(t.oldIndex<t.newIndex)e=-1;else{if(!(t.oldIndex>t.newIndex))return;e=1}var o=this.filteredTodos[t.newIndex],n=this.todos.indexOf(o),s=this.filteredTodos[t.newIndex+e],i=this.todos.indexOf(s);this.todos.splice(n,1),this.todos.splice(i,0,o)},selectAll:function(){var t=this;this.isAllSelected?(this.filterOption=[],this.isAllSelected=!1):(this.filterOption=[],this.options.forEach((function(e){return t.filterOption.push(e.value)})),this.isAllSelected=!0)},deleteDone:function(){var t=[y.Todo.value,y.InProgress.value];this.todos=R(this.todos,t,!1)}},watch:{todos:{handler:function(t){C.save(t),this.filteredTodos=R(this.todos,this.filterOption,this.isAllSelected)},deep:!0},filterOption:function(t){this.isAllSelected=t.length===this.options.length,this.filteredTodos=R(this.todos,t,this.isAllSelected)}},created:function(){this.todos=C.fetch(),this.filteredTodos=this.todos.concat(),this.lastUid=this.todos.length},computed:{labels:function(){return this.options.reduce((function(t,e){return Object.assign(t,Object(h["a"])({},e.value,e.label))}),{})}}},J=F,L=(o("b6dc"),Object(l["a"])(J,v,m,!1,null,"b2e25b16",null)),U=L.exports;n["a"].use(f["a"]);var q=new f["a"]({routes:[{path:"/",name:"TodoList",component:U}]}),z=o("ecee"),B=o("c074"),K=o("ad3d");z["c"].add(B["b"],B["a"]),n["a"].component("font-awesome-icon",K["a"]),n["a"].config.productionTip=!1,new n["a"]({router:q,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,o){},6959:function(t,e,o){"use strict";var n=o("e074"),s=o.n(n);s.a},b6dc:function(t,e,o){"use strict";var n=o("d3ec"),s=o.n(n);s.a},d3ec:function(t,e,o){},d65d:function(t,e,o){},e074:function(t,e,o){}});
//# sourceMappingURL=app.1e2989c0.js.map
webpackJsonp([1],{Gvev:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),n={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",data:[],symbol:"",minPrice:0,socket:null}},mounted:function(){},methods:{onKeyPress:function(e){"Enter"===e.key&&(this.data=[],this.initWebSocketClient(this.symbol,this.minPrice))},initWebSocketClient:function(e,t){if(null==e)return null;var s=this,i=isNaN(t)?0:t;s.socket&&(s.socket.close(),s.socket=null),s.socket=new WebSocket("wss://www.bitmex.com/realtime?subscribe=trade:"+e.toUpperCase()),s.socket.onmessage=function(e){console.log(JSON.parse(e.data).data);var t=JSON.parse(e.data);t&&t.data&&t.data.length&&t.data.forEach(function(e){e.size>=i&&s.data.push(e)})}}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app"},[s("form",{attrs:{onSubmit:"{this.onSubmit}"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.symbol,expression:"symbol"}],staticClass:"symbol-input",attrs:{type:"text",placeholder:"Enter symbol here...",autofocus:""},domProps:{value:e.symbol},on:{keypress:e.onKeyPress,input:function(t){t.target.composing||(e.symbol=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.minPrice,expression:"minPrice"}],staticClass:"price-input",attrs:{type:"number",placeholder:"Min order size threshold...",min:"0"},domProps:{value:e.minPrice},on:{keypress:e.onKeyPress,input:function(t){t.target.composing||(e.minPrice=t.target.value)}}})]),e._v(" "),s("table",{staticClass:"streaming-table"},[e._m(0),e._v(" "),s("tbody",e._l(e.data,function(t,i){return s("tr",{key:i,class:{"streaming-list-row":!0,dark:t.size>99999,sell:t.side&&"sell"===t.side.toLowerCase(),buy:t.side&&"buy"===t.side.toLowerCase()}},[s("td",{attrs:{width:"20%"}},[e._v(e._s(t.symbol))]),e._v(" "),s("td",{attrs:{width:"20%"}},[e._v(e._s(t.price))]),e._v(" "),s("td",{attrs:{width:"20%"}},[e._v(e._s(t.size))]),e._v(" "),s("td",{attrs:{width:"40%"}},[e._v(e._s(t.timestamp))])])}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Symbol")]),this._v(" "),t("th",[this._v("Price")]),this._v(" "),t("th",[this._v("Size")]),this._v(" "),t("th",[this._v("Time")])])])}]};var o={name:"App",components:{HelloWorld:s("VU/8")(n,a,!1,function(e){s("waea")},"data-v-2bc275e3",null).exports}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},staticRenderFns:[]};var l=s("VU/8")(o,r,!1,function(e){s("Gvev")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:l},template:"<App/>"})},waea:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.40f30c3c7a74d6f02694.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopHomePage/shopHomePage"],{6027:function(t,a,n){"use strict";n.r(a);var o=n("bbf0"),e=n("e3f7");for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);n("97a2");var i=n("2877"),u=Object(i["a"])(e["default"],o["a"],o["b"],!1,null,null,null);a["default"]=u.exports},"927c":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=function(){return n.e("components/customnav").then(n.bind(null,"2c5e"))},e=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"925b"))},s={props:{supplierid:String},components:{customnav:o,popup:e},data:function(){return{supllierInfo:{},shopInfo:{},salesrank:[],goods_one:{},goodsList:[],use1:!0,use2:!0,use3:!1,finshed:!1,domain:this.$store.state.domain,domain2:this.$store.state.domain2,page:1}},mounted:function(){this.getgoods_list(this.supplierid)},methods:{openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},handlescroll:function(t){this.finshed||(this.page++,this.getgoods_list(this.supplierid))},goto_goodsdetail:function(){},getgoods_list:function(t){var a=this;this.$dyrequest({url:"/IndexSales/goodsIndex",method:"POST",data:{page:a.page,id:t}}).then(function(t){1==a.page&&(a.supllierInfo=t.data.data.suppliermsg,a.shopInfo=t.data.data.shopmsg,t.data.data.goods.sales_rank.map(function(t){t.img=a.domain+t.img,a.salesrank.push(t)}),t.data.data.goods.all.data[0].img=a.domain+t.data.data.goods.all.data[0].img,a.goods_one=t.data.data.goods.all.data[0]),t.data.data.goods.all.data.map(function(t,n){0!=n&&(t.img=a.domain+t.img,a.goodsList.push(t))}),0==t.data.data.goods.all.data.length&&(a.finshed=!0)})}}};a.default=s},"97a2":function(t,a,n){"use strict";var o=n("af56"),e=n.n(o);e.a},a0c1:function(t,a,n){"use strict";(function(t){n("da96"),n("921b");o(n("66fd"));var a=o(n("6027"));function o(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("6e42")["createPage"])},af56:function(t,a,n){},bbf0:function(t,a,n){"use strict";var o=function(){var t=this,a=t.$createElement,n=(t._self._c,{width:"90%",maxWidth:"300px"});t._isMounted||(t.e0=function(a){t.use3=!t.use3}),t.$mp.data=Object.assign({},{$root:{a0:n}})},e=[];n.d(a,"a",function(){return o}),n.d(a,"b",function(){return e})},e3f7:function(t,a,n){"use strict";n.r(a);var o=n("927c"),e=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(a,t,function(){return o[t]})}(s);a["default"]=e.a}},[["a0c1","common/runtime","common/vendor"]]]);
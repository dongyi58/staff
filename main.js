import Vue from 'vue'
import App from './App'
import store from './store'
import request from './api/request.js'
import animated from 'animate.css'
import recursion from '@/components/recursion.vue';
import backTop from '@/components/gotop.vue';
import pageLoad from '@/components/pageLoad.vue'

Vue.config.productionTip = false;
Vue.prototype.$dyrequest = request
Vue.use(animated)
Vue.component('recursion',recursion) //分类列表
Vue.component('backTop',backTop) //回到顶部
Vue.component('pageLoad',pageLoad)//页面懒加载
App.mpType = 'app';
const app = new Vue({
    ...App,
	store,
	
})
app.$mount()

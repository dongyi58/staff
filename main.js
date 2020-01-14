import Vue from 'vue'
import App from './App'
import store from './store'
import request from './api/request.js'
import animated from 'animate.css'
import recursion from '@/components/recursion.vue';
import backTop from '@/components/gotop.vue';
Vue.config.productionTip = false;
Vue.prototype.$dyrequest = request
Vue.use(animated)
Vue.component('recursion',recursion) //分类列表
Vue.component('backTop',backTop) //回到顶部
App.mpType = 'app';
const app = new Vue({
    ...App,
	store,
	
})
app.$mount()

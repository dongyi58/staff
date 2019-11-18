import Vue from 'vue'
import App from './App'
import store from './store'
import request from './api/request.js'
Vue.config.productionTip = false;
Vue.prototype.$dyrequest = request
App.mpType = 'app';
const app = new Vue({
    ...App,
	store,
	
})
app.$mount()

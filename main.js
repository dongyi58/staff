import Vue from 'vue'
import App from './App'
import store from './store'
import request from './api/request.js'
import animated from 'animate.css'


Vue.config.productionTip = false;
Vue.prototype.$dyrequest = request
Vue.use(animated)
App.mpType = 'app';
const app = new Vue({
    ...App,
	store,
	
})
app.$mount()

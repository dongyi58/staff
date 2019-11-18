import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		domain:'http://shop.ddddian.com',
		domain2:'http://dsales.ddddian.com',
		shopId:'',
		supplierId:'',
		currentIndex:0
	},
	getters: {
		
	},
	mutations: {
		//小店id
		//点击shops页面列表存储小店id
		SET_SHOPID(state,shopId){
			state.shopId = shopId
		},
		//供应商id
		//shopsHomePage存储供应商id
		SET_SUPPLIERID(state,supplierId){
			state.supplierId = supplierId
		},
		//获取供应商首页导航页面
		//在homeindex切换时存储当前页面下标
		SET_CURRENINDEX(state,currentIndex){
				state.currentIndex = currentIndex
		}
	},
	actions:{
		
	}

})

export default store

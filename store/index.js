import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		domain:'http://shop.ddddian.com',
		domain2:'http://dsales.ddddian.com',
		shopId:'',
		supplierId:'',
		
		staffInfo:{},
		currentIndex:0,
		index:0,
		locationInfo:{}
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
		},
		//存储业务员信息
		SET_STAFFINFO(state,info){
				state.staffInfo=info
			
		},
		//存储业务员位置信息
		SET_LOCATION(state,location){
			 state.locationInfo = location
		}
	},
	actions:{
		
	}

})

export default store

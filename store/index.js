import Vue from 'vue'
import Vuex from 'vuex'

import request from '../api/request.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		domain:'http://shop1.ddddian.com',
		domain2:'http://dsales.ddddian.com',
		shopId:'',
		supplierId:'',
		staffInfo:{},
		currentIndex:-1,
		index:0,
		locationInfo:{},
		cartNum:0,//购物车商品数量
		addCart:true ,//判断用户是否有加入购物车的操作,有的话当用户进入购物车重新获取数据
		buyProductParam:{}
	},
	getters: {
		
	},
	mutations: {
		//小店id
		//点击shops页面小店列表跳转到shopHomepage/homeindex存储shopId
		SET_SHOPID(state,shopId){
			state.shopId = shopId
			//console.log(shopId)
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
		},
		//如果用户添加了新商品到购物车
		ADD_CART(state,iscart){
			state.addCart = iscart
			// console.log(iscart)
		},
		//存储购物车商品数量
		CART_NUM(state,num){
			state.cartNum = num
		},
		//存储购买商品所需参数
		SET_BUYPARAM(state,param){
			state.buyProductParam = param
		},
	},
	actions:{
		getCartNum({commit,state},shop){
			return new Promise((resolve,reject)=>{
				request({
					url:'/Goods/count_cart',
					method:'POST',
					data:{
						id:shop.id
					}
				}).then(res=>{
					commit('CART_NUM',res.data.num)
					resolve()
				})
			})
			
		},
	}

})

export default store

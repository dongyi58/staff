import Vue from 'vue'
import Vuex from 'vuex'

import request from '../api/request.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		domain:'http://img.ddddian.com',
		domain2:'http://dsales.ddddian.com',
		shopId:'',
		supplierId:'',
		staffInfo:{},
		currentIndex:0,
		index:0,
		locationInfo:{},
		cartNum:0,//购物车商品数量
		addCart:true ,//判断用户是否有加入购物车的操作,有的话当用户进入购物车重新获取数据
		buyProductParam:{},
		shopInfo:{},
		editFlag:false ,//购物车编辑状态
		oldtype:''
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
				//console.log(currentIndex)
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
			 //console.log(iscart)
		},
		//存储购物车商品数量
		CART_NUM(state,num){
			state.cartNum = num
		},
		//存储购买商品所需参数
		SET_BUYPARAM(state,param){
			state.buyProductParam = param
		},
		//存储小店信息
		SET_SHOPINFO(state,info){
			state.shopInfo = info
		},
		//修改购物车编辑状态
		CHANGE_EDITSTATUS(state,status){
			state.editFlag = status
		},
		//订单管理页面进入详情后保存上次点击过的订单类型
		SAVE_STATUS(state,type){
			state.oldtype=type//保留点击过的type
		}
	},
	actions:{
		//购物车数量
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
		//支付方式选择,获取支付方式
		paymentType({dispatch},totalNum){
			
			return new Promise((resolve,reject)=>{
				request({
					url:'/MyWallet/pay',
					method:'POST'
				}).then(res=>{
					let typelist=[]
					res.data.map(item=>{
						typelist.push(item.name)
					})
					uni.showActionSheet({
					    itemList:typelist,
					    success: function (action) {
							
					      dispatch('getPaymentQrCode',{
							  orderid:totalNum,
							  pay_id:res.data[action.tapIndex].id,
							  client_type:res.data[action.tapIndex].client_type,
							  idx:action.tapIndex
						  }).then(info=>{
							  resolve(info,)
						  })
					    },
					    fail: function (res) {
					        console.log(res.errMsg);
					    }
					});
				})
			})
			
			
		},
		//生成支付二维码
		getPaymentQrCode({dispatch},opt){
				return new Promise((resolve,reject)=>{
					request({
						url:'/MyWallet/sweepCodePay',
						method:'POST',
						data:opt
					}).then(res=>{
						resolve({info:res.data.info,idx:opt.idx})
					})
				})
				
		}
		
		
	}

})

export default store

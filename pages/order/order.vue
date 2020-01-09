<template>
	<view class="shopOrderDetail_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
			 :ismsg="true" 
			 :isSearch="false" 
			 :midtitle="true"
			 navtitle="确认订单"
			 />
			<scroll-view class="order_list" scroll-y="true">
				<view class="confirm_order_wrap">
						<view class="loaction_box">
								 <span class="location_icon"><i class="iconfont icon-round_location_fill"></i></span>
								 <view class="location">
									 <view class="contact_info">{{orderDetailInfo.smallshop.shopname}}<span>{{orderDetailInfo.smallshop.contacts || ''}}</span></view>
									 <p>{{orderDetailInfo.smallshop.address}}</p>
								 </view>
						</view>
						 <view class="orderInfo" v-for="(item,idx) of orderGoodsList" :key="idx">
							  <view class="order_box">
									 <view class="order_title">{{item.shopName}}<i class="iconfont icon-you"></i></view>
									 <view class="order_item" v-for="(goods,gidx) of item.goods" :key="gidx">
											 <view class="o-left">
												 <image class="order_img" :src="goods.goods_img" mode="aspectFill"></image>
											 </view>
											 <view class="omid">
												 <p>{{goods.goods_name}}</p>
												 <span>规格:{{goods.spec_str}}</span>
											 </view>
											 <!-- 普通商品 -->
											 <view class="o-right">
												 <span>￥{{goods.goods_price}}</span>
												 <view class="or-bottom">
													 <span>× {{goods.quantity}}</span>
													 <!-- <span>优惠：{{goods.coupon_fee}}</span> -->
												 </view>
											 </view>
											 <!-- 赠品 -->
											 <!-- <view class="o-right gift-right" v-else>
													<span>赠品</span>
											 </view> -->
									 </view>
								</view>
								
							</view>
							<view class="priceBox">
								<!-- 订单选项 -->
								<view class="orderOptItem_wrap">
									
										<view class="orderOptItem" v-if="showfree">
											<span class="orderOptItem_left">选择赠品</span> 
											<view class="orderOptItem_right">
												<dselect 
													:list="freelist"
													:clearable="false"
													:showItemNum="5" 
													:listShow="false"
													:isCanInput="false"  
													:style_Container="'width:calc(100vw - 115px);height: 30px; font-size: 12px;'"
													:placeholder = "'placeholder'"
													:initValue="freelist[0]"
													:selectHideType="'hideAll'"
												>
												</dselect>
											</view>
										</view>
										<view class="orderOptItem" @click="payType">
											<span class="orderOptItem_left">结算方式</span> 
											<view class="orderOptItem_right">
												{{payText}}<i class="iconfont icon-you"></i>
											</view>
										</view>
										<view class="orderOptItem" @click="deliverType">
											<span class="orderOptItem_left">配送方式</span> 
											
											<view class="orderOptItem_right">
												<span class="deliverTip">{{deliverTips}}</span>
												{{deliverText}}<i class="iconfont icon-you"></i>
											</view>
										</view>
										
										<view class="orderOptItem">
											<span class="orderOptItem_left">订单备注</span> 
											<view class="orderOptItem_right">
												<input type="text" class="memoInp" v-model="memo" placeholder-style="font-size:12px" placeholder="选填,请先和商家协商一致">
											</view>
										</view>
								</view>
								<!-- 价格明细 -->
								<view class="orderOptItem_wrap price_info">
										<view class="orderOptItem"
										v-if="item.price != 0"
										 v-for="(item,idx) of priceItem" :key="idx">
											<span class="orderOptItem_left">{{item.name}}</span> 
											<view class="orderOptItem_right">
												{{item.price}}
											</view>
										</view>
										
								</view>
							<!-- 价格小计 -->
								<view class="price_count">
									<span>共{{orderDetailInfo.totalquantity}}件</span>
									<view>小计:<span>￥{{totalPrice}}</span></view>
								</view>
							</view>
						 </view>
						
						 
					 
					 <!-- <view class='make-qrcode-box'><button type="warn" size="mini" class="make-qrcode">生成二维码</button></view> -->
		</scroll-view>
		<!-- 总计面板 -->
		
		<view class="totalCountView">
			<span class="tcv_left">共{{orderDetailInfo.totalquantity}}件</span>
			<view class="tcv_right">
				<view>合计：<span>￥{{totalPrice}}</span></view>
				<button size="mini" @click="orderSubmit($event)">去付款</button>
			</view>
		</view>
		<!-- 结算方式 选择 -->
		<popup ref="popup" 
			 type="center" 
			 class="home_popup" 
			 @change="handlePopChange"
			:popstyle="{width:'80%',minHeight:'300px',overflow:'hidden'}">
				<i class="iconfont icon-ziyuan close" @click="closePop"></i>
				<view class="payType_wrap" v-if="showPopup.payPop">
						<view class="pt_title">结算方式</view>
						<view class="pt_item" v-for="(item,idx) of buyType" :key="idx">
							<span class="pt_item_left">{{item.name}}</span>
							<view class="pt_item_right">
								<checkbox-group @change="typeChoice(1,idx,item.orderType,$event)">
									<checkbox :checked="item.checked" :disabled="item.checked" :value="item.name" color="#fff" class="cartCheckBox" /> 
								</checkbox-group>
							</view>
						</view>
						<view class="zq_title">账期</view>
						<view class="pt_item" v-for="(zitem,zidx) of zhangqi" :key="zitem.id">
							<span class="pt_item_left">{{zitem.accountname}}</span>
							<view class="pt_item_right">
								<checkbox-group @change="typeChoice(2,zidx,zitem.orderType,$event)">
									<checkbox  :checked="zitem.checked" :disabled="zitem.checked" :value="zitem.accountname" color="#fff" class="cartCheckBox"  /> 
								</checkbox-group>
							</view>
						</view>
				</view>
				<!-- 配送方式 -->
				<view class="payType_wrap" v-else>
						<view class="pt_title">配送方式</view>
						<view class="pt_item" v-for="(item,idx) of deliverList" :key="idx">
							<span class="pt_item_left">{{item.temp_name}}</span>
							<view class="pt_item_right">
								<checkbox-group @change="deliverChoice(idx,item.id,$event)">
									<checkbox :checked="item.checked" :disabled="item.checked" :value="item.temp_name" color="#fff" class="cartCheckBox" /> 
								</checkbox-group>
							</view>
						</view>
				</view>
		 </popup>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	
	import dselect from '@/components/xfl-select/xfl-select.vue';
	export default {
		components:{customnav,popup,dselect},
		data() {
			return {
				orderDetailInfo:{},
				orderGoodsList:[],
				domain:this.$store.state.domain,
				goodsIdx:-1,
				//显示不同的弹窗
				showPopup:{
					payPop:false,
					deliverPop:false
				},
				//结算方式
				payText:'现付',
				buyType:[
					{name:'现付',orderType:3,checked:true},
					{name:'货到付款',orderType:2,checked:false}
				],
				zhangqi:[], //账期
				//配送方式
				deliverText:'', //选中后的配送方式文字
				deliverIdx:0, //默认显示第一种配送方式
				deliverTips:'',
				deliverList:[],
				getParams:{},
				priceParams:{
					order_type:3, //默认现付
					period_id:'',
					activity_id:'',
					delivery_id:'',
					coupon_fee:''
				},
				//价格明细
				priceItem:[
							{
								priceType:1,
								name:"商品金额",
								price:0
							},
							{
								priceType:2,
								name:"优惠金额",
								price:0
							},
							{
								priceType:3,
								name:"活动优惠",
								price:0
							},
							
							{
								priceType:4,
								name:"账期溢价",
								price:0
							},
							{
								priceType:5,
								name:"商品运费",
								price:0
							},
							
						],
				totalPrice:0,
				freight:0,
				memo:'',
				cartId:[],
				sellerId:'',
				type:'',
				cartDetailRequest:{},
				multipleData : {} ,//批量购买数据
				//赠品列表
				showfree:false,//有无赠品
				freelist:[]
			};
				
				
		},
		onLoad(option) {
			//获取商品详情页存的商品参数
			this.getParams = this.$store.state.buyProductParam
			this.type = option.type
		
			
			if(this.type == 1){ //单个商品直接购买
				this.cartDetailRequest={
					url:'/Goods/orderConfirm',
					method:'POST',
					data:this.getParams
				}
			}else{ //购物车批量购买
				this.cartId=option.cartId.split(',')
				this.sellerId = option.sellerId
				
				this.cartDetailRequest={
					url:'/CartSales/orderConfirm',
					method:'POST',
					data:{
						id:this.$store.state.shopId,
						cart_id:this.cartId,
						activity_fee:0,
						coupon_fee:0
					}
				}
			}
			
			this.getOrderDetail()
		},	
		methods:{
			//结算方式选择
			typeChoice(type,idx,orderType,e){
				this.payText = e.target.value[0]
				//结算方式
				this.priceParams.order_type = orderType
				this.priceParams.period_id = ''
				
				if(type == 1){ //现付或到付
					
					this.zhangqi.map((item,bidx)=>{
						this.$set(item,'checked',false)
					})
					this.buyType.map((item,bidx)=>{
						if(idx == bidx){
							this.$set(item,'checked',true)
							this.getPrice()
						}else{
							this.$set(item,'checked',false)
						}
							
					})
					
				}else{//账期
					this.buyType.map((item,bidx)=>{
						this.$set(item,'checked',false)
					})
					this.zhangqi.map((item,zidx)=>{
						if(idx == zidx){
							this.priceParams.period_id = item.id
							this.$set(item,'checked',true)
							this.getPrice()
						}else{
							this.$set(item,'checked',false)
						}
							
					})
				}
				
				this.$refs.popup.close()
				this.showPopup.payPop=false
			},
		
			//配送方式选择
			deliverChoice(idx,id,e){
				this.deliverText = e.target.value[0]
				this.deliverList.map((item,didx)=>{
					if(idx == didx){
						this.$set(item,'checked',true)
						this.priceParams.delivery_id = item.id
						this.deliverIdx = idx
						this.getPrice()
					}else{
						this.$set(item,'checked',false)
					}
				})
				this.$refs.popup.close()
				this.showPopup.deliverPop=false
			},
			
			//获取订单详情
			getOrderDetail(){
				this.$dyrequest(this.cartDetailRequest).then(res=>{
				
					this.orderDetailInfo=res.data.data
					let ordergoods = res.data.data.data
					
					//获取优惠券金额
					this.priceParams.coupon_fee = this.orderDetailInfo.coupon_fee
					
					//获取活动Id
					this.priceParams.activity_id = this.orderDetailInfo.activity_id
					//获取账期
					this.orderDetailInfo.period.map(item=>{
						 this.$set(item,'checked',false)
						 this.$set(item,'orderType',1)
						 this.zhangqi.push(item)
					})
					//获取默认配送方式+默认配送id
					this.deliverText = this.orderDetailInfo.shipping_method[0].temp_name
					this.priceParams.delivery_id =  this.orderDetailInfo.shipping_method[0].id
				
					this.orderDetailInfo.shipping_method.map((item,idx)=>{
						
							if(idx == 0){
								 this.$set(item,'checked',true)
							}else{
								 this.$set(item,'checked',false)
							}
						
							
						    this.deliverList.push(item)
					})
					
					 this.deliverList.push({
						 id: "300",
						 temp_name: "送货上门",
						 price: "3.00",
						 j_price: "10.00",
						 checked:false
					 })
					
					this.getPrice()
					
					
					//订单商品
					for(let i in ordergoods){
							let tempGoods=[]
							let quantityCount=0
							 this.goodsIdx = -1
							
							//存储该小店下面的商品
							for(let j in ordergoods[i]){
								 this.goodsIdx++
								 this.$set(ordergoods[i][j],'goodsIndex',this.goodsIdx)
								 this.$set(ordergoods[i][j],'loaded',false)
								 ordergoods[i][j].goods_img = this.domain+ ordergoods[i][j].goods_img
								 tempGoods.push(ordergoods[i][j])
								 quantityCount+= ordergoods[i][j].quantity
								 // this.cartList.push(data1[i][j])
								 //判断是否有赠品
								// console.log(ordergoods[i][j].rule.freeProductName)
									 if(ordergoods[i][j].rule.freeProductName){
										this.showfree = true
										this.freelist = ordergoods[i][j].rule.freeProductName
										this.freegoodsId = ordergoods[i][j].rule.freeProductId
									 }
								}
								//重新组装数据，将对应小店和商品组装在一起 
								this.orderGoodsList.push({
									shopName:i,
									goods:tempGoods,
									qcount:quantityCount
								})
							
						}
						//console.log(this.freegoodsId)
						//console.log(this.orderGoodsList)
					
				})
				
			},
			
			//计算订单价钱
			getPrice(){
				// console.log(this.priceParams.delivery_id)
				
				let cartPriceRequest = {}
				this.multipleData[this.sellerId]={
					"cart_id":this.cartId,
					"memo":"",
					"order_type":this.priceParams.order_type,
					"period_id":this.priceParams.period_id,
					"delivery_id":this.priceParams.delivery_id,
				}
				
				if(this.type == 1){
					cartPriceRequest = {
							url:'/Goods/count_goods_price',
							method:'POST',
							data:{
								id:this.getParams.id,
								product_id:this.getParams.productId,
								quantity:this.getParams.quantity,
								price_type:this.getParams.price_type,
								order_type:this.priceParams.order_type,
								period_id:this.priceParams.period_id,
								activity_id:this.priceParams.activity_id,
								delivery_id:this.priceParams.delivery_id,
								coupon_fee:this.priceParams.coupon_fee
							}
						
					}
				}else{
					cartPriceRequest = {
						url:'/CartSales/count_goods_price',
						method:'POST',
						data:{
							order:JSON.stringify(this.multipleData)
						}
					}
				}
				this.$dyrequest(cartPriceRequest).then(res=>{
					let data = new Object
					//单品购买和批量购买数据区分
					if(this.type == 1){
						data = res.data
					}else{
						
						data = res.data[this.sellerId]
					}
					// console.log(data)
					this.priceItem.map((item,idx)=>{
						 switch(item.priceType){
								case 1:this.$set(item,'price',data.order_price);
								break;
								case 2:this.$set(item,'price',data.coupon_fee);
								break;
								case 3:this.$set(item,'price',data.activity_fee);
								break;
								case 4:this.$set(item,'price',data.period_fee);
								break;
								case 5:this.$set(item,'price',data.freight);
								break;
						 }
						this.$set(this.priceItem[idx],'price',Number(this.priceItem[idx].price).toFixed(2))
					
					})
					
					
					this.freight = data.freight 
					this.totalPrice = data.fact_price.toFixed(2)
					this.formatFreight()
					
				})
			},
		
			//邮费类型显示
			formatFreight(){
				if(this.freight != 0 ){//邮费为0 配送方式显示包邮
					if(this.deliverList[this.deliverIdx].price != 0 && this.deliverList[this.deliverIdx].j_price != 0){
						
						this.deliverTips =  `运费${this.deliverList[this.deliverIdx].price}元，满${this.deliverList[this.deliverIdx].j_price}免邮费`;
						
					}else if(this.deliverList[this.deliverIdx].price == 0){
						
						this.deliverTips =  '包邮'
						
					}else{
						this.deliverTips =  `运费${this.deliverList[this.deliverIdx].price}元`;
					}
				}else{
					this.deliverTips =  '包邮'
				}
			},
		
			//提交订单
			orderSubmit(e,idx){
				
				let submitRequest={}
				if(this.type == 1){
					submitRequest = {
							url:'/Goods/orderSubmit',
							method:'POST',
							data:{
								position:1,
								id:this.getParams.id,
								goods_id:this.getParams.goodsId,
								product_id:this.getParams.productId,
								quantity:this.getParams.quantity,
								price_type:this.getParams.price_type,
								buy_type:this.getParams.buy_type,
								activity_id:this.priceParams.activity_id,
								order_type:this.priceParams.order_type,
								period_id:this.priceParams.period_id,
								productname:idx ? this.freegoodsId[idx] : this.freegoodsId[0],
								delivery_id:this.priceParams.delivery_id,
								memo:this.memo
							}
						}
				}else{
					submitRequest = {
						url:'/CartSales/orderSubmit',
						method:'POST',
						data:{
							id:this.$store.state.shopId,
							order:JSON.stringify(this.multipleData)
						}
					}
				}
				this.$dyrequest(submitRequest).then(res=>{
					uni.showToast({
						title:res.data.data.info,
						icon:'none',
						duration:2000
					})
					
					//返回购物车重新加载数据
					
					// setTimeout(()=>{
					// 	this.$store.commit('ADD_CART',true)
					// 	this.$store.commit('SET_CURRENINDEX',0)
					// 	uni.navigateTo({
					// 	    url: '/pages/shopHomePage/homeindex'
					// 	});
					// },2500)
					
					
				})
			},
			//选择结算方式
			payType(){
				  this.showPopup.payPop=true
				  this.$refs.popup.open()
			},
			deliverType(){
					this.showPopup.deliverPop=true
					this.$refs.popup.open()
			},
			closePop(){
				 this.$refs.popup.close()
			},
			handlePopChange(e){
				if(!e.show){
					 this.showPopup.payPop=false
					 this.showPopup.deliverPop=false
					 this.showPopup.activePop=false
					 	
				}
			},
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.order_list{
		width:100%;
		height:calc(100vh - var(--status-bar-height) - 90px)
	}
	.confirm_order_wrap{
	
		padding:0 10px;
	}
	.home_popup .uni-popup__wrapper-box{
		width:80%;
		min-height:300px;
		overflow: hidden;
	}
	.close{
		position:absolute;
		right:10px;
	}
	.detailHeader{
		width:100%;
		height:100px;
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		color:#fff;
		.hleft{
			display: flex;
			flex-direction: column;
			span:first-child{
				font-size:17px;
				margin-bottom:10px;
			}
			span:last-child{
				font-size:14px;
			}
		}
		.hright i{
			font-size:4em
		}
	}
	.loaction_box{
		display: flex;
		padding:10px;
		background:#fff;
		align-items: center;
		border-radius: 10px;
		margin:10px 0;
		.location_icon{
			background:linear-gradient(to right,#21A5F9,#1A6FE8);
			-webkit-background-clip: text;
			color: transparent;
			i{
				font-size:2em
			}
		}
		.location{
			padding-left:10px;
			.contact_info{
				font-size:14px;
				span{
					font-size:12px;
					color:#999;
					margin-left:10px;
				}
			}
		}
	}
	
	.orderInfo,.priceBox{
		border-radius: 10px;
		padding:10px;
		background:#fff;
		margin-bottom: 10px;
	}
	.order_title{
		display: flex;
		align-items: center;
		padding:5px 0;
		font-weight: 600;
		i{
			position: relative;
			    top: 1px;
			    color: #999;
			    margin-right: 5px;
			    font-size: 12px;
		}
	}
	.order_item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top:1px solid #eee;
			padding:15px 0;
			.o-left{
				width:60px;
				height:60px;
				flex-shrink: 0;
				.order_img{
					width:100%;
					height:100%;
					border:1px solid #eee;
					border-radius:5px;
				}
			}
			.omid{
				display: flex;
				flex-direction: column;
				color:#505050;
				padding-left:15px;
				flex:1;
				p{
					@include longtext2;
					max-height:35px;
				}
				span{
					@include longtext;
					background:#f5f5f5;
					color:#999;
					border-radius: 5px;
					padding: 3px 2px;
					margin-top:5px;
					align-self: baseline;
				}
			}
			.gift-right{
				justify-content: center !important;
				span{
					background:#1d8af0;
					color:#fff !important;
					width: 50px;
					padding: 5px 0;
					border-radius: 20px 0 0 20px;
					text-align: center;
					letter-spacing: 2px;
				}
			}
			.o-right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex-shrink: 0;
				align-self:stretch;
				text-align:right;
				span{
					color:#e52701
				}
				.or-bottom{
					display: flex;
					flex-direction: column;
					span:last-child{
						color:#999
					}
				}
			}
		}
		.price_box{
			border-top:1px solid #eee;
		
			font-size:14px;
			view{
				display: flex;
				justify-content: space-between;
				padding:10px 0;
			}
			span{
				color:#CF2503
			}
		}
		.orderInfo_box{
			padding:10px 0;
				border-top:1px solid #eee;
				h3{
					font-weight: 600;
					font-size:14px;
					color:#383838;
				}
				view{
					display: flex;
					padding:5px 0;
					color:#999;
					align-items: baseline;
					span:first-child{
						flex-shrink: 0;
						margin-right:10px;
					}
				}
		}
		.make-qrcode-box{
			
			display: flex;
			justify-content: flex-end;
			padding:10px;
		}
		.make-qrcode,.make-qrcode:after{
			border-radius:20px !important;
		}
		
		//订单选项
		.orderOptItem_wrap{
			border-bottom:1px solid #f5f5f5;
			.orderOptItem{
				display: flex;
				align-items: center;
				padding:8px 0;
				&_left{
					width:60px;
					text-align: right;
					flex-shrink: 0;
				}
				&_right{
					display: flex;
					align-items: baseline;
					justify-content: flex-end;
					flex:1;
					padding-left:15px;
					.memoInp{
						flex:1;
						font-size:12px;
					}
					i{
						
						font-size: 12px;
					}
				}
			}
		}
		//结算方式
		.payType_wrap{
			.pt_title{
				text-align: center;
				font-size:14px;
				font-weight: 600;
				border-bottom:1px solid #f5f5f5;
				padding:0 0 10px;
			}
			.pt_item{
				display: flex;
				justify-content: space-between;
				padding:8px 10px;
			}
			.zq_title{
				padding:8px 10px;
				border-top:1px solid #f5f5f5;
				font-size:14px;
				font-weight: 600;
			}
		}
		.deliverTip{
			flex:1;
			color:#999;
		}
		.price_count{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding:10px 0;
			&>span{
				color:#999;
				margin-right:10px;
			}
			view{
				display: flex;
				align-items: baseline;
				span{
					
					color:#e52701;
					font-size:14px;
					font-weight: 600;
				}
			}
		}
		.totalCountView{
			position: fixed;
			bottom:0;
			width:100%;
			height:50px;
			background:#fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 10px;
			.tcv_left{
				color:#999;
				font-size:14px;
			}
			.tcv_right{
				width:50%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				view{
					span{
						color:#e52701;
						font-size:16px;
						font-weight: 600;
					}
				}
				button{
					width: 42%;
						border-radius: 20px;
					    line-height: 2.5;
					    font-size: 12px;
					    color: #fff;
					    padding: 0 5px;
						background: linear-gradient(to right, #21A5F9, #1A6FE8);
				}
			}
		}
</style>

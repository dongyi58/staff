<template>
	<view class="shopOrderDetail_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="订单详情"
		 :cancletext="false"
		 :focus="false"
		 />
		
		
					<view class="detailHeader">
								 <view class="hleft">
									 <span>{{statusText}}</span>
									<!-- <span>剩余26分交易自动关闭</span> -->
								 </view>
								 <view class="hright">
									 <i class="iconfont" :class="statusIcon"></i>
								 </view>
					</view>
				<scroll-view class="order_list" scroll-y="true">
					 <view class="orderInfo" v-for="(item,idx) of orderDetailInfo" :key="idx">
						 <view class="loaction_box">
						 			 <span class="location_icon"><i class="iconfont icon-round_location_fill"></i></span>
						 			 <view class="location">
						 				 <view class="contact_info">{{item.consignee}}<span>{{item.phone}}</span></view>
						 				 <p>{{item.address}}</p>
						 			 </view>
						 </view>
						   <view class="order_box">
						 	 <view class="order_item" v-for="(goods,gidx) of item.goods" :key="gidx">
						 			 <view class="o-left">
						 				 <image class="order_img" :src="goods.img" mode="aspectFill"></image>
						 			 </view>
						 			 <view class="omid">
						 				 <p>{{goods.name}}</p>
						 				 <span v-if="goods.gift == 1 ">规格:{{goods.format_spec}}</span>
						 			 </view>
									 <!-- 普通商品 -->
						 			 <view class="o-right" v-if="goods.gift == 1 ">
						 				 <span>￥{{goods.price}}</span>
						 				 <view class="or-bottom">
						 					 <span>× {{goods.quantity}}</span>
						 					 <span>优惠：{{goods.coupon_fee}}</span>
						 				 </view>
						 			 </view>
									 <!-- 赠品 -->
									 <view class="o-right gift-right" v-else>
											<span>赠品</span>
									 </view>
						 	 </view>
						 	 
						 	 <!-- 商品价格总和 -->
						 	 <view class="price_box">
						 			<view>商品运费<span>+{{item.freight}}</span></view>
						 			<view>优惠券优惠<span>-{{item.coupon_fee}}</span></view>
									<view>活动优惠<span>-{{item.activity_fee}}</span></view>
						 			<view>账期溢价<span>+{{item.period_fee}}</span></view>
						 			<view>应付金额<span>￥{{item.fact_price}}</span></view>
						 			<!-- <view>预付金额<span>￥{{item.period_fee}}</span></view> -->
						 			<view>实付款(含运费)<span style="font-weight: 600;">￥{{item.fact_pay_price}}</span></view>
						 	</view>
						 	<!-- 订单信息 -->
						 	<view class="orderInfo_box">
						 		<h3>订单信息</h3>
						 		<view><span>订单备注:</span><p>{{item.memo}}</p></view>
						 		<view><span>订单编号:</span><span>{{item.orderno}}</span></view>
						 		<view><span>创建时间:</span><span>{{item.create_time}}</span></view>
						 		<view><span>结算方式:</span><span>{{item.order_type == 1 ? '账期订单' : (item.order_type == 2 ? '到付订单' : '现付订单')}}</span></view>
						 		<view v-if="item.staff_name"><span>代下单员:</span><span>{{item.staff_name}}</span></view>
						 		<view><span>配送方式:</span><span>快递配送</span></view>
						 	</view>
							<view class='make-qrcode-box'><button type="warn" size="mini" class="make-qrcode">生成二维码</button></view>
						  </view>
					 </view>
		</scroll-view>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		components:{customnav},
		data() {
			return {
				orderDetailInfo:[],
				orderDetailGoods:[],
				orderId:'',
				shopId:'',
				orderStatus:'',
				statusIcon:'',
				statusText:'',
				domain:this.$store.state.domain
			};
		},
		
		onLoad(option) {
			this.orderId = option.orderId
			this.shopId = option.shopId
			this.orderStatus = parseFloat(option.orderStatus)
		
			switch(this.orderStatus){
				case 1:
					this.statusIcon = 'icon-daifukuan';
					this.statusText = '等待买家付款';
					break;
				case 2:
					this.statusIcon = 'icon-daifahuo';
					this.statusText = '商家正在准备商品';
					break;
				case 3:
					this.statusIcon = 'icon-daishouhuo';
					this.statusText = '商品正在运输中';
					break;
				case 4:
					this.statusIcon = 'icon-yishouhuo';
					this.statusText = '买家已收货';
					break;
				case 5:
					this.statusIcon = 'icon-quxiaodingdan';
					this.statusText = '订单已取消';
					break;
			}
			this.getOrderDetail()
		},	
		methods:{
			getOrderDetail(){
				this.$dyrequest({
					url:'/SmallShop/orderDetail',
					method:'POST',
					data:{
						id:this.orderId,
						smallShopId:this.shopId
					}
				}).then(res=>{
					// console.log(res.data.data)
					res.data.data.map((item,idx)=>{
							if(item.memo == 'null'){
								item.memo="无订单备注"
							}
						//处理商品信息
							item.goods.map((gitem,idx)=>{
									this.$set(gitem,'show',false)
									this.$set(gitem,'loaded',false)
									 this.$set(gitem,'format_spec',false)
									 //格式化规格
									 if(gitem.price_type == 'whole'){//整件价
										 if(gitem.pack_type == 1){//1，整件 2 ，散装
											 gitem.format_spec= gitem.net_weight+'×'+ gitem.spec+'/'+gitem.whole_unit
										 }else{
											  gitem.format_spec= gitem.whole_spec+gitem.bulk_unit
										 }
									 }else{//单价
										 if(gitem.pack_type == 1){
										 		gitem.format_spec= gitem.net_weight+'/'+gitem.retail_unit
										 }else{
										 		gitem.format_spec= gitem.retail_spec+gitem.bulk_unit
										 }
									 }
									 
									 gitem.img =this.domain + gitem.img
									
												 
							})
							this.orderDetailInfo.push(item)
								
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.order_list{
		width:100%;
		height:calc(100vh - 145px - var(--status-bar-height))
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
	.order_box{
		background:#fff;
		margin-bottom:10px;
		padding:10px 10px 0;
	}
	.order_item{
		
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top:1px solid #eee;
			padding:15px 0;
			.o-left{
				width:50px;
				height:50px;
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
				padding-left:10px;
				flex:1;
				p{
					@include longtext2;
					max-height:35px;
				}
				span{
					@include longtext;
					max-width:100px;
					background:#f5f5f5;
					color:#999;
					border-radius: 20px;
					padding:3px;
					margin-top:5px;
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
					color:#CF2503
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
</style>

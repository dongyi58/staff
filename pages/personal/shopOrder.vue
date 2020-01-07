<template>
	<view class="wrap shopOreder_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="订单管理"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="shoplist_content">
		 		<view class="shoplist_content_item" >
		 			<view class="shoplist_content_item_top">
		 				<view class="top_left">
		 					
		 						<image v-if="shopInfo.head_sculpture" class="top_img" :src="domain2+shopInfo .head_sculpture" mode="aspectFill"></image>
		 						<image v-else class="top_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
		 						
		 						<view class="top_info">
		 							<span>{{shopInfo.shopname}}</span>
		 							<span @click.stop="callsupplier(shopInfo.phone)"><i class="iconfont icon-dianhua"></i>{{shopInfo.phone}}</span>
		 						</view>
		 				</view>
		 				<view class="top_right_type">
		 					<span @click="levelUp">申请等级</span>
		 				</view>
		 			</view>
		 			<view class="shoplist_content_item_bottom">
		 				<i class="iconfont icon-weizhi"></i>
		 				<p>{{shopInfo.address}}</p>
		 			</view>
		 		</view>
		 </view>
		 <qstab
			 :tabs="tabs" 
			 @change="handleChange"
			 :current="currentidx"
			 animationMode="line1"
			 activeColor="#147AED"	
			 fontSize="30"
			 backgroundColor="#fff"
			 :width="tabwidth"
			 height="100"
			 animationLineWidth="70"
		 >
		 </qstab>
		 <scroll-view 
		 scroll-y="true" 
		 class="order_list" 
		 @scroll="scroll" 
		 @scrolltolower="handlescroll" 
		 :scroll-top="setMarkTop"
		 >
		 		 <view class="order_box" v-for="(item,idx) of orderList" :key="idx">
					 <!-- 订单号 -->
					 <view class="ordernum">
						 <view class="ordernum_left">
							 <span>订单编号:{{item.orderno}}</span>
							 <span>{{item.order_type == 1 ? '账期订单' : (item.order_type == 2 ? '到付订单' : '现付订单')}}</span>
						 </view>
						 <span> 
							<i v-if="item.order_role==2" class="iconfont icon-daifu"></i>
							{{orderStatus[item.order_status-1]}}
						 </span>
					 </view>
					 <!-- 商品详情 -->
					 <view class="order_item" @click="orderDetail(item.id,item.order_status)" v-for="(goods,gidx) of item.goods" :key="gidx">
						
						 <view class="o-left">
							<!-- <image class="order_img" src="../../static/images/activity.jpeg" mode="aspectFill"></image> -->
							 <image class=" order_img image" :class="{lazy:!goods.show}" :data-index="goods.goodsIndex" @load="imageLoad" :src="goods.show ? goods.img:''" />
							 <view class="image placeholder loadimg" :class="{loaded:goods.loaded}" ><i class="iconfont icon-image"></i></view>	
						 </view>
						
						 <view class="omid">
							 <p>{{goods.name}}</p>
							 <span>规格:{{goods.format_spec}}</span>
						 </view>
						 <view class="o-right">
							 <span>￥{{goods.price}}</span>
							 <view class="or-bottom">
								 <span>× {{goods.quantity}}</span>
								 <span v-if="parseFloat(goods.coupon_fee)  != 0 ">优惠：{{goods.coupon_fee}}</span>
							 </view>
						 </view>
					 </view>
					 
					 <!-- 订单总价 -->
					 <view class="total_box">
						 <view class="total_one">
								<view class="to_left">
									<span class="sh_btn">申请售后</span>
									<span class="qrcode_btn" v-if="item.order_status != 2">生成二维码</span>
								</view>
								<view class="to_right">
									<span>共{{item.number}}件</span>
									<span>运费:￥{{item.freight}}</span>
								</view>
						 </view>
						<view class="total_two">
							<span>下单时间:{{item.create_time}}</span>
							<span>实付:￥{{item.fact_pay_price}}</span>
						</view>
					 </view>
					
				 </view>
				  <view class="loadfinshed_text" v-if="finshed">没有更多商品了</view>
		 </scroll-view>
		 <level ref="levelRef"/>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	import qstab from '@/components/QS-tabs/QS-tabs.vue'
	import level from '@/components/level.vue'
	export default {
		components:{customnav,qstab,level},
		data() {
			return {
				tabs:['全部','待付款','待发货','待收货'],
				tabwidth:0,
				currentidx:0,
				shopInfo:{},
				orderList:[],
				dfkList:[],//待付款
				orderGoodsList:[],
				domain2:this.$store.state.domain2,
				domain:this.$store.state.domain,
				shopId:'',
				page:1,
				finshed:false,
				type:'',
				goodsIndex:-1,
				orderStatus:['待付款','已付款','已发货','已完成订单','已取消订单'],//订单类型：1 账期订单 2 到付订单 3 现付订单
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
				 setMarkTop:0,
				 marktop1:0,
				 marktop2:0,
				 marktop3:0,
				 marktop4:0,
				
			};
		},
		
		onLoad(option){
			//tabs宽度
			this.tabwidth = uni.getSystemInfoSync().windowWidth / 4;
			//图片懒加载
			this.windowHeight = uni.getSystemInfoSync().windowHeight
			this.shopId = option.shopId
			this.getOrderList()
			
		},
		methods:{
			//图片懒加载
			scroll(e){
				this.load()
				//记录上次滚动位置，tab切换时回到上次位置
				switch(this.currentidx+1){
					case 1:this.marktop1 = e.detail.scrollTop
					break;
					case 2:this.marktop2 = e.detail.scrollTop
					break;
					case 3:this.marktop3 = e.detail.scrollTop
					break;
					case 4:this.marktop4 = e.detail.scrollTop
					break;
				}
				
			},
			load() {
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.lazy').boundingClientRect((images) => {
					
					images.forEach((image, index) => {
						if (image.top <= this.windowHeight) {
							this.orderGoodsList[image.dataset.index].show = true;
						}
					})
				}).exec()
			},
			imageLoad(e) {
				
				this.orderGoodsList[e.target.dataset.index].loaded = true
				if(this.currentidx == 0){
					this.setMarkTop = this.marktop1
				}
				//记录上次滚动位置，tab切换时回到上次位置
				switch(this.currentidx+1){
					case 1:this.setMarkTop = this.marktop1
					break;
					case 2:this.setMarkTop = this.marktop2
					break;
					case 3:this.setMarkTop = this.marktop3
					break;
					case 4:this.setMarkTop = this.marktop4
					break;
				}
				
			},
			//图片懒加载
			handleChange(idx){
				
				this.currentidx = idx
				this.goodsIndex=-1
				this.type = idx
				this.orderGoodsList=[]
				this.orderList = []
				this.show=false
				this.page=1
				this.getOrderList()
				
				
			},
			//滚动加载更多
			handlescroll(e){
					 if(this.finshed) return 
					this.page++
					this.getOrderList()
							
			},
			//查看订单详情
			orderDetail(orderId,status){
				
				uni.navigateTo({
					url:'/pages/personal/shopOrderDetail?orderId='+orderId+'&shopId='+this.shopId+'&orderStatus='+status
				})
			},
			//申请等级
			levelUp(shopId){
				this.$refs.levelRef.showLevel(shopId)
			},
			getOrderList(){
				let _this = this
				this.$dyrequest({
					url:'/SmallShop/ordermanage',
					method:'POST',
					data:{
						id:this.shopId,
						page:this.page,
						order_status:this.type
					}
					
				}).then(res=>{
					this.shopInfo = res.data.data.shopMsg
				
					res.data.data.orderList.map((item,idx)=>{
						
							item.order_status = Number(item.order_status)
						
							//处理商品信息
							item.goods.map((gitem,idx)=>{
									 _this.$set(gitem,'show',false)
									 _this.$set(gitem,'loaded',false)
									  _this.$set(gitem,'format_spec',false)
									  _this.goodsIndex+=1
									   _this.$set(gitem,'goodsIndex',_this.goodsIndex)
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
									 
									 gitem.img = _this.domain + gitem.img
									 //存储商品列表做懒加载
									 _this.orderGoodsList.push(gitem)
									 //待付款列表
									 
															 
							})
								_this.orderList.push(item)
							
					})
						console.log(_this.orderList)
						
						
					//图片懒加载
					
					
					if (!this.show) {
						this.show = true
						
						setTimeout(() => {
							this.load()
						}, 100)
					}
					//图片懒加载
					//判断没有数据，不再请求
					if(res.data.data.orderList.length == 0){
							this.finshed = true
					}
						//console.log( _this.orderList)
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
.order_list{
	width:100%;
	 height:calc(100vh - 199px - var(--status-bar-height)); 
	//height:541px;
}
//订单列表

.order_box{
	background:#fff;
	margin-bottom:10px;
	padding:10px 10px 0;
	.ordernum{
		display:flex;
		justify-content: space-between;
		padding:10px 0;
		&_left{
			display: flex;
			align-items: center;
			color:#999;
			span:last-child{
				border:1px solid #147AED;
				color:#147AED;
				border-radius:4px;
				padding:3px 5px;
				margin-left:5px
			}
		}
		span{
			display: flex;
			align-items: center;
			color:#E5640D;
			i{
				color:#147AED;
				margin-right:5px;
			}
		}
	}
	.order_item{
	
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		border-top:1px solid #eee;
		padding:15px 0;
		.o-left{
			position:relative;
			width:50px;
			height:50px;
			flex-shrink: 0;
			overflow: hidden;
			    border-radius: 5px;
			.order_img{
				width:100%;
				height:100%;
				border:1px solid #eee;
			}
		}
		.omid{
			display: flex;
			flex-direction: column;
			color:#505050;
			padding-left:10px;
			flex:1;
			justify-content: space-between;
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
				padding:3px 10px;
				margin-top:5px;
				align-self: baseline;
			}
		}
		.o-right{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-shrink: 0;
			align-self:stretch;
			text-align:right;
			margin-left:10px;
			span{
				color:#CF2503
			}
			.or-bottom{
				display: flex;
				flex-direction: column;
				margin-top:10px;
				span:last-child{
					color:#999;
					
				}
			}
		}
	}
	.total_box{
		border-top:1px solid #eee;
		.total_one{
			padding:10px 0 ;
			display: flex;
			.to_left{
				width:50%;
				span{
					border-radius:20px;
					padding:3px 10px;
					color:#fff;
					text-align: center;
					margin-right:10px;
					box-sizing: border-box;
				}
				.sh_btn{
					background:#078CF3
				}
				.qrcode_btn{
					background:#EE453C
				}
				
			}
			.to_right{
				width:50%;
				display: flex;
				justify-content: flex-end;
				color:#999;
				
				span{
					margin-left:1rem;
					
				}
				
			}
			
		}
		.total_two{
			
			display: flex;
			justify-content: space-between;
			align-items: center;
			color:#999;
			padding-bottom:10px;
			span:last-child{
				font-size:14px;
				color:#EE453C;
				font-weight: 600;
			}
		}
	}
}

//头部业务员信息
.shoplist_content{
	margin-bottom:10px;
}
.shoplist_content_item{
		padding:.5rem;
		background:#fff;
		border-radius: 4px;
		
	}
	.shoplist_content_item_top{
		
		display: flex;
		justify-content: space-between;
		
	}
	.top_left{
		display: flex;
	}
	.top_info{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left:.5rem;
		a{
			display:flex;
			color:#1D88E2;
			
		}
		&>span:first-child{
			font-size:14px;
			margin-bottom:5px;
		}
		&>span:last-child{
			display:flex;
			color:#1D88E2;
			i{
				vertical-align: bottom;
				margin-right:5px;
			}
		}
	}
	.top_img{
		width:50px;
		height:50px;
		border-radius: 4px;
	}
	.shoplist_content_item_bottom{
		display: flex;
		align-items: center;
		margin-top:.5rem;
		i{
		
			color:#44AE69;
			font-size:12px;
		}
		p{
			color:#888;
			padding-left:5px;
			@include longtext;
		}
	}
	.top_right_type{
		display: flex;
		align-items: center;
		color:#888;
		span{
			border-radius: 20px;
			background:#23A6F1;
			color:#fff;
			padding:3px 10px;
			font-size:14px;
		}
	}
	
</style>

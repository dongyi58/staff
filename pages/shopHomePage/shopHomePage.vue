<template>
	<view class="wrap shop_homepage_wrap">
			<view class="status_bar index_status_bar"></view>
			<customnav :navtitle="supllierInfo.contactname" :ismsg="false" :isSearch="true"  backType="1" backurl="/pages/shops/shops" />
			
			<view class="header-bkg"></view>
			<!-- 小店信息展示 -->
			<view class="supInfo">
				<view class="getcut"><span>已选择小店</span><span @click="openPopup">领取供应商优惠券</span></view>
				<view class="supInfo-top">
					<view class="st-left">
						
						<image v-if="shopInfo.head_sculpture" class="st-left-img" :src="domain+shopInfo.head_sculpture" mode="aspectFill"></image>
						<image v-else class="st-left-img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
						<view class="st-name">
							<h4>{{shopInfo.shopname}}</h4>
							<view class="h_location">
								<i class="iconfont icon-weizhi"></i>
								<p>{{shopInfo.address}}</p>
							</view>
						</view>
					</view>
					<view>
						<!-- <i class="iconfont icon-you"></i> -->
					</view>
				</view>
			</view>
			<!-- 销售排行 -->
			<scroll-view class="homepage_list"  :id="scrollId" @scroll="scroll" scroll-y @scrolltolower="handlescroll">
						
						<view class="sales_rank">
								<view class="content_header">
										<span>销售排行</span>
										<navigator class="sale_rank_nav" url="/pages/shopHomePage/salesRank" open-type="navigate">更多<i class="iconfont icon-youxiang"></i></navigator>
								</view>
								<view class="sales_content">
									<ul>
										<li 
										@click="goto_goodsdetail(item.goods_id)" 
										:key="idx"
										v-for="(item,idx) of salesrank">
											<view class="sales_img" :style="{backgroundImage:'url('+item.img+')'}">
												<view class="rank">NO.{{idx+1}}</view>
											</view>
											<p>{{item.d_name}}</p>	
											<view class="sales_num"><span>日销量</span>{{item.sale}}</view>
											
										</li>
										
									</ul>
								</view>
							
						</view>
						<!-- 活动专区 -->
						<!-- <view class='activity_banner'>
							<view class="content_header">
									<span>活动专区</span>
									<span @click="activeMore">更多<i class="iconfont icon-youxiang"></i></span>
							</view>
							
							<view style="background:url(../../static/images/activity.gif)"
							class="activity_banner_img">
							</view>
						</view> -->
						<!-- 商品列表 -->
						<view class="goods_list_wrap">
							<view class="content_header">
								<span>全部商品</span>
							</view>
							<!-- 第一个商品大图 -->
							
							<!-- 商品列表 -->
							 <view class="goods_list">
								
								<view class="goods_item"  @click="goto_goodsdetail(item.goods_id)"  v-for="(item,idx) of goodsList" :key="idx">
									<view class="goods_img_box">
										<!-- <image lazy-load class="image" :src="item.img"  mode="aspectFill" /> -->
										<image class=" goods_img image" :class="{lazy:!item.show}" :data-index="idx" @load="imageLoad" :src="item.show?item.img:''" />
										<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
									</view>
									<p class="goods_name">{{item.name}}</p>
									<view class="goods_price">
										<view  class="priceBox"><span class="priceTypeSpan">{{item.priceType}}</span>  ¥{{item.showPrice}}</view> <!-- <i class="iconfont icon-jia"></i> -->
										<image v-if="item.activity" class="activity_gif" src="../../static/images/fire.gif" mode=""></image>
									</view>
										
								</view>
								<!-- <view class="goods_item_one" @click="goto_goodsdetail(item.goods_id)" v-else>
									<view class="goods_img_box">
										<image class="goods_img" :src="goods_one.img" mode="aspectFill" :lazy-load="true"></image>
										<image class=" goods_img image" :class="{lazy:!item.show}" :data-index="0" @load="imageLoad" :src="item.show?item.img:''" />
										<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
									</view>
									<p class="goods_name">{{item.name}}</p>
									<view class="goods_price"><view class="priceBox">{{item.showPrice}}</view><i class="iconfont icon-jia"></i></view>
								</view> -->
								<view class="loadfinshed_text" v-if="finshed">没有更多商品了</view>
							</view>
							
						</view>
					</scroll-view>
			   <popup ref="popup" type="center" class="home_popup" :popstyle="{width:'90%',height:'350px',overflow:'hidden'}">
				  <!-- 折扣券 -->
					<view class="yhq_title">来领券吧
					 <i class="iconfont icon-ziyuan" @click="closePopup()"></i>
					 </view>
					<view class="yhqbox">
						<view 
						class="yhq_item"
						v-for="(item,idx) of goodsDiscount"
						v-if="item.way_id == 1"
						:key="idx"
						style="background:url(../../static/images/yhq.png)">
						   <image v-if="item.take" class="takeimg" src="../../static/images/take.png"></image>
							<view class="yhq_left">
								<view class="yhq_left_one">
									<span>{{item.rule[0].rebate*10}} 折</span>
									<span>{{item.start_time}} - {{item.end_time}}</span>
								</view>
								<view class="yhq_left_two">
								<!-- 	<span>满{{item.rule[0].money}}元使用</span> -->
									<span>部分商品可用</span>
								</view>
							</view>
							<view class="yhq_right">
								<span>店铺折扣券</span>
								<span  class="usestyle2" v-if="!item.take && item.rule[0].status !=1" @click="getYhq(item.activity_id,'',idx)">领 取</span>
								<span  class="takestyle2" v-else @click="useDiscount(item.activity_id,item.way_id)">去使用</span>
							</view>
						</view>
						<!-- 满减券 -->
						<view
						class="yhq_item"
						v-else
						style="background:url(../../static/images/yhq2.png)">
						   <image v-if="item.take" class="takeimg" src="../../static/images/take.png"></image>
							<view class="yhq_left">
								<view class="yhq_left_one">
									<span><i>¥</i>{{item.rule[0].rebate}}</span>
									<span>{{item.start_time}} - {{item.end_time}}</span>
								</view>
								<view class="yhq_left_two">
									<span>满{{item.rule[0].money}}元使用</span>
									<span>部分商品通用<br>(特价除外)</span>
								</view>
							</view>
							<view class="yhq_right">
								<span>店铺满减券</span>
								<span  class="usestyle" v-if="!item.take && item.rule[0].status !=1" @click="getYhq(item.activity_id,item.rule[0].money,idx)">领 取</span>
								<span  class="takestyle" v-else @click="useDiscount(item.activity_id,item.way_id)">去使用</span>
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
	export default {
		components:{customnav,popup},
		data() {
			return {
				 supllierInfo:{},
				 shopInfo:{},
				 salesrank:[],
				 goods_one:[],
				 goodsList:[],
				 goodsDiscount:[],
				 finshed:false,
				 domain:this.$store.state.domain,
				 domain2:this.$store.state.domain2,
				 scrollId: "scroll",
				 page:1,
				 loaded:false,
				 //图片懒加载
				 windowHeight: 0,
				 show: false,
				  //图片懒加载
			};
		},
		computed:{
			shopId(){
				return this.$store.state.shopId
			},
			getcurrent(){
				return this.$store.state.currentIndex
			},
			
		},
		watch:{
			// getcurrent(n,o){
			// 	console.log(n)
			// 	//下标为3时加载购物车数据，
			// 	if(n == 0){
				
			// 	this.getgoods_list(this.shopId)
						 
			// 	}
			// }
			getcurrent:{
				handler(n,o){
					if(n == 0 && !this.loaded){
						this.loaded = true
						this.getgoods_list(this.shopId)
								 
						}
				},
				immediate:true
			}
		},
		mounted(){
			
			
			//图片懒加载
			this.windowHeight = uni.getSystemInfoSync().windowHeight-230
			
			if (!this.show) {
				this.show = true
				
				setTimeout(() => {
					this.load()
				}, 100)
			}
			//图片懒加载
		},
		
		methods:{
			//图片懒加载
			scroll(){
				
				this.load()
			},
			load() {
				const query = uni.createSelectorQuery().in(this)
				
				query.selectAll('.lazy').boundingClientRect((images) => {
			
					images.forEach((image, index) => {
						// console.log(image.top)
						if (image.top <= this.windowHeight) {
							this.goodsList[image.dataset.index].show = true;
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.goodsList[e.target.dataset.index].loaded = true
			},
			//图片懒加载
			
			//领取优惠券弹窗
			 openPopup(){
				 if(this.goodsDiscount.length == 0){
						uni.showToast({
							icon:'none',
							title: '暂无可用优惠券'
						});
						return
				 }
			     this.$refs.popup.open()
			  },
			  //使用优惠券
			  
			  useDiscount(couponId,type){
				  uni.navigateTo({
				  	url:'/pages/yhq/yhq?couponId='+couponId+'&type='+type
				  })
			  },
			  //关闭弹窗
			 closePopup(){
				this.$refs.popup.close()
			 },
			 //滚动加载更多
			 handlescroll(e){
				 if(this.finshed) return 
				this.page++
				this.getgoods_list(this.shopId)
				
			 },
			 goto_goodsdetail(goodsId){
				
				 uni.navigateTo({
				 	url:'/pages/goodsDetail/goodsDetail?dtype=1&shopId='+this.shopId+'&goods_id='+goodsId
				 })
			 },
			 //更多活动
			 activeMore(){
				 this.$emit('changeidx',2)
			 },
			//领取优惠券
			getYhq(activiId,discount_money,idx){
				let _this = this
			
				this.$set(this.goodsDiscount[idx],'take',true)
				this.$dyrequest({
					url:'/Supplier/getCoupon',
					method:'POST',
					data:{
						couponId:activiId,
						id:_this.shopId,
						money:discount_money
					},
					
				}).then(res=>{
					uni.showToast({
						icon:'none',
						title: res.data.message
					});
				})
			},
			 //获取商品列表
	 getgoods_list(id){
				let _this = this
				 this.$dyrequest({
						url:'/IndexSales/goodsIndex', 
						method:'POST',
						data:{
							page:_this.page,
							id:id
						}
				 }).then(res=>{
						
						 if(_this.page == 1){
							//供应商信息
							_this.supllierInfo = res.data.data.suppliermsg
							console.log(_this.supllierInfo)
							// 存储供应商id
							_this.$store.commit('SET_SUPPLIERID',_this.supllierInfo.id)
							//小店信息
							_this.shopInfo = res.data.data.shopmsg
							this.$store.commit('SET_SHOPINFO',_this.shopInfo)
							//排名前三商品
							// _this.salesrank= res.data.data.goods.sales_rank
							 res.data.data.goods.sales_rank.map(item=>{
								 item.img = _this.domain + item.img
								 _this.salesrank.push(item)
							 })
							
							
							//优惠券
							_this.goodsDiscount = res.data.data.coupon || []
							// if(_this.goodsDiscount.length > 0){
							// 	res.data.data.coupon.map(item=>{
							// 		 item.start_time = item.start_time.split(' ')[0].replace(/-/g,".")
							// 		 item.end_time = item.end_time.split(' ')[0].replace(/-/g,".")
							// 	})
							// }
							console.log(_this.goodsDiscount)
						 }
						 
						 //全部商品列表
						 
						 res.data.data.goods.all.data.map((item,idx)=>{
							item.img = _this.domain + item.img
								 _this.$set(item,'show',false)
								 _this.$set(item,'loaded',false)
								 
								 if(item.sale_type == 3){
									  _this.$set(item,'showPrice',item.retail_price+'-'+item.wholesale_price)
								 	
								 }else if(item.sale_type == 2){
								 		 _this.$set(item,'showPrice',item.retail_price)
								 }else{
								 	 _this.$set(item,'showPrice',item.wholesale_price)
								 }
								 
							    _this.goodsList.push(item)
								
							 
						 })
						
						 //判断没有数据，不再请求
						 if(res.data.data.goods.all.data.length == 0){
							_this.finshed = true
						 }
						 
				 })
				
				
			 }
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.homepage_list{
		margin-top:28px;
		width: 100%;
		height: calc(100vh - 213px);
	}
	.activity_gif{
		width:50px;
		height:18px;
	}
.header-bkg{
		position:absolute;
		width: 100%;
		height:170rpx;
		overflow-x:hidden;
		
		&::after{
			content:'';
			position: absolute;
			left: 50%;
			top: 0%;
			transform: translate(-50%, 0);
			width: 130%;
			height: 80px;
			border-radius: 0 0 60% 60%;
			background:linear-gradient(to right, #21a4f9,#20a2f8,#1f95f4,#1d89f0,#1c80ed,#1b76ea,#0064ef);
		}
	}
	.supInfo{
		z-index:99;
		position:relative;
		top:4%;
		left:2.5%;
		width:95%;
		background:#fff;
		padding:.5rem;
		font-size:24rpx;
		@include br5;
		.st-left-img{
			@include roundavatar;
			flex-shrink: 0;
		}
		.getcut{
			display: flex;
			justify-content: space-between;
			span:first-child{
				color:$uni-text-color-grey
			}
			span:last-child{
				border:1px solid $color-1;
				border-radius:4px;
				color:$color-2;
				padding:2px 5px;
			}
		}
		.supInfo-top{
			display:flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom:5px;
			.st-left{
				width:80%;
				display: flex;
				align-items: center;
				
				.st-name{
					display: flex;
					flex-direction: column;
					width:80%;
					margin-left:10px;
					h4{
						font-size:14px;
						font-weight: normal;
						line-height: 1;
						@include longtext
					}
					i{
						color:$uni-text-color-grey;
						font-size:16px
					}
					p{
						@include longtext
					}
					.h_location{
						display:flex;
						margin-top:10px;
						i{
							color:#44AE69
						}
						p{
							color:$uni-text-color-grey;
						}
					}
				}
			}
			
			
		}
		
	}
	.sales_rank{
		padding:10px;
	}
	.content_header{
		padding:20px 0;
			display: flex;
			justify-content: space-between;
		
		
		
		span:first-child{
			font-size:14px;
			font-weight: 600;
			color:#4D4D4D;
		}
		.sale_rank_nav,span:last-child{
			display: flex;
			align-items: center;
			i{
				color:$color-1;
				margin-left:5px;
			}
		}
	}
	.sales_content{
		&>ul{
			display: flex;
			justify-content: space-between;
			padding:0;
			li{
				position:relative;
				display:flex;
				flex-direction: column;
				position:relative;
				flex:0 1 28%;
				list-style: none;
				text-align:center;
				
				p{
					display: flex;
					flex-direction: column;
					justify-content: center;
					height: 90rpx;
					@include longtext2;
					padding:10px 0 5px;
					box-sizing: border-box;
				}
			}
			li:nth-child(2)::before{
				content:'';
				position:absolute;
				top:0;
				left:-15%;
				width:1px;
				height:100%;
				background:#eee;
			}
			li:nth-child(2)::after{
				content:'';
				position:absolute;
				top:0;
				right:-15%;
				width:1px;
				height:100%;
				background:#eee;
			}
			.sales_img{
				position:relative;
				width:100%;
				height:0;
				padding-bottom:100%;
				background-size:cover !important;
				border-radius:5px;
			}
			.rank{
				position:absolute;
				right:-5px;
				bottom:-5px;
				width:35px;
				height:35px;
				color:#fff;
				font-weight: 600;
				text-align:center;
				line-height:40px;
				border-radius:50%;
				background:linear-gradient(to bottom,#FE8C58,#FD4940);
			
			}
			.sales_num{
				font-size:14px;
				letter-spacing: 2px;
				span{
					color:#EE453C;
					margin-right:5px;
					letter-spacing: 0;
					font-size:12px;
				}
			}
		}
	}
	
	//优惠券
	.yhqbox{
		height: 290px;
		overflow: scroll;
		
	}
	.yhq_title{
		position:relative;
		width:100%;
		text-align:center;
		margin:10px 0 20px;
		font-size:14px;
		i{
			position:absolute;
			top:0;
			right:0;
		}
	}
	.yhq_item{
		position:relative;
		display:flex;
		width:100%;
		height:90px;
		background-size:cover !important;
		margin-bottom:10px;
		color:#fff;
		.takeimg{
				width: 40px;
			    height: 34px;
			    position: absolute;
			    right: 0;
		}
		.yhq_left{
			width:75%;
			display: flex;
			.yhq_left_two,.yhq_left_one{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				span:last-child{
					text-align: center;
				}
			}
			.yhq_left_one{
				width:50%;
				span:first-child{
					display: flex;
					align-items: center;
					font-size:2em;
					i{
						font-size:16px;
						margin-right:3px;
					}
				}
				span:last-child{
					transform: scale(.7);
				}
			}
			.yhq_left_two span{
					font-size:10px;
					// transform: scale(.7);
			}
		}
		.yhq_right{
			display:flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			span:last-child{
				display:block;
				width:40px;
				border-radius:20px;
				padding:3px 5px;
				margin-top:5px;
				text-align:center;
			}
			.usestyle{
				background:#fff;
				color:#F93232;
			}
			.takestyle{
				background:#FB5151;
				color:#fff;
			}
			.usestyle2{
				background:#fff;
				color:#F93232;
			}
			.takestyle2{
				background:#FD911F;
				color:#fff;
			}
		}
	}
	
	.activity_banner{
		width:100%;
		
		padding:10px;
		.activity_banner_img{
			width:100%;
			height:150px;
			background-size:100% 100% !important;
		}
	}
	.home_popup .uni-popup__wrapper-box{
		width:90%;
		height:350px;
		overflow: hidden;
	}
	.priceBox{
		display:flex;
		align-items: center;
	}
	.priceTypeSpan{
		font-size:12px;
		font-weight: normal;
		// border:1px solid #EE453C;
		border-radius:4px;
		margin-right: 5px;
	}
</style>

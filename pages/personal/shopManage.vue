<template>
	<view class="shopmanage_wrap wrap">
			<view class="status_bar index_status_bar"></view>
			<customnav
			 :ismsg="false" 
			 :isSearch="false" 
			 :midtitle="true"
			 navtitle="小店管理"
			 :cancletext="false"
			 :focus="false"
			 />
			 <view class="shopmanage_header">
				 <span>{{staffInfo.name}}</span>
				 <image v-if="staffInfo.img" class="shopmanage_header_img" :src="staffInfo.img" mode="aspectFill"></image>
				 <image v-else class="shopmanage_header_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
			 </view>
			 <view>
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
				 animationLineWidth="30"
				 >
				 </qstab>
				 <view>
					 <!-- 搜索栏 -->
					 <view class="shoplist_content_search">
					 	<view class="searchbkg"></view>
					 	<i class="iconfont icon-sousuo"></i>
					 	<input type="text" 
					 	confirm-type="search" 
						v-model="keyword"
					 	@confirm="shopSearch"
					 	placeholder="请输入小店名称">
					 </view>
				 </view>
				<scroll-view scroll-y="true" 
							@scroll="handleScroll"
							:scroll-top="scrollTop"
				 			 class="shopmanage_list">
				 		 
				 	<view class="shoplist_content dutyShop" v-if="currentidx==0">
				 			<view class="shoplist_content_item" 
				 			v-for="(item,idx) of shopList"
				 			:key="idx"
				 			>
				 				<view class="shoplist_content_item_top">
				 					<view class="top_left">
				 						
				 							<image v-if="item.head_sculpture" class="top_img" :src="domain2+item .head_sculpture" mode="aspectFill"></image>
				 							<image v-else class="top_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
				 							
				 							<view class="top_info">
				 								<span>{{item.shopname}}</span>
				 								<span @click="checkShopInfo(item.id)">查看基本信息</span>
				 							</view>
				 					</view>
				 					<view class="top_right_type">
				 						小店类型：{{item.business_scope}}
										<view class="right_btn">
											<span @click="levelUp(item.id)">申请等级</span><span @click="order(item.id)">订单管理</span>
										</view>
				 					</view>
				 				</view>
				 				<view class="shoplist_content_item_bottom">
									<p><i class="iconfont icon-weizhi"></i> {{item.address}}</p>
									<!-- <span @click="gotoShopDetail(item.id)">前往 <i class="iconfont icon-you"></i></span> -->
				 				</view>
				 			</view>
				 	</view>
					<view class="shoplist_content tjShop" v-if="currentidx==1">
							<view class="shoplist_content_item" 
							v-for="(item,idx) of dutyShopList"
							:key="idx"
							>
								<view class="shoplist_content_item_top">
									<view class="top_left">
										
											<image v-if="item.head_sculpture" class="top_img" :src="domain2+item .head_sculpture" mode="aspectFill"></image>
											<image v-else class="top_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
											
											<view class="top_info">
												<span>{{item.shopname}}</span>
												<span @click="checkShopInfo(item.id)">查看基本信息</span>
											</view>
									</view>
									<view class="top_right_type">
										小店类型：{{item.business_scope}}
										<view class="right_btn">
											<span @click="levelUp(item.id)">申请等级</span><span @click="order(item.id)">订单管理</span>
										</view>
									</view>
								</view>
								<view class="shoplist_content_item_bottom">
									<p><i class="iconfont icon-weizhi"></i> {{item.address}}</p>
									<!-- <span @click="gotoShopDetail(item.id)">前往 <i class="iconfont icon-you"></i></span> -->
								</view>
							</view>
					</view>
				 </scroll-view>
			 </view>
			<level ref="levelRef"/>
			<backTop :scrollTop="topval" @backTop="backTop" />
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	import qstab from '@/components/QS-tabs/QS-tabs.vue'
	import level from '@/components/level.vue'
	export default {
		components: {qstab,customnav,level},
		data() {
			return {
				tabs:[
					{
						name:'推荐小店',type:'tj',
					},
					{
						name:'责任小店',type:'duty'
					}
				],
				tabwidth:0,
				currentidx:0,
				domain2:this.$store.state.domain2,
				type:'duty',
				shopList:[],
				dutyShopList:[],
				topval:0,
				scrollTop:-1,
				keyword:''
			};
		},
		watch:{
			keyword(n,o){
				if(n == ''){
					if(this.currentidx == 0){
						this.shopList=[]
						this.getShop()
					}else{
						this.dutyShopList=[]
						this.getDutyShop()
					}
				}
				
			},
		},
		computed:{
			staffInfo(){
				return this.$store.state.staffInfo
			}
		},
		onLoad(){
			//tabs宽度
			this.tabwidth = uni.getSystemInfoSync().windowWidth / 2
		
			this.getShop()
			this.getDutyShop()
			// this.tabs.push('责任小店('+dutyShopList.length+')','推荐小店('+dutyShopList.length+')')
		},
		methods:{
			backTop(){
				this.scrollTop = 0
				setTimeout(()=>{
					this.scrollTop = -1
				},500)
			},
			handleScroll(e){
				this.topval = e.target.scrollTop
			},
			handleChange(idx){
				this.currentidx = idx
				this.keyword=''
				if(this.currentidx == 0){
					this.shopList=[]
					this.getShop()
				}else{
					this.dutyShopList=[]
					this.getDutyShop()
				}
			},
			gotoShopDetail(id){
				console.log(id)
				uni.navigateTo({
				    url: '/pages/shopHomePage/homeindex?id='+id
				});
				this.$store.commit('SET_CURRENINDEX',0)
			},
			//申请等级
			levelUp(shopId){
				this.$refs.levelRef.showLevel(shopId)
			},
			order(shopId){
				uni.navigateTo({
					url:'/pages/personal/shopOrder?shopId='+shopId
				})
			},
			//查看小店基本信息
			checkShopInfo(shopId){
				uni.navigateTo({
					url:'/pages/personal/shopBasicInfo?shopId='+shopId
				})
			},
			shopSearch(){
				if(this.currentidx == 0){
					this.shopList=[]
					this.getShop()
					
				}else{
					this.dutyShopList=[]
					
					this.getDutyShop()
				}
			},
			
			getShop(){
				let _this = this
				this.$dyrequest({
					url:'/SmallShop/getShopMsg',
					method:'POST',
					data:{
						keyword:this.keyword
					}
				}).then(res=>{
						this.$set(this.tabs[0],'name','推荐小店')
					_this.shopList = res.data.data.ShopMsg
					if(_this.shopList && _this.shopList.length>0){
						this.$set(this.tabs[0],'name',this.tabs[0].name+'('+this.shopList.length+')')
					}else{
						this.$set(this.tabs[0],'name',this.tabs[0].name+'(0)')
						
					}
					
				})
				
			},
			getDutyShop(){
				
				this.$dyrequest({
					url:'/SmallShop/getShopMsg',
					method:'POST',
					data:{
						type:this.type,
						keyword:this.keyword
					}
				}).then(res=>{
					this.$set(this.tabs[1],'name','责任小店')
					this.dutyShopList = res.data.data.ShopMsg
					if(this.dutyShopList && this.dutyShopList.length > 0){
						
						this.$set(this.tabs[1],'name',this.tabs[1].name+'('+this.dutyShopList.length+')')
					}else{
						this.$set(this.tabs[1],'name',this.tabs[1].name+'(0)')
					}
					
					
				})
			},
		}
	}
</script>

<style lang="scss">
@import '@/static/css/style.scss';
	.uni-popup__wrapper-box{
		width:80%;
	}
	.shopmanage_list{
			width:100%;
			height:calc(100vh - 195px - var(--status-bar-height));
		
		}
		//小店管理
	
	.shopmanage_header{
		position:relative;
		display:flex;
		align-items: flex-end;
		height:50px;
		padding:10px;
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
		span{
			color:#fff;
			font-size:30rpx
		}
	}
	.shopmanage_header_img{
			position:absolute;
			left:50%;
			top:30%;
			transform: translate(-50%,0%);
			width:60px;
			height:60px;
			border-radius: 50%;
			border:2px solid #85c9ff;
		}
	.shoplist_content{
			padding:0 .5rem;
			box-sizing: border-box;
		}
	.shoplist_content_search{
			position:relative;
			padding:.5rem 1rem;
			i{
				position:absolute;
				top: 15px;
				left: 33px;
				color:$color-1;
				font-size:1.5em;
			}
			input{
				border:1px solid #d2d2d2;
				border-radius: 20px;
				font-size:14px;
				padding-left:2.5rem;
				height:30px;
				transition:all .3s;
			}
		}
		.shoplist_content_item{
			padding:.5rem;
			background:#fff;
			border-radius: 4px;
			margin-bottom:10px;
		}
		.shoplist_content_item_top{
			
			display: flex;
			justify-content: space-between;
			
		}
		.top_left{
			display: flex;
			align-items: center;
			width: 50%;
			    flex: 1;
		}
		.top_info{
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left:.5rem;
			width:70%;
			a{
				display:flex;
				color:#1D88E2;
				
			}
			&>span:first-child{
				font-size:14px;
				margin-bottom:5px;
				max-width:100%;
				@include  longtext;
			}
			&>span:last-child{
				border:1px solid #1D88E2;
				color:#1D88E2;
				text-align:center;
				border-radius:4px;
				padding:2px 0;
			}
		}
		.top_img{
			width:50px;
			height:50px;
			border-radius: 4px;
			flex-shrink: 0;
		}
		.shoplist_content_item_bottom{
			display: flex;
			align-items: center;
			margin-top:.5rem;
			justify-content: space-between;
			
			p{
				display: flex;
				align-items: center;
				color:#888;
				padding-left:5px;
				@include longtext;
				i{
				
					color:#44AE69;
					font-size:12px;
				}
			}
			span{
				display: flex;
				align-items: center;
				color:#1D88E2;
				i{
					font-size:12px;
				}
			}
		}
		.top_right_type{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			    align-items: flex-end;
			color:#888;
			.right_btn{
				display: flex;
				
				span{
					border-radius: 20px;
					text-align: center;
					color:#fff;
					padding:5px 10px;
					margin-left:10px;
				}
				span:first-child{
					background:#23A6F1
				}
				span:last-child{
					background:#EE453C
				}
			}
		}
		
	  @media screen and (max-width:320px){
		  .right_btn{
				span{
					
					padding:3px 5px !important;
				}
		  }
		  .top_img{
		  	width:35px;
		  	height:35px;
		  	border-radius: 4px;
		  }
	  }
</style>

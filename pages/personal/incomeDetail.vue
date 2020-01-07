<template>
	<view class="wrap incomeDetail_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="收入详情"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="income_header">
			
			 <view class="shopReturn">
				 <span>收入-平台返点</span>
				 <h2><span>￥</span>{{shopfee}}</h2>
			 </view>
		 </view>
		 <view class="recommendShop_count">
			 <ul>
			 	<li>
					<span>推荐小店采购小计(元)</span>
					<span>{{totalFee}}</span>
				</li>
				<li>
					<span>推荐小店返点比例(%)</span>
					<span>{{ratio}}</span>
				</li>
			 </ul>
		 </view>
		 <scroll-view scroll-y="true" class="incomeDetail_list">
				<view class="shoplist_content">
						<view class="shoplist_content_item" 
							v-for="(item,idx) of incomeDetailList"
							:key="idx"
						>
							<view class="shoplist_content_item_top">
								<view class="top_left">
										<image v-if="item.head_sculpture" class="top_img" :src="domain2+item.head_sculpture" mode="aspectFill"></image>
										<image v-else class="top_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
										
										<view class="top_info">
											<span>{{item.shopname}}</span>
											<span>采购额:{{item.total}}</span>
										</view>
								</view>
								<view class="top_right_type">
									<span>{{item.cgtime}}</span>
									<span>返点额:{{item.yfee}}</span>
								</view>
							</view>
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
				incomeDetailList:[],
				totalFee:'',
				ratio:'',
				shopfee:'',
				monthVal:'',
				fee:'',
				time:'',
				domain2:this.$store.state.domain2
			};
		},
		onLoad(option){
			this.fee = option.fee
			this.time = option.time
			this.getIncomeDetail()
		},
		
		methods:{
		
			getIncomeDetail(){
				 this.$dyrequest({
					 url:'/MyorderSales/platFormRevenueDetails',
					 method:'POST',
					 data:{
						 time:this.time,
						 fee:this.fee
					 }
				 }).then(res=>{

					this.incomeDetailList=res.data.data.data
					this.totalFee = res.data.data.totalFee
					this.ratio = res.data.data.ratio
					this.shopfee = res.data.data.fee
										 console.log(this.incomeDetailList)
				 })
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	
	.income_list_list{
		width:100%;
		height:calc(100vh - 45px)
	}
	
	
	// 收入详情
	
	.recommendShop_count{
		background: #fff;
		ul{
			display: flex;
			li{
				position:relative;
				width:50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				span:first-child{
					color:#999;
					margin-bottom:10px;
				}
				span:last-child{
					
					font-size:14px;
					margin-bottom:10px;
				}
				
			}
			li::before{
				content:'';
				position:absolute;
				left:0;
				top:0;
				width:1px;
				height:80%;
				background:#f8f8f8;
			}
		}
	}
	
	.shoplist_content_item{
		padding:.5rem;
		background:#fff;
		border-radius: 4px;
		border-bottom:1px solid #f8f8f8;
		margin-top:10px;
	}
	.shoplist_content_item_top{
		
		display: flex;
		justify-content: space-between;
		
	}
	.top_left{
		display: flex;
		align-items: center;
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
			@include  longtext;
			font-weight: 600;
		}
		&>span:last-child{
			
			border-radius:4px;
			padding:2px 0;
			color:#999;
		}
	}
	.top_img{
		width:50px;
		height:50px;
		border-radius: 4px;
		flex-shrink: 0;
	}
	
	.top_right_type{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
		color:#888;
		span:last-child{
			color:#EE453C;
			font-size:14px;
		}
	}
	.shopReturn{
				 display: flex;
				 flex-direction: column;
				 justify-content: center;
				 align-items: center;
				 padding:10px 0;
				 color:#999;
				 border-top:1px solid #f8f8f8;
				 background:#fff;
				 h2{
					 color:#EE453C;
					 font-size:20px;
					 font-weight: 500;
					 margin:10px 0;
					 span{
						 font-size:14px
					 }
				 }
	}
</style>

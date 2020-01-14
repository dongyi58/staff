<template>
	<view class="wrapper">
		<view class="status_bar index_status_bar"></view>
		<customnav  :navtitle="cateName" :ismsg="false" />
		
		<scroll-view scroll-y="true" class="cateList" @scrolltolower="loadmore">
			<view class="goods-wrapper">
				<view class="goods-item" v-for="(item,idx) in goods" :key='idx' @tap="goDetail(item.id)">
					<image class="item-img" :src="domain+item.img" mode="aspectFill"></image>
					<view class="info-wrapper flex-col content-space">
						<view class="line-hei15 flex items-center">{{item.name}} <image class="fire" v-if="item.activity" src="../../static/images/fire.gif" mode=""></image></view>
						<view class="flex items-center light-gray font-20">
							<view class="flex-col flex-grow">
								<uni-rate disabled="true" size="14" :value="item.score.star" color="#999" active-color="#FF6815"></uni-rate>
								<text>{{item.score.number}}人评论</text>
							</view>
							<text class="shrink">好评率{{item.score.hp}}%</text>
						</view>
						<view class="flex">
							<text class="price flex-grow font-28">{{getPrice(item)}}</text>
							<text class="font-20 light-gray">销量{{item.goods_number}}</text>
						</view>
					</view>
				</view>
				<uni-load-more :status="loadStatus"></uni-load-more>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import {mapState} from 'vuex';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		data() {
			return {
				categoryId:'' ,//分类id
				cateName:'', //当前分类名称
				goods:[],
				page:1 ,//当前页
				loadStatus:'loading',
				loaded:false,
				scrollTop:0
			}
		},
		components:{
			uniRate,
			uniLoadMore,
			customnav
		},
		onLoad(e) {
			console.log(e);
			if(e&&e.data){
				let temp=JSON.parse(decodeURIComponent(e.data));
				console.log(temp)
				this.categoryId=temp.id;
				this.cateName=temp.name;
				this.loadData();
			}
		},
		computed:{
			...mapState(['supplierId','domain'])
		},
		// 加载更多
		// onReachBottom() {
		// 	console.log(this.loaded)
		// 	if(!this.loaded){ //未加载完毕
		// 		console.log('more');
		// 		this.page++;
		// 		this.loadStatus='loading';
		// 		this.loadData(true);
		// 	}
		// },
		methods: {
			loadmore(){
				
				if(!this.loaded){ //未加载完毕
					console.log('more');
					this.page++;
					this.loadStatus='loading';
					this.loadData(true);
				}
			},
			// 加载数据
			loadData(isMore=false){
				this.$dyrequest({
					url:'/index.php/Category/cateGoods',
					method:'POST',
					hideLoading:true,
					data:{
					 cid:this.categoryId,
					 seller_id:this.supplierId,
					 page:this.page
					}
				})
				.then(res=>{
					console.log(res);
					let tempData=res.data.data;
					
					if(isMore){ //加载更多
						this.loadStatus='more';
						this.goods=this.goods.concat(tempData);
					}else{ //首次加载数据
						this.goods=tempData;
					}
					
					//数据加载完毕
					if(!tempData||!tempData.length||tempData.length<10){ 
						this.loaded=true;
						this.loadStatus="noMore";
					}
				})
				.catch(err=>{
					console.log(err);
				})
			},
			// 获取商品价格字符串
			getPrice(item){
				let priceStr='';
				switch(item.sale_type){
					case '1'://整件价格
						priceStr=item.whole_min_old.toFixed(2);
					break;
					case '2':  //单品价格
						priceStr=item.retail_min_old.toFixed(2);
					break;
					case '3':
						priceStr=`${item.retail_min_old.toFixed(2)}-${item.whole_min_old.toFixed(2)}`;
					break;
				}
				return priceStr;
			},
			// 刷新
			refresh(){
				// 重置页面数据
				this.page=1;
				this.loaded=false;
				this.loadStatus='loading';
				
				this.loadData();
			},
			// 跳转到详情页
			goDetail(goodsId){
				uni.navigateTo({
					url:'/pages/goodsDetail/goodsDetail?dtype=1&goods_id='+goodsId
				})
			},
		}
	}
</script>

<style lang="scss">
	// @import url('../../static/css/common.css');
	
	$red:#F00;
	$white:#FFF;
	$itemImgWidth:166.66rpx;
	$itemInfoWidth:526.04rpx;
	$lightGray:#888888;
	
	page{
		background-color:#F6F6F6;
	}
	.cateList{
		height:calc(100vh - 45px - var(--status-bar-height))
	}
	// 通用样式
	.light-gray{
		color:$lightGray;
	}

	/* 价格 */
	.price{
		font-size:29.16rpx;
		font-weight:600;
		color:#CF2503;
	}
	.price:before{
		content:"\ffe5";
	}
	.flex{
		display:flex;
	}
	.flex-col{
		display:flex;
		flex-direction:column;
	}
	.content-space{
		justify-content:space-between;
	}
	.flex-grow{
		flex-grow:1;
	}
	.shrink{
		flex-shrink:0;
	}
	.font-20{
		font-size:20.83rpx;
	}
	.wrapper{
		font-size:29.16rpx;
	}
	
	.title-wrap{
		display:flex;
		align-items:center;
		padding:20.83rpx;
		letter-spacing:5.2rpx;
	}
	.title-txt{
		display:flex;
		align-items:center;
		font-size:27.08rpx;
		.flag{
			width:8.33rpx;
			height:26.04rpx;
			background:$red;
		}
		text{
			padding:0 10.41rpx;
		}
	}
	.fire{
		max-width:83.33rpx;
		height:31.25rpx;
		margin-left:5.2rpx;
	}
	.goods-wrapper{
		.goods-item{
			display:flex;
			background:$white;
			padding:20.83rpx;
			// border-bottom:1.04rpx solid #F6F6F6;
			margin-bottom:20.83rpx;
			.item-img{
				width:$itemImgWidth;
				height:$itemImgWidth;
				border-radius:10.41rpx;
			}
			.info-wrapper{
				width:$itemInfoWidth;
				padding-left:15.62rpx;
			}
		}
		
	}
</style>

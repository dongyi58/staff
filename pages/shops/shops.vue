<template>
	<view class="wrap shoplist_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav  :isSearch="false" navtitle="选择代下单小店" />
		<!-- 搜索栏 -->
		<view class="shoplist_content_search">
			<view class="searchbkg"></view>
			<i class="iconfont icon-sousuo"></i>
			<input type="text" 
			confirm-type="search" 
			@confirm="shopSearch"
			placeholder="请输入小店名称">
		</view>
		
		<scroll-view scroll-y="true" 
					
					 class="shoplist_scroll_view_height">
				
			<view class="shoplist_content">
					<view class="shoplist_content_item" 
					v-for="(item,idx) of shop_list"
					:key="idx"
					@click="gotoShopDetail(item.id)"
					>
						<view class="shoplist_content_item_top">
							<view class="top_left">
								
									<image v-if="item.head_sculpture" class="top_img" :src="domain2+item .head_sculpture" mode="aspectFill"></image>
									<image v-else class="top_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
									
									<view class="top_info">
										<span>{{item.shopname}}</span>
										<span @click.stop="callsupplier(item.phone)"><i class="iconfont icon-dianhua"></i>{{item.phone}}</span>
									</view>
							</view>
							<view class="top_right_type">
								小店类型：{{item.business_scope}}
							</view>
						</view>
						<view class="shoplist_content_item_bottom">
							<i class="iconfont icon-weizhi"></i>
							<p>{{item.address}}</p>
						</view>
					</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import customnav from '@/components/customnav.vue'
	export default {
		components:{customnav},
		data() {
			return {
				shop_list:[],
				op:0,
				bcolor:'#d2d2d2',
				domain:this.$store.state.domain,
				domain2:this.$store.state.domain2
			};
		},
		mounted() {
			this.loadShoplist()
			
		},
	
		methods:{
			
			shopSearch(){
				console.log(111)
			},
			gotoShopDetail(id){
				uni.navigateTo({
				    url: '/pages/shopHomePage/homeindex?id='+id
				});
					 this.$store.commit('SET_CURRENINDEX',0)
			},
			callsupplier(phonenum){
					uni.makePhoneCall({
					    phoneNumber: phonenum //仅为示例
					});
			},
			loadShoplist(){
					
					let _this = this
					this.$dyrequest({
					     url:'/SmallShop/chooseShop', 
					 	method:'POST'
					 }).then(res=>{
						 _this.shop_list= res.data.data
					 })
			}
				
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.shoplist_wrap{
		color:#383838;
		background:#F6F6F6;
	}
	.shoplist_scroll_view_height{
		height:calc(100vh - 95px);
	
	}
	.shoplist_content{
		padding:0 .5rem;
		box-sizing: border-box;
	}
	.shoplist_content_search{
		position:relative;
		padding:.5rem 1rem;
		.searchbkg{
			position:absolute;
			left:0;
			top:0;
			width:100%;
			height:100%;
			opacity: 0;
			background:linear-gradient(to right,#21A5F9,#1A6FE8);
		}
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
		color:#888
	}
	
</style>

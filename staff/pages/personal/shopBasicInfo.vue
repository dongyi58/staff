<template>
	<view class="wrap shopInfo_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="小店基本信息"
		 :cancletext="false"
		 :focus="false"
		 />
		 
		 <view class="shopInfo_content">
			<ul>
				<li><span>店名</span><span>{{ shopInfo.shopname }}</span></li>
				<li><span>店主</span><span>{{ shopInfo.username }}</span></li>
				<li><span>小店类型</span><span>{{ shopInfo.business_scope }}</span></li>
				<li><span>主营类目</span><span>{{ shopInfo.shopname }}</span></li>
				<li><span>入驻人手机号</span><span>{{ shopInfo.phone }}</span></li>
				<li><span>所在地区</span><span>{{ shopInfo.area }}</span></li>
			</ul>
		 </view>
	</view>
	
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		components:{uniList,uniListItem,customnav},
		data() {
			
			return {
				shopId:'',
				shopInfo:{}
			};
		},
		onLoad(option) {
			this.shopId = option.shopId
			this.getShopInfo()
		},
		methods:{
			getShopInfo(){
				 const _this = this
				 _this.$dyrequest({
					 url:'/SmallShop/shopInfo',
					 method:'POST',
					 data:{
						 id:_this.shopId
					 }
				 }).then(res=>{
					 console.log(res)
					 _this.shopInfo = res.data.data
					 console.log(_this.shopInfo)
				 })
			},
		}
	}
</script>

<style lang="scss">
	.shopInfo_content{
		background: #fff;
		padding: 10px;
	}
	.shopInfo_content{
		ul{
			display: flex;
			flex-direction: column;
			li{
				padding:10px 0;
				border-bottom:1px solid #f5f5f5;
				span{
					display: inline-block;
					font-size:14px;
				}
				span:first-child{
					width:100px;
				}
				span:last-child{
					color:#999;
				}
			}
		}
	}
</style>

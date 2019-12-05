<template>
	<view class="wrap current_account_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="修改手机号	"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="current_account_list">
				<view class="current_account_list_item" ><span>绑定手机号</span><span>{{bindedPhone.substr(0, 3) + '****' + bindedPhone.substr(7)}}</span></view>
				<view class="current_account_list_item" @click="verifyPhone"><span>更换绑定手机</span><i class="iconfont icon-you"></i></view>
			
		 </view>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		 components: {uniList,uniListItem,customnav},
		data() {
			return {
				bindedPhone:''
			};
		},
		onLoad() {
			this.bindedPhone = uni.getStorageSync('phone')
		},
		methods:{
			verifyPhone(){
				uni.navigateTo({
					url:'/pages/personal/account/verifyOldPhone'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.current_account_list{
		padding:0 10px;
		background:#fff;
		&_item{
			display: flex;
			justify-content: space-between;
			border-bottom:1px solid #f8f8f8;
			padding:15px 0;
			span:last-child,i{
				color:#999;
			}
		}
		&_item:last-child{
			border:0;
		}
	}
	
</style>

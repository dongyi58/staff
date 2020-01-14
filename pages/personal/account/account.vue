<template>
	<view class="wrap account_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="false" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="账户与安全"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="list-wrap">
			 <uni-list class="account_list">
			     <uni-list-item  @click="changeBindPhone" class="list_item" title="绑定手机号" note="若手机号码有变动请尽快修改" :show-arrow="true"></uni-list-item>
			</uni-list>
			 <uni-list class="account_list">
			 <uni-list-item @click="changePsw" class="list_item" title="修改登录密码" note="定期修改密码可以保护账户安全" :show-arrow="true"></uni-list-item>
			 </uni-list>
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
				
			};
		},
		methods:{
			changeBindPhone(){
				uni.navigateTo({
					url:'/pages/personal/account/currentBindPhone'
				})
			},
			changePsw(){
				uni.navigateTo({
					url:'/pages/personal/account/resetPsw'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	
	.uni-list {
		width:100%;
		padding:0 10px;
		margin-bottom:10px;
	}
</style>

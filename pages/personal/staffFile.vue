<template>
	<view class="wrap current_account_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="false" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="业务员档案"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="current_account_list">
				<view class="current_account_list_item" ><span>所属供应商</span><span>{{staffFile.contactname}}</span></view>
				<view class="current_account_list_item" ><span>推荐上线小店提成</span><span>{{staffFile.ratio}}</span></view>
				<view class="current_account_list_item" ><span>推荐码</span><span>{{staffFile.code}}</span></view>
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
				staffFile:{}
			};
		},
		onLoad() {
			this.getStaffFile()
		},
		methods:{
			getStaffFile(){
				this.$dyrequest({
					url:'/PersonSales/salesRecord',
					method:'POST'
					
				}).then(res=>{
					this.staffFile = res.data.data
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

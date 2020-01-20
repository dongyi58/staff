<template>
	<view class="search_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav 
		:back="false" 
		:ismsg="false" 
		:isSearch="false" 
		:midtitle="false"
		:focus="focus"
		:searchinp="true" />
		<h1 class="title">历史搜索 <i class="iconfont icon-shanchu1 clearH" @click="clearHFuc" v-if="obHlist.length"></i></h1>
		<view class="search_history">
			<ul>
				<li v-for="(h,i) of obHlist" :key="i" @click="historyClick(h)">{{h}}</li>
			</ul>
		</view>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		components:{customnav},
		data() {
			return {
				historyList:[],
				skey:'',
				focus:true
			};
		},
		mounted(){
			
			this.historyList= uni.getStorageSync('searchHistory')
		},
		computed:{
			obHlist(){
				console.log(this.historyList)
				return this.historyList
			}
		},
		methods:{
			historyClick(h){
				uni.redirectTo({
					url:'/pages/search/searchResult?keywords='+h
				})
			},
			clearHFuc(){
				let _self = this
				uni.showModal({
				    title: '提示',
				    content: '确定要清除所有历史记录吗？',
				    success: function (res) {
				        if (res.confirm) {
							_self.historyList=[]
							uni.removeStorageSync('searchHistory')
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:10px;
		font-size:16px;
		.clearH{
			color:#7b7b7b;
			font-size:20px;
		}
	}
	.search_history{
		padding:10px;
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				background: #dedede;
				padding: 3px 10px;
				color: #696969;
				border-radius:20px;
				margin-left:10px;
				margin-bottom:10px;
			}
		}
	}
</style>

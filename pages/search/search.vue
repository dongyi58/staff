<template>
	<view class="search_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav 
		:back="false" 
		:ismsg="false" 
		:isSearch="false" 
		:midtitle="false"
		:focus="focus"
		:searchkey="skey"
		:searchinp="true" />
		<h1 class="title">历史搜索</h1>
		<view class="search_history">
			<ul>
				<li v-for="(h,i) of historyList" :key="i" @click="historyClick(h)">{{h}}</li>
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
		methods:{
			historyClick(h){
				this.skey = h
				this.focus =true
			},
		}
	}
</script>

<style lang="scss">
	.title{
		padding:10px;
		font-size:16px;
	}
	.search_history{
		padding:10px;
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				border:1px solid #078CF3;
				padding:3px 10px;
				color:#078CF3;
				border-radius:5px;
				margin-left:10px;
			}
		}
	}
</style>

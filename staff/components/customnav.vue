<template>
	<view class="customnav">
		<view class="search_box" v-if="searchinp">
			<input type="text" 
			placeholder-class="holder_text"
			:placeholder="placeholder" 
			confirm-type="search"
			@confirm="gotoSearchResult"
			:focus="focus"
			v-model="searchkey"
			>
			<span v-if="cancletext" @click="getback">取消</span>
		</view>
		<view class="nav-left" v-if='back'>
			<!-- 返回按钮 -->
			<i  class="iconfont icon-xiangzuo" @click="getback"></i>
		</view>
		<view class="nav-mid" v-if="midtitle">
			<!-- 导航文字 -->
			<span class="navtext">{{navtitle}}</span>
		</view>
		<view class="nav-right" v-if="isSearch || ismsg">
			<!-- 消息提醒 -->
			<i  v-if="isSearch" @click="gosearch" class="iconfont icon-sousuo msg"></i>
			<i v-if="ismsg"  @click="checkMessage" class="iconfont icon-xiaoxi msg"></i>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			midtitle:{
				type:Boolean,
				default:true
			},
			navtitle:{
				type:String,
				default:''
			},
			isSearch:{
				type:Boolean,
				default:false
			},
			ismsg:{
				type:Boolean,
				default:true
			},
			back:{
				type:Boolean,
				default:true
			},
			//如果是搜索结果页返回2页
			backPagenum:{
				type:Number,
				default:1
			},
			searchinp:{
				type:Boolean,
				default:false
			},
			focus:{
				type:Boolean,
				default:false
			},
			placeholder:{
					type:String,
					default:'请输入商品名称'
			},
			cancletext:{
				type:Boolean,
				default:true
			},
			
		},
		data() {
			return {
				searchkey:''
			};
		},
		methods:{
			getback(){
				
				uni.navigateBack({
				    delta: this.backPagenum
				});
			},
			checkMessage(){
				uni.navigateTo({
					url:'/pages/message/message'
				})
			},
			gosearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			gotoSearchResult(){
				
				uni.navigateTo({
					url:'/pages/search/searchResult?keywords='+this.searchkey
				})
			}
		}
	}
</script>

<style lang="scss">
	.search_box{
		position:relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width:100%;
		input{
			width:75%;
			border:1px solid #60b8ff;
			border-radius:20px;
			padding-left:10px;
			font-size:12px;
			height:25px;
		};
		.holder_text{
			font-size:12px;
			color:#78c3ff;
		}
		span{
			position:absolute;
			right:0;
			font-size:14px;
		}
	}
	.customnav{
		display:flex;
		justify-content: space-between;
		align-items: center;
		width:100%;
		height:45px;
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
		color:#f8f8f8;
		padding:0 .5rem;
	}
	.navtext{
		display: block;
		font-size:14px;
		max-width:200px;
		@include longtext;
	}
	.msg{
		font-size:1.5em;
	}
	.nav-left{
		    position: absolute;
		    left: 10px;
	}
	.nav-mid{
		    position: absolute;
		    left: 50%;
		    transform: translateX(-50%);
	}
	.nav-right{
		position: absolute;
		right:10px;
		display:flex;
		i{
			margin-left:10px;
		}
	}
</style>

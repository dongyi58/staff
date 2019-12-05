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
		<view class="nav-right" v-if="isSearch || ismsg || isRightText">
			<!-- 消息提醒 -->
			<i v-if="isSearch" @click="gosearch" class="iconfont icon-sousuo msg"></i>
			<i v-if="ismsg"  @click="checkMessage" class="iconfont icon-xiaoxi msg"></i>
			<i v-if="isRightText" @click="help" style="font-style:normal;font-size:14px">{{rightText}}</i>
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
			isRightText:{
				type:Boolean,
				default:false
			},
			rightText:{
				type:String,
				default:''
			},
			back:{
				type:Boolean,
				default:true
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
				    delta:1
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
				
				uni.redirectTo({
					url:'/pages/search/searchResult?keywords='+this.searchkey
				})
			},
			help(){
				this.$emit('showhelp',true)
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
		position:relative;
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
			display: flex;
			justify-content: center;
			align-items: center;
			width:20px;
			height:100%;
			left: 20px;
			i{
				font-size:18px;
			};
	}
	.nav-mid{
		    position: absolute;
		    left: 50%;
		    transform: translateX(-50%);
	}
	.nav-right{
		position: absolute;
		right:20px;
		display:flex;
		i{
			margin-left:10px;
		}
	}
</style>

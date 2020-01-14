<template>
	<view class="wrapper">
		<view class="item-wrapper" 
		v-for="(item,idx) in datas"
		:key="idx">
			<view class="title" :class="{'unfold':item.unfold}">
				<view class="title_left">
					<view v-if="item.parent&&item.parent.length" class="child-flag"></view>
					<text @tap="goGoods(item)" class="font-28">{{item.name}}</text>
				</view>
				<i  class="iconfont" :class="item.unfold&&item.parent?'icon-icon-arrow-bottom2':'icon-you'" @tap.stop="foldOption(item)"></i>
			</view>
			
			<recursion v-if="item.parent&&item.unfold" :datas="item.parent" :level="level+1" @childChange="childChange"></recursion>
		</view>
	</view>
</template>

<script>	
import recursion from '@/components/recursion.vue';

	export default {
		name:'recursion',
		data() {
			return {
			}
		},
		props:{
			datas:Array,
			level:{
				type:Number,
				default:1
			}
		},
		methods: {
			// 折叠操作
			foldOption(item){
				console.log(item);
				// return;
				if(item.parent&&item.parent.length){ //
					if(this.level==1){ //第一级
						console.log(item.id);
						this.$emit("foldOption",item.id);
					}else{ //其他级别
						this.$emit('childChange',item);
					}
				}else{ //跳转到分类商品页面
					this.goGoods(item)
				}
			},
			goGoods(item){
				uni.navigateTo({
					url:`/pages/shopHomePage/categoryGoods?data=${encodeURIComponent(JSON.stringify({id:item.id,name:item.name}))}`
				})
			},
			// 接收来自子组件的参数
			childChange(args){
				let temp=args;
				console.log(args);
				// // #ifndef H5
				// temp=args.detail.__args__[0]
				// // #endif
				
				if(temp.parent&&temp.parent.length){
					this.$emit('foldOption',temp.id);
				}
			}
		}
	}
</script>

<style lang="scss">
	$white:#FFF;
	
	.iconfont{
		color:#BFBFBF;
	}
	.item-wrapper{
		padding-left:20.83rpx;
		background:$white;
		font-size:27.08rpx;
	}
	.title{
		display:flex;
		align-items:center;
		justify-content: space-between;
		padding:20.83rpx 0;
		border-bottom:1.04rpx solid #F6F6F6;
		.title_left{
			display: flex;
			align-items: center;
		}
		.child-flag{
			width:8.33rpx;
			height:20.83rpx;
			background:#FF0000;
			margin-right:10.41rpx;
		}
		text{
			flex-grow:1;
			
		}
		i{
			flex:1;
			text-align:end;
			margin:0 20.83rpx;
			flex-shrink:0;
			font-size:25rpx;
			min-width:10%;
		}
	}
	
	.unfold{
		color:#FF0000;
		.iconfont{
			color:#FF0000;
		}
	}
</style>

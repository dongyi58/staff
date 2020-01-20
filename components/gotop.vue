<template>
	<view class="goTop"  v-if="show" @click="backToTop">
		<span class="iconfont icon-huidaodingbu"></span>
	</view>
</template>

<script>
	export default {
		props:{
			scrollTop:{
				type:[Number,String],
				default:0
			}
		},
		data() {
			return {
				show:false
			};
		},
		watch:{
			scrollTop(n,o){
				// console.log(n)
				n > 1000 ? this.show=true : this.show=false
			},
		},
		methods:{
			backToTop(){
				this.$emit('backTop')
			}
		}
	}
</script>

<style lang="scss">
	.goTop{
		position:fixed;
		bottom:10%;
		right:20px;
		width:35px;
		height: 35px;
		border-radius: 50%;
		text-align: center;
		line-height: 35px;
		background:rgba(0, 0, 0, 0.63);
		color:#fff;
	}
</style>

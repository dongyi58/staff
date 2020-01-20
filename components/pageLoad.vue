<template>
	<view class="loadPage" :class="{'hideLoad':hide}">
		<image class="loadingImg" src="../../static/images/loadingblue.gif" mode=""></image>
	</view>
</template>

<script>
	export default {
		props:{
			hide:{
				type:Boolean,
				default:false
			}
		},
		watch:{
			hide(n,o){
				this.hide = n
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.loadPage{
		z-index:9999;
		position:absolute;
		top:calc(45px + var(--status-bar-height);
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		height: calc(100vh - 45px - var(--status-bar-height));
		background-color:#fff;
		opacity: 1;
		.loadingImg{
			width:100px;
			height:80px;
		}
		
	}
	.hideLoad{
		animation: opa .5s ease forwards ;
	}
	@keyframes opa{
		0% {opacity:1;}
		80% {opacity:0;}
		100%{opacity:0;visibility: hidden;}
	}
</style>

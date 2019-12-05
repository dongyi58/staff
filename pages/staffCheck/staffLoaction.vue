<template>
	<view class="wrap current_account_wrap">
		<view class="status_bar index_status_bar"></view>
		
		<view class="map_position">
			<map id="checkmap"></map>
			
		</view>
		
		//右侧选项
		
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	
	export default {
		 components: {customnav},
		data() {
			return {
			};
		},
		onLoad() {
			// setTimeout(()=>{
			// 	uni.$emit('getInfo',_this.$store.state.staffInfo)
			// },100)
			
			let _this = this
			//监听右侧按钮事件
			uni.$on('right-click',(res)=>{
				let titleText = ''
				switch(res){
						case 1:titleText="责任";
						break;
						case 2:titleText="推荐";
						break;
						case 3:titleText="未合作";
						break;
						case 4:titleText="所有";
						break;
				}
				uni.showToast({
					icon:'none',
					title:'已为您显示'+titleText+'小店'
				})
			})
			uni.getLocation({
				type: 'wgs84',
				geocode:'true',
				success: function (res) {
					// console.log('当前位置的经度：' + res.longitude);
					// console.log('当前位置的纬度：' + res.latitude);
					console.log(res)
					let l = res.address
					let location = l.province+l.city+l.district+l.street+l.streetNum+l.poiName
					uni.$emit('getInfo',_this.$store.state.staffInfo)
					uni.$emit('getLoaction',{
						loaction:location
					})
				},
				fail: function(err){
					console.log(err)
				},
			});
			
		},
		
		methods:{
			
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.btn{
		position: absolute;
		
		right:20px;
		width:60px;
		height:50px;
		text-align: center;
		color:#fff;
	}
	.btn-one{
		border-radius:4px 4px 0 0;
		top: 150px;
		background:#209AF5
	}
	.btn-two{
		top: 200px;
		background:#F44540
	}
	.btn-three{
		border-radius:0 0 4px 4px;
		top: 250px;
		background:#888888
	}
	.btn-four{
		border-radius:4px;
		top: 310px;
		background:#147AED
	}
	.rightOpt{
		background:red;
		// position:absolute;
		// top:82px;
		// right:10px;
		// ul li{
		// 	display: flex;
		// }
	}
	.map_position{
		position: relative;
		width:100vw;
		height:100vh;
	}
	#checkmap{
		width:100%;
		height:100%
	}
	
</style>
	
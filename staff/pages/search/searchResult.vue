<template>
	<view>
		<view class="status_bar index_status_bar"></view>
		<customnav 
		:ismsg="false" 
		:isSearch="false" 
		:midtitle="false"
		:placeholder="ph"
		:cancletext="false"
		:backPagenum="2"
		:searchinp="true" />
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		components:{customnav},
		data() {
			return {
				ph:''
			};
		},
		onLoad(option){
			this.ph=option.keywords
		}
	}
</script>

<style lang="scss">

</style>

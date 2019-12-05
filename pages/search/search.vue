<template>
	<view class="search_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav 
		:back="false" 
		:ismsg="false" 
		:isSearch="false" 
		:midtitle="false"
		:focus="true"
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
				
			};
		}
	}
</script>

<style lang="scss">

</style>

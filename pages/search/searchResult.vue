<template>
	<view class="wrap result_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav 
		:ismsg="false" 
		:isSearch="false" 
		:midtitle="false"
		:placeholder="keywords"
		:cancletext="false"
		:searchinp="true"
		 :focus="false"
		 />
		 <scroll-view class="result_list" @scroll="scroll" scroll-y @scrolltolower="handlescroll">
		 		<!-- 全部商品列表 -->
		 			<view class="goods_list_wrap">
		 				<view class="goods_list">
		 					<view class="goods_item" v-for="(item,idx) of allResultgoods" :key="idx">
		 						<view class="goods_img_box">
		 							<!-- <image class="goods_img" :src="item.img" lazy-load mode="aspectFill"></image> -->
		 							<image class=" goods_img image" :class="{lazy:!item.show}" :data-index="idx" @load="imageLoad" :src="item.show ? item.img:''" />
		 							<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
		 						</view>
		 						<p class="goods_name">{{item.name}}</p>
		 						<view class="goods_price">¥{{item.fact_price}}<!-- <i class="iconfont icon-jia"></i> --></view>
		 					</view>
		 					<view class="loadfinshed_text" v-if="finshed">没有更多商品了</view>
		 				</view>
		 				
		 			</view>
		 </scroll-view>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		components:{customnav},
		data() {
			return {
				keywords:'',
				resultList:[],
				finshed:false,
				domain:this.$store.state.domain,
				page:1,
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
			};
		},
		onLoad(option){
			this.keywords=option.keywords
			this.getResult()
			
			
		},
		computed:{
			shopId(){
				return this.$store.state.shopId
			},
			allResultgoods(){
				return this.resultList.filter(item=>{
						this.$set(item,'fact_price',0)
						 if(item.sale_type== 3){
							
							return  item.fact_price = item.retail_price 
									 
							 
						}else if(item.sale_type== 1){
							return  item.fact_price = item.wholesale_price 
						}else{
							
							return  item.fact_price = item.retail_price 
						}
				})
			}
		},
		methods:{
			//图片懒加载
			scroll(){
				this.load()
			},
			load() {
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.lazy').boundingClientRect((images) => {
					images.forEach((image, index) => {
						if (image.top <= this.windowHeight) {
							this.allResultgoods[image.dataset.index].show = true;
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.allResultgoods[e.target.dataset.index].loaded = true
			},
			//图片懒加载
			handlescroll(e){
				 if(this.finshed) return 
					this.page++
					this.getResult()
							
			},
			getResult(){
				 let _this = this
				 _this.$dyrequest({
					 url:'/Supplier/getAllProviderGoods',
					 method:'POST',
					 data:{
						 id:_this.shopId,
						 keyword:_this.keywords,
						 page:_this.page++
						 
					 }
				 }).then(res=>{
					 console.log(res)
					 res.data.data.data.map((item,idx)=>{
							 _this.$set(item,'show',false)
							 _this.$set(item,'loaded',false)
							 
							 item.img = _this.domain + item.img
							 
							 _this.resultList.push(item)
					 								 
					 								 
					 })
					 //图片懒加载 首次加载
					 this.windowHeight = uni.getSystemInfoSync().windowHeight-45
					 
					 if (!this.show) {
					 	this.show = true
					 	
					 	setTimeout(() => {
					 		this.load()
					 	}, 100)
					 }
					 //图片懒加载
					//判断没有数据，不再请求
					if(res.data.data.data.length == 0){
						_this.finshed = true
					}
				 })
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.result_list{
		width: 100%;
		height: calc(100vh - 45px);
	}
</style>

<template>
	<view class="wrap yhq_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav 
		:ismsg="false" 
		:isSearch="false" 
		:midtitle="false"
		placeholder="在结果中搜索"
		:cancletext="false"
		:searchinp="false"
		 :focus="false"
		 />
		<!-- <view class="filter_bar">
		 <ul>
		 	<li @click="changeFilter(0)"
		 	 :class="filterIdx == 0 ? 'activeFitler' : ''">最新</li>
		 	<li 
		 		@click="changeFilter('sales')"
		 	 class="hl_box" >
		 		销量
		 		<i class="iconfont icon-icon-arrow-top2" 
		 		:class="salesup && filterIdx ==1 ? 'activeFitler' : ''"></i>
		 		<i class="iconfont icon-icon-arrow-bottom2" 
		 		:class="!salesup && filterIdx ==1 ? 'activeFitler' : ''"></i>
		 	</li>
		 	<li 
		 	@click="changeFilter(2)"
		 	class="hl_box" :class="filterIdx == 2 ? 'activeFitler' : ''">
		 		分类
		 
		 	</li>
		 	<li 
		 	@click="changeFilter(3)"
		 	:class="filterIdx == 3 ? 'activeFitler' : ''">品牌</li>
		 </ul>
		 </view> -->
		 <scroll-view class="yhq_list" @scroll="scroll" scroll-y >
		 		<!-- 优惠券商品列表 -->
		 			<view class="goods_list_wrap">
		 				<view class="goods_list">
		 					<view class="goods_item" 	@click="goto_goodsdetail(item.goods_id)"  v-for="(item,idx) of allYhqgoods" :key="idx">
		 						<view class="goods_img_box">
		 							<!-- <image class="goods_img" :src="item.img" lazy-load mode="aspectFill"></image> -->
		 							<image class=" goods_img image" :class="{lazy:!item.show}" :data-index="idx" @load="imageLoad" :src="item.show ? item.img:''" />
		 							<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
		 						</view>
		 						<p class="goods_name">{{item.name}}</p>
		 						<view class="goods_price">¥{{item.showPrice}} </view>
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
				yhqList:[],
				finshed:false,
				domain:this.$store.state.domain,
				page:1,
				couponId:'',
				type:'',
				filterIdx:0,
				salesup:false,
				priceup:false,
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
			};
		},
		onLoad(option) {
			this.couponId = option.couponId
			this.type = option.type
			this.getYhq()
		},
		computed:{
			shopId(){
				return this.$store.state.shopId
			},
			allYhqgoods(){
				return this.yhqList.filter(item=>{
						this.$set(item,'fact_price',0)
						
						 if(item.sale_type== 3){
							
							return  item.fact_price = item.price[0] 
									 
							 
						}else if(item.sale_type== 1){
							return  item.fact_price = item.price[1]
						}else{
							
							return  item.fact_price = item.price[0] 
						}
				})
			}
		},
		methods:{
			goto_goodsdetail(goodsId){
				 uni.navigateTo({
					 
					url:'/pages/goodsDetail/goodsDetail?dtype=1&goods_id='+goodsId
				 })
			},
			//图片懒加载
			scroll(){
				this.load()
			},
			load() {
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.lazy').boundingClientRect((images) => {
					images.forEach((image, index) => {
						if (image.top <= this.windowHeight) {
							this.allYhqgoods[image.dataset.index].show = true;
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.allYhqgoods[e.target.dataset.index].loaded = true
			},
			//图片懒加载
			changeFilter(idx){
				
				if(idx == 'sales'){
					this.filterIdx=1
					this.salesup = !this.salesup
				}else if(idx == 'price'){
					this.filterIdx=2
					this.priceup = !this.priceup
				}else{
					this.filterIdx = idx
				}
				
			},
			getYhq(){
				 let _this = this
				 _this.$dyrequest({
					 url:'/Supplier/getProductByCouponId',
					 method:'POST',
					 data:{
						 id:_this.shopId,
						 type:_this.type,
						 couponId:_this.couponId
					 }
				 }).then(res=>{
					 // console.log(res.data.data.data)
					 res.data.data.data.map((item,idx)=>{
							 _this.$set(item,'show',false)
							 _this.$set(item,'loaded',false)
							 
							 item.img = _this.domain + item.img
							 if(item.sale_type == 3){
							 	 _this.$set(item,'showPrice',item.price[0]+'-'+item.price[1])
							 	
							 }else if(item.sale_type == 2){
							 		 _this.$set(item,'showPrice',item.price)
							 }else{
							 	 _this.$set(item,'showPrice',item.price)
							 }
							 
							 _this.yhqList.push(item)
					 								 
					 								 
					 })
					 console.log(_this.yhqList)
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
	.yhq_list{
			width: 100%;
			height: calc(100vh - 45px);
		}
</style>

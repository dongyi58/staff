<template>
	<view class="allproduct_wrap wrap">
			<view class="status_bar index_status_bar"></view>
			<customnav :back="false" navtitle="全部商品" />
			<view class="filter_bar">
				<ul>
					<li @click="changeFilter(0)"
					 :class="filterIdx == 0 ? 'activeFitler' : ''">评论</li>
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
					@click="changeFilter('price')"
					class="hl_box" :class="filterIdx == 2 ? 'activeFitler' : ''">
						价格
					<i class="iconfont icon-icon-arrow-top2"
					:class="priceup && filterIdx ==2 ? 'activeFitler' : ''"></i>
					<i class="iconfont icon-icon-arrow-bottom2" 
					:class="!priceup && filterIdx ==2 ? 'activeFitler' : ''"></i>
					</li>
					<li 
					@click="changeFilter(3)"
					:class="filterIdx == 3 ? 'activeFitler' : ''">品牌</li>
				</ul>
			</view>
			<scroll-view class="allgoods_list" @scroll="scroll" scroll-y @scrolltolower="handlescroll">
					<!-- 全部商品列表 -->
						<view class="goods_list_wrap">
							<view class="goods_list">
								<view class="goods_item" v-for="(item,idx) of allgoods" :key="idx">
									<view class="goods_img_box">
										<!-- <image class="goods_img" :src="item.img" lazy-load mode="aspectFill"></image> -->
										<image class=" goods_img image" :class="{lazy:!item.show}" :data-index="idx" @load="imageLoad" :src="item.show ? item.img:''" />
										<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
									</view>
									<p class="goods_name">{{item.name}}</p>
									<view class="goods_price">¥{{item.fact_price}} <i class="iconfont icon-jia"></i></view>
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
				allgoodsList:[],
			    domain:this.$store.state.domain,
				page:1,
				shopId:this.$store.state.shopId,
				finshed:false,
				filterIdx:0,
				salesup:false,
				priceup:false,
				loadonce:false,
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
				
			};
		},
		//根据当前页面下标加载相应数据
		//很多页面需要使用生命周期，比如mounted后，加载数据
		//但是因为页面是作为组件引入，使用vshow控制显示，会触发所有页面的mounted，这里监听如果是当前页面下标时才加载方法
		//计算属性获取vuex存储的状态，在点击导航栏时存储对应的下标，使用watch监听下标变化，加载数据
		computed:{
			getcurrent(){
				return this.$store.state.currentIndex
			},
			allgoods(){
				return this.allgoodsList.filter(item=>{
						this.$set(item,'fact_price',0)
							// console.log(item)
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
		watch:{
			getcurrent(n,o){
				//下标为1时加载数据，也就是当点击了全部商品时才调用方法
				if(n == 1 && !this.loadonce){
					this.loadonce = true
					this.getgoods_list(this.shopId)
				}
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
							this.allgoodsList[image.dataset.index].show = true;
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.allgoodsList[e.target.dataset.index].loaded = true
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
			handlescroll(e){
				 if(this.finshed) return 
					this.page++
					this.getgoods_list(this.shopId)
							
			},
			//获取全部商品列表
			getgoods_list(shopId){
					let _this = this
					 this.$dyrequest({
							url:'/Supplier/getAllProviderGoods', 
							method:'POST',
							data:{
								page:_this.page,
								id:shopId,
								finshed:false,
							}
					 }).then(res=>{
							//console.log(res,'all')
							 
							 
							 // //全部商品列表
							 
							 res.data.data.data.map((item,idx)=>{
									 _this.$set(item,'show',false)
									 _this.$set(item,'loaded',false)
									 
									 item.img = _this.domain + item.img
									 
									 _this.allgoodsList.push(item)
								 
								 
							 })
							 // console.log(_this.allgoodsList)
							//图片懒加载 首次加载
							this.windowHeight = uni.getSystemInfoSync().windowHeight-162
							
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
	.allgoods_list{
		width: 100%;
		height: calc(100vh - 135px);
	}
	
</style>

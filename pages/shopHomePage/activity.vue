<template>
	<view class="active_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav :back="false" navtitle="活动商品" />
		<qstab 
		:tabs="tabs" 
		@change="handleChange"
		:current="currentidx"
		animationMode="line1"
		activeColor="#147AED"	
		fontSize="14px"
		backgroundColor="#fff"
		:width="tabwidth"
		>
		</qstab>
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
		<scroll-view class="activegoods_list" @scroll="scroll" scroll-y :scroll-top="scrollTop">
				<!-- 全部商品列表 -->
					<view class="goods_list_wrap">
						<view class="goods_list">
							<view class="goods_item"
							@click="goto_goodsdetail(item.goods_id,item.activit_id,item.product_id,item.type)"
							 v-for="(item,idx) of filterActivity" :key="idx">
								<view class="goods_img_box">
									<!-- <image class="goods_img" :src="item.img" lazy-load mode="aspectFill"></image> -->
									<image class=" goods_img image" :class="{lazy:!item.show}" :data-index="idx"  @load="imageLoad" :src="item.show ? item.img:''" />
									<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
								</view>
								<p class="goods_name">{{item.name}}</p>
								<p class="active_name">{{item.title}}</p>
								<view class="goods_price">¥{{item.sale_type == 1 ? item.wholesale_price : item.retail_price}} <span>已售出{{item.sale}}件</span></view>
							</view>
							<view class="loadfinshed_text" v-if="filterActivity.length>3" >没有更多商品了</view>
						</view>
						
					</view>
		</scroll-view>
		<!-- <view class="allgoods">
			
			<view v-for="(item,idx) of filterActivity" :key="idx">
				{{item.name}}
			</view>
		</view> -->
	</view>
</template>

<script>
	import qstab from '@/components/QS-tabs/QS-tabs.vue'
	import customnav from '@/components/customnav.vue'
	
	export default {
		components:{customnav,qstab},
		data() {
			return {
				tabs:['全部','特价专区','折扣专区','满赠专区','买赠专区'],
				currentidx:0,
				tabwidth:0,
				filterIdx:0,
				salesup:false,
				priceup:false,
				loadonce:false,
				allgoodsList:[],
				maizengList:[],
				manzengList:[],
				zhekouList:[],
				tejiaList:[],
				domain:this.$store.state.domain,
				finshed:false,
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
				 scrollTop:-1
			};
		},
		computed:{
			getcurrent(){
				return this.$store.state.currentIndex
			},
			shopId(){
				return this.$store.state.shopId
			},
			filterActivity(){
				let filterarr=[]
				
				if(this.currentidx == 0){
					
					return this.allgoodsList
					
				}else if(this.currentidx == 1){
						console.log(this.tejiaList)
					return this.tejiaList
					
				}else if(this.currentidx == 2){
					
					return this.zhekouList
				}else if(this.currentidx == 3){
					
					return this.manzengList
					
				}else if(this.currentidx == 4){
					
					return this.maizengList
				}
			}
		},
		watch:{
			getcurrent(n,o){
				//下标为1时加载数据，也就是当点击了全部商品时才调用方法
				if(n == 2 && !this.loadonce){
					this.loadonce = true
					this.getAllGoods()
				}
			}
		},
	mounted(){
		//tabs宽度
		this.tabwidth = uni.getSystemInfoSync().windowWidth / 5
		// console.log(this.tabwidth)
	},
	methods:{
			//图片懒加载
			scroll(e){
				// console.log(e)
				this.load()
			},
			load() {
			
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.lazy').boundingClientRect((images) => {
				
					images.forEach((image, index) => {
						if (image.top <= this.windowHeight) {
							if(this.currentidx==0){
								
								this.allgoodsList[image.dataset.index].show = true;
							}else{
								this.tejiaList[image.dataset.index].show = true;
							}
							
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.allgoodsList[e.target.dataset.index].loaded = true
			},
			//图片懒加载
			
			//没有做分页
			// handlescroll(e){
			// 	 if(this.finshed) return 
			// 		this.page++
			// 		this.getAllGoods()
							
			// },
			handleChange(idx){
				this.currentidx = idx
				this.scrollTop = 0
				this.show = true
				this.load()
			},
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
			
			getAllGoods(){
				let _this = this
					this.$dyrequest({
						url:'/Activity/allActivity',
						method:'POST',
						data:{
							id:_this.shopId
						}
						
						
					}).then(res=>{
						
						//买赠商品
						res.data.data.maiz.map(item=>{
							item.map(sitem=>{
								_this.$set(sitem,'show',false)
								_this.$set(sitem,'loaded',false)
								sitem.img = _this.domain + sitem.img
								_this.maizengList.push(sitem)
							})
						})
						//满赠商品
						res.data.data.manz.map(item=>{
							item.map(sitem=>{
								_this.$set(sitem,'show',false)
								_this.$set(sitem,'loaded',false)
								sitem.img = _this.domain + sitem.img
								_this.manzengList.push(sitem)
							})
						})
						//特价商品
						res.data.data.tj.map(item=>{
							item.map(sitem=>{
								_this.$set(sitem,'show',false)
								_this.$set(sitem,'loaded',false)
								sitem.img = _this.domain + sitem.img
								_this.tejiaList.push(sitem)
							})
						})
						//折扣商品
						res.data.data.zk.map(item=>{
							item.map(sitem=>{
								_this.$set(sitem,'show',false)
								_this.$set(sitem,'loaded',false)
								sitem.img = _this.domain + sitem.img
								_this.zhekouList.push(sitem)
							})
						})
						//全部活动商品
						_this.allgoodsList = _this.maizengList.concat(_this.manzengList,_this.zhekouList,_this.tejiaList)
					
						console.log(_this.allgoodsList)
						//图片懒加载 首次加载
						this.windowHeight = uni.getSystemInfoSync().windowHeight-162
						
						if (!this.show) {
							this.show = true
							
							setTimeout(() => {
								this.load()
							}, 100)
						}
						//图片懒加载
						
						//判断没有数据，不再请求 ,没有做分页
						
						// if(res.data.data.data.length == 0){
						// 		_this.finshed = true
						// }
					})
			},
			//商品详情
			goto_goodsdetail(goodsId,id,pid,type){
				
				 uni.navigateTo({
					url:'/pages/goodsDetail/goodsDetail?goods_id='+goodsId+'&dtype=2&activityId='+id+'&productId='+pid+'&type='+type
				 })
			},	
			
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.filter_bar{
		background: transparent;
	}
.activegoods_list{
		width: 100%;
		height: calc(100vh - 175px);
		.active_name{
			padding:0 10px;
			color:#EE453C;
		}
		.goods_price{
			span{
				font-weight: normal;
				font-size:12px;
				color:#ccc;
			}
		}
}
</style>

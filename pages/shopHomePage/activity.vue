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
				<!-- <i class="iconfont icon-icon-arrow-top2"
				:class="priceup && filterIdx ==2 ? 'activeFitler' : ''"></i>
				<i class="iconfont icon-icon-arrow-bottom2" 
				:class="!priceup && filterIdx ==2 ? 'activeFitler' : ''"></i> -->
				</li>
				<li 
				@click="changeFilter(3)"
				:class="filterIdx == 3 ? 'activeFitler' : ''">品牌</li>
			</ul>
		</view>
		<scroll-view class="activegoods_list" @scroll="scroll" scroll-y :scroll-top="scrollTop">
				<!-- 全部商品列表 -->
					<view class="goods_list_wrap">
						<view class="goods_list" v-if="allgoodsList.length">
							<view class="goods_item"
							@click="goto_goodsdetail(item.goods_id,item.activit_id,item.product_id,item.type)"
							 v-for="(item,idx) of allgoodsList" :key="idx">
								<view class="goods_img_box">
								
									<image class=" goods_img image" :class="{lazy:!item.show}" :data-index="idx"  @load="imageLoad" :src="item.show ? item.img:''" />
									<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
								</view>
								<p class="goods_name">{{item.name}}</p>
								<p class="active_name">{{item.title}}</p>
								<view class="goods_price">¥{{item.sale_type == 1 ? item.wholesale_price : item.retail_price}} <span>已售出{{item.sale}}件</span></view>
							</view>
							<view class="loadfinshed_text" v-if="allgoodsList.length>3" >没有更多商品了</view>
						</view>
						<view v-else class="emptyTips">{{noActivityText}}</view>
					</view>
		</scroll-view>
		
		
		<view class="drawer" :class="{'drawer_show' : showDrawer}">
				
					<view class="drawer_title">按{{drawerTitle}}查询</view>
					<ul class="cateList">
						<li 
						:class="[currentCate == cateidx ? 'activeCate':'']" 
						@click="cateClick(cateidx,cate.id)"
						v-for="(cate,cateidx) of drawerList" :key="cate.id">{{cate.name}}</li>
					</ul>
				
				
				<view class="confirm"><button @click="ensure">确定</button></view>
			
		</view>
		<view class="mask" v-if="showDrawer"  @click="cancel" :class="{'showmask':showDrawer}"></view>
		
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
				 scrollTop:-1,
				 
				 //分类品牌查询
				 url :'/Activity/allActivity',
				 goodsSort:'',
				 categoryId:'',
				 brand:'',
				 showDrawer:false,
				 //分类列表
				 drawerList:[],
				 filterList:[],
				 currentCate:-1,
				 drawerTitle:'',
				 noActivityText:''
			};
		},
		computed:{
			getcurrent(){
				return this.$store.state.currentIndex
			},
			shopId(){
				return this.$store.state.shopId
			},
			// filterActivity(){
			// 	let filterarr=[]
			// 	console.log(this.currentidx)
			// 	if(this.currentidx == 0){
			// 		return this.allgoodsList
					
			// 	}else if(this.currentidx == 1){
			// 		return this.tejiaList
					
			// 	}else if(this.currentidx == 2){
					
			// 		return this.zhekouList
			// 	}else if(this.currentidx == 3){
					
			// 		return this.manzengList
					
			// 	}else if(this.currentidx == 4){
					
			// 		return this.maizengList
			// 	}
			// }
		},
		watch:{
			getcurrent(n,o){
				//下标为1时加载数据，也就是当点击了全部商品时才调用方法
				if(n == 2 && !this.loadonce){
					this.loadonce = true
					this.getgoods_list()
				}
			},
			filterIdx(n,o){ //监听保存上一次选择的选项，切换筛选类别时重置
				if(this.saveOptionIdx != n){
					this.currentCate = -1
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
							this.allgoodsList[image.dataset.index].show = true;
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
			// 		this.getgoods_list()
							
			// },
			handleChange(idx){
				this.currentidx = idx
				if(this.currentidx == 0){
					this.url = '/Activity/allActivity'
				}else if(this.currentidx == 1){
					this.url = '/Activity/teJMore'
				}else if(this.currentidx == 2){
					this.url = '/Activity/zheKMore'
				}else if(this.currentidx == 3){
					this.url = '/Activity/manZMore'
				}else if(this.currentidx == 4){
					this.url = '/Activity/maiZMore'
				}
				
				this.show = false
				this.load()
				this.allgoodsList=[]
				this.getgoods_list()
			},
		
			cateClick(idx,id){
				this.currentCate = idx
				if(this.filterIdx == 2){
					
					this.categoryId = id //获取点击的分类id
				}else{
					this.brand = id //获取点击的品牌id
				}
				
			},
			cancel(){
				this.showDrawer = false;
			},
			//确定
			ensure(){
				this.saveOptionIdx = this.filterIdx
				this.allgoodsList=[]
				this.getgoods_list()
				this.showDrawer = false;
			},
			changeFilter(idx){
				
				this.show = false
				//现在的查询是分开的，默认显示最新商品，
				//按销量查询
				//按分类查询
				//按品牌查询
				//这些都是单独查询，比如开始点击分类查询，再次点击品牌时会清除掉分类id，只按照品牌查询，没有联查
				if(idx == 'sales'){ //销量
					this.filterIdx=1
					this.salesup = !this.salesup
					if(this.salesup){
						this.goodsSort = 'desc'
					}else{
						this.goodsSort = 'asc'
					}
					this.brand=''
					this.categoryId=''
					this.allgoodsList=[]
					this.getgoods_list()
				}else if(idx == 2){ //分类
					this.filterIdx=idx
					this.priceup = !this.priceup
					this.drawerTitle='分类'
					this.showDrawer=true
					this.drawerList=this.filterList[1]//分类列表
					this.brand=''
				}else if(idx == 3){ //品牌
					this.filterIdx=idx
					this.drawerTitle='品牌'
					this.showDrawer=true
					this.drawerList=this.filterList[0] //品牌列表
					this.categoryId=''
				}else{ //默认最新商品
					this.goodsSort=''
					this.filterIdx = idx
					this.allgoodsList=[]
					this.brand=''
					this.categoryId=''
					this.getgoods_list()
				}
				
			},
			
			getgoods_list(){
				
					this.$dyrequest({
						url:this.url,
						method:'POST',
						data:{
							id:this.shopId,
							saleStatus:this.goodsSort,
							categoryId:this.categoryId,
							brand:this.brand
						}
					}).then(res=>{
						
						this.filterList=[]
						if(	res.data.data.activity_goods.length > 0){
							res.data.data.activity_goods.map(item=>{
								this.$set(item,'show',false)
								this.$set(item,'loaded',false)
								item.img = this.domain + item.img
								this.allgoodsList.push(item)
							})
						}else{
							this.noActivityText = res.data.message
						}
						
						this.filterList.push(res.data.data.brand,res.data.data.category)
						
						//满赠商品
						// res.data.data.manz.map(item=>{
						// 	item.map(sitem=>{
						// 		_this.$set(sitem,'show',false)
						// 		_this.$set(sitem,'loaded',false)
						// 		sitem.img = _this.domain + sitem.img
						// 		_this.manzengList.push(sitem)
						// 	})
						// })
						// //特价商品
						// res.data.data.tj.map(item=>{
						// 	item.map(sitem=>{
						// 		_this.$set(sitem,'show',false)
						// 		_this.$set(sitem,'loaded',false)
						// 		sitem.img = _this.domain + sitem.img
						// 		_this.tejiaList.push(sitem)
						// 	})
						// })
						// //折扣商品
						// res.data.data.zk.map(item=>{
						// 	item.map(sitem=>{
						// 		_this.$set(sitem,'show',false)
						// 		_this.$set(sitem,'loaded',false)
						// 		sitem.img = _this.domain + sitem.img
						// 		_this.zhekouList.push(sitem)
						// 	})
						// })
						// //全部活动商品
						// _this.allgoodsList = _this.maizengList.concat(_this.manzengList,_this.zhekouList,_this.tejiaList)
					
						console.log(this.allgoodsList)
						//图片懒加载 首次加载
						this.windowHeight = uni.getSystemInfoSync().windowHeight
						
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
.drawerScrollList{
		height:100vh;
	}
	.cateList{
		display: flex;
		flex-wrap: wrap;
		li{
			border:1px solid #f5f5f5;
			color:#383838;
			border-radius: 5px;
			margin:0 10px 10px 0;
			padding:5px 10px;
		}
		.activeCate{
			background:linear-gradient(to right, #21A5F9, #1A6FE8);
			color:#fff;
		}
	}
	.confirm{
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		padding:10px;
		background:#fff;
		border-top:1px solid #f5f5f5;
		button{
			background: linear-gradient(to right, #21A5F9, #1A6FE8);
			line-height: 2.5;
			color:#fff;
			font-size:14px;
		}
	}
	.drawer{
		position: fixed;
		z-index: 999;
		right: 0;
		top: 0;
		padding:35px 15px 15px;
		height: 100%;
		width: 70%;
		background-color: #fff;
		overflow-x: hidden;
		transition:transform 0.3s ease;
		transform: translateX(100%);
		&_show{
			transform: translateX(0);
		}
	}
	.drawer_title{
		    padding: 10px 0;
		    margin-bottom: 10px;
		    font-size: 14px;
		    border-bottom: 1px solid #f5f5f5;
		    color: #999;
	}
	.mask{
		z-index: 99;
		opacity: 0;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width:100vw;
		background-color:rgba(0, 0, 0, 0.44);
		transition: opacity 0.3s;
	}
	.showmask{
		opacity: 1;
	}
	
</style>

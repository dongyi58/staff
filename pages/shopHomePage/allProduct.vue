<template>
	<view class="allproduct_wrap wrap">
			<view class="status_bar index_status_bar"></view>
			<customnav :back="false" navtitle="全部商品" />
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
			<scroll-view class="allgoods_list"  scroll-y @scrolltolower="handlescroll">
					<!-- 全部商品列表 -->
						<view class="goods_list_wrap">
							<view class="goods_list">
								<view class="goods_item" 
								@click="goto_goodsdetail(item.goods_id)" 
								v-for="(item,idx) of allgoods" :key="idx">
									<view class="goods_img_box">
										<!-- <image class="goods_img" :src="item.img" lazy-load mode="aspectFill"></image> -->
										<image class=" goods_img image"  lazy-load :data-index="idx" @load="imageLoad" :src="item.img" />
										<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
									</view>
									<p class="goods_name">{{item.name}}</p>
									<view class="goods_price">¥{{item.fact_price}} <span>已售出{{item.sale || 0}}件</span><!-- <i class="iconfont icon-jia"></i> --></view>
								</view>
								<view class="loadfinshed_text" v-if="finshed">没有更多商品了</view>
							</view>
							
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
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	
	
	export default {
		components:{customnav,popup},
		data() {
			return {
				allgoodsList:[],
			    domain:this.$store.state.domain,
				page:1,
				
				finshed:false,
				filterIdx:0,
				salesup:false,
				priceup:false,
				loadonce:false,
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
				goodsSort:'',
				categoryId:'',
				 brand:'',
				showDrawer:false,
				//分类列表
				 drawerList:[],
				 currentCate:-1,
				 drawerTitle:''
			};
		},
		//根据当前页面下标加载相应数据
		//很多页面需要使用生命周期，比如mounted后，加载数据
		//但是因为页面是作为组件引入，使用vshow控制显示，会触发所有页面的mounted，这里监听如果是当前页面下标时才加载方法
		//计算属性获取vuex存储的状态，在点击导航栏时存储对应的下标，使用watch监听下标变化，加载数据
		computed:{
			shopId(){
				return this.$store.state.shopId
			},
			getcurrent(){
				return this.$store.state.currentIndex
			},
			allgoods(){
				return this.allgoodsList.filter(item=>{
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
		watch:{
			getcurrent(n,o){
				//下标为1时加载数据，也就是当点击了全部商品时才调用方法
				if(n == 1 && !this.loadonce){
					this.loadonce = true
					this.getgoods_list()
					
				}
			}
		},
		
		methods:{
			 
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
				this.allgoodsList=[]
				this.getgoods_list()
				this.showDrawer = false;
			},
			//图片懒加载
			
			imageLoad(e) {
				this.allgoodsList[e.target.dataset.index].loaded = true
			},
			//图片懒加载
			
			changeFilter(idx){
				console.log(idx)
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
					this.drawerList=[]
					this.brand=''
					this.currentCate = -1
					this.getCategory()
				}else if(idx == 3){ //品牌
					this.filterIdx=idx
					this.drawerTitle='品牌'
					this.showDrawer=true
					this.drawerList=[]
					this.categoryId=''
					this.currentCate = -1
					this.getBrand()
				}else{ //默认最新商品
					this.goodsSort=''
					this.filterIdx = idx
					this.allgoodsList=[]
					this.brand=''
					this.categoryId=''
					this.getgoods_list()
				}
				
			},
			drawerClose(){
				this.showDrawer=false
			},
			handlescroll(e){
				 if(this.finshed) return 
					this.page++
					this.getgoods_list()
							
			},
			//获取全部商品列表
			getgoods_list(){
			
					let _this = this
					 this.$dyrequest({
							url:'/Supplier/getAllProviderGoods', 
							method:'POST',
							data:{
								page:_this.page,
								id:this.shopId,
								finshed:false,
								saleStatus:this.goodsSort,
								categoryId:this.categoryId,
								brand:this.brand
							}
					 }).then(res=>{
							//console.log( res.data.data.data.length)
							
							 
							 // //全部商品列表
							 
							 res.data.data.data.map((item,idx)=>{
									 _this.$set(item,'show',false)
									 _this.$set(item,'loaded',false)
									 item.img = _this.domain + item.img
									  _this.allgoodsList.push(item)
								 
								 
							 })
							 // console.log(_this.allgoodsList)
							
							
							 //判断没有数据，不再请求
							 if(res.data.data.data.length == 0){
								_this.finshed = true
							 }
							 
					 })
							
							
			},
			
			//获取分类
			getCategory(){
				this.$dyrequest({
					url:"/Supplier/getCategoryById",
					method:"POST",
					data:{
						id:this.shopId
					}
				}).then(res=>{
					this.drawerList = res.data.data
					console.log(res)
				})
			},
			
			//获取商品品牌
			getBrand(){
				this.$dyrequest({
					url:"/Supplier/getBrandsById",
					method:"POST",
					data:{
						id:this.shopId
					}
				}).then(res=>{
					this.drawerList = res.data.data
					
				})
			},
			//商品详情
			goto_goodsdetail(goodsId){
				 uni.navigateTo({
					 
					url:'/pages/goodsDetail/goodsDetail?dtype=1&goods_id='+goodsId
				 })
			},
		}
		
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.allgoods_list{
		width: 100%;
		height: calc(100vh - 135px);
	}
	.goods_price span{
		font-weight: normal;
		    font-size: 12px;
		    color: #ccc;
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

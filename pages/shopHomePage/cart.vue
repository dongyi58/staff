<template>
	<view class="wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav :navtitle="cartTitle" 
		:ismsg="false"  
		:isedit="true" 
		:back="false" />
		
		<scroll-view scroll-y="true" @scroll="handleScroll"
					:scroll-top="scrollTop" class="cart_scrollview"  v-if="cartGoodsList.length">
			
			<view class="order_box" 
					v-for="(item,idx) of cartGoodsList" :key="idx">
					 <!-- 订单号 -->
					 <view class="ordernum">
						   <view class="shopcheckGroup">
							   <checkbox-group  @change="checkShopAllgoods(idx)">
							   	<checkbox :checked="item.checked" color="#fff" class="cartCheckBox" /> 
							   </checkbox-group>
							   <span>{{item.shopName}} </span>
						   </view>
					 </view>
					 <!-- 商品详情 -->
					 <uni-swipe-action>
						  <uni-swipe-action-item  
							 v-for="(goods,gidx) of item.goodsInfo" 
							 :key="gidx" 
							 :options="options" 
							 @click="delCartGoods($event,goods.id)">
								<view class="goodsActiveTips" v-if="goods.activity == 1" @click="checkActivity(item.activity_rule)">查看活动</view>
								<view class="order_item">
										<view class="checkWrap">
											   <checkbox-group  v-if="goods.goods_status!=3" @change="checkGoods(idx,gidx)">
												<checkbox :checked="goods.checked"  color="#fff" class="cartCheckBox" />
											   </checkbox-group>
												<span v-else class="holderSpan"> </span>
										 </view>
										<view class="o-left"  @click="goto_goodsdetail(goods.goods_id,goods.goods_status)">
											
											<!-- <image class="order_img" src="../../static/images/activity.jpeg" mode="aspectFill"></image> -->
											 <image class=" order_img image" 
											 :class="[goods.goods_status == 3 ? 'disableGoods' : '']" 
											 lazy-load 
											 :data-index="goods.goodsIndex" 
											 @load="imageLoad($event,idx)" :src="goods.goods_img" />
											 
											 <view class="image placeholder loadimg" :class="{loaded:goods.loaded}" ><i class="iconfont icon-image"></i></view>	
										 </view>
										<view class="omid"  :class="[goods.goods_status == 3 ? 'disableGoods' : '']">
											 <p  @click="goto_goodsdetail(goods.goods_id,goods.goods_status)">{{goods.goods_name}}</p>
											 <span class="skustr">规格:{{goods.spec_str}}</span>
											 <view class="omid_bottom">
												 <span class="c_price" v-if="goods.goods_status == 2">￥{{goods.goods_price}}</span>
												 <span v-else-if="goods.store == 0">已售罄</span>
												 <span v-else>已下架</span>
												 <stepper :min="goods.mop"  @change="quantityNum($event,idx,gidx,goods.id)" :max="99" :value="goods.quantity" :disabled="goods.goods_status == 3 ? true : false"></stepper>
											 </view>
										</view>
								</view>
								
						  </uni-swipe-action-item>
					 </uni-swipe-action>
			</view>
			
		</scroll-view>
		<view class="emptyTips" v-else style="font-size:3em">
			<i class="iconfont icon-kongyemiankongneirong"></i>
			<span>购物车空空如也</span>
		</view>
		</scroll-view>
		<view class="totalPrice">
			<view class="checkAllBtn">
				<checkbox-group  @change="checkAll">
						<checkbox  :checked="checkall" class="cartCheckBox" color="#fff" />
						<span>全选</span>
				 </checkbox-group>
				
			</view>
			<view class="total_check">
				<view v-if="!editFlag" class="checkBox">
					<view class="total">合计：<span>￥{{checkedGoods.totalPrice}}</span></view>
					<button class="checkBtn" size="mini" @click="goOrder" >结算({{checkedGoods.count}})</button>
				</view>
				
				<span class= "delBtn" v-else @click="delCartGoods(null)">删除</span>
			</view>
		</view>
		<!-- <popup ref="popup" type="bottom">
			<view>
				<ul>
					<li>{{activityRule[0].rebate}}</li>
				</ul>
			</view>
		</popup> -->
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	//步进器
	import stepper from "@/components/uni-number-box/uni-number-box.vue"
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	//滑动操作
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		components:{uniSwipeAction,uniSwipeActionItem,customnav,stepper,popup},
		data() {
			return {
			
				cartList:[],//存储重新组装的购物车列表，用来做选取后计算价格，全选等
				cartGoodsList:[],//存放商品列表，用来做商品图片懒加载
				disableGoods:[],
				goodsIdx:-1,
				cartNum:0,
				domain:this.$store.state.domain,
				checkall:false,
				cartTitle:'',
				activityRule:{},
				options:[
				        {
				            text: '取消',
				            style: {
				                backgroundColor: '#007aff'
				            }
				        }, {
				            text: '删除',
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        }
				      ],
				loaded:false,
				show:false,
				topval:0,
				scrollTop:-1
			};
		},
		
		watch:{
			getcurrent:{
				handler(n,o){
					
					//用户有加入购物车操作，才重新获取数据
					if(n == 3){
						 console.log('重新加载了')
						this.init()
					
					}
					
				},
				immediate:true
			}
		},
		computed:{
			shopId(){
				return this.$store.state.shopId
			},
			editFlag(){
				return this.$store.state.editFlag
			},
			getcurrent(){
				return this.$store.state.currentIndex
			},
			addcart(){
				return this.$store.state.addCart
			},
			checkedGoods(){
					let totalPrice = 0 //计算总价
					let count = 0 //计算选中的商品个数
					let cartIdArr=[] //存储选中购物车商品id
					let sellerId=""
					this.cartGoodsList.map(item=>{
							item.goodsInfo.map(gitem=>{
								if(gitem.checked && gitem.goods_status !=3){
									
									cartIdArr.push(gitem.id)
									sellerId = gitem.seller_id	
									totalPrice += gitem.goods_price * gitem.quantity
									count++
								}
							})
							
					})
					return {
							totalPrice:totalPrice.toFixed(2),
							count:count,
							cartId:cartIdArr,
							sellerId:sellerId
						}
			},
		},
		methods:{
			backTop(){
				this.scrollTop = 0
				setTimeout(()=>{
					this.scrollTop = -1
				},500)
			},
			handleScroll(e){
				this.topval = e.target.scrollTop
			},
			checkActivity(res){
				this.activityRule = res
				this.$refs.popup.open()
			},
			init(){
				
				this.cartTitle = ''
				this.$store.dispatch('getCartNum',{id:this.shopId}).then(()=>{
					this.cartTitle = `采购单(${this.$store.state.cartNum})`;
					
				})
				
				this.$store.commit('CHANGE_EDITSTATUS',false) //恢复编辑状态
				this.cartGoodsList = []
				this.getCartList()
				
				
			},
			//删除购物车商品
			delCartGoods(e,id){
				//滑动点击删除按钮
			
					let cartId = ''
					if(id){
						
						if(e.index == 1){
							cartId = id
						}else{
							return
						}
					}else{
						if(this.checkedGoods.cartId.length == 0){
							uni.showToast({
								icon:'none',
								title: '您还没有选择商品',
							})
							return
						}
						 cartId = this.checkedGoods.cartId
					}
					this.$dyrequest({
						url:'/CartSales/delCart',
						method:'POST',
						data:{
							id:this.shopId,
							cartId:cartId
						}
					}).then(res=>{
						this.cartGoodsList=[]
						this.getCartList()
						this.checkall=false
						this.$store.dispatch('getCartNum',{id:this.shopId}).then(()=>{
							this.cartTitle = `采购单(${this.$store.state.cartNum})`
						})
					})
				
				
			},
			
			//勾选小店后，选取此小店下所有商品
			checkShopAllgoods(idx){
				 this.checkall=false //取消勾选全选按钮
				 this.$set(this.cartGoodsList[idx],'checked',!this.cartGoodsList[idx].checked)//选中店铺
				
				//必须要if判断不能简写!checked，如果先单选的一个商品，再勾选小店的话，被单选过的会选不上，必须要显示的声明true或false
				if(this.cartGoodsList[idx].checked){
					this.cartGoodsList[idx].goodsInfo.map(item=>{ //全选店铺下的商品
						this.$set(item,'checked',true)
					})
				}else{
					this.cartGoodsList[idx].goodsInfo.map(item=>{ //全选店铺下的商品
						this.$set(item,'checked',false)
					})
				}
				
				
				//获取选中的小店个数，判断是否选中所有小店，勾选全选按钮
				this.mapGoods()
				
			},
			
			//勾选单个商品
			checkGoods(pidx,cidx){
				let selectedItem = this.cartGoodsList[pidx].goodsInfo[cidx]
				let count = 0
				let len = this.cartGoodsList[pidx].goodsInfo.length
				this.checkall=false //取消勾选全选按钮
				
				this.$set(selectedItem,'checked',!selectedItem.checked)
				
				this.cartGoodsList[pidx].goodsInfo.map(item=>{ //不计算并减去已失效的商品
					if(item.goods_status == 3){
						this.$set(item,'checked',false)
						len--
					}
				})
									 
				//获取选中的商品个数，判断是否选中小店下所有商品，勾选小店
				// this.mapGoods()
				 this.cartGoodsList[pidx].goodsInfo.map(item=>{
					
					 if(item.checked){
					 	count++
						  
					 	if(count == len){
					 		 this.cartGoodsList[pidx].checked = true
							 this.mapGoods()
					 	}else{
							 this.cartGoodsList[pidx].checked = false
						}
					 }else{
						 //购物车剩最后一个商品时，并取消勾选时，同时取消小店勾选
						 if(len == 1 && item.goods_status != 3){
							  this.cartGoodsList[pidx].checked = false
							  this.mapGoods()
						 }
						 //console.log(this.cartGoodsList[pidx].goodsInfo.length)
					 }
					
				})
			},
			//全选
			checkAll(){
				this.checkall = !this.checkall //勾选全选按钮
				
				this.cartGoodsList.map(item=>{
					this.$set(item,'checked',this.checkall) //勾选中店铺
					item.goodsInfo.map(citem=>{
						this.$set(citem,'checked',this.checkall)//店铺下的商品
					})
				})
			},
			//更改购买数量
			quantityNum(quantity,pidx,cidx,id){
				let selectedItem = this.cartGoodsList[pidx].goodsInfo[cidx]
				this.$set(selectedItem,'quantity',quantity)
				
				this.$dyrequest({
					url:'/CartSales/editCart',
					method:'POST',
					hideLoading:true,
					data:{
						id:this.shopId,
						cartId:id,
						quantity:quantity
					}
				})
			},
			
			//循环所有小店是否被选中，都被选中勾选全选按钮
			mapGoods(){
				let count = 0
				this.cartGoodsList.map(pitem=>{
					if(pitem.checked){
						count++
						count == this.cartGoodsList.length ? this.checkall =true : this.checkall =false
					}
				})
			},
			
			//图片懒加载
			imageLoad(e,idx) {
				
				this.cartGoodsList[idx].goodsInfo[e.target.dataset.index].loaded = true
			},
			//获取购物车列表
			getCartList(){
				this.$dyrequest({
					url:"/CartSales/myCart",
					method:"POST",
					data:{
						id:this.shopId
					}
				}).then(res=>{
					
					let data1 =res.data.data.data1 //正常商品
					let data2 = res.data.data.data2//失效商品
					let goodsarr=[]
				   //将失效商品合并到一起
				   if(res.data.data.data1){
					   for(let j in data2){
					   	for(let k in data2[j]){
					   		
					   		data1[j].push(data2[j][k])
					   		
					   	}
					   }
					   goodsarr = data1
				   }else{
					    goodsarr= data2
				   }
					
					
				for(let i in goodsarr){
						let tempGoods=[]
						 this.goodsIdx = -1
						 
						//存储该小店下面的商品
						for(let j in goodsarr[i]){
							 this.goodsIdx++
							 //设置商品最小起订量
							 if(goodsarr[i][j].price_type == 'whole'){
								  this.$set(goodsarr[i][j],'mop',Number(goodsarr[i][j].whole_sale_num))
							 }else{
								 this.$set(goodsarr[i][j],'mop',Number(goodsarr[i][j].retail_sale_num))
							 }
							  
							 this.$set(goodsarr[i][j],'goodsIndex',this.goodsIdx)
							 this.$set(goodsarr[i][j],'loaded',false)
							 if(goodsarr[i][j].goods_status != 3){
								 this.$set(goodsarr[i][j],'checked',false)
							 }
							 
							 goodsarr[i][j].goods_img = this.domain+ goodsarr[i][j].goods_img
							 tempGoods.push(goodsarr[i][j])
							 // this.cartList.push(data1[i][j])
							}
							
							
							//重新组装数据，将对应小店和商品组装在一起 
							this.cartGoodsList.push({
								shopName:i,
								checked:false,
								goodsInfo:tempGoods
							})
							
							
						
					}
					
					 console.log(this.cartGoodsList) 
				})
			},
			
			goto_goodsdetail(goodsId,status){
					if(status == 3){
						uni.showToast({
							icon:'none',
							title:'商品已失效'
						})
						return
					}
					 uni.navigateTo({
						url:'/pages/goodsDetail/goodsDetail?dtype=1&goods_id='+goodsId
					 })
			},
			//结算跳转至确认订单
			goOrder(){
				if(this.checkedGoods.cartId.length == 0){
					uni.showToast({
						icon:'none',
						title: '您还没有选择商品',
					})
					return
				}
				this.checkall=false 
				// this.checkedGoods.cartId.map(cid=>{
				// 		this.cartGoodsList.map(item=>{
				// 			 item.goodsInfo.map((gitem,gidx)=>{
				// 					if(gitem.id == cid){
				// 						this.cartGoodsList.splice(gidx,1)
				// 					}
				// 			 })
				// 		})
				// })
				// this.$store.commit('SET_CURRENINDEX',0)
				uni.navigateTo({
					url:'/pages/order/order?type=2&sellerId='+this.checkedGoods.sellerId+'&cartId='+this.checkedGoods.cartId
				})
			},
	
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.cart_scrollview{
		height:calc(100vh - 125px);
		padding:10px;
		box-sizing: border-box;
	}
	
	//购物车列表
	.loadimg i{
		font-size:2em;
	}
	.order_box{
		background:#fff;
		margin-bottom:10px;
		padding:10px 10px 0;
		border-radius:10px;
		.ordernum{
			display:flex;
			justify-content: space-between;
			align-items: center;
			padding:10px 0;
			
			&_left{
				display: flex;
				align-items: center;
				color:#999;
				span:last-child{
					border:1px solid #147AED;
					color:#147AED;
					border-radius:4px;
					padding:3px 5px;
					margin-left:5px
				}
			}
			.shopcheckGroup{
				display: flex;
				align-items: center;
			}
			span{
				display: flex;
				align-items: center;
				i{
					position:relative;
					top:1px;
					color:#999;
					margin-right:5px;
					font-size:12px;
				}
			}
			span:first-child{
				font-size:14px;
			}
			&>span{
				color:#147AED
			}
		}
		.checkWrap{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.order_item{
		
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom:1px solid #eee;
			width:100%;
			padding:15px 0;
			.o-left{
				position:relative;
				width:80px;
				height:80px;
				flex-shrink: 0;
				overflow: hidden;
				    border-radius: 5px;
				.order_img{
					width:100%;
					height:100%;
					border:1px solid #eee;
				}
			}
			
			.omid{
				display: flex;
				flex-direction: column;
				color:#505050;
				padding-left:10px;
				flex:1;
				p{
					@include longtext2;
					max-height:38px;
				}
				.skustr{
					
					max-width:100px;
					background:#f5f5f5;
					color:#999;
					border-radius: 20px;
					padding:3px 10px;
					margin-top:5px;
					font-size:12px;
					align-self: baseline;
					@include longtext;
				}
				&_bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top:5px;
					.c_price{
						color:#EE453C;
						font-weight: 600;
					}
				}
				
			}
		}
		.total_box{
			border-top:1px solid #eee;
			.total_one{
				padding:10px 0 ;
				display: flex;
				.to_left{
					width:50%;
					span{
						border-radius:20px;
						padding:3px 10px;
						color:#fff;
						text-align: center;
						margin-right:10px;
						box-sizing: border-box;
					}
					.sh_btn{
						background:#078CF3
					}
					.qrcode_btn{
						background:#EE453C
					}
					
				}
				.to_right{
					width:50%;
					display: flex;
					justify-content: flex-end;
					color:#999;
					
					span{
						margin-left:1rem;
						
					}
					
				}
				
			}
			.total_two{
				
				display: flex;
				justify-content: space-between;
				align-items: center;
				color:#999;
				padding-bottom:10px;
				span:last-child{
					font-size:14px;
					color:#EE453C;
					font-weight: 600;
				}
			}
		}
	}
	.holderSpan{
		display: inline-block;
		width:25px;
	}
	.goodsActiveTips{
		width:100%;
		text-align:right;
		color:#147AED;
		padding:5px 0;
	}
</style>

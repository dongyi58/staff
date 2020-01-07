<template>
	<view class="goodsDetail_wrap">
		<view class="status_bar detail_status_bar" :style="{'opacity':transOpacity}"></view>
		<customnav  :isSearch="true" :transOpacity="transOpacity" :transColor="transColor" setFixed/>
		
		<view class="detail_list" >
			<view class="detail_box">
				<!-- 轮播图 -->
				<view class="detail-swiper-box">
					<swiper class="swiper" @change="handleSwiperChange" >
						<swiper-item class="swiperItem" v-for="(banner,bannerIdx) of goodsDetail.goodsImg" :key="bannerIdx">
							<image class="bannerImg" :src="domain + banner.img" lazy-load @load="imageLoad(bannerIdx)"  mode="aspectFill"></image>
							<view class="image placeholder loadimg" :class="{loaded:banner.loaded}" ><i class="iconfont icon-image"></i></view>	
						</swiper-item>
					</swiper>
					<span class="indicator_idx">{{currentSwiper}}/{{swiperTotal}}</span>
				</view>
				<!--商品基本信息 -->
					<view class="goodsBasicInfo">
						<!-- 价格库存和商品名称 -->
						<view class="info_item info_one">
							<view class="price_stock">
								<view class="left_price">
									<view class="nowPrice" v-if="formatPrice"><span>￥</span>{{formatPrice.nowPrice || '0.00'}}</view>
									<view class="oldPrice"  v-if="formatPrice">原价：<span>￥{{formatPrice.oldPrice || '0.00'}}</span></view>
								</view>
								<view class="right_stock">
									<!-- 库存：{{goodsDetail.product}}件 -->
								</view>
							</view>
							<view class="goods_name">
								<span>厂家直销</span>{{goodsDetail.goods.name || '商品名称'}}
							</view>
							<!-- <view class="adtext">奥术大师多撒大所大</view> -->
						</view>
					</view>
					<!-- 优惠发货和已选规格 -->
					<view class="info_item info_two">
						<view class="discount_cell info_cell" @click="openPopup">
							<view class="cell_left"  >
								<span>优惠</span>
								<span v-if="goodsDiscount.length == 0" style="color:#999">暂无可领取优惠券</span>
								<span v-else>共{{goodsDiscount.length}}张优惠券可领取</span>
							</view>
							<view class="cell_right">
								<i class="iconfont icon-you"></i>
							</view>
						</view>
						<view class="send_cell info_cell">
							<view class="cell_left">
								<span>发货地</span>
								<span>{{goodsDetail.supplier.address}}</span>
							</view>
							<view class="cell_right">
								<i class="iconfont icon-you"></i>
							</view>
						</view>
						<view class="send_cell info_cell" @click="showSpec(3)">
							<view class="cell_left">
								<span>选择</span>
								<span>{{selectSkuText}}</span>
							</view>
							<view class="cell_right">
								<i class="iconfont icon-you"></i>
							</view>
						</view>
						<!-- 打折 -->
						<view class="send_cell info_cell" v-if="zhekou">
							<view class="cell_left">
								<span>折扣</span>
								<span>现在购买享受<i style="color:red">{{activityRule[0].rebate*10}}</i>折</span>
							</view>
							<view class="cell_right">
								<!-- <i class="iconfont icon-you"></i> -->
							</view>
						</view>
						<!-- 满减 -->
						<view class="send_cell info_cell" v-if="zhekouman">
							<view class="cell_left">
								<span>满减</span>
								<span>现在购买满{{activityRule[0].money}}元立减{{activityRule[0].rebate}}元</span>
							</view>
							<view class="cell_right">
								<!-- <i class="iconfont icon-you"></i> -->
							</view>
						</view>
						<!-- 特价 -->
						<view class="tejie_cell" v-if="tejia">
							<view class=" tejia_left">
								<span>特价</span>
							</view>
							<view class="tejia_right">
								<span v-for="(tips,tidx) of tejiaTips" :key="tidx" v-html="tips.text">
									{{tips.text}}
								</span>
							</view>
						</view>
					</view>
					<!-- 供应商信息-->
					<view class="info_item info_three"> 
						<view class="info_cell">
							<view class="cell_left info3_cell_left">
								<image class="info3_img" :src="domain+goodsDetail.supplier.storepic[0]"></image>
								<view class="info3_text">
									<span class="suppliername">{{goodsDetail.supplier.contactname}}</span>
									<view class="rate_comment">
									
										<uni-rate :value="star" disabled="true"></uni-rate>
										<!-- <span>89条评论</span> -->
									</view>
								
								</view>
							</view>
							<view class="cell_right">
								<span>进入店铺</span>
								<i class="iconfont icon-you"></i>
							</view>
						</view>
					</view>
					<!-- 图文详情-商品参数选项卡 -->
					<view class="imgdetail_info_tabs">
							<view class="d_tabs">
								<ul>
									<li @click="changeTabs(1)" :class="[currentTabs == 1 ? 'd_tabActive' : '']">图文详情</li>
									<li @click="changeTabs(2)" :class="[currentTabs == 2 ? 'd_tabActive' : '']">商品参数</li>
								</ul>
							</view>
							<view class="tabs " v-html="imageTextUrl" v-show="currentTabs == 1"></view>
							<view class="tabs" v-show="currentTabs == 2">
								<view class="tabs_cell" v-for="(gp,idx) of goodsParams" :key="idx">
									<span>{{gp.attribute_name}}</span>
									<span>{{gp.attribute_value}}</span>
								</view>
							</view>
					</view>
					
			</view>
		</view>
		<view class="actionBar">
			<view class="action_left">
				<span><i class="iconfont icon-dianpu-tap"></i>店铺</span>
				<span><i class="iconfont icon-lianxikefu"></i>客服</span>
				<span @click="goCart">
					<i class="badage" :style="width">{{cartNum}}</i>
					<i class="iconfont icon-dingdan"></i>采购单
				</span>
			</view>
			<view class="action_right">
				<button size="mini" @click="showSpec(1)">加入购物车</button>
				<button size="mini" @click="showSpec(2)">立即购买</button>
			</view>
		</view>
		<!-- 商品规格选项弹窗 S-->
			
		<view class="amask"  @click="closeSpec" :class="[openSpec ? 'showMask' : '']"></view>
		<view class="specView" 
					@touchstart="touchstart"
						@touchmove="touchmove"
						:class="[openSpec  ? 'showSpec' : '']">
							<view class="specHeader" :class="[swipeChange ?  'header_ani' : '']">
								<view class="sh_left">
									<image class="spec_img" mode="aspectFill" :src="specImgUrl"></image>
								</view>
								
								<view class="sh_right">
									<view class="sh_left_text">
										<view class="spec_price">￥<span>{{selectSpecInfo.specPrice}}</span></view>
										<span class="spec_describe">{{selectSpecInfo.specTitle}}</span>
										<span class="spec_num">货号:{{selectSpecInfo.productNo}}</span>
										<span class="spec_stock">库存:{{selectSpecInfo.stock}}</span>
									</view>
								</view>
								<i class="iconfont icon-ziyuan" @click="closeSpec"></i>
							</view>
							<scroll-view scroll-y="true" 
							:class="[swipeChange  ? 'scrollView_ani' : '']"
							@scroll="closeSwiperChange"
							 class="specScrollView">
								<view class="spec_list">
									<!-- 规格 -->
									<view class="spec_option" v-if="skuData.length">
										<view class="sku_parent" v-for="(skuParent,idx) of skuData" :key="idx">
											  <h1 class="skuname">{{skuParent.name}}</h1> 
											  <ul class="skuChild">
												<li
												  @click.stop="skuChildClick(idx,scidx,skuChild,skuParent.name)"
												  v-for="(skuChild,scidx) of skuParent.item" :key="scidx"
												  :class="[skuChild.isShow ? '' : 'disabledSku',selectIdx[idx] == scidx ? 'activeSku' : '']"
												  >
												 {{skuChild.value}}</li>
											  </ul>
										</view>
									
									</view>
									<!-- 价格类型 -->
									<view class="priceOption">
											<view class="sku_parent">
												  <h1 class="skuname">单价</h1> 
												  <ul class="skuChild">
														<li class="priceBox " 
														@click="priceSelect(1)" 
														:class="[ps_idx == 1 ? 'active_price' : '']"
														v-if="specPriceType == 2 || specPriceType == 3"
														>
															
															<view class="price_head">零售价: <span>￥<i>{{goodsInfoBySpec.retail_price}}</i></span>/{{goodsInfoBySpec.retail_unit}}</view>
															<view class="spec_text">{{goodsInfoBySpec.retail_specTitle}}</view>
														</li>
														<li class="priceBox"
														 @click="priceSelect(2)" 
														:class="[ps_idx == 2 ? 'active_price' : '']"
														 v-if="specPriceType == 1 || specPriceType == 3"
														>
															<view class="price_head">批发价: <span>￥<i>{{goodsInfoBySpec.wholesale_price}}</i></span>/{{goodsInfoBySpec.whole_unit}}</view>
															<view class="spec_text">{{goodsInfoBySpec.whole_specTitle}}</view>
														</li>
												  </ul>
											</view>
										
									</view>
									<!-- 采购数量 -->
									<view class="buySteper">
										<view class="steperLeft">采购数量({{selectSpecInfo.moq+selectSpecInfo.unit}}起售)</view>
										
										<view class="steperRight"><stepper :min="selectSpecInfo.moq"  @change="stepperChange" :max="99" :value="quantity"></stepper></view>
									</view>
									
									<!-- 弹窗确定按钮 -->
									<view class="confirmBtnBox">
										<button class="confirmBtn" v-if="confirmType!=3" @click="confirmFuc">确定</button>
										<view class="selectBtn" v-else><button class="addCart">加入购物车</button><button class="buyNow">立即购买</button></view>
									</view>
								</view>
							</scroll-view>
					</view>
				
			
	
					
				
		<!-- 商品规格选项  E-->
		
		<!-- 领取优惠券 -->
		<popup ref="popup" type="center" class="home_popup" :popstyle="{width:'90%',height:'350px',overflow:'hidden'}">
					 <!-- 折扣券 -->
					<view class="yhq_title">来领券吧
					 <i class="iconfont icon-ziyuan" @click="closePopup()"></i>
					 </view>
					<view class="yhqbox">
						<view 
						class="yhq_item"
						v-for="(item,idx) of goodsDiscount"
						v-if="item.way_id == 1"
						:key="idx"
						style="background:url(../../static/images/yhq.png)">
						   <image v-if="item.take" class="takeimg" src="../../static/images/take.png"></image>
							<view class="yhq_left">
								<view class="yhq_left_one">
									<span><i>¥</i>{{item.rule[0].rebate}}</span>
									<span>{{item.start_time}} - {{item.end_time}}</span>
								</view>
								<view class="yhq_left_two">
									<span>满{{item.rule[0].money}}元使用</span>
									<span>全部商品通用<br>(特价除外)</span>
								</view>
							</view>
							<view class="yhq_right">
								<span>店铺折扣券</span>
								<span  class="usestyle2" v-if="!item.take" @click="getYhq(item.activity_id,'',idx)">领 取</span>
								<!-- <span  class="takestyle2" v-else @click="useDiscount(item.activity_id,item.way_id)">去使用</span> -->
							</view>
						</view>
						<!-- 满减券 -->
						<view
						class="yhq_item"
						v-else
						style="background:url(../../static/images/yhq2.png)">
						   <image v-if="item.take" class="takeimg" src="../../static/images/take.png"></image>
							<view class="yhq_left">
								<view class="yhq_left_one">
									<span><i>¥</i>{{item.rule[0].rebate}}</span>
									<span>{{item.start_time}} - {{item.end_time}}</span>
								</view>
								<view class="yhq_left_two">
									<span>满{{item.rule[0].money}}元使用</span>
									<span>全部商品通用<br>(特价除外)</span>
								</view>
							</view>
							<view class="yhq_right">
								<span>店铺满减券</span>
								<span  class="usestyle" v-if="!item.take" @click="getYhq(item.activity_id,item.rule[0].money,idx)">领 取</span>
								<!-- <span  class="takestyle" v-else @click="useDiscount(item.activity_id,item.way_id)">去使用</span> -->
							</view>
						</view>
						
					</view>
		 </popup>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	//星级
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	//步进器
	import stepper from "@/components/uni-number-box/uni-number-box.vue"
	
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	
	export default {
		components:{
			customnav,
			popup,
			uniRate,
			stepper,
			uniCollapse,
			uniCollapseItem
			},
		data() {
			return {
				goodsDetail:[],//商品详情数据
				goodsInfoParams:{},//接收活动商品参数
				domain:this.$store.state.domain,
				currentSwiper:1,//当前轮播下标
				swiperTotal:0,//轮播图总数
				currentTabs:1,//当前显示选项卡
				goodsDiscount:[],//优惠券
				goodsParams:[],
				openSpec:null,
				//规格
				childIdx:-1,
				parentIdx:-1,
				skuData:[],
				skuInfo:[],
				selectIdx:[],
				selectArr:[],
				checkSku:[],
				initSku:'',
				init:true,
				star:0,
				defaultSkuname:[],//未选择规格时的文字，比如有颜色尺码，没选择显示请选择颜色/尺码
				//规格滚动特效值
				startY:0,
				moveY:0,
				swipeChange:false,
				swipeMargin:'0',
				transOpacity:0,
				transColor:0,
				//价格选择
				selectSkuText:'',
				quantity:0,
				ps_idx:0,//价格切换样式下标
				defaultSku:[],//默认一组选中的sku值
				goodsInfoBySpec:[],//根据规格值查出的商品信息
				specTotal:0,//有几种规格，用来判断是否选取了所有规格，
							//1是选取完之后才请求规格相关价格，用来防抖
							//2是选取完之后才允许点击确定按扭
				specPriceType:0 ,//判断显示哪种价格 只显示单价或批发价或两个价格都显示
				specImgUrl:'',//规格图片
				specTipsArr:[],//提交时的规格项名称，用户点击确定时，如有未选择的规格项，给予提示
				confirmType:0,//点击确定按钮时根据不同的type来区分是加入购物车还是下单购买，1购物车，2下单
				
				//加入购物车 购买商品请求所需参数
				cartNum:0,
				selectGoods:{
					id:'',
					goodsId:'',
					productId:'',
					quantity:'',
					price_type:'',
					buy_type:'',
					position:''
				},
				//badage宽度
				width:0,
				//普通商品/活动商品详情
				goodsId:0,
				dtype:0,//区分活动普通商品
				zhekou:false,//折扣，显示不同活动的规则文字
				zhekouman:false,//满减
				tejia:false,//特价
				activityRule:[],
				activityType:'',//活动名称
				tejiaTips:[]//特价的提示
			};
		},
	computed:{
				shopId(){
					return this.$store.state.shopId;
				},
				//商品价格显示:整件价或单价，或者是两种价格都有
				formatPrice(){
						let price  = {}
					if(this.dtype == 1){
						price = this.goodsDetail.price
						if(price){
							//整件价
							if(price.sale_type == 1){
								
								return  {'nowPrice':price.whole_min_new,'oldPrice':price.whole_min_old}
							}else if (price.sale_type == 2){
								
								//单件价
								return {'nowPrice':price.retail_min_new,'oldPrice':price.retail_min_old}
							}else{
								//整件+单件
								return {'nowPrice':price.retail_min_new +'-'+ price.whole_min_new,
										'oldPrice':price.retail_min_old +'-'+ price.whole_min_old
										}
							}
						}	
					}else{
						price = this.goodsDetail.goodsData
						if(price){
							
							if(price.retail_price && price.retail_price !='0.00'){
								
								 return {
										'nowPrice':price.retail_price,
										'oldPrice':price.retail_price
										}
							}else{
								return {'nowPrice':price.wholesale_price,
										'oldPrice':price.wholesale_price
										}
							}
						}
						
					}
						
			},
			//图文详情图片
			imageTextUrl(){
				return this.goodsDetail.goodsContent.replace(/src="/g, 'style="width:100%;object-fit:cover" src="' + this.domain);
			},
			//根据选中的规格改变价钱库存等
			selectSpecInfo(){
				let spec = this.goodsInfoBySpec
				//根据当前点击的价格类型，切换顶部的价格货号库存信息
				//通过ps_idx变化触发更新
					if(this.ps_idx == 1){
						//单价
						return {
							specPrice:spec.retail_price,
							specTitle:spec.retail_specTitle,
							productNo:spec.product_no,
							stock:spec.retail_store+spec.retail_unit,
							moq:Number(spec.retail_sale_num),
							unit:spec.retail_unit
						}
						
					}else{
						// 整件价
						return  {
							specPrice:spec.wholesale_price,
							specTitle:spec.whole_specTitle,
							productNo:spec.product_no,
							stock:spec.whole_store+spec.whole_unit,
							moq:Number(spec.whole_sale_num),
							unit:spec.whole_unit
						}
						
					
						
					}
					
			}
		},
	onLoad(option){
		
		
		
		this.goodsId = option.goods_id
		this.dtype = option.dtype
		this.activityType = option.type //manjian,zhekou
		
		// console.log(this.activityType,this.dtype)
			//请求商品详情参数
			if(this.dtype == 1){ //普通商品
				
				this.goodsInfoParams = {
					method:'POST',
					url:'/Goods/detail',
					data:{
						goodsId:option.goods_id,
						shopId:this.shopId,
						activityId:'',
						activityType:'',
						productId:''
					}
				}
			}else{
				//活动商品
				//展示对应的活动文字提示
				
				if(this.activityType=='zhekou'){
					this.zhekou = true
				}else if(this.activityType="tejia"){
						console.log('tejia')
					this.tejia = true
				}else if(this.activityType="zhekouman"){
					console.log('zhekouman')
					this.zhekouman=true
				}
					
				// console.log(this.activityType,this.tejia,this.zhekouman)
				this.goodsInfoParams = {
					method:'POST',
					url:'/Goods/productDetail',
					data:{
						id:this.shopId,
						activityId:option.activityId,
						productId:option.productId,
						sale_type:'',
						type:option.type
					}
				
				}
			}
			
			//加入购物车信息
			this.selectGoods.goodsId = option.goods_id
			this.selectGoods.id = this.shopId
			
			
			
			this.getDetail()
			
			//获取购物车数量
			this.$store.dispatch('getCartNum',{id:this.shopId}).then(()=>{
				this.cartNum = this.$store.state.cartNum
				this.width = `width: ${String(this.cartNum).length * 8 + 8}px`
				
			})
			
		},
		onPageScroll(e){
			this.transOpacity = (e.scrollTop / 200).toFixed(1) > 0.9 ? 0.9 : (e.scrollTop / 200).toFixed(1) 

			this.transColor = parseInt(e.scrollTop*2) > 255 ? 255 : parseInt(e.scrollTop * 2)
			// console.log(this.transColor)
			// console.log(this.transOpacity)
		},
		methods:{
			goCart(){
				this.$store.commit('ADD_CART',true)
				this.$store.commit('SET_CURRENINDEX',3) 
				
				// uni.redirectTo({
				// 	url:'/pages/shopHomePage/homeindex?id='+this.selectGoods.id
				// })
				
				uni.navigateBack({
				    delta:1
				});
				
			},
			//切换价格类型，并更新头部展示的价格库存货号等、
			priceSelect(idx){
				this.ps_idx = idx
				//加入购物车数据，根据当前点击的价格类型
				if(this.ps_idx == 1){
					this.selectGoods.price_type = 'retail'
					
				}else{
					this.selectGoods.price_type = 'whole'
				}
				
				this.quantity  = this.selectSpecInfo.moq //切换后重新给步进器赋初始起订量值
			},
			//规格图片放大
			touchstart(e){
				this.startY = e.touches[0].pageY
				
			},
			touchmove(e){
				this.moveY = e.touches[0].pageY - this.startY
				
				this.moveY > 0 ? this.swipeChange = true : this.swipeChange=false
			},
			closeSwiperChange(){
				this.swipeChange = false
			},
			
			
			
			//获取商品详情>调用getSku()获取商品规格组合
			//根据saletype判断应该选中当前哪个价格类型，默认选中零售价，设置ps_idx为1，批发价为2,
			//获取轮播图总数，显示当前页码
			//判断有无规格，如果只有一种规格的话，不调用规格查询方法getSku()，直接在此接口里返回了规格相关信息
			getDetail(){
				this.$dyrequest(this.goodsInfoParams).then(res=>{
					
					this.goodsDetail = res.data.data
					
					//获取活动规则
					if(this.goodsDetail.activityRule){
						this.activityRule = this.goodsDetail.activityRule
					}
					//组装特价商品规则文字
					if(this.activityType == 'tejia'){
							if(this.activityRule[0].money && this.activityRule[0].rebate){
								this.tejiaTips.push({
									text:`单件购买立减<i style="font-style:normal;color:red;margin:0 5px;">${this.activityRule[0].money}</i>元`
								},{
									text:`整件购买立减<i style="font-style:normal;color:red;margin:0 5px;">${this.activityRule[0].rebate}</i>元`
								})
							}else if(this.activityRule[0].money && this.activityRule[0].money != '0.00'){
								this.tejiaTips.push({
									text:`单件购买立减<i style="font-style:normal;color:red;margin:0 5px;">${this.activityRule[0].money}</i>元`
								})
							}else{
								this.tejiaTips.push({
									text:`整件购买立减<i style="font-style:normal;color:red;margin:0 5px;">${this.activityRule[0].rebate}</i>元`
								})
							}
					}
					// console.log(this.activityRule)
					//商家星级
					this.star = this.goodsDetail.ct.star
					//轮播图加载完成标识，懒加载
					this.goodsDetail.goodsImg.map(item=>{
						this.$set(item,'loaded',false)
					})
					
					//获取加入购物车所需数据,购买规格类型
					this.selectGoods.buy_type = this.goodsDetail.buy_type
					
					//根据价格类型添加active样式。根据sale_type默认添加购买规格类型
					if(this.goodsDetail.price.sale_type == 1){
						this.ps_idx = 2
						this.selectGoods.price_type = 'whole'
					}else{
						this.ps_idx = 1
						this.selectGoods.price_type = 'retail'
					}
					
					//商品参数
					this.goodsDetail.keys.map(kitem=>{
						this.goodsParams.push(kitem)
					})
					
					//轮播图总数
					this.swiperTotal = this.goodsDetail.goodsImg.length
					
					//优惠券
					this.goodsDiscount = this.goodsDetail.coupon || []
					if(this.goodsDiscount){
						this.goodsDiscount.map(item=>{
							 item.start_time = item.start_time.split(' ')[0].replace(/-/g,".")
							 item.end_time = item.end_time.split(' ')[0].replace(/-/g,".")
						})
					}
					
					//规格项总数
					//如果只有一种规格的话，不调用规格查询方法
					//直接在此接口里返回了规格相关信息
					
					//有规格
					if(this.goodsDetail.spec){
						// console.log(this.goodsDetail.spec)
						this.specTotal = this.goodsDetail.spec.length
						
						let initarr=[] //活动商品默认选中一组规格
						
						//默认将所有规格值设置成可选状态
						//获取规格
						this.goodsDetail.spec.map(item=>{
							let temp={}
							let temparr=[]
						
							if(Array.isArray(item.value)){
								item.value.map(citem=>{
									temparr.push({value:citem,isShow:true})
									temp={
										name: item.name,
										item:temparr
									}
								})
							}else{
								initarr.push(item.value)
								temparr.push({value:item.value,isShow:true})
								temp={
									name: item.name,
									item:temparr
								}
							}	
							this.skuData.push(temp)
						})
						if(this.dtype == 1){
							this.getSku()
						}else{
							//活动商品只有一种规格，就不调用getSku方法，
							//直接处理这一种规格
							this.getSkuInfo(this.goodsDetail.goodsData.spec_array)
							this.skuText(initarr)
							this.checkIsShow(initarr)
						}
						
					}else{
						//无规格直接获取规格信息返回
						let  specInfo = this.goodsDetail.product
						
						//获取加入购物车数据，无规格获取productId
						this.selectGoods.productId = specInfo.product_id
						
						 // 获取价格种类
						 this.specPriceType = specInfo.sale_type
						 //规格图片
						 this.specImgUrl = this.domain + specInfo.spec_img
						 
						 //规格选择提示
						 this.selectSkuText = '已选:默认规格'
						 
						//合并规格名称展示 25g/听  
						let whole =  this.goodsDetail.price.whole_spec
						
						let retail= this.goodsDetail.price.retail_spec
						
						this.$set(specInfo,'retail_specTitle',retail)
						this.$set(specInfo,'whole_specTitle',whole)
						this.goodsInfoBySpec = specInfo
					}
					
					
				})
			},
		
			//获取商品规格组合默认选中一组规格，组装规格数据，点击规格值查询对应组合是否可用或有无库存
			//限制选取该规格、并调用getSkuInfo()查询对应规格相关信息
			//存储规格项名称，未选择时，给予提示
			getSku(){
				this.$dyrequest({
				url:'/Goods/products',
				method:'POST',
				hideLoading:true,
				data:{
					id:this.shopId,
					goodsId:this.goodsId,
				}
				}).then(res=>{
				let spec = res.data.data.products
				
				let product = JSON.parse(res.data.data.product.spec_array)
				
				//存储规格项名称，未选择时，给予提示
				let text=''
				product.map(pitem=>{
					this.specTipsArr.push({name:pitem.name,isCheck:true})
					text+=pitem.name
				})
				
			
				
				//重新分配后台生成的所有可能的规格组合
				spec.map(item=>{
					let specvalStr = ''
					JSON.parse(item.spec_array).map(specVal=>{
						specvalStr += specVal.value+','
					})
					this.checkSku.push({
						// {"sku":"蓝色,35","stock":0,"is_use":1},
						sku:specvalStr.substr(0,specvalStr.length-1),
						stock:item.store,
						is_use:item.is_use,
						defaultSku:item.spec_array
					})
					
				})
				
				//将要可能的规格组合名作为键名来存储当前规格组合信息
				//后面可以直接通过点击获取的规格组合名来获取到对应的规格组合信息
				//示例：["蓝色，35"：{"sku":"蓝色,35","stock":0,"is_use":1}，"蓝色，36"：{}....]
				for (var i in this.checkSku) {
					this.skuInfo[this.checkSku[i].sku] = this.checkSku[i]
					
				}
				
				let initArr=[]
				//默认选中一组有库存并且状态为上架的规格，此处获取符合的规格组合值
				for (var j in this.checkSku){
					
					if(this.checkSku[j].stock != 0 && this.checkSku[j].is_use != 0){
				        this.initSku = this.checkSku[j].sku
						//默认存储一组规格信息，请求规格信息时使用
						this.defaultSku = this.checkSku[j].defaultSku
						
				         //将符合规则的值转为数组
				          initArr = this.initSku.split(',')
				         //找到后跳出循环，只取一组
						 this.selectArr = initArr
						break
					}
				}
				let skuValText = []
				//获取默认的规格值名称，显示已选择某某规格值
				//如果没有规格的不会进入这个方法，在getdetail里直接处理
				JSON.parse(this.defaultSku).map(item=>{
					skuValText.push(item.value)
					this.defaultSkuname.push(item.name)
				})
				// console.log(skuValText)
				 this.skuText(skuValText)
				//调用规格状态监测方法
				this.checkIsShow(initArr)
				//请求规格信息
				this.getSkuInfo()
				
			})
			},
			
			// 获取规格详情 用于默认或选取规格后，获取规格价钱和库存
			//如果该商品只有一种规格，不会调用此方法。
			//获取商品起订量
			getSkuInfo(data){
				let skuStr =''
				if(data){
					skuStr =data
				}else{
					skuStr = this.defaultSku
				}
				this.$dyrequest({
					url:'/Goods/product',
					method:'POST',
					hideLoading:true,
					data:{
						id:this.shopId,
						goodsId:this.goodsId,
						specJson:skuStr
					}
				}).then(res=>{
					this.goodsInfoBySpec = []
					let specInfo = res.data.data.specInfo
					
					 // 获取价格种类
					 this.specPriceType = specInfo.sale_type
					 
					 //有规格获取productId
					 this.selectGoods.productId = specInfo.product_id
					 
					 //stepper当前起订量,默认获取的是单个商品起订量
					 // console.log(this.ps_idx)
					 if(this.ps_idx == 1){
						  this.quantity = Number(specInfo.retail_sale_num)
					 }else{
						  this.quantity = Number(specInfo.whole_sale_num)
						 
					 }
					 // this.quantity = Number(specInfo.retail_sale_num)
					
					 //规格图片
					 this.specImgUrl = this.domain + specInfo.spec_img
					//合并规格名称展示 25g/听  
					let whole =  this.goodsDetail.price.whole_spec
					
					let retail= this.goodsDetail.price.retail_spec
					
					this.$set(specInfo,'retail_specTitle',retail)
					this.$set(specInfo,'whole_specTitle',whole)
					
					this.goodsInfoBySpec = specInfo	
					// console.log(this.goodsInfoBySpec)
				})
			},
			
			//1、点击规格值active的class管理，存放选取的规格，并调用checkIsShow()比对该规格组合
			//2、判断是否选取了所有规格项，才调用getSkuInfo()获取规格信息，
			// 在判断完选取所有规格项后，获取选中的规格值，skuText()展示选中的规格值，
			//3、specTipsArr存储得是所有规格项，点击购买或加入购物车时，根据ischeck判断是否选取了所有规格项，
			//如有颜色尺码两个规格项，因为默认要选中一组规格组合，所以默认颜色和尺码的ischeck都是true，没选中会提示哪个规格项没选择
			skuChildClick(pidx,cidx,item,pname){
				if(cidx != this.selectIdx[pidx]){
					this.$set(this.selectIdx,pidx,cidx)  //存储选中的下标
					this.$set(this.selectArr,pidx,item.value) //存储选中的sku值
					this.$set(this.specTipsArr[pidx],'isCheck',true) //记录选中的规格项confirmFuc()使用
				}else{
					this.$set(this.selectIdx,pidx,-1)
					this.$set(this.selectArr,pidx,'')
					this.$set(this.specTipsArr[pidx],'isCheck',false)
				}
				
				//console.log(this.selectArr)
				//console.log(this.selectArr,this.selectArr.length)
				//选择完所有规格后请求规格信息，
				
				if(this.selectArr[pidx]!= '' && this.selectArr.length == this.specTotal){
					//获取选中后的规格值名称，进行展示
					this.skuText(this.selectArr)
					//判断所有选择完的规格，使用开始存的以规格组合为键名skuInfo找到对应的规格组合
					this.defaultSku = this.skuInfo[this.selectArr.toString()].defaultSku
					this.getSkuInfo()
				}else{
					this.skuText()
				}
					this.checkIsShow()
			},
	
			
			//循环所有规格组合，调用规格比对函数checkStock(),例如，没有库存此规格返回false，禁用状态
			checkIsShow(initArr){
					console.log(initArr)
					let result=[] 
					for (var i in this.skuData) { 
			            
			            //根据规格种类的下标来存储选中的值，如果不存在，就填充为空值
			            //有几种规格，比如两个规格种类[颜色，尺寸]，，对应的值[蓝色，白色，黑色],[35,36,37]
			            //一个完整的规格组合[蓝色，35]
			            //如果只点击了颜色下面的蓝色结果是[蓝色]，填充为[蓝色，'']
			            //填充空值是为了判断当前组合未完成，直接在checkStock返回可点击状态 true
					   result[i] = this.selectArr[i] ? this.selectArr[i] : '' 
						
			        }
			        //循环规格种类时先循环第一种规格下面的规格值
			        //循环规格种类[颜色，尺码]
					this.skuData.map((parentItem,idx)=>{
			                //存储第一次点击的值
							let clickVal = result[idx] //[蓝色，'']
			                
			                //循环规格值 
							parentItem.item.map((childItem,childIdx)=>{
			
								//初始化时默认选中
								if(this.init){
									//利用存储的规格组合跟每一种规格下面的规格值比对，比对成功后将该下标的规格值设置为选中状态
									if(initArr[idx] == childItem.value){
										this.selectIdx[idx] = childIdx
									}
									
								}else{
			                        //非初始化，
			                        
			                        //用户点击一个规格值时，循环出每种规格可能的组合
			                      
									result[idx] = childItem.value //覆盖result的值，
									this.$set(childItem,'isShow',this.checkStock(result)) //根据checkStock返回的状态设置当前规格值是否可选
								}
								 
			                })
			                //每次规格值循环完，重置为第一次点击的值
							result[idx] = clickVal
			        })
			        //取消初始化状态，只有第一次进来时启用初始化
					this.init =false
			},
			
			//规格库存比对函数，比对是否有库存或是否启用
			checkStock(result){
				
				for (var i in result) {
				    if (result[i] == '') {
				        return true; //如果数组里有为空的值，那直接返回true
				    }
				}
				 //无空值下，判断是否有库存和是否启用，
				 return this.skuInfo[result].stock == 0 ? false : (this.skuInfo[result].is_use == 1 ? true : false);
			},
			
			//确定按钮方法，
			confirmFuc(){
				//确定时先判断是否选取了所有规格项，未选中提示
				//console.log(this.specTipsArr)
				for(let i in this.specTipsArr){
					if(!this.specTipsArr[i].isCheck){
						
						uni.showToast({
							icon:'none',
							title:'请选择'+this.specTipsArr[i].name
						})
						return false;
					}
				}
					this.openSpec = false
				// 根据type调用购物车或立即购买
				this.confirmType == 1 ? this.addToCart() : this.buyProduct()
				// console.log('提交成功',this.confirmType)
				
			},
			
			//加入购物车
			addToCart(){
				// console.log(this.selectGoods)
				this.$dyrequest({
					url:'/CartSales/addCart',
					method:'POST',
					data:this.selectGoods
				}).then(res=>{
					if(res.data.code == 0){
						this.$store.commit('ADD_CART',true)
						this.$store.dispatch('getCartNum',{id:this.shopId}).then(()=>{
							this.cartNum = this.$store.state.cartNum
							
						})
						uni.showToast({
							icon:'none',
							title:res.data.message
						})
					}else{
						uni.showToast({
							icon:'none',
							title:res.data.message
						})
					}
					
				})
			},
			//立即购买
			buyProduct(){
				
				this.$store.commit('SET_BUYPARAM',this.selectGoods)
				uni.navigateTo({
					url:'/pages/order/order?type=1'
						
				})
			},
			//增加减少步进器值时改变当前值，触发更新视图
			stepperChange(val){
				this.quantity= Number(val) //更改初始值，
				
				this.selectGoods.quantity = this.quantity
			},
			//图文详情/参数tabs
			changeTabs(idx){
				this.currentTabs =idx 
			},
			//选择规格提示文字
			skuText(sku){
				// console.log(sku)
				let text=''
				if(sku){ //如果有规格，显示默认选中的规格
					sku.map(item=>{
						text+=item+'/'
					})
					let selectTips = '已选择：'+text
					this.selectSkuText = selectTips.substr(0,selectTips.length-1)
					
				}else{
					//如果没有选中规格的话，提示请选择某某规格
					this.defaultSkuname.map(item=>{
						text+=item
					})
					let plzChoiceText = '请选择：'+text+'/'
					this.selectSkuText = plzChoiceText.substr(0,plzChoiceText.length-1)
				}
				
				
			},
			//领取优惠券弹窗
			 openPopup(){
				 if(this.goodsDiscount.length == 0){
						uni.showToast({
							icon:'none',
							title: '暂无可用优惠券'
						});
						return
				 }
			     this.$refs.popup.open()
			  },
			 
			 //领取优惠券
			 getYhq(activiId,discount_money,idx){
					let _this = this
			  
					this.$set(this.goodsDiscount[idx],'take',true)
					this.$dyrequest({
						url:'/Supplier/getCoupon',
						method:'POST',
						data:{
							couponId:activiId,
							id:_this.shopId,
							money:discount_money
						},
			  		
					}).then(res=>{
						uni.showToast({
							icon:'none',
							title: res.data.message
						});
					})
			  },
			//切换轮播图
			 handleSwiperChange(e){
				this.currentSwiper = e.target.current+1
			},
			 //关闭优惠券弹窗
			 closePopup(){
				this.$refs.popup.close()
			 },
			 //显示规格选项
			 showSpec(type){
			 	this.openSpec = true
				this.confirmType = type //获取确定按钮类型
				
				//每次重新点开规格选项时重新初始化步进器的值
				 this.quantity = this.selectSpecInfo.moq
				
			 },
			  //关闭规格选项
			 closeSpec(){
			 	this.openSpec = false
				
			 },
			 //图片懒加载
			 imageLoad(idx) {
			 	this.goodsDetail.goodsImg[idx].loaded = true
			 },
			 //图片懒加载
			 
		}
		
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.specScrollView{
		position:absolute;
		left: 2.5%;
		width:95%;
		top:120px;
		height:calc(100vh - 260px);
		transition:all .6s
	}
	body{
		overflow:scroll !important;
	}
	.detail_status_bar{
		z-index:999;
		position:fixed;
		top:0;
		width:100%;
		height: var(--status-bar-height);
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
	}
	.goodsDetail_wrap{
		width: 100vw;
		background: #f6f6f6;
	}
	.detail_box{
		padding-bottom:100px;
	}
	
	//优惠券
	.yhqbox{
		height: 290px;
		overflow: scroll;
		
	}
	.yhq_title{
		position:relative;
		width:100%;
		text-align:center;
		margin:10px 0 20px;
		font-size:14px;
		i{
			position:absolute;
			top:0;
			right:0;
		}
	}
	.yhq_item{
		position:relative;
		display:flex;
		width:100%;
		height:90px;
		background-size:cover !important;
		margin-bottom:10px;
		color:#fff;
		.takeimg{
				width: 40px;
			    height: 34px;
			    position: absolute;
			    right: 0;
		}
		.yhq_left{
			width:75%;
			display: flex;
			.yhq_left_two,.yhq_left_one{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				span:last-child{
					text-align: center;
				}
			}
			.yhq_left_one{
				width:50%;
				span:first-child{
					display: flex;
					align-items: center;
					font-size:2em;
					i{
						font-size:16px;
						margin-right:3px;
					}
				}
				span:last-child{
					transform: scale(.7);
				}
			}
			.yhq_left_two span{
					font-size:10px;
					// transform: scale(.7);
			}
		}
		.yhq_right{
			display:flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			span:last-child{
				display:block;
				width:40px;
				border-radius:20px;
				padding:3px 5px;
				margin-top:5px;
				text-align:center;
			}
			.usestyle{
				background:#fff;
				color:#F93232;
			}
			.takestyle{
				background:#FB5151;
				color:#fff;
			}
			.usestyle2{
				background:#fff;
				color:#F93232;
			}
			.takestyle2{
				background:#FD911F;
				color:#fff;
			}
		}
	}
</style>

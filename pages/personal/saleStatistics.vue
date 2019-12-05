<template>
	<view class="wrap salesChart_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="销售统计"
		 />
		 <view class="sc_tab">
			 <view class="tabs" @click="tabsAction(0)" :class="[currentTab== 0 ? 'active_tabs' : '']">业务员销售报表</view>
			 <view class="tabs" @click="tabsAction(1)" :class="[currentTab== 1 ? 'active_tabs' : '']">小店采购统计</view>
		 </view>
		 
		 
		 <!-- 业务员销售报表 -->
		 <view class="staffSalesChart" v-show="currentTab == 0">
			 <view class="selectByTime">
			 			<qstab
			 				 :tabs="tabs" 
			 				 @change="handleChange"
			 				 :current="currentidx"
			 				 animationMode="line1"
			 				 activeColor="#147AED"	
			 				 fontSize="24"
			 				 :width="tabwidth"
			 				 height="80"
			 				 animationLineWidth="50"
			 			>
			 			 </qstab>
			 </view>
				<!-- 日期选择 -->
				<view class="dateSelect">
							 <span class="dateTitle">日期</span>
							 <input type="text" 
								 class="dateInp"
								 disabled 
								 v-model="startTime" 
								 placeholder="开始时间"
							     @click="showTimepicker(1)">
							  <span class="dateSplit"></span>
							  <input type="text"
									class="dateInp"
									 disabled 
									 v-model="endTime" 
									 placeholder="结束时间"
							    @click="showTimepicker(2)">
							   <button type="primary" size="mini" class="filterBtn" @click="filterDate">筛选</button>
				</view>
				<view class="canvasView">
							<canvas canvas-id="canvasColumn"
							 id="canvasColumn" 
							 class="charts" disable-scroll=true  @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
				</view>
				<view class='tips'>
							 报表说明：默认显示近15天的业务员销售报表。
				</view>
				<view class="total">
							 总计：<span>￥{{totalPrice}}</span>
				</view>
				<!-- 日期选择器 -->
				<qspicker
					type="date"
					ref="picker"
					:dataSet="dateSet"
					@confirm="picked($event)"
				>
				</qspicker>
		 </view>
		<!-- 小店采购统计 -->
		<view class="shopSales" v-show="currentTab == 1">
			<view class="shoplist_content_item"
				@click="gotoShopDetail(shopDefaultInfo.id)"
			>
				<view class="shoplist_content_item_top">
					<view class="top_left">
						
							<image v-if="shopDefaultInfo.head_sculpture" class="top_img" :src="domain2+shopDefaultInfo .head_sculpture" mode="aspectFill"></image>
							<image v-else class="top_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
							
							<view class="top_info">
								<span>{{shopDefaultInfo.shopname}}</span>
								<span @click.stop="callsupplier(shopDefaultInfo.phone)"><i class="iconfont icon-dianhua"></i>{{shopDefaultInfo.phone}}</span>
							</view>
					</view>
					<view class="top_right_type">
						小店类型：{{shopDefaultInfo.business_scope}}
						<span @click.stop="changeShop">更换小店</span>
					</view>
				</view>
				<view class="shoplist_content_item_bottom">
					<i class="iconfont icon-weizhi"></i>
					<p>{{shopDefaultInfo.address}}</p>
				</view>
			</view>
			
			<!-- 日期选择 -->
			<view class="dateSelect">
					 <span class="dateTitle">小店采购明细</span>
					 <input type="text" 
						 class="dateInp"
						 disabled 
						 v-model="shopStime" 
						 placeholder="开始时间"
						 @click="showTimepicker2(1)">
					  <span class="dateSplit"></span>
					  <input type="text"
							 class="dateInp"
							 disabled 
							 v-model="shopEtime" 
							 placeholder="结束时间"
					@click="showTimepicker2(2)">
				   <button type="primary" size="mini" class="filterBtn" @click="filterDate2">筛选</button>
			</view>
			
			<!-- 采购列表头部 -->
			<view class="caigou_head">
				<ul>
					<li class="col-1">排名</li>
					<li class="col-2">商品</li>
					<li class="col-6 totalMoney">金额(元)</li>
					<li class="col-2 nums">数量</li>
				</ul> 
			</view>
			<!-- 采购列表 -->
			<scroll-view class="caigou_list" @scroll="scroll" scroll-y >
					
						<view class="caigou_list_wrap">
							
							 <view class="caigou_listItem" v-for="(item,idx) of shopOrder" :key="idx"> 
								<view class="idxnum col-1">{{idx+1}}</view>
								 <view  class="col-2">
									 <view class="caigou_img_box">
										 <image class="image caigou_img" :class="{lazy:!item.show}" :data-index="idx" @load="imageLoad" :src="item.show ? item.img:''" />
										 <view class="image placeholder loadimg caigouLoadImg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>
									 </view>
										
								 </view>
								 <view  class="col-6 caigou_progress">
									 <view class="name_fee"><span>{{item.product_name}}</span><span>{{item.totalfee}}</span></view>
									 <view class="progress_view">
										
										 <view class="progress" :style="{width:item.perPrice+'%'}"></view>
										
									 </view>
								 </view>
								 <view  class="col-2 nums">{{item.amount}}</view>
							 </view>
							 <view class="emptyTips" v-if="shopOrder.length == 0">该小店暂无采购记录 :(</view>
						</view>
			</scroll-view>
			
			<view class="total shopTotal">
				<view class="totalLeft">
					采购总数量:{{shopBuynums}}
				</view>		
				<view class="totalRight">
					 总计：<span>￥{{shopTotalPrice}}</span>
				</view>
			</view>
			<!-- 日期选择器 -->
			<qspicker
				type="date"
				ref="picker2"
				:dataSet="dateSet2"
				@confirm="picked2($event)"
			>
			</qspicker>
		</view>
		
		<popup ref="popup"
			 type="bottom" class="home_popup" 
			:popstyle="{width:'100%',height:'400px',overflow:'hidden',padding:'0'}"
			>
					<shopList @selectShop="getShopId"></shopList>
		 </popup>
		 
	</view>
</template>


<script>
	var _self;
	var canvaColumn=null;
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	import qstab from '@/components/QS-tabs/QS-tabs.vue'
	import uCharts from '@/components/u-charts/u-charts.js';
	import qspicker from "@/components/QuShe-picker/QuShe-picker.vue";
	import shopList from "@/components/shopList.vue"
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	export default {
		 components: {customnav,qstab,qspicker,shopList,popup},
		data() {
			return {
				tabwidth:0,
				tabs:['日报表','月报表','年报表'],
				currentidx:0, //报表切换
				currentTab:0,//业务员小店切换
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				startTime:'',//业务员统计开始时间
				endTime:'',
				shopStime:'',//小店统计开始时间
				shopEtime:'',
				shopId:'',
				type:'',
				domain:this.$store.state.domain,
				shopDefaultInfo:'', //小店信息
				shopOrder:[],
				totalPrice:0,
				shopTotalPrice:0,
				shopBuynums:0,
				dateSet:{ //日期选择器初始数据设置
					"startYear":2019,
					"endYear":2019,
					"dateMode":3
				}, 
				dateSet2:{ //日期选择器初始数据设置
					"startYear":2019,
					"endYear":2019,
					"dateMode":3
				}, 
				dateType:1,//判断开始还是结束时间
				dateType2:1,//小店采购判断开始还是结束时间
				serverData:{ //图表数据
					"categories":[],
					"series":[{"name":'',"data":[]}]
				},
				noData:false,
				loadonce:false,
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
			};
		},
		onLoad() {
			//tabs宽度
			this.tabwidth = uni.getSystemInfoSync().windowWidth / 5;
			
			let _self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
			this.formatTime(new Date())
			
			
		},
		
		methods:{
			gotoShopDetail(id){
				uni.navigateTo({
				    url: '/pages/shopHomePage/homeindex?id='+id
				});
					 this.$store.commit('SET_CURRENINDEX',0)
			},
			getShopId(id){
				this.$refs.popup.close()
				this.shopId = id
				this.getShopData()
			},
			//图片懒加载
			scroll(){
				this.load()
			},
			load() {
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.lazy').boundingClientRect((images) => {
					console.log(images)
					images.forEach((image, index) => {
						if (image.top <= this.windowHeight) {
							this.shopOrder[image.dataset.index].show = true;
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.shopOrder[e.target.dataset.index].loaded = true
			},
			//图片懒加载
			
			//获取数据 - 业务员销售报表
			getServerData(){
						this.$dyrequest({
							url:'/MyorderSales/reportManagement'+this.type,
							method:'POST',
							data:{
								startTime:this.startTime,
								endTime:this.endTime
							}
						}).then(res=>{
							let data = res.data.data.charts
							
							//获取用户可选开始时间 默认为注册时间
							this.dateSet.startYear = parseFloat(res.data.data.createTime.split('-')[0])
							this.totalPrice = res.data.data.all
							//初始化数组
							this.serverData.categories = []
							this.serverData.series[0].data = []
							//取到时间和数据
							for(let i in data){
								this.serverData.categories.push(i.replace(/-/g,"/"))
								this.serverData.series[0].data.push(data[i])
							}
							
							
							//将取到的数据填充为所需格式
							let Column={categories:[],series:[]};
							Column.categories=this.serverData.categories;
							Column.series=this.serverData.series;
							
							// if(Column.categories.length < 9){
							// 	let fillData = 9 - Column.categories.length
								
							// }
							this.showColumn("canvasColumn",Column);
						})
						
					
				
			},
			//获取数据 - 小店采购统计
			getShopData(){
				this.$dyrequest({
					url:'/MyorderSales/statistics',
					method:'POST',
					data:{
						id:this.shopId,
						startTime:this.shopStime,
						endTime:this.shopEtime
					}
				}).then(res=>{
					
					 let dlist = res.data.data
					 
					 //小店总计采购量总计
					 this.shopBuynums = dlist.purchaseDetail.amount
					 this.shopTotalPrice = dlist.purchaseDetail.amountFee
					 //获取用户可选开始时间 默认为注册时间
					 this.dateSet2.startYear = parseFloat(dlist.createTime.split('-')[0])
					 
					 this.shopDefaultInfo = dlist.dutyShop[0]
					 this.shopOrder=[]
					 this.show = false
					 dlist.purchaseDetail.orderDetail.map((item,idx)=>{
							 this.$set(item,'show',false)
							 this.$set(item,'loaded',false)
							 if(item.totalfee < 0){
								  this.$set(item,'perPrice',0)
							 }else{
								  this.$set(item,'perPrice',item.totalfee /  this.shopTotalPrice * 100)
								 
							 }
							
							 item.img = this.domain + item.img
							 this.shopOrder.push(item)
					  })
					
					 this.windowHeight = uni.getSystemInfoSync().windowHeight
					 
					 if (!this.show) {
					 	this.show = true
					 	
					 	setTimeout(() => {
					 		this.load()
					 	}, 100)
					 }
					 //图片懒加载
					 
				})
			},
			
			//更换小店，选择小店
			changeShop(){
				this.$refs.popup.open()
			},
			
			//选择日期后 - 业务员销售报表
			picked(e){
				console.log(e)
				let y = e.data.split('-')[0]
				let m = e.data.split('-')[1]
					m = m < 10 ? '0'+m :m;
				let d =  e.data.split('-')[2];
				let selectDate=''
				
				//选择后输入框显示格式化
				switch(this.currentidx){
					case 0:
						//日报表显示年月日
						
						selectDate = y+'-'+m+'-'+d;
						break;
					case 1:
						//月报表显示年月
						selectDate = y+'-'+m;
						break;
					case 2:
						//年报表显示年
						selectDate = y;
						break;
				}
				
				
				//选择后根据时间种类赋值开始或结束时间
				this.dateType == 1 ? this.startTime=selectDate : this.endTime=selectDate;
				
				//判断规则
				if(this.startTime &&  this.endTime){
					if(this.startTime > this.endTime){
						uni.showToast({
							icon:'none',
							title:'开始时间不能大于结束时间'
						})
						this.dateType == 1 ? this.startTime='' : this.endTime='';
					}
				}
				
			},
			//选择日期后 - 小店销售统计报表
			picked2(e){
				let y = e.data.split('-')[0]
				let m = e.data.split('-')[1]
					m = m < 10 ? '0'+m :m;
				let d =  e.data.split('-')[2];
				let selectDate = y+'-'+m+'-'+d;
				
				//选择后根据时间种类赋值开始或结束时间
				this.dateType2 == 1 ? this.shopStime=selectDate : this.shopEtime=selectDate;
				//判断规则
				if(this.shopStime &&  this.shopEtime){
					if(this.shopStime > this.shopEtime){
						uni.showToast({
							icon:'none',
							title:'开始时间不能大于结束时间'
						})
						this.dateType2 == 1 ? this.shopStime='' : this.shopEtime='';
					}
				}
			},
		
			//开始筛选-业务员销售报表
			filterDate(){
				if(this.startTime==''){
					uni.showToast({
						icon:'none',
						title:'请选择开始时间'
					})
					return
				}
				if(this.endTime==''){
					uni.showToast({
						icon:'none',
						title:'请选择结束时间'
					})
					return
				}
				this.getServerData() 
				
			},
			//开始筛选-小店采购统计
			filterDate2(){
				if(this.shopStime==''){
					uni.showToast({
						icon:'none',
						title:'请选择开始时间'
					})
					return
				}
				if(this.shopEtime==''){
					uni.showToast({
						icon:'none',
						title:'请选择结束时间'
					})
					return
				}
				this.getShopData()
			},
		
			//打开日期选择器-业务员销售报表
			showTimepicker(type){
				this.$refs.picker.show()
				this.dateType = type
			},
			//打开日期选择器-小店采购统计报表
			showTimepicker2(type){
				this.$refs.picker2.show()
				this.dateType2 = type
			},
		
			//选择日期后格式化日期，在input显示
			formatTime(date,type){
				let nowDate = date;
			   
				let year = nowDate.getFullYear();
				let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
						: nowDate.getMonth() + 1;
				let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
				let hour  = nowDate.getHours() < 10 ? "0" + nowDate.getHours()+':00' : nowDate.getHours();
				
				this.monthVal = year+"-"+month;
				
				this.dateSet.endYear = parseFloat(year)
				this.dateSet2.endYear = parseFloat(year)
			},
			
			//选项卡切换 日月年获取对应数据，
			handleChange(idx){
				this.currentidx = idx
				this.startTime = ''
				this.endTime = ''
				//type为动态修改请求接口地址
				switch(idx){
						case 1 : 
								this.type = 'Month';
								//日期选择器，可选年月日，1为只能选年，以此类推
								this.dateSet.dateMode = 2
								
						break;
						
						case 2 : this.type = 'Year';
								 this.dateSet.dateMode = 1
						break;
						
						default : 
								this.type = ''
								this.dateSet.dateMode = 3
								
				}
				
				this.getServerData()
			},
		
			//业务员销售报表和小店采购统计切换
			tabsAction(idx){
				this.currentTab = idx
				if(!this.loadonce){
					idx == 1 && this.getShopData()
					this.loadonce = true
				}
				
			},

			//配置图表信息 -业务员销售报表
			showColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:this,
					canvasId: canvasId,
					type: 'column',
					legend:{show:false},
					fontSize:10,
					background:'#FFFFFF',
					pixelRatio:this.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					enableScroll: true,
					xAxis: {
						type:'grid',
						disableGrid:true,
						itemCount:9,
						labelCount:3,
						scrollShow:true,//新增是否显示滚动条，默认false
						scrollAlign:'right',//滚动条初始位置
						axisLineColor:'#f6f6f6'
					},
					yAxis: {
						axisLine:true,
						showTitle:true,
						title:'金额(元)',
						gridColor:'#f6f6f6',
						axisLineColor:'#f6f6f6',
						format:(val)=>{return val.toFixed(2)}
					},
					dataLabel: true,
					width: this.cWidth*this.pixelRatio,
					height: 300,
					padding:[30,10,30,10],
					extra: {
						column: {
							type:'group',
							width: this.cWidth*this.pixelRatio*0.45 / 9 
						},
						tooltip:{
							lableColor:'red'
						}
					  }
				});
				
			},
			
			//配置可滚动图表 - 业务员销售报表
			touchColumn(e){
				canvaColumn.scrollStart(e);
				
			},
			moveColumn(e) {
				
				canvaColumn.scroll(e);
			},
			touchEndColumn(e){
				canvaColumn.scrollEnd(e);
			
				canvaColumn.showToolTip(e, {
				
					format: function (item, category) {
						item.color = '#EE453C'
							console.log(item)
						
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + item.data.value +'元 '
						}else{
							
							return category + ' ' + item.name + item.data +'元 '
						}
					}
				});
			},
			
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
	.qiun-padding{padding:2%; width:96%;}
	.qiun-wrap{display:flex; flex-wrap:wrap;}
	.qiun-rows{display:flex; flex-direction:row !important;}
	.qiun-columns{display:flex; flex-direction:column !important;}
	.qiun-common-mt{margin-top:10upx;}
	.qiun-bg-white{background:#FFFFFF;}
	.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
	.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts{width: 100%; height:300px;background-color: #FFFFFF;}
	.caigou_list{
		width:100%;
		height:calc(100vh - 335px - var(--status-bar-height))
	}
	.uni-popup__wrapper-box{
		padding:0;
	}
	.tips{
		color:#ccc;
		padding:10px;
	}
	.total{
		position:fixed;
		bottom:0;
		display: flex;
		justify-content: flex-end;
		padding:10px;
		width:100%;
		background:#fff;
		font-size:16px;
		span{
			font-size:18px;
			color:#EE453C;
			font-weight: 600;
		}
	}
	.dateSelect{
		position:relative;
		margin-top:1rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding:10px;
		background:#fff;
		.dateTitle{
			position:absolute;
			left:10px;
			color:#147AED
		}
		.dateSplit{
			height:1px;
			width:8px;
			background:#f5f5f5;
			margin:0 5px;
		}
		.dateInp{
			width:20%;
			height:24px;
			border:1px solid #eee;
			font-size:12px;
			border-radius:20px;
			text-align: center;
		}
		.filterBtn{
			line-height:2;
			font-size:12px;
			margin-left:10px;
			border-radius:20px !important;
		}
		
	}
	.sc_tab{
		display: flex;
		justify-content: center;
		
		padding:10px 0;
		.tabs{
			width:35%;
			background:#fff;
			text-align: center;
			padding:8px 0;
			font-size:14px;
			color:#888888
		}
		.tabs:first-child{
			border-radius: 20px 0 0 20px;
		}
		.tabs:last-child{
			border-radius: 0 20px 20px 0;
		}
		.active_tabs{
			background:#147AED !important;
			color:#fff !important;
		}
	}
	
	
	// 小店列表
	.shoplist_content{
		padding:0 .5rem;
		box-sizing: border-box;
	}
	.shoplist_content_search{
		position:relative;
		padding:.5rem 1rem;
		.searchbkg{
			position:absolute;
			left:0;
			top:0;
			width:100%;
			height:100%;
			opacity: 0;
			background:linear-gradient(to right,#21A5F9,#1A6FE8);
		}
		i{
			position:absolute;
			top: 15px;
			left: 33px;
			color:$color-1;
			font-size:1.5em;
		}
		input{
			border:1px solid #d2d2d2;
			border-radius: 20px;
			font-size:14px;
			padding-left:2.5rem;
			height:30px;
			transition:all .3s;
		}
	}
	.shoplist_content_item{
		padding:.5rem;
		background:#fff;
		border-radius: 4px;
		margin-bottom:10px;
	}
	.shoplist_content_item_top{
		
		display: flex;
		justify-content: space-between;
		
	}
	.top_left{
		display: flex;
	}
	.top_info{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left:.5rem;
		a{
			display:flex;
			color:#1D88E2;
			
		}
		&>span:first-child{
			font-size:14px;
			margin-bottom:5px;
		}
		&>span:last-child{
			display:flex;
			color:#1D88E2;
			i{
				vertical-align: bottom;
				margin-right:5px;
			}
		}
	}
	.top_img{
		width:50px;
		height:50px;
		border-radius: 4px;
	}
	.shoplist_content_item_bottom{
		display: flex;
		align-items: center;
		margin-top:.5rem;
		i{
		
			color:#44AE69;
			font-size:12px;
		}
		p{
			color:#888;
			padding-left:5px;
			@include longtext;
		}
	}
	.top_right_type{
		display: flex;
		flex-direction: column;
		justify-content: center;
		color:#888;
		span{
			background:#2A8BF9;
			border-radius:20px;
			color:#fff;
			padding:3px 0;
			text-align: center;
			margin-top:5px;
		}
	}
</style>

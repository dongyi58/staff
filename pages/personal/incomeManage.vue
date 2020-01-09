<template>
	<view class="wrap income_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="收入管理"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="income_header">
			 <view class="timePick" @click="showTimepicker">{{monthVal}} <i class="iconfont icon-icon-arrow-bottom2"></i></view>
			 <view class="shopReturn">
				 <span>推荐小店采购返点</span>
				 <h2><span>￥</span>{{recommendRefund}}</h2>
				 <span>推荐小店采购总额:{{recommendTotal}}</span>
			 </view>
		 </view>
		
		 <scroll-view scroll-y="true" class="income_list">
				<view class="income_list_item" 
				@click="gotoIncomeDetail(item.times,item.fee)"
				v-for="(item,idx) of incomeList" :key="idx">
					<ul >
						<li>{{item.times}}</li>
						<li>平台返点</li>
						<li>{{item.fee}} <i class="iconfont icon-you"></i></li>
					</ul>
					
				</view>
				<view class="emptyTips"  v-if="incomeList.length == 0">
					<span>{{parseFloat(monthVal.split('-')[1])}}月份没有收入哦 :(</span>
				</view>
				
		 </scroll-view>
		<qspicker
			type="date"
			ref="picker"
			:dataSet="dateSet"
			@confirm="picked($event)"
		>
			
		</qspicker>
		
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	import qspicker from "@/components/QuShe-picker/QuShe-picker.vue";
	export default {
		components:{customnav,qspicker},
		data() {
			return {
				incomeList:[],
				recommendTotal:'草拟吗',
				recommendRefund:0.00,
				monthVal:'',
				dateSet:{
					"startYear":2019,
					"endYear":2019,
					"dateMode":2
				}
			};
		},
		mounted() {
			
			this.formatTime(new Date())
			this.getIncome()
		},
		methods:{
			picked(e){
				
				let y = e.data.split('-')[0]
				let m = e.data.split('-')[1]
				    m = m < 10 ? '0'+m :m
				this.monthVal = y+'-'+m
				this.getIncome()
			},
			showTimepicker(){
				this.$refs.picker.show()
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
	
				},
			//收入详情
			gotoIncomeDetail(time,fee){
				uni.navigateTo({
					url:'/pages/personal/incomeDetail?time='+time+'&fee='+fee
				})
			},
			getIncome(){
				 this.$dyrequest({
					 url:'/MyorderSales/revenueManagement',
					 method:'POST',
					 data:{
						 time:this.monthVal
					 }
				 }).then(res=>{
					
					
					this.recommendTotal = res.data.data.recommendAmount
					this.recommendRefund = res.data.data.recommendReturn.toFixed(2)
					
					res.data.data.data.map(item=>{
						this.$set(item,'fee',Number(item.fee).toFixed(2))
						this.incomeList.push(item)
					})
					this.dateSet.startYear = parseFloat(res.data.data.salesCreateTime.split('-')[0])
				 })
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.income_list{
		width:100%;
		height:calc(100vh - 191px)
	}
	//收入管理
	 .income_header{
		
		 background:#fff;
		 .timePick{
			 display: flex;
			 justify-content: space-between;
			 align-items: center;
			 padding:10px;
			 font-weight: 600;
			 color:#383838;
			 font-size:14px;
			 i{
				 color:#999;
				 font-weight: normal;
			 }
		 }
		 .shopReturn{
			 display: flex;
			 flex-direction: column;
			 justify-content: center;
			 align-items: center;
			 padding:10px 0;
			 color:#999;
			 border-top:1px solid #f8f8f8;
			 h2{
				 color:#EE453C;
				 font-size:20px;
				 font-weight: 500;
				 margin:10px 0;
				 span{
					 font-size:14px
				 }
			 }
		 }
	 }
	
	.income_list{
		 padding:0 10px;
		 box-sizing:border-box;
		  background:#fff;
		  margin-top:10px;
		 .income_list_item{
			border-bottom:1px solid #f8f8f8;
			 padding:15px 0;
			 ul{
				 display: flex;
				 justify-content: space-between;
				 font-size:14px;
				
				 li:first-child{
					 color:#999;
				 }
				 li:last-child{
					 color:#EE453C;
					 display: flex;
					 align-items: center;
					 i{
						 color:#999;
					 }
				 }
			 }
		 }
	}
	
</style>

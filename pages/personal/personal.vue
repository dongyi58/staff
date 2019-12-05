<template>
	<view class="personal_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="个人中心"
		  placeholder="在结果中搜索"
		 :cancletext="false"
		 :focus="false"
		 />
		<!-- <view class="content_wrap">
			 <view class="personal_header">
			 			 <image v-if="staffInfo.img" class="personal_header_img" :src="staffInfo.img" mode="aspectFill"></image>
						 <image v-else class="personal_header_img" src="../../static/images/default-avatar.jpeg" mode="aspectFill"></image>
			 			 <span>{{staffInfo.name}}</span>
			 </view>
			 <view class="personal_content">
			 			<view class="pc_item pc_one">
			 				<ul>
			 					<li>
			 						<navigator url="/pages/personal/shopManage" class="pc_nav">
			 							<view class="iconbox iconbox_one">
			 								<i class="iconfont icon-dianpu1"></i>
			 							</view>
			 							<span>小店管理</span>
			 						</navigator>
			 					</li>
			 					<li>
			 						<navigator url="/pages/personal/saleStatistics" class="pc_nav pc_nav2">
			 							<view class="iconbox iconbox_two">
			 								<i class="iconfont icon-shuju"></i>
			 							</view>
			 							<span>销售统计</span>
			 						</navigator>
			 					</li>
			 					<li>
			 						<navigator url="/pages/personal/incomeManage" class="pc_nav">
			 							<view class="iconbox iconbox_three">
			 								<i class="iconfont icon-tichengjiangjinhesuan"></i>
			 							</view>
			 							<span>收入管理</span>
			 						</navigator>
			 					</li>
			 				</ul>
			 			</view>
			 			<view class="pc_item">
			 				<uni-list>
			 				    <uni-list-item @click="goAccount" title="账户与安全" :show-extra-icon="true" iconclass="icon-zhanghao personal_icon1" ></uni-list-item>
			 					<uni-list-item @click="goStaffFile" title="业务员档案" :show-extra-icon="true" iconclass="icon-renyuandanganguanli personal_icon2" ></uni-list-item>
			 					<uni-list-item @click="clearCache" title="清理缓存" :badge-text="cacheSize+' M'"  :show-badge="true"  :show-extra-icon="true"  iconclass="icon-qinglihuancun personal_icon3" ></uni-list-item>
			 				</uni-list>
			 			</view>
			 			<view class="pc_item">
			 				<uni-list>
			 				    <uni-list-item  @click="feedBack" title="功能反馈" :show-extra-icon="true"  iconclass="icon-shequneiicon- personal_icon4" ></uni-list-item>
			 					<uni-list-item title="关于店店店 1.1" :show-extra-icon="true"  iconclass="icon-guanyu3 personal_icon5" ></uni-list-item>
			 					<uni-list-item @click="logoutAction" title="退出"  :show-extra-icon="true"  iconclass="icon-tuichu personal_icon6" ></uni-list-item>
			 				</uni-list>
			 			</view>
			 </view>
		 </view>
		<popup ref="popup" type="bottom" class="home_popup" :popstyle="{display:'flex',width:'100%',height:'100px',overflow:'hidden',alignItems:'center'}">
					<view class="logout_box">
						<button type="warn" @click="logout">退出当前账号</button>
					</view>
		 </popup>
		 <popup ref="popup2" type="center" class="home_popup" :popstyle="{display:'flex',width:'90%',maxHeight:'350px',overflow:'hidden',alignItems:'flex-start'}">
		 			<view class="feedBack">
						<h4>功能反馈 <i class="iconfont icon-ziyuan" @click="closeFeedBack"></i> </h4>
		 				<textarea class="fb_textarea"  v-model="feedtext" placeholder="非常感谢你的建议" />
						<button class="submit_feedback" @click="sendFeedBack">提交反馈</button>
		 			</view>
		  </popup> -->
		  <view class="skuWrap">
			  
			  <view class="sku_parent" v-for="(skuParent,idx) of skudata.view" :key="idx">
				  <h1>{{skuParent.skuname}}</h1> 
				  <ul class="skuChild">
				  	<li
					  @click="skuChildClick(idx,scidx,skuChild)"
					  v-for="(skuChild,scidx) of skuParent.item" :key="scidx"
					  :class="[skuChild.isShow ? '' : 'disabledSku',selectIdx[idx] == scidx ? 'activeSku' : '']"
					  >
					 {{skuChild.value}}</li>
				  </ul>
			  </view>
			  
		  </view>
	</view>
	
</template>





	
<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		 components: {uniList,uniListItem,customnav,popup},
		data() {
			return {
				cacheSize:0,
				feedtext:'',
				childIdx:-1,
				parentIdx:-1,
				
				
				skudata:{
						"view":[{
								"skuname":'颜色',
								"item":[
									{
										value:"白色"
									},
									{
										value:"蓝色"
									},
									{
										value:"黑色"
									}
								]
							}
							,{
								"skuname":'尺寸',
								"item":[
									{
										value:"35"
									},
									{
										value:"36"
									},
									{
										value:"37"
									}
								]
							}
						],
						"checkSku":[
							{"sku":"蓝色,35","stock":0,"is_use":1},
							{"sku":"蓝色,36","stock":0,"is_use":1},
							{"sku":"蓝色,37","stock":2,"is_use":1},
							{"sku":"白色,35","stock":0,"is_use":1},
							{"sku":"白色,36","stock":5,"is_use":1},
							{"sku":"白色,37","stock":5,"is_use":1},
							{"sku":"黑色,35","stock":5,"is_use":1},
							{"sku":"黑色,36","stock":0,"is_use":1},
							{"sku":"黑色,37","stock":5,"is_use":1}
						 ],
					},
					selectIdx:[],
					selectArr:[],
					skuInfo:[],
					initSku:'',
					init:true
			};
		},
		computed:{
			staffInfo(){
				return this.$store.state.staffInfo
			}
		},
		onLoad() {
			
			for (var i in this.skudata.checkSku) {
				this.skuInfo[this.skudata.checkSku[i].sku] = this.skudata.checkSku[i]
				
			}
			console.log(this.skuInfo)
			for (var j in this.skudata.checkSku){
				
				if(this.skudata.checkSku[j].stock != 0 && this.skudata.checkSku[j].is_use != 0){
					this.initSku = this.skudata.checkSku[j].sku
					break
				}
			}
			
			for (var k in this.skudata.view){
				this.skudata.view[k].item.map(vitem=>{
						this.$set(vitem,'isShow',true)
				})
				
			}
			let initArr = this.initSku.split(',')
			
			
			this.checkIsShow(initArr)	
				
			this.cacheSize = uni.getStorageInfoSync().currentSize;
		
		},
		methods:{
			
			skuChildClick(pidx,cidx,item){
				if(cidx != this.selectIdx[pidx]){
					this.$set(this.selectIdx,pidx,cidx)
					this.$set(this.selectArr,pidx,item.value)
				}else{
					this.$set(this.selectIdx,pidx,-1)
					this.$set(this.selectArr,pidx,'')
				}
					// console.log(this.selectIdx,this.selectArr)
					this.checkIsShow()
			},
			
			checkIsShow(initArr){
					let result=[]
					console.log(this.selectArr)
					for (var i in this.skudata.view) {
						
					   result[i] = this.selectArr[i] ? this.selectArr[i] : '';
						
					}
					this.skudata.view.map((parentItem,idx)=>{
							let clickVal = result[idx]
							
							parentItem.item.map((childItem,childIdx)=>{
								
								if(this.init){
									
									if(initArr[idx] == childItem.value){
										this.selectIdx[idx] = childIdx
									}
									
									
									
								}else{
									result[idx] = childItem.value
									this.$set(childItem,'isShow',this.checkStock(result))
									
								}
								 
							})
							result[idx] = clickVal
					})
					this.init =false
			},
			checkStock(result){
				// console.log(result)
				for (var i in result) {
				    if (result[i] == '') {
				        return true; //如果数组里有为空的值，那直接返回true
				    }
				}
					console.log(result)
				 return this.skuInfo[result].stock == 0 ? false : true;
			},
			
			
			
			
			
			
			sendFeedBack(){
				console.log(this.feedtext)
				uni.showToast({
					icon:'none',
					title:'感谢您的反馈'
				})
				setTimeout(()=>{
					 this.$refs.popup2.close()
				},1000)
			},
			feedBack(){
				  this.$refs.popup2.open()
			},
			closeFeedBack(){
				this.$refs.popup2.close()
			},
			logoutAction(){
				  this.$refs.popup.open()
			},
			logout(){
				uni.removeStorageSync('token');
				uni.removeStorageSync('phone');
				uni.navigateTo({
					url:'/pages/login/login'
				})

			},
			goAccount(){
				uni.navigateTo({
					url:'/pages/personal/account/account'
				})
			},
			goStaffFile(){
				uni.navigateTo({
					url:'/pages/personal/staffFile'
				})
			},
			clearCache(){
				uni.clearStorageSync();
				
				uni.showToast({
					icon:'none',
					title:'成功清理'+this.cacheSize +'M缓存'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	//个人中心
	.feedBack h4{
		position:relative;
		text-align: center;
		padding:5px 0;
		font-size:14px;
		i{
			position: absolute;
			right:0;
		}
	}
	.submit_feedback{
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
		color:#fff;
		margin-top:10px;
		font-size:12px;
		
	}
	.fb_textarea{
		border:1px solid #f8f8f8;
		border-radius: 4px;
		padding:5px;
		font-size:12px;
	}
	.content_wrap{
		position:relative
	}
	.logout_box{
		flex:1
	}
	.home_popup .uni-popup__wrapper-box{
		display: flex;
		align-items: center;
		height:100px;
	}
	.personal_header{
		height:150px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
		color:#fff;
		.personal_header_img{
			width:60px;
			height:60px;
			border-radius: 50%;
			border:2px solid #85c9ff;
		}
		span{
			font-size:32rpx;
			padding:10rpx 0 ;
		}
	}
	.personal_content{
		position:absolute;
		top:100px;
		width:100vw;
		padding:10px;
		.pc_item{
			border-radius: 5px;
			background:#fff;
			padding:10px;	
			margin-bottom:10px;
			color:#545454
		}
		.pc_one{
			ul{
				display:flex;
				
			}
			li{
				flex:1 1 33%;
				.pc_nav{
					position:relative;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.iconbox{
						width:45px;
						height:45px;
						text-align:center;
						line-height: 45px;
						border-radius: 50%;
						i{
							font-size:2em;
							color:#fff;
						};
					}
					span{
						font-size:28rpx;
						margin-top:5px;
						font-weight: 550;
					}
				}
			}
		
		}
	}
	.iconbox_one{
		background:#FFAE00
	}
	.iconbox_two{
		background:#FD5E5A
	}
	.iconbox_three{
		background:#46A9FD
	}
	.pc_nav2::after{
		content:'';
		position:absolute;
		top:10px;
		left:0;
		width:1px;
		height:70%;
		background:#eee ;
	}
	.pc_nav2::before{
		content:'';
		position:absolute;
		top:10px;
		right:0;
		width:1px;
		height:70%;
		background:#eee ;
	}
	
</style>

<template>
	<view class="personal_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="false" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="个人中心"
		  placeholder="在结果中搜索"
		 :cancletext="false"
		 :focus="false"
		 />
		<view class="content_wrap">
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
		 <popup ref="popup2" type="center" class="feed_popup" :popstyle="{display:'flex',width:'90%',height:'250px',overflow:'hidden'}">
		 			<view class="feedBack">
						<h4>功能反馈 <i class="iconfont icon-ziyuan" @click="closeFeedBack"></i> </h4>
		 				<textarea class="fb_textarea"  v-model="feedtext" placeholder="非常感谢你的建议" />
						<button class="submit_feedback" @click="sendFeedBack">提交反馈</button>
		 			</view>
		  </popup>
		 
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
			
			};
		},
		computed:{
			staffInfo(){
				return this.$store.state.staffInfo
			}
		},
		onLoad() {
			
				
			this.cacheSize = uni.getStorageInfoSync().currentSize;
		
		},
		methods:{
			
			
			
			
			
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
	.feedBack{
		width:90%;
		overflow: hidden;
	}
	.feedBack h4{
		position:relative;
		text-align: center;
		padding:5px 0;
		font-size:14px;
		margin-bottom:10px;
		i{
			position: absolute;
			top:5px;
			right:0;
		}
	}
	.submit_feedback{
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
		color:#fff;
		margin-top:20px;
		font-size:12px;
		
	}
	.fb_textarea{
		width:100%;
		height:100px;
		border:1px solid #f8f8f8;
		border-radius: 4px;
		padding:5px;
		font-size:12px;
		box-sizing: border-box;
	}
	.content_wrap{
		position:relative
	}
	.logout_box{
		flex:1
	}
	.feed_popup .uni-popup__wrapper-box{
		display: flex;
		justify-content:center;
		width:90%;
		height:250px;
		overflow: hidden !important;
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

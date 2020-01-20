<template>
	<view class="wrap login-wrap">
	
	<view class='loginbar'>
			<image src="../../static/images/dlogo.png" class="login-logo"></image>
			<view class="version-view">业务员版APP</view>
			<view class="login-inpgroup">
				<view class="login-item"><i class="iconfont icon-user"></i><input  type="text" v-model="phone" placeholder="请输入账号"></view>
				<view class="login-item"><i class="iconfont icon-mima"></i><input type="password" v-model="psw" placeholder="请输入密码"></view>
			</view>
			<view class='login-btn'><button @click="login" :disabled="disabled" :class="{'disableLogin':disabled}">登录</button></view>
			<view class="forget-psw" @click="goFpsw">忘记密码？</view>
		</view>
		
		
		<view class='bottom-contact'>
			<view class="icp">
				<view>2018 ddddian.com版权所有 店店店商城</view>
				<view>ICP证:属ICP备18022554号-1</view>
			</view>
		</view>
		<view class="callService" @click="callsupplier">
			<span>
				<i class="iconfont icon-dianhua1"></i>
				客服
			</span>
		</view>
		<view class="popup1" v-show="show1">
			<view class="agbox box1">
				<h1>服务协议和隐私政策</h1>
				<p>请你务必阅读用户协议和隐私政策，充分理解用户协议和隐私政策。你可以阅读<span class="check" @click="yhxy">《用户协议》</span>和 <span class="check" @click="yszc">《隐私政策》</span>阅读后请点击同意，开始接收服务。</p>
				<view class="actionBtn">
					<button class="no" @click="noaction">暂不使用</button>
					<button class="yes" @click="yesaction">同意</button>
				</view>
			</view>
		</view>
	<!-- 	<view class="popup1 popup" v-show="show2">
			<view class="agbox box2">
				<h1>服务协议和隐私政策</h1>
				<view>
					<p>本软件尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策。您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本软件服务使用协议不可分割的一部分。</p>
					<span>1.适用范围</span>
					<p>a)在您使用本软件网络服务，本软件自动接收并记录的您的手机上的信息，包括但不限于您的健康数据、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；</p>
					<span>2.信息的使用</span>
					<p>a)在获得您的数据之后，本软件会将其上传至服务器，以生成您的排行榜数据，以便您能够更好地使用服务。</p>
					<span>3.信息披露</span>
					<p>a)本软件不会将您的信息披露给不受信任的第三方。<br> b)根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；<br>c)如您出现违反中国有关法律、法规或者相关规则的情况，需要向第三方披露；</p>
				</view>
				<view class="actionBtn">
					<button class="yes">我已了解服务协议</button>
				</view>
			</view>
		</view> -->
		<view class="overlay" v-show="show1"></view>
	</view>
</template>

<script>
//popup弹出层
	export default {
		data() {
			return {
				phone:'',//18048911384
				psw:'',
				disabled:true,
				service:'028-83419849',
				agreement:'',
				show1:false,
				show2:false
			}
		},
		watch:{
			phone(n,o){
				
				n != '' && this.psw != '' ? this.disabled = false : this.disabled = true
			},
			psw(n,o){
				n != '' && this.phone != '' ? this.disabled = false : this.disabled = true
			},
		},
		mounted() {
			//如果存在token，保持登录状态
			if(uni.getStorageSync("token")){
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			}
			if(!uni.getStorageSync("agreement")){
				this.show1=true
			}else{
				this.show1=false
			}
		},
		methods: {
			noaction(){
				  plus.runtime.quit();
			},
			yesaction(){
				this.show1=false
				uni.setStorageSync('agreement',true)
			},
			yszc(){
				uni.navigateTo({
					url:'/pages/yinsi/yinsi'
				})
			},
			yhxy(){
				uni.navigateTo({
					url:'/pages/yhxy/yhxy'
				})
			},
			goFpsw(){
				uni.navigateTo({
					url:'/pages/forgetPsw/forgetPsw'
				})
			},
			callsupplier(phonenum){
					uni.makePhoneCall({
					    phoneNumber:this.service  //仅为示例
					});
			},
			login(){
				
				uni.showLoading({
					title:'登录中..'
				})
				
				uni.request({
				    url:'http://dsales.ddddian.com/LoginSales/login', 
					method:'POST',
					data:{
						account:this.phone,
						password:this.psw
					},
					header: {
						'Content-type': 'application/x-www-form-urlencoded'
					},
				    success: (res) => {
						// console.log(res)
						if(res.data.flag == 0){
						   
						   uni.showToast({
							   icon:'none',
						       title: res.data.info,
						       duration: 2000
						   });
						  
					   }else{
						  
						    //存储token 和手机号
						    uni.setStorageSync('token',res.data.data.token)
							uni.setStorageSync('phone',this.phone)
							uni.showToast({
							    title: res.data.message,
							    duration: 2000
							});
							//跳转到首页
							uni.redirectTo({
							    url: '/pages/index/index'
							});
							
					   }
					   
				       
				    },
					fail(){
						uni.hideLoading();
						uni.showToast({
							icon:"none",
						    title:'请求超时',
						    duration: 2000
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.overlay{
		position:fixed;
		top:0;
		left:0;
		bottom:0;
		right:0;
		background:rgba(0, 0, 0, 0.43)
	}
	.check{
		color:#007AFF;
	}
	.popup1{
		width:80%;
		min-height:300px;
	}
	// .popup2{
	// 	width:80%;
	// 	max-height:500px;
	// 	.actionBtn{
	// 		button{
	// 			width:100% !important;
	// 			 background-color:#147AED !important;
	// 			 color:#fff !important;
	// 			 border-left: 0 !important;
	// 		}
	// 	}
	// }
	.agbox{
			z-index:99;
		    position: absolute;
			top:50%;
		    left: 50%;
			transform: translate3d(-50%,-50%,0);
		    overflow-x: hidden;
			-webkit-overflow-scrolling:touch;
			padding:10px;
			background:#fff;
			border-radius: 5px;
			width:80%;
			min-height:300px;
		h1{
			font-size:16px;
			text-align: center;
		}
		p{
			padding:10px 0;
		}
		.actionBtn{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			display: flex;
			border-top:1px solid #f5f5f5;
			button{
				width:50%;
				background-color:transparent;
				
			}
			.yes{
				border-left:1px solid #f5f5f5;
				color:#147AED
			}
			.no{
				color:#999;
			}
			.no:after{
				border:none;
			}
			.yes:after{
				border:0;
			}
		}
	}
	
	.disableLogin{
		opacity: .5;
	
	}
	//login
	.login-wrap{
		overflow:hidden;
		background:linear-gradient(#066CF9,#2080EB)
	}
	.loginbar{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width:80%;
		margin:20% auto 0 auto;
		.login-logo{
			width:220px;
			height:80px;
		}
		.version-view{
			font-size:1.5em;
			padding:20rpx 0;
			color:#fff;
		}
		.login-inpgroup{
			width:100%;
			margin-top:5%;
			.login-item{
				position:relative;
				i{
					position:absolute;
					top:8px;
					left:5px;
					color:#23A6F1;
					border-right:1px solid #eee;
					font-size:1.5em;
					padding:0 10px;
				}
				input{
					background:#fff;
					height:35px;
					border-radius:20px;
					margin-bottom:1rem;
					padding-left:120rpx;
					color:#555
				}
				
			}
		}
			.login-btn{
				width:100%;
				margin-top:10%;
				button{
					height:35px;
					line-height: 35px;
					border-radius:20px;
					color:$color-1;
					letter-spacing: 10px;
						transition:opacity .3s;
				}
			}
			.forget-psw{
				width:100%;
				text-align:right;
				margin-top:10px;
				padding:5px 0;
				text-decoration: underline;
				color:#fff;
			}
	}
	.bottom-contact{
		position:fixed;
		bottom:0;
		width:100%;
		.icp{
			text-align:center;
			color:#fff;
			view{
				margin-bottom:5px;
			}
		}
		
	}
	.callService{
		position:fixed;
		bottom:10%;
		right:5%;
		display: flex;
		justify-content: center;
		align-items: center;
		width:60px;
		height:60px;
		background: #2787F4;
		border-radius: 50%;
		span{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color:#fff;
			width:50px;
			height:50px;
			background:#4091EF;
			border-radius: 50%;
			i{
				margin-bottom:5px;
			}
		}
	}
</style>

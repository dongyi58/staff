<template>
	<view class="wrap login-wrap">
	<view class='loginbar'>
			<image src="../../static/images/dlogo.png" class="login-logo"></image>
			<view class="version-view">业务员版APP</view>
			<view class="login-inpgroup">
				<view class="login-item"><i class="iconfont icon-user"></i><input  type="text" v-model="phone" placeholder="请输入账号"></view>
				<view class="login-item"><i class="iconfont icon-mima"></i><input type="password" v-model="psw" placeholder="请输入密码"></view>
			</view>
			<view class='login-btn'><button @click="login">登录</button></view>
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
	</view>
</template>

<script>

	export default {
		data() {
			return {
				phone:'18048911384',//18048911384
				psw:'123456',
				service:'028-83419849'
			}
		},
		
		mounted() {
			//如果存在token，保持登录状态
			if(uni.getStorageSync("token")){
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			}
		},
		methods: {
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
					top:5px;
					left:5px;
					color:#23A6F1;
					border-right:1px solid #eee;
					font-size:2em;
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

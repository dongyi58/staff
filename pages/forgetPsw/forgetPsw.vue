<template>
	<view class="page-wrap bg-light-gray">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="false" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="忘记密码"
		 :cancletext="false"
		 :focus="false"
		 />
		<!-- 表单 -->
		<view class="bg-white padding-30">
			<text class="font-24 light-gray">为保障您的数据安全，修改密码前请填写原密码</text>
			<line-input 
			class="margin-bottom20"
			v-model="phone"
			title="手机号"
			placeholder="请输入手机号"
			:btnObj="btnObj"
			@btnClick='getVerifyCode'
			></line-input>
			
			<line-input
			class="margin-bottom20"
			v-model="code"
			title="验证码"
			placeholder="请输入验证码"
			></line-input>
			
			<line-input
			class="margin-bottom20"
			v-model="newPwd"
			title="新密码"
			:maxlength="18"
			placeholder="请输入密码"
			:password="true"
			endSize="16"
			></line-input>
			
			<line-input
			v-model="confirmPwd"
			:maxlength="18"
			title="确认新密码"
			:password="true"
			placeholder="请输入原登录密码"
			endSize="14"
			></line-input>
		</view>
		
		<view class="padding-20">
			<text class="font-22 light-gray">建议密码由6-16个字符组成，区分大小写(不能是9位以下的纯数字，不能包含空格)这样可以更好的保障您的账号安全。</text>
		</view>
		
		<view  class="flex content-center">
			<view @tap="confirm" class="com-btn" :class="{'com-btn-hover':isEnabled}">确认修改</view>
		</view>
		
	</view>
</template>

<script>
	import lineInput from '@/components/line-input.vue';
	import {validate} from '@/api/helper.js';
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	
	export default{
		data(){
			return {
				phone:'',//手机号
				code:'', //验证码
				verCode:'', //验证验证码
				newPwd:'',
				confirmPwd:'',
				btnObj:{
					title:'获取验证码',
					disabled:false, //是否禁用获取验证码按钮
				}
			}
		},
		components:{
			lineInput,
			customnav
		},
		computed:{
			isEnabled(){
				if(!this.phone||!this.code||!this.newPwd||!this.confirmPwd){
					return false;
				}
				return true;
			}
		},
		methods:{
			confirm(){
				if(this.validate()){ //验证数据
					
					this.$dyrequest({
						url:'/LoginSales/password',
						method:'POST',
						data:{
							do:'submit',
							phone:this.phone,
							scode:this.code,
							password:this.newPwd,
							repassword:this.confirmPwd
						}
						
					})
					.then(res=>{
						console.log(res);
						uni.showToast({
							icon:'none',
							title:res.data.info
						})
						if(res.data.mark=='ok'){ //修改成功
							uni.reLaunch({
								url:'/pages/login/login'
							})
						}
					})
					.catch(err=>{
						console.log(err);
					})
				}
			},
			// 验证
			validate(){
				// 验证当前按钮是否可用
				if(!this.isEnabled){
					return false;
				}
				// 验证手机号
				if(!validate.verifyPhone(this.phone)){
					return false;
				}
				
				// 验证验证码
				// if(this.code!=this.verifyCode){
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'验证码错误'
				// 	})
				// 	return false;
				// }
				
				// 判断密码位数
				if(this.newPwd.length<6){
					uni.showToast({
						icon:'none',
						title:'密码不能小于6位'
					})
					return false;
				}
				
				//判断密码是否是9位以下的纯数字
				// if(this.newPwd.length<=9&&!isNaN(this.newPwd)){
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'密码不能是9位以下的纯数字'
				// 	})
				// 	return false;
				// }
				
				//验证确认密码与新密码是否一致
				if(this.confirmPwd!=this.newPwd){
					uni.showToast({
						icon:'none',
						title:"确认密码与新密码不一致!"
					})
					return false;
				}

				return true;
			},
			// 验证手机号并获取验证码
			getVerifyCode(){
				if(validate.verifyPhone(this.phone)){ //验证手机号
					// 设置获取验证码按钮状态和文字
					let timer=validate.setVerifyCodeBtn(this.btnObj);
					
					// 获取验证码
					this.$dyrequest({
						url:'/LoginSales/password',
						method:'POST',
						data:{
							do:'senSms',
							phone:this.phone
						}
						
					})
					.then(res=>{
						console.log(res);
						uni.showToast({
							icon:'none',
							title:res.data.info
						})
						// this.verifyCode=res.data.data.code;
					})
					.catch(err=>{
						console.log(err);
					})
					
				}
			}
		}
	}
</script>

<style>
	.page-wrap{
		width:100%;
		/* min-height:100vh; */
		/* height:100%; */
		overflow-y:auto;
		display:flex;
		flex-direction:column;
	}
	
	.flex{
		display:flex;
	}
	
	.content-center{
		justify-content:center;
	}
	
	/* 前景色 */
	.light-gray{ 
		color:#888888;
	}
	
	/* 背景 */
	.bg-light-gray{
		background-color:#F6F6F6;
	}
	
	.bg-white{
		background-color:#FFFFFF;
	}
	
	.padding-20{
		padding:20.83rpx;
	}
	.padding-30{
		padding:31.25rpx;
	}
	
	.font-22{
		font-size:22.91rpx;
	}
	.font-24{
		font-size:25rpx;
	}
	
	.margin-bottom20{
		margin-bottom:20.83rpx;
	}
	
	/* 按钮 */
	.com-btn{
		display:flex;
		justify-content:center;
		align-items:center;
		width:708.33rpx;
		height:81.25rpx;
		font-size:31.25rpx;
		color:#FF9793;
		margin-top:76.04rpx;
		background-color:#FC564A;
		border:none;
		letter-spacing:10.41rpx;
		border-radius:12.5rpx;
	}
	
	/* 按钮激活状态 */
	.com-btn-hover{
		color:#FFFFFF !important;
		background-color:#EE453C !important; /**/
	}
	
</style>

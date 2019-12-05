<template>
	<view class="wrap current_account_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="true" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="修改登录密码"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="current_account_list">
				<p>为保障您的数据安全，修改密码前请填写原密码</p>
				
				<view class="current_account_list_item">
					<span>原密码</span>
					<input :type="inp1"
					 class="codeInp" 
					 focus="true"
					 placeholder="请输入原登录密码" 
					 v-model="oldPsw">
					 <i class="iconfont" :class="[eyeopen1 ? 'icon-eye1' : 'icon-eye']" @click="eyechange(1)"></i>
				</view>
				<view class="current_account_list_item">
					<span>新密码</span>
					<input :type="inp2"
					 class="codeInp" 
					 placeholder="请输入新设置登录密码" 
					 v-model="newPsw">
					 <i class="iconfont" :class="[eyeopen2 ? 'icon-eye1' : 'icon-eye']" @click="eyechange(2)"></i>
				</view>
				<view class="current_account_list_item">
					<span>确认密码</span>
					<input :type="inp3"
					 class="codeInp" 
					 placeholder="请再次输入新设置登录密码" 
					 v-model="confirmPsw">
					 <i class="iconfont" :class="[eyeopen3 ? 'icon-eye1' : 'icon-eye']" @click="eyechange(3)"></i>
				</view>
		 </view>
		 <view class="nextMove">
		 	<button type="warn" @click="changePsw"  :disabled="disable">确定</button>
			 <!-- 	<button type="warn" @click="verifyPhone('submit')" >确定</button> -->
		 </view>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	
	export default {
		 components: {customnav},
		data() {
			return {
				oldPsw:'',
				newPsw:'',
				confirmPsw:'',
				disable:true,
				eyeopen1:false,
				eyeopen2:false,
				eyeopen3:false,
				inp1:'password',
				inp2:'password',
				inp3:'password'
			};
		},
		onLoad() {
			this.bindedPhone = uni.getStorageSync('phone')
		},
		watch:{
			
			confirmPsw(n){
				if(this.oldPsw && this.newPsw && n.length > 0){
					this.disable = false
				}else{
						this.disable = true
				}
			}
		},
		methods:{
			eyechange(idx){
				if(idx ==  1){
					this.eyeopen1 = !this.eyeopen1
					this.eyeopen1 ? this.inp1 ='text' : this.inp1 ='password'
				}else if(idx ==  2){
					this.eyeopen2 = !this.eyeopen2
					this.eyeopen2 ? this.inp2 ='text' : this.inp2 ='password'
				}else{
					this.eyeopen3 = !this.eyeopen3
					this.eyeopen3 ? this.inp3 ='text' : this.inp3 ='password'
				}
			},
			changePsw(){
				
				
				this.$dyrequest({
					url:'/PersonSales/modifyPassword',
					method:'POST',
					data:{
						opassword:this.oldPsw,
						password:this.newPsw,
						repassword:this.confirmPsw
					}
				}).then(res=>{
					
						if(res.data.code == 0){
							uni.removeStorageSync('token')
							uni.showToast({
								icon:'none',
								title: '修改成功,请重新登录',
								
							});
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/login/login'
								});
							},2000)
							
						}else{
							uni.showToast({
								icon:'none',
								title: res.data.message,
								
							});
						}
					
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.current_account_list{
		
		padding:0 10px;
		background:#fff;
		p{
			padding:10px 0;
			color:#999;
		}
		&_item{
			position:relative;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding:10px 0;
			border-bottom:1px solid #f8f8f8;
			span{
				width:70px;
			}
			i{
				justify-self:flex-end;
				color:#999;
			}
		}
		&_item:last-child{
			border:0;
		}
	}
	.verifyCodeBtn{
		position:absolute;
		right:0;
		color:#F53430 !important;
		border:1px solid #F53430 !important;
	}
	.codeInp{
		width:80%;
		height:35px;
		border:none;
		font-size:12px;
		outline:none;
	}
	.nextMove{
		padding:10px;
	}
	
</style>
	
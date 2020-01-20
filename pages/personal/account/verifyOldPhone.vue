<template>
	<view class="wrap current_account_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="false" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="验证原手机号"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="current_account_list">
				<view class="current_account_list_item">请输入{{bindedPhone.substr(0, 3) + '****' + bindedPhone.substr(7)}}收到的短信验证码</view>
				<view class="current_account_list_item">
					<input type="text"  class="codeInp" maxlength="6" placeholder="请输入6位数字验证码" v-model="code">
					<button size='mini' plain class="verifyCodeBtn" :disabled="yzmDisabled" @click.stop="verifyPhone('senSms')">{{yzmtext}}</button>
				</view>
				
		 </view>
		 <view class="nextMove">
		 	<button type="warn" @click="verifyPhone('submit')"  :disabled="disable">下一步</button>
			 <!-- 	<button type="warn" @click="verifyPhone('submit')" 	>下一步</button> -->
		 </view>
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		 components: {uniList,uniListItem,customnav},
		data() {
			return {
				bindedPhone:'',
				code:'',
				disable:true,
				yzmDisabled:false,
				yzmtext:'获取验证码'
			};
		},
		onLoad() {
			this.bindedPhone = uni.getStorageSync('phone')
		},
		watch:{
			code(n){
				console.log(n.length)
				n.length == 6 ? this.disable = false : this.disable = true
			}
		},
		methods:{
			verifyPhone(d){
				this.$dyrequest({
					url:'/PersonSales/verifyPhone',
					method:'POST',
					data:{
						do:d,
						code:this.code
					}
				}).then(res=>{
					
					uni.showToast({
						icon:'none',
						title: res.data.message
					});
					if(d == 'submit'){
						
						if(res.data.code == 0){
							uni.navigateTo({
								url:'/pages/personal/account/changePhone'
							});
						}
					}else{
						this.yzmDisabled=true
						let time=60
						
						let timer = setInterval(()=>{
							
							if(time < 1){
								this.yzmtext=`获取验证码`
								this.yzmDisabled=false
								clearInterval(timer)
								return
							}
							
							this.yzmtext=`${time--}秒后再次获取`
							
						},1000)
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
		&_item{
			position:relative;
			display: flex;
			justify-content: space-between;
			border-bottom:1px solid #f8f8f8;
			padding:15px 0;
			span:last-child,i{
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
		width:70%;
		height:35px;
		border-bottom:1px solid #f8f8f8;
		font-size:12px;
	}
	.nextMove{
		padding:10px;
	}
	
</style>

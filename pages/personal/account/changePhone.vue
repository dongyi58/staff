<template>
	<view class="wrap current_account_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="false" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="更换绑定手机"
		 :cancletext="false"
		 :focus="false"
		 />
		 <view class="current_account_list">
				<view class="current_account_list_item">请输入需要绑定的新手机号</view>
				<view class="current_account_list_item">
					 <input type="number" class="codeInp" maxlength="11"  placeholder="您的新手机号" v-model="newPhone">
				</view>
				<view class="current_account_list_item">
					<input type="text" class="codeInp" maxlength="6" placeholder="请输入6位数字验证码" v-model="code"><button size='mini' plain class="verifyCodeBtn" :disabled="yzmDisabled" @click="verifyPhone('senSms')">{{yzmtext}}</button>
				</view>
				
		 </view>
		 <view class="nextMove">
		 	<button type="warn" @click="verifyPhone('submit')"  :disabled="disable">确定</button>
			 <!-- 	<button type="warn" @click="verifyPhone('submit')" >确定</button> -->
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
				newPhone:'',
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
			
				n.length == 6 ? this.disable = false : this.disable = true
			}
		},
		methods:{
			verifyPhone(d){
				
				this.$dyrequest({
					url:'/PersonSales/editPhone',
					method:'POST',
					data:{
						do:d,
						code:this.code,
						newPhone:this.newPhone
					}
				}).then(res=>{
					console.log(d,res.data.code)
					
					if(d == 'submit' && res.data.code == 0){
							uni.removeStorageSync('token')
							uni.removeStorageSync('phone')
							
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
			padding:10px 0;
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
		width:100%;
		height:35px;
		border-bottom:1px solid #f8f8f8;
		font-size:12px;
	}
	.nextMove{
		padding:10px;
	}
	
</style>
	
<template>
	<view>
		<popup ref="popup" type="center" class="level_popup" :popstyle="{width:'80%',overflow:'hidden'}">
					<view class="level_wrap">
						<h4>申请等级</h4>
						<view class="currentLv"><span>当前等级:{{shopLv || '无'}}</span><span>账期:无</span></view>
						<view class="level_option">
							<ul v-if="levelOption.length != 0">
								<li v-for="(item,idx) of levelOption" :key="idx"
									:class="[idx == currentIdx ? 'active' : '']"
									@click="changeIdx(idx,item.type)"
								>{{item.levelname}}</li>
								<li style="background:transparent"></li>
							</ul>
							<span v-else>当前供应商暂无可申请等级 :(</span>
						</view>
						<view class="btnbox">
							<span @click="cancel">取消</span><span @click="confirm">确定</span>
						</view>
					</view>
		 </popup>
	</view>
</template>

<script>
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	export default {
		components: {popup},
		data() {
			return {
				currentIdx:0,
				levelOption:[],
				shopId:'',
				typeId:'',
				shopLv:''
			};
		},
		methods:{
			showLevel(shopId){
				this.$refs.popup.open()
				this.shopId  = shopId
				this.$dyrequest({
					url:'/SmallShop/getShopLevel',
					method:'POST',
					data:{
						id:1079
					}
				}).then(res=>{
					
					this.levelOption = res.data.data.all
					this.typeId = this.levelOption[0].id
					this.shopLv = res.data.data.shopLevel
					
				})
			},
			changeIdx(idx,typeId){
				this.currentIdx = idx
				this.typeId = typeId
			},
			cancel(){
				this.$refs.popup.close()
			},
			confirm(){
				
				if(this.levelOption.length == 0){
					this.$refs.popup.close()
					return
				}
				this.$dyrequest({
					url:'/SmallShop/applyStar',
					method:'POST',
					data:{
						id:1079,
						typeId:this.typeId
					}
				}).then(res=>{
					console.log(res)
					uni.showToast({
						icon:'none',
					    title: res.data.msg,
					    duration: 2000
					});
					this.$refs.popup.close()
				})
			}
		}
	}
</script>

<style lang="scss">
	.level_popup .uni-popup__wrapper-box{
		width:90%;
	}
	.active{
		background:#157AEC !important
	}
	.level_wrap{
		display: flex;
		flex-direction: column;
		align-items: center;
		h4{
			font-size:15px;
		}
		.level_option{
			
			width:100%;
			padding:1rem 0;
			text-align: center;
			ul{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li{
					width:30%;
					background:#999;
					color:#fff;
					border-radius:20px;
					padding:5px 8px;
					font-size:13px;
					text-align: center;
					box-sizing: border-box;
					margin-bottom:10px;
				}
			}
			
		}
		.btnbox{
			display: flex;
			width:100%;
			border-top:1px solid #eee;
			
			span{
				position: relative;
				width:50%;
				padding:15px 0 5px;
				text-align: center;
				font-size:14px;
				color:#999;
			}
			span:last-child{
				color:#157AEC
			}
			span:last-child::before{
				content: '';
				position: absolute;
				top:5px;
				left:0;
				width:1px;
				height:100%;
				background:#eee;
			}
		}
	}
	.currentLv{
		color:#999;
		width:100%;
		display: flex;
		justify-content: space-evenly;
		padding:5px 0;
		
	}
</style>

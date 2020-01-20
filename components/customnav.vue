<template>
	<view :class="[setFixed ? 'fixedNav' : 'customnav']" :style="{'color':'rgb('+transColor+','+transColor+','+transColor+')'}">
		<view class="transNavBackground" :style="{'opacity':transOpacity}"></view>
		<view class="search_box" v-if="searchinp">
			<input type="text" 
			placeholder-class="holder_text"
			:placeholder="placeholder" 
			confirm-type="search"
			@confirm="gotoSearchResult"
			:focus="focus"
			v-model="searchkey"
			>
			<span v-if="cancletext" @click="getback">取消</span>
		</view>
		<view class="nav-left" v-if='back'>
			<!-- 返回按钮 -->
			<i  class="iconfont icon-xiangzuo" @click="getback"></i>
		</view>
		<view class="nav-mid" v-if="midtitle">
			<!-- 导航文字 -->
			<span class="navtext">{{navtitle}}</span>
		</view>
		<view class="nav-right" v-if="isSearch || ismsg || isRightText || isedit">
			<!-- 购物车编辑按钮 -->
			<span v-if="isedit" class="cart_edit" @click="edit">{{editTxt}}</span>
			<!-- 搜索按钮 -->
			<i v-if="isSearch" @click="gosearch" class="iconfont icon-sousuo msg"></i>
			<!-- 消息提醒 -->
			<i v-if="ismsg"  @click="checkMessage" class="iconfont icon-xiaoxi msg"></i>
			<!-- 帮助按钮 -->
			<i v-if="isRightText" @click="help" style="font-style:normal;font-size:14px">{{rightText}}</i>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			setFixed:{
				type:Boolean,
				default:false
			},
			midtitle:{
				type:Boolean,
				default:true
			},
			navtitle:{
				type:String,
				default:''
			},
			isSearch:{
				type:Boolean,
				default:false
			},
			ismsg:{
				type:Boolean,
				default:false
			},
			isRightText:{
				type:Boolean,
				default:false
			},
			isedit:{
				type:Boolean,
				default:false
			},
			rightText:{
				type:String,
				default:''
			},
			back:{
				type:Boolean,
				default:true
			},
			backType:{
				type:[Number,String]
			},
			backurl:{
				type:[Number,String]
			},
			searchinp:{
				type:Boolean,
				default:false
			},
			focus:{
				type:Boolean,
				default:false
			},
			placeholder:{
					type:String,
					default:'请输入商品名称'
			},
			cancletext:{
				type:Boolean,
				default:true
			},
			transOpacity:{
				default:0
			},
			transColor:'',
			// searchkey:''
			
		},
		data() {
			return {
			
				transOpacity2:0,
				searchkey:'',
				editTxt:'管理',
				historyList:[],
			};
		},
		computed:{
			editFlag(){
				return this.$store.state.editFlag
			},
		},
		watch:{
			editFlag(n,o){
				if(n){
					this.editTxt = '完成'
					
				}else{
					this.editTxt = '管理'
					
				}
			},
			// searchkey(n,o){
			// 	console.log(n)
			// }
		},
		methods:{
			//返回按钮
			getback(){
				if(this.backType == 1){
					uni.navigateTo({
						url:this.backurl,
						animationType: 'slide-in-left',
						animationDuration: 300
					})
				}else{
					uni.navigateBack({
						    delta:1
						});
				}
				
				
			},
			//消息页
			checkMessage(){
				uni.navigateTo({
					url:'/pages/message/message'
				})
			},
			//搜索页面
			gosearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			//跳转搜索结果页面,存储搜索历史
			gotoSearchResult(){
				let cecheH = uni.getStorageSync('searchHistory')
				this.historyList = cecheH || []
				
				if(this.historyList.indexOf(this.searchkey) < 0){
					this.historyList.push(this.searchkey)
				}
				
				uni.setStorageSync('searchHistory',this.historyList)
				// console.log(historyList)
				uni.redirectTo({
					url:'/pages/search/searchResult?keywords='+this.searchkey
				})
			},
			//打卡帮助
			help(){
				this.$emit('showhelp',true)
			},
			//购物车编辑按钮
			edit(){
				this.$store.commit('CHANGE_EDITSTATUS',!this.editFlag)
				 
			},
		}
	}
</script>

<style lang="scss">
	.transNavBackground{
			position: absolute;
		    top: 0;
		    left: 0;
		    bottom: 0;
		    right: 0;
		    background: linear-gradient(to right,#21A5F9,#1A6FE8);
	}
	.search_box{
		position:relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width:100%;
		input{
			width:75%;
			border:1px solid #60b8ff;
			border-radius:20px;
			padding-left:10px;
			font-size:12px;
			height:25px;
		};
		.holder_text{
			font-size:12px;
			color:#78c3ff;
		}
		span{
			position:absolute;
			right:0;
			font-size:14px;
		}
	}
	.customnav{
		position:relative;
		display:flex;
		justify-content: space-between;
		align-items: center;
		width:100%;
		height:45px;
		background:linear-gradient(to right,#21A5F9,#1A6FE8);
		color:#f8f8f8;
		padding:0 .5rem;
	}
	.fixedNav{
		z-index:99;
		position:fixed;
		top:var(--status-bar-height);
		display:flex;
		justify-content: space-between;
		align-items: center;
		width:100%;
		height:45px;
	}
	.navtext{
		display: block;
		font-size:14px;
		max-width:200px;
		@include longtext;
	}
	.msg{
		font-size:1.5em;
	}
	.nav-left{
		    position: absolute;
			
			width:20px;
			left: 20px;
			top:50%;
			transform: translateY(-50%);
			i{
				font-size:18px;
			};
	}
	.nav-mid{
		    position: absolute;
		    left: 50%;
			top:50%;
		    transform: translate3d(-50%,-50%,0);
	}
	.nav-right{
			position: absolute;
			right:20px;
			top:50%;
			transform: translateY(-50%);
			display: flex;
			.cart_edit{
				border:1px solid #fff;
				padding:1px 8px;
				border-radius:5px;
			}
		i{
			margin-left:10px;
		}
	}
</style>

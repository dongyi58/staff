<template>
	<view class="wrap index-wrap">
		<view class="status_bar index_status_bar"></view>
		<view class="header">首页</view>
		
		<view class="index_item_box">
			<view class="item_one">
				<view class="item_one_left">
					<image class="item_one_left_img" 
					:src="staff_info.picture"
					mode="aspectFill"
					></image>
					<view class="item_one_left_info">
					
						<view class="item_one_left_name">{{staff_info.salesName}}</view>
						<view class="item_one_left_position">{{staff_info.supplierName}}</view>
					</view>
				</view>
				<view class="item_one_right">
					<view class="item_one_right_btn" @click="goCheck">
						<i class="iconfont icon-tianchongxing-"></i>
						<view>到店打卡</view>
					</view>
				</view>
			</view>
			<view class="item_two">
				<view class="item_two_top item_left_icon">
					<span>一键下单</span>
					<navigator url="/pages/shops/shops">
						<button>代下单</button>
					</navigator>
				</view>
				<view class="item_two_text">业务员快捷下单，让进货更快，更方便</view>
				<view class="item_two_bottom">
					<span><image class="dot_icon" src="../../static/images/dot.png">选择<br>店铺</span>
					<span><image class="dot_icon" src="../../static/images/dot.png">选取商品并<br>加入购物车</span>
					<span><image class="dot_icon" src="../../static/images/dot.png">代付或生成<br>付款二维码</span>
					<span><image class="dot_icon" src="../../static/images/dot.png">小店付款<br>完成交易</span>
				</view>
			</view>
			<view class="item_two item_three">
				<view class="item_two_top item_left_icon"><span>个人中心</span><navigator url="/pages/personal/personal"><button>查看详情</button></navigator></view>
				<view class="item_two_text">小店管理、报表管理、收入管理一目了然</view>
				
			</view>
			<view class="msg_box" @click="checkMessage">
				<i class="new_msg_tip"></i>
				<i class="iconfont icon-xiaoxi"></i>
			</view>
		</view>
		
	</view>
</template>

<script>
	// import request from '@/api/request.js'

	export default {
		
		data() {
		
			return {
				staff_info:"",
				domain:this.$store.state.domain,
			}
		},
		
		onShow() {
			
			let _this = this
			
			this.$dyrequest({
			    url:'/IndexSales/homePage', 
				method:'POST',
			}).then(res=>{
					_this.staff_info = res.data.data
					_this.staff_info.picture = _this.domain+_this.staff_info.picture
					// uni.setStorageSync('staffInfo',_this.staff_info)
					
					_this.$store.commit('SET_STAFFINFO',
							{
								name:_this.staff_info.salesName,
								img:_this.staff_info.picture,
								supplier:_this.staff_info.supplierName
							},
					)
					
			})
			
		},
		// watch:{
		// 	list(n,o){
		// 		this.total = 0
		// 		n.map(item=>{
		// 			if(item.flag){
		// 				console.log(item.price)
		// 				this.total = this.total+item.price
		// 			}
					
		// 		})
		// 	}
		// },
		computed:{
			
		},
		methods: {
			calc(idx){
				this.$set(this.list[idx],'flag',true)
			},
			checkMessage(){
				uni.navigateTo({
					url:'/pages/message/message'
				})
			},
			goCheck(){
				uni.navigateTo({
					url:'/pages/staffCheck/staffLoaction'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.index_status_bar{
		background:#147AED
	}
	.index-wrap{
		padding:1rem;
		color:#fff;
		background:linear-gradient(#147AED,#167bed)
	}
	.header{
		font-size:14px;
		text-align:center;
		height:45px;
		line-height:45px;
		
	}
	//分块默认样式
	.item_one,.item_two{
		background:#f8f8f8;
		border-radius:4px;
		color:#272727;
		padding:.5rem;
		
	}
	// 标题左边竖杠
	.item_left_icon{
		padding-left:10px;
	}
	.item_left_icon::before{
		content:'';
		position:absolute;
		top:10%;
		left:0;
		width:4px;
		height:80%;
		background:$color-2
	}
	// 分块1
	.item_one{
		display: flex;
		justify-content: space-between;
		margin-bottom:2.5rem;
		&_left{
			display: flex;
			align-items: center;
			&_img{
				width:50px;
				height:50px;
				border-radius: 50%;
				border:1px solid #489cfb;
			}
			&_info{
				margin-left:10px;
			}
			&_name{
				font-size:15px;
				margin-bottom:5px;
			}
			&_position{
				background:#eee;
				border-radius: 20px;
				color:$color-1;	
				padding:3px 5px
			}
		}
		&_right{
			align-self: center;
			&_btn{
				position:relative;
				left:15px;
				display:flex;
				justify-content: space-between;
				border-radius: 20px 0 0 20px;
				background:#489CFB;
				color:#f8f8f8;
				font-size:1.2em;
				padding:8px 15px;
				i{
					font-size:1.2em;
					margin-right:10px;
				}
			}
		}
	}
	
	//分块2
	.item_two{
		
		background:#f8f8f8;
		border-radius:4px;
		&_top{
			position:relative;
			display: flex;
			justify-content: space-between;
			span{
				font-size:18px;
			}
			button{
				background:#EE453C;
				color:#fff;
				border-radius:20px;
				height:23px;
				font-size:14px;
				line-height:23px;
				
			}
		}
		
		&_text{
			font-size:14px;
			color:#999;
			padding:1rem 0;
		}
		&_bottom{
			display:flex;
			justify-content: space-between;
			border-top:1px solid #489CFB;
			padding:10px;
			span{
				position:relative;
				color:$color-2;
				letter-spacing: 2px;
				.dot_icon{
					position:absolute;
					top:-15px;
					width:10px;
					height:10px;
					left:50%;
					transform: translate(-50%,0)
				}
			}
			
		}
	}
	.item_three{
		margin-top:1rem;
	}
	.msg_box{
		position:fixed;
		bottom:10px;
		right:10px;
		width:45px;
		height:45px;
		border-radius:50%;
		background:#489CFB;
		text-align: center;
		line-height: 45px;
		i{
			font-size:2em;
		}
		.new_msg_tip{
		    position: absolute;
		    top: 10px;
		    left: 27px;
		    width: 8px;
		    height: 8px;
		    background: red;
		    border-radius: 50%;
		}
	}
</style>

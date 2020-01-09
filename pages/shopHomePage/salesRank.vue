<template>
	<view class="salesrank_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav  navtitle="销售排行" />
		<scroll-view class="rank_list" @scroll="scroll" scroll-y >
				<!-- 排行榜列表 -->
				<view class="ranklist_wrap">
					<!-- 前三商品 -->
					<view class="top3_box">
						<view class="top3_item" @click="goto_goodsdetail(item.goods_id)" v-if="idx <= 2" v-for="(item,idx) of rankList" :key="idx">
							<view class="top3_idx" :class="[idx == 0 ? 'top3Idx_color0' : (idx==1?'top3Idx_color1' : 'top3Idx_color2') ]">NO.<i >{{idx+1}}</i></view>
							<view class="top3_imgbox">
								
								<image class=" top3_img image" :class="{lazy:!item.show}" :data-index="idx" @load="imageLoad" :src="item.show ? item.img:''" />
								<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
							</view>
							<p>{{item.d_name}}</p>
							<view class="salenum">
								日销量:{{item.sale}}
							</view>
						</view>
					</view>
					<view  class="otherrank_box">
						<view class="otherrank_item" @click="goto_goodsdetail(item.goods_id)" v-if="oidx >= 3" v-for="(item,oidx) of rankList" :key="oidx">
							<i class="rank_idx">{{oidx+1}}</i>
							<view class="other_imgbox">
								
								<image class=" otherimg image" :class="{lazy:!item.show}" :data-index="oidx" @load="imageLoad" :src="item.show ? item.img:''" />
								<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	
							</view>
							<view class="other_content">
								<p>
									{{item.name}}
								</p>
								<p>日销量：{{item.sale}}</p>
							</view>
						</view>
					</view>
				</view>
		</scroll-view>
	</view>
</template>

<script>
	import customnav from '@/components/customnav.vue'
	export default {
		components:{customnav},
		data() {
			return {
				rankList:[],
				domain:this.$store.state.domain,
				//图片懒加载
				windowHeight: 0,
				show: false,
				 //图片懒加载
			};
		},
		computed:{
			shopId(){
				return this.$store.state.shopId
			},
			supplierId(){
				return this.$store.state.supplierId
			}
		},
		mounted(){
			this.getrankList()
		},
		methods:{
			goto_goodsdetail(goodsId){
							
							 uni.navigateTo({
							 	url:'/pages/goodsDetail/goodsDetail?dtype=1&goods_id='+goodsId
							 })
			},
			//图片懒加载
			scroll(){
				this.load()
			},
			load() {
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.lazy').boundingClientRect((images) => {
					images.forEach((image, index) => {
						if (image.top <= this.windowHeight) {
							this.rankList[image.dataset.index].show = true;
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.rankList[e.target.dataset.index].loaded = true
			},
			//图片懒加载
			getrankList(){
				const _this = this
				 this.$dyrequest({
					 url:'/IndexSales/moreRankGoods',
					 method:'POST',
					 data:{
						 id:_this.shopId,
						 supplierId:_this.supplierId
					 }
				 }).then(res=>{
					
					 res.data.data.map(item=>{
						 _this.$set(item,'show',false)
						 _this.$set(item,'loaded',false)
						 item.img = _this.domain + item.img
						 _this.rankList.push(item)
					 })
					  console.log(_this.rankList)
					  //图片懒加载 首次加载
					  this.windowHeight = uni.getSystemInfoSync().windowHeight-45
					  
					  if (!this.show) {
					  	this.show = true
					  	
					  	setTimeout(() => {
					  		this.load()
					  	}, 100)
					  }
					  //图片懒加载
				 })
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.rank_list{
		width: 100%;
		height: calc(100vh - 45px);
	}
	
.top3_box{
	display:flex;
	background:#fff;
	.top3_item{
		position:relative;
		
		flex:1 1 33%;
		padding:10px;
		.top3_imgbox{
			position:relative;
			height:0;
			padding-bottom:70%;
			margin-top:2rem;
			.top3_img{
				position:absolute;
				left:15%;
				width:70%;
				height:100%;
				border-radius: 5px;
			}
		}
		p{
			@include longtext2;
			min-height:35px;
			margin-top:5px;
		}
		.salenum{
			border-top:1px solid #eee;
			text-align: center;
			color:#C50B07;
			padding:5px 0;
		}
		.top3_idx{
			position: absolute;
			left: 10px;
			font-style: normal;
			font-weight: 600;
			i{
				font-size:14px;
				font-style: normal;
			}
		}
	}
	.top3_item:nth-child(2)::after,
	.top3_item:nth-child(2)::before
	{
		content:'';
		position:absolute;
		top:5%;
		width:1px;
		height:90%;
		background:#eee;
	}
	.top3_item:nth-child(2)::after{
		right:0
	}
	.top3_item:nth-child(2)::before{
		left:0;
	}
}
.top3Idx_color0{
	color:#C50B07
}
.top3Idx_color1{
	color:#EE7024
}
.top3Idx_color2{
	color:#ABABAB
}
.otherrank_item{
	margin:10px 0;
	display: flex;
	align-items: center;
	padding:10px;
	background:#fff;
	.other_imgbox{
		position:relative;
		width:60px;
		height:60px;
		flex-shrink: 0;
		margin-left:10px;
		.otherimg{
			width:100%;
			height:100%;
			border-radius:4px;
		}
	}
	.other_content{
		display: flex;
		flex-direction: column;
		
		margin-left:10px;
		p:first-child{
			@include longtext2;
		}
		p:last-child{
			margin-top:5px;
			@include longtext;
			font-size:12px;
			color:#ccc;
		}
	}
	.rank_idx{
		width:18px;
		height:18px;
		flex-shrink: 0;
		border-radius:50%;
		background:#D0D0D0;
		color:#fff;
		text-align:center;
		line-height: 18px;
		font-style:normal;
	}
}

</style>

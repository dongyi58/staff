<template>
	<view class="wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav :back="false" navtitle="分类" :ismsg="false" />
		<scroll-view scroll-y="true" class="cateList">
			<view>
				<recursion :datas="categoryList" @foldOption='foldOption'></recursion>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import recursion from '@/components/recursion.vue';
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	import {mapState} from 'vuex';
	
	export default {
		components:{recursion,customnav},
		data() {
			return {
				categoryList:[],
				domain:this.$store.state.domain
			};
		},
		computed:{
			...mapState(['supplierId','currentIndex']),
			suppId(){
				return this.$store.state.supplierId;
			},
			getcurrent(){
				return this.$store.state.currentIndex
			},
			shopInfo(){
				return this.$store.state.shopInfo
			},
		},
		watch:{
			currentIndex(n,o){
				//下标为1时加载数据，也就是当点击了全部商品时才调用方法
				if(n == 3 && !this.loadonce){
					this.loadonce = true
					this.loadData();
				}
			}
		},
		methods:{
			loadData(){
				// console.log(this.supplierId);
				this.$dyrequest({
				     url:'/index.php/Category/indexOne',
				     method:'POST',
				     data:{
					  supplierId:this.supplierId
				     }
				    }).then(res=>{
						
						this.handleCategory(res.data.data);
						this.categoryList=res.data.data;
						
					})
					.catch(err=>{
						console.log(err);
					})
			},
			handleCategory(datas){
				datas.forEach(item=>{
					// this.$set(item,'isClick',false)
					item.unfold=false;
					if(item.parent){
						this.handleCategory(item.parent)
					}else{
						this.$set(item,'noChild',true)
					}
				})
				// console.log(datas)
			},
			// 递归组件折叠操作
			foldOption(e){
				let tempId=e;
				// console.log(tempId)
				// // #ifndef H5
				// 	tempId=e.detail.__args__[0];
				// // #endif
				this.setFoldStatus(this.categoryList,tempId);
			},
			// 递归查找折叠的项id,并设置折叠标志
			setFoldStatus(tempList,aimId){
				tempList.forEach((item)=>{
					if(item.id==aimId){
						item.unfold=!item.unfold;
					}else{ //继续向下查找
						if(item.parent){
							this.setFoldStatus(item.parent,aimId);
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.cateList{
		height:calc(100vh - 95px - var(--status-bar-height))
	}
.header-bkg{
		position:absolute;
		width: 100%;
		height:170rpx;
		overflow-x:hidden;
		
		&::after{
			content:'';
			position: absolute;
			left: 50%;
			top: 0%;
			transform: translate(-50%, 0);
			width: 130%;
			height: 80px;
			border-radius: 0 0 60% 60%;
			background:linear-gradient(to right, #21a4f9,#20a2f8,#1f95f4,#1d89f0,#1c80ed,#1b76ea,#0064ef);
		}
	}
	.supInfo{
		z-index:99;
		position:relative;
		top:4%;
		left:2.5%;
		width:95%;
		background:#fff;
		padding:.5rem;
		font-size:24rpx;
		@include br5;
		.st-left-img{
			@include roundavatar;
			flex-shrink: 0;
		}
		.getcut{
			display: flex;
			justify-content: space-between;
			span:first-child{
				color:$uni-text-color-grey
			}
			span:last-child{
				border:1px solid $color-1;
				border-radius:4px;
				color:$color-2;
				padding:2px 5px;
			}
		}
		.supInfo-top{
			display:flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom:5px;
			.st-left{
				width:80%;
				display: flex;
				align-items: center;
				
				.st-name{
					display: flex;
					flex-direction: column;
					width:80%;
					margin-left:10px;
					h4{
						font-size:14px;
						font-weight: normal;
						line-height: 1;
						@include longtext
					}
					i{
						color:$uni-text-color-grey;
						font-size:16px
					}
					p{
						@include longtext
					}
					.h_location{
						display:flex;
						margin-top:10px;
						i{
							color:#44AE69
						}
						p{
							color:$uni-text-color-grey;
						}
					}
				}
			}
			
			
		}
		
	}
</style>

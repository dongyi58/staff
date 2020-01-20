<template>
	<!-- little tips for myself -->
	<!-- 点击小店跳转到此页面，这里将shophomepage下面的页面作为组件在此显示
	原因是如果将底部导航作为组件引入到每个页面，因为每个页面都会重新加载底部导航会造成闪烁
	所以将导航页面作为父组件，将页面作为子组件控制显示隐藏，因为只是切换的页面，没有重新加载导航栏，达到没有闪烁的目的
	
	控制显示： 因为uniapp不能使用v-show,只能使用v-if，但是v-if和v-show的区别会使每次切换都会重新加载数据
	比如我我在页面1滚动了一部分，但是重新切换回来，又会重新加载数据，回到初始位置，用户体验不好
	，所以用了是display来控制显示，但是会有另外一个问题，
	
	问题： 在某些页面需要一开始加载数据，这样会使用到mounted（uniapp组件内不支持onshow、onload页面生命周期）
	所以使用vue的mounted是可以的，由于页面是display：none 而已，是存在在dom里面的，所以使用了mounted，
	会加载所有页面的数据，数据量少的话应该没有问题，但是我不知道数据量大会不会有影响
	但我期望的结果是，我点击到当前页面，再加载当前页面数据，所以这里在控制切换页面时，往vuex存储了一个currentIdx
	在每个页面使用watch监听currentIdx的变化，在加载页面数据。 -->
	<view>
		<home  @changeidx='changeidx' :style="{display:current == 0 ? 'block' : 'none'}"/>
		<allproduct  :style="{display:current == 1 ? 'block' : 'none'}" />
		<!-- <activity  :style="{display:current == 2 ? 'block' : 'none'}" /> -->
		<cart :style="{display:current == 2 ? 'block' : 'none'}" />
		<category  :style="{display:current == 3 ? 'block' : 'none'}" />
		
		<view class="supBottomNav">
			
			<ul>
				<li @click="changeidx(idx)" 
					v-for="(item,idx) of pages" :key="idx"
					:class="[idx == current ? 'active' : '']">
				
						<view class="index_view " v-if="idx == 0 && current == 0">
							<i class="iconfont" :class="item.icon"></i>
						</view>
						
						<view v-else class="other_view">
								<i  class="iconfont" :class="[idx == current ? item.active : item.icon]"></i>
								<span>{{item.name}}</span>
						</view>
				</li>
				
			</ul>
		</view>
	</view>
</template>

<script>
	import home from '@/pages/shopHomePage/shopHomePage.vue'
	import allproduct from '@/pages/shopHomePage/allProduct.vue'
	import activity from '@/pages/shopHomePage/activity.vue'
	import cart from '@/pages/shopHomePage/cart.vue'
	import category from '@/pages/shopHomePage/category.vue'
	
	export default {
		components:{home,allproduct,activity,cart,category},
		
		data() {
			return {
				current:-1,
				pages:[
					{
						name:'首页',
						icon:'icon-shouye-copy',
						active:'icon-shouye',
						activeIdx:0
					},
					{
						name:'全部商品',
						icon:'icon-shangpin',
						active:'icon-quanbushangpinred',
						activeIdx:1
					},
					// {
					// 	name:'活动',
					// 	icon:'icon-youhui',
					// 	active:'icon-youhuired',
					// 	activeIdx:2
					// },
					{
						name:'采购单',
						icon:'icon-dingdan',
						active:'icon-dingdan1',
						activeIdx:3
					},
					{
						name:'分类',
						icon:'icon-fenlei3',
						active:'icon-fenleired',
						activeIdx:4
					},
				],
			}
		},
		computed:{
			 cidx(){
				 return this.$store.state.currentIndex
			 }
		},
		onLoad(option){
			  // console.log('loaded')
			  // this.$store.commit('ADD_CART',true) //改变状态，重新加载购物车
			  // this.changeidx(this.$store.state.currentIndex)
			
			  this.changeidx(option.type)
		},
		onShow() {
			// console.log('show')
			//  this.$store.commit('ADD_CART',true)
			 this.changeidx(this.cidx)
			// console.log(this.$store.state.currentIndex)
			 
		},
		methods: {
			changeidx(idx){
				// console.log(this.current)
				 this.$store.commit('SET_CURRENINDEX',idx)
				 // console.log(idx)
				 this.current = idx
			}
		}
	}
</script>

<style lang="scss">
.supBottomNav{
	position:fixed;
	bottom:0;
	width:100%;
	padding:10rpx 0;
	background:#f9f9f9;
	border-top:#eaeaea;
	ul{
		padding:0;
		display: flex;
		li{
		    display:flex;
			align-items: center;
			justify-content: center;
			list-style: none;
			flex:1 1 20%;
			
			color:#999;
			.other_view{
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			i{
				font-size:20px;
				
			}
		}
		
	}
}
.index_view{
	width:35px;
	height:35px;
	border-radius:50%;
	background:$color-1;
	text-align:center;
	line-height:35px;
	color:#fff;
	margin:auto
}
.active{
	color:$color-2 !important
}
</style>

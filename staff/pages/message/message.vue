<template>
	<view class="message_wrap wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav  navtitle="消息" />
		<view class="mssage_wrap">
			<view class="timebox"><span>2019-9-10</span></view>
			<view  class="message_box">
				<view class="msg_type">发货提醒</view>
				<view class=" message_item">
					<view class="messageImg_box">
						<image class="message_img" src="../../static/images/avatar.jpg"></image>
						<!-- <image class=" otherimg image" :class="{lazy:!item.show}" :data-index="oidx" @load="imageLoad" :src="item.show ? item.img:''" />
						<view class="image placeholder loadimg" :class="{loaded:item.loaded}" ><i class="iconfont icon-image"></i></view>	 -->
					</view>
					<view class="message_content">
						<p>
							蒙牛甄选纯牛奶蒙牛周年庆店促过时不候！过时不候
						</p>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	// 顶部导航
	import customnav from '@/components/customnav.vue'
	export default {
		components:{customnav},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
@import '@/static/css/style.scss';
.message_box{
	background:#fff;
	border-radius:4px;
}
.mssage_wrap{
	margin:10px 0;
	padding:10px;
}
.msg_type{
	padding:10px 10px 0;
	font-size:14px;
}
.timebox{
	display: flex;
	justify-content: center;
	padding:10px 0;
	span{
		background:rgba(0, 0, 0, 0.26);
		color:#fff;
		border-radius:5px;
		padding:3px 10px;
	}
}
.message_item{
	display:flex;
	padding:10px;
		.message_img{
			position:relative;
			width:60px;
			height:60px;
			flex-shrink: 0;
		}
	
	.message_content{
		margin-left:10px;
	}
	p{
		color:#505050 !important;
		@include longtext2;
		}
}
</style>

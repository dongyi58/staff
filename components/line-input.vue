<template>
	<view @click="$emit('click')" class="input-container">
		<!-- 组件容器 -->
		<view class="input-box">
			<!-- 图标 -->
			<view v-if="iconStartType" class="icon">
				<cmd-icon :type="iconStartType" :size="startSize" :color="startColor"></cmd-icon>
			</view>
			<view v-if="title" class="input-title">{{title}}</view>
			
			<!-- 输入框 -->
			<input :class="iconStartType?'':'no-border'"
			:disabled="disabled" 
			:type="type"
			:value="value" 
			:name="name"
			:placeholder="placeholder" 
			:password="password"
			:maxlength="maxlength"
			@input="$emit('input',$event.target.value)"
			 />
			
			<!-- 输入框后的按钮 -->
			<button class="input-btn" plain="true" size="mini" @click="$emit('btnClick')"
			v-if="btnObj" 
			:type="btnObj.type"
			:disabled="btnObj.disabled"
			 >{{btnObj.title}}</button>
			
			<view v-if="iconEndType" class="icon" @click.stop="$emit('endIconClick')">
				<cmd-icon :type="iconEndType" :size="endSize" :color="endColor"></cmd-icon>
			</view>
		</view>
		
		<!-- 是否必填 -->
		<text class="required-flag" v-if="required">*</text>
	</view>
</template>

<script>
import cmdIcon from './cmd-icon/cmd-icon.vue';

	export default {
		props:{
			title:String,
			iconStartType:String, //前图标,
			iconEndType:String, //后图标
			startSize:{ //前图标大小
				type:String,
				default:"25"
			},
			endSize:{ //后图标大小
				type:String,
				default:"23"
			},
			startColor:{//前图标颜色
				type:String,
				default:"#FF7977"
			},
			endColor:{ //后图标颜色
				type:String,
				default:"#FF7977"
			},
			type:{
				type:String,
				default:"text"
			},
			required:{ //输入框是否是必填
				type:Boolean,
				default:false
			},
			disabled:Boolean, //是否禁用
			value:String, 
			name:String,
			placeholder:String, 
			password:Boolean,
			maxlength:{
				type:[String,Number],
				default:-1
			},
			btnObj:Object, //输入框后的按钮
		},
		data() {
			return {
				
			}
		},
		components:{
			cmdIcon
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	$borderColor:#BBBBBB;
	
	.input-container{
		position:relative;
	}
	.input-box{
		display:flex;
		align-items:center;
		flex-direction:row;
		height:85.41rpx;
		margin:15.62rpx 0;
		border-bottom:1.04rpx solid $borderColor;
		input{
			color:#000000;
		}
		.input-btn{
			color:#FE0000;
			font-size:25rpx;
			padding:0 10.41rpx;
			border:1px solid #FF7977;
			border-radius:8.33rpx;
			flex-shrink:0;
		}
	}
	.input-title{
		flex-shrink:0;
		font-size:27.08rpx;
	}
	.icon{
		display:flex;
		align-items:center;
		padding-right:18.75rpx;
		height:54.16rpx;
	}
	input{
		border:none;
		flex-grow:1; 
		border-left:1.04rpx solid $borderColor;
		padding:0 10.41rpx;
		font-size:27.08rpx;
		height:54.16rpx;
		color:#9C9C9C;
	}
	.required-flag{
		position:absolute;
		color:#DB302C;
		top:15.62rpx;
		right:-26.04rpx;
	}
	.no-border{
		border:none;
	}
	
</style>

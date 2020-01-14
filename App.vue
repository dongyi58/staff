<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			
			uni.showTabBarRedDot({
				index:3
			})
			plus.screen.lockOrientation('portrait-primary'); //锁定屏幕
			const dom = weex.requireModule('dom');
			dom.addRule('fontFace', {
				fontFamily: 'iconfont',
				src: "url('\https://at.alicdn.com/t/font_1427193_euq6rbyh3dc.ttf\')",	
				success() {
				    console.log('success')
				}
			});
			
			// #endif
			uni.setStorageSync('searchHistory',[]);
		},
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }
		onLoad() {
			// uni.hideTabBar()
			const res = uni.getStorageInfoSync();
			console.log(res)
		}
	}
</script>

<style lang="scss">
		/*公共css */
		body{
			color:#383838;
			font-size:$uni-font-size-sm;
			overflow-x: hidden;
		}
		view{
			
			box-sizing: border-box;
		}
		.wrap{
			width:100vw;
			height:100vh;
			overflow: hidden;
			background:#f6f6f6;
		}
		ul{padding:0;}
		li{
			list-style: none;
		}
		button{
			margin:0
		}
		a{
			display: inline-block;
			color:#f8f8f8;
			text-decoration: none;
		}
		
		.status_bar{
			
			width: 100%;
			height: var(--status-bar-height);
			background:linear-gradient(to right,#21A5F9,#1A6FE8);
		}
		.uni-textarea-placeholder{
			font-size:12px !important
		}
		.cartCheckBox {
			.uni-checkbox-input{
				border-radius:50% !important;
				width:18px;
				height:18px;
				
			}
			.uni-checkbox-input.uni-checkbox-input-checked{
				background:#147AED;
				border-color:#147AED;
			}
			.uni-checkbox-input.uni-checkbox-input-checked:before{
				font-size:14px;
			}
			.checkGroup{
				    display: flex;
				    align-items: center;
			}
		}
		/* #ifdef APP-PLUS */
			checkbox .wx-checkbox-input{
				border-radius:50% !important;
				width:28rpx;
				height:28rpx;
			}
			checkbox .wx-checkbox-input.wx-checkbox-input-checked{
				background:#147AED;
				border-color:#147AED;
			}
			checkbox .wx-checkbox-input-checked:before{
				font-size:24rpx;
			}
		/* #endif */
	
	//图标
	@font-face {font-family: "iconfont";
	  src: url('//at.alicdn.com/t/font_1495627_0dw99nmy7bfq.eot?t=1578972196119'); /* IE9 */
	  src: url('//at.alicdn.com/t/font_1495627_0dw99nmy7bfq.eot?t=1578972196119#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
	  url('//at.alicdn.com/t/font_1495627_0dw99nmy7bfq.woff?t=1578972196119') format('woff'),
	  url('//at.alicdn.com/t/font_1495627_0dw99nmy7bfq.ttf?t=1578972196119') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('//at.alicdn.com/t/font_1495627_0dw99nmy7bfq.svg?t=1578972196119#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-daifu:before {
	  content: "\e627";
	}
	
	.icon-xia:before {
	  content: "\e612";
	}
	
	.icon-image:before {
	  content: "\e7bc";
	}
	
	.icon-chakan:before {
	  content: "\e657";
	}
	
	.icon-touxiang:before {
	  content: "\e616";
	}
	
	.icon-daifukuan:before {
	  content: "\e60c";
	}
	
	.icon-you:before {
	  content: "\e636";
	}
	
	.icon-huidaodingbu:before {
	  content: "\e74a";
	}
	
	.icon-tianjiajiahaowubiankuang:before {
	  content: "\e81a";
	}
	
	.icon-icon-arrow-top2:before {
	  content: "\e665";
	}
	
	.icon-icon-arrow-bottom2:before {
	  content: "\e666";
	}
	
	.icon-sousuo:before {
	  content: "\e613";
	}
	
	.icon-xiazai46:before {
	  content: "\e61d";
	}
	
	.icon-dianhua1:before {
	  content: "\e624";
	}
	
	.icon-xiangzuo:before {
	  content: "\e601";
	}
	
	.icon-eye:before {
	  content: "\e608";
	}
	
	.icon-buoumaotubiao39:before {
	  content: "\e62f";
	}
	
	.icon-mima:before {
	  content: "\e61b";
	}
	
	.icon-youhui:before {
	  content: "\e692";
	}
	
	.icon-jia:before {
	  content: "\e60f";
	}
	
	.icon-duigou:before {
	  content: "\e659";
	}
	
	.icon-bianji:before {
	  content: "\e6a4";
	}
	
	.icon-user:before {
	  content: "\e6a6";
	}
	
	.icon-dianpu1:before {
	  content: "\e653";
	}
	
	.icon-xiaoxi:before {
	  content: "\e67e";
	}
	
	.icon-guanyu3:before {
	  content: "\e64c";
	}
	
	.icon-dingdan:before {
	  content: "\e60b";
	}
	
	.icon-round_location_fill:before {
	  content: "\e80b";
	}
	
	.icon-shangpin:before {
	  content: "\e74e";
	}
	
	.icon-dianhua:before {
	  content: "\e6f9";
	}
	
	.icon-shequneiicon-:before {
	  content: "\e64e";
	}
	
	.icon-daifahuo:before {
	  content: "\e602";
	}
	
	.icon-weizhi:before {
	  content: "\e76e";
	}
	
	.icon-daishouhuo:before {
	  content: "\e607";
	}
	
	.icon-zhanghao:before {
	  content: "\e652";
	}
	
	.icon-tianchongxing-:before {
	  content: "\e637";
	}
	
	.icon-eye1:before {
	  content: "\e617";
	}
	
	.icon-quxiaodingdan:before {
	  content: "\e625";
	}
	
	.icon-dianpu-tap:before {
	  content: "\e619";
	}
	
	.icon-qinglihuancun:before {
	  content: "\e64f";
	}
	
	.icon-shuju:before {
	  content: "\e654";
	}
	
	.icon-kongyemiankongneirong:before {
	  content: "\e6a3";
	}
	
	.icon-dingdan1:before {
	  content: "\e6a1";
	}
	
	.icon-lianxikefu:before {
	  content: "\e65f";
	}
	
	.icon-renyuandanganguanli:before {
	  content: "\e650";
	}
	
	.icon-ziyuan:before {
	  content: "\e615";
	}
	
	.icon-xingxing-kong:before {
	  content: "\e649";
	}
	
	.icon-xingxing-shi:before {
	  content: "\e658";
	}
	
	.icon-zengpin:before {
	  content: "\e656";
	}
	
	.icon-duobianxing:before {
	  content: "\e61c";
	}
	
	.icon-yingyong-:before {
	  content: "\e629";
	}
	
	.icon-gongyingshang:before {
	  content: "\e60d";
	}
	
	.icon-xia-copy:before {
	  content: "\e916";
	}
	
	.icon-shouye:before {
	  content: "\e60e";
	}
	
	.icon-shouye-copy:before {
	  content: "\e614";
	}
	
	.icon-youxiang:before {
	  content: "\e620";
	}
	
	.icon-duankailianjie:before {
	  content: "\e65e";
	}
	
	.icon-youhuired:before {
	  content: "\e634";
	}
	
	.icon-quanbushangpinred:before {
	  content: "\e638";
	}
	
	.icon-fenlei3:before {
	  content: "\e63a";
	}
	
	.icon-fenleired:before {
	  content: "\e63b";
	}
	
	.icon-yishouhuo:before {
	  content: "\e651";
	}
	
	.icon-tuichu:before {
	  content: "\e64d";
	}
	
	.icon-tichengjiangjinhesuan:before {
	  content: "\e655";
	}
	
	.icon-icon-test:before {
	  content: "\e65b";
	}


</style>

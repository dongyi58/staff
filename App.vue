
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
			// uni.setStorageSync('searchHistory',[]);
		},
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }
		onReady() {
			// uni.hideTabBar()
			const res = uni.getStorageInfoSync();
			console.log('loaded')
		}
	}
</script>

<style lang="scss">
		/*公共css */
		body{
			color:#383838;
			font-size:$uni-font-size-base;
			overflow-x: hidden;
		}
		view{
			
			box-sizing: border-box;
		}
		image{will-change: transform}
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
  src: url('//at.alicdn.com/t/font_1495627_3q63kgkb5g4.eot?t=1579395832662'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1495627_3q63kgkb5g4.eot?t=1579395832662#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1495627_3q63kgkb5g4.woff?t=1579395832662') format('woff'),
  url('//at.alicdn.com/t/font_1495627_3q63kgkb5g4.ttf?t=1579395832662') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1495627_3q63kgkb5g4.svg?t=1579395832662#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-quit-s:before {
  content: "\e795";
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

.icon-shanchu:before {
  content: "\e645";
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

.icon-saoma:before {
  content: "\e648";
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

.icon-shanchu1:before {
  content: "\e618";
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

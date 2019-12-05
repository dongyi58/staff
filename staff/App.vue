<script>
	export default {
		// onLaunch: function() {
		// 	uni.hideTabBar()
		// },
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
	/*每个页面公共css */
	body{
		color:#383838;
		font-size:$uni-font-size-sm;
		overflow: hidden;
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
	
	//图标
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1495627_tylc7iv0h3.eot?t=1574911644783'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1495627_tylc7iv0h3.eot?t=1574911644783#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1495627_tylc7iv0h3.woff?t=1574911644783') format('woff'),
  url('//at.alicdn.com/t/font_1495627_tylc7iv0h3.ttf?t=1574911644783') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1495627_tylc7iv0h3.svg?t=1574911644783#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-qinglihuancun:before {
  content: "\e64f";
}

.icon-shuju:before {
  content: "\e654";
}

.icon-dingdan1:before {
  content: "\e6a1";
}

.icon-renyuandanganguanli:before {
  content: "\e650";
}

.icon-ziyuan:before {
  content: "\e615";
}

.icon-zengpin:before {
  content: "\e656";
}

.icon-duobianxing:before {
  content: "\e61c";
}

.icon-yingyong-:before {
  content: "\e629";
      position: absolute;
      left: -2px;
      top: -3px;
      color: #ea291a;
      font-size: 20px;
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

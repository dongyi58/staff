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
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	body{
		color:#383838;
		font-size:$uni-font-size-sm;
	}
	view{
		
		box-sizing: border-box;
	}
	.wrap{
		width:100vw;
		height:100vh;
		
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
  src: url('//at.alicdn.com/t/font_1495627_4t3hq6u9lqi.eot?t=1573715562327'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1495627_4t3hq6u9lqi.eot?t=1573715562327#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABIcAAsAAAAAIwgAABHLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCHNAqxSKcTATYCJAOBAAtCAAQgBYRtB4MDG8gcM5KTVhdk/5fjxhhQoNprm1JN07xkGjSHjX1lGS4xeFSz559vNfvOO45l+/i3isuiK4gDwxi1QcQPK/u+HkoJz3/7/W+fkev2P+aSSGS8kUQsNkqmswbLVF4CEOANvWf9THtPM+0yWKF4EpJ0ofrR+Ul+Z36D6tx6jTMCKNnFQ8ylcbGG9z+QqjQ/Ty+AgDQf+P+B3+b/uaHCvbRVF8ResGHUw2sFDnnjfd3+xIK1tTAWsqoyWZqr1m3OqlWwShan2n8AMSD9rLQ7/HInkW3lKZPlPj6Gh9AA3ABbDggQzP+cadO7AVKGfywcuZufkv8npZ/89OUfpzlKe5Tj3wGAItDs9mYx6RElHbPruUkydnLKzMoJp+cG/bbX0wX7THsKjRnJNh+sGLfTAVKjaxh5fwgQsdB6cvzkpwIIMJCmBJA7N9NREJgyMB7DhSDkcTo0yFcsgXqnNvCF/Xz5y9YBKKyGPNDla+8lwGGH3PV0lq5qlc/JacCyI9DAemBAbeZGZS1aw+uZHPF0w38zXiy/68SJWK5jjyLmI0CwNFpzrbfPYT9KKqfarZ6AY1PVcD9Bq6A5OEQX1itjN9s9fL+DKz58LxCS0xkkCD6jtlLmJGB+9U94tQUWWmSOxSMjppFSKlQUPcRD3jABkJeoWgSHUIAQHAmQg2MDdHAcgAGOC5CAEwAIOHMAH5wFwAhnKcGIFQA0OHuACBwFMMGJAQJwPgDzcH4ABpy/RHYkAAAL4IIoC0GCIVaPpEFCJhpQLIgWFA9kLigZyHpQYpB9oDQgh0FJQX4AoMTPJErBSA4oFUgtABT8ttqGHsDicweHgUfgf4fwH6L8kCsFg4ivLijoBl/TYzy+7A3yfMH39CgpuLm4Jmm8MvRPSqvU9ZAt3bihHkObGmIdR6uS+aQc2jKKQsORkrsxz9hShrj0z6UwwVOn6eKiSuazNJV5syD1vWZxM98tWtKlbdUYMyYRCYNVvn+5kIv6JAkpDv+1jlwkoVRCSVJX+bS5wepsUldkFd7b0pVbirsd92b3gq2Vg+77cvshoXCL3FHv0tuTLXB8FEeibkWM9ZAUMua5UN7Mq7wZwTxf5ijHGZza3a/muowcF+K2rcCqJeoayB5ndR2Kus4y2iwTEIqrjK3oeEJTajTjx1C5lEGqCpuUG+rDqTp5MFFV9ugj6WSNyHRVeYgZ6YZ6w1HwcPRf7G5Bx5KFYEuk7hdJnZrGwZ/tqFAIiGsJf9GsJ29Y2rnLG401S1xii7Y+oBUM4dWoLBeBBGOisFqJX3FehyRm33lRy/JaLjX5ssf08kO1JaBkNA2MO8Sq4I4lYnm7w6bJVzawra9uCyiFDkUDQGKxOepC11/LCUarilgknCpdB3XC/NdUrnd58w2MYQ63B5jWOj2Z6lQ5nhz4RdTkaU5RnQWaRgwOmuZ/Pq+/ye/xTfmBr7W9k+jn83oKEWfoyHvQfxELoRX3Ayiq8wg1VqDqvG/x5LIjnQNklx5CZLYDYE92LthcWej24qjzJPdH7CtaZxrB1EkVgKjOjRrGoAuMBoQ4r7T+R8H8NetqrHGVXt5bUhZ3L5Er+8vqyl8KCKdKzsbElVrN5C1J7bDpSrDmu+KcsGDGbQY2XEzFxDRRqfa1dRq0Bt4ss4hSDcDMhSwDLiFhHpLmhyH0JvkIanJERqRYfHelPXBI2Q00lfe77lEPwpjmYT6UB8SZy36vmbpwa+d9+KteY/1mcrE+UmVg1BdHHOynjVwdQeDLTPASTOHvcSWIWD89KwihHCuTwEzxFPAopx+Klmg4vnMWetUzMZOyUZ2diZm8p1yHXhEowaCOTQhFT3zGG/coVVk5xmQ+vBSkvM59fKU3g6P5p582juSg+sxK2LyIKas/Jj6kubJAmd3cxKwgYrYR4wV1HdOFhR1MS1ZV3Aoc7RWcdwuqA4+ioe99BNoqAfG4/d7FGj7hvH+OAZnWAGiwa7pgvuE3ML+2lkosFOgdEcjskv0u6GMYCfyOwKz810Lq3CHB3/YerSgYhBEk0cwQdUENy6hYH2Ld2ItIB4VTAV/5TJ/JN/S0wUPHbuOUu1tM+Iw6Zzb4tLfIFpiIz8jlDZw+dpaBVaxWZf4QDiVxA/BNCV7B2eIPDFBaym13lbnZIVTtOnq7rCe7FfRXdrq9Jt9wEwhqTK5r4ZlgpgMEDa7xSLAq1h8O1x4aRhBDOhCDfgC5iGirodfLq4Gq9TBXXg98qq3frtgjfMQM+0tVq1uYrtBgMi2mpjAJbXUq2yplqHKqjuCE5OpYsGTzo4f3nmveOOgf191w5USi2cW28HaCpOqGhWyK/WasVkTSiKLt4UyTwcIxgZQ5s/Hyh1WQVJl+PowXDC5d5CsnJr+To/8SxNGxi0YwBAuQpmpPqhS3rsIIWrFc/zN8RH494gqmNgVBFaa6XOFPZ9u530ReE6wU7RWR2F3r/zfEV0X6C/rBcL64qrcUs/tsiTaCHyDPi7kXwb+mHCW6VKLL1Th6V8kznmh8XBoSmtbQ6q0ecPj2c3jjbj88cqcuyxEiBoQ1MaY6GOUhQ9ad54Mo45ICoAhA631Hpb99XYHd7iMJXn3kK73Em7nYlx5ojbnaItz7KPLa48nEJNnAqVXDEZcdmh2tXsZWWtOJMwcBtrX6/2/P7qywf/FtLTGt91sfT8qtQ9lePceLs3vj9nUcb+NDs1Nn/ur+jBBN1LiWkDeXpnUQALRur5QAQrqXVZb2MlRKpYfTsaDrLTWGHu5tAGPYZNCPkcm7cwIKfL8vRROl0F3smODXsjLMbCgyLsGFwbEVm5uPhC2Ls9/dUnJPJYpUnH/Zexjo5E7eZcQkPPDOsMFEdOuLAt+AnG6ZXD8mPqtNl2bPPuGkdbqwZcsYJ7ZuvXBt6cScORBk2KQKVhXnaEI0gjd4O9TIoEQmpyAtGS8bv2HJTHrx+iWFMg49c4wiVbHYHIAsPQ4z+u9ZpcQq3r2qxvV4w6tilTjWY4mLJZNx2GYntd0GIWe2ojevY5uwjQaRtqyGbcQ2Qb4gwK5Xt2KiLfrOHPpn8eeec2aLThXH0woVMw7IsM+P/9bVt6c1EK4EwObQKDxsevmy/IJPgKMokyxVOukUz1Itglhhlt21q8/279yYjPBhtjAdbaaNXORI8Jea46m2nGQniHe7ov8D93iW4PHpAdONByKmf7NRwjpZ6rbQ1Uqb0hjmWBNTkE0e189TuGPyyA3vwCFieoVecML55OmKC84zqZqtm7ZsP+lc6Hwb/CTh1yTHsBPYcYsYNVq0Z0+RguiCGOoYi+NOmx9bpkWzFi7KRhPGvaBZ6o4Zw2JKT1zLTCDuMuuYdy1mW4BPHy5dKN1N5/H3m1w4mZN8U5rCM9QDaqnSR8il4A6FZiqkUvVAmjocWptsP1irzZXOnsPpdXJ8ZsmXp/dK5Pi64bQnR+mSYdPPqA5YyOzL253Xx1zoD8bSdpyicAXbHSFwvVm+8OpVvkqk4l82A+aG0UheHuLB0UsdjWYkLxdRXRuzkERqQ7THVf+ojrMWubdMTEeScodou8isCfMD1xcc+Fk6RCWRI0ns9POPp/CE7Qro0Kc+tr1O1aaY/rthC7+AfzMMkKAeeN8pHU7GTUVXOYnMr1ovwK9tjJ3Gi5NHk3vwR/ew7diOlnv7sD3Y4zutx/laF2WmYD59x5tVKNmIHWJP8wcogcdEjwj69ojblgrVju/nsA22O8lyGax11krZyLPn2dEEwXdBkowz1T6LI6vgOVxx4FXsbTSQ7E0nsQ9wmLokGoIj/eqCIqIM++kImq7zC41shAwLNq+xpZGyF7Jb2HwWfJqPYsN8wxZCQsiG84/YmSLXr1NIUGxQkR2SXUPLLNotyoaekgCAX9WB4TvrZHXDd/1NFGtc4z9IdtXL7g3dCcHi8eLEI9OfO10dvlOZnVqVWj46s4XhKEgppddaWo8RYgbu8jVx83K2D9m5YNTxFIEjBMJW7r6pNWsSfbkPvebrs2pihux4kyrmhP8Yjw0hPJ8rP2pa7LgMyQY/cThn14p0Bvnh/xzSxC3BPDXVS56bK/eaM+KpCWk47UwyzM62P/8eLs4KtIC/g+hhFjJ7LHuIwmtF+l/HFpaXL0AXog0RVhB5AZ6iBvCoKJqOjsLx6GiajorGgf8pkT9TkNla10Amor27e5BZkAk55GG2til3LLswpJA9dih7DTlNWvbRkFH+kJzJoUMo1vgmt8ZClqN30s30GuHtz5/lWc9nXCqs2bz5jriLw62lwG3DxC7JPc97ku7knV717cIcGwZa0Jzcvx41Y+TSMIy2bGSMo0+FPQ9t9AvmyXZ3NYud2LymDo6Q9fOBNHVd/EQKmjqbBKyU5gbZHSFo7mwWsNnSPvAsjY0tsgGbJbEEL1FTivZiKwdOiHBobiaiNZc1Nmk2/aVpjRMeUQKFM23MHHU3dE6mtouLivGIBem2mbNXUpHZjC3a6Vv7l9zU2JbaJNpYTxilSkE22TsOtba3dnN0E1KkvYahjntvdEcQg0MfcpfQ6MFO1jz7cz8j7vFOClfTmnJJmqR8KlYLwXLmY4XbxHG5h/uctlyDLOxCWZnGCZw02I/3KC9SIBLQwQlQ0McAnUSBFJV7fM3PQhYsRDPJd9Z/WUhCtiZRwxCNRmJZXgOauWAhUJg8b0tZ2XJTxYBDFAJ6RorPxnRF+kafFAborSmHAYXp8rKyLfmAZLL2swjaYpwFHfFMHl+M04sYlVWesbTttsS10Tb8OtDZ5PW045OuHS1KFR1asuz5izrX7levl808xJ9UtPXmNZDy7e7MKgqLrK5hkXQ15InuFJekJvViKqVShfUmpa4wT4FVaREHqCO9JcV8LSxS708N04eTkpK7JcVLJ3qxzeO7/xrvNDTeNfbvMQQrNiSpt9/YV6JFqea7s5bGOMYNydbtYEsr3Y9zVsMDSVV18jR9zF+YZ7HuLteYIelMPGh1pLUm52DGdd5i23DRbaG/8VzaEwxpM3N6FiewdgntoAHvwBC6Q8LHOnAeMZx4R3SQdBjZQTT0StJO88Udrjy6PRAlhnOVdg/EwsTLquhsO464doj5gCjDovoDWElsjnkmUEjy1KlKBZGFEFQCaVF4MP84/Hu7RDq2wjo+Pn/e6WfG6KfL++8R7HtxV1QjOk8B71CgVS0pMX/VdFd4W3QZXkPXmfP8Bmqg/jb5kNvJ5xVy5EiOBkm2Uin2xpjs5OYHzex2qVBC6m/G9wAA2E/0BoCxXjp6j0X7iNE8/So6D9oTdD1MHQOWB08BQtR4HSUxvd4GLDzciNVHua6xE9uBuZqnb9CCTZ1epgIbVWnQ6zB+UnJA1OmV2jF55WYPsIlZ6bPR32ykAr2sf0cXBz3PiCUGDv4s9DKVSev1Lpm9svebfUMwwWdrpZob8oVB/tgvbf/kPEmKMX6ZFeBQjBJgAPp9jsD3eBMH4xeOgYOfZFL47k+gJzR+sYuFyaOg8quvWGQMIFKOgW/0hZU/SWkDe/9cKO2VV3wLeC2w3GN6r+et2HbeEzjER9Z57jxWY01SCKz1NeNF4ZtXMt94rfDjMb1/eavzz3uKmo9cuXQYW/nm4MSgBRIV3RTGVJrKloG68QvYkGs2+tm0D2CPpWq33lprnqEETqIVf7Z7EaMMU6GeZg8GeU6qYkohlrUTqY6bjeE9wTqmojZwDAOaAAklcjsvj2KkZC4sBrYf/wJYQU5jj73ul/8AmIc3ruysbQN4nuUy0F6LsqV3Zu2JpBmK7shIQXmSNJArlUSp+PWlQEysuQhm5WgjHc0EldfZK8WYuQiIkPYXV6LFiBVPfAkk/MLyLImkkkkuxXK13mx3+8PxNfkJ5i+48KKLL9EcdRsLbaEnFAyxpW3eKEzb8ZtXmpkuK6FqvzgVRSSCzb5zl4IP1EuCV7qgd72Q5j1Qq0gKd2KwdwGbKepW8MAdjyAdu26CpU102fPOZ0mFZTfslp0L4N3hRIxM7Ki0V19Zq57fOrvOfbwF6NhyPTcxrJBZw6uYqlvHOwo3GF5Ea1bvVhE6SaIYmcbcUJwi9ItkMiTzT8fsKOQC2bbvGihzwEOfIaTXagAAAA==') format('woff2'),
  url('//at.alicdn.com/t/font_1495627_4t3hq6u9lqi.woff?t=1573715562327') format('woff'),
  url('//at.alicdn.com/t/font_1495627_4t3hq6u9lqi.ttf?t=1573715562327') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1495627_4t3hq6u9lqi.svg?t=1573715562327#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xia:before {
  content: "\e612";
}

.icon-image:before {
  content: "\e7bc";
}

.icon-touxiang:before {
  content: "\e616";
}

.icon-you:before {
  content: "\e636";
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

.icon-dianhua1:before {
  content: "\e624";
}

.icon-xiangzuo:before {
  content: "\e601";
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

.icon-user:before {
  content: "\e6a6";
}

.icon-xiaoxi:before {
  content: "\e67e";
}

.icon-dingdan:before {
  content: "\e60b";
}

.icon-shangpin:before {
  content: "\e74e";
}

.icon-dianhua:before {
  content: "\e6f9";
}

.icon-weizhi:before {
  content: "\e76e";
}

.icon-tianchongxing-:before {
  content: "\e637";
}

.icon-dingdan1:before {
  content: "\e6a1";
}

.icon-ziyuan:before {
  content: "\e615";
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


</style>

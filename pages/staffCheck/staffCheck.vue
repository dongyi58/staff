<template>
	<view class="wrap check_wrap">
		<view class="status_bar index_status_bar"></view>
		<customnav  @showhelp="showhelp" :isSearch="false" navtitle="打卡" :isRightText="true" :ismsg="false" rightText="帮助" />
		<view class="check_content">
			<view class="memo">
				<textarea class="memoArea"
				 v-model="memoText" placeholder="在这里添加备注"
				 placeholder-style="color:#999;font-size:12px"
				  />
			</view>
			<view class="upload_pic">
				<view class="upload_set">
					<p>打卡前请先拍摄商品陈列图片(不少于一张)</p>
					<span class="edit" @click="editUpload" v-show="showEdit">{{editText}}</span>
				</view>
				
				<ul>
					<li v-for="(item,idx) of chooseImgList" :key="idx" @click="zoomImg(idx)">
						<i class="iconfont icon-yingyong- delBtn"
						    v-if="showDel"
						    @click.stop="delUpload(idx)"></i>
						<image class="choosedImg" :src="item" mode="aspectFill"></image>
					</li>
					<li @click="openCamera" v-show="!maxUpload" class="addBtn">
						<i class="iconfont icon-tianjiajiahaowubiankuang"></i>
					</li>
					<li class="holderli"></li>
				</ul>
				
			</view>
			
			<view class="checkBtn">
				
						<i class="iconfont icon-icon-test btn_cover" 
						:class="[isActive ? 'btn_cover_active' : '']"></i>
						<view class="btn_front_box" @click="checkIn">
							<i class="iconfont icon-icon-test btn_front" 
							:class="[isActive ? 'btn_front_active' : '']"></i>
							<i class="iconfont icon-duigou checkSucess" v-if="checkSucess"></i>
							<span class="checkText">{{checkText}}</span>
							<span class="checkTime">{{showdate}}</span>
						</view>
					
			</view>
		</view>
		<view class="staffinfo">
			
			<view class="s_left">
					<view class="simgBox">
						<image class="simg" :src="staffInfo.img" mode="aspectFill" ></image>
					</view>
					<view class="s_info">
						<text class="s_name">{{staffInfo.name}}</text>
						<text class="s_com">{{staffInfo.supplier}}</text>
					</view>
			</view>
			<view class="s_right">
				<text class="nowtime">{{currentDate}}</text> 
			</view>
				
		</view>
		<!-- 帮助弹窗 -->
		<popup ref="popup" type="center"  :popstyle="{width:'80%',overflow:'hidden'}">
					<view class="helpWrap">
						<h4>常见问题 <i class="iconfont icon-ziyuan" @click="closeHelp"></i></h4>
						<view class="helpContent">
								<view class="hc_head">打卡步骤</view>
								<view class="hc_text">
									1.确认到店后，拍摄小店内商品或店铺照片<br>
									2.至少上传一张商品图片后，才可进行打卡<br>
									3.备注可选填
								</view>
								<view class="hc_head">打卡说明</view>
								<view class="hc_text">
									业务员必须上传相应的商品或店铺照片后方可进行打卡。
								</view>
						</view>
					</view>
		 </popup>
	</view>
	
</template>

<script>
	import customnav from '@/components/customnav.vue'
	//popup弹出层
	import popup from'@/components/uni-popup/uni-popup.vue'
	export default {
		components:{customnav,popup},
		data() {
			return {
				 chooseImgList:[],
				 maxUpload:false,
				 memoText:'',
				 showdel:false,
				 isActive:false,
				 showdate:'',
				 currentDate:'',
				 checkText:'确认打卡',
				 checkSucess:false,
				 editText:'编辑',
				 showDel:false,
				 showEdit:false,
			};
		},
		computed:{
			staffInfo(){
				return this.$store.state.staffInfo
			}
		},
		watch:{
			chooseImgList(n){
				//监听是否上传商品图片，上传后显示编辑按钮并激活打卡按钮
				if(n.length > 0){
					 this.showEdit = true
					 this.isActive = true
					
				}else{
				//反之初始化	
					this.showEdit = false //隐藏编辑按钮
					this.isActive = false //打卡按钮禁用
					this.maxUpload = false//显示添加图片按钮
					this.showDel=false //隐藏删除图片按钮
					this.editText = '编辑' //恢复编辑文字
				}
			}
		},
		mounted() {
			this.getCurrentTime()
			this.getCurrentDate()
			console.log(this.staffInfo)
		
		},
		methods:{
			//点击编辑显示删除按钮
			editUpload(){
				this.showDel = !this.showDel
				//maxUpload 达到最大上传量9张 隐藏上传按钮
				//此处用作点击编辑后隐藏添加图片按钮
				//在两个地方用了这个变量，判断一下防止上传满9张后，已经隐藏了的上传按钮，被此处改变状态，再次显示
				if(this.chooseImgList.length != 9){
					this.maxUpload = !this.maxUpload
				}
				
				this.showDel ? this.editText = '完成' : this.editText = '编辑'
			},
			//删除图片
			delUpload(idx){
				console.log(this.chooseImgList.length)
				let _this = this
				if(this.chooseImgList.length == 1){
					uni.showModal({
						title:'',
						content:"至少要上传一张商品图片才能进行打卡，确定要删除吗",
						success(res){
							if(res.confirm){
								
								_this.chooseImgList.splice(idx,1)
							}
						}
					})
				}else{
					this.chooseImgList.splice(idx,1)
				}
				
			},
			//打卡
			checkIn(){
				if(!this.isActive){
					uni.showToast({
						icon:'none',
						title:'请至少上传一张商品图片'
					})
					return
				}
				this.checkSucess = true
				this.checkText = '打卡成功'
			},
			showhelp(flag){
				if(flag){
					this.$refs.popup.open()
				}
			},
			closeHelp(){
				this.$refs.popup.close()
			},
			//获取当前时间
			getCurrentTime(){
				 let myDate = new Date();
				  let h = myDate.getHours();
				  let m =myDate.getMinutes();
				  let s =myDate.getSeconds();
				  h = this.formatTime(h)
				  m = this.formatTime(m)
				  s = this.formatTime(s)
				  this.showdate = h+':'+m+':'+s
				  setTimeout(this.getCurrentTime,1000)
			},
			formatTime(i){
				if(i < 10){
					return '0'+i;
				}else{
					return i;
				}
			},
			//照相上传图片
			openCamera(){
					let _this = this
					uni.chooseImage({
					    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['camera'], //从相册选择
					    success: function (res) {
							// JSON.stringify()
					        // console.log(res);
							_this.uploadPic(res.tempFiles)
							
							// console.log(res.tempFiles)
					    }
					});
				
				
			},
			//图片预览
			uploadPic(file){
				
				file.map((item,idx)=>{
					//上传最大数限制9张
					if(idx <= 8){
						this.chooseImgList.push(item.path)
					}
				})
				
				this.chooseImgList.length == 9 ? this.maxUpload = true : this.maxUpload = false 
			},
			//图片放大
			zoomImg(idx){
				let _this = this
				uni.previewImage({
					urls:this.chooseImgList,
					indicator:"default",
					current:idx
				})
				
			},
			getCurrentDate(){
				var myDate = new Date();
				var year = myDate.getFullYear(); //年
				var month = myDate.getMonth() + 1; //月
				var day = myDate.getDate(); //日
				var days = myDate.getDay();
				 switch(days) {
				
				        case 1:
								days = '星期一';
								break;
						case 2:
								 days = '星期二';
								 break;
						case 3:
								 days = '星期三';
								 break;
						case 4:
								days = '星期四';
								 break;
						 case 5:
								 days = '星期五';
								 break;
						 case 6:
								days = '星期六';
								 break;
						 case 0:
								days = '星期日';
								break;
						
				
				
				      }
				
				      var str = year + "年" + month + "月" + day + "日  " + days;
						this.currentDate = str
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/style.scss';
	.uni-popup__wrapper-box{
		width:80%;
	}
	.helpWrap{
		font-size:14px;
		h4{
			position:relative;
			font-size:14px;
			text-align: center;
			i{
				position:absolute;
				top:0;
				right:0;
			}
		}
		.hc_head{
			color:#147AED;
			padding:5px 0;
			border-bottom:1px solid #f8f8f8;
			margin-top:1rem;
		}
		.hc_text{
			color:#999;
		}
	}
	.check_content{
		padding:1.5rem;
		overflow-y:scroll;
		height:calc(100vh - 45px - var(--status-bar-height))
	}
	.upload_pic{
		.upload_set{
			display: flex;
			justify-content: space-between;
			align-items: center;
			p{
				color:#999;
				padding:10px 0;
			}
			span{
				padding:3px 10px;
				border:1px solid #1A6FE8;
				border-radius:4px;
				text-align:center;
				color:#1A6FE8;
			}
		}
		
		ul{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.addBtn{
				i{
					position:absolute;
					top:50%;
					left:50%;
					transform: translate(-50%,-50%);
					font-size:3em;
					color:#BBBBBB
				}
				
			}
			li{
				position:relative;
				width:32%;
				background:#ECECEC;
				text-align: center;
				height:0;
				padding-bottom:32%;
				margin-bottom:2%;
				.choosedImg{
					position:absolute;
					left:0;
					width:100%;
					height:100%;
				}
				
				.delBtn{
					    z-index: 99;
					    position: absolute;
					    top: 5px;
					    right: 5px;
					    width: 15px;
					    height: 15px;
					    border-radius: 50%;
					    background: #fff;
				}
				
			
			}
		
		}
		
	}
	.memoArea{
		height:80px;
	}
	.checkBtn{
		position:relative;
		height:calc(100vh - 150px - 80px - 144px - var(--status-bar-height) - 3rem);
		margin-top:1rem;
		.btn_cover{
			position:absolute;
			left:50%;
			top:35%;
			transform: translate(-50%,-50%);
			font-size:15em;
			color:#e7e7e7;
		}
		.btn_front_box{
			z-index:99;
			position: absolute;
			left:50%;
			top:35%;
			transform: translate(-50%,-50%);
			.btn_front{
				font-size:13em;
				color:#ABABAB
			}
			span{
				position:absolute;
				left:50%;
				font-size:16px;
				width:100px;
				text-align:center;
				color:#fff;
				
			}
			.checkText{
				top:40%;
				transform: translate(-50%,-40%);
			}
			.checkTime{
				top:50%;
				transform: translate(-50%,-50%);
				margin-top:10px;
			}
			.checkSucess{
				position:absolute;
				left:50%;
				top:20%;
				font-size:2em;
				transform: translate(-50%,-20%);
				color:#fff;
			}
		}
	}
	.staffinfo{
		z-index:999;
		position:fixed;
		width:100%;
		bottom:0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:5px 10px;
		background-color:#fff;
	}
	.s_left{
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
	.simg{
		width:50px;
		height:50px;
		border-radius:50%;
		border-width:1px;
		border-style:solid;
		border-color:#489cfb;
	
	}
	.s_info{
		display: flex;
		flex-direction: column;
		margin-left:10px;
	}
	.s_name{
		font-size:16px;
	}
	.s_com{
		font-size:12px;
		color:#999;
		margin-top:5px;
	}
	.nowtime{
		font-size:14px
	}
	.btn_cover_active{
		color:#dde3f7 !important
	}
	.btn_front_box{
		background:linear-gradient(to bottom right, #7D9DFA, #4572F5);
		-webkit-background-clip:text;
	}
	.btn_front_active{
		color:transparent !important
	}
	.holderli{
		background:transparent !important;
		padding-bottom: 0 !important;
	}
</style>

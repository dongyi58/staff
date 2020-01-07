<template>
	<view class="personal_wrap wrap">
		
		  <view class="skuWrap">
			  
			  <view class="sku_parent" v-for="(skuParent,idx) of skudata.view" :key="idx">
				  <h1>{{skuParent.skuname}}</h1> 
				  <ul class="skuChild">
				  	<li
					  @click="skuChildClick(idx,scidx,skuChild)"
					  v-for="(skuChild,scidx) of skuParent.item" :key="scidx"
					  :class="[skuChild.isShow ? '' : 'disabledSku',selectIdx[idx] == scidx ? 'activeSku' : '']"
					  >
					 {{skuChild.value}}</li>
				  </ul>
			  </view>
			  
		  </view>
	</view>
	
</template>





	
<script>
	
	export default {
		
		data() {
			return {
				
				childIdx:-1,
				parentIdx:-1,
				
				
				skudata:{
						"view":[{
								"skuname":'颜色',
								"item":[
									{
										value:"白色"
									},
									{
										value:"蓝色"
									},
									{
										value:"黑色"
									}
								]
							}
							,{
								"skuname":'尺寸',
								"item":[
									{
										value:"35"
									},
									{
										value:"36"
									},
									{
										value:"37"
									}
								]
							}
						],
						"checkSku":[
							{"sku":"蓝色,35","stock":0,"is_use":1},
							{"sku":"蓝色,36","stock":0,"is_use":1},
							{"sku":"蓝色,37","stock":2,"is_use":1},
							{"sku":"白色,35","stock":0,"is_use":1},
							{"sku":"白色,36","stock":5,"is_use":1},
							{"sku":"白色,37","stock":5,"is_use":1},
							{"sku":"黑色,35","stock":5,"is_use":1},
							{"sku":"黑色,36","stock":0,"is_use":1},
							{"sku":"黑色,37","stock":5,"is_use":1}
						 ],
					},
					selectIdx:[],
					selectArr:[],
					skuInfo:[],
					initSku:'',
					init:true
			};
		},
		
		onLoad() {
            //将要比对的规格组合存储键值对格式  
            //示例：["蓝色，35"：{"sku":"蓝色,35","stock":0,"is_use":1}，"蓝色，36"：{}....]
			for (var i in this.skudata.checkSku) {
				this.skuInfo[this.skudata.checkSku[i].sku] = this.skudata.checkSku[i]
				
			}
			let initArr=[]
			//默认选中一组有库存并且状态为上架的规格，此处获取符合的规格组合值
			for (var j in this.skudata.checkSku){
				
				if(this.skudata.checkSku[j].stock != 0 && this.skudata.checkSku[j].is_use != 0){
                    this.initSku = this.skudata.checkSku[j].sku //
                     //将符合规则的值转为数组
                      initArr = this.initSku.split(',')
                     //找到后跳出循环，只取一组
					break
				}
            }
           
            //默认将所有规格值设置成可选状态
			for (var k in this.skudata.view){
				this.skudata.view[k].item.map(vitem=>{
						this.$set(vitem,'isShow',true)
				})
				
            }
            //调用规格状态监测方法
			this.checkIsShow(initArr)	
		
		},
		methods:{
			//规格值点击状态切换
			skuChildClick(pidx,cidx,item){

				if(cidx != this.selectIdx[pidx]){
					this.$set(this.selectIdx,pidx,cidx)  //存储选中的下标
					this.$set(this.selectArr,pidx,item.value) //存储选中的sku值
				}else{
					this.$set(this.selectIdx,pidx,-1)
					this.$set(this.selectArr,pidx,'')
				}
					// console.log(this.selectIdx,this.selectArr)
					this.checkIsShow()
			},
			
			checkIsShow(initArr){

					let result=[] 
					
					for (var i in this.skudata.view) { 
                        
                        //根据规格种类的下标来存储选中的值，如果不存在，就填充为空值
                        //有几种规格，比如两个规格种类[颜色，尺寸]，，对应的值[蓝色，白色，黑色],[35,36,37]
                        //一个完整的规格组合[蓝色，35]
                        //如果只点击了颜色下面的蓝色结果是[蓝色]，填充为[蓝色，'']
                        //填充空值是为了判断当前组合未完成，直接在checkStock返回可点击状态 true
					   result[i] = this.selectArr[i] ? this.selectArr[i] : '' 
						
                    }
                    
                    //循环规格种类时先循环第一种规格下面的规格值
                    //循环规格种类[颜色，尺码]
					this.skudata.view.map((parentItem,idx)=>{
                            //存储第一次点击的值
							let clickVal = result[idx] //[蓝色，'']
                            
                            //循环规格值 
							parentItem.item.map((childItem,childIdx)=>{

								//初始化时默认选中
								if(this.init){
									//利用存储的规格组合跟每一种规格下面的规格值比对，比对成功后将该下标的规格值设置为选中状态
									if(initArr[idx] == childItem.value){
										this.selectIdx[idx] = childIdx
									}
									
								}else{
                                    //非初始化，
                                    
                                    //用户点击一个规格值时，循环出每种规格可能的组合
                                  
									result[idx] = childItem.value //覆盖result的值，
									this.$set(childItem,'isShow',this.checkStock(result)) //根据checkStock返回的状态设置当前规格值是否可选
								}
								 
                            })
                            //每次规格值循环完，重置为第一次点击的值
							result[idx] = clickVal
                    })

                    //取消初始化状态，只有第一次进来时启用初始化
					this.init =false
			},
			checkStock(result){
				
				for (var i in result) {
				    if (result[i] == '') {
				        return true; //如果数组里有为空的值，那直接返回true
				    }
				}
				 //无空值下，判断是否有库存和是否启用，
				 return this.skuInfo[result].stock == 0 ? false : true;
			},
			
		}
	}
</script>

<style lang="scss">
// sku测试
 
 .skuChild{
     display: flex;
     li{
         width:20%;
         border:1px solid #f3f3f3;
         background:#fff;
         border-radius:5px;
         text-align:center;
         padding:3px 0;
     }
     .activeSku{
         background:#1A6FE8;
         color:#fff;
     }
     .disabledSku{
         background-color: #ccc;
             opacity: 0.4;
             color: #000;
             pointer-events: none;
     }
 }
</style>

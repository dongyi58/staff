// 全局请求配置
const domain = 'http://dsales.ddddian.com'
 const request = function(options) {
			uni.showLoading({
				title:'加载中..'
			})
			//获取缓存中的token和手机号
    		const token = uni.getStorageSync('token');
			const phone = uni.getStorageSync('phone');
			
			if(token && phone){
				//判断如果设置了data就添加token
				//如果没有必须new一个data对象进行添加
				if(options.data){
					options.data.token = token;
					options.data.phone = phone;
				}else{
					options.data ={}
					options.data.token = token;
					options.data.phone = phone;
				}
			}
			return new Promise((resolve,reject)=>{
					uni.request({
						url:domain + options.url,
						data:options.data,
						method:options.method,
						header:{'Content-type': 'application/x-www-form-urlencoded'},
						success(res){
							uni.hideLoading();
							if(res.data.code == 2){
								uni.showToast({
									icon:"none",
								    title:'登陆过期,请重新登录',
								    duration: 2000,
									complete(){
										setTimeout(()=>{
											uni.navigateTo({
									                url: '/pages/login/login' 
									            });
										},2000)
										
									}
								})
							}else{
								resolve(res)
							}
							
						},
						fail(err){
							reject(err)
							uni.showToast({
								icon:"none",
							    title:'请求超时',
							    duration: 2000
							});
						}
					})
			})
	
  }
export default request;
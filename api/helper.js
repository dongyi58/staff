// 验证
export const validate={
	// 手机验证码模式
	phoneRegObj(){
		return /^1[3456789]\d{9}$/;
	},
	// 身份证验证
	idCardRegObj(){
		return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	},
	// 验证手机号码是否有效
	verifyPhone(phone){
		// 验证手机号是否为空
		if(!phone){
			uni.showToast({
				icon:'none',
				title:"请输入手机号码!"
			})
			return false;
		}else if(!/^1[3456789]\d{9}$/.test(phone)){ //验证手机号是否有效
			uni.showToast({
				icon:'none',
				title:'请输入有效的手机号!'
			})
			return false;
		}
			
		return true;
	},
	
	/// 设置验证码点击倒计时内容以及按钮是状态
	///obj 按钮文本变量与是否禁用按钮变量所属的对象
	///time 倒计时时间(秒)
	setVerifyCodeBtn(obj,time=30){
		let timer=setInterval(()=>{
			// 当倒计时结束时
			if(time==0){
				clearInterval(timer); //终止计时器
				obj.title="获取验证码";
				obj.disabled=false; //启用获取验证码按钮
			}else{	
				obj.title=`${time}秒后重试`;
				obj.disabled=true; //禁用获取验证码按钮
				time--;
			}
		},1000); 
		return timer;
	},
	// 获取验证码并在参数二不为空时候处理获取验证码按钮内容与状态
	//phone 手机号
	//codeBtnBelongObj 获取验证码按钮所属对象，为空时不做处理
	//time 设置获取验证码按钮的的倒计时，参数二为空时无效
	getVerifyCode(phone,codeBtnBelongObj=null,time){
		
		if(validate.verifyPhone(phone)){ //验证手机号是否有效
		
			// 当获取验证码按钮所属对象不为空时,处理按钮样式
			if(codeBtnBelongObj!=null){
				if(time){validate.setVerifyCodeBtn(codeBtnBelongObj,time);}//设置按钮文本与倒计时
				else{validate.setVerifyCodeBtn(codeBtnBelongObj)}
			}
			
			
			//请求短信接口，获取验证码
			SMS.sendSMSCode(phone);
		}else{
			uni.showToast({
				icon:'none',
				title:'手机号无效!'
			})
		}
	},
	
	// 验证银行卡(获取银行卡类型,所属银行,判断银行卡是否正确)
	getBankCardInfo(cardNo,cardBinCheck=true){
		return new Promise((solve,reject)=>{
			uni.request({
				url:'https://ccdcapi.alipay.com/validateAndCacheCardInfo.json',
				data:{
					cardNo:cardNo,
					cardBinCheck:cardBinCheck
				},
				success(res){
					solve(res.data);
				},
				fail(err){
					reject(err);
				}
			})
		})
	}
}

// 短信发送
export const SMS={
	//获取短信验证码
	sendSMSCode(phone){
		console.log("发送短信验证码!");
	}
}

// 
export const format={
	//隐藏部分电话号码
   encryptPhone(phone){ 
		return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
	},
	encryptCardAccount(account){
		return account.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2 ")
	},
	///格式化日期
	//dateStr 日期字符
	//separator 分隔符
	formatDate(dateStr,separator='.'){
		if(dateStr){
			dateStr=dateStr.replace(/-/g,'/');//以'-'连接的日期需要将转 //.replace(' ','T'); //兼容iOS
			let tempDate=new Date(dateStr);
			dateStr=`${tempDate.getFullYear()}${separator}${tempDate.getMonth()+1}${separator}${tempDate.getDate()}`
		}
		
		return dateStr;
	},
	//处理商品价格
	getProPrice(item,separator='-'){
		let priceStr='';

		// 当游客状态时,返回的价格是字符串'?',此时需要特殊处理
		let whole_price=(typeof item.wholesale_price)=='number'?item.wholesale_price.toFixed(2):item.wholesale_price;
		let single_price=(typeof item.retail_price)=='number'?item.retail_price.toFixed(2):item.retail_price;
		switch(item.sale_type){
			case '1': //整件
				priceStr=whole_price;
			break;
			case '2': //单品
				priceStr=single_price;
			break;
			case '3': //混合
				priceStr=single_price+separator+whole_price;
			break;
		}
		return priceStr;
	}
}

export const timer={
	setTimer(exeCount,callback,milliSec=1000){
		let timer=setInterval(()=>{
			// 当倒计时结束时
			if(exeCount==0){
				clearInterval(timer); //终止计时器
				callback();
			}else{	
				exeCount--;
			}
		},milliSec); 
		
		return timer;
	}
}

export const objHandle={
	// 通过对象的键获取其值的集合
	getKeyValues(objs){
		
		let	values=Object.keys(objs).map((key)=>{
			return objs[key];
		})
		
		return values;
	},
	// 通过目标容器的数据类型处理(添加)上传图片 1.数组显示添加多张 2.字符串显示一张(替换)
	handleUpFileByVesType(tempFilePaths,aimVes){
		
		if(typeof aimVes =='string'){ // 一张图片
			 aimVes=tempFilePaths[0];
			 
		}else if(aimVes instanceof Array){ // 多张图片
			tempFilePaths.forEach((item)=>{
				aimVes.push(item);
			})
		}
			
		return aimVes;
	}
}
//页面防抖
// default {
//     debounce(fn, delay = 100) {   //默认300毫秒
//         var timer;
//         return function() {
//             var args = arguments;
//             if(timer) {
//                 clearTimeout(timer);
//             }
//             timer = setTimeout(() => {
//                 fn.apply(this, args);   // this 指向vue
//             }, delay);
//         };
//     }
// }

export default{
	validate,
	SMS,
	format,
	objHandle
}
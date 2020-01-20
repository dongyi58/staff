<template>
	<view>
		<view class="status_bar index_status_bar"></view>
		<customnav
		 :ismsg="false" 
		 :isSearch="false" 
		 :midtitle="true"
		 navtitle="用户协议"
		 :cancletext="false"
		 :focus="false"
		 />
		 
		<scroll-view scroll-y="true" class="listview">
			<view class="contentView">
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">为了更好地为您提供服务，请您仔细阅读《用户注册协议》（以下简称“本协议”）。在您开始使用“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件及相关服务之前，请您务必认真阅读并充分理解本协议，特别是涉及免除或者限制责任的条款、权利许可和信息使用的条款、同意开通和使用特殊单项服务的条款、法律适用和争议解决条款等。其中，免除或者限制责任条款等重要内容将以加粗形式提示您注意，您应重点阅读。</span><span
				        style="font-family:宋体; font-size:12.5pt">如您未满18周岁，请您在法定监护人陪同下仔细阅读并充分理解本协议，并征得法定监护人的同意后使用平台提供的服务</span><span
				        style="font-family:宋体; font-size:12.5pt">。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示您已充分阅读、理解并接受本协议的全部内容，</span><span
				        style="font-family:宋体; font-size:12.5pt">承诺作为本协议的一方当事人接受协议的约束</span><span
				        style="font-family:宋体; font-size:12.5pt">。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您</span><span style="font-family:宋体; font-size:12.5pt">应自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">一、定义</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">本协议是您与</span><span
				        style="font-family:宋体; font-size:12.5pt">平台的运营商</span><span style="font-family:宋体; font-size:12.5pt">成都店店店电子商务有限公司及其关联公司（在本协议中简称为“公司”）</span><span
				        style="font-family:宋体; font-size:12.5pt">之间就您下载、安装、注册、登录、使用“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span
				        style="font-family:宋体; font-size:12.5pt">”软件，并获得“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件提供的相关服务所订立的协议。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">“用户”指所有直接或间接获取和使用“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件及相关服务的使用者，包括自然人、法人</span><span
				        style="font-family:宋体; font-size:12.5pt">或</span><span style="font-family:宋体; font-size:12.5pt">其他组织等。在本协议中称为“用户”或称“您”。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span
				        style="font-family:宋体; font-size:12.5pt">”</span><span
				        style="font-family:宋体; font-size:12.5pt">软件</span><span style="font-family:宋体; font-size:12.5pt">指由公司合法拥有并运营的、标注名称为“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span
				        style="font-family:宋体; font-size:12.5pt">”的</span><span
				        style="font-family:宋体; font-size:12.5pt">平台和</span><span style="font-family:宋体; font-size:12.5pt">客户端应用程序，向用户</span><span
				        style="font-family:宋体; font-size:12.5pt">提供</span><span style="font-family:宋体; font-size:12.5pt">商户信息、点评信息、消费信息、优惠信息、</span><span
				        style="font-family:宋体; font-size:12.5pt">短信提示</span><span
				        style="font-family:宋体; font-size:12.5pt">等网络服务</span><span style="font-family:宋体; font-size:12.5pt">。</span><span
				        style="font-family:宋体; font-size:12.5pt">在本协议中称为“平台”或“软件”。</span></p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">二、本协议及条款的修改</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">由于互联网行业高速发展，您与我方签署的本协议列明的条款并不能完整罗列并覆盖您与我方所有权利与义务，现有的约定也不能保证完全符合未来发展的需求。</span><span
				        style="font-family:宋体; font-size:12.5pt">因此，</span><span
				        style="font-family:宋体; font-size:12.5pt">本</span><span
				        style="font-family:宋体; font-size:12.5pt">协议</span><span
				        style="font-family:宋体; font-size:12.5pt">的内容还应包括</span><span
				        style="font-family:宋体; font-size:12.5pt">所有</span><span
				        style="font-family:宋体; font-size:12.5pt">平台</span><span
				        style="font-family:宋体; font-size:12.5pt">已经发布的</span><span style="font-family:宋体; font-size:12.5pt">、</span><span
				        style="font-family:宋体; font-size:12.5pt">或未来可能发布</span><span
				        style="font-family:宋体; font-size:12.5pt">和</span><span
				        style="font-family:宋体; font-size:12.5pt">更新的各类规则。所有规则</span><span style="font-family:宋体; font-size:12.5pt">一经发布</span><span
				        style="font-family:宋体; font-size:12.5pt">并以适当的方式送达</span><span
				        style="font-family:宋体; font-size:12.5pt">后</span><span
				        style="font-family:宋体; font-size:12.5pt">（</span><span
				        style="font-family:宋体; font-size:12.5pt">平台</span><span
				        style="font-family:宋体; font-size:12.5pt">公布、系统通知等），</span><span
				        style="font-family:宋体; font-size:12.5pt">即成</span><span style="font-family:宋体; font-size:12.5pt">为本协议不可分割的组成部分，与本协议正文具有同等法律效力</span><span
				        style="font-family:宋体; font-size:12.5pt">；</span><span style="font-family:宋体; font-size:12.5pt">法律另有强制性规定或双方另有特别约定的，依其规定。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">用户协议变更后，如您继续使用我方平台服务，即意味着您同意接受我方更新后的用户协议。如您不同意变更后的用户协议，请您停止使用我方平台产品和服务。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">为更好的提升用户体验及服务，公司将不定期提供软件更新或改变（包括但不限于软件修改、升级、功能强化、开发新服务、软件替换等）。为保证软件及相关服务安全、提升用户服务，软件及相关服务更新后，</span><span
				        style="font-family:宋体; font-size:12.5pt">平台</span><span style="font-family:宋体; font-size:12.5pt">将以包括但不限于系统提示、公告、</span><span
				        style="font-family:宋体; font-size:12.5pt">平台</span><span
				        style="font-family:宋体; font-size:12.5pt">内信等方式提示</span><span
				        style="font-family:宋体; font-size:12.5pt">您</span><span
				        style="font-family:宋体; font-size:12.5pt">，</span><span
				        style="font-family:宋体; font-size:12.5pt">您</span><span style="font-family:宋体; font-size:12.5pt">有权选择接受更新版本或服务，如</span><span
				        style="font-family:宋体; font-size:12.5pt">您</span><span
				        style="font-family:宋体; font-size:12.5pt">不接受，部分功能将</span><span
				        style="font-family:宋体; font-size:12.5pt">可能会</span><span style="font-family:宋体; font-size:12.5pt">受到限制或不能继续使用。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">三、平台账户的注册和使用</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">平台为您提供了注册通道，您有权选择合法的字符组合、邮箱或者手机号码作为自己的账户名称，并自行设置符合安全要求的密码</span><span
				        style="font-family:宋体; font-size:12.5pt">，若您的账户</span><span style="font-family:宋体; font-size:12.5pt">密码遗失的，可以通过注册</span><span
				        style="font-family:宋体; font-size:12.5pt">账</span><span
				        style="font-family:宋体; font-size:12.5pt">户时所使用的手机号码</span><span style="font-family:宋体; font-size:12.5pt">重置密码</span><span
				        style="font-family:宋体; font-size:12.5pt">。账户的所有权归公司所有，您仅拥有使用权。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您设置的账户名称、密码是您用以登录并以注册用户身份使用平台提供的相关服务的凭证。您的账户只限您本人使用，未经平台书面同意，您不得以任何形式赠与、借用、出租、转让、售卖或以其他方式许可他人使用该账号</span><span
				        style="font-family:宋体; font-size:12.5pt">。</span><span style="font-family:宋体; font-size:12.5pt">若发现他人未经许可使用您的账号或发生其他任何安全漏洞问题时，您应当立即通知</span><span
				        style="font-family:宋体; font-size:12.5pt">平台客服，否则您应对凭您的账户密码登录平台所发生的所有行为负责</span><span
				        style="font-family:宋体; font-size:12.5pt">。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您</span><span
				        style="font-family:宋体; font-size:12.5pt">有权</span><span
				        style="font-family:宋体; font-size:12.5pt">设置并随时修改账户</span><span
				        style="font-family:宋体; font-size:12.5pt">昵称</span><span style="font-family:宋体; font-size:12.5pt">、头像、个人简介等注册信息</span><span
				        style="font-family:宋体; font-size:12.5pt">。</span><span style="font-family:宋体; font-size:12.5pt">但应保证您设置或修改的信息不得出现以下内容：</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.</span><span style="font-family:宋体; font-size:12.5pt">违反宪法或法律法规规定的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.</span><span style="font-family:宋体; font-size:12.5pt">危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3.</span><span style="font-family:宋体; font-size:12.5pt">损害国家荣誉和利益的，损害公共利益的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.</span><span style="font-family:宋体; font-size:12.5pt">煽动民族仇恨、民族歧视，破坏民族团结的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">5.</span><span style="font-family:宋体; font-size:12.5pt">破坏国家宗教政策，宣扬邪教和封建迷信的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.</span><span style="font-family:宋体; font-size:12.5pt">散布谣言，扰乱社会秩序，破坏社会稳定的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">7.</span><span style="font-family:宋体; font-size:12.5pt">散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">8.</span><span style="font-family:宋体; font-size:12.5pt">侮辱或者诽谤他人，侵害他人合法权益的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">9.</span><span style="font-family:宋体; font-size:12.5pt">含有法律、行政法规禁止的其他内容的。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您同意并授权，为了更好的为您提供服务以及确保您的账户安全，</span><span
				        style="font-family:宋体; font-size:12.5pt">平台有权</span><span style="font-family:宋体; font-size:12.5pt">根据您提供的手机号码、身份证号码等信息，向全国公民身份号码查询服务中心、电信运营商、金融服务机构等可靠单位发起用户身份真实性、用户征信记录、用户手机号码有效性状态等情况的查询</span><span
				        style="font-family:宋体; font-size:12.5pt">。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您有权在注册并登录后，</span><span style="font-family:宋体; font-size:12.5pt">对站内商户发布客观、真实、亲身体验的点评信息和图片</span><span
				        style="font-family:宋体; font-size:12.5pt">，</span><span
				        style="font-family:宋体; font-size:12.5pt">有权</span><span
				        style="font-family:宋体; font-size:12.5pt">在平台</span><span style="font-family:宋体; font-size:12.5pt">上自行浏览、下载和使用优惠券</span><span
				        style="font-family:宋体; font-size:12.5pt">、红包等，有权参加平台组织的各种线上或线下活动。</span></p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">四、用户行为规范</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您评论、发布、传播的内容应自觉遵守宪法法律、法规、遵守公共秩序，尊重社会公德、社会主义制度、国家利益、公民合法权益、道德风尚和信息真实性等要求。若您上传、发布或传</span><span
				        style="font-family:宋体; font-size:12.5pt">播</span><span style="font-family:宋体; font-size:12.5pt">的内容含有以下内容的，平台有权视具体情况采取冻结账号、限制账户部分功能、拒绝服务、屏蔽或删除相关内容或者直接删除账户等措施，并可依法追究您的法律责任。如因此给公司造成不利后果的，您应应负责消除影响，并且赔偿公司因此导致的一切损失</span><span
				        style="font-family:宋体; font-size:12.5pt">（</span><span style="font-family:宋体; font-size:12.5pt">包括且不限于财产损害赔偿、名誉损害赔偿、律师费、交通费等</span><span
				        style="font-family:宋体; font-size:12.5pt">维权费用）：</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.反对宪法确定的基本原则的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.危害国家安全，泄露国家秘密的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3.颠覆国家政权，推翻社会主义制度、煽动分裂国家、破坏国家统一的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.损害国家荣誉和利益的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">5.宣扬恐怖主义、极端主义的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.宣扬民族仇恨、民族歧视，破坏民族团结的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">7.煽动地域歧视、地域仇恨的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">8.破坏国家宗教政策，宣扬邪教和迷信的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">9.编造、散布谣言、虚假信息，扰乱经济秩序和社会秩序、破坏社会稳定的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">10.散布、传播暴力、淫秽、色情、赌博、凶杀、恐怖或者教唆犯罪的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">11.侵害未成年人合法权益或者损害未成年人身心健康的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">12.未获他人允许，偷拍、偷录他人，侵害他人合法权利的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">13.包含恐怖、暴力血腥、高危险性、危害表演者自身或他人身心健康内容的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">14.危害网络安全、利用网络从事危害国家安全、荣誉和利益的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">15.侮辱或者诽谤他人，侵害他人合法权益的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">16.对他人进行暴力恐吓、威胁，实施人肉搜索的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">17.涉及他人隐私、个人信息或资料的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">18.散布污言秽语，损害社会公序良俗的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">19.侵犯他人隐私权、名誉权、肖像权、知识产权等合法权益内容的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">20.散布商业广告，或类似的商业招揽信息、过度营销信息及垃圾信息；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">21.所发表的信息毫无意义的，或刻意使用字符组合以逃避技术审核的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.您不得</span><span
				        style="font-family:宋体; font-size:12.5pt">利用或</span><span
				        style="font-family:宋体; font-size:12.5pt">针对平台相关</span><span style="font-family:宋体; font-size:12.5pt">服务进行任何危害计算机网络安全的行为，包括但不限于：</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.1非法侵入他人网络、干扰他人网络正常功能、窃取网络数据等危害网络安全的活动；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.2提供专门用于从事侵入网络、干扰网络正常功能及防护措施、窃取网络数据等危害网络安全活动的程序、工具；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.3明知他人从事危害网络安全的活动的，为其提供技术支持、广告推广、支付结算等帮助</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.4使用未经许可的数据或进入未经许可的服务器/账号；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.5未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.6未经许可，企图探查、扫描、测试</span><span
				        style="font-family:宋体; font-size:12.5pt">平台</span><span style="font-family:宋体; font-size:12.5pt">系统或网络的弱点或其它实施破坏网络安全的行为；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.7企图干涉、破坏</span><span
				        style="font-family:宋体; font-size:12.5pt">平台</span><span style="font-family:宋体; font-size:12.5pt">系统或网站的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">22.8伪造TCP/IP数据包名称或部分名称。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">23.其他违反法律法规、政策及公序良俗、干扰平台正常运营或侵犯其他用户或第三方合法权益内容的其他信息。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您在平台发布对商户的评价时，不得利用平台</span><span
				        style="font-family:宋体; font-size:12.5pt">进行违反诚信的任何行为，包括但不限于：炒作商户，并向商户收取费用或获取利益；为获得利益或好处，参与或组织撰写及发布虚假</span><span
				        style="font-family:宋体; font-size:12.5pt">评论</span><span style="font-family:宋体; font-size:12.5pt">；以差评威胁，要求商户提供额外的利益或好处；进行其他其它影响</span><span
				        style="font-family:宋体; font-size:12.5pt">评论</span><span style="font-family:宋体; font-size:12.5pt">客观、干扰扰乱网站正常秩序的违规行为等。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您理解并知晓在使用平台服务时，所接触的内容和信息来源广泛，平台无法对该内容和信息的准确性、真实性、可用性、安全性、完整性和正当性负责。您理解并认可您可能会接触到不正确的、令人不快的、不适当的或令人厌恶的内容和信息，您不会以此追究平台的相关责任。平台不对用户在我方平台上传、发布或传输的任何内容和信息背书、推荐或表达观点，也不对任何内容和信息的错误、瑕疵及产生的损失或损害承担任何责任，您对内容和信息的任何使用需自行承担相关的风险。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您同意平台在提供服务的过程中以各种方式投放商业性广告或其他任何类型的商业信息（包括但不限于在平台的任何位置上投放广告），您同意接受我方通过电子邮件、平台短信、手机短信、平台公告或其他方式向您发送促销或其他相关商业信息。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您同意在使用我方平台服务过程中，遵守以下法律法规：《中华人民共和国网络安全法》、《中华人民共和国著作权法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联网电子公告服务管理规定》、《信息网络传播权保护条例》等有关计算机及互联网规定的法律、法规。在任何情况下，平台一旦合理地认为您的行为可能违反上述法律、法规，可以在任何时候，不经事先通知终止向您提供服务。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">&#xa0;</span></p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">五、用户信息的使用和保护</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">在您使用平台相关服务时，平台将会获取您的如下信息：</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.</span><span
				        style="font-family:宋体; font-size:12.5pt">日志信息，当您使用</span><span style="font-family:宋体; font-size:12.5pt">平台相关服务</span><span
				        style="font-family:宋体; font-size:12.5pt">时，我们会自动收集您对我们服务的使用情况，作为有关网络日志保存。例如您的搜索查询内容、IP地址、浏览器的类型、使用的语言、访问服务的日期和时间、cookies、web beacon等。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.</span><span style="font-family:宋体; font-size:12.5pt">设备或应用信息，某些移动设备或应用包含唯一应用程序编号。</span><span
				        style="font-family:宋体; font-size:12.5pt">例如</span><span style="font-family:宋体; font-size:12.5pt">您使用的移动设备、浏览器或您使用的用于接入“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”服务的其他程序所提供的配置信息、设备版本号、设备识别码、IP地址等。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">为了提供更好的服务与改善用户体验，“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件可能会记录硬件型号、操作系统版本号、国际移动设备身份码（IMEI）、网络设备硬件地址（MAC）等信息数据。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3.</span><span style="font-family:宋体; font-size:12.5pt">位置信息，当您开启设备定位功能并使用“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”基于位置提供的相关服务时，在获得您的同意后，我们会使用各种技术进行定位，以使得您不需要手动输入自身地理坐标就可获得相关服务。这些技术包括IP地址、GPS以及能够提供相关信息的其他传感器（比如可能需要提供附近设备、Wi-Fi接入点和基站的信息）。您可以通过关闭定位功能，停止告知“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件关于您的地理位置（大多数移动设备允许您关闭定位服务，具体建议您联系您的移动设备的服务商或生产商）。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.当您使用</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">的搜索服务时，我们会收集您的查询关键字信息、设备信息等，为了提供高效的搜索服务，这些信息有部分会暂存存储在您的本地存储设备之中。在此，您需要注意的是，您的关键词信息无法单独识别您的个人身份，其不属于您的个人信息，因此我们有权以其他的目的对其进行使用；只有当您的搜索关键词信息与您的其他信息互有联系并可以识别您的个人身份时，则在结合使用期间，我们会将您的搜索关键词信息作为您的个人信息，与您的搜索历史记录一同按照本隐私政策对其进行处理与保护。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">5.在您使用“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”提供的身份认证服务时，我们会收集您的姓名、身份证号、职业、有关身份证明等信息，“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”对您的这些隐私信息会加以最大程度的保护，如果您不提供这些信息，我们将无法提供相关服务。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.当您参加“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”的有关营销活动时，我们会收集您的姓名、通信地址、联系方式、银行账号等信息。这些信息是您收到转账或者礼品的基础，如果您拒绝提供这些信息，我们将无法向您转账或发放礼品。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">六、</span><span
				        style="font-family:黑体; font-size:16pt; font-weight:bold">个人信息可能的使用方式</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.我们会根据本隐私政策的约定并为实现我们的产品与/或服务功能对所收集的个人信息进行使用。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.通过使用收集的信息的数据，“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件会得以向您提供尽可能的带有个性化的服务并改善现有服务。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3.通过使用收集的信息的数据，“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件向您提供更加相关的广告以替代普遍投放的广告。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">5. 通过使用收集的信息的数据，使我们更加了解您如何接入和使用我们的服务，从而针对性地回应您的个性化需求，例如语言设定、位置设定、个性化的帮助服务和指示等。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6. 为了确保服务的安全，帮助我们更好地了解我们应用程序的运行情况，我们可能记录相关信息数据，例如，您使用应用程序的频率、崩溃数据、总体使用情况、性能数据等。我们不会将我们存储在分析软件中的信息与您在应用程序中提供的任何个人身份信息相结合。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">7.为了让您有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某一项服务所收集的信息数据，以汇集信息数据或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的信息，可能在另一服务中用于向您提供特定内容，或向您展示与您相关的、非普遍推送的信息。如果我们在相关服务中提供了相应选项，您也可以授权我们将该服务所提供和储存的信息用于我们的其他服务。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">8.在收集您的个人信息后，我们将通过技术手段对数据进行去标识化处理，去标识化处理的信息将无法识别主体。请您了解并同意，在此情况下我们有权使用已经去标识化的信息；并在不透露您个人信息的前提下，我们有权对用户数据库进行分析并予以商业化的利用。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">9.请您注意，您在使用我们的产品与/或服务时所提供的所有个人信息，除非您删除或通过系统设置拒绝我们收集，否则将在您使用我们的产品与/或服务期间持续授权我们使用。在您注销账号后，我们将停止为您提供产品或服务，根据您的要求删除您的个人信息，或做匿名化处理，但法律法规另有规定的除外。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">10.我们会对我们的产品与/或服务使用情况进行统计，并可能会与公众或第三方共享这些统计信息，以展示我们的产品与/或服务的整体使用趋势。但这些统计信息不包含您的任何身份识别信息。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">七、</span><span
				        style="font-family:黑体; font-size:16pt; font-weight:bold">个人信息可能的共享方式</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">除以下情形外，未经您的同意，我们以及我们的关联公司、控制公司不会与任何第三方共享您的个人信息：</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.随着我们业务的持续发展，我们以及我们的关联公司有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移，我们将在转移前通知您，我们将按照法律法规及不低于本隐私政策所要求的标准继续保护或要求新的控制者继续保护你的个人信息。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.未经您本人允许，我们不会向任何第三方共享、转让、公开披露您的个人信息，下列情形除外：</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.1</span><span style="font-family:宋体; font-size:12.5pt">事先获得您的明确授权同意；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.2</span><span style="font-family:宋体; font-size:12.5pt">您自行向第三方共享、转让、公开的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.3</span><span style="font-family:宋体; font-size:12.5pt">与国家安全、国防安全、公共安全、公共卫生、公共利益直接相关的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.4</span><span style="font-family:宋体; font-size:12.5pt">根据适用的法律法规、法规程序的要求、强制性的行政司法要求所必须的情况下进行披露或提供，或与犯罪侦查、起诉、审判和判决执行等直接相关的；我们会依据所要求的个人信息类型和披露方式公开披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求必须出具与之相应的法律文件，如传票或调查函。我们将对所有的请求都进行了审慎的审查，以确保其具备合法依据，且仅限于行政、司法部门因特定调查目的有合法权利获取的数据；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.5</span><span style="font-family:宋体; font-size:12.5pt">在法律法规允许的范围内，为维护“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”其他用户、公司及其关联公司、控制公司的生命、财产等合法权益或维权产品或服务的安全稳定运行所必需的，例如查找、预防、处理欺诈等违法活动和减少信用风险等；不过这并不包括违反本隐私政策中所做的承诺而为获利目的对外公开或提供个人信息；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.6</span><span style="font-family:宋体; font-size:12.5pt">公司为维护合法权益而向用户提起诉讼或仲裁；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.7</span><span style="font-family:宋体; font-size:12.5pt">在涉及合并、分立、收购、资产转让或类似的交易时，如涉及到个人信息转让，公司会要求新的持有您的个人信息的公司、组织继续受本隐私政策的约束，否则，公司有权要求该公司、组织重新取得您的授权同意；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.8</span><span style="font-family:宋体; font-size:12.5pt">从合法公开披露的信息中个人信息的，如合法的新闻报道、政府信息公开等渠道；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.9</span><span style="font-family:宋体; font-size:12.5pt">为学术研究目的，或为学研究机构，出于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.10</span><span style="font-family:宋体; font-size:12.5pt">法律法规规定的其他情形。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">八、</span><span
				        style="font-family:黑体; font-size:16pt; font-weight:bold">个人信息安全保护</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.我们非常重视信息安全，我们努力采取各种合理的物理、电子和管理方面的安全措施来保护您的个人信息，防止您的信息被不当使用或被未经授权的访问、使用或泄漏。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.我们会使用加密技术、匿名化处理等手段保护您的个人信息；我们会使用受信赖的保护机制防止个人信息遭到恶意攻击。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3.我们建立专门的安全部门、安全管理制度、数据安全流程保障您的个人信息安全。我们采取严格的数据使用和访问制度，对数据和技术进行安全审计。制定应急处理预案，对个人信息泄露等安全事件，我们会立即启动应急预案，阻止安全事件扩大。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.尽管已经采取了上述合理有效措施，并已经遵守了相关法律规定要求的标准，但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。因此，您应采取积极措施保护个人信息的安全，如：使用复杂密码、定期修改密码、不将自己的账号密码等个人信息透露给他人。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">5.一旦发生用户信息安全事件（泄露、丢失等）后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已经采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以推送通知、邮件、信函、短信等形式告知您，难以逐一告知用户信息主体时，我们会采取合理、有效的方式发布公告。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.同时，我们还将按照监管部门要求，上报用户信息安全事件的处置情况。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">请您知悉：“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”提供的个人信息保护措施仅适用于“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span
				        style="font-family:宋体; font-size:12.5pt">”平台，一旦您离开</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">，浏览或使用其他网站、服务及内容资源，我们即没有能力及义务保护您在“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”之外的网站提交的任何个人信息，无论您登录或浏览上述网站是否基于“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span
				        style="font-family:宋体; font-size:12.5pt">”的链接或引导。</span></p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">九、</span><span
				        style="font-family:黑体; font-size:16pt; font-weight:bold">个人信息的管理</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">我们非常重视您对个人信息的关注，并尽全力保护您对于您个人信息的访问、更正、删除以及撤回同意的权利，以使您拥有充分的能力保障您的隐私和安全。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.当您完成“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”的账号注册并进行合理和必要的身份验证后，您可以查阅、修改、删除您的提交给“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”的个人信息。一般情况下，你可以随时浏览、修改、删除自己提交的信息，但出于安全性和身份识别（如号码申诉服务）的考虑，您可能无法修改注册时提交的某些初始注册信息。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.您有权自主更新或更正您的的个人信息，在您进行信息更新更正之前，我们会首先验证您的身份，其次才能进行信息的更正与更新。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3.您可以在我们的产品中申请注销账户。您可以通过登录</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店平台</span><span style="font-family:宋体; font-size:12.5pt">申请注销账号，在您注销账号前，我们将验证您的个人身份、安全状态、设备信息等。您注销账号的行为是不可逆的行为，一旦您注销账号，“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”将停止为您提供产品与/或服务，并依照您的要求，除法律法规另有规定外，删除有关您账号的一切信息。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.您的信息有以下情形之一时，按照法律法规要求，我们可能无法响应您的请求：</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.1与国家安全、国防安全有关的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.2与公共安全、公共卫生、重大公共利益等有关的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.3与犯罪侦查、起诉、审判和执行判决等有关的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.4有充分证据表明您存在主观恶意或滥用权利的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.5响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.6涉及商业秘密的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.7其他法律法规规定的情形。</span></p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">十、</span><span
				        style="font-family:黑体; font-size:16pt; font-weight:bold">本隐私政策不适用情况</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.通过“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件及服务而接入的第三方服务（包括任何第三方应用及网站）收集的信息；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2</span><span
				        style="font-family:宋体; font-size:12.5pt">.</span><span
				        style="font-family:宋体; font-size:12.5pt">通过在“</span><span
				        style="font-family:宋体; font-size:12.5pt">店店店</span><span style="font-family:宋体; font-size:12.5pt">”软件及服务中进行广告服务的其他公司或机构、组织所收集的信息。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3</span><span style="font-family:宋体; font-size:12.5pt">.我们的服务可能包括或链接至第三方提供的信息或其他服务（包括网站）。该等第三方服务可能由相关的第三方运营。您使用该等第三方服务（包括您向该等第三方提供的任何个人信息），须受该第三方的服务条款及隐私条款（而非本隐私政策）约束，您需要仔细阅读其条款。请您妥善保护自己的个人信息，仅在必要的情况下向他人提供。本隐私条款仅适用于我们所收集、保存、使用、共享、披露信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">十一、知识产权</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.</span><span style="font-family:宋体; font-size:12.5pt"> 本平台的所有内容，包括但不限于文本、数据、图片、音频、视频、源代码和其他所有信息，均由本公司及本平台享有知识产权。未经本平台事先书面同意，不得复制、模仿、改编、传播、公布、展示或以任何其他方式侵犯本平台的知识产权。未经本公司书面同意,用户不得将本平台包含的资料等任何内容发布到任何其他平台或者服务器。任何未经授权对本平台内容的使用均属于违法行为，本公司有权追究法律责任。注册用户未经本平台的明确书面同意不许下载（除了页面缓存）或修改平台或其任何部分。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.</span><span style="font-family:宋体; font-size:12.5pt"> 用户不得对恒易融平台或其内容进行转售或商业利用；不得收集和利用产品目录、说明和价格；不得对恒易融平台或其内容进行任何衍生利用；不得为其他商业利益而下载或拷贝账户信息或使用任何数据采集、收集和摘录工具。未经本平台的书面许可，严禁对恒易融平台的内容进行系统获取以直接或间接创建或编辑文集、汇编、数据库或人名地址录（无论是否通过Robots、Spiders、自动仪器或手工操作）。另外，严禁为任何未经本协议明确允许的目的而使用恒易融平台上的内容和材料。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">&#xa0;</span></p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">十二、免责声明</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.</span><span style="font-family:宋体; font-size:12.5pt"> 基于互联网的特殊性，本公司无法保证本平台的服务不会中断，对于包括但不限于本公司、本平台及相关第三方的设备、系统存在缺陷，计算机发生故障、遭到病毒、黑客攻击或者发生地震、海啸等不可抗力而造成服务中断或因此给用户造成的损失，本公司不承担任何责任，有关损失由用户自担。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.</span><span style="font-family:宋体; font-size:12.5pt">本公司无义务监测本平台内容。用户对于本平台披露的信息、选择使用本平台提供的服务，选择参与交易等，应当自行判断真实性和承担风险，由此而产生的法律责任和后果由用户自担，本公司不承担任何责任。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">3.</span><span style="font-family:宋体; font-size:12.5pt"> 与本公司合作的第三方机构向用户提供的服务由第三方机构自行负责，本公司不对此等服务承担任何责任。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">4.</span><span style="font-family:宋体; font-size:12.5pt"> 本平台的内容可能涉及第三方所有的信息或第三方平台，该等信息或第三方平台的真实性、可靠性、有效性等由相关第三方负责，用户对该等信息或第三方平台自行判断并承担风险，与本平台和本公司无关。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">5.无论如何，本公司对用户承担的违约赔偿（如有）总额不超过向用户收取的服务费用总额。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.</span><span style="font-family:宋体; font-size:12.5pt">用户了解并认可，任何通过本平台进行的交易并不能避免以下风险的产生，本平台不能也没有义务为如下风险负责： </span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.1</span><span style="font-family:宋体; font-size:12.5pt">宏观经济风险：因宏观经济形势变化，可能引起价格等方面的异常波动，用户有可能遭受损失；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.2</span><span style="font-family:宋体; font-size:12.5pt"> 政策风险：有关法律、法规及相关政策、规则发生变化，可能引起价格等方面异常波动，用户有可能遭受损失；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.3</span><span style="font-family:宋体; font-size:12.5pt">违约风险：因其他交易方无力或无意愿按时足额履约，用户有可能遭受损失；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.4</span><span style="font-family:宋体; font-size:12.5pt"> 利率风险：市场利率变化可能对购买或持有产品的实际收益产生影响；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.5</span><span style="font-family:宋体; font-size:12.5pt">不可抗力因素导致的风险；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.6</span><span style="font-family:宋体; font-size:12.5pt"> 因用户的过错导致的任何损失 ，该过错包括但不限于：操作不当、遗忘或泄露密码、密码被他人破解、用户使用的计算机系统被第三方侵入、用户委托他人代理交易时他人恶意或不当操作而造成的损失。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.7</span><span style="font-family:宋体; font-size:12.5pt">除按照规则运作还款风险金外（还款风险金规则以本平台最新公告为准），本平台不对任何用户及/或任何交易提供任何担保或条件，无论是明示、默示或法定的。本平台不能也不试图对用户发布的信息进行控制，对该等信息，本平台不承担任何形式的证明、鉴定服务。本平台不能完全保证平台内容的真实性、充分性、可靠性、准确性、完整性和有效性，并且无需承担任何由此引起的法律责任。用户依赖于用户的独立判断进行交易，用户应对其作出的判断承担全部责任。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">6.8</span><span style="font-family:宋体; font-size:12.5pt">以上并不能揭示用户通过本平台进行交易的全部风险及市场的全部情形。用户在做出交易决策前，应全面了解相关交易，谨慎决策，并自行承担全部风险。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">十三、协议的终止</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.</span><span
				        style="font-family:宋体; font-size:12.5pt">终止的情形</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.1</span><span style="font-family:宋体; font-size:12.5pt">【用户发起的终止】您有权通过以下任一方式终止本协议：</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（一）在满足我方平台公示的账户注销等清理条件时您通过网站注销您的账户的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（二）变更事项生效前您停止使用并明示不愿接受变更事项的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（三）您明示不愿继续使用我方平台服务，且符合我方平台终止条件的。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">1.2</span><span style="font-family:宋体; font-size:12.5pt">【平台发起的终止】出现以下情况时，我方可以本协议所列的方式通知您终止本协议：</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（一）您违反本协议约定，我方依据违约条款终止本协议的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（二）您转让本人账户、盗用他人账户、发布违禁内容和信息、骗取他人财物、采取不正当手段谋利等行为，我方依据我方平台规则对您的账户予以查封的；</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（三）除上述情形外，因您多次违反我方平台规则相关规定且情节严重，我方依据我方平台规则对您的账户予以查封的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（四）您的账户被我方依据本协议进行注销等清理的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（五）您在我方平台有侵犯他人合法权益或其他严重违法违约行为的；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（六）其它根据相关法律法规我方应当终止服务的情况。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.协议终止后的处理</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.1【用户信息披露】本协议终止后，除法律有明确规定外，我方无义务向您或您指定的第三方披露您账户中的任何信息。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.2【我方平台权利】本协议终止后，我方享有下列权利：</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（一）停止收集和使用您的个人信息，但可继续保存您留存于我方平台的其他内容和信息；</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">（二）对于您过往的违约行为，我方仍可依据本协议向您追究违约责任。</span></p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">2.3【交易处理】本协议终止后，对于您在本协议存续期间产生的交易订单，我方平台可关闭该等交易订单，我方可自行决定退回费用或扣除相关费用作为违约金。</span>
				</p>
				<h2 style="font-size:16pt; line-height:172%; margin:13pt 0pt; orphans:0; page-break-after:avoid; page-break-inside:avoid; text-indent:21pt; widows:0">
				    <span style="font-family:黑体; font-size:16pt; font-weight:bold">十四、争议解决条款</span></h2>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国法律；如法律无相关规定的，参照商业惯例及/或行业惯例。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">您因使用平台服务所产生及与平台服务有关的争议，</span><span
				        style="font-family:宋体; font-size:12.5pt">应当友好</span><span style="font-family:宋体; font-size:12.5pt">协商解决。协商不成时，任何一方均可向</span><span
				        style="font-family:宋体; font-size:12.5pt">公司</span><span style="font-family:宋体; font-size:12.5pt">所在地人民法院提起诉讼。</span>
				</p>
				<p style="font-size:12.5pt; line-height:150%; margin:0pt 0pt 10pt; orphans:0; text-indent:21pt; widows:0"><span
				        style="font-family:宋体; font-size:12.5pt">本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。</span></p>
			</view>
		</scroll-view>
	</view>
</template>

<script>
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
.listview{
	height:calc(100vh - 45px - var(--status-bar-height))
}
.contentView{
	padding:10px;
}
</style>

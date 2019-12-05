"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-24220191115004","_inBundle":false,"_integrity":"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz","_shasum":"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"bcf65737c5111d47398695d3db8ed87305df346e","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-24220191115004"};

/***/ }),
/* 4 */
/*!****************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/pages.json?{"type":"style"} ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/login/login":{"usingComponents":{}},"pages/index/index":{"usingComponents":{}},"pages/shops/shops":{"usingComponents":{"customnav":"/components/customnav"}},"pages/shopHomePage/homeindex":{"usingComponents":{"home":"/pages/shopHomePage/shopHomePage","allproduct":"/pages/shopHomePage/allProduct","activity":"/pages/shopHomePage/activity","order":"/pages/shopHomePage/order","category":"/pages/shopHomePage/category"}},"pages/shopHomePage/shopHomePage":{"usingComponents":{"customnav":"/components/customnav","popup":"/components/uni-popup/uni-popup"}},"pages/shopHomePage/allProduct":{"usingComponents":{"customnav":"/components/customnav","popup":"/components/uni-popup/uni-popup"}},"pages/shopHomePage/activity":{"usingComponents":{"customnav":"/components/customnav","qstab":"/components/QS-tabs/QS-tabs"}},"pages/shopHomePage/order":{"usingComponents":{}},"pages/shopHomePage/category":{"usingComponents":{}},"pages/search/search":{"usingComponents":{"customnav":"/components/customnav"}},"pages/shopHomePage/salesRank":{"usingComponents":{"customnav":"/components/customnav"}},"pages/message/message":{"usingComponents":{"customnav":"/components/customnav"}},"pages/search/searchResult":{"usingComponents":{"customnav":"/components/customnav"}},"pages/yhq/yhq":{"usingComponents":{"customnav":"/components/customnav"}},"pages/personal/personal":{"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","customnav":"/components/customnav","popup":"/components/uni-popup/uni-popup"}},"pages/personal/shopManage":{"usingComponents":{"qstab":"/components/QS-tabs/QS-tabs","customnav":"/components/customnav","level":"/components/level"}},"pages/personal/shopBasicInfo":{"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","customnav":"/components/customnav"}},"pages/personal/shopOrder":{"usingComponents":{"customnav":"/components/customnav","qstab":"/components/QS-tabs/QS-tabs","level":"/components/level"}},"pages/personal/shopOrderDetail":{"usingComponents":{"customnav":"/components/customnav"}},"pages/personal/incomeManage":{"usingComponents":{"customnav":"/components/customnav","qspicker":"/components/QuShe-picker/QuShe-picker"}},"pages/personal/incomeDetail":{"usingComponents":{"customnav":"/components/customnav"}},"pages/personal/account/account":{"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","customnav":"/components/customnav"}},"pages/personal/account/currentBindPhone":{"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","customnav":"/components/customnav"}},"pages/personal/account/verifyOldPhone":{"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","customnav":"/components/customnav"}},"pages/personal/account/changePhone":{"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","customnav":"/components/customnav"}},"pages/personal/account/resetPsw":{"usingComponents":{"customnav":"/components/customnav"}},"pages/personal/staffFile":{"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","customnav":"/components/customnav"}},"pages/staffCheck/staffLoaction":{"titleNView":{"titleText":"定位小店","titleColor":"#fff","titleSize":"14px","backgroundColor":"#1A6FE8"},"subNVues":[{"id":"mapTop","path":"pages/staffCheck/subNVues/mapTop.nvue","style":{"height":"65px","top":"70px","background":"transparent"}},{"id":"rightBtn","path":"pages/staffCheck/subNVues/rightBtn.nvue","style":{"width":"70px","height":"500px","right":"10px","top":"30%","background":"transparent"}},{"id":"bloaction","path":"pages/staffCheck/subNVues/currentLocation.nvue","style":{"height":"70px","bottom":"0","background":"transparent"}}],"usingComponents":{"customnav":"/components/customnav"}},"pages/staffCheck/staffCheck":{"usingComponents":{"customnav":"/components/customnav","popup":"/components/uni-popup/uni-popup"}},"pages/personal/saleStatistics":{"usingComponents":{"customnav":"/components/customnav","qstab":"/components/QS-tabs/QS-tabs"}}},"globalStyle":{"navigationBarTextStyle":"black","navigationBarTitleText":"店店店","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"}});

/***/ }),
/* 5 */
/*!***************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/pages.json?{"type":"stat"} ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__D65BEE8"});

/***/ }),
/* 6 */
/*!****************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/main.js?{"type":"appStyle"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!*****************************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/App.vue?vue&type=style&index=0&lang=scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 8);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/Project/github-repository/staff/staff/App.vue?vue&type=style&index=0&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "width": 100,
    "height": 100,
    "overflow": "hidden",
    "background": "#f6f6f6"
  },
  "_ul": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "_li": {
    "listStyle": "none"
  },
  "_a": {
    "display": "inline-block",
    "color": "#f8f8f8",
    "textDecoration": "none"
  },
  "status_bar": {
    "width": 100,
    "background": "linear-gradient(to right, #21A5F9, #1A6FE8)"
  },
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url(\"//at.alicdn.com/t/font_1495627_tylc7iv0h3.eot?t=1574911644783#iefix\") format(\"embedded-opentype\"), url(\"data:application/x-font-woff2;charset=utf-8;base64,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\") format(\"woff2\"), url(\"//at.alicdn.com/t/font_1495627_tylc7iv0h3.woff?t=1574911644783\") format(\"woff\"), url(\"//at.alicdn.com/t/font_1495627_tylc7iv0h3.ttf?t=1574911644783\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_1495627_tylc7iv0h3.svg?t=1574911644783#iconfont\") format(\"svg\")"
    }
  ],
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "icon-daifu": {
    "content:before": "\"\\e627\""
  },
  "icon-xia": {
    "content:before": "\"\\e612\""
  },
  "icon-image": {
    "content:before": "\"\\e7bc\""
  },
  "icon-chakan": {
    "content:before": "\"\\e657\""
  },
  "icon-touxiang": {
    "content:before": "\"\\e616\""
  },
  "icon-daifukuan": {
    "content:before": "\"\\e60c\""
  },
  "icon-you": {
    "content:before": "\"\\e636\""
  },
  "icon-tianjiajiahaowubiankuang": {
    "content:before": "\"\\e81a\""
  },
  "icon-icon-arrow-top2": {
    "content:before": "\"\\e665\""
  },
  "icon-icon-arrow-bottom2": {
    "content:before": "\"\\e666\""
  },
  "icon-sousuo": {
    "content:before": "\"\\e613\""
  },
  "icon-xiazai46": {
    "content:before": "\"\\e61d\""
  },
  "icon-dianhua1": {
    "content:before": "\"\\e624\""
  },
  "icon-xiangzuo": {
    "content:before": "\"\\e601\""
  },
  "icon-eye": {
    "content:before": "\"\\e608\""
  },
  "icon-buoumaotubiao39": {
    "content:before": "\"\\e62f\""
  },
  "icon-mima": {
    "content:before": "\"\\e61b\""
  },
  "icon-youhui": {
    "content:before": "\"\\e692\""
  },
  "icon-jia": {
    "content:before": "\"\\e60f\""
  },
  "icon-duigou": {
    "content:before": "\"\\e659\""
  },
  "icon-user": {
    "content:before": "\"\\e6a6\""
  },
  "icon-dianpu1": {
    "content:before": "\"\\e653\""
  },
  "icon-xiaoxi": {
    "content:before": "\"\\e67e\""
  },
  "icon-guanyu3": {
    "content:before": "\"\\e64c\""
  },
  "icon-dingdan": {
    "content:before": "\"\\e60b\""
  },
  "icon-round_location_fill": {
    "content:before": "\"\\e80b\""
  },
  "icon-shangpin": {
    "content:before": "\"\\e74e\""
  },
  "icon-dianhua": {
    "content:before": "\"\\e6f9\""
  },
  "icon-shequneiicon-": {
    "content:before": "\"\\e64e\""
  },
  "icon-daifahuo": {
    "content:before": "\"\\e602\""
  },
  "icon-weizhi": {
    "content:before": "\"\\e76e\""
  },
  "icon-daishouhuo": {
    "content:before": "\"\\e607\""
  },
  "icon-zhanghao": {
    "content:before": "\"\\e652\""
  },
  "icon-tianchongxing-": {
    "content:before": "\"\\e637\""
  },
  "icon-eye1": {
    "content:before": "\"\\e617\""
  },
  "icon-quxiaodingdan": {
    "content:before": "\"\\e625\""
  },
  "icon-qinglihuancun": {
    "content:before": "\"\\e64f\""
  },
  "icon-shuju": {
    "content:before": "\"\\e654\""
  },
  "icon-dingdan1": {
    "content:before": "\"\\e6a1\""
  },
  "icon-renyuandanganguanli": {
    "content:before": "\"\\e650\""
  },
  "icon-ziyuan": {
    "content:before": "\"\\e615\""
  },
  "icon-zengpin": {
    "content:before": "\"\\e656\""
  },
  "icon-duobianxing": {
    "content:before": "\"\\e61c\""
  },
  "icon-yingyong-": {
    "content:before": "\"\\e629\"",
    "position:before": "absolute",
    "left:before": "-2",
    "top:before": "-3",
    "color:before": "#ea291a",
    "fontSize:before": "20"
  },
  "icon-gongyingshang": {
    "content:before": "\"\\e60d\""
  },
  "icon-xia-copy": {
    "content:before": "\"\\e916\""
  },
  "icon-shouye": {
    "content:before": "\"\\e60e\""
  },
  "icon-shouye-copy": {
    "content:before": "\"\\e614\""
  },
  "icon-youxiang": {
    "content:before": "\"\\e620\""
  },
  "icon-duankailianjie": {
    "content:before": "\"\\e65e\""
  },
  "icon-youhuired": {
    "content:before": "\"\\e634\""
  },
  "icon-quanbushangpinred": {
    "content:before": "\"\\e638\""
  },
  "icon-fenlei3": {
    "content:before": "\"\\e63a\""
  },
  "icon-fenleired": {
    "content:before": "\"\\e63b\""
  },
  "icon-yishouhuo": {
    "content:before": "\"\\e651\""
  },
  "icon-tuichu": {
    "content:before": "\"\\e64d\""
  },
  "icon-tichengjiangjinhesuan": {
    "content:before": "\"\\e655\""
  },
  "icon-icon-test": {
    "content:before": "\"\\e65b\""
  }
}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/*!**********************************************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/main.js?{"page":"pages%2FstaffCheck%2FsubNVues%2FmapTop"} ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_staffCheck_subNVues_mapTop_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/staffCheck/subNVues/mapTop.nvue?mpType=page */ 27);

        
        
        
        _pages_staffCheck_subNVues_mapTop_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_staffCheck_subNVues_mapTop_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/staffCheck/subNVues/mapTop'
        _pages_staffCheck_subNVues_mapTop_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_staffCheck_subNVues_mapTop_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 27 */
/*!**************************************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue?mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapTop_nvue_vue_type_template_id_48f5b5b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapTop.nvue?vue&type=template&id=48f5b5b2&mpType=page */ 28);
/* harmony import */ var _mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapTop.nvue?vue&type=script&lang=js&mpType=page */ 30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 17);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./mapTop.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 32).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./mapTop.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 32).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapTop_nvue_vue_type_template_id_48f5b5b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapTop_nvue_vue_type_template_id_48f5b5b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "1200c017"
  
)

injectStyles.call(component)
component.options.__file = "E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/*!********************************************************************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue?vue&type=template&id=48f5b5b2&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_template_id_48f5b5b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./mapTop.nvue?vue&type=template&id=48f5b5b2&mpType=page */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_template_id_48f5b5b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_template_id_48f5b5b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 29 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue?vue&type=template&id=48f5b5b2&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("view", { staticClass: ["mapTop_wrapper"] }, [
        _c("view", { staticClass: ["staffinfo"] }, [
          _c("view", { staticClass: ["s_left"] }, [
            _c(
              "view",
              { staticClass: ["simgBox"] },
              [
                _c("u-image", {
                  staticClass: ["simg"],
                  attrs: { src: _vm.staffInfo.picture, resize: "contain" }
                })
              ],
              1
            ),
            _c("view", { staticClass: ["s_info"] }, [
              _c("u-text", { staticClass: ["s_name"] }, [
                _vm._v(_vm._s(_vm.staffInfo.salesName))
              ]),
              _c("u-text", { staticClass: ["s_com"] }, [
                _vm._v(_vm._s(_vm.staffInfo.supplierName))
              ])
            ])
          ]),
          _c("view", { staticClass: ["s_right"] }, [
            _c("u-text", { staticClass: ["nowtime"] }, [
              _vm._v(_vm._s(_vm.currentDate))
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!**************************************************************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./mapTop.nvue?vue&type=script&lang=js&mpType=page */ 31);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      currentDate: '',
      swidth: '',
      staffInfo: {} };

  },
  onLoad: function onLoad() {
    var _this = this;
    // this.staffInfo = uni.getStorageSync('staffInfo')

    uni.$on('getInfo', function (res) {
      _this.$set(_this.staffInfo, 'salesName', res.name);
      _this.$set(_this.staffInfo, 'supplierName', res.supplier);
      _this.$set(_this.staffInfo, 'picture', res.img);

    });




    this.getCurrentDate();
  },
  onUnload: function onUnload() {
    // 移除监听事件  
    uni.$off('getInfo');
  },
  methods: {

    getCurrentDate: function getCurrentDate() {
      var myDate = new Date();

      var year = myDate.getFullYear(); //年
      var month = myDate.getMonth() + 1; //月
      var day = myDate.getDate(); //日
      var days = myDate.getDay();
      switch (days) {

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
          break;}





      var str = year + "年" + month + "月" + day + "日  " + days;
      this.currentDate = str;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 32 */
/*!***********************************************************************************************************************************!*\
  !*** E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./mapTop.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 33);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mapTop_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!E:/Project/github-repository/staff/staff/pages/staffCheck/subNVues/mapTop.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "staffinfo": {
    "height": "65",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5",
    "backgroundColor": "#ffffff"
  },
  "s_left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "simg": {
    "width": "50",
    "height": "50",
    "borderRadius": 50,
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#489cfb"
  },
  "s_info": {
    "marginLeft": "10"
  },
  "s_name": {
    "fontSize": 16
  },
  "s_com": {
    "fontSize": 12,
    "color": "#999999",
    "marginTop": "5"
  },
  "nowtime": {
    "fontSize": 14
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRTovUHJvamVjdC9naXRodWItcmVwb3NpdG9yeS9zdGFmZi9zdGFmZi9wYWdlcy5qc29uPzM4NDAiLCJ3ZWJwYWNrOi8vL0U6L1Byb2plY3QvZ2l0aHViLXJlcG9zaXRvcnkvc3RhZmYvc3RhZmYvcGFnZXMuanNvbj8xZTEwIiwid2VicGFjazovLy9FOi9Qcm9qZWN0L2dpdGh1Yi1yZXBvc2l0b3J5L3N0YWZmL3N0YWZmL21haW4uanM/ODc1NCIsIndlYnBhY2s6Ly8vRTovUHJvamVjdC9naXRodWItcmVwb3NpdG9yeS9zdGFmZi9zdGFmZi9BcHAudnVlPzE3MWMiLCJ3ZWJwYWNrOi8vL0U6L1Byb2plY3QvZ2l0aHViLXJlcG9zaXRvcnkvc3RhZmYvc3RhZmYvQXBwLnZ1ZT81NzM0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vRTovUHJvamVjdC9naXRodWItcmVwb3NpdG9yeS9zdGFmZi9zdGFmZi9tYWluLmpzP2I0MjMiLCJ3ZWJwYWNrOi8vL0U6L1Byb2plY3QvZ2l0aHViLXJlcG9zaXRvcnkvc3RhZmYvc3RhZmYvcGFnZXMvc3RhZmZDaGVjay9zdWJOVnVlcy9tYXBUb3AubnZ1ZT85YTJjIiwid2VicGFjazovLy9FOi9Qcm9qZWN0L2dpdGh1Yi1yZXBvc2l0b3J5L3N0YWZmL3N0YWZmL3BhZ2VzL3N0YWZmQ2hlY2svc3ViTlZ1ZXMvbWFwVG9wLm52dWU/ODQzZSIsIndlYnBhY2s6Ly8vRTovUHJvamVjdC9naXRodWItcmVwb3NpdG9yeS9zdGFmZi9zdGFmZi9wYWdlcy9zdGFmZkNoZWNrL3N1Yk5WdWVzL21hcFRvcC5udnVlP2EwODQiLCJ3ZWJwYWNrOi8vL0U6L1Byb2plY3QvZ2l0aHViLXJlcG9zaXRvcnkvc3RhZmYvc3RhZmYvcGFnZXMvc3RhZmZDaGVjay9zdWJOVnVlcy9tYXBUb3AubnZ1ZT84MDUxIiwidW5pLWFwcDovLy9wYWdlcy9zdGFmZkNoZWNrL3N1Yk5WdWVzL21hcFRvcC5udnVlIiwid2VicGFjazovLy9FOi9Qcm9qZWN0L2dpdGh1Yi1yZXBvc2l0b3J5L3N0YWZmL3N0YWZmL3BhZ2VzL3N0YWZmQ2hlY2svc3ViTlZ1ZXMvbWFwVG9wLm52dWU/YTNhNCIsIndlYnBhY2s6Ly8vRTovUHJvamVjdC9naXRodWItcmVwb3NpdG9yeS9zdGFmZi9zdGFmZi9wYWdlcy9zdGFmZkNoZWNrL3N1Yk5WdWVzL21hcFRvcC5udnVlP2Y0NDMiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsImluaXRVbmkiLCJpc0ZuIiwiaGFuZGxlUHJvbWlzZSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJSRUdFWCIsIkFQSV9OT1JNQUxfTElTVCIsInNob3VsZFByb21pc2UiLCJuYW1lIiwidGVzdCIsImluZGV4T2YiLCJwcm9taXNpZnkiLCJhcGkiLCJfbGVuIiwiYXJndW1lbnRzIiwicGFyYW1zIiwiQXJyYXkiLCJfa2V5IiwidW5kZWZpbmVkIiwiYXBwbHkiLCJjb25jYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbmFsbHkiLCJjYWxsYmFjayIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwib25NZXNzYWdlQ2FsbGJhY2tzIiwib3JpZ2luIiwib25TdWJOVnVlTWVzc2FnZSIsIndlYnZpZXdJZCIsIndlZXhQbHVzIiwid2VidmlldyIsImN1cnJlbnRXZWJ2aWV3IiwiaWQiLCJCcm9hZGNhc3RDaGFubmVsIiwib25tZXNzYWdlIiwiZXZlbnQiLCJ0byIsIndyYXBwZXIiLCIkcHJvY2Vzc2VkIiwiY3VycmVudFdlYnZpZXdJZCIsImlzUG9wdXBOVnVlIiwiaG9zdE5WdWVJZCIsIl9fdW5pYXBwX29yaWdpbl90eXBlIiwiX191bmlhcHBfb3JpZ2luX2lkIiwicG9wdXBOVnVlSWQiLCJwb3N0TWVzc2FnZSIsIm9uTWVzc2FnZSIsIl9fdW5pYXBwX21hc2tfaWQiLCJfX3VuaWFwcF9ob3N0IiwibWFza0NvbG9yIiwiX191bmlhcHBfbWFzayIsIm1hc2tXZWJ2aWV3IiwiZ2V0V2Vidmlld0J5SWQiLCJwYXJlbnQiLCJvbGRTaG93Iiwib2xkSGlkZSIsIm9sZENsb3NlIiwiY2xvc2UiLCJzaG93TWFzayIsInNldFN0eWxlIiwibWFzayIsImNsb3NlTWFzayIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJnZXRDdXJyZW50U3ViTlZ1ZSIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwiZ2xvYmFsRXZlbnQiLCJjYWxsYmFja3MiLCJVTklBUFBfU0VSVklDRV9OVlVFX0lEIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2siLCJjcmVhdGVDYWxsYmFjayIsInJlcyIsImVyck1zZyIsImtlZXBBbGl2ZSIsImNhbGxiYWNrSWQiLCJwdWJsaXNoIiwiX3JlZiIsImNyZWF0ZVB1Ymxpc2giLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJwbHVnaW5OYW1lIiwiZG9tIiwibG9hZEZvbnRGYWNlIiwiZmFtaWx5Iiwic291cmNlIiwiZGVzYyIsImFkZFJ1bGUiLCJmb250RmFtaWx5Iiwic3RhdHVzIiwiZ2xvYmFsRXZlbnQkMSIsImNhbGxiYWNrcyQxIiwiaXNVbmlBcHBSZWFkeSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsInN0cmVhbSIsIk1FVEhPRF9HRVQiLCJNRVRIT0RfUE9TVCIsIkNPTlRFTlRfVFlQRV9KU09OIiwiQ09OVEVOVF9UWVBFX0ZPUk0iLCJzZXJpYWxpemUiLCJjb250ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJqb2luIiwiaGVhZGVyIiwiX3JlZiRtZXRob2QiLCJfcmVmJGRhdGFUeXBlIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJhYm9ydGVkIiwiaGFzQ29udGVudFR5cGUiLCJoZWFkZXJzIiwiZmV0Y2giLCJib2R5IiwiX3JlZjIiLCJvayIsInN0YXR1c1RleHQiLCJyZXQiLCJzdGF0dXNDb2RlIiwiYWJvcnQiLCJzdG9yYWdlIiwiVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFIiwiZ2V0U3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInNldFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlU3RvcmFnZSIsIl9yZWYzIiwicmVtb3ZlSXRlbSIsImNsZWFyU3RvcmFnZSIsIl9yZWY0IiwiY2xpcGJvYXJkIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsImdldFN0cmluZyIsInNldENsaXBib2FyZERhdGEiLCJzZXRTdHJpbmciLCJnZXRFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsIkVtaXR0ZXIiLCIkb24iLCJ3YXJuIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJjdHgiLCJzbGljZSIsImZyZWV6ZSIsInd4IiwidXBsb2FkRmlsZSIsImRvd25sb2FkRmlsZSIsImNob29zZUltYWdlIiwicHJldmlld0ltYWdlIiwiZ2V0SW1hZ2VJbmZvIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImNob29zZVZpZGVvIiwic2F2ZVZpZGVvVG9QaG90b3NBbGJ1bSIsInNhdmVGaWxlIiwiZ2V0U2F2ZWRGaWxlTGlzdCIsImdldFNhdmVkRmlsZUluZm8iLCJyZW1vdmVTYXZlZEZpbGUiLCJvcGVuRG9jdW1lbnQiLCJnZXRTdG9yYWdlSW5mbyIsImNob29zZUxvY2F0aW9uIiwib3BlbkxvY2F0aW9uIiwiZ2V0U3lzdGVtSW5mbyIsIm1ha2VQaG9uZUNhbGwiLCJzY2FuQ29kZSIsInNldFNjcmVlbkJyaWdodG5lc3MiLCJnZXRTY3JlZW5CcmlnaHRuZXNzIiwic2V0S2VlcFNjcmVlbk9uIiwidmlicmF0ZUxvbmciLCJ2aWJyYXRlU2hvcnQiLCJhZGRQaG9uZUNvbnRhY3QiLCJzaG93VG9hc3QiLCJzaG93TG9hZGluZyIsImhpZGVUb2FzdCIsImhpZGVMb2FkaW5nIiwic2hvd01vZGFsIiwic2hvd0FjdGlvblNoZWV0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwic2V0TmF2aWdhdGlvbkJhckNvbG9yIiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iLCJyZUxhdW5jaCIsInN3aXRjaFRhYiIsIm5hdmlnYXRlQmFjayIsImdldFByb3ZpZGVyIiwibG9naW4iLCJnZXRVc2VySW5mbyIsInNoYXJlIiwicmVxdWVzdFBheW1lbnQiLCJzdWJzY3JpYmVQdXNoIiwidW5zdWJzY3JpYmVQdXNoIiwib25QdXNoIiwib2ZmUHVzaCIsImJhc2VVbmkiLCJvcyIsIm52dWUiLCJQcm94eSIsImdldCIsInRhcmdldCIsImNyZWF0ZVVuaSIsImdldFVuaSIsIldlZXhQbHVzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztpRENsRkEsNkQ7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxnQkFBckI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsbUNBQWpCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLHVDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBRyxJQUF2QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxHQUF0QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsZ0JBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLGlCQUFuQjs7QUFFQSxTQUFTQyxP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Q0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek5BO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQSxRQUFvQztBQUNwQyxRQUE4QjtBQUM5QixRQUE2RTtBQUM3RSxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLFFBQVEsMEZBQUc7QUFDWCxnQkFBZ0IsMEZBQUc7Ozs7Ozs7Ozs7OztBQ1BuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQzNCO0FBQ0w7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxtQkFBTyxDQUFDLG9FQUE0RDtBQUM5RyxXQUFXO0FBQ1gsK0NBQStDLG1CQUFPLENBQUMsb0VBQTREO0FBQ25IOztBQUVBOztBQUVBO0FBQzRIO0FBQzVILGdCQUFnQiwwSUFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QyxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLGtDQUFrQztBQUNwRCxvQkFBb0IsNkJBQTZCO0FBQ2pELHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBLGVBQWUsMkJBQTJCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRCw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRCwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLG1kQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQjNiO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxnQkFGQTtBQUdBLG1CQUhBOztBQUtBLEdBUEE7QUFRQSxRQVJBLG9CQVFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUxBOzs7OztBQVVBO0FBQ0EsR0F2QkE7QUF3QkEsVUF4QkEsc0JBd0JBO0FBQ0E7QUFDQTtBQUNBLEdBM0JBO0FBNEJBOztBQUVBLGtCQUZBLDRCQUVBO0FBQ0E7O0FBRUEsc0NBSEEsQ0FHQTtBQUNBLHdDQUpBLENBSUE7QUFDQSxpQ0FMQSxDQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBdEJBOzs7Ozs7QUE0QkE7QUFDQTtBQUNBLEtBdkNBLEVBNUJBLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUErekIsQ0FBZ0IsdzBCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FuMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvc3RhZmZDaGVjay9zdWJOVnVlcy9tYXBUb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xyXG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOntcInBhZ2VzL2xvZ2luL2xvZ2luXCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvaW5kZXgvaW5kZXhcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9zaG9wcy9zaG9wc1wiOntcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCJ9fSxcInBhZ2VzL3Nob3BIb21lUGFnZS9ob21laW5kZXhcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJob21lXCI6XCIvcGFnZXMvc2hvcEhvbWVQYWdlL3Nob3BIb21lUGFnZVwiLFwiYWxscHJvZHVjdFwiOlwiL3BhZ2VzL3Nob3BIb21lUGFnZS9hbGxQcm9kdWN0XCIsXCJhY3Rpdml0eVwiOlwiL3BhZ2VzL3Nob3BIb21lUGFnZS9hY3Rpdml0eVwiLFwib3JkZXJcIjpcIi9wYWdlcy9zaG9wSG9tZVBhZ2Uvb3JkZXJcIixcImNhdGVnb3J5XCI6XCIvcGFnZXMvc2hvcEhvbWVQYWdlL2NhdGVnb3J5XCJ9fSxcInBhZ2VzL3Nob3BIb21lUGFnZS9zaG9wSG9tZVBhZ2VcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJjdXN0b21uYXZcIjpcIi9jb21wb25lbnRzL2N1c3RvbW5hdlwiLFwicG9wdXBcIjpcIi9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXBcIn19LFwicGFnZXMvc2hvcEhvbWVQYWdlL2FsbFByb2R1Y3RcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJjdXN0b21uYXZcIjpcIi9jb21wb25lbnRzL2N1c3RvbW5hdlwiLFwicG9wdXBcIjpcIi9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXBcIn19LFwicGFnZXMvc2hvcEhvbWVQYWdlL2FjdGl2aXR5XCI6e1widXNpbmdDb21wb25lbnRzXCI6e1wiY3VzdG9tbmF2XCI6XCIvY29tcG9uZW50cy9jdXN0b21uYXZcIixcInFzdGFiXCI6XCIvY29tcG9uZW50cy9RUy10YWJzL1FTLXRhYnNcIn19LFwicGFnZXMvc2hvcEhvbWVQYWdlL29yZGVyXCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvc2hvcEhvbWVQYWdlL2NhdGVnb3J5XCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvc2VhcmNoL3NlYXJjaFwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCJ9fSxcInBhZ2VzL3Nob3BIb21lUGFnZS9zYWxlc1JhbmtcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJjdXN0b21uYXZcIjpcIi9jb21wb25lbnRzL2N1c3RvbW5hdlwifX0sXCJwYWdlcy9tZXNzYWdlL21lc3NhZ2VcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJjdXN0b21uYXZcIjpcIi9jb21wb25lbnRzL2N1c3RvbW5hdlwifX0sXCJwYWdlcy9zZWFyY2gvc2VhcmNoUmVzdWx0XCI6e1widXNpbmdDb21wb25lbnRzXCI6e1wiY3VzdG9tbmF2XCI6XCIvY29tcG9uZW50cy9jdXN0b21uYXZcIn19LFwicGFnZXMveWhxL3locVwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCJ9fSxcInBhZ2VzL3BlcnNvbmFsL3BlcnNvbmFsXCI6e1widXNpbmdDb21wb25lbnRzXCI6e1widW5pLWxpc3RcIjpcIi9jb21wb25lbnRzL3VuaS1saXN0L3VuaS1saXN0XCIsXCJ1bmktbGlzdC1pdGVtXCI6XCIvY29tcG9uZW50cy91bmktbGlzdC1pdGVtL3VuaS1saXN0LWl0ZW1cIixcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCIsXCJwb3B1cFwiOlwiL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cFwifX0sXCJwYWdlcy9wZXJzb25hbC9zaG9wTWFuYWdlXCI6e1widXNpbmdDb21wb25lbnRzXCI6e1wicXN0YWJcIjpcIi9jb21wb25lbnRzL1FTLXRhYnMvUVMtdGFic1wiLFwiY3VzdG9tbmF2XCI6XCIvY29tcG9uZW50cy9jdXN0b21uYXZcIixcImxldmVsXCI6XCIvY29tcG9uZW50cy9sZXZlbFwifX0sXCJwYWdlcy9wZXJzb25hbC9zaG9wQmFzaWNJbmZvXCI6e1widXNpbmdDb21wb25lbnRzXCI6e1widW5pLWxpc3RcIjpcIi9jb21wb25lbnRzL3VuaS1saXN0L3VuaS1saXN0XCIsXCJ1bmktbGlzdC1pdGVtXCI6XCIvY29tcG9uZW50cy91bmktbGlzdC1pdGVtL3VuaS1saXN0LWl0ZW1cIixcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCJ9fSxcInBhZ2VzL3BlcnNvbmFsL3Nob3BPcmRlclwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCIsXCJxc3RhYlwiOlwiL2NvbXBvbmVudHMvUVMtdGFicy9RUy10YWJzXCIsXCJsZXZlbFwiOlwiL2NvbXBvbmVudHMvbGV2ZWxcIn19LFwicGFnZXMvcGVyc29uYWwvc2hvcE9yZGVyRGV0YWlsXCI6e1widXNpbmdDb21wb25lbnRzXCI6e1wiY3VzdG9tbmF2XCI6XCIvY29tcG9uZW50cy9jdXN0b21uYXZcIn19LFwicGFnZXMvcGVyc29uYWwvaW5jb21lTWFuYWdlXCI6e1widXNpbmdDb21wb25lbnRzXCI6e1wiY3VzdG9tbmF2XCI6XCIvY29tcG9uZW50cy9jdXN0b21uYXZcIixcInFzcGlja2VyXCI6XCIvY29tcG9uZW50cy9RdVNoZS1waWNrZXIvUXVTaGUtcGlja2VyXCJ9fSxcInBhZ2VzL3BlcnNvbmFsL2luY29tZURldGFpbFwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCJ9fSxcInBhZ2VzL3BlcnNvbmFsL2FjY291bnQvYWNjb3VudFwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1saXN0XCI6XCIvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiLFwidW5pLWxpc3QtaXRlbVwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtXCIsXCJjdXN0b21uYXZcIjpcIi9jb21wb25lbnRzL2N1c3RvbW5hdlwifX0sXCJwYWdlcy9wZXJzb25hbC9hY2NvdW50L2N1cnJlbnRCaW5kUGhvbmVcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktbGlzdFwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QvdW5pLWxpc3RcIixcInVuaS1saXN0LWl0ZW1cIjpcIi9jb21wb25lbnRzL3VuaS1saXN0LWl0ZW0vdW5pLWxpc3QtaXRlbVwiLFwiY3VzdG9tbmF2XCI6XCIvY29tcG9uZW50cy9jdXN0b21uYXZcIn19LFwicGFnZXMvcGVyc29uYWwvYWNjb3VudC92ZXJpZnlPbGRQaG9uZVwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1saXN0XCI6XCIvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiLFwidW5pLWxpc3QtaXRlbVwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtXCIsXCJjdXN0b21uYXZcIjpcIi9jb21wb25lbnRzL2N1c3RvbW5hdlwifX0sXCJwYWdlcy9wZXJzb25hbC9hY2NvdW50L2NoYW5nZVBob25lXCI6e1widXNpbmdDb21wb25lbnRzXCI6e1widW5pLWxpc3RcIjpcIi9jb21wb25lbnRzL3VuaS1saXN0L3VuaS1saXN0XCIsXCJ1bmktbGlzdC1pdGVtXCI6XCIvY29tcG9uZW50cy91bmktbGlzdC1pdGVtL3VuaS1saXN0LWl0ZW1cIixcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCJ9fSxcInBhZ2VzL3BlcnNvbmFsL2FjY291bnQvcmVzZXRQc3dcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJjdXN0b21uYXZcIjpcIi9jb21wb25lbnRzL2N1c3RvbW5hdlwifX0sXCJwYWdlcy9wZXJzb25hbC9zdGFmZkZpbGVcIjp7XCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktbGlzdFwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QvdW5pLWxpc3RcIixcInVuaS1saXN0LWl0ZW1cIjpcIi9jb21wb25lbnRzL3VuaS1saXN0LWl0ZW0vdW5pLWxpc3QtaXRlbVwiLFwiY3VzdG9tbmF2XCI6XCIvY29tcG9uZW50cy9jdXN0b21uYXZcIn19LFwicGFnZXMvc3RhZmZDaGVjay9zdGFmZkxvYWN0aW9uXCI6e1widGl0bGVOVmlld1wiOntcInRpdGxlVGV4dFwiOlwi5a6a5L2N5bCP5bqXXCIsXCJ0aXRsZUNvbG9yXCI6XCIjZmZmXCIsXCJ0aXRsZVNpemVcIjpcIjE0cHhcIixcImJhY2tncm91bmRDb2xvclwiOlwiIzFBNkZFOFwifSxcInN1Yk5WdWVzXCI6W3tcImlkXCI6XCJtYXBUb3BcIixcInBhdGhcIjpcInBhZ2VzL3N0YWZmQ2hlY2svc3ViTlZ1ZXMvbWFwVG9wLm52dWVcIixcInN0eWxlXCI6e1wiaGVpZ2h0XCI6XCI2NXB4XCIsXCJ0b3BcIjpcIjcwcHhcIixcImJhY2tncm91bmRcIjpcInRyYW5zcGFyZW50XCJ9fSx7XCJpZFwiOlwicmlnaHRCdG5cIixcInBhdGhcIjpcInBhZ2VzL3N0YWZmQ2hlY2svc3ViTlZ1ZXMvcmlnaHRCdG4ubnZ1ZVwiLFwic3R5bGVcIjp7XCJ3aWR0aFwiOlwiNzBweFwiLFwiaGVpZ2h0XCI6XCI1MDBweFwiLFwicmlnaHRcIjpcIjEwcHhcIixcInRvcFwiOlwiMzAlXCIsXCJiYWNrZ3JvdW5kXCI6XCJ0cmFuc3BhcmVudFwifX0se1wiaWRcIjpcImJsb2FjdGlvblwiLFwicGF0aFwiOlwicGFnZXMvc3RhZmZDaGVjay9zdWJOVnVlcy9jdXJyZW50TG9jYXRpb24ubnZ1ZVwiLFwic3R5bGVcIjp7XCJoZWlnaHRcIjpcIjcwcHhcIixcImJvdHRvbVwiOlwiMFwiLFwiYmFja2dyb3VuZFwiOlwidHJhbnNwYXJlbnRcIn19XSxcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCJ9fSxcInBhZ2VzL3N0YWZmQ2hlY2svc3RhZmZDaGVja1wiOntcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCIsXCJwb3B1cFwiOlwiL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cFwifX0sXCJwYWdlcy9wZXJzb25hbC9zYWxlU3RhdGlzdGljc1wiOntcInVzaW5nQ29tcG9uZW50c1wiOntcImN1c3RvbW5hdlwiOlwiL2NvbXBvbmVudHMvY3VzdG9tbmF2XCIsXCJxc3RhYlwiOlwiL2NvbXBvbmVudHMvUVMtdGFicy9RUy10YWJzXCJ9fX0sXCJnbG9iYWxTdHlsZVwiOntcIm5hdmlnYXRpb25CYXJUZXh0U3R5bGVcIjpcImJsYWNrXCIsXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLlupflupflupdcIixcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNGOEY4RjhcIixcImJhY2tncm91bmRDb2xvclwiOlwiI0Y4RjhGOFwiLFwibmF2aWdhdGlvblN0eWxlXCI6XCJjdXN0b21cIn19IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX19ENjVCRUU4XCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2Nzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0wLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0wLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNmNmY2ZjZcIlxuICB9LFxuICBcIl91bFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJfbGlcIjoge1xuICAgIFwibGlzdFN0eWxlXCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiX2FcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwiY29sb3JcIjogXCIjZjhmOGY4XCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIlxuICB9LFxuICBcInN0YXR1c19iYXJcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIxQTVGOSwgIzFBNkZFOClcIlxuICB9LFxuICBcIkBGT05ULUZBQ0VcIjogW1xuICAgIHtcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgICBcInNyY1wiOiBcInVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDk1NjI3X3R5bGM3aXYwaDMuZW90P3Q9MTU3NDkxMTY0NDc4MyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmMjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHTWdBQkFBQUFBQ0NjQUFzQUFBQUFQUWdBQUNCT0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEVJR1ZnQ0tiZ3JlQ01scUFUWUNKQU9CYkF0NEFBUWdCWVJ0QjRWbUc2Z3hWVWFGalFOQXhQdzFKSXFTUVVsbS8zOU1vR1BzWU82Z1daV0RWYjFDdDVBRE1uSWtvdFVsUmlxZ3JWTDFudUNPSjMydU9jTTNseDFTU0NIYTI2bzNPOEtKNVl6MkxEM3cvUmxUcnFUbkhVcVpQSHkvSCsyODc3dU9pRW5TaWtjUGlVUmxhRFNTYUlnUUx4N0pCSUJSYzVtRDhBWVFWWDU4Z1owbFcxdlhTWjJWWkRzSGtteG5kdy9LeDl6UHQxYzlVRVZzV0RoSStKSFRTSzA4M3duaVpKZER1emtDY0p6Mm9mN2grVzMrbjNzdlNsNjRtTmpBZE9FTUhFWk5yeFVvTWpHZllnd2pNWEloUmkxS2U5WEcwcFd4NGFLTXIydWRydm83VnlXSWc0T0lmSDlnV1VSdUc3dUJKU2F0MXFycHA5ekszWGFaZENzbmljTkZmWG9yM1V2ek4yaWhQYkdYSk9qeWFuRHZna3dNdUZrY2FCczBqQkpZcHFWREl5aXhzZjcvN241cDQzRE9FdHZhRVlQRXkzVkVpcDdCdHRJK0dEUFlkTDdmcWNrdmZmU3dwTlhiay8yM05XZU1zRVdNeExPbHZBRENKc3loTDhoWmRuWERCcGJ3NXY5TkxhbThsOUthTDArcFB4MlF6aTQ4Q002TVhEUWphVS9hTG11YjdHMWFYeHR2aW5TbE5uYndhR2lWdk5WWHBhMTJTaTJzTlJnYUdFQklBQXRBT0lBR251V1A4Y0JwZncwRzZMcXJqckZtNTd2OU9qSnlTRXBFaHUrSGJ2LzRKTFFhYXJLMGV1M20zUm9GWjZpRWRQbkN1Uk1hcWxiQk9UZHBxaXZHRVF1VC9DczEyVjgyakVmNGgwKy96VXlLSUZQbWdqT2g3V2ZYbkxZOG9PMDd2Lzl2SGM2WnAvSk1XRWNpeDJRVVpNK1p1ZlJNN3RQSldHbGxmVEtMOUluRmhpc01qa3lqU3o5REREZkdPQk5NTTl0OGkrd1RLVnFzSkt0dHNkc0J2eEtVclBTWDJvSGI5eE9RV3B1ZUJzVThlYlE0MTBLYjc2ZDB6VGpCeVdKTExiZmVUbnZkay9lTGh4MTE3YjV2L0k5NWRCcHF1QzREVkthWXBwZE1tK2ttS0kzU3d5VHRadWd3V2pKWnQxbHFJODAyeDF6OXpUZkVHT1BOTTBKZll5MHdVYUczaFdacTBhcWZuc2JwWTdCQmhza04xSmhLcWdSNFpEdGs3L1ZaQ3drSUFaMEVEQXdsaU1Cd2dnUjBFVlJnQUVFREtnSUZwaEIwWUJyQkFIb1Jha0JHcUFOdGhBWXduZEFFSmhCYVFFbG9BNk1JUGFBSG9ROU1JZ3lBZG9JTnpDQ01nUTdDaEFtckN3Qkl4Q0pnTW1FSmRCUFd3Q3pDRnFnSk8yQWtZYytJcVk0QXpDR2NtRGhxSUFEOUNRRURhaEFBUTRoZ1lBd2hCTVlUSVV4NnFnaUFFY1F5b0M4UkNvd2x4TUFDSWd5WVNJUURCUkVKOUNhaXBiNmd4Z0l3azVBQ0xVUVMwRXFzQnZvUlc0Q2V4RzVnSEhFQTZFUDhBZ2J6UFFnWXhQY3NZQmpmKzRHY0gxVERRSndFb09HbjFnS21na1hlWVc3Z045RDVnNTV2T0hYcGxWNnJtdjFuNWpweFoyWWhwVVkwQXlkWGF2UDBDa3JCMWlwaWxSSmZxZldFUm13bHhTQnl6RWFKbFBZbkxQaHlKS2t3Yk9KTGppcHJzSjZuZE5tY09DVDN2TmhVWFZ6dGVYamREdlhHRFRrbkphcG9jQ2VVcmszSU5RSW56b0h4Q2h4TlU0VnFnTVdhVHN0VXpFYkJ4Ym9qZi9SOThuSmJkamczQ056b0lhOGRFSk1ZUm0yN2QvRkU2RG93cDc3aDlFUXVjck5OWWtQR2lNaFBTZGNsV1lwamdCZkdjeWkvOXZPd2FrSWpjSDNPazF4a1ZXV1NrMUJzcHowQ2RFOFIzZGJnQXFDdHIxdDlqUHI0K0RHWmh3Rkt3enllUHhEaXBaQmdnSmFhZHczVG94QXZiWEJKTnQreUh3WDMzd0pPWWd1WjdRWGJKSFdFc2NobDZ4VkhXVzZEUCtwdE5WTXQ1eWVPSzZ5bWg0Z2tGU25YTWJndXU3NmViWThuMXNXZU5OYXJwZGMzL1l3M3V5RSt2MS9TWTVLRk0xTTRyUDk5ZkoyTC8rN3Y2eWtWanQ3Q2tDekJjRitjU0FBNkRwbk5ZT0dOcUFZendUYlZTYmUxQ2hXRjZZSWdLN3VWYmxHVXBaOWc1WlFxMDIxYlRnVzJJd0dUV1JBdkVabUQvbnJGeUNiUmpwLzEydjE0eUdmbjJKWWhzN0NkZEk5dTZnSHRxNXhDeHBIRGJXQ1ZSbkJMUTZoZHpRRmc5a0ZzbWtHb2VMUUFjVEZMKzZUTElXVHVRYnZqSkVHai82cTk3TUpNV1p6QnhTMnUwS3BTYlpsVTZzUmtWeGdHQ1dZZHdUYXVEQTFOTzNJVlhqZFFqbFRYMUVQbHZ1eHBSMnVWMWN6dTdzdUhzVjBiS0d1UmhPUDhVWHo4cHJXUUtMa1R4YTJLdkhKdkNyK3RtU3pBbXFpVkRvVUlWcGQ5YXhybVZ5OTNwS1BuUisrNXBZNDRUTWw1akZLeXJZZmc5YVVGM2NKTVVSUkxPU0tIMkZiTm1MS01rcWt1UlJDNkp6eTlyVlFSaW5TSzhwQU4yWXdzQWNMYjJlSVZJZVFDNWk0dkRIWTRLa0NuNEZ5VUVpWG1OMFVGRnNGQ3RPaGU3UUcwa2MyQ21ZaENCaDRKZWNDUGhuV0I5WWFFSVRzUFNlaHNnbVlCZ0RjSldJanBTTjE2ZVpPb1FxbTR0RnFuUEZmeFZ3bFVZUllYbG1wcnViQVo5Vk1WenBlaGt2eVpZSGdGcHFXd2Z2MXRYWTdnbUsvVU5FOGVyME13aVdjRk13d0N1c2xSR01SN1JKU0FBQm9UREZCM1NsTUhQSTd5RkxiRzJweHprcGJzZnMvOGt4YXV5YklTTjYvU3ZCamdrWTJ2aC9UNmZzNGpxSEQ3UVNIK3crbnlsTmx5QmJ5alVnMkFiOVJoTk94bmxWNEsyRDV5RExjYTVRZ1FRazNyczYwTHY0aHBPN1pCZHRtQWpCRm9mM3VWWWNRankvd1ZhRi9IZ1VPSDR5YjBXU2RDZ3o3SW9rYUMwS0VJcjRERUJ3OGozcDRBMklnN0pMZlhsVFp4SWIxd2RBdkRreVhIRE1GdWR6cEFwMk53T3NSY2NrRGdWUzdMYlA5cDFNQ0pyaFZwT0ZpV2h0OU83aDVmRU1lL1h1bjdSb0VFL1Y0NnFYaldTQXhLS3BNMGFoNXBNbGR6aURGS3BwbUN3YUdqOGtvaFhKQ1RzNCt6bkZTTmplMEZQTGFrYVN6RXJxMmEvb3JqV0lUcFA2cEZnc25CLzVBZzFsN3pORmJ3dFVJUW56MFBZRlE3b0MwalIrSk5PKzZ0R3hjaWRCTG81MVlOYzF1cm8zOEZXZkxpZnd2cXd0MW5kSXk5K0ZoYlVqT0JiR1lJMC9HWWorNldqYkhCVGJKcmdUZTZPQ3ZiSXF3V1VobnBNOVYzak9wN3hsb0lUdVF0Q0FwOW1jcU90REdvTi85dm1jeWYrY2xpVDZzcHZ0cnRhcmhlODZQcmVNQ2k0NkxUOVZNWlZqdUlvd3BzWmZxZjE2SmgzWTFpbW1uV1F2aTlkSWl0RXl3azNNYXdRTkpZVUxBanQ4d1JCUE1INFJFcTh5WHVpVWdOMnkxQldKOFpoMGsxOWtRV0thckcvTmM1UTdSalJCdnJndk5iNHY1YTdLcGl2ajFCRERycExuUzBnNlhUMDlSa1UwdXRrWUlrK2FKbVJwZEQwd2MwbDVPQ2h0QTNTbm16WkZDN2pyYmh4dlViSmpjSDZidTNvbFM0Nzh4MjFWS0c3T3poZzNxZWo0Zzg3aisvV1pZQTNUTThET2ptelRKdzRzVnlNaWRFWFYxalFtU2N2aGovSkpGMXpwRU5uVFczR2NlKzFGaUlqMjhiTS9OYlY3V3IzajJlVlBYSTluUEx6WHpyVHJTQ3hjUWhKbVNLdkRSQ1RYd3p3QjJMRzg0RVhudTBHSno3QXRvQUkyK0I1Nm1wQzFxdW5LMVo5R1hka0k1ZTdVOFF0REZaQk5jWlpEUlF5T0hZRTJMVVVVeThDLzkwL2V3UHFSQnBaRUpZRWdEQ3MzSk9zUEVDdFA4WkNJRlFCemN4WktrczB3WlozSmswejlsaGJnK0RyQjZmZEtTRFVyRGw3Z2h3SDhjNkJvR0tjRkVFR21kVVB3VUpwa2hSTGdwMDcxZVdjMm9wVENjajlEc3FsMHF3dkpDcWV6WTFyZFRwTXRleENDQ1ZRcGw2a2NqTnZDZEtwR0l6cTJIOG5jeXlZd2lQYWhkOWFRZ1IweFVhSEkrOS9yVDZySUx6MjVlZjZZRVMvdmdUV2Uybm4zNHN6REw3N0ZOVkdTSmV4WnNZZGVlQytXQ0c5ZFdXZVh0K3FBRkd2aU5BYzk2L1FJNk1BNHQ2NTNjcnJyZ2NJc3J5VFJiTTdFNUh1NWpublYwSHNXUnNqU3JMME5vNDU4ejM2dkR4aEJGNzlTZXBXZ1dyM0VZQ2FCcU5xVnpUZjRUcWg5U0h0TWN2TVJkSDFQektMdVBTWkNSWU5XUXNBK3kzS2srb2JwUDJoVUJ5ZXBLZ0ZzSUxhNEdBNURTR0tQV1o1OHNWRm1xTCtLRWVhTzRLOCtrMDhNUUhaUjRVa3kwNHZkS3VRKzFCSnczQVVkOUZFc3hlc0pIdWxFRXpsTUJzTFc3eWJyUTlucmt4VVp6cWF1QWpwMVRGSWJrMURnank0bllNYlNKc3ZDcksyUWtyN25aOTBwa21mMEo2RkxPbnpZMjVSM0x2ajI1K2Jad0dobzdHYnRJTUNHVHg3UktwbFRjZnlmVklZdm04WFIwdFJKNjFDOGZhWGYxRGE5c1RuV3hISmc1NjFIb0NLQ0laYzk1NTkzaHRqMW1oNXJ4L1IxWnBtNzBhTER1UFM3S2FRSzFYdmZPZFJUeEtFalZiN2pCb0F6SmwyZ1poMENXNFgvYU84Q1hOZEZOSno3UTZTQlQxVkN3bkpoc0xHNjdqU1NHVEtXbEVmUWVMeldpRlRpc1REUk02bUJTeFpiZ2RSVjN5Q3dhb0ZqUkhFZUhEQ2E4ZlRpYXZIakhpRWNudWphVk56UWJ4R2tHQm02bjlaM09OQk1ncE9qaWE2OTlkTy9MYzZ1Rm5GREJCcDJOd0NrQVJROUdmZWEzYkwvWUR6NWJ1b1BpK0dLUmJWRXNiNG5VYmZpNWRmZDdUcEVxdHB6a3lMb3QrcXFCQXFhdXVJYmdwZTBTYjFBbVZVMVhTejR5TW5iMi9iMUxoZkpMSU4yUHZJeVY0MWFRaWlkQlJNRW16ODF6c0tCNU9lOXlrZW15MkhHQkFWcmVjZFdLVHc1MTVaZS92Qm5ESDZBK0pkS0ZXc0hKQlVBQzJxNnN3Szc5TTdwTTFKdStKQWZYWHdsR1pwVlhpSGNtcXJBbCtUbWZRdVJlKzZpVkZPcXh6alQ4VHZMenV2K0tqdjZDdlZOUzZ6VEl0cEMrLzJSQmdBMlM4OExXSjRDOHJFTzJscFMyc0I3RHdqS3JualVKcEpuaGF2VkMwS0ZRQnZCd0lFRmNsbVZ4cklMVHRLQWVtV0RoUXY1VVEwVWFhQmtEekFOK3RPSzd4dzZjbFdHb3J2Zml5OXhOcE1GMSt0Wm5yclYzVEZxMlpCdGo3MTBuNFRPdHRLL1lFUzR6bTZKZ09RRHhLaGdzdHI2LzlCNC9ENW1nN256YVpWV2ZicTM2QVJUYzRoMi9SM1I5ZHlCeWlmTHVWRFJwSityS0lzcnpNd25Gb2VtNHc4aFNqQjFGMXlhTktnMGdMc0tXMTk3TkszMUlSRVo0SGFXTWlvTmtmR3VNaStxRGs0TTVJRXVlUkpaUjNiQjF6eXp6S0daWkhnZUpZRkFrZzdXSVNOR0xCQm91UFlPV2lBcXl2bzB3RVF4WEZUTFhWM1Y4bC9ycDBSZXRUTEZiL0s5LzRZR29yanhpTmQ2Sk5qeWxVeUVhY1prenFtcElxTlNCVVI0S0ROeFlJU1JHWmRZMkpqbWlxbWVJcXY4bHNUWU5IK3lldDBKbFViL20vZGQrVU41eWxKTS83dks3NmhRaElsRUpReXZ4M21hOEQrK01NRGdZZ202MDhLZUVPemNCcXRtYlllL09zVTF4TUVWT1VvSmVtb2ZwZlIrVFhHc0ZsTEFtendNSVlGb3d3WEZZUzVuamlQWERaMVVNM3BlOW9iTjlNWDZ4Y3BGU2NPZmsvSys2UlUwNEV6dDg4RHkwSDlnQ1g3K0pUQUlXL3l6d3RYL2FZSkJhNW9YQmZJSDljcG5URkgxOEFEdlBrZzZ6UjFtMkJXcjE0ZE92emN6cVJsNCtRQTRiSzFZbDBJUzhlRVE2QThPMnExckp0OUJWRHVWblFNaENPR0FxRGNzZzNZZjFPUzZCMFN3YzlVUzZDNlN6N1hKdWZkWEFnSDB5WEdBVFkzbDNuUmpTSFlnTG1rZWc2eHVycVMwQkx6ZktabXlKR2R5QlhURitHN2lUQjZRK3hTNUNLdThPd3hmTkF1UFZOcm8xOTFyU0xvQ2NLV0QyQnl1UmlranRKTEsvQVVXSlJOVDAxV2l5ZFNhOUFPWFIzT2djdEF6NlJ4dFJqb29uOHB0UnlNS1BSbURvY0ZLQWNIU2J0MXVvQW1aSzFucVdVNlY3aUE2THlQMmU4RXMra1g5UEZsU3M3RFpNTWUxdGEydTVzYmUwbGYyRG5xbFhBRmxMRXhkR1ora3c2K0FMSDJTYXhrN2drUytvc1RiVGxJZFU5SFIxVFlRRy9OTmtsdWFHMkVLL1pVbHZrUXNjTG80U1J3aG9KQVZ6aS9CQ2xuY042RVhKczV0MUpRZytoTGtHT0ljZEQ5eUNCTmJ4MEFtalQ1ZXUwQWVmVHJmQ05hMGdUMGlpWlZyamw2WnhHcE1tdkJRWkF0c2plTENlSmFFaDlmWjBPZUhOcjRheUd4bXdZUkZFNHkzWitEUGVEaDMreG80eDJJZG14MEtyVmNLemFxMWJGUXNSWUJSM1FuK3VqcFVGdXo2WVZrSVh2MldpUUZ4SzhDUFlndVlkeFFwaDdQaWU3d2RVbmpsY2pvaDgvbnA5MEtLMWdaeXc3SG5jRHU3MHE1SVR0dXovREcveE0zSHhaR1NuNlBpRmlFeUtPdUFrV2dlM3ZidnA0YXp3NXZYOXB6ZGRIQWNUcTdoSi9YQ2dtK3dHcTI5ZDc3d2ZPVDhSZW9KaFFBR2gyOVNLNDVSK3R6OG45QWdnd1RIYnVVSmJXaldsS3VLQ1FrNmg3OWNxclBlOVJWS3lzeVhmSkJxeThKZFVHRkdhZE9pRlNoL0d4cFZCbXRudUhnUVgrTkxWN3A1NnBOdTcxeVAvQkVvSE5McEZ0cmh0RXJESWZjclNLS25CSmozbUtDUmNnQXMrR0dhRHZrWCtzUjYzVHFPdlVzVjZqUW5aZmExTkxlNWRSa2RFUVVHNzg5RDhQdkh6VmZMMGE2VEwyY0dQbmlGTXRETWJEbGw2aVAwLzRvRkNvcjcrMFFaeDNuc2FHUGQyUEQzQUNObDRXT051Q3hJTUJEQUdWVGR3aVZaK2N2VDdBTHlubXFLcEM2RzhoS01maG95QjdlWGtVdEFOaXFhN1NMTlJTMFd4VzRkRnNFTk8xRm11MUVzdjkvWWtrUFVVdU80V2wzV1AzVU1nTVFPRE1lM3NxeDk5Zm0wV2RUQjU5bnYxREhFTVo3dGx2TFhvTExJRXR6LzBxN3pEU2lYUm8rRWpnNHAwN2kxT0dCOEtXK0doMFJMa1AxeWZCaVZYVnkyRkhOaFk0VVRKWllPRlQxbmsxSVlBeVFoNGdqMmpzUE1ENkNZRmZ4ZCtCYm1Sbm0xNlVUZytYTWVZZUwza200WXVzT1F3MkdHYkRDVUkrLzZlc1dJazd1RCttODBsYm9pNHlXbVNKYnhZUUNrdS92U3dwRlJBMnY4cGFSQmZOaTJjOUpaMjByeUkva2UyUVBTRlgyUUZsMlFTQnpTYWtQREV3cE1rVFpYS3VYR0dLdVdMbW9WemdrdWo0cnRHTEw1RDh2SmdaMGQzajBMeDBmR0prR3lBM2hFSXlHYVJ5Nk5CRFljL0tzaUV4R1V5RDU1bmtuTlFoWGlydXdDTXlicXFvTHFFSzlMMTFQUk5US2h5MkJHcjA4ZFgzQ3FJdW9TS25Ybi91SmppcUlzQ1dYWFpwVnpFNWt6NW5CR1F5UEJtWE1HdEdKa3BGcEdlU2kvODdJamsydy9wSWs5Q1VyTG1ta1JiYVJ5UFc4aklvTTErQlRaS1gzeVJ5N05EZmxiZG1uMFo1TUQxSS9sRTIwZlovcURPVVAvYlI1eWVZNksvbUVlWHhkUFpXeHQrek83ZFQvampBYTNXRWJQYUN6REZUdmZnNTNSak9idmpZMmo2ZnBXL255d1pOWkM1dncvdFdLS0RkbkJqZHVYZzkweWVaQVVCbkxlendCK0N1TDYxMUhodWVWRVY2ZnM2ZUkvUVNmc3hPRzNKUHZjYTlCTnlkNnBjSnJ6ZmtxbC9ScmlSY2JmVE53L3dFM3RTZGhEdWpTRHV5OWU3b2JtUW5jbS80ZmdjemFaNTdyVm9GUHJ5WUY0cFFTQmZTUXkzUDJHcWN5eGQ2NEVQbkRXa0tkVjJtN29YTzZqd3lUVXZ1VjE1THBNRDBNRjNrQmtySkVJRk9Kd3hoME9uN05GbUFxR1dtdzJWREpJOEg3V1NNRC9IUktJRk5aWkFMUFZNdmtlNXlETk8vckk4ZDI2V1lwZUpYT2dqZFN5ZkxnM0RnNUdrNzRPamhOYnNIOThEeEFWdFhUd1dJMTBBeHhWMEZXNCtEM2tXWk5QQmx6WjNFS1RQZzRWQTRLRGgzQjgwbFBodUtRMkdqUUV5ZDVHMDNQNkl4b1hIRXZKc0hwcHZOWDlwUCtQZVhNT0NvYUwvSi9wS3dGLzcremt0Mjl1SW1JbktidVYzWEtlR1FXQ1lUUS9adklVY0dpUkhoZFdHTWJ2MVozdGw2WFZXUElBOWdlMkt2NWJZQmx3SEw3WE9CeGxJVC8wKzg3ZWRkUnMyM0FTZmpaT1BBZy9tdkRhOVliaE10anp3UmVUUTA0UzdKUUMyaUROK2txUjNGUVdZWmF6YjZsV2UxbTIyckRPNklVRE1BRHFDVnNUdXpiMk9nRGVPMmFVVlBZcCtQMmRaMk01OU91NmlGRGM2WTllVmZmWGQxR1NSZWc2MnhPMzM3MmpnUzlkTi9kS3JLL0FEMXlFaFRRWGEyd0hTVjFVc1Y2dXdwSXlxSmVHYmk5VTkzNDBRSERXRFhFUDU1VnVrZVlpaG5uMVRhYTlTUjZrKzZwK2dpUzhuVC9FZmV6QTNnbjYxa1RJQTNCL1pNOVk3M2psbU04OXFRWHFTTmg0Tk56VTJDOWI5OTg5TXpQbWZSZXhyU21KaWU3SzhYcEplY3hqTFJhTE42YldGcE1XNEJ6SGV1alBLSVhFUitwUG1JVW1SK1ZMdHJTTlhSbzVWd0ZWd0lZaU9VU2lpL0R4Qzh2SERjMjR0QThQYkdjUzl2QW5EbXZJY2hGU1JjR1lzZHdHSTdFbEplVVc5bG03SmIxWGtKeCtyY0ZMVC96NHc5NmlrYTZ6Qmo2cTBhaTR3cHcrckRGT09hQnpqd2dVUzlsUkQ5bE5SUDZTSFRKbm5IelNqL2ZtRDRQRnNPZDNiQzViQzhxTnpFQkFNaVZEbjhMakpWQktXSjRseHpMeEh6Y21pNTRISzA1OUpJZWU4aWNhNkErU1dRV2FpV01FZ09BZ2xRMHNqVFJGYUFCSkJGUFlBbWpXVkhvMFhPUldpME9YNFpzc2FTMEVQT3dYWWdKSUdPTzdOcHlXUHpGVVUwZzhWQk4rTDZPRU5mdjY1WWNYeTg2amg5emMzRHhsTjBSajhiT0Q3OW1XYkhxeXlKdVhkaUI2Mk5OblV5cGw1dXlTb3h0cjRVSEZMUHFvdlFxUk5IM1BFeFdjWE9NanQxaWJ6cmo2bFJacGd3akoyaFE2T29jQzZlTXRzdjEycHY0NWZMd3V0MHVLeVNvSkN2Tm1CS0VkWkhMT3RNU2U2VEUvdkN3M3QvYk94TVR1a3N1OTdEMlNjTXZnSC95Y3N4YVVlU1ViNWg4dUVrdzdkR1NZZkREU21NSlFaTEdCUm9CbnNMNXJqNTNEbGc0ZlZraVNHZmtjL2dHeTU1a25kTzY4bm5XVm54MERXV2xMRnVqT09tZS9xbndPdld3cWsrejdwMUtWQXFwQkp4cjAyMURZSFMwaUdoSXFVaFprby9CT0FQV2hZYkZLRkdhSkdCYzhKczZrVVRkaWZRbUxwTUdrN1Fxak12V0g5Kzd3dTBVRkdzS0VSZjlGWWVybGtjd00vRmFFVmdxVEJWdXJ1STh1bmlBdG9uakQ4cjlmdnlzTTBvRXoyejBiUFAwSm5uWHBrM1M2ZDdJL2RHTFgzRHBkZ2p1cUkrc2N2cWhDMVlRUG1kYTVWMHNiL0lyYWxOY3ZmdXc0VVZBNjlmMThySHFEM3VhR2RyMXBGakREMUt6UmF0d1NESEY0TTllb05DbEg0SXRRYnpHMUtuZUtPTFJublRJZHRNejA5d3NsZ2tPSGM4NU9rV21Fakt4b0VGcnFrZ3hlRGRicTlkRmJaT2QyVTdwc2FORFZGc2JKTE9vZjIrQlkxTkRYNmhxbzA5SEZPalJZeGZnQWxTMU1ZZmpxdWhLUDhKY0Q0Sm11TkdWYmVvanNhQnEwaFRnenlxTlVLdVBpTmFvNlFHamVWWmdsclNockJDNXJXSStQS1Zld1cwUjE1K2R6R1BVQ0lpUUJ4c1FzR2lNbC9mWWhaZzFmbzZ0UFpZVmJ5Y1VFaGdCMi9STzB2MkRpLzFVZldqZTgvL2UwTWd1UEgzZmpuODZOL0RuNU85citsaVU5d21ROGRUUWRBd0ZvOE5ROEg3ZFdsTjBEQW5xTW5YS3dQRXZBTG5xa0pHQ1dYNjdLMG9WMFpodFZNQis5Ylp5Y1dTWmdCNGZxN2JCQ1FCRVlCNGlvQXhBSEJJVFdSbzl2YVE4WVRqNUtGNWI4ME1xUnZNbTNTY09HUjhUZll6bW1OVVV5UXJNZytNY3FTSm9CT3dFWHllbGdkcXF3RUNXY0R0TjlqRnQrWHZnaDVBZCthWXU0dUxTeTlKV2JFczNtbGNha2p3S0FWRmhTeWlnZnk2M0ZCVnA2YTRoT0JSR2FlVHNISWQyM001cVNVcHYvVnA3UTJwVGhrcmtLV2RFaXlPZ0pyMERNeTE5YlRuRzh6bklPeS9ET1lHdTY1UGUxQ2VtOTltMU9Md3ZvZTBjcjJ6dnoxR3NTN09CbHg2bEJmTE85cTlHemhBcy9CVGw5QWtNQVRUazdidkJPRGkxbnZraU5RUUdFb0pUbDU0dEZnSThZQWNkQUloS2dQSWVVS28rT2pDN3ptSlVHVVZuRUNkMFo2alFRSExwWUY1RGlTVk10ckp5d0FuVkZZQk5pS1F0Unc1c2taVitFemZDd0k5cEFqcnhqaGhYS04xQkFuMHlGRDZ6NFNxYTQ0Y2Fja0JVQ29QZmVXQmExeWlnWHU4VXBMenNXc2V3V2sxSzhzZXJNNkVCOFlEQWpuZFNPWGxtU0NrWFQxVUhNbmRYMXYvK3MyQXlmUzc5L1dGKzVscHhhMDNyZ0krVTNkNFJiR2I1OGs0eHhNL2lhaG91S1EwTXVneEloYUp4TWpqb01pMTZoRmdmYXpIWHZiQng2VWxiTlBOcytjeTNhM0h3cFNXanBTVzFLV2FvdXIrMDNQS08xY3hvcXkveCtVa2JBaVN0Ri9mWFpvRXM4ZEhWdFQ1R1BpWkxaZHZSZm5IRjNUUU40QmJ2Qk1uUTdhcVc4MEJvNTQyWWoxb0V1OW94cysxRHQ3dnk5b1hmdzJyMFhIbnF2dFRsWnRtUEdCMnhvaUd6OFVRYU05em5jUUJZUktCOEVrZUU1a2tZQlJMeWd4bGtvck9vVTVTQm5ySG04Q1p4cE1tR0Q0aFpGQXNtZG9FQitNTTVlMkorUHdFQVRLWk5HWUNRck9JbXhMdzQ3RU9Md3BnUXlHWm1hS1VvWUZCRm9FSTR1ekw2UURMaGtyNTBjYytRYXlkODJIalA0L0E3amNqM0Q3dU9UYkE5anRvOVZONTZ1L0dSamhEM0V2Z1BaZzZmWTU1Z2Yzcy9CRDFOdU1oRXl1aUM2QXNLUlNpSlJidThsSFp4c2h4TEp5ZVZ5SnVlU0twZzRTaE9Jc0x1SnRlSGhPQ2lscUgyaVoySGF3eVVudFNyTTNXRnA5MFRmUGJROFdvZS96cXNtalJVZVpCdzBHamxJMlBGK2IxdjlHNWhYUGkwSzEzWUJVUXlxZndSLzhYaWkyVXlacW5sTHBuRDdYMG9ldnVxejRMbnlzQzhjR2RuMmNmeU1Va1hXS1kvTUhZekxtam1kcGhzZ0I1R05IeDVIVU5rSVZwWi81L01Xa0ttaDRFN0h3dkZhaDhMOXNmTVNYNHErK3RBS3BlZVpiUWxBS2VKZ0puSVA5eVlTTHFCUVZ0Sks2OExTVWxOV1Y0WWNOd1lZSDYxdzRieHIrTXNIQ0o2MUZSZUZiWkJSeExzUFY2SmRPdFc1WStIaEpDZTBUTGM4WWxnNmIrRFBvU2dNNUEwNWdFbTRZZVlaWWU4Z1dPd3R1bzNnN1RyaU9lUit6QUhYcG9GQlVkWkNzL0pqY2ZQd0ZBbVlYTXdCOEFBQUQ1RFYrM2crWExCSkVEb0R3dkRoN2RUWitqUU9CY2YwWndFVTJPejc4Q2wyZGV3RnZpWEdvV2tjVy9PZ2lmcGJsNnJEeHpyYWthQndBQndKc2dQKzRwL0VEMnVRMkkrendLNXhGY09aMjNBeEJIYmVpSHRpSW15dCtoUTBKVzhiQWUzK1VKRWhkdmNCZkpqUGU3akN4MWpqaUdCRU44MW1hRW1UL2tIUktSQjJzdlFzdVRZZy9PWDVjUVZZaHZkQnJKbm43Y0JDSzRGRGtGbThWM0dFSUtyRW9WWlkrMytJYWcrV2Eza0ZTUmMxZkNmK21GdW9oNTVqOFlSRFR5cGluZ2ZDRjg2ZnlmY0kyaWxKSEdwdzlJbGNVNjRuaWVyZk11MGlrOS85TU9oSkFINVYvWnFiek1pbHkwNVFBaStnL3JRR0JvYi9rSkNjUDVHNG42VjlldVNSWEpObXdyLytYYjlwdXZQQjZOak5PYytIK3FVZWM0d3FXZlV6cGQ5TElPaFBuckZWNk5XdjEvSmQ3NDN5SmJkR2dheTA5enc5L2dia2txZWZNaUwvLzdLTlVQYlhXMzR2K3ZiVDE5MDdRK3dzU2pEWld3eEV4dGlKVnIvcG1hNk9JdGpjbWFXR296VzZ3MGxvbXRKbGwzOURhOVhKRkxoU293MGYyZG1IUjdJV1k2dlJaejNiN0VpaE8vaXFXKy9vcVY3c1RFVm52VFJNZzJZOU0yUkI0L2doWG9UYmNZZEV4RE5FaHpmUFJ2OEJwdENxYndOZjhoWmV3eUY2Zm5wM09lZ1NESktKSGYvS1hJWUliRWszbmFUUXhpWkRNbkhzSEphUkNaSDgvT0JsYkpVOGZUVHVPUndJcDM0OTUweTEzUk1RMzdseWIwL2Y4R3I5RW16bktmN3ZvZlVzYkhieTVPendWaXp3b0pMVGN2M3Z6bUwwVXpCNE1XVFR5Wko4MkU2T2Jaek96K1JuQnlHbUk0OCtPWnRyNUJWRGxOWDV1R3A0TFgrVmJvSEg0UklKV21HNmIxTytWejJZN3IrU0FFSXlpR0UrUTNRcDlzUlRNc3h3dWlKQ3NxdFVhcjB4dU1KclBGYXJNN25DNjN4K3Z6UnlsSWIzSFEvWGUwaHpoWkQ0VUw5dFZTSmF4aGkzek5DM2hWUy9zTDZ5OEJjMFQ3eGdYTFcrMkNoRjNqUDNhV2IzMWlVK0x0aWZCOCtZVnU3MWdFNzJXUldiTnlkVXQrdFhoOVcvVlhDb0ZkaEVaQmZsWGVod1UrZHNvNldSYTVEbDg5SEV4Wm9rV3lkbERjTjRvWHZhSm5QZEFNcVl4dHozcFJHREl2VCtuVjBxSlhVUldSN3kxOVRhelV2MFIyVnBEcFpjQVlxeHpTNlp5UnlwUVhQTTRCTmtxQW1XVlZTUU50VUM2MmdHdkFocTdKSWVFTVYyc3NYR0xqZ3dEbkFwTi9UOE00T2NodzV1SjRVMU1hSjRxK01EWWlTaDZNbk5KaERqcHF4Yll2dmliSW9HR0pVUCtHL2Q2SXhZcW5WcmxDdnJKdHIxeXJSTFpSTDN0ajRVU01ZKzhSU3NvK3FiQ0NFOGZ6VXVTdGVZSDJJSjNXVjB2RG1SOTZiUnZMWW15eE9xaXIwRW5RZjk0OE5IUmFFVGkwY0RrQVJjQ3JHbVBBcVNhTDdTMUUwUVg5TGw0V3lJKzM3V2RFQ3BEVlVsMXBCUUpaZGdBPVxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0OTU2MjdfdHlsYzdpdjBoMy53b2ZmP3Q9MTU3NDkxMTY0NDc4M1xcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ5NTYyN190eWxjN2l2MGgzLnR0Zj90PTE1NzQ5MTE2NDQ3ODNcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDk1NjI3X3R5bGM3aXYwaDMuc3ZnP3Q9MTU3NDkxMTY0NDc4MyNpY29uZm9udFxcXCIpIGZvcm1hdChcXFwic3ZnXFxcIilcIlxuICAgIH1cbiAgXSxcbiAgXCJpY29uZm9udFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNlwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmdcIjogXCJncmF5c2NhbGVcIlxuICB9LFxuICBcImljb24tZGFpZnVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMlxcXCJcIlxuICB9LFxuICBcImljb24taW1hZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNoYWthblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1N1xcXCJcIlxuICB9LFxuICBcImljb24tdG91eGlhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRhaWZ1a3VhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwY1xcXCJcIlxuICB9LFxuICBcImljb24teW91XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjM2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aWFuamlhamlhaGFvd3ViaWFua3VhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWljb24tYXJyb3ctdG9wMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NVxcXCJcIlxuICB9LFxuICBcImljb24taWNvbi1hcnJvdy1ib3R0b20yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zb3VzdW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpYXphaTQ2XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaWFuaHVhMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyNFxcXCJcIlxuICB9LFxuICBcImljb24teGlhbmd6dW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV5ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwOFxcXCJcIlxuICB9LFxuICBcImljb24tYnVvdW1hb3R1YmlhbzM5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1taW1hXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi15b3VodWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWppYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZlxcXCJcIlxuICB9LFxuICBcImljb24tZHVpZ291XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11c2VyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaWFucHUxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14aWFveGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWd1YW55dTNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRpbmdkYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2xvY2F0aW9uX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoYW5ncGluXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaWFuaHVhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGVxdW5laWljb24tXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kYWlmYWh1b1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMlxcXCJcIlxuICB9LFxuICBcImljb24td2VpemhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kYWlzaG91aHVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi16aGFuZ2hhb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MlxcXCJcIlxuICB9LFxuICBcImljb24tdGlhbmNob25neGluZy1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV5ZTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXF1eGlhb2RpbmdkYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXFpbmdsaWh1YW5jdW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNodWp1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaW5nZGFuMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhMVxcXCJcIlxuICB9LFxuICBcImljb24tcmVueXVhbmRhbmdhbmd1YW5saVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MFxcXCJcIlxuICB9LFxuICBcImljb24teml5dWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi16ZW5ncGluXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kdW9iaWFueGluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxY1xcXCJcIlxuICB9LFxuICBcImljb24teWluZ3lvbmctXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjI5XFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnQ6YmVmb3JlXCI6IFwiLTJcIixcbiAgICBcInRvcDpiZWZvcmVcIjogXCItM1wiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2VhMjkxYVwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMjBcIlxuICB9LFxuICBcImljb24tZ29uZ3lpbmdzaGFuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZFxcXCJcIlxuICB9LFxuICBcImljb24teGlhLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU5MTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3V5ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZVxcXCJcIlxuICB9LFxuICBcImljb24tc2hvdXllLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXlvdXhpYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjIwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kdWFua2FpbGlhbmppZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZVxcXCJcIlxuICB9LFxuICBcImljb24teW91aHVpcmVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjM0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xdWFuYnVzaGFuZ3BpbnJlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzOFxcXCJcIlxuICB9LFxuICBcImljb24tZmVubGVpM1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzYVxcXCJcIlxuICB9LFxuICBcImljb24tZmVubGVpcmVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjNiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi15aXNob3VodW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXR1aWNodVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0ZFxcXCJcIlxuICB9LFxuICBcImljb24tdGljaGVuZ2ppYW5namluaGVzdWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pY29uLXRlc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWJcXFwiXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9zdGFmZkNoZWNrL3N1Yk5WdWVzL21hcFRvcC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9zdGFmZkNoZWNrL3N1Yk5WdWVzL21hcFRvcCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tYXBUb3AubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OGY1YjViMiZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcFRvcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcFRvcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoKSB7XG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL21hcFRvcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbWFwVG9wLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjEyMDBjMDE3XCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovUHJvamVjdC9naXRodWItcmVwb3NpdG9yeS9zdGFmZi9zdGFmZi9wYWdlcy9zdGFmZkNoZWNrL3N1Yk5WdWVzL21hcFRvcC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTAhLi9tYXBUb3AubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OGY1YjViMiZtcFR5cGU9cGFnZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJtYXBUb3Bfd3JhcHBlclwiXSB9LCBbXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJzdGFmZmluZm9cIl0gfSwgW1xuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJzX2xlZnRcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJzaW1nQm94XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNpbWdcIl0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5zdGFmZkluZm8ucGljdHVyZSwgcmVzaXplOiBcImNvbnRhaW5cIiB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJzX2luZm9cIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJzX25hbWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN0YWZmSW5mby5zYWxlc05hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic19jb21cIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN0YWZmSW5mby5zdXBwbGllck5hbWUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wic19yaWdodFwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJub3d0aW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY3VycmVudERhdGUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMCEuL21hcFRvcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0wIS4vbWFwVG9wLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJtYXBUb3Bfd3JhcHBlclwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzdGFmZmluZm9cIiAgPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic19sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2ltZ0JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNpbWdcIiA6c3JjPVwic3RhZmZJbmZvLnBpY3R1cmVcIiByZXNpemU9XCJjb250YWluXCIgPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNfbmFtZVwiPnt7c3RhZmZJbmZvLnNhbGVzTmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic19jb21cIj57e3N0YWZmSW5mby5zdXBwbGllck5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNfcmlnaHRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibm93dGltZVwiPnt7Y3VycmVudERhdGV9fTwvdGV4dD4gXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50RGF0ZTonJyxcclxuXHRcdFx0XHRzd2lkdGg6JycsXHJcblx0XHRcdFx0c3RhZmZJbmZvOnt9XG5cdFx0XHR9O1xuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpc1xyXG5cdFx0XHRcdC8vIHRoaXMuc3RhZmZJbmZvID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdzdGFmZkluZm8nKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0dW5pLiRvbignZ2V0SW5mbycscmVzPT57XHJcblx0XHRcdFx0XHRcdF90aGlzLiRzZXQoX3RoaXMuc3RhZmZJbmZvLCdzYWxlc05hbWUnLHJlcy5uYW1lKVxyXG5cdFx0XHRcdFx0XHRfdGhpcy4kc2V0KF90aGlzLnN0YWZmSW5mbywnc3VwcGxpZXJOYW1lJyxyZXMuc3VwcGxpZXIpXHJcblx0XHRcdFx0XHRcdF90aGlzLiRzZXQoX3RoaXMuc3RhZmZJbmZvLCdwaWN0dXJlJyxyZXMuaW1nKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5nZXRDdXJyZW50RGF0ZSgpXHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKXsgIFxyXG5cdFx0ICAgIC8vIOenu+mZpOebkeWQrOS6i+S7tiAgXHJcblx0XHQgICAgICAgIHVuaS4kb2ZmKCdnZXRJbmZvJyk7ICBcclxuXHRcdCAgICB9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdFxyXG5cdFx0XHRnZXRDdXJyZW50RGF0ZSgpe1xyXG5cdFx0XHRcdCB2YXIgbXlEYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIHllYXIgPSBteURhdGUuZ2V0RnVsbFllYXIoKTsgLy/lubRcclxuXHRcdFx0XHRcdFx0dmFyIG1vbnRoID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxOyAvL+aciFxyXG5cdFx0XHRcdFx0XHR2YXIgZGF5ID0gbXlEYXRlLmdldERhdGUoKTsgLy/ml6VcclxuXHRcdFx0XHRcdFx0dmFyIGRheXMgPSBteURhdGUuZ2V0RGF5KCk7XHJcblx0XHRcdFx0IHN3aXRjaChkYXlzKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ICAgICAgICBjYXNlIDE6XHJcblx0XHRcdFx0XHRcdFx0XHRkYXlzID0gJ+aYn+acn+S4gCc7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHRcdFx0IGRheXMgPSAn5pif5pyf5LqMJztcclxuXHRcdFx0XHRcdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0XHRcdFx0IGRheXMgPSAn5pif5pyf5LiJJztcclxuXHRcdFx0XHRcdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5cyA9ICfmmJ/mnJ/lm5snO1xyXG5cdFx0XHRcdFx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHRcdFx0XHQgY2FzZSA1OlxyXG5cdFx0XHRcdFx0XHRcdFx0IGRheXMgPSAn5pif5pyf5LqUJztcclxuXHRcdFx0XHRcdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHRcdFx0IGNhc2UgNjpcclxuXHRcdFx0XHRcdFx0XHRcdGRheXMgPSAn5pif5pyf5YWtJztcclxuXHRcdFx0XHRcdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHRcdFx0IGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0XHRcdGRheXMgPSAn5pif5pyf5pelJztcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ICAgICAgdmFyIHN0ciA9IHllYXIgKyBcIuW5tFwiICsgbW9udGggKyBcIuaciFwiICsgZGF5ICsgXCLml6UgIFwiICsgZGF5cztcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50RGF0ZSA9IHN0clxyXG5cdFx0XHR9XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQuc3RhZmZpbmZve1xyXG5cdFx0aGVpZ2h0OjY1cHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdC8vIGJvcmRlci13aWR0aDoxcHg7XHJcblx0XHQvLyBib3JkZXItc3R5bGU6c29saWQ7XHJcblx0XHQvLyBib3JkZXItY29sb3I6IzAwMDtcclxuXHRcdHBhZGRpbmc6NXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG5cdH1cclxuXHQuc19sZWZ0e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcclxuXHR9XG5cdC5zaW1ne1xyXG5cdFx0d2lkdGg6NTBweDtcclxuXHRcdGhlaWdodDo1MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRib3JkZXItd2lkdGg6MXB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOnNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiM0ODljZmI7XHJcblx0XHJcblx0fVxyXG5cdC5zX2luZm97XHJcblx0XHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdH1cclxuXHQuc19uYW1le1xyXG5cdFx0Zm9udC1zaXplOjE2O1xyXG5cdH1cclxuXHQuc19jb217XHJcblx0XHRmb250LXNpemU6MTI7XHJcblx0XHRjb2xvcjojOTk5O1xyXG5cdFx0bWFyZ2luLXRvcDo1cHg7XHJcblx0fVxyXG5cdC5ub3d0aW1le1xyXG5cdFx0Zm9udC1zaXplOjE0XHJcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0wLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMCEuL21hcFRvcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0wLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMCEuL21hcFRvcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzdGFmZmluZm9cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInNfbGVmdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJzaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTAsXG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzQ4OWNmYlwiXG4gIH0sXG4gIFwic19pbmZvXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiXG4gIH0sXG4gIFwic19uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDE2XG4gIH0sXG4gIFwic19jb21cIjoge1xuICAgIFwiZm9udFNpemVcIjogMTIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIlxuICB9LFxuICBcIm5vd3RpbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMTRcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
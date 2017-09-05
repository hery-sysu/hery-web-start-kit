import md5 from 'js-md5'

export const wxConfig = {
  appID: 'wx369b6c326eb816ec',
  appsecret: '07de7ef0cb8eddb96d7d0786ed6a9f13'
}

export const setValueToLocalStorage = (key, value) => {
  let storage = window.localStorage
  storage.setItem('dingdong-wechat-' + key, value)
}

export const getValueFromLocalStorage = (key) => {
  let storage = window.localStorage
  return storage.getItem('dingdong-wechat-' + key)
}

export const getWechatOauthURL  = (redirectURL) => {
  let appid = wxConfig.appID
  let encodeUrl = encodeURIComponent(redirectURL)
  let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeUrl}&response_type=code&scope=snsapi_userinfo&state=xplan#wechat_redirect`
  return url
  }

export const isWechat = () => {
  let userAgent = navigator.userAgent.toLowerCase()
  return userAgent.match(/MicroMessenger/i) === 'micromessenger'
}

export const browser = {
  versions: function () {
    let agent = navigator.userAgent
    let app = navigator.appVersion
    return {
      trident: agent.indexOf('Trident') > -1, // IE内核
      presto: agent.indexOf('Presto') > -1, // opera内核
      webKit: agent.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: agent.indexOf('Gecko') > -1 && agent.indexOf('KHTML') == -1, // 火狐内核
      mobile: !!agent.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: agent.indexOf('Android') > -1 || agent.indexOf('Adr') > -1, // android终端
      iPhone: agent.indexOf('iPhone') > -1 , // 是否为iPhone或者QQHD浏览器
      iPad: agent.indexOf('iPad') > -1, // 是否iPad
      webApp: agent.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
      weixin: agent.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
      wx_devTools: agent.indexOf('MicroMessenger') > -1 && agent.indexOf('wechatdevtools') > -1, // 是否微信开发者工具　(add by hery 2017-06-13)
      qq: agent.match(/\sQQ/i) == " qq" // 是否QQ
    }
  }()
}

export const object2ParamString = (object) => {
  let paramArray = []
  for (let item in object) {
    let paramString = item + '=' + object[item]
    paramArray.push(paramString)
  }
  return paramArray.join('&')
}

export const getParamString = (data = {}, appkey = 'ab060345dc344870ac66a8a5cf84ff10', salt = 'dd069584620d4088975de863218e8742') => {
  let params = {}
  let item
  params.appkey = appkey
  params.time = parseInt(new Date() / 1000)
  params.nonce = Math.random().toString(36).substring(2, 10)
  let ak = getValueFromLocalStorage('ak')
  let uid = getValueFromLocalStorage('uid')
  if (ak && uid) {
    params.ak = ak
    params.uid = uid
  }
  params = {...params, ...data}
  let keys = [],
    param = [],
    paramString = '',
    len,
    i
  for (item in params) {
    if (item === 'sign') continue
    keys.push(item)
  }
  keys.sort()
  for (item = 0, len = keys.length; item < len; item++) {
    paramString += keys[item] + params[keys[item]]
  }
  paramString += salt
  params.sign = md5(paramString)
  // params.sign = paramString
  i = 0
  for (item in params) {
    param[i++] = item + '=' + params[item]
  }
  return param.join('&')
}

export const countDown = (callBack, seconds = 60) => {
  let time = seconds
  let interval = setInterval(() => {
    callBack(--time)
    if (time === 0) {
      clearInterval(interval)
    }
  }, 1000)
}

export const isEmptyObject = (object) => {
  for (var ietm in object) {
    if (object.hasOwnProperty(ietm)) {
      return false
    }
  }
  return true
}

export const setObjectValue = (dest, source) => {
  if (!dest || !source) {
    return
  }
  Object.keys(dest).forEach(key => {
    if (source.hasOwnProperty(key)) {
      if (typeof(dest[key]) === 'object') {
        setObjectValue(dest[key], source[key])
      } else {
        dest[key] = source[key]
      }
    }
  })
}

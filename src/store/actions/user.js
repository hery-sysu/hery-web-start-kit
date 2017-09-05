import * as api from './../../api/index.js'
import * as urls from './../../api/api_config.js'
import * as types from './../mutation-types.js'
import { getParamString } from './../../utils/util.js'

export const getJSDKSignInfo = ({ commit, state }, signInfo) => {
  let getJSDKSignUrl = urls.getJSDKSignUrl
  return api.post(getJSDKSignUrl, signInfo)
}

export const getWechatUserinfo = ({ commit, dispatch }, code) => {
  console.log('Action->getWechatUserinfo')
  if (process.env.NODE_ENV === 'development') {
    let wechat = {
      openid: '12345666',
      nickname: 'hery',
      headimgurl: 'http://img.zcool.cn/community/01057e56f1ef1632f875a944d7985a.jpg'
    }
    commit(types.GET_WECHAT_USERINFO, wechat)
  } else {
    let params = {
      code: code
    }
    let getWechatUserinfoUrl = urls.getWechatUserinfoUrl + '?' + getParamString(params)
    return api.get(getWechatUserinfoUrl).then(reply => {
      commit(types.GET_WECHAT_USERINFO, reply.userinfo)
    })
  }
}

export const loginWithWechat = ({ commit, state }) => {
  let params = {
    ext_from: 'ddj_wx_fwh',
    ext_id: state.openid,
    nick_name: state.nickname,
    avatar: state.avatar
  }
  let thirdLoginUrl = urls.thirdLoginUrl + '?' + getParamString()
  return api.post(thirdLoginUrl, params).then(reply => {
    commit(types.GET_LOGIN_DATA, reply)
  })
}

export const sendCaptcha = ({ state }, mobile) => {
  let params = {
    'bid': 7,
    'mobile': mobile
  }
  let sendCaptcha = urls.getCaptchaUrl + '?' + getParamString()
  return api.post(sendCaptcha, params).then(reply => {
  })
}

export const bindMobile = ({ commit, state }, user) => {
  let params = {
    ext_from: 'ddj_wx_fwh',
    ext_id: state.openid,
    nick_name: state.nickname,
    avatar: state.avatar,
    mobile: user.mobile,
    captcha: user.captcha
  }
  let thirdLoginUrl = urls.thirdLoginUrl + '?' + getParamString()
  return api.post(thirdLoginUrl, params).then(reply => {
    commit(types.GET_LOGIN_DATA, reply)
  })
}

export const autoLogin = ({ commit, state }) => {
  let autoLoginUrl = urls.autoLoginUrl + '?' + getParamString()
  return api.get(autoLoginUrl).then(reply => {
    commit(types.GET_LOGIN_DATA, reply)
  })
}

export const getDingDongUserInfo = ({ commit, state }) => {
  let getUserInfoUrl = urls.getUserProfile + '?' + getParamString()
  return api.get(getUserInfoUrl).then(reply => {
    commit(types.GET_DINGDONG_USERINFO, reply)
  })
}

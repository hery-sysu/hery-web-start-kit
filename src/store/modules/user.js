import * as Types from './../mutation-types'
import * as actions from './../actions/user.js'
import { setValueToLocalStorage } from './../../utils/util'
const state = {
  nickname: '',   // 微信昵称
  openid: '',     // 微信openid
  avatar: '',     // 微信头像
  uid: '',        // uid
  ak: '',         // ak
  mobile: ''      // 绑定的手机号码
}

const mutations = {
  [Types.GET_WECHAT_USERINFO] (state, wechatUser) {
    state.nickname = wechatUser.nickname
    state.openid = wechatUser.openid
    state.avatar = wechatUser.headimgurl
    console.log('wechat openid:' + wechatUser.openid)
  },
  [Types.GET_LOGIN_DATA] (state, data) {
    state.uid = data.userid
    state.ak = data.access_token
    setValueToLocalStorage('uid', data.userid)
    setValueToLocalStorage('ak', data.access_token)
  },
  [Types.GET_DINGDONG_USERINFO] (state, profile) {
    state.nickname = profile.nick_name
    state.mobile = profile.mobile
    state.avatar = profile.avatar
    console.log('user profile:' + profile)
  }
}

export default {
  state,
  actions,
  mutations
}

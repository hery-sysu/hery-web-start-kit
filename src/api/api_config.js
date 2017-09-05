//  后台api

/************
** 微信授权、签名 **
*************/

/* 获取微信jssdk签名 */
export const getJSDKSignUrl = 'https://wx.app.dingdong.top/jssdk/sign'
/* 获取微信用户信息 */
export const getWechatUserinfoUrl = 'https://wx.app.dingdong.top/oauth2/userinfo'


/************
** 用户系统相关 **
*************/
/* 第三方登录,账户绑定 */
export const thirdLoginUrl = 'https://passport.app.dingdong.top/v1/account/login/third_account'
/* 发送验证码 */
export const getCaptchaUrl = 'https://passport.app.dingdong.top/v1/captcha/mobile/send'
/* 自动登录 */
export const autoLoginUrl = 'https://passport.app.dingdong.top/v1/account/autologin'
/* 获取个人信息 */
export const getUserProfile = 'https://passport.app.dingdong.top/v1/user/profile/get'

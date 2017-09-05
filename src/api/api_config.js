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


/************
** 设备相关 **
*************/
/* 查询绑定设备信息 */
export const getDeviceInfoUrl = 'https://ddj.app.dingdong.top/user-device/binded/lookup'
export const getDeviceInfoUrl_mock = 'https://wiki.dingdong.top/mock/trueExam.do?id=ffff-1500864370033-101019-0024'

/* 绑定设备 */
export const bindDeviceUrl = 'https://ddj.app.dingdong.top/user-device/bind/device'
export const bindDeviceUrl_mock = 'https://wiki.dingdong.top/mock/trueExam.do?id=ffff-1500865942403-101019-0026'

/* 解绑设备 */
export const unbindDeviceUrl = 'https://ddj.app.dingdong.top/user-device/unbind/device'
export const unbindDeviceUrl_mock = 'https://wiki.dingdong.top/mock/trueExam.do?id=ffff-1500864888353-101019-0025'


/************
** 指纹相关 **
*************/
/* 同步指纹 */
export const syncFingerPrintsUrl = 'https://ddj.app.dingdong.top/fptpl/fps/sync'
export const syncFingerPrintsUrl_mock = 'https://wiki.dingdong.top/mock/trueExam.do?id=ffff-1500868315048-101019-0027'

/* 扫码录入指纹 */
export const inputFingerPrintUrl = 'https://ddj.app.dingdong.top/fptpl/fps/input'
export const inputFingerPrintUrl_mock = 'https://wiki.dingdong.top/mock/trueExam.do?id=ffff-1500875491127-101019-0029'

/************
** 钱包相关 **
*************/
/* 获取充值项列表 */
export const getRechargeItemsUrl = 'https://ddj.app.dingdong.top/wallet/recharge-item/list'

/* 查询余额 */
export const getBalanceUrl = 'https://ddj.app.dingdong.top/wallet/account/balance'
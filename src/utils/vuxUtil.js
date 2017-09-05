import Vue from 'vue'

export const actionMenus = {
  recharge: '充值',
  message: '未读消息',
  fingerprint: '指纹管理',
  device: '水机管理',
  feedback: '问题反馈',
  repairment: '故障报修'
}

export const showToast = (message, type = 'text') => {
  // type: success, cancel, warn
  Vue.$vux.toast.show({
    text: message,
    position: 'middle',
    type: type,
    width: (type === 'text') ? (message.length + 1) + 'em' : '7.6em'
  })
}

export const showLoading = (message)=> {
  Vue.$vux.loading.show({
    text: message,
  })
}

export const hideLoading = () => {
  Vue.$vux.loading.hide()
}

export const showAlert = (title, content, onConfirmFunc = () => {}, onCancelFunc = () => {}, confirm = '确定', cancel = '取消') => {
  Vue.$vux.confirm.show({
    title: title,
    content: content,
    confirmText: confirm,
    cancelText: cancel,
    onConfirm: onConfirmFunc,
    onCancel: onCancelFunc
  })
}

export const showConfirm = (title, onConfirmFunc = () => {}, onCancelFunc = () => {}, placeholder = '', confirm = '确定', cancel = '取消') => {
  Vue.$vux.confirm.prompt(placeholder, {
    title: title,
    confirmText: confirm,
    cancelText: cancel,
    onConfirm: onConfirmFunc,
    onCancel: onCancelFunc
  })
}

export const hideConfirm = () => {
  Vue.$vux.confirm.hide()
}

export const showActionSheet = (actions, menus = actionMenus, showCancel = true) => {
  Vue.$vux.actionsheet.show({
    menus: menus,
    showCancel: showCancel,
    onClickMenu: actions
  })
}

export const hideActionSheet = () => {
  Vue.$vux.actionsheet.hide()
}

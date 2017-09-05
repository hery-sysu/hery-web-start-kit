import { Actionsheet } from 'vux'
import objectAssign from 'object-assign'

const mergeOptions = function ($vm, options) {
  const defaults = {}
  for (let i in $vm.$options.props) {
    if (i !== 'value') {
      defaults[i] = $vm.$options.props[i].default
    }
  }
  const _options = objectAssign({}, defaults, options)
  for (let i in _options) {
    $vm[i] = _options[i]
  }
}

let $vm

const DDActionSheet = {
  install (Vue, options = {}) {
    if (!$vm) {
      const Action = Vue.extend(Actionsheet)
      $vm = new Action({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const actionsheet = {
      show (options = {}) {
        if (typeof options === 'object') {
          mergeOptions($vm, options)
        }
        this.watcher && this.watcher()
        this.watcher = $vm.$watch('show', val => {
          val && options.onShow && options.onShow($vm)
          if (!val && options && options.onHide) {
            options.onHide($vm)
          }
        })
        $vm.$off('on-click-menu')
        $vm.$on('on-click-menu', key => {
          options && options.onClickMenu && options.onClickMenu(key)
        })
        $vm.show = true
      },
      hide () {
        $vm.show = false
        this.watcher = null
      }
    }
    if (!Vue.$vux) {
      Vue.$vux = {
        actionsheet
      }
    } else {
      Vue.$vux.actionsheet = actionsheet
    }

    Vue.mixin({
      created: function () {
        this.$vux = Vue.$vux
      }
    })
  }
}

export default DDActionSheet
export const install = DDActionSheet.install

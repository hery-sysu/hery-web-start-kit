import Vue from 'vue'
import Router from 'vue-router'
import { hideLoading, hideConfirm, hideActionSheet } from './../utils/vuxUtil'

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/HomePage')
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('Router:' + from.path + '-->' + to.path)
  hideActionSheet()
  next()
})

router.afterEach(route => {
  hideLoading()
  hideConfirm()
})

export default router

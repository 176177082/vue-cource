import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOGINED = true

// 路由跳转前守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})
// 全局守卫，导航被确认（所有导航钩子都结束）之前，所有组件内守卫和异步路由被解析之后被调用
// router.beforeResolve((to, from, next) => {})

// 路由独享守卫

// 路由后置钩子
router.afterEach((to, from) => {
  // logining = false ,主要应用于等待页面的处理
})

/**
 * 1,一个完整的导航被触发
 * 2，在失活的组件里，即将离开的组件里调用离开守卫 beforeRouteLeave
 * 3，调用全局的前置守卫 beforeEach
 * 4,在重用组件里调用 beforeRouteUpdate,新组件会调用beforeRouteEnter
 * 5，调用路由独享的守卫beforeEnter
 * 6,解析异步路由组件
 * 7，在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8,调用全局的解析守卫 beforeResolve
 * 9,导航被确认
 * 10，调用全局的后置守卫 afterEach
 * 11,触发DOM更新
 * 12，用创建好的实例调用在beforeRouteEnter守卫里传给next的回调函数
 */
export default router
// export default new Router({
//   // 默认模式。#号
//   // mode: 'hash',
//   // mode: 'history',
//   routes
// })

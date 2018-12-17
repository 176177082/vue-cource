import vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    // state.appName = params
    // 注意这个appName是在state.js中已经定义了的，如果没有定义，使用
    // 这种方法是实现不了参数的传送
    // 要使用vue.set进行强行挂接
    // state.appName = params.appName
    state.appName = params
  },
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'v2.0')
    state.appVersion = 'v2.0'
  }

}

export default mutations

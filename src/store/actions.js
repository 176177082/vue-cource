import { getAppName } from '../api/app'
const actions = {
  // updateAppName ({ commit }) {
  //   异步操作
  //   getAppName().then(res => {
  //     console.log(res)
  //     // const { code, info: {appName} } = res
  //     commit('SET_APP_NAME', res.info.appName)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
    // es8 方法 async
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}

export default actions

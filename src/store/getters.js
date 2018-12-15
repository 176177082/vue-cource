// 类似组件的计算属性
const getters = {
  appNameWithVersion: (state) => {
    return state.appName + 'v2.0'
    // or return `{state.appName}v2.0`
  }

}

export default getters

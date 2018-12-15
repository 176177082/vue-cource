const state = {
  //  11
  userName: 'sss'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  //   22
}

const actions = {
  //   22
}

// 使用命名空间
export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}

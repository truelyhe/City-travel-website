import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    lists: []
  },
  mutations: {
    setSillkNoodlesData (state, data) {
      state.lists = data
    }
  },
  actions: {
    // 获取关注用户列表
    getSillkNoodles ({commit}, obj) {
      postApiRequest('account/get/fans/user/list', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setSillkNoodlesData', res.data)
        }
      })
    }
  }
}

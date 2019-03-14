import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    lists: []
  },
  mutations: {
    setMeSystemData (state, data) {
      state.lists = data
    }
  },
  actions: {
    meSystem ({commit}, obj) {
      postApiRequest('account/msg/system', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setMeSystemData', res.data)
        }
      })
    }
  }
}

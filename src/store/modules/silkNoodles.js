import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    lists: []
  },
  mutations: {
    setMesilkNoodlesData (state, data) {
      state.lists = data
    }
  },
  actions: {
    meSilkNoodles ({commit}, obj) {
      postApiRequest('account/msg/new_fans', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setMesilkNoodlesData', res.data)
        }
      })
    }
  }
}

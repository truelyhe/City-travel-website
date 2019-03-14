import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    lists: []
  },
  mutations: {
    setMeHymnCollectData (state, data) {
      state.lists = data
    }
  },
  actions: {
    hymnCollectList ({commit}, obj) {
      postApiRequest('account/msg/collect_like', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setMeHymnCollectData', res.data)
        }
      })
    }
  }
}

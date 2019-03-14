import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    concernLists: [],
    recommendLists: []
  },
  mutations: {
    setAttentionListData (state, data) {
      state.concernLists = data
    },
    setRecommendListData (state, data) {
      state.recommendLists = data
    }
  },
  actions: {
    // 获取关注用户列表
    getConcernList ({commit}, obj) {
      postApiRequest('account/get/attention/user/list', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setAttentionListData', res.data.attention_user)
          commit('setRecommendListData', res.data.recommend)
        }
      })
    }
  }
}

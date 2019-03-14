import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    lists: []
  },
  mutations: {
    setMeCommentData (state, data) {
      state.lists = data
    }
  },
  actions: {
    getMeCommentList ({commit}, obj) {
      postApiRequest('account/msg/comment_at', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setMeCommentData', res.data)
        }
      })
    }
  }
}

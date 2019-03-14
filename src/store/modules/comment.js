import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    // 评论留言
    onThisSend ({dispatch}, obj) {
      return new Promise((resolve) => {
        postApiRequest('community/comment_topic', obj).then((res) => {
          if (res.errno === ERR_OK) {
            resolve()
          }
        })
      })
    }
  }
}

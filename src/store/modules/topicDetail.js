import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    oJson: '',
    commentLists: [],
    commentLength: 0
  },
  mutations: {
    setTopicDetailData (state, data) {
      state.oJson = data
    },
    setCommentListData (state, data) {
      let commentList = state.commentLists.concat(data)
      state.commentLists = commentList
    },
    setCommentLengthData (state, data) {
      state.commentLength = data
    }
  },
  actions: {
    // 获取帖子详情数据
    getTopicDetail ({commit}, obj) {
      return new Promise((resolve) => {
        postApiRequest('community/topic_detail', obj).then((res) => {
          setTimeout(() => {
            commit('setTopicDetailData', res.data)
            resolve()
          }, 500)
        })
      })
    },
    // 关注用户
    onConcern ({dispatch, state}, obj) {
      return new Promise((resolve) => {
        postApiRequest('community/attention/user', obj).then((res) => {
          if (res.errno === ERR_OK) {
            state.oJson.attentionMark = obj.mark
            resolve(res.data.attentionMark)
          }
        })
      })
    },
    // 帖子详情点赞
    onHymn ({state}, obj) {
      postApiRequest('community/topic_hymn', obj).then((res) => {
        if (res.errno === ERR_OK) {
          state.oJson.hymnNumMark = obj.mark
          state.oJson.hymnNum = obj.mark ? state.oJson.hymnNum + 1 : state.oJson.hymnNum - 1
        }
      })
    },
    // 帖子详情收藏
    onCollect ({state}, obj) {
      postApiRequest('community/topic_collect', obj).then((res) => {
        if (res.errno === ERR_OK) {
          state.oJson.collectMark = obj.mark
          state.oJson.collectNum = obj.mark ? state.oJson.collectNum + 1 : state.oJson.collectNum - 1
        }
      })
    },
    // 获取评论列表
    getCommentList ({commit, state}, obj) {
      if (!obj.loadMark) {
        state.commentLists = []
      }
      return new Promise((resolve) => {
        postApiRequest('community/comment/topic/list', obj).then((res) => {
          if (res.errno === ERR_OK) {
            setTimeout(() => {
              commit('setCommentListData', res.data)
              commit('setCommentLengthData', res.comment_length)
              res.data.forEach((e) => {
                e.reply_length = 1
              })
              resolve()
            }, 500)
          }
        })
      })
    },
    // 评论点赞
    onCommentHymn ({state}, obj) {
      postApiRequest('community/comment/topic/hymn', obj).then((res) => {
        if (res.errno === ERR_OK) {
          if (obj.is_comment) {
            state.commentLists.forEach((e) => {
              if (obj.reply_id === e.id) {
                e.hymnMark = obj.mark
                e.hymnNum = obj.mark ? e.hymnNum + 1 : e.hymnNum - 1
              }
            })
          } else {
            state.commentLists.forEach((e) => {
              e.reply_list.forEach((o) => {
                if (obj.reply_id === o.id) {
                  o.hymnMark = obj.mark
                  o.hymnNum = obj.mark ? o.hymnNum + 1 : o.hymnNum - 1
                }
              })
            })
          }
        }
      })
    },
    // 删除帖子
    onDelTopic ({commit}, obj) {
      return new Promise((resolve) => {
        postApiRequest('community/delete/topic', obj).then((res) => {
          if (res.errno === ERR_OK) {
            resolve()
          }
        })
      })
    }
  }
}

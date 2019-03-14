import axios from 'axios'
import { getApiRequest, postApiRequest, ERR_OK } from '@/api/apiRequest'
import { apiUrl } from '@/api/config'

export default {
  state: {
    labelLists: [],
    topicLists: [],
    concernLists: []
  },
  mutations: {
    setLabelListsData (state, data) {
      state.labelLists = data
    },
    setTopicListData (state, data) {
      let topicList = state.topicLists.concat(data)
      state.topicLists = topicList
    },
    setConcernListData (state, data) {
      let concernList = state.concernLists.concat(data)
      state.concernLists = concernList
    }
  },
  actions: {
    // 授权登录
    loginUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        axios.get(apiUrl + 'account/h5/login').then(res => {
          resolve(res)
        }, err => {
          reject(err)
        }).catch((error) => {
          console.log(error)
        })
      })
    },
    // 获取筛选标签
    getLabelList ({commit}) {
      getApiRequest('community/topic/classify').then((res) => {
        if (res.errno === ERR_OK) {
          commit('setLabelListsData', res.data)
        }
      })
    },
    // 获取帖子列表
    getTopicList ({commit, state}, obj) {
      return new Promise((resolve, reject) => {
        postApiRequest('community/topic/list', obj).then((res) => {
          if (res.errno === ERR_OK) {
            // 判断是否是加载更多进来不是就清空数组
            if (!obj.loadMark) {
              state.topicLists = []
            }
            commit('setTopicListData', res.data)
            resolve()
          }
        }, err => {
          reject(err)
        })
      })
    },
    // 获取关注用户所发的帖子
    getConcernList ({commit, state}, obj) {
      return new Promise((resolve, reject) => {
        postApiRequest('community/concern/list', obj).then((res) => {
          if (res.errno === ERR_OK) {
            // 判断是否是加载更多进来不是就清空数组
            if (!obj.loadMark) {
              state.concernLists = []
            }
            commit('setConcernListData', res.data)
            resolve()
          }
        }, err => {
          reject(err)
        })
      })
    }
  }
}

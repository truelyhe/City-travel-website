import { postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    hotLists: [],
    endNum: 0,
    oJson: '',
    seekFruit: ''
  },
  mutations: {
    setHotListData (state, data) {
      state.hotLists = data
    },
    setEndNumData (state, data) {
      state.endNum = data
    },
    setSeekListData (state, data) {
      state.seekFruit = data
    }
  },
  actions: {
    // 获取搜索热词
    getHotLabel ({commit}) {
      postApiRequest('community/get/hot/keywords', {}).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setHotListData', res.data)
        }
      })
    },
    // input变化时
    onInput ({commit}, obj) {
      postApiRequest('community/get/same/keywords', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setEndNumData', res.data)
        }
      })
    },
    // 搜索结果
    getSeekList ({commit}, obj) {
      postApiRequest('community/keywords/search', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setSeekListData', res)
        }
      })
    }
  }
}

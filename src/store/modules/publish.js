import { getUptokenFn } from '@/api/uploadQiniuApi'
import { getApiRequest, postApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  state: {
    uploadToke: '',
    labelLists: [],
    seeklabeLists: [],
    addLabelLists: []
  },
  mutations: {
    setUploadTokeData (state, data) {
      state.uploadToke = data
    },
    setHotLabelData (state, data) {
      state.labelLists = data
    },
    setSeeklabeLists (state, data) {
      state.seeklabeLists = data
    }
  },
  actions: {
    // getUptokenFn
    getPublishEditUptoken ({commit}) {
      getUptokenFn().then((res) => {
        commit('setUploadTokeData', res)
      })
    },
    // 获取推荐标签
    getHotLabel ({commit}) {
      getApiRequest('community/get_recommend_label').then((res) => {
        if (res.errno === ERR_OK) {
          commit('setHotLabelData', res.data.labelLists)
        }
      })
    },
    // 搜索标签
    inputLabelFn ({commit}, obj) {
      postApiRequest('community/seek_label', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setSeeklabeLists', res.data.labelLists)
        }
      })
    },
    // 选择推荐标签
    onLabel ({state}, idx) {
      const labelLists = state.labelLists[idx]
      labelLists.mark = !labelLists.mark
      if (labelLists.mark) {
        state.addLabelLists.push(labelLists.title)
      } else {
        state.addLabelLists.forEach((e, i) => {
          if (labelLists.title === e) {
            state.addLabelLists.splice(i, 1)
          }
        })
      }
      state.addLabelLists = state.addLabelLists.filter((element, index, self) => {
        return self.indexOf(element) === index
      })
    },
    // 选择搜索标签
    seekLabelFn ({commit, state}, title) {
      state.addLabelLists.push(title)
      state.addLabelLists = state.addLabelLists.filter((element, index, self) => {
        return self.indexOf(element) === index
      })
      state.labelLists.forEach((e) => {
        console.log(e.title)
        state.addLabelLists.forEach((o) => {
          if (e.title === o) {
            e.mark = true
          }
        })
      })
    }
  }
}

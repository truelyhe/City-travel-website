import { postApiRequest, ERR_OK } from '@/api/apiRequest'
import { getUptokenFn, uploadQiniuFn, bktClouddnUrl } from '@/api/uploadQiniuApi'

export default {
  state: {
    uploadToke: '',
    oJson: '',
    bg_img: '',
    notices_data: {},
    notices_nums: 0,
    lists: []
  },
  mutations: {
    setUploadTokeData (state, data) {
      state.uploadToke = data
    },
    setInfoData (state, data) {
      state.oJson = data
    },
    setBgImg (state, data) {
      state.bg_img = data
    },
    setNoticesData (state, obj) {
      state.notices_data = obj.data
      state.notices_nums = obj.nums
    },
    setListsData (state, data) {
      state.lists = data
    },
    clearNoticesData (state, key) {
      state.notices_data[key] = 0
    }
  },
  actions: {
    // 个人中心清除评论和@我的消息提示
    clearMeCommentTips ({commit}) {
      commit('clearNoticesData', 'comment_at')
    },
    // 个人中心清除赞和收藏我的消息提示
    clearMeCollectLikeTips ({commit}) {
      commit('clearNoticesData', 'collect_like')
    },
    // 个人中心清除新粉丝消息提示
    clearMeNewFansTips ({commit}) {
      commit('clearNoticesData', 'new_fans')
    },
    // 个人中心潮目消息提示
    clearMeSystemTips ({commit}) {
      commit('clearNoticesData', 'system')
    },
    // getUptokenFn
    getMeUptokenFn ({commit}) {
      getUptokenFn().then((res) => {
        commit('setUploadTokeData', res)
      })
    },
    // 个人信息
    getInformation ({commit}, obj) {
      return new Promise((resolve) => {
        postApiRequest('account/me_information', obj).then((res) => {
          if (res.errno === ERR_OK) {
            if (obj.me) {
              commit('setInfoData', res.data)
              commit('setBgImg', res.data.user.bg_img)
            } else {
              const oJson = {
                openId: obj.open_id,
                unionId: obj.unionid,
                avatarUrl: res.data.user.avatar,
                nickName: res.data.user.nickname
              }
              localStorage.setItem('userInfo', JSON.stringify(oJson))
            }
            resolve()
          }
        })
      })
    },
    // 个人中心获取消息记录
    getMeNotices ({commit}, obj) {
      postApiRequest('account/msg/msg_count', obj).then((res) => {
        if (res.errno === ERR_OK) {
          let nums = 0
          for (let prop in res.data) {
            if (res.data.hasOwnProperty(prop) && typeof res.data[prop] === 'number') {
              nums += res.data[prop]
            }
          }
          commit('setNoticesData', {nums, 'data': res.data})
        }
      })
    },
    // 发布/收藏数据
    getPublishCollect ({commit}, obj) {
      postApiRequest('account/release_collect', obj).then((res) => {
        if (res.errno === ERR_OK) {
          commit('setListsData', res.data)
        }
      })
    },
    // 上传背景图片
    meUploadImgFn ({dispatch, state}, obj) {
      const file = obj.e.target.files[0]
      const param = new FormData()
      param.append('file', file, file.name)
      param.append('token', state.uploadToke)
      return new Promise((resolve) => {
        uploadQiniuFn(param).then((res) => {
          const imgUrl = bktClouddnUrl + res.data.hash
          const oJson = {
            unionid: obj.unionId,
            bg_img: imgUrl,
            avatar: '',
            nickname: '',
            sex: '',
            birthday: '',
            signature: ''
          }
          dispatch('meUpdateBgImgFn', oJson).then((res) => {
            resolve(res)
          })
        })
      })
    },
    meUpdateBgImgFn ({state}, obj) {
      return new Promise((resolve) => {
        postApiRequest('account/modify_info', obj).then((res) => {
          if (res.errno === ERR_OK) {
            state.bg_img = obj.bg_img
            resolve('succeed')
          } else {
            resolve('error')
          }
        })
      })
    }
  }
}

import { postApiRequest, ERR_OK } from '@/api/apiRequest'
import { getUptokenFn, uploadQiniuFn, bktClouddnUrl } from '@/api/uploadQiniuApi'

export default {
  state: {
    uploadToke: '',
    oJson: ''
  },
  mutations: {
    setUploadTokeData (state, data) {
      state.uploadToke = data
    },
    setInfoMationData (state, data) {
      state.oJson = data
    }
  },
  actions: {
    // getUptokenFn
    getEditUptokenFn ({commit}) {
      getUptokenFn().then((res) => {
        commit('setUploadTokeData', res)
      })
    },
    // 获取用户基本信息
    getMeInformation ({commit}, obj) {
      postApiRequest('account/me_information', obj).then((res) => {
        if (res.errno === ERR_OK) {
          const oJson = {
            avatar: res.data.user.avatar,
            nicknameVal: res.data.user.nickname,
            gender: res.data.user.gender,
            birthday: res.data.user.birthday,
            textareaVal: res.data.user.introduction
          }
          commit('setInfoMationData', oJson)
        }
      })
    },
    // 上传头像
    editUploadImgFn ({dispatch, state}, e) {
      const file = e.target.files[0]
      const param = new FormData()
      param.append('file', file, file.name)
      param.append('token', state.uploadToke)
      return new Promise((resolve) => {
        uploadQiniuFn(param).then((res) => {
          const imgUrl = bktClouddnUrl + res.data.hash
          const oJson = {
            text: 'avatar',
            imgUrl: imgUrl
          }
          dispatch('editUpdateBgFn', oJson).then((res) => {
            resolve(res)
          })
        })
      })
    },
    editUpdateBgFn ({dispatch}, oJson) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const obj = {
        unionid: userInfo.unionId,
        bg_img: '',
        avatar: oJson.text === 'avatar' ? oJson.imgUrl : '',
        nickname: oJson.text === 'nickname' ? oJson.nickname : '',
        sex: oJson.text === 'sex' ? oJson.sex : '',
        birthday: oJson.text === 'birthday' ? oJson.birthday : '',
        signature: oJson.text === 'signature' ? oJson.signature : ''
      }
      return new Promise((resolve) => {
        postApiRequest('account/modify_info', obj).then((res) => {
          if (res.errno === ERR_OK) {
            // 修改头像后重新缓存
            if (oJson.text === 'avatar') {
              const oJsonInfo = JSON.parse(localStorage.getItem('userInfo'))
              oJsonInfo.avatarUrl = oJson.imgUrl
              localStorage.setItem('userInfo', JSON.stringify(oJsonInfo))
            }
            dispatch('getMeInformation', obj)
            resolve('succeed')
          } else {
            resolve('error')
          }
        })
      })
    }
  }
}

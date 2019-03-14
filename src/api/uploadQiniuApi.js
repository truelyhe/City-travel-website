import { getApiRequest, ERR_OK } from '@/api/apiRequest'
import axios from 'axios'

export function getUptokenFn () {
  return new Promise((resolve, reject) => {
    getApiRequest('community/get_token').then(res => {
      if (res.errno === ERR_OK) {
        resolve(res.uptoken)
      }
    }, err => {
      reject(err)
    })
  })
}

export function uploadQiniuFn (param) {
  return new Promise((resolve, reject) => {
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    axios.post('http://upload.qiniu.com/', param, config).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

// export const bktClouddnUrl = 'http://pe96ejg8j.bkt.clouddn.com/'
export const bktClouddnUrl = 'http://chaomuqiniu.wegox.net/'

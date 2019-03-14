import axios from 'axios'
import qs from 'qs'
import { apiUrl } from '@/api/config'

axios.defaults.baseURL = apiUrl
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.parse(config.data)
  }
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `${localStorage.getItem('token')}`
  }
  return config
}, (error) => {
  alert('传参错误')
  return Promise.reject(error)
})

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

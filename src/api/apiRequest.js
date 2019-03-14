import axios from 'axios'
import { apiUrl } from './config'

export function postApiRequest (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(apiUrl + url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getApiRequest (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(apiUrl + url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const ERR_OK = 0

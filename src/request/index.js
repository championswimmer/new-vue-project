/**
 * Created by championswimmer on 26/06/17.
 */
import axios from 'axios'
import store from '@/store'

const hbAPI = axios.create({
  baseURL: 'http://cb-hb-dev.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    function (data, headers) {
      if (store.state.user.token) {
        headers['Authorization'] = `Bearer ${store.state.user.token}`
      }
      return JSON.stringify(data)
    }
  ]
})

export default hbAPI

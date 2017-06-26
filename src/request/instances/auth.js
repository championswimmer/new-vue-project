/**
 * Created by championswimmer on 27/06/17.
 */
import axios from 'axios'

const axiosAuth = axios.create({
  baseURL: 'http://cb-hb-dev.herokuapp.com/'
})

axiosAuth.interceptors.request.use(function (config) {
  console.log(config)
  return config
})

export default {
  signup: (name, email, password) => axiosAuth.post('signup', {name, email, password}),
  authorize: (email, password) => axiosAuth.post('authorize', {email, password})
}

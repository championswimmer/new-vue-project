/**
 * Created by championswimmer on 27/06/17.
 */
import axios from 'axios'

const axiosAuth = axios.create({
  baseURL: 'http://cb-hb-dev.herokuapp.com/'
})

export default {
  signup: (name: String, email, password) => axiosAuth.post('signup', { name, email, password }),
  authorize: (email: String, password) => axiosAuth.post('authorize', { email, password })
}

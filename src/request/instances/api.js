/**
 * Created by championswimmer on 27/06/17.
 */
import axios from 'axios'
import interceptors from '../interceptors'

const axiosApi = axios.create({
  baseURL: 'http://cb-hb-dev.herokuapp.com/api'
})

axiosApi.interceptors.request.use(interceptors.addBearerAuthToRequest)


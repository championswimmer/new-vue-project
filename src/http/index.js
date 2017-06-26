/**
 * Created by championswimmer on 26/06/17.
 */
import axios from 'axios'
import store from '@/store'

const HBAPI = axios.create({
  baseURL: 'http://cb-hb-dev.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${store.state.user.token}`
  }
})

export default HBAPI

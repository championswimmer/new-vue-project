/**
 * Created by championswimmer on 26/06/17.
 */
import axios from 'axios'
const HBAPI = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default HBAPI

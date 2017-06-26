/**
 * Created by championswimmer on 26/06/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import UserModule from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule
  },
  state: {
    topNavBarItems: [
      { value: 'Jobs' },
      { value: 'Companies' },
      { value: 'Students' }
    ]
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, {
        expires: 3
        // FIXME: In production use secure cookies
        // secure: true
      }),
      reducer (state) {
        return {
          user: state.user
        }
      }
    })
  ]
})

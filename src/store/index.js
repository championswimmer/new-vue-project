/**
 * Created by championswimmer on 26/06/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule
  },
  state: {
    topNavBarItems: [
      'Jobs', 'Companies', 'Students'
    ]
  }
})

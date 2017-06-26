/**
 * Created by championswimmer on 26/06/17.
 */

export default {
  state: {
    loggedIn: false,
    token: null
  },
  mutations: {
    logIn (state, token) {
      state.loggedIn = true
      state.token = token
    },
    logOut (state) {
      state.loggedIn = false
      state.token = undefined
    }
  },
  actions: {
    handleLoginLogout (context, value) {
      if (value) {
        // try to login user,
        context.commit('logIn', value.token)
      } else {
        // try to log out user
        context.commit('logOut')
      }
    }
  }
}

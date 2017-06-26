/**
 * Created by championswimmer on 26/06/17.
 */

export default {
  state: {
    loggedIn: false
  },
  mutations: {
    logIn (state) {
      state.loggedIn = true
    },
    logOut (state) {
      state.loggedIn = false
    }
  },
  actions: {
    handleLoginLogout (context, value) {
      if (value) {
        // try to login user,
        context.commit('logIn')
      } else {
        // try to log out user
        context.commit('logOut')
      }
    }
  }
}

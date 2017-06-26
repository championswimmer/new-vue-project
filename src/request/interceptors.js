/**
 * Created by championswimmer on 27/06/17.
 */
import store from '@/store'

export default {
  addBearerAuthToRequest: (config) => {
    if (store.state.user.token) {
      config.headers.common['Authorization'] = `Bearer ${store.state.user.token}`
    }
    return config
  }
}

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index.vue'
import Login from '@/components/pages/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    { path: '/login', component: Login }
  ]
})

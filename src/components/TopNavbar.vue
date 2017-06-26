<template>
  <b-navbar toggleable type="inverse" variant="danger">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <div class="navbar-brand">
      <span>Hiring Blocks</span>
    </div>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item v-for="navItem in navItems">
          {{ navItem }}
        </b-nav-item>
      </b-nav>

    </b-collapse>
    <!-- FIXME: Line broken on spaced words -->
      <b-nav is-nav-bar>
        <b-nav-item v-if="loggedIn" @click="loginToggle(false)" class="text-white">
          SignOut
        </b-nav-item>
        <b-nav-item v-else class="text-white">
          <router-link class="text-white" to="login">SignIn</router-link>
        </b-nav-item>
      </b-nav>

  </b-navbar>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'top-navbar',
    computed: {
      navItems () {
        return store.state.topNavBarItems
      },
      loggedIn () {
        return store.state.user.loggedIn
      }
    },
    methods: {
      loginToggle (value) {
        store.dispatch('handleLoginLogout', value)
      }
    }
  }
</script>

<style>

</style>

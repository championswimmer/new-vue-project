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

  </b-navbar>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'top-navbar',
    computed: {
      navItems () {
        return store.state.topNavBarItems
      }
    }
  }
</script>

<style>

</style>

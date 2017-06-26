<template>
  <div id="app">
    <top-navbar></top-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue'

export default {
  components: {TopNavbar},
  name: 'app'
}
</script>

<style>

</style>

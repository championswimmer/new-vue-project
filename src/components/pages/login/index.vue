<template>
  <div class="container" id="main-container">
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <h3 align="center"> Login </h3>
        <b-form-input class="text-center" v-model="email" placeholder="email" type="text"></b-form-input>
        <b-form-input class="text-center" v-model="password" placeholder="password" type="password"></b-form-input>
        <div class="row">
          <div class="col"></div>
          <div class="col-6 text-center">
            <b-button variant="success" @click="login()" type="lg">SUBMIT</b-button>
            <b-button variant="danger" type="lg">RESET</b-button>
          </div>
          <div class="col"></div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import store from 'src/store'
  import { auth } from 'src/request'

  @Component
  export default class LoginIndex extends Vue {
    name = 'signin'
    email: String = ''
    password: String = ''
    login () {
      auth.authorize(this.email, this.password)
        .then((response) => {
          store.dispatch('handleLoginLogout', { token: response.data.token })
        })
    }
  }
</script>

<style scoped>
  #main-container {
    padding-top: 40px;
  }

  .form-control {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

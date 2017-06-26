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

<script>
  import HBAPI from '@/http'
  export default {
    name: 'signin',
    data: {
      email: '',
      password: ''
    },
    methods: {
      login () {
        HBAPI.post('authorize', {
          email: this.email,
          password: this.password
        })
          .then((response) => {
            console.log(response)
          })
      }
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

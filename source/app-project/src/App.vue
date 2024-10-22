<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <div> Company name: </div>
    </div> 
  </template>



  <script>
  export default {
    name: 'App',
    data() {
      return {
        companyName: window.config.VUE_APP_COMPANY_NAME,
      }
    }
  }
  </script>
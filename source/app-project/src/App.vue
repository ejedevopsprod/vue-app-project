<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <div>Esta variable es : {{ variable_url }}</div>
      <div>Esta variable es : {{ variable_message }}</div>
    </div>
  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        variable_url: window.config.VUE_APP_API_URL,
        variable_message: window.config.VUE_APP_CUSTOM_MESSAGE,
        variable_prod: window.config.VUE_APP_VARIABLE_PROD,
      }
    }
  }
  </script>
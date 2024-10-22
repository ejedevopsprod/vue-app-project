<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div>Esta variable es : {{ variable_url }}</div>
    <div>Esta variable es : {{ variable_message }}</div>
  </template>

  <script>
  export default {
    name: 'App',
    data() {
      return {
        variable_url: window.config.VUE_APP_API_URL,
        variable_message: window.config.VUE_APP_CUSTOM_MESSAGE,
      }
    }
  }
  </script>
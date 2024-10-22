<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>{{ companyName }}</h1>
      <div>Esta es la URL: {{ variable_url }}</div>
      <div>Esta es una variable: {{ variable_prueba }}</div>
    </div>
  </template>

  <script>
  export default {
    name: 'App',
    data() {
      return {
        companyName: window.config.VUE_APP_COMPANY_NAME,
        variable_url: window.config.VUE_APP_API_URL,
        variable_prueba: window.config.VUE_APP_CUSTOM_MESSAGE,
      }
    }
  }
  </script>

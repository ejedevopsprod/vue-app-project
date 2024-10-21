<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <div>Esta es la URL: {{ variable_url }}</div>
      <div>Esta es una variable: {{ variable_prueba }}</div>
    </div>
  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        variable_url: process.env.VUE_APP_API_URL,
        variable_prueba: process.env.VUE_APP_CUSTOM_MESSAGE,
      }
    }
  }
  </script>
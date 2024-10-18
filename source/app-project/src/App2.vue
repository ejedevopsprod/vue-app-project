<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <div>{{ variable1 }}</div>
      <div>{{ variable2 }}</div>
    </div>
  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        variable1: process.env.VUE_APP_VARIABLE_1,
        variable2: process.env.VUE_APP_VARIABLE_2,
      }
    }
  }
  </script>
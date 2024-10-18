<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <div>Esta variable es de DEV: {{ variable_dev }}</div>
      <div>Esta variable es de QA: {{ variable_qa }}</div>
      <div>Esta variable es de PROD: {{ variable_prod }}</div>
      <div>{{ variable2 }}</div>
    </div>
  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        variable_dev: process.env.VUE_APP_VARIABLE_DEV,
        variable_qa: process.env.VUE_APP_VARIABLE_QA,
        variable_prod: process.env.VUE_APP_VARIABLE_PROD,
        variable2: process.env.VUE_APP_VARIABLE_2,
      }
    }
  }
  </script>
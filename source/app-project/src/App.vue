<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <div> Company name:</div>
    </div> 
  </template>

<script>
export default {
  data() {
    return {
      companyName: window.config.VUE_APP_COMPANY_NAME,
      
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

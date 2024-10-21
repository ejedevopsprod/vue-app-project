<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>


<template>
  <div id="app">
    <WelcomeMessage />
  </div>
</template>

<script>
import WelcomeMessage from './components/WelcomeMessage.vue';

export default {
  components: {
    WelcomeMessage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

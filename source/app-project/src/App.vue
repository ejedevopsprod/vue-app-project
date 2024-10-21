<template>
  <div id="app">
    <Welcome />
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';

export default {
  components: {
    Welcome,
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

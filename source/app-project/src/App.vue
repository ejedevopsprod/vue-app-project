<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/profuturo.png" class="imagen-redimensionada" >
      <h1>{{ companyName }}</h1>
      <p>{{ welcomeMessage }}</p>
      <p><strong>Slogan:</strong> {{ tagline }}</p>
      <p><strong>Email de Contacto:</strong> <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a></p>
      <p><strong>Teléfono:</strong> {{ phoneNumber }}</p>
      <p><strong>Dirección:</strong> {{ address }}</p>
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
        welcomeMessage: window.config.VUE_APP_WELCOME_MESSAGE,
        tagline: window.config.VUE_APP_TAGLINE,
        contactEmail: window.config.VUE_APP_CONTACT_EMAIL,
        phoneNumber: window.config.VUE_APP_PHONE_NUMBER,
        address: window.config.VUE_APP_ADDRESS,
        variable_url: window.config.VUE_APP_API_URL,
        variable_prueba: window.config.VUE_APP_CUSTOM_MESSAGE,
      }
    }
  }
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


<style scoped>
.imagen-redimensionada {
  width: 400px;
  height: 3000px;
}
</style>
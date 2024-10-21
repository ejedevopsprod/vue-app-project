<template>
  <div class="welcome">
    <h1>{{ companyName }}</h1>
    <p>{{ welcomeMessage }}</p>
    <p><strong>Slogan:</strong> {{ tagline }}</p>
    <p><strong>Email de Contacto:</strong> <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a></p>
    <p><strong>Teléfono:</strong> {{ phoneNumber }}</p>
    <p><strong>Dirección:</strong> {{ address }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: window.config.VUE_APP_COMPANY_NAME,
      welcomeMessage: window.config.VUE_APP_WELCOME_MESSAGE,
      tagline: window.config.VUE_APP_TAGLINE,
      contactEmail: window.config.VUE_APP_CONTACT_EMAIL,
      phoneNumber: window.config.VUE_APP_PHONE_NUMBER,
      address: window.config.VUE_APP_ADDRESS,
    };
  },
};
</script>

<style scoped>
.welcome {
  text-align: center;
  margin-top: 50px;
}
</style>

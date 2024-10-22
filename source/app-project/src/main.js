import { createApp } from 'vue'
import App from './App3.vue'


// Cargar el archivo config.js
fetch('/config.js')
  .then((response) => response.text())
  .then((configScript) => {
    // Ejecutar el script config.js para acceder a la variable global window.config
    const script = document.createElement('script');
    script.text = configScript;
    document.head.appendChild(script);

  createApp(App).mount('#app')

  .catch((error) => {
    console.error('Error al cargar config.js:', error);
  });

    //createApp(App).mount('#app')
  })
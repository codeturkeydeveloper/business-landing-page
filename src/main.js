import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'southWest',
    themes: {
      southWest: {
        dark: false,
        colors: {
          primary: '#0A4D68',
          secondary: '#088395',
          accent: '#05BFDB',
          success: '#2C7A51',
          warning: '#F97316',
          error: '#DC2626',
          info: '#3B82F6',
          background: '#FFFFFF',
          surface: '#FFFFFF',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
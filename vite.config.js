import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    base: '/business-landing-page/',
    plugins: [vue(), vuetify()],
    build: {
        outDir: 'docs'
    },
    server: {
        port: 5173,
        open: true
    }
})
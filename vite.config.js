import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/business-landing-page/',
    plugins: [vue()],
    build: {
        outDir: 'docs',
        rollupOptions: {
            external: ['vue', 'vuetify', 'vuetify/lib', '@mdi/font/css/materialdesignicons.css'],
            output: {
                globals: {
                    vue: 'Vue',
                    vuetify: 'Vuetify',
                }
            }
        }
    },
    server: {
        port: 5173,
        open: true
    }
})
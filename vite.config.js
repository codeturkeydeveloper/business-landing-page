import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/business-landing-page/',
    plugins: [vue()],
    build: {
        outDir: 'docs',
        rollupOptions: {
            external: ['vue', 'vuetify'],
        }
    },
    server: {
        port: 5173,
        open: true
    }
})
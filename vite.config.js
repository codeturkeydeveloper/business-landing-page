import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
const base = process.env.NODE_ENV === 'dev' ? '/' : '/business-landing-page/';
export default defineConfig({
    base: base,
    plugins: [vue(),
    vuetify(),],
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
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
    base: '/business-landing-page/',
    plugins: [vue(), vuetify(), viteSingleFile()],
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
   build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                entryFileNames: 'index.js',
                assetFileNames: 'index.[ext]',
                manualChunks: undefined,
                inlineDynamicImports: true,
            },
        },
        assetsInlineLimit: Infinity,
    },
    server: {
        port: 5173,
        open: true
    }
})
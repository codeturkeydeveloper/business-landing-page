import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { cp, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const IMAGE_EXTENSIONS = /\.(png|jpe?g|gif|webp|avif|svg|ico|bmp)$/i

// package.json is "type": "module", so __dirname does not exist here.
const rootDir = dirname(fileURLToPath(import.meta.url))

/* Mirrors assets/ into the build output at the same relative path, so
   assets/img/* keeps working in index.html, manifest.json and CSS.
   Needed because this project has no public/ dir -- assets/ is the public
   dir, and Vite only copies publicDir contents it is told about. */
function copyStaticAssets() {
    return {
        name: 'copy-static-assets',
        apply: 'build',
        async closeBundle() {
            const from = resolve(rootDir, 'assets')
            const to = resolve(rootDir, 'docs', 'assets')
            await mkdir(to, { recursive: true })
            await cp(from, to, { recursive: true })
        },
    }
}

export default defineConfig({
    // Relative base so emitted asset URLs resolve correctly no matter where
    // the site is mounted -- repo subpath, custom domain root, or a preview
    // server. The previous '/business-landing-page/' hard-coded a path that
    // only matched if the site was served from that exact subdirectory,
    // which conflicted with serving codeturkey.uk from the root.
    base: './',
    // No Tailwind plugin: Tailwind is loaded from the CDN browser build in
    // index.html, so there is no local package to transform. The Vue plugin
    // compiles the SFC <style> blocks, which carry their own @layer wrappers.
    plugins: [vue(), viteSingleFile(), copyStaticAssets()],
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: 'index.js',
                // Every emitted asset keeps a readable, correctly-nested path.
                //
                // The old `index.[ext]` template flattened everything onto one
                // basename, so docs/ ended up with an opaque index.png /
                // index.svg / index.json trio whose origins were unrecoverable
                // and which would collide the moment a second image of the
                // same type was added. Images now land in assets/img/ to match
                // where they already live in the repo.
                assetFileNames: (assetInfo) => {
                    const ext = assetInfo.ext ?? ''
                    const name = (assetInfo.names?.[0] ?? assetInfo.name ?? 'asset')
                        .replace(/[^\w.-]/g, '-')
                    return IMAGE_EXTENSIONS.test(`${name}${ext}`)
                        ? `assets/img/${name}${ext}`
                        : `${name}${ext}`
                },
                manualChunks: undefined,
                inlineDynamicImports: true,
            },
        },

        // 0 = never base64 an asset into the document.
        //
        // This was `Infinity`, which inlined every image as a data URI. For
        // the 850KB contact background that meant ~1.13MB of base64 sitting
        // inside index.html: ~33% larger than the binary it encodes, blocking
        // the HTML from streaming, and re-downloaded in full on every cache
        // miss even though the image itself never changes.
        //
        // Images are now emitted as real files under assets/img/ so the
        // browser can fetch, cache and stream them independently of the page.
        assetsInlineLimit: 0,
    },
    server: {
        port: 5173,
        open: true
    }
})
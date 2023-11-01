import { defineConfig } from 'vite'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    mode: 'development',
    plugins: [vue(), vueJsx()],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        },
    },
    server: {
        port: 10000,
    },
    build: {
        rollupOptions: {
            input: {
                background: resolve(__dirname, './src/background.html'),
                popup: resolve(__dirname, './src/popup.html'),
            },
        },
    },
})

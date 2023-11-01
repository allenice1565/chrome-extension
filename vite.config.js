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
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@pages': resolve(__dirname, './src/pages'),
            '@store': resolve(__dirname, './src/store'),
            '@utils': resolve(__dirname, './src/utils'),
        },
    },
    server: {
        port: 10000,
    },
    build: {
        rollupOptions: {
            input: {
                background: resolve(__dirname, './background.html'),
                popup: resolve(__dirname, './popup.html'),
            },
        },
    },
})

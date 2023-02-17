import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './src',
    build: {
        emptyOutDir: false,
        outDir: resolve(__dirname, 'dist'),
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'lib/index.js'),
            name: 'Sever',
            formats: ['iife', 'es'],
            fileName: (format) => {
                if (format === 'es') {
                    return 'sever.js'
                }
                return `sever.${format}.js`
            },
        },
    },
})

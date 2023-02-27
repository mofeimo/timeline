import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		legacy({

		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
		extensions:['.mjs','.js','.ts','.jsx','.tsx','.json']
	},
	logLevel: 'info',
	base: './',
	server: {
		port: 80,
		cors: true,
		open: true,
		proxy: {
			'^/123': {
				target: '',
				rewrite: (path) => path.replace('','')
			}
		}
	},
	build: {
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name].js',
				entryFileNames: 'static/js/[name].js',
				assetFileNames: 'static/[ext]/[name].[ext]',
			}
		},
		manifest: false,
	}
})

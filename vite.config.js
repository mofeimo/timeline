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
		}
	},
	logLevel: 'info',
	server: {
		port: 7777,
		cors: true,
		proxy: {
			'^/123': {
				target: '',
				rewrite: (path) => path.replace('','')
			}
		}
	}
})

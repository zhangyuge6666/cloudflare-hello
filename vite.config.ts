import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { URL, fileURLToPath } from 'node:url'

export default defineConfig({
	plugins: [vue(), vueDevTools(), cloudflare()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src/vue-app', import.meta.url)),
			'assets': fileURLToPath(new URL('./src/vue-app/assets', import.meta.url)),
			'components': fileURLToPath(new URL('./src/vue-app/components', import.meta.url)),
		}
	},
});

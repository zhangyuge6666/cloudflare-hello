import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	plugins: [vue(),vueDevTools(), cloudflare()],
});

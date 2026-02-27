import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'assets/styles/main.css'

const app = createApp(App) // 创建 vue 应用
app.use(router)
app.mount('#app') // 挂载页面


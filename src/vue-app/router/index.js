import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'Root', component: () => import('@/views/about/index.vue'), },
    { path: '/about', name: 'About', component: () => import('@/views/about/index.vue'), },
    { path: '/a', name: 'A', component: () => import('@/views/a.vue'), },
    { path: '/b', name: 'B', component: () => import('@/views/b.vue'), },
]

const router = createRouter({
    // 使用HTML5模式，正式环境服务器配置查看：https://router.vuejs.org/zh/guide/essentials/history-mode.html
    history: createWebHistory('/'),
    routes: routes,
})

export default router
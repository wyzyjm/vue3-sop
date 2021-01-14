import { createRouter, createWebHashHistory } from 'vue-router'
import Test from '../views/test/index.vue'
const routes = [
    {
        path: '/',
        name: 'Test',
        component: Test,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
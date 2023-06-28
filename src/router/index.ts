import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/HelloWorld.vue'
import secondPage1 from '@/views/secondaryPage/secondaryExample.vue'
import secondPage2 from '@/views/secondaryPage/secondExample2.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Layout,
        children: [
            {
                path: '/secondPage1',
                name: 'secondaryExample',
                component: secondPage1
            },
            {
                path: '/secondPage2',
                name: 'secondExample2',
                component: secondPage2
            }
        ]
    }
]
// 创建
const router = createRouter({
    history: createMemoryHistory(),
    routes
})
// 暴露出去
export default router

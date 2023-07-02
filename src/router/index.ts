import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/home.vue'
import secondPage1 from '@/views/secondaryPage/secondaryExample.vue'
import secondPage2 from '@/views/secondaryPage/secondExample2.vue'
import errorPage from '@/views/errorPage.vue'
import login from '@/views/login.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: Layout,
        children: [
            {
                path: '/home/secondPage1',
                name: 'secondaryExample',
                component: secondPage1
            },
            {
                path: '/home/secondPage2',
                name: 'secondExample2',
                component: secondPage2
            }
        ]
    },
    {
        // 登录页面
        path: "/login",
        component: login,
    },
    {
        // 找不到路由重定向到404页面
        path: "/:pathMatch(.*)",
        component: errorPage,
    },
    {
        // 找不到路由重定向到404页面
        path: "/errorPage",
        component: errorPage,
    },
]
// 创建 router的hash模式,history模式有问题,无法显示url路径
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 暴露出去
export default router

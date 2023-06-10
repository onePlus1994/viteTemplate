import {createRouter,createMemoryHistory,RouteRecordRaw} from 'vue-router'
import Layout from '@/views/HelloWorld.vue'
const routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'home',
        component:Layout
    }
]
// 创建
const router = createRouter({
    history:createMemoryHistory(),
    routes
})
// 暴露出去
export default router

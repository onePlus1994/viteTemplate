import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/common.less'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// router守卫
router.beforeEach(({ meta, path }, from, next) => {
    let { auth = true } = meta //该router是否需要登录
    let user = JSON.parse(window.sessionStorage.getItem("user")) || {}
    let isLogin = Boolean(user.auth); // true用户已经登录，false用户未登录
    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    } else if (isLogin && path === '/login') {
        return next({ path: '/' })
    } else {
        next()
    }
})

app.config.globalProperties.eventBus = mitt()
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app');

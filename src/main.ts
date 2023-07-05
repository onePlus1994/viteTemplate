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

app.config.globalProperties.eventBus = mitt()
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app');

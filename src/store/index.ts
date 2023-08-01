import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { objReduction } from "@/components/until/until.ts";

//创建对象配置持久化
const vuexLocal = new VuexPersistence({
  //定义本地存储的方式，sessionStorage或localStorage
  storage: window.sessionStorage
})

export default createStore({
  // 状态
  state: {
    openTab: [], //所有打开的路由
    activeIndex: '/homes' //激活状态
  },
  // 改变状态的方法
  mutations: {
    // 添加tabs
    add_tabs(state: any, data: any) {
      if (data.route === '/home') return;
      state.openTab.push(data);
      state.openTab = objReduction(state.openTab, 'route')
    },
    // 删除tabs
    delete_tabs(state: any, route: any) {
      let index = 0;
      for (let option of state.openTab) {
        if (option.route === route) {
          break;
        }
        index++;
      }
      state.openTab.splice(index, 1);
    },
    // 设置当前激活的tab
    set_active_index(state: any, index: any) {
      console.log(index)
      state.activeIndex = index;
    },
    // 清空路由
    clear_tabs(state: any) {
      state.openTab.length = 0
      state.activeIndex = '/homes'
    }
  },
  actions: {
    // 触发mutations的方法
  },
  gettes: {
    // 获取状态的方法
  },
  //配置插件支持
  plugins: [vuexLocal.plugin]
})

<template>
  <el-container>
    <el-header class="header">
      <headerInformation></headerInformation>
    </el-header>
    <el-container>
      <el-aside class="Aside">
        <el-scrollbar>
          <menus :data="result.menu"></menus>
        </el-scrollbar>
      </el-aside>
      <el-main class="main">
        <!-- <interfaceCrumbs :data="result.menu"></interfaceCrumbs> -->
        <tabSwitching></tabSwitching>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import menus from '@/components/menu/index.vue'
import headerInformation from '@/components/headerInformation/index.vue'
// import interfaceCrumbs from '@/components/interfaceCrumbs/index.vue'
import tabSwitching from '@/components/tabSwitching/index.vue'
import request from '@/store/request'
import { useStore } from "vuex";
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
const store = useStore()
const requestData = new request();
let result: any = reactive<{
  menu: object[]
}>({
  menu: []
});

onMounted(async () => {
  let newData = await requestData.getData('menu');
  result.menu = newData.menu
})

// 刷新时以当前路由做为tab加入tabs
// 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
// 当当前路由是首页时，添加首页到store，并设置激活状态
if (route.path !== '/' && route.path !== '/homes') {
  store.commit('add_tabs', { route: '/homes', name: '首页' });
  store.commit('add_tabs', { route: route.path, name: route.name });
  store.commit('set_active_index', route.path);
} else {
  store.commit('add_tabs', { route: '/homes', name: '首页' });
  store.commit('set_active_index', '/homes');
  router.push('/homes');
}
</script>

<style lang="less" scoped>
.header {
  background-color: #409EFF;
}

.Aside {
  background-color: rgba(236, 236, 236);
  height: calc(100vh - 60px)
}

.main {
  padding: 0 0 20px 0;
}
</style>

<template>
  <el-container>
    <el-header class="header">
      <headerInformation></headerInformation>
    </el-header>
    <el-container>
      <el-aside class="Aside">
        <menus :data="result.menu"></menus>
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
import { reactive, onMounted } from "vue";

let store = new request();
let result: any = reactive<{
  menu: object[]
}>({
  menu: []
});

onMounted(async () => {
  let newData = await store.getData('menu');
  result.menu = newData.menu
})
</script>

<style lang="less" scoped>
.header {
  background-color: #409EFF;
}

.Aside {
  background-color: rgba(236, 236, 236);
}

.main {
  padding: 0 0 20px 0;
}
</style>

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
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import menus from '@/components/menu/index.vue'
import headerInformation from '@/components/headerInformation/index.vue'
import Store from '@/store'
import { reactive, onMounted } from "vue";

let store = new Store();
let result: any = reactive<{
  menu: object[]
}>({
  menu: []
});

onMounted(async () => {
  let newData = await store.getData();
  result.menu = newData.menu
})
</script>

<style lang="less" scoped>
.Aside {
  // width: 200px;
  // background-color: aqua;
  border-right: 1px solid;
}
</style>
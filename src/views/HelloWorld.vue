
<template>
  <el-container>
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="Aside">
        <menus :data="result" @nodeClick="ddd"></menus>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import menus from '@/components/menu/index.vue'
import { convertData } from '@/components/until/until.js'
import Store from '@/store'
import { ref } from "vue";

let store = new Store();
let result = ref()

const getDatas = async () => {
  let newData = await store.getData();
  result.value = newData
}

getDatas()

const ddd = (dd) => {
  console.log(convertData(dd), 'wwdw')
}
</script>

<style lang="less" scoped>
.Aside {
  // width: 200px;
  // background-color: aqua;
}
</style>
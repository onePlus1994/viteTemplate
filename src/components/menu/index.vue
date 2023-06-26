<template>
  <div class="bodyMenu">
    <el-menu>
      <menu-item v-for="item in menuData" :key="item.path" :item="item" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { convertData } from '@/components/until/until.js'
import MenuItem from "./MenuTree.vue";
import { watch, ref } from 'vue';
// 在接收时候也得注意，vue3 props接收必须规定数据类型，如果父元素数据类型出错，那么会报错
const props = defineProps({ data: Object });
let menuData = ref();

watch(() => props.data, (newval) => {
  menuData = convertData(newval).menu
});

// const emit = defineEmits(["nodeClick"])

// const nodeClick = (value) => {
//   let data = convertData(value)
//   // emit("nodeClick", data.index)
//   console.log(data.index,'ddd')
// }

</script>

<style lang="less" scoped>
.bodyMenu {
  padding: 0 10px;
}

/deep/ .el-menu {
  border-right: none;
}
</style> 

<template>
  <div class="bodyMenu">
    <el-tree
      ref="treeRef"
      :data="menuData"
      node-key="id"
      :props="defaultProps"
      class="menuTree"
      @node-click="nodeClick"
    />
  </div>
</template>

<script setup lang="ts">
import { convertData } from '@/components/until/until.js'
import { watch, ref } from 'vue';
// 在接收时候也得注意，vue3 props接收必须规定数据类型，如果父元素数据类型出错，那么会报错
const props = defineProps({ data: Object });

let menuData = ref();
const defaultProps = {
  children: 'children',
  label: 'name',
}

watch( () => props.data, (newval) => {
  menuData = convertData(newval).menu
});

const emit = defineEmits(["nodeClick"])

const nodeClick = (value) => {
  let data = convertData(value)
  if (!data.children) {
    emit("nodeClick", value)
  }
}
</script>

<style lang="less" scoped>
  .bodyMenu{
    padding: 0 10px;
  }
  /deep/ .el-tree-node__content{
    height: 56px;
  }
</style> 

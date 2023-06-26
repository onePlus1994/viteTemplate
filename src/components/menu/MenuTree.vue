<template>
  <el-menu-item v-if="!item.children" :index="item.path">
    <el-icon>
      <component :is="item.icon"></component>
    </el-icon>
    <span>{{ item.name }}</span>
  </el-menu-item>

  <el-sub-menu v-else :index="item.path">
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
    </template>
    <!-- 组件自调 -->
    <s-menu v-for="ele in item.children" :index="ele.path" :key="ele" :item="ele" />
  </el-sub-menu>
</template>
<script setup>
defineOptions({
  name: "SMenu",//组件命名
});
defineProps(["item"]);//父组件向子组件传递的数据
</script>
<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>
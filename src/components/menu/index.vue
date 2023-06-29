<template>
  <div class="bodyMenu">
    <el-menu router :default-active="route.path">
      <template v-for="item in menuData">
        <menu-item :subMenu="item" />
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import MenuItem from "./MenuTree.vue";
import { toRefs, computed } from 'vue';
import { useRoute } from 'vue-router'
// 在接收时候也得注意，vue3 props接收必须规定数据类型，如果父元素数据类型出错，那么会报错
const props = defineProps({ data: Object });

const { data }: any = toRefs(props)
const menuData: any = computed(() => {
  return data.value
})
const route = useRoute();

</script>

<style lang="less" scoped>
.bodyMenu {
  padding: 0 10px;
}

::v-deep(.el-menu) {
  border-right: none;
}
</style> 

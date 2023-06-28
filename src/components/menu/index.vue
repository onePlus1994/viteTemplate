<template>
  <div class="bodyMenu">
    <el-menu router :default-active="defActive">
      <template v-for="item in menuData">
        <menu-item :subMenu="item" />
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// import { convertData } from '@/components/until/until.ts'
import MenuItem from "./MenuTree.vue";
import { toRefs, computed } from 'vue';
import { useRouter } from 'vue-router'
// 在接收时候也得注意，vue3 props接收必须规定数据类型，如果父元素数据类型出错，那么会报错
const props = defineProps({ data: Object });

const { data }: any = toRefs(props)
const menuData: any = computed(() => {
  return data.value
})

const defActive = "/secondPage1"; //默认页面
const router = useRouter();
router.push(defActive)
</script>

<style lang="less" scoped>
.bodyMenu {
  padding: 0 10px;
}

/deep/ .el-menu {
  border-right: none;
}
</style> 

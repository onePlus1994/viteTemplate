<template>
  <div>
    <el-menu router :default-active="route.path">
      <template v-for="item in menuData">
        <menu-item :subMenu="item" />
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { convertData } from "@/components/until/until";
import MenuItem from "./MenuTree.vue";
import { toRefs, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
// 在接收时候也得注意，vue3 props接收必须规定数据类型，如果父元素数据类型出错，那么会报错
const props = defineProps({ data: Object });

const { data }: any = toRefs(props)
const menuData: any = computed(() => {
  if (data.value && data.value.length > 0) {
    routerPush0(data.value)
  }
  return data.value
})
const route = useRoute();
const router = useRouter();

const routeData = {
  ary: [] as any[]
}
const routerPush0 = (array: any) => {
  let data = convertData(array);
  if (data[0].children && data[0].children.length > 0) {
    if (convertData(routeData.ary).indexOf(data[0].route) < 0) {
      routeData.ary.push(data[0].route)
    }
    routerPush0(data[0].children)
  } else {
    if (convertData(routeData.ary).indexOf(route.path) >= 0) {
      router.push(data[0].route)
    }
  }
}

</script>

<style lang="less" scoped>
::v-deep(.el-menu) {
  border-right: none;
  background-color: rgba(236, 236, 236);
}

::v-deep(.el-menu-item:hover) {
  background-color: #ecf5ff;
}

::v-deep(.el-sub-menu__title:hover) {
  background-color: #ecf5ff;
}
</style> 

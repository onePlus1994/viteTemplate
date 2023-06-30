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
    routerPush0(data[0].children)
  } else {
    console.log(data[0])
    if (convertData(routeData.ary).indexOf(data[0].route) >= 0) {
      router.push(data[0].route)
    } else {
      routeData.ary.push(data[0].route)
    }
  }
}

</script>

<style lang="less" scoped>
.bodyMenu {
  padding: 0 10px;
}

::v-deep(.el-menu) {
  border-right: none;
}
</style> 

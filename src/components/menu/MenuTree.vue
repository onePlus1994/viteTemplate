<template>
  <div>
    <!-- 设置判断条件，如果存在子级且有值 -->
    <el-sub-menu v-if="subMenu.children && '0' in subMenu.children" :index="subMenu.code">
      <template #title>
        <el-icon>
          <component :is="subMenu.icon" />
        </el-icon>
        <span>{{ subMenu.title + "1" }}</span>
      </template>
      <!-- 重点：循环调用自己 -->
      <template v-for="(item, i) in subMenu.children" :key="item.code + i">
        <MenuTree :subMenu="item"></MenuTree>
      </template>
    </el-sub-menu>

    <!-- 设置终止条件，如果没有子级，就不在调用自己 -->
    <el-menu-item v-else :index="subMenu.route" @click="clickBack(subMenu.route)">
      <template #title>
        <el-icon>
          <component :is="subMenu.icon" />
        </el-icon>
        <span>{{ subMenu.title }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree.vue'
import { toRefs } from 'vue'
const props = defineProps({
  subMenu: {
    type: Object,
    default: () => { }
  }
})
const { subMenu } = toRefs(props)

// const emits = defineEmits(["clickBack"])

const clickBack = (res) => {
  // emits('clickBack', res)
}
</script>
<style scoped lang="less"></style>

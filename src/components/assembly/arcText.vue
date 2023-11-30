<template>
    <div class="arcTextSty">
        <h2>弧形字体组件</h2>
    </div>
</template>
  
<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps({
    width: Number,
    height: Number
})
const { width, height }: any = toRefs(props)

</script>
  
<style lang="less" scoped></style> 
  
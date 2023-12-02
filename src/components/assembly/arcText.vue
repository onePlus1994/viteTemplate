<template>
    <div>
        <span :class="data.el">{{ data.text }}</span>
    </div>
</template>
  
<script setup lang="ts">
import { toRefs, onMounted, watch, ref, nextTick } from 'vue'
var props = defineProps({ data: Object });
var { data }: any = toRefs(props)

onMounted(() => {
    $(`.${data.value.el}`).arctext({
        radius: data.value.radius,
        dir: data.value.dir
    })
})
watch(props, (newValue) => {
    var data = newValue.data
    $(`.${data.el}`).arctext({
        // radius: -180,
        radius: data.radius,
        dir: data.dir
    })
})
</script>
  
<style lang="less" scoped></style> 
  
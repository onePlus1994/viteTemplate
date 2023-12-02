<template>
    <div>
        <span class="ddd">{{ options.text }}</span>
    </div>
</template>
  
<script setup lang="ts">
import { reactive, toRefs, onMounted } from 'vue'
var props = defineProps({ data: Object });
var { data }: any = toRefs(props)
var options = reactive({
    ...data.value
})
onMounted(() => {
    $('.ddd').arctext({
        radius: 180,
        dir: 1
    })
})
console.log(options)
</script>
  
<style lang="less" scoped></style> 
  
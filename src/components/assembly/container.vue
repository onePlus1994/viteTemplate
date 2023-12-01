<template>
    <div class="container">
        <span class="text">{{ text }}</span>
    </div>
</template>
  
<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps({ text: String });
const { text }: any = toRefs(props)
console.log(text.value)
</script>
  
<style lang="less" scoped>
.container {
    margin-bottom: 20px;
    text-align: center;
    // background-color: #000;
    filter: contrast(30);
}

.text {
    font-size: 50px;
    // color: #fff;
    letter-spacing: -50px;
    animation: showup 3s linear forwards;
}

@keyframes showup {
    0% {
        filter: blur(10px);
    }

    100% {
        letter-spacing: 10px;
        filter: blur(1px);
    }
}
</style> 
  
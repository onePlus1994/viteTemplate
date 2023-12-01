
<template>
    <div>
        <div>
            <containerView :text="arcText.text"></containerView>
        </div>
        <div class="tetleStyle">
            <homePageEchars :width="titObj.width" :height="titObj.height"></homePageEchars>
            <homePageEchars1 :width="titObj.width" :height="titObj.height"></homePageEchars1>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import homePageEchars from '../../components/echarts/homePage.vue'
import homePageEchars1 from '../../components/echarts/homePage2.vue'
import containerView from '../../components/assembly/container.vue'
import { reactive, ref } from 'vue'
const arcText = reactive({
    text: "首页可视化列表与动效组件展示",
})
const titObj = reactive({
    height: 600,
    width: 1000,
})
const value1 = ref(60)
</script>
  
<style lang="less" scoped>
.tetleStyle {
    display: flex;
    justify-content: space-around;
    border-bottom: gray 1px solid;
}

.slider {
    width: 200px;
}
</style>
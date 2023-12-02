
<template>
    <div>
        <div>
            <containerView :text="arcText.text"></containerView>
        </div>
        <div class="tetleStyle">
            <homePageEchars :width="titObj.width" :height="titObj.height"></homePageEchars>
            <homePageEchars1 :width="titObj.width" :height="titObj.height"></homePageEchars1>
        </div>
        <div>
            <arcTextView :data="arcText"></arcTextView>
            <el-slider v-model="value1" class="slider" @change="sliderChange" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import homePageEchars from '../../components/echarts/homePage.vue'
import homePageEchars1 from '../../components/echarts/homePage2.vue'
import containerView from '../../components/assembly/container.vue'
import arcTextView from '../../components/assembly/arcText.vue'
import { reactive, ref } from 'vue'
const arcText = reactive({
    el: 'dde',
    radius: 180,
    text: "首页可视化列表与动效组件展示",
})
const titObj = reactive({
    height: 600,
    width: 1000,
})

const value1 = ref(60)

const sliderChange = (value1) => {
    arcText.radius = 360 / value1 * 10
    console.log(arcText)
}
</script>
  
<style lang="less" scoped>
.tetleStyle {
    display: flex;
    justify-content: space-around;
    border-bottom: gray 1px solid;
}

.slider {
    margin-top: 150px;
    width: 200px;
}
</style>
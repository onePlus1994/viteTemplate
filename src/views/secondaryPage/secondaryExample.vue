
<template>
    <div>
        <div class="tetleStyle">
            <homePageEchars :width="titObj.width" :height="titObj.height"></homePageEchars>
            <homePageEchars1 :width="titObj.width" :height="titObj.height"></homePageEchars1>
        </div>
        <div>
            <arcTextView></arcTextView>
            <el-slider v-model="value1" class="slider" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import homePageEchars from '../../components/echarts/homePage.vue'
import homePageEchars1 from '../../components/echarts/homePage2.vue'
import arcTextView from '../../components/assembly/arcText.vue'
import { reactive, ref } from 'vue'
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
<template>
    <div>
        <el-tabs v-model="activeIndex" type="card" v-if="tabPane.length" @tab-click="clickTab" @tab-remove="removeTab">
            <el-tab-pane v-for="(item, index) in tabPane" :key="item.path" :label="item.name"
                :name="item.path"></el-tab-pane>
        </el-tabs>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, reactive, computed, watch } from 'vue';

var activeIndex = ref();
var tabPane = reactive([]);
const router = new useRouter();

watch(() => router.currentRoute.value, (newValue: any) => {
    console.log(newValue, 'dd')
}, { immediate: true })

const clickTab = ({ props } = e) => {

}
const removeTab = (targetName) => {

}
const assignment = (value) => {
    router.push(value)
    activeIndex = value
}

</script>
  
<style lang="less" scoped></style> 
  
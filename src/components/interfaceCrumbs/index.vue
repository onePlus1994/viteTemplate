<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item>homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
  
<script setup lang="ts">
import { convertData } from '@/components/until/until.ts'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { toRefs, computed, watch } from 'vue';

const route = useRoute();

const props = defineProps({ data: Object });

const { data }: any = toRefs(props)
const menuData: any = computed(() => {
    return data.value
})

watch(menuData, (newValue, oldValue) => {
    console.log('值发生了变更', convertData(newValue));
})
</script>
  
<style lang="less" scoped></style> 
  
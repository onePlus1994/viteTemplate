<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="(item, index) in objAry.listAry" :key="index">{{ item.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
  
<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { toRefs, computed, watch, reactive } from 'vue';

const route = useRoute();
const router = useRouter();

const props = defineProps({ data: Object });

const { data }: any = toRefs(props)
const menuData: any = computed(() => {
    return data.value
})
const objAry = reactive({
    listAry: [] as any[]
});

const getPathById = (tree: any, id: any, path: any) => {
    tree = Array.isArray(tree) ? tree : [tree]
    if (!path) {
        path = []
    }
    for (let i = 0, len = tree.length; i < len; i++) {
        let tempPath = [...path]
        tempPath.push(tree[i])
        if (tree[i].route === id) {
            return tempPath
        }
        if (tree[i].children) {
            return getPathById(tree[i].children, id, tempPath)
        }
    }
}

watch(menuData, (newValue) => {
    objAry.listAry = getPathById(newValue, route.path, []);
})

watch(() => router.currentRoute.value, (toPath) => {
    objAry.listAry = getPathById(menuData.value, toPath.path, []);
}, { immediate: true, deep: true })

</script>
  
<style lang="less" scoped>
::v-deep(.el-breadcrumb span, i) {
    line-height: 56px;
}
</style> 
  
<template>
    <el-tabs v-model="openTab.activeIndex" type="card" class="demo-tabs" @tab-click="clickTab" @tab-remove="removeTab">
        <el-tab-pane v-for="(item, index) in openTab.ary" :key="item.route" :closable="index != 0" :label="item.name"
            :name="item.route"></el-tab-pane>
    </el-tabs>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive, computed, watch } from 'vue';
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
var openTab = reactive({
    ary: [] as any[],
    activeIndex: null
});

watch(() => router.currentRoute.value, (newValue: any) => {
    //判断路由是否已经打开
    //已经打开的 ，将其置为active
    //未打开的，将其放入队列里
    store.commit('add_tabs', { route: newValue.path, name: newValue.name });
    store.commit('set_active_index', newValue.path);
    openTab.activeIndex = store.state.activeIndex;
    openTab.ary = store.state.openTab;
}, { immediate: true })

const numAry = computed(() => {
    let objAry = [] as any
    openTab.ary.forEach((v) => {
        objAry.push(v.route)
    })
    return objAry
})

const clickTab = (props: any) => {
    router.push({ path: props.props.name });
}
const removeTab = (targetName: any) => {
    //首页不删
    if (openTab.activeIndex === targetName) {
        let num = numAry.value.indexOf(targetName)
        // 设置当前激活的路由
        let ary = openTab.ary
        if (ary && ary.length > 1) {
            store.commit('set_active_index', ary[num - 1].route);
            openTab.activeIndex = ary[num - 1].route;
            router.push({ path: openTab.activeIndex || '' });
        } else {
            store.commit('set_active_index', ary[0].route);
            openTab.activeIndex = ary[0].route;
            router.push({ path: openTab.activeIndex || '' });
        }
    }
    store.commit('delete_tabs', targetName);
}
</script>
  
<style lang="less" scoped></style> 
  
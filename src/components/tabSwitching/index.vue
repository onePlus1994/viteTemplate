<template>
    <el-tabs v-model="openTab.activeIndex" type="card" class="demo-tabs" @tab-click="clickTab" @tab-remove="removeTab">
        <el-tab-pane v-for="(item, index) in openTab.ary" :key="item.route" :closable="index != 0" :label="item.name"
            :name="item.route"></el-tab-pane>
    </el-tabs>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { toRef, reactive, computed, watch } from 'vue';
import { useStore } from "vuex";

const router = new useRouter();
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

const clickTab = ({ props } = e) => {
    router.push({ path: props.name });
}
const removeTab = (targetName) => {
    //首页不删
    if (targetName == '/') {
        return
    }
    store.commit('delete_tabs', targetName);
    if (openTab.activeIndex === targetName) {
        // 设置当前激活的路由
        if (openTab && openTab.length >= 1) {
            console.log(openTab[openTab.length - 1].route, 'ss')
            store.commit('set_active_index', openTab[openTab.length - 1].route);
            router.push({ path: openTab.activeIndex });
        } else {
            router.push({ path: '/homes' });
        }
    }
}
</script>
  
<style lang="less" scoped></style> 
  
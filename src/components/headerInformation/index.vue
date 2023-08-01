<template>
    <div class="headerBody">
        <div class="img"></div>
        <div>
            <el-avatar shape="square" :size="40" src="src/assets/image/head.png" class="margStyle" />
            <el-dropdown ref="dropdown1" trigger="contextmenu">
                <el-avatar shape="circle" :size="40" src="src/assets/image/head.png" @click="showClick" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="ssss">Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided @click="outAccount">退出账号</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { ref } from 'vue'

const store = useStore();
const router = useRouter();

const dropdown1 = ref()
const showClick = () => {
    if (!dropdown1.value) return
    dropdown1.value.handleOpen()
}

const ssss = () => {
    store.commit('clear_tabs');
}
const outAccount = () => {
    store.commit('clear_tabs');
    let sessionData = JSON.parse(window.sessionStorage.getItem("user"))
    if (sessionData) {
        sessionData.auth = false
        window.sessionStorage.setItem("user", JSON.stringify(sessionData))
        router.push({ path: '/login' })
    }
}
</script>
  
<style lang="less" scoped>
.headerBody {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.img {
    background-image: url(@/assets/image/logo.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 60px;
    width: 200px;
    transform: scaleY(1.7);
}

.margStyle {
    margin-right: 10px;
}
</style> 
  
<template>
    <div class="headerBody">
        <div class="img"></div>
        <div>
            <el-dropdown ref="dropdown1" trigger="contextmenu" class="margStyle">
                <el-avatar shape="circle" :size="40" src="src/assets/image/head.png" @click="showClick" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-avatar shape="square" :size="40" src="src/assets/image/head.png" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
const dropdown1 = ref()
const showClick = () => {
    if (!dropdown1.value) return
    dropdown1.value.handleOpen()
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
}

.margStyle {
    margin-right: 10px;
}
</style> 
  

<template>
    <div class="loginBody">
        <div class="loginSty">
            <div class="title">vite模板登录界面 <br /> 2个账号,密码和账号相同admin cesi</div>
            <el-row>
                <el-col :span="24">
                    <el-input v-model="account" placeholder="账号" :prefix-icon="Stamp" />
                </el-col>
                <el-col :span="24">
                    <el-input v-model="password" type="password" placeholder="密码" :prefix-icon="Key" />
                </el-col>
                <el-col :span="24" class="logonSty">
                    <el-button type="primary">登录</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Stamp, Key } from '@element-plus/icons-vue'
import { ref } from "vue";
const account = ref('')
const password = ref('')
</script>
  
<style lang="less" scoped>
.loginBody {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/image/login.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.loginSty {
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px 0px;
    background-color: #ffffff;
    position: absolute;
    border: 1px solid;
    padding: 20px;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

::v-deep(.el-col) {
    margin-bottom: 10px;
}

.title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
}

.logonSty {
    text-align: center;
    margin-top: 20px;

    button {
        width: 150px;
    }
}
</style>
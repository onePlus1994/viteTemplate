
<template>
    <div class="loginBody">
        <div class="loginSty">
            <div class="title">vite模板登录界面 <br /> 2个账号,密码和账号相同admin cesi</div>
            <el-row>
                <el-col :span="24">
                    <el-form :model="form" ref="ruleFormRef" :rules="rules">
                        <el-form-item prop="account">
                            <el-input v-model.trim="form.account" placeholder="账号" :prefix-icon="Stamp"
                                onkeyup="value=value.replace(/[^\x00-\xff]/g, '')" />
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model.trim="form.password" type="password" placeholder="密码" :prefix-icon="Key"
                                onkeyup="value=value.replace(/[^\x00-\xff]/g, '')" />
                        </el-form-item>
                        <el-form-item class="logonSty">
                            <el-button type="primary" @click="logon(ruleFormRef)">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Stamp, Key } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import request from '@/store/request'
import { reactive, ref } from "vue";

let requestAjax = new request();
const ruleFormRef = ref<InstanceType<typeof FormInstance>>()
const regex = /^[a-zA-z]\w{3,15}$/
const form: any = reactive({
    isLogOn: false,
    account: "",
    password: ""
})

const validateAccount = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please enter an account'))
    } else {
        if (value.length < 4 || value.length > 15) {
            callback(new Error('Length should be 4 to 15'))
        } else if (regex.test(value)) {
            callback()
        } else {
            callback(new Error('Start with letter'))
        }
    }
}

const validatePassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please enter an account'))
    } else {
        if (value.length < 4 || value.length > 15) {
            callback(new Error('Length should be 4 to 15'))
        } else if (regex.test(value)) {
            callback()
        } else {
            callback(new Error('Start with letter'))
        }
    }
}

const rules = reactive<InstanceType<typeof FormRules>>({
    account: [{ validator: validateAccount, trigger: 'blur' },],
    password: [{ validator: validatePassword, trigger: 'blur' },],
})

const logon = async (formEl: any) => {
    if (!formEl && !form.isLogOn) return
    await formEl.validate((valid) => {
        if (valid) {
            ajaxPdw(form)
        }
    })
}

const ajaxPdw = async (value: any) => {
    let newData = await requestAjax.getData('login');
    newData.login.forEach(v => {
        if (v.account === value.account && v.password === value.password) {
            form.isLogOn = true
        }
    });
    if (form.isLogOn) {
        ElMessage({ message: 'Login succeeded', type: 'success', })
    } else {
        ElMessage({ message: 'Login failed', type: 'warning', })
    }
}
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

.title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
}

::v-deep(.logonSty .el-form-item__content) {
    justify-content: center;

    button {
        width: 150px;
    }
}
</style>
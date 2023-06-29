<template>
    <div class="headerBody">
        <div class="img"></div>
        <div>123465</div>
    </div>
</template>
  
<script setup lang="ts">

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
</style> 
  
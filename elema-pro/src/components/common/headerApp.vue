<template>
     <div class="header">
         <b class="iconfont icon-zuo"></b><span>发现</span>
     </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    width: 100%;
    height: 40px;
    background: #2395ff;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
}
.header b{
    line-height: 40px;
    padding-left:10px;
    color: #fff; 
}
.header span{
    color:#fff;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>

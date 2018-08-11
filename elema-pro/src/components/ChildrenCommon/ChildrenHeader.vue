<template>
    <div class="childrenHeader">

            <router-link to="/home">
               <b class="return-icon iconfont icon-zuo"></b> 
            </router-link>
            <span>{{$store.state.headerName}}</span>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.childrenHeader{
    width: 100%;
    height: 40px;
    background:#00a7ff;
    position: absolute;
    left: 0;
    top: 0;

}
.childrenHeader b{
    line-height: 40px;
    padding-left:10px;
    color: #fff; 
}
.childrenHeader span{
    color:#fff;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

</style>

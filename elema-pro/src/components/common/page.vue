<template>
    <div class="page" ref="page">
        <div class="page-wrap">

        <slot/>

        </div>
    </div>
</template>

<script>
export default {
      mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page);
        // scroll.on('beforeScrollStart', ()=>{
        //     scroll.refresh();
        //     probeType:3;
        // });
        // scroll.on('scroll',()=>{
        //     console.log(scroll.y)
        // })
    }  
}

</script>

<style scoped>
.page{
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
</style>

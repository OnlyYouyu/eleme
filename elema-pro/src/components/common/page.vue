<template>
    <div class="page" ref="page">
        <div class="page-wrap">

        <slot/>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        onScroll: Function
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page,{
            probeType:this.onScroll ? 3 : 0,
    });
    this.scroll = scroll
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
    });
     scroll.on('scroll', ()=>{
            let disY = scroll.y-scroll.maxScrollY;
            this.onScroll(disY);
        });
    this.$center.$on('toScroll',scroll=>{
            // console.log(scroll)
            this.scroll.scrollTo(0,-scroll)
        })
        
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

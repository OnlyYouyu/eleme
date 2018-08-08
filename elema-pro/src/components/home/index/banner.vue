<template>
 <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
                <router-link class="title" 
                v-for="item in data.BannerOneData" :key="item.id" to = "">
                <img :src="item.image | formateImg"/>
                <p>{{item.name}}</p>
                </router-link>
        </div>
        <div class="swiper-slide">
                <router-link class="title" 
                v-for="item in data.BanneTwoData" :key="item.id" to = "">
                <img :src="item.image | formateImg"/>
                <p>{{item.name}}</p>
                </router-link>
        </div> 
    </div>
    <div class="swiper-pagination show"></div>
</div>


</template>

<script>
export default {
    props:{
         data:Object
    },
    mounted(){
        this.bannerSwiper = new Swiper(this.$refs.banner, {
            loop: true,
            pagination: '.swiper-pagination',
        });
    },
    updated(){
        this.bannerSwiper.update();
        this.bannerSwiper.reLoop();
        this.bannerSwiper.slideTo(1, 0);
    }

}
</script>

<style scoped>
.swiper-container{
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    background: #ffffff;
    padding-bottom:20px; 
    
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
}
.swiper-slide .title{ 
    width: 20%;
    text-align: center;
    padding-top: 10px;
}
.swiper-slide .title p{
    font-size: 12px;
    color: #666;

}
.swiper-slide img{
    width: 38.4px;
    height: 38.4px;
}
.show{
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>

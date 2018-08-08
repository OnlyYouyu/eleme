<template>
    <div id="home">
        <header class="home-header">
            <b class="header-icon iconfont icon-dingwei"></b>
            <p>请选择地址</p>
            <b class="header-icon-after iconfont icon-sanjiao"></b>
        </header>
        <div class="search">
            <router-link class="search-frame" to="">
                <b class="search-icon iconfont icon-search"></b>搜索饿了么商家、商品名称
            </router-link>
        </div>
        <page>
            <banner :data="{BannerOneData,BanneTwoData}"></banner>
            <div class="discount">
                <div class="discount-left">
                    <h3>品质套餐</h3>
                    <p>搭配齐全吃的好</p>
                <div>
                    <router-link to="">立即抢购<b class="iconfont icon-tubiao-"></b></router-link>  
                    <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
                </div>
                </div>
                <div class="discount-right" v-for="item in DiscountData" :key="item.id">
                    <h3>{{item.name}}</h3>
                    <p>{{item.description}}</p>
                <div>
                    <router-link to="">正在抢<b class="iconfont icon-tubiao-"></b></router-link>  
                    <img :src="item.image | formateImg">
                </div>
                    
                </div>
            </div> 
        </page>
               
    </div>
</template>

<script>
import Banner from "../../components/home/index/banner.vue";
import Page from "../../components/common/page.vue";
import {getBannerHomeData, getDiscountHomeData} from "../../services/commodityServices.js";
export default {
     components:{
        Banner,
        Page,
    },
    data(){
        return{
              BannerOneData:[],
              BanneTwoData:[],
              DiscountData:[],  
        }
    },
    mounted(){
        getBannerHomeData().then(result=>{
            console.log(this.BannerOneData = result.slice(0,10))
            console.log(this.BanneTwoData  =result.slice(10,13))
          this.BannerOneData = result.slice(0,10);
          this.BanneTwoData  =result.slice(10,13)
       });
       getDiscountHomeData().then(result=>{
           console.log(result)
           this.DiscountData = result
       })

    }
}
</script>

<style scoped>
.home-header{
    width: 100%;
    height: 40px;
    background: #00a7ff;
    display: flex;
    color: #fff;
    line-height: 50px;
    box-sizing: border-box;
    padding-left: 3%;
}
.header-icon{
    font-size: 12px;
}
.home-header p{
    padding-left: 5px;
    font-weight:700;
} 
.search{
    width: 100%;
    height: 42.5px;
    background: #00a7ff;
    text-align: center;
    line-height: 42.5px;
    
}
.search-frame{
    display: inline-block;
    width: 94%;
    height: 30px;
    background: #fff;
    color: #999;
    line-height: 30px;
    box-sizing: border-box;
}
.search-frame b{
    font-size: 12px;
    padding-right:5px; 
}
.discount img{
    width: 102px;
    height: 78.5px;
}
</style>

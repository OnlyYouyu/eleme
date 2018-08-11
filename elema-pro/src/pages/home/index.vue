<template>
    <div id="home">
         <div>
        <header class="home-header" @click="addressPage">
            <b class="header-icon iconfont icon-dingwei"></b>
            <p>{{$store.state.cityName}}</p>
            <b class="header-icon-after iconfont icon-sanjiao"></b>
        </header>
        <div class="search">
            <router-link class="search-frame" to="/search">
                <b class="search-icon iconfont icon-search"></b>搜索饿了么商家、商品名称
            </router-link>
        </div>
        <div class="page-scroll">
        <page>
            <banner :data="{BannerOneData,BanneTwoData}"></banner>
            <div class="discount">
                <router-link class="discount-left buy" to="">
                    <h3>品质套餐</h3>
                    <p class="introduce">搭配齐全吃的好</p>
                    <p class="left-buy">立即抢购<b class="iconfont icon-tubiao-"></b></p>  
                    <img class="img-left" src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
                </router-link>
                <router-link class="discount-right buy" v-for="item in DiscountData" :key="item.id" to="">
                    <h3>{{item.name}}</h3>
                    <p class="introduce">{{item.description}}</p>
                    <p class="number"><span>{{item.population}}人</span>正在抢<b class="iconfont icon-tubiao-"></b></p>  
                    <img :src="item.image | formateImg" class="img-right"/>
                </router-link>
            </div>
            <div class="recommend">
                <b class="before"></b>
                推荐商家
                <b class="after"></b>
            </div> 
            <h1 class="go"></h1>
        </page>
    </div>
    </div>
   <router-view></router-view>
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
    methods:{
        addressPage(){
            this.$router.push(
               {path:'/addresspage'}
            )
        }
    },
    mounted(){
         
        getBannerHomeData().then(result=>{
          this.BannerOneData = result.slice(0,10);
          this.BanneTwoData  =result.slice(10,13)
       });
       getDiscountHomeData().then(result=>{
           this.DiscountData = result
       })

    }
}
</script>

<style scoped>
.go{
    height: 1000px;
}
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
.page-scroll{
    width: 100%;
    position: absolute;
    top: 82.5px;
    left: 0;
    bottom: 0;
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
.discount{
    display: flex;
    box-sizing: border-box;
    margin: 10px 10px;
    
}
.discount-left{
    margin-right:2.5px;
    background: #f7f7f7;

}
.discount-left h3{
    color: #333;
}
.discount-left .left-buy{
    color: #af8260;
    font-size:12px; 
} 
.discount-right{
    margin-left: 2.5px;
    background: #f7f7f7;
} 
.discount-right h3{
    color: #e81919;
    font-weight:700; 
}
.discount-right .number span{
    color: #e81919;
}
.discount-right .number{
    z-index: 20;
}
.discount img{
    position: absolute;
    bottom: -10px;
    right: 0;
    width: 102px;
    height: 78.5px;
}
.discount .introduce{
    color:#777;
    line-height: 20px;
}
.discount .buy{
    box-sizing: border-box;
    padding:8px 0 0 10px; 
    height: 120px;
    flex: 1;
    position: relative;
}
.recommend{
    position: relative;
    width: 100%;
    height: 30px;
    background:#fff;
    line-height: 30px;
    text-align: center 
}
.recommend b{
    display: inline-block;
    width: 20px;
    height: 1px;
    background: #999;
}
.recommend .before{
    position: absolute;
    left:103px;
    top:15px;
}
.recommend .after{
    position: absolute;
    left:193px;
    top:15px;
}
</style>

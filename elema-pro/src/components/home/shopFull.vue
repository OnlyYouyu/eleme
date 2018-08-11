<template>
    <div id="full" class="full">
        <div class="minImg"><img :src="shopFull.image_path|formateImg"/></div>
        <div class="imgBtn"></div>
        <div class="shopList">
            <h1>{{shopFull.name}}</h1>

            <p>
                <span>评价{{shopFull.rating}}</span>
                <span>月售{{shopFull.recent_order_num}}单</span> 
                <span>
                    <b v-if="shopFull.delivery_mode">{{shopFull.delivery_mode.text}}</b>
                    <b v-if="!shopFull.delivery_mode">{{shopFull.theme.third_tab_name}}配送</b>   
                    约{{shopFull.order_lead_time}}分钟
                    </span>  
            </p>
       
            <p class="spanColbox">
                <span class="spanCol"> <b :style="{backgroundColor:'#'+shopFull.activities[0].icon_color,color:'#fff'}">{{shopFull.activities[0].icon_name}}</b>{{shopFull.activities[0].description}} </span>                
                <span @click="getIsshow" class="spanN">{{shopFull.activities.length}}个优惠</span>
            </p>
            
             <!-- 公告 -->
            <p class="tellBtn">
               公告: {{shopFull.promotion_info}}
                </p>    
            </div>

        <!-- 商家推荐 -->
     <h1 class="shopName">商家推荐</h1>

     <div class="showNav">
        <div class="showSmbox">
             <Showshop v-for="(item,index) in shopNavdata" :key="index" :data="item" v-if="index<6"></Showshop>
        </div>
   </div>

   <!-- 商品展示栏 -->
   <div class="navBigbox">
        <div class="showNavboxleft">
          <div class="showBleft">
            <p class="showNawleft" v-for="(item,index) in shopData"  :key="index">
             <img :src="item.icon_url|formateImg" v-if="item.icon_url">
             {{item.name}}
            </p>
          </div>
        </div>
          <div class="showNavboxright">
              <div class="showBleft">
                <navShowright v-for="item in shopData" :key="item.id" :data="item">            
               
                </navShowright>
           </div> 
        </div>            
    </div>
    <!-- 评价 -->
    <div></div>

    <ul v-show="iSshow" class="showBox" >
        <h1>优惠活动</h1>
        <span @click="btBox">x</span>
     <li  v-for="item in shopFull.activities" :key="item.id" @click="getIsshow">
      <b :style="{backgroundColor:'#'+item.icon_color,color:'#fff'}">{{item.icon_name}}</b> {{item.description}}
     </li>
    </ul>
    
    <div v-show="iSshow" class="bigBox"></div>

    <div v-show="iSshow" class="btBox" @click="btBox"></div>
    </div>
</template>

<script>
import Showshop  from '../common/shop'
import navShowright from '../common/navShopRight'
import {getShowshop} from '../../services/filmService.js'
export default {
 components: {
   Showshop,
   navShowright  
 },
 data () {
     return {
        shopFull:{},
        iSshow:false,
        shopData:[],
        shopNavdata:[]
     }
 },
 methods: {
     getIsshow(){
         this.iSshow=true
     },
     btBox(){
         this.iSshow=false
     }
 },
mounted () {
    getShowshop(this.shopFull.id).then(item=>{
        this.shopData=item
        this.shopNavdata=item[0].foods
        console.log(item)
    })
},
created () {
    this.shopFull=this.$route.query.flag
 }
}
</script>

<style scoped>

.full{
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}
.minImg{
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -37.5px;
    width: 75px;
    height: 75px;
}
.minImg img{
width: 100%;
height: 100%;
}
.imgBtn{
    width: 100%;
    height: 100px;
    background: gray;
}
.shopList{
    padding-top:25px;
   text-align: center;
   height: 136px;
   color: #333;
}
.shopList h1{
    font-weight: 700;
    font-size: 20px;
   
   color:#000;
}
.shopList p:nth-of-type(1){
margin-top: 7px;
margin-bottom: 7px;
}
.shopList p:nth-of-type(1) span{
    margin-right: 3px;
    
}
.spanColbox{
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: 0 38px;
}
.spanCol{
color:#000;
}
.spanCol b{
margin-right: 4px;
}
.tellBtn{
    overflow: hidden;
    width: 300px;
    height: 14px;
    margin: 8px 38px;
}
.shopList p:nth-of-type(1) .spanN{
    float: right;
}
.showBox {
    padding: 20px 26px 0;
    height: 240px;
    overflow: auto;
    position: absolute;
    top: 0;
    z-index: 3;
    background: #fff;
}
.showBox h1{
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center
}
.showBox li{
    margin-bottom: 8px;
    font-size: 16px;
}
.showBox span{
    font-size: 40px;
    position: absolute;
    top: 0px;
    right: 5px;
}
.bigBox{ 
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: 1;
}
.btBox{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
}
.shopName{
    font-size: 18px;
   margin-left: 16px;
   margin-bottom: 5px;
}
.showSmbox{
 width:1000px;
}
.showNav{
    width: 100%;
    overflow: auto;
}

.showNavboxleft{
    float: left;
    width: 77px;
    overflow: auto;
    height: 500px;
}
.showNavboxright{
    height: 500px;
    overflow: auto;
}
.showNawleft{
    width: 62px;
    padding: 16px 8px;
}
.showNawleft img{
    width: 13px;
    height: 13px;
}

</style>

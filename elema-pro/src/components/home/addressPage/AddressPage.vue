<template>
<div class="wrapper" >
    <div class="addresspage" v-show="isShow">
        <div class="header">
        <router-link to="/home">
            <b class="return-icon iconfont icon-zuo"></b>
        </router-link>
        <span>选择收货地址</span>
        </div>
        <div class="search">
            <div class="select-address">
                <span>{{$store.state.cityName}}</span>
                <b class="city-icon iconfont icon-sanjiao" @click="showPaga"></b>
            </div>
            <div class="address-input">
            <b class="input-icon iconfont icon-search"></b>
            <input type="text" placeholder="请输入地址">
            <strong class="reset-icon iconfont icon-quxiao"></strong>
            </div>
        </div>
    </div>
                    <!-- 添加地址初始页  -->
    <div id="city" v-show="!isShow">
        <header class="city-header">
            <b class="switch-icon iconfont icon-zuo" @click="cityShowPaga"></b>
            <span>城市选择</span>
        </header>

        <div class="city-search">
            <b class="city-input-icon iconfont icon-search"></b>
            <input type="text" placeholder="输入城市名、拼音或首字母查询">
        </div>
        
        <div class="city-list">
             <ul class="letter-list">
                <li v-for="(item,key) in citiesData"  :key="key" @click="changeHeight(key)">
                     {{key}}
                </li>
             </ul>
            <page ref="page1">
            <div v-for="(value,key) in citiesData"  :key="value.id" class="list" :ref="key">
                    <p  class="value-key">{{key}}</p>
                    <ul>
                        <li v-for="item in value" :key="item.id" @click="cityChange(item.name)">{{item.name}}</li>
                    </ul>
            </div>
            </page>  
        </div>
    </div>
</div>    
</template>

<script>
import { getAddressData } from "../../../services/addressServices.js";
import Page from "../../common/page.vue";
export default {
    components:{
        
        Page,
    },
    data(){
        return{
            citiesData:{},
            isShow:true,
        }
    },
  methods:{
      showPaga(){ 
          this.isShow = false;     
      },
      cityShowPaga(){
          this.isShow=true;
      },
      changeHeight(key){
          this.$center.$emit('toScroll',this.$refs[key][0].offsetTop)
      },
      cityChange(city){
        //  this.$store.state.cityName = city
          this.$store.commit('changeCityName',city)
          this.$router.back()  
      } 
  },
  mounted(){
      this.$center.$on('select-city',(result)=>{
          console.log(result)
          this.Choice = result;
      })
      getAddressData().then(result=>{
          this.citiesData = result;
      })
  }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
}
.addresspage{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    top: 0;
    bottom: 0;
    z-index: 6;
    box-sizing: border-box;
}
.header,.city-header{
    width: 100%;
    height: 37.5px;
    position: relative;
    line-height: 37.5px;
    background: #2395ff; 
}
.return-icon,.switch-icon{
    color: #fff;
    padding:0 10px; 
    
}
.header span,.city-header span{
    color:#fff;
    font-size:14px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.header span{
    font-weight: 700;
}
.search{
    width:100%;
    height: 47.5px;
    background: #fff;
    display: flex;
    align-items: center; 
}
.city-icon{
    display: inline-block;
    width: 8px;
    height: 8px;
}
.select-address{
    padding:0 10px; 
}
.search input{
    border: none;
    outline: none;
    padding: 2.4vw 12.8vw 2.4vw 6.666667vw;
    background: #f2f2f2;
    -webkit-appearance: none
}
.address-input{
    position: relative;
}
.address-input .input-icon{
    position: absolute;
    font-size: 12px;
    top: 10px;
    left: 5px;
    color: #cacaca;
}
.reset-icon{
    color: #2395ff;
    position: absolute;
    top: 8px;
    right: 10px;  
}
/*********** 添加地址初始页 *************/
#city{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    bottom: 0;
    background: #fff;
    z-index: 7;
}
.city-header{
    width: 100%;
    border-bottom: 1px solid #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
}
.city-search{
    margin-top: 37.5px;
    height: 37.5px;
    background:#2395ff;
    text-align: center;
    position: relative;
}
.city-input-icon{
    font-size: 12px;
    color: #cacaca;
    position: absolute;
    top:12px;
    left: 30px;

}
.city-search input{
    margin-top: 6px;
    box-sizing: border-box;
    width: 277px;
    height: 25px;
    line-height: 25px;
    background: #fff;
    border: none;
    outline: none;
    border-radius:12.5px;
    padding-left:25px;  
}
.city-list{
    width: 100%;
    position: absolute;
    top:75px;
    bottom: 0;
}
.city-list .letter-list{
    position: absolute;
    top:40px;
    right: 15px;
    color: #999;
    font-size: 14px;
    font-weight: 700;
    z-index: 12;
}
.value-key, .list ul li{
    height:32.5px;
    line-height: 32.5px;
    color: #666;
    font-size: 14px;
    font-weight: 700;
}
.value-key{
    background: #f5f5f5;
    padding-left:10px; 
}
.list ul{
    border-top: 1px solid #ddd;
}
.list ul li{
    border-top: 1px solid #ddd;
    background: #fff;
    margin-left: 10px;
}
.list ul li:nth-child(1){
    border-top:none; 
}
</style>


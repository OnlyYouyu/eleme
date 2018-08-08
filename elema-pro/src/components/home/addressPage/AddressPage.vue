<template>
    <div class="addresspage">
        <div class="header">
        <router-link to="/home">
            <b class="return-icon iconfont icon-zuo"></b>
        </router-link>
        <span>选择收货地址</span>
        </div>
        <div class="search">
            <div class="select-address">
                <span>深圳</span>
                <b class="city-icon iconfont icon-sanjiao" @click="showPaga"></b>
            </div>
            <div class="address-input">
            <b class="input-icon iconfont icon-search"></b>
            <input type="text" placeholder="请输入地址">
            <strong class="reset-icon iconfont icon-quxiao"></strong>
            </div>
        </div>
    </div>
</template>

<script>
import { getAddressData } from "../../../services/addressServices.js";
export default {
    data(){
        inputValue:null;
    },
  methods:{
      showPaga(){
          this.$router.push(
              {path:'/addressoption'}
          )
      }
  },
  mounted(){
      getAddressData().then(result=>{
          console.log(result)
      })
  }
}
</script>

<style scoped>
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
.header{
    width: 100%;
    height: 37.5px;
    position: relative;
    line-height: 37.5px;
    background: #2395ff; 
}
.return-icon{
    color: #fff;
    padding:0 10px; 
    
}
.header span{
    color:#fff;
    font-size:14px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.search{
    width:100%;
    height: 47.5px;
    background: #fff;
    display: flex;
    align-items: center; 
}
.select-address{
    padding: 0 10px; 
}
.search input{
    border: none;
    outline: none;
    padding: 2.4vw 15.8vw 2.4vw 6.666667vw;
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
</style>


<template>
    <div class="search">
        <section class="search-header">
            <Return></Return>
            <form>
                <b class="form-icon iconfont icon-search"></b>
                <input type="text" placeholder="输入商家、商品名称"/>
                <button type="submit">搜索</button>
            </form>
        </section>
        <div class="main">
            <section class="hot-search">
                <header class="title">热门搜索</header>
                <section class="goods">
                    <button class="goods-title" v-for="(item,index) in goodsData" :key="index">{{item.word}}</button>
                </section>
            </section>

        </div>
    </div>
</template>

<script>
import Return from "../../common/return.vue";
import {getSearchGoodsData} from "../../../services/searchServices.js";
export default {
    components:{
        Return,
    },
    data(){
        return{
            goodsData:[],
        }
    },
    mounted(){
        getSearchGoodsData().then(result=>{
            console.log(result)
            this.goodsData = result
        })
    }

}
</script>

<style scoped>
.search{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  position: absolute;
  top:0;
  bottom: 0;
  z-index: 5;
}
.search-header{
    width: 100%;
    height: 43px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
.search-header form .form-icon{
    display: inline-block;
    width: 10px;
    height: 10px;
    font-size:12px;
    overflow: hidden;
    color: #c2c2c2;
    position: absolute;
    top:18px;
    left: 45px; 
}
.search-header form input{
    background: #f8f8f8;
    border: none;
    width: 235px;
    height: 24px;
    line-height: 24px;
    box-sizing: border-box;
    outline: none;
    color: #c2c2c2;
    padding-left: 30px;
    font: 400 10.3333px Arial;
 
}
.search-header form button{
    border: none;
    outline: none;
    background: #fff;
    font-weight:700;
}
.main{
    margin-top: 10px;
}
.hot-search .goods{
    padding:0 10px 10px 10px;
}
.main .title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-weight:700; 
    color: #666;
    padding: 0 10px;
    box-sizing: border-box;  
}
.goods-title{
    border: none;
    outline: none;
    background: #f7f7f7;
    font-family: inherit;
    color: #666;
    margin-top: 20px;
    margin-right: 10px;
    border-radius:2px;
    padding: 5px;    
}
</style>

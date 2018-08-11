<template>
<div class="shopList">

<ul class="shoplist-nav" >
        <li @click="inBtn">
            {{addText}}
        </li>

        <li  v-for="(item,index) in nextBtn"  :key='index'>
            {{item.name}}
        </li>
        <li>筛选</li>
    </ul>

    <div v-if="iSshow" class="showBox" >
                <p v-for="item in fristBtn" :key="item.value" @click="textBtn(item.name)" :class="{active:addText==item.name}">
                    {{item.name}}
                </p>    
    </div>
    
    <div v-if="iSshow" class="bigBox"></div>

    <div v-if="iSshow" class="btBox" @click="btBox"></div>
</div>  
</template>

<script>
import {getitemSorting} from '../../services/filmService.js'
export default {
data () {
    return {
        fristBtn:[],
        nextBtn:[],
        iSshow:false,
        addText:'综合排序'
    }
},
methods: {
    inBtn(){
       this.iSshow=true;
    },
    btBox(){
        this.iSshow=false;
    },
    textBtn(name){
        console.log(name)
     this.addText=name;
     this.btBox()
    }
},
mounted () {
    getitemSorting().then(response=>{
        this.fristBtn=response.fristBtn,
        this.nextBtn=response.nextBtn
    })
}
}
</script>

<style scoped>
.shoplist-nav{
font-size: 14px;
display: flex;
height: 38px;
width: 100%;
border-bottom: 1px solid #f8f8f8;
}
.shoplist-nav li{
   flex: 1;
   line-height: 38px;
   color: #a2a2a2;
   text-align: center;
   
}
.showBox{
    background: #fff;
    width: 100%;
    position: absolute;
    z-index: 3;
    top: 38px;
    left: 0;
}
.showBox p{
    width: 100%;
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
}
.bigBox{ 
    width: 100%;
    height: 100%;
    position: absolute;
    top:38px;
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
.shoplist-nav li{
height: 40px;
line-height: 40px;
}
.showBox .active{
    color: #3190e8;
    font-weight: 700;
}
</style>

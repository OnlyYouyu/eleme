<template>
    <div class="list">
        <ul class="food-list">
            <li v-for="item in nameList" :key="item.id">{{item.name}}</li>
        </ul>
        <div class="down">
            <b class="iconfont icon-icon-test"></b>
        </div>
    </div>
</template>

<script>
import {getFoodListData} from "../../services/foodServices.js";
export default {
    data(){
        return{
            nameList:[]
        }
    },
    mounted(){
        getFoodListData().then(result=>{
            this.nameList = result; 
        })
    }

}
</script>

<style scoped>
.list{
    width: 100%;
    height: 34px;
    background: #00a7ff;
    border-top: 1px solid #289bff;
    display: flex;
}
.food-list{
    display: flex;
    flex: 1;
    white-space: nowrap;
    overflow-x: scroll;
    box-sizing: border-box;
    align-items: center;
    
}
.food-list li{
    margin-left: 10px;
    color: #9ed6ff;
    
}
.food-list li:active{
    padding-bottom:5px; 
    border-bottom:1px solid #fff;
    color: #fff;
}
.down{
    width:33.5px;
    height: 34px;
    display: flex;
    justify-content:center;
    align-items: center; 
}
.down b{
    color:#fff;
    font-size: 12px;
}
</style>

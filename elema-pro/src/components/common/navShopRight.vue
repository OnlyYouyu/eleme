<template>
<div id="shopRight">
    <p class="showName">
        <b>{{data.name}}</b>{{data.description}}
    </p>
    <div v-for="item in data.foods" :key="item.id" class="shopShow">
        <img :src="item.image_path |formateImg" alt="">

        <div class="shopShowright">
        <h1>{{item.name}}</h1>
        <p class="pBox">{{item.description}}</p>
        <p>月销{{item.specfoods[0].recent_popularity}}
            &nbsp;&nbsp;&nbsp;
            好评率{{item.satisfy_rate}}%
        </p>

        <p v-if="item.activity" class="shopTag">
            <span>{{item.activity.benefit_text}}</span>
          <span> {{item.activity.applicable_quantity_text}}</span>
        </p>

        <p class="footBox">
            <span>￥{{item.specfoods[0].price}}</span>
            <span v-if="item.activity"> <s>￥{{item.specfoods[0].original_price}}</s></span>
           
        </p>
         <span class="tianJia">+</span>
        </div>
    </div>
      
 </div>   
</template>

<script>
export default {
props: ["data"],
mounted () {
    console.log(this.data)
}
}
</script>

<style scoped>
#shopRight{
    padding-left: 4px;
}
.showName{
    height: 29px;
    line-height: 29px;
}
.shopShow{
    height: 100px;
    padding: 10px 0; 
}
.shopShow img{
    width: 95px;
    height: 95px;
    float: left;
}
.shopShowright{
    float:right;
    width: 168px;
    height: 74px;
    padding-right:15px;
    padding-bottom: 25px; 
    position: relative;
}
.shopShowright h1{
    width: 150px;
    height: 18px;
    overflow: hidden;
    font-size: 16px;
    line-height: 18px;
}
.shopShowright .pBox{
    width: 160px;
    height: 12px;
    line-height: 12px;
    overflow: hidden;
    margin: 5px 0;
}
.shopTag{
    height: 15px;
    color: red;
}
.shopShowright .footBox{
position: absolute;
bottom: 0;
}
.footBox span:nth-of-type(1){
    color: red;
    font-size: 20px;
}
.tianJia{
    width: 22px;
    height: 22px;
    font-size: 22px;
    text-align: center;
    line-height: 22px;
    border-radius: 50%;
    background: blue;
    color: #fff;
    position: absolute;
    right: 8px;
    bottom:0;
}
</style>

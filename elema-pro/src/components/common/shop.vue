<template>
            <div class="shopShowin">
                <img :src="data.image_path | formateImg" alt="">
                <p>{{data.name}}</p>
                <p>
                    月售<span>{{data.month_sales}}</span>
                    好评率<span>{{data.satisfy_rate}}%</span>
                </p>
                <p>￥{{data.specfoods[0].price}}<span>+</span></p>
            </div> 
</template>

<script>
export default {
    props: ["data"],
}

</script>   

<style>

.shopShowin{
    float: left;
    margin: 0 20px;
}
.shopShowin img{
width: 120px;
height: 120px;
}
.shopShowin p:nth-of-type(1){
    font-size: 16px;
    margin-top: 5px;
    width: 120px;
    height: 21px;
    overflow: hidden;
}
.shopShowin p:nth-of-type(2) {
    
    margin-top:2px;
    margin-bottom: 5px;
    font-size: 12px;
}
.shopShowin p:nth-of-type(3){
    font-size: 21px;
    color: rgb(255, 83, 57);
    padding-bottom: 16px;
}
.shopShowin p:nth-of-type(3) span{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    line-height: 22px;
    color: #fff;
    background: blue;
    text-align: center;
    float: right;
}
</style>

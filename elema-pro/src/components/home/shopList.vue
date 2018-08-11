<template>
        <div class="shopList-li"  @click="getshopFull(shopData)">
            <div class="imgBox"><img :src="shopData.image_path|formateImg"></div>
            <div class="nextBox">
        <div class="centerBox">
            <header class="header">
             <h3>{{shopData.name}}</h3>
             <div>
            <span v-for="items in shopData.supports" :key="items.id" :style="{color:'#'+items.icon_color}">
                        {{items.icon_name}}
                </span>
                </div>
             </header>



            <div class="title">{{shopData.rating}}月售{{shopData.recent_order_num}}单
                <span v-if="shopData.delivery_mode" :style="{backgroundColor:'#'+shopData.delivery_mode.color,color:'#'+shopData.delivery_mode.text_color}">{{shopData.delivery_mode.text}}</span>
            </div>

            <div class="index-line">
                <div>
                <span>￥{{shopData.float_minimum_order_amount}}起送|</span>
                <span>配送费￥{{shopData.float_delivery_fee}}</span>
                </div>
                <div class="index-line-right">
                    <span>{{shopData.distance}}m|{{shopData.order_lead_time}}分钟</span>
                    
                </div>
            </div>
        </div>
            
            <div class="index-tagLine">
                <span v-for="(items,index) in shopData.support_tags" :key='index' :style="{color:'#' + items.color}">
                   <span >{{items.text}}</span> 
                </span>
            </div>

            <div class="index-foot"> 
                <ul> 
                    <span @click="iFshow()">{{shopData.activities.length}}个活动</span>
                        <li  v-for="(item,i) in shopData.activities" :key="i" v-if="i<2||shopData.iSshow">
                           <b :style="{backgroundColor:'#'+item.icon_color,color:'#fff'}">{{item.icon_name}}</b> {{item.description}}
                        </li>
                </ul>
            </div>
           </div>
          
        </div>
        
</template>

<script>
export default {
props: {
    shopData:Object
},
methods: {
    iFshow(){
       this.shopData.iSshow=!this.shopData.iSshow;
    },
    getshopFull(flag){
        console.log(flag)
        this.$router.push(
            { path: '/full', query:{flag} }
        )
    }
},
// mounted () {
//     console.log(this.shopData)
// }
}
</script>

<style scoped>
.shopList-li{
font-size: 12px;
width: 350px;
padding: 30px 10px;
overflow: auto;
}
.imgBox{
    width: 65px;
    height: 65px;
    float: left;
}
.imgBox img{
    width:100%;
    height:100%
}
.nextBox{
padding-left:10px ;
width:250px;
float: left;
}
.centerBox {
    display: flex;
   flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    
}
.header {
    display: flex;
   justify-content:space-between;
}
.title{
    margin-top: 8px;
    margin-bottom: 8px;
    position: relative;
}
.title span{
    position: absolute;
    right: 0;
}
.header h3{
    font-size:15px;
}
.header span{
  position: relative;
}
.index-line{
    display: flex;
   justify-content:space-between;
}
.index-tagLine{
    margin-top: 10px;
    margin-bottom: 10px;
}
.index-tagLine span{
    margin-right: 5px;
}
.index-foot {
    position: relative;
}
.index-foot span{
    position: absolute;
    right: 0;
    top: 0;
}
.index-foot li{
    margin-bottom: 5px;
}
</style>

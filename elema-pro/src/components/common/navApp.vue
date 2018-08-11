<template>
    <nav id="footer-nav" class="show-nav">
       <router-link class="item" to="/home"><b class="icon iconfont icon-changyonglogo40"></b><p class="title">首页</p></router-link>
       <router-link class="item" to="/find"><b class="icon iconfont icon-faxian"></b><p class="title" ref="in" @click="findHeaderName()">发现</p></router-link>
       <router-link class="item" to="/order"><b class="icon iconfont icon-tuanduicankaoxian-"></b><p class="title" ref="order" @click="orderHeaderName()">订单</p></router-link>
       <router-link class="item" to="/mine"><b class="icon iconfont icon-weibiaoti2fuzhi12"></b><p class="title" ref="mine" @click="mineHeaderName()">我的</p></router-link>
    </nav>
</template>

<script>
export default {
   methods:{
      findHeaderName(){  
        let findName = this.$refs.in.innerText
        this.$store.commit('changeHeaderName',findName)
      },
      orderHeaderName(){
        let orderName = this.$refs.order.innerText
        this.$store.commit('orderHeaderName',orderName)
      },
      mineHeaderName(){
        let mineName = this.$refs.mine.innerText
        this.$store.commit('mineHeaderName',mineName)
      }    
}
}
</script>

<style scoped>
.show-nav{
    width:100%;
    height: 44px;
    background: #fff;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    align-items: center;    
}
.show-nav .item{
    flex: 1;
    text-align: center;
   
}
.icon{
    font-size: 16px;
    color: #8e8e93;
    
}
.title{
    font-size: 12px;
    color: #8e8e93;
}
.router-link-exact-active b,.router-link-exact-active p{
    color: #0089dc;
} 
</style>

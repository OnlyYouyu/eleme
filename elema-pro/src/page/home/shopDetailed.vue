<template>
<nav class="shopDet" >
   <shop-list v-for="item in shopDet" :shopData="item" :key="item.id"></shop-list>
   
</nav>
</template> 

<script>
import {getItemSorting } from '../../services/filmService.js'
import shopList from '../../components/home/shopList'
export default {
data(){
    return {
        shopDet:[]
    }
},
components: {
        shopList
},
mounted () {
    getItemSorting().then(item=>{
       this.shopDet=item
    })
}

}
</script>

<style scoped>

</style>

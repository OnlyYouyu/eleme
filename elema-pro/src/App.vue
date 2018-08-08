<template>
  <div id="app"> 
   <router-view></router-view>
   <nav-app></nav-app> 
  </div>
</template>

<script>
import navApp from "./components/common/navApp.vue";
export default {
  components:{
    navApp
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
}

</style>

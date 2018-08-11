<template>
  <div id="app">
    <keep-alive> 
   <router-view></router-view>
   </keep-alive>
   <nav-app></nav-app> 
  </div>
</template>

<script>
import navApp from "./components/common/navApp.vue";
export default {
  components:{
    navApp,
  }
}
</script>

<style>
</style>

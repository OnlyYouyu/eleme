<template>
  <div id="app">
    <navShopList/>
    <textVue/>
    <router-view/>
  </div>
</template>

<script>
import navShopList from './components/common/navShopList'
import textVue from './page/home/shopDetailed'
export default {
  components: {
    navShopList,
   textVue
  }
}
</script>

<style>

</style>

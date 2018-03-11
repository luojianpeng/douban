<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar.vue'

export default {
  name: 'App',
  components:{
    Tabbar
  },
  beforeCreate:function () {
    this.$router.push('/')
  }
}
</script>

<style>
  *{margin: 0;padding: 0}

</style>

<script>
  import NavbarTop from './components/NavbarTop.vue'
  import MyFooter from './components/MyFooter.vue'

  export default {
    components: {
      NavbarTop,
      MyFooter
    }
  }
</script>

<style>
  * {
    list-style: none;
    text-decoration: none;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
</style>

<template>
  <NavbarTop />
  <routerView />
  <MyFooter name="Fredric Ryding" />
</template>

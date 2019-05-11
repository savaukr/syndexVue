<template>
  <div id="container">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#container {
    width:100%;
    height: 100%;
}
</style>

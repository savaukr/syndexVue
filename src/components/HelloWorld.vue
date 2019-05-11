<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{msgHelloWorld}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {msg: String},
  data() {
    return {
      msgHelloWorld: 'This message from HelloWorld!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
</style>

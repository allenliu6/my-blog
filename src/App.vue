<template>
  <div id="app">
    <b-header></b-header>
    <router-view></router-view>
  </div>
</template>

<script>
import bHeader from './components/Header'

export default {
  name: 'app',
  components: {
    bHeader
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: initial;
}
body{
  margin: 0;
}
ul{
  list-style: none;
  padding: 0;
}
a{
  text-decoration: none;
  color: #333;
}
</style>

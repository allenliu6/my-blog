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
  margin: 0;
}
a{
  text-decoration: none;
  color: #333;
}
h1,h2,h3,h4,h5,h6{
  margin: 0;
}

//动画
    .slide-fade-enter-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>

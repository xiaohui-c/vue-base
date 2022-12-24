<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <!-- 创建三个层级组件，一级组件可以删除二级组件，二级组件可以删除三级组件 -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    data(){
      return{}
    },
    components:{
      HelloWorld
    }

  }
  </script>
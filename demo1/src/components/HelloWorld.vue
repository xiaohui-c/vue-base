<template>
  <h1>{{store.state.message}}</h1>
  <button @click="changeMsg">切换</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
<script>
import { ref, inject } from 'vue';
import store from './store/index.js'
export default {
  setup(props) {
  function  changeMsg(){
      store.setMessage('哈哈哈')
    }
    return {changeMsg}
  },
  inject:["store"]
};
</script>

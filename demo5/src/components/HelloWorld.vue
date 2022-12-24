<template>
  <h1>{{ msg }}</h1>
  <p>mouse position {{x}}  {{y}}</p>
  <button @click="sendMsg">传递数据</button>
  <input type="text"  :value="name" @input="$emit('update:name',$event.target.value)"/>
  <input type="text"  :value="age" @input="$emit('update:age',$event.target.value)"/>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
<script>
  import {reactive} from 'vue'
    import useMousePosition from './MousePosition/useMousePosition.js'
  export default {
    props:['msg','name','age'],
    data(){
      return{}
    },
    emits:['onSayHello'],
    setup(props,{emit}){
    const sendMsg = ()=>{
        emit('onSayHello','vue3')
      }

      const {x,y} = useMousePosition()

      return {sendMsg,x,y}
    }
  }
</script>
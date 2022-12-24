
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
  <SlotDemo>{{msg}}</SlotDemo>
  <ScopedSlotDemo>
    <template v-slot="slotProps">
      {{slotProps.slotData}}
    </template>
  </ScopedSlotDemo>
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
  import SlotDemo from './components/SlotDemo.vue'
  import ScopedSlotDemo from './components/ScopedSlotDemo.vue'
  export default {
    data(){
      return{
        msg:'Hello Vue 3 + Vite',
        title:'凡是过往，皆为序章'
      }
    },
    components:{
      HelloWorld,
      SlotDemo,
      ScopedSlotDemo
    }
  }
  </script>
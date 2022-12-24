<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld v-model:name="name"  v-model:age="age" msg="Hello Vue 3 + Vite" @onSayHello="sayHello" />
  <LifeCycles :info="info" v-if="flag"/>
  <button @click="changeInfo">切换数据</button>
  <button @click="changeStatus">切换状态</button>
  <p>{{name}}  {{age}}</p> -->
  <!-- <Ref/>
  <RefTemplate/>
  <ToRef/> -->
  <!-- <ToRefs/> -->
<!-- <Watch/> -->
<GetInstance/>
<demo-1></demo-1>
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
import HelloWorld from './components/HelloWorld.vue';
import LifeCycles from './components/LifeCycles.vue';
import Ref from './components/Ref.vue';
import RefTemplate from './components/RefTemplate.vue';
import ToRef from './components/ToRef.vue';
import ToRefs from './components/ToRefs.vue';
import Watch from './components/Watch.vue';
import GetInstance from './components/GetInstance.vue';
import Demo1 from './components/Demo1.vue';

import {reactive,toRefs} from 'vue'
export default{
  components:{
    LifeCycles,HelloWorld,Ref,RefTemplate,ToRef,ToRefs,Watch,GetInstance,Demo1
  },
  data(){
    return{
      info:'良好状态下的行动是关键',
      flag:true
    }
  },
  setup(props) {
    const state = reactive({
      name:"xiaotian",
      age:120
    })


    return toRefs(state)
  },
  computed:{
    newInfo(){
      return this.info.split('').reverse().join('')
    }
  },
  methods: {
    changeInfo(){
      this.info = this.newInfo
    },
    changeStatus(){
      this.flag = !this.flag
    },
    sayHello(info){
      console.log(`hello ${info}`);
    }
  },

}
</script>

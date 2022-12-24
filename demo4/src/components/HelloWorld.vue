<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <component :is="textName"></component>
  <component :is="videoName"></component>
  <button @click="changeState('A')">A</button>
  <button @click="changeState('B')">B</button>
  <button @click="changeState('C')">C</button>
  <keep-alive max="5">
    <div>
      <keepAliveA v-if="state == 'A'"/>
      <keepAliveB v-if="state == 'B'"/>
      <keepAliveC v-if="state == 'C'"/>
    </div>
  </keep-alive>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
<script>
  import Video from './Video.vue'
  import Text from './Text.vue'
  import keepAliveA from './keepAliveA.vue'
  import keepAliveB from './keepAliveB.vue'
  import keepAliveC from './keepAliveC.vue'
  export default {
    props:['msg'],
    data(){
      return{
        videoName:'Video',
        textName:'Text',
        state:'A'
      }
    },
    components:{
      Text,Video,keepAliveA,keepAliveB,keepAliveC
    },
    methods: {
      changeState(val){
        console.log(val);
        this.state = val
      }
    },
  }
  </script>
<template>
  <h1>{{ msg }}</h1>
  <button @click="add">增加</button>
  <button @click="deleteCom">删除子组件</button>

  <Parents v-if=visible :num="num"/>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
<script>
  import Parents from './Parents.vue'
  export default {
    props:{
      msg:{
        type:String,
        default(){
          return ''
        }
      }
    },
    data(){
      return{
        num:0,
        visible:true
      }
    },
    methods: {
      add(){
        this.num++
        console.log(this.num);
      },
      deleteCom(){
        this.visible = false
    }
    },
    components:{
      Parents
    }
  }
  </script>

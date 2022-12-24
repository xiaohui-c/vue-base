<template>
  <div>
    <h4>{{num ? num : 0}}</h4>
    <Child  :list="list" @deleteItem="deleteChildItem"/>
  </div>
</template>
<script>
    import Child from './Child.vue'
export default {
    props:["num"],
  data() {
    return {
        list:[
            {id:1,msg:'凡是过往，皆为序章'},
            {id:2,msg:'春眠不觉晓，处处闻啼鸟'},
            {id:3,msg:'路漫漫其修远兮，吾将上下而求索'},
        ],
        
    };
  },
  watch:{
    num(newVal,oldVal){
        this.list.push({id:newVal+3,msg:'发现快乐，感受快乐，实现快乐'})
    }
  },
  methods: {
    deleteCom(){
        this.visible = false
    },
    deleteChildItem(id){
        this.list = this.list.filter(item=>item.id !== id)
    }
  },
  beforeCreate() {
    console.log('parent before create');
  },
  created() {
    console.log('parent created');
  },
  beforeMount() {
    console.log('parent before mount');
  },
  mounted() {
    console.log('parent mounted');
  },
  beforeUpdate() {
    console.log('parent before update');
  },
  updated() {
    console.log('parent updated');
  },
  beforeDestroy() {
    console.log('parent before destroy');
  },
  destroyed() {
    console.log('parent destroyed');
  },
  components:{
    Child
  }
};
</script>

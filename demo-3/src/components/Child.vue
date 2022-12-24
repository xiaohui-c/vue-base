<template>
  <div>
    <p v-for="(item, id) in list" :key="id" ref="p1">
       <span>{{ item.msg }}</span> 
        <button @click="deleteItem(item.id)">删除{{item.id}}</button>
    </p>
    <h5>{{name}}</h5>
    <Customer v-model='name'/>
   
  </div>
</template>
<script>
    import Customer from './Customer.vue'
export default {
  props: ['list','num'],
  components:{
    Customer
  },
  data() {
    return {
        name:"刘辉"
    };
  },
  methods: {
    deleteItem(id){
        this.$emit("deleteItem",id)
    },
    
  },
  beforeCreate() {
    console.log('child before create');
  },
  created() {
    console.log('child created');
  },
  beforeMount() {
    console.log('child before mount');
  },
  mounted() {
    console.log('child mounted');
  },
  beforeUpdate() {
    console.log('child before update');
  },
  updated() {
    console.log('child updated');
  },
  beforeDestroy() {
    console.log('child before destroy');
  },
  destroyed() {
    console.log('child destroyed');
  },
};
</script>

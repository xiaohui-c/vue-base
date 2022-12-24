<template>{{name}}{{age}}</template>
<script>
    import {reactive,toRefs} from 'vue'
export default {
  setup() {
      const state = reactive({
          age:20,
          name:'小灰'
      })

      const stateAsRefs = toRefs(state)//将响应式对象变为普通对象

    //   const {age:ageRef,name:nameRef} = stateAsRefs  //每个属性都是ref对象

    //   return {
    //       ageRef,nameRef
    //   }

    return stateAsRefs
  },
};
</script>

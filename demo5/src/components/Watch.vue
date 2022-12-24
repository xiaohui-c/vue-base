<template>
  <p>watch vs watchEffect</p>
  <p>{{ numberRef }}</p>
  <p>{{ name }}{{ age }}</p>
</template>

<script>
import { reactive, ref, toRefs, watch, watchEffect } from 'vue';

export default {
  name: 'Watch',
  setup() {
    const numberRef = ref(100);
    const state = reactive({
      name: 'xiaohui',
      age: 20,
    });

    watch(numberRef, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    watch(
      // 第一个参数，确定要监听哪个属性
      () => state.age,
      // 第二个参数回调函数
      (newState, oldState) => {
        console.log('state watch', newState, oldState);
      }
    );

    watchEffect(()=>{
        console.log('监听',state.age);
    })

    setTimeout(() => {
      numberRef.value = 200;
      state.age = 200
    }, 3000);

    return {
      numberRef,
      ...toRefs(state),
    };
  },
};
</script>

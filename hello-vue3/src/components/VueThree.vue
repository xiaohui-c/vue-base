<template>
  <p @click="add">{{ num }}</p>
  <ul>
    <li style="list-style: none" v-for="(item, index) in userInfo" :key="index">
      {{ item }}
    </li>
  </ul>
  <p>{{ resverTitle }}</p>
</template>
<script lang="ts">
import { ref, reactive, toRefs, computed, watch } from 'vue';
export default {
  data() {
    return {};
  },
  setup() {
    const num = ref(0);
    watch(num, (newValue, prevValue) => {
      console.log(prevValue - newValue);
    });
    const userInfo = reactive({
      username: 'xiaohui',
      age: 18,
      height: 175,
      title: '书山有路勤为径，学海无涯苦作舟',
      resverTitle: computed(() => {
        return userInfo.title.split('').reverse().join('');
      }),
    });
    function add() {
      num.value++;
    }
    return { num, add, userInfo, ...toRefs(userInfo) };
  },
};
</script>

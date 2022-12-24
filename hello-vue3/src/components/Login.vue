<template>
  <div>
    <input type="text" v-model="loginMsg" />
  </div>
  <button @click="sendMsg">传递</button>
  <h2>{{ msg }}</h2>
</template>
<script>
  import { inject } from 'vue'
export default {
  data() {
    return {
      loginMsg: '',
    };
  },
  setup(props) {
    const msg = inject('student');
    return { ...msg };
  },
  methods: {
    sendMsg() {
      this.$emit('sendMsg', this.loginMsg);
    },
  },
};
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
  <template v-if="condition">
    <p>{{ msg }}</p>
    <input type="text" v-model="msg" id="inp" />
    <input type="text" v-model="msgObj.people.title.ms"/>
    <button @click="msgChange">增加</button>
    <h1 :class="[isActive ? 'active' : 'unactive']">{{ msg1 }}</h1>
    <p v-for="(item, index) in poetryValue" :key="index">{{ item }}</p>

    <button @click.ctrl.shift="opp">测试按钮</button>
    <Header></Header>
    <Main :content="poetry" />
    <Footer></Footer>
  </template>
  <VueThree />
</template>
<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import VueThree from './components/VueThree.vue';
import { reactive, provide } from 'vue';
export default {
  name: '#App',
  data() {
    return {
      msg: '111110',
      isActive: true,
      poetry: '春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
      condition: true,
      msgObj:{
        people:{
          job:"teatcher",
          title:{
            ms:'sss'
          }
        }
      }
    };
  },
  setup(props) {
    const student = reactive({
      msg: '凡是过往，皆为序章',
    });
    provide('student', student);
  },
  components: {
    Header,
    Main,
    Footer,
    VueThree,
  },
  computed: {
    msg1() {
      return this.msg.split('').reverse().join('');
    },
    poetryValue() {
      return this.poetry.split('，');
    },
  },
  watch: {
    msg(newValue, oldValue) {
      console.log("监听",newValue, oldValue);
    },
    msgObj:{
      handler(newValue, oldValue){
        console.log("监听2",JSON.stringify(newValue)===JSON.stringify(oldValue));
      },
      deep:true
    }
  },
  methods: {
    msgChange() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
    opp() {
      alert('按键测试成功');
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  display: block;
}
.unactive {
  display: none;
}
</style>

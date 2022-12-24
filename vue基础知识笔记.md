##### 脚手架创建一个项目

```
npm init vite hello-vue3
```



vue是声明式渲染



##### 指令

`v-once`,只渲染一次，不参与后续的数据改变

`v-html`，使目标标签支持html格式的代码

`v-bind`,使目标标签属性值支持动态变化

```html
<div :class = "value"></div>
```



动态指令

动态事件

```html
<button v-on:[event]="doThis"></button>
//缩写
<button @[event]="doThis"></button>

```

动态属性

```html
<button v-bind:[key]="value"></button>
//缩写
<button :[key]="value"></button>
```





##### 模板语法里面使用表达式

```html
<div v-bind:id='msg.split('').reserve().join('')'>{{msg === 1 ? '开心':'伤心'}}</div>
```







##### 计算属性

```vue
<h1>{{ msg1 }}</h1>

computed: {
    msg1() {
      return this.msg.split('').reverse().join('');
    },
 }
```



##### 观察者模式

```vue
<input type="text" v-model="msg" id="inp" />

 watch:{
    msg(newValue,oldValue){
      console.log(newValue,oldValue);
    }
  }
```





##### 类名的多种操作方式

```vue
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```



##### 内联样式

```vue
<div :style="styleObject"></div>

styleObject: {
      color: 'red',
      fontSize: '13px'
    }
```



##### 条件渲染

`v-if`可以在`<template>`上使用

`v-show`的元素始终会被渲染并保留在 DOM 中,它只是切换元素的display

一般来说，`v-if`有更高的切换开销，而`v-show`有更高的初始渲染开销，如果需要频繁地切换，则使用`v-show`较好，如果在运行时条件很少改变，则使用`v-if`较好

==不推荐同时使用v-if和v-for,当两个一起使用的时候，v-if具有比v-for更高地优先级==



##### 列表渲染

```vue
<p v-for="(item, index) in poetryValue" :key="index">{{item}}</p>

poetry:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少'

poetryValue(){
    return this.poetry.split('，')
 }

```



##### 事件处理

```vue
<a @click.stop="doThis"></a>

<input @keyup.alt.enter="clear" />
```

有时也需要在内联语句处理器中访问原始的DOM事件，可以用特殊变量`$event`把它传入方法

```vue
<button @click="one($event), two($event)">
```





##### 表单输入绑定

```vue
<input type="text" v-model="msg"/>

msg: '数据双向绑定'

```



值绑定

```vue
<input v-model.lazy="msg" />

<input v-model.number="age" type="text" />

<input v-model.trim="msg" />
```





##### 组件

```vue
<Header></Header>
<Main></Main>
<Footer></Footer>

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

components:{
    Header,Main,Footer
  },
```

组件可以被任意次数的复用



通过prop向子组件传递数据

```vue
//父组件
<Main :content="poetry"/>
 poetry:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少'

//子组件
<p>{{content}}</p>

export default {
        props:["content"]
}
```



子组件传值父组件

```vue
//子组件
<button @click="sendMsg">传递</button>
sendMsg(){
        this.$emit("sendMsg",this.loginMsg)
    }

//父组件
<Login @sendMsg="getMsg"/>
import Login from './Login.vue'
components:{Login}
getMsg(value){
     this.msg = value
    }
```



##### 生命周期

`beforeCreate`    `created`    `beforeMount`    `mounted`    `beforeUpdate`    `updated`    `beforeUnmount`    `unmounted`





##### 组合式API

将同一个逻辑关注点相关代码收集在一起，避免不断地”跳转“相关代码的选项块

##### ref

```js
<p @click="add">{{ num }}</p>

import { ref } from 'vue';

setup() {
    const num = ref(0);
    function add() {
      num.value++;
    }
    return { num, add };
  }

```



##### reactive

```js
const userInfo = reactive({
      username: 'xiaohui',
      age: 18,
      height: 175,
    });

//结合toRefs来结构userInfo对象
return{...toRefs(userInfo)}
```



##### vue3中的计算属性

```js
<p>{{resverTitle}}</p>

import { ref, reactive ,toRefs,computed} from 'vue';

 const userInfo = reactive({
      username: 'xiaohui',
      age: 18,
      height: 175,
      title:'书山有路勤为径，学海无涯苦作舟',
      resverTitle:computed(()=>{
        return  userInfo.title.split('').reverse().join('')
      })
    });
```



##### vue3中的监听

```js
import { watch } from 'vue';

const num = ref(0);

//单个监听
watch(num, (newValue, prevValue) => {
      console.log(prevValue - newValue);
});

//多个监听
watch([num,userInfo], (newValue, prevValue) => {
      console.log(prevValue - newValue);
});
```



##### provide和inject

```js
//父组件
const student = reactive({
      msg:"往事不可谏，来者尤可追"
 })
provide('student',student)

//子组件
const msg = inject('student');
    return { ...msg };
```

==以上代码均在`setup`方法里面声明定义==







##### 路由

安装

```js
npm install vue-router@next 
```

创建router文件夹，创建index.js文件

```js
import {createWebHashHistory,createRouter} from 'vue-router';
import Home from "../components/Home.vue"
import About from "../components/About.vue"

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
```

在main.js中

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

```

在App.vue中

```js
<router-link to="/">Go to Home</router-link>
<router-link to="/about">Go to About</router-link>

<router-view></router-view>

```



##### 动态路由和404

```js
//index.js
{
    path: '/new/:id',
    component: News
}

//News.vue文件
mounted(){
    this.$route()
}
```

```js
//index.js
{
    path:'/:path(.*)',
    component:NotFound
}
```





##### 路由正则和重复参数

```js
//传递的参数只能是数字
{
    path:"/article/:id(\\d+)"
}

//至少有一个参数
{
    path:"/article/:id+"
}

```



##### 嵌套路由

```js
{
        path: '/new/:id',
        component: News,
        children: [
            {
                path: "/gym",
                component:Gym
            }
        ]
    }
```



##### 路由导航

```js
this.$router.push("/")

this.$router.push({path:'/about'})

this.$router.push({path:`/new/${12345}`})

this.$router.push({name:"news",params:{id:123456}})

this.$router.push({path:'/',query:{search:"李知恩"}})//http://localhost:3000/#/?search=李知恩
```



```js
this.$router.replace({path:'/',query:{search:"李知恩"}})
```

`replace`和`push`的唯一区别是它在导航时不推送新的历史条目



```js
this.$router.go(1)
```

前进后退，类似于`window.history.go(n)`



##### 命名视图

```js
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>

 {
      path: '/',
      components: {
        default: Home,
        LeftSidebar,
        RightSidebar,
        },
    },
```



##### 重定向

```js
{
    path: '/search/:searchText',
    redirect: to => {
      return { path: '/search', query: { q: to.params.searchText } }
    }
  }
```



##### 别名

```js
 { path: '', component: UserList, alias: ['/people', 'list'] }
```



hash模式链接`url`里面有#,`history``url`里面没有#

配置

```js
const router = createRouter({
    // history: createWebHashHistory(),哈希
    // history: createMemoryHistory(),//不会有历史记录
    history:createWebHistory(),
    routes,
})
```





##### 导航守卫

全局导航守卫 -- 导航之前

```js
router.beforeEach((to, from, next) => {
    next()
})
```

全局导航守卫 -- 导航完成

```js
router.beforeResolve
```





单个导航守卫

```js
{
	path:"/page",
    component:Page,
    beforeEnter:(to,from)=>{
        
    }
}
```



组件内路由守卫

```js
beforeRouteEnter(to, from) {
   
  },
beforeRouteUpdate(to, from) {
 
  },
beforeRouteLeave(to, from) {
   
  },
```









##### 状态管理

父组件

```js
setup() {
    return {}
  },
components:{HelloWorld},
provide:{store}
```



子组件

```js
setup(props) {
  function  changeMsg(){
      store.setMessage('哈哈哈')
    }
    return {changeMsg}
  },
inject:["store"]
```



store/index.js

```js
import { reactive} from 'vue';
const store = {
  state: reactive({
    message: 'helloworld',
  }),
  setMessage(value) {
    this.state.message = value;
  },
};

export default store
```





##### axios

安装

```
npm install axios --save
```

使用

```
import axios from 'axios'
```

[拦截器 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/interceptors)





##### vite配置跨域请求

vite.config.js

```js
module.exports = {
		proxy:{
            './api':{
                target:"https://pvp.qq.com/"，
                changeOrigin:true,//是否允许跨域
                rewrite:path => pathg.replace(/^\/api/,'')
            }
        }
}

```





##### mockjs模拟请求数据

安装

```
npm install mockjs --save
```



使用

main.js

```
import './mock/index.js'
```

mock/index.js

```js
import Mock from 'mockjs'

Mock.setup({
	timeout:'200-600'
})

Mock.mock(
    "/user/userinfo",
    /\/account.*/,匹配动态参数
    'get',
    (req,res)=>{
        return{
            username:"xxx",
            age:18
        }
    }
)

//使用正常的请求方式即可
```





##### vue-cli

安装

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```



创建项目

```
vue create hello-world
```





##### vuex

安装

```
yarn add vuex@next --save

或

npm install vuex@next --save
```



创建文件

rouer/index.js

```js
import { createStore } from 'vuex'

const store =  createStore ({
    state: {
        count:0
    },
    getters: { },
    mutations: { },
    actions: { },
    modules:{}
})


export default store
```

main.js

```js
import store from './store/index'
import App from './App.vue'
const app = createApp(App)
app.use(store)
app.mount('#app')
```



##### state

```html
<p>{{$store.state.count}}</p>
```



##### getters

```js
getters: { 
        totalprice(state) {
            return state.count * 100
        }
 },
```



##### mutations

```js
mutations: { 
        setNumverValue(state,num) {
            state.count = 10
        }
 }

//目标页面使用
changeNumber(){
      this.$store.commit("setNumverValue",num)
   }
```



##### actions(异步操作)

```js
action:{
	getData:function(context){
        //ajax请求
        context.commit('setData',result)//调用mutaions里面的方法
    }
}

//目标页面使用
mounted:function(){
    this.$store.dispatch('getData')
}
```





```js
import {mapState,mapGetters,mapMutaions,mapActions} from 'vuex'

computed:{
    ...mapState(['count'])
    ...mapState({//重命名
        productCount:(state) => state.count
    }),
    ...mapGetters(['totalprice'])
}

methods:{
   ...mapMutations(['setNumverValue'])//目标页面直接使用名称
   ...mapActions(['getData'])
}
```



##### modules

1：创建一个包含`state`    `getter`等的`user`文件

2：调用

```js
modules:{
	user
}
```

3：直接调用`this.$store`来使用即可




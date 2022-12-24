<template>
    <div class="main">
       <p>主要内容组件</p> 
       <p>{{content}}</p>
       <p>子组件传递给父组件:{{msg}}</p>
       <Login @sendMsg="getMsg"/>
    </div>
</template>
<script>
    import Login from './Login.vue'
    export default {
        props:["content"],
        data(){
            return{
                msg:''
            }
        },
        methods: {
            getMsg(value){
                this.msg = value
            }
        },
        components:{Login}
    }
</script>
<style>
.main{
    background-color: aquamarine;
}
</style>
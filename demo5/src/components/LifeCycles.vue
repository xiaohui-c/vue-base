<template>
    <div>
        <h4>{{info}}</h4>
    </div>
</template>
<script>
    import{onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
    export default{
        props:{
            info:String
        },

        // 等于options API里面的beforeCreate和created
        setup(){
            onBeforeMount(()=>{
                console.log("onBeforeMount");
            }),
            onMounted(()=>{
                console.log("onmounted");
            }),
            onBeforeUpdate(()=>{
                console.log("onBeforeUpdate");
            }),
            onUpdated(() => {
                console.log("onUpdated");
            }),
            onBeforeUnmount(()=>{
                console.log("onBeforeUnmount");
            }),
            onUnmounted(()=>{
                console.log("onUnmounted");
            })
            
        },
        beforeCreate(){
            console.log("beforeCreate");
        },
        created(){
            console.log("created");
        },
        beforeMount(){
            console.log("beforeMount");
        },
        mounted(){
            console.log("mounted");
        },
        beforeUpdate(){
            console.log("beforeUpdate");
        },
        updated(){
            console.log("updated");
        },
        // 对应vue2的beforeDestroy
        beforeUnmount(){
            console.log("beforeUnmount");
        },
        // dstroyed
        unmounted(){
            console.log("unmounted");
        }
    }
</script>
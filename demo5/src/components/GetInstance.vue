<template>
    <div>
    get instance    
    </div>
</template>
<script>
    import {getCurrentInstance,onMounted} from 'vue'
    export default{
        name:"GetInstance",
        data(){
            return{
                x:1,
                y:2
            }
        },
        setup(){
            const instance = getCurrentInstance()
            onMounted(() => {
                console.log(instance.data.x);
            })
        }
    }
</script>
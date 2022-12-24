<template>
    <p>ref demo {{ageRef}} {{nameRef}}{{state.name}}
    </p>
</template>
<script>
    import {ref,reactive} from 'vue'
    export default {
        name:"Ref",
        setup(){
            const ageRef = ref(20)
            const nameRef = ref('小灰')
            
            const state = reactive({
                name:nameRef
            })
            return {ageRef,nameRef,state}
        }
    }
</script>
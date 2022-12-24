<template>
    {{state.name}}{{ageRef}}
</template>
<script>
    import {reactive,toRef} from 'vue'
    export default {
        setup(){
            const state = reactive({
                age:20,
                name:"小灰"
            })

            const ageRef = toRef(state,'age')

            setTimeout(() => {
                state.age = 25
            }, 1500);
            setTimeout(() => {
                ageRef.value = 30
            }, 3000);

            return{state,ageRef}
        }
    }
</script>
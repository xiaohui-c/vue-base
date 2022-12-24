<template>
    <div>
        state B
    </div>
</template>
<script>
    export default {
        data(){
            return{}
        },
        mounted() {
            console.log('B mounted');
        },
        unmounted() {
            console.log('B destroyed');
        },
    }
</script>
<template>
    <div>
        state C
    </div>
</template>
<script>
    export default {
        data(){
            return{}
        },
        mounted() {
            console.log('C mounted');
        },
        unmounted() {
            console.log('C destroyed');
        },
    }
</script>
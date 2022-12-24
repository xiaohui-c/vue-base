<template>
    <div>
        state A
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        mounted() {
            console.log('A mounted');
        },
        unmounted() {
            console.log('A destroyed');
        },
    }
</script>
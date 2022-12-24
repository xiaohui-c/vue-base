<template>
    <div>
        <slot :slotData="title">
            {{title}}
        </slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'书山有路勤为径，学海无涯苦作舟'
        }
    }
}
</script>
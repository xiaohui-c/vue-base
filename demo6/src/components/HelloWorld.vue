<script setup>
import { ref ,defineProps,defineEmits} from 'vue'

const props = defineProps({
  msg: String,
  name: String,
  age: Number
})

const emit = defineEmits(['change','delete'])

function deleteHandler(){
  emit('delete')
}
</script>

<template>
  <p>{{props.name}}  {{props.age}}</p>
  <button @click="$emit('change')">change</button>
  <button @click="deleteHandler">delete</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

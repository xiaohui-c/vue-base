<template>
  <div>
    <input type="text" :value = "modelValue" @input="changePageTitle($event.target.value)" />
    <ul ref="ul1">
        <ol v-for="(item, id) in list" :key="id">{{item.msg}}</ol>
    </ul>
    <button @click="add">增加数据</button>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return {
        list:[
            {id:0,msg:'愉悦'}
        ]
    };
  },
  methods: {
    changePageTitle(title) {
      this.$emit('update:modelValue', title);
    },
    add(){
        // this.$nextTick(()=>{
            this.list.push({id:Date.now(),msg:'无所畏惧，活泼可爱，肆意沁春'})
            const ulElem = this.$refs.ul1
            console.log('长度',ulElem.childNodes.length);
        // })
    }
  },
};
</script>

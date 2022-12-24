<script>
import { ref } from 'vue';

export default {
  setup() {
    const countRef = ref(200);

    return () => {
      return <p>demo1{countRef.value}</p>
    }
  } 
}
</script>

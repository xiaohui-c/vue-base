import { reactive} from 'vue';
const store = {
  state: reactive({
    message: 'helloworld',
  }),
  setMessage(value) {
    this.state.message = value;
  },
};

export default store
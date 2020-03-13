import Vue from 'vue';
import { Computed, Data, Props } from './ICoolerButton';

export default Vue.extend<Data, any, Computed, Props>({
  props: {
    text: String,
    classes: String,
    width: String,
    loading: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    style() {
      return this.width ? 'width: ' + this.width : undefined;
    }
  }
});

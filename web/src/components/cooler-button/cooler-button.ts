import Vue from 'vue';
import { Computed, Props } from './ICoolerButton';

export default Vue.extend<any, any, Computed, Props>({
  props: {
    text: String,
    classes: String,
    width: String
  },
  computed: {
    style() {
      return this.width ? 'width: ' + this.width : undefined;
    }
  }
});

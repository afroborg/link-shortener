import Vue from 'vue';
import { Computed, Data, Methods, Props } from './IInputField';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'input-field',
  props: {
    label: String,
    placeholder: String,
    icon: String,
    name: String,
    value: {
      required: true,
      type: String
    },
    classes: String,
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    isActive() {
      return this.active || this.value !== '';
    }
  },
  methods: {
    updateValue(e: Event): void {
      const value = (e.target as HTMLInputElement).value;
      if (!this.disabled) {
        this.$emit('input', value);
      }
    }
  }
});

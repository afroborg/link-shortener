import { eventHub } from '@/main';
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
  mounted() {
    eventHub.$on('hightlightText', (value: string) => {
      if (this.value === value) {
        setTimeout(() => (this.$refs.input as HTMLInputElement).select(), 0);
      }
    });
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
      if (!this.disabled) {
        const value = (e.target as HTMLInputElement).value;
        this.$emit('input', value);
      }
    }
  }
});

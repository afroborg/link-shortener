import { config } from '@/config';
import { eventHub } from '@/main';
import { IShrunkenLink } from '@/models/IShrunkenLink';
import axios, { AxiosResponse } from 'axios';
import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'url-shortener',
  components: {
    inputField: () => import('@/components/input-field/input-field.vue'),
    coolerButton: () => import('@/components/cooler-button/cooler-button.vue')
  },
  data() {
    return {
      originalUrl: '',
      shortLink: '',
      makingRequest: false,
      copied: false
    };
  },
  computed: {
    fullShortLink() {
      return this.shortLink ? config.apiUrl + this.shortLink : '';
    },
    placeholder() {
      return window.location.href + 'abc123';
    }
  },
  methods: {
    shrinkUrl(e: Event) {
      e.preventDefault();
      this.makingRequest = true;
      this.copied = false;
      axios
        .post(config.apiUrl + 'new', { link: this.originalUrl })
        .then((response: AxiosResponse<IShrunkenLink>) => {
          this.shortLink = response.data.shortLink;
          this.makingRequest = false;
        })
        .catch(err => {
          window.alert(err);
        });
    },
    copyLink() {
      eventHub.$emit('hightlightText', this.fullShortLink);
      if (this.shortLink !== '') {
        this.$copyText(this.fullShortLink).then(() => (this.copied = true));
      }
    }
  }
});

import { config } from '@/config';
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
      shortLink: ''
    };
  },
  computed: {
    fullShortLink() {
      return this.shortLink ? config.apiUrl + this.shortLink : '';
    }
  },
  methods: {
    shrinkUrl() {
      axios
        .post(config.apiUrl + '/new', { link: this.originalUrl })
        .then((response: AxiosResponse<IShrunkenLink>) => {
          this.shortLink = response.data.shortLink;
        })
        .catch(err => {
          window.alert(err);
        });
    }
  }
});

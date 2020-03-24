import { config } from '@/config';
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'url-info',
  components: {
    coolerButton: () => import('@/components/cooler-button/cooler-button.vue')
  },
  data() {
    return {
      urls: []
    };
  },
  methods: {
    del(id: string, i: number) {
      this.urls.splice(i, 1);
      axios.delete(config.apiUrl + id);
    }
  },
  created() {
    axios.get(config.apiUrl + 'admin/info').then(
      res =>
        (this.urls = res.data.map((link: any) => ({
          ...link,
          shortLink: config.apiUrl + link.shortLink
        })))
    );
  }
});

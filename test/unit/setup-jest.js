import Vue from 'vue';
import { config } from '@vue/test-utils';

// Set Vue config
Vue.config.productionTip = false;

// Set global config options for @vue/test-utils
config.mocks.$t = (msg) => msg;

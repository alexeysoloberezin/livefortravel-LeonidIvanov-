import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - materio-vuetify-nuxtjs-admin-template-free',
    title: 'materio-vuetify-nuxtjs-admin-template-free',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/plugins/vuetify/default-preset/preset/overrides.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/variables.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/head.js', mode: 'client' },
    { src: '~/plugins/vuetify.js', mode: 'client' },
    // { src: '~/plugins/VuetifyDaterangePicker.js', mode: 'client' },
    { src: '~/plugins/moment.js' },
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    'nuxt-i18n'
  ],
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true
  },

  router: {
    // middleware: ['auth']
  },

  firebase: {
    config: {
      apiKey: "AIzaSyBOlZQt12td-8GNobNBiqNXhKXgMemW0eo",
      authDomain: "vue-main-42e70.firebaseapp.com",
      projectId: "vue-main-42e70",
      storageBucket: "vue-main-42e70.appspot.com",
      messagingSenderId: "958768989453",
      appId: "1:958768989453:web:db547aacfc3708ad269c44",
      measurementId: "G-7Q881G0WD8"
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          subscribeManually: false
        }
      },
      firestore: true,
      functions: true,
      storage: true,
      realtimeDb: true,
      messaging: true,
      performance: true,
      analytics: true
    },
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vuejs-datepicker']
  },


  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          priceWarning: 'This amount calculator is a test, the price will be clarified before renting.',
          close: 'Close',
          video: 'Video',
          OurContacts: 'Our Contacts',
          aboutHouse: 'About the house',
          price: 'Price',
          pricePeriod: 'Find out the price for the period',
          contact: 'Contacts',
          houses: 'Houses',
          housesOnMap: 'Houses on a map',
          aboutUs: 'About Us',
          advantages: 'Advantages',
          month: 'Month',
          weeksX2: 'Two weeks',
          weeksX1: 'Week',
          daily: 'Daily',
          yearly: 'Yearly',
          monthsX2: 'Two Months',
          monthsX3: 'Three Months',
          hiddenPrice: 'Show hidden price (that price only for rent > 1 month)',
          tv: 'TV',
          garden: 'Garden',
          bathroom: 'Bathroom',
          bathrooms: '{count} Bathroom | {count} Bathrooms',
          search: 'Search',
          filters: 'Filters',
          searchLabel: 'Find what you\'re looking for',
          dates: 'Dates',
          rooms: '{count} Room | {count} Rooms',
          roomsWorld: 'Rooms',
          tabs: 'Tabs',
          pricePerMonth: 'Price per month',
          hot: 'Hot',
          willBeAvailable: 'Will be available:',
          perMonth: 'per Month',
          cleaning: 'Cleaning',
          fridge: 'Fridge',
          parking: 'Parking',
          available: 'Available now',
          ac: 'AC',
          ShowavalibleNow: 'Show only available now',
          released: 'Will be released',
          kitchen: 'Kitchen',
          distanceBeach: 'Distance to the beach',
        },
        ru: {
          priceWarning: 'Данный калькулятор суммы является тестовым, перед арендой цена будет уточнена.',
          video: 'Видео',
          close: 'Закрыть',
          OurContacts: 'Наши контакты',
          aboutHouse: 'Информация о доме',
          price: 'Цена',
          pricePeriod: 'Узнать цену за период',
          contact: 'Контакты',
          houses: 'Дома',
          housesOnMap: 'Дома на карте',
          aboutUs: 'О нас',
          advantages: 'Преимущества',
          month: 'Месяц',
          monthsX2: 'Два месяца',
          monthsX3: 'Три месяца',
          yearly: 'Год',
          weeksX2: 'Две недели',
          weeksX1: 'Неделя',
          daily: 'День',
          hiddenPrice: 'Показать скрытую цену (такая цена только при аренде > 1 месяца)',
          tv: 'Телевизор',
          garden: 'Сад',
          bathroom: 'Ванная',
          bathrooms: '{count} Ванная | {count} Ванные',
          search: 'Поиск',
          filters: 'Фильтры',
          searchLabel: 'Найдите то, что ищете',
          dates: 'Даты',
          ShowavalibleNow: 'Доступно сейчас',
          rooms: '{count} Комната | {count} Комнаты',
          roomsWorld: 'Комнаты',
          parking: 'Парковка',
          tabs: 'Табы',
          pricePerMonth: 'Цена в месяц',
          hot: 'Популярное',
          available: 'Доступно',
          willBeAvailable: 'Будет доступно:',
          perMonth: 'в месяц',
          cleaning: 'Уборка',
          fridge: 'Холодильник',
          ac: 'Кондиционеры',
          released: 'Освободится',
          kitchen: 'Кухня',
          distanceBeach: 'Дистанция до пляжа'
        },
      },
    },
  },
}

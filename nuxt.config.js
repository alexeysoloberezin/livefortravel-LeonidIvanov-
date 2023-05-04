import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Live For Travel - Дома на Бали',
    title: 'Live For Travel - Дома на Бали',
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
          lookHouses: 'View Houses',
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
          aboutUsTxt1: 'We are a team of professionals who specialize in renting houses in Bali. Our company provides long-term rental of houses and villas on the island, offering quality service to our clients.',
          aboutUsTxt2: 'We not only offer house rental in Bali, but also perform restoration and maintenance work on them to ensure maximum comfort for our guests. Our team works hard to ensure that each of our clients receives first-class service and enjoys an unforgettable vacation in Bali.',
          WhatWDYou: 'What We Do For You',
          WhatWDYou1Title: 'Comfort and Accessibility',
          WhatWDYou1Text: 'We also strive to make our services accessible and provide comfortable living in restored houses in Bali. We work to ensure that our clients receive the best service and can enjoy their homes.',
          WhatWDYou2Title: 'Legality',
          WhatWDYou2Text: 'We are a legally registered company that complies with all legal requirements and regulations. This means that you can work with us with confidence that your money and personal data are safe.',
          WhatWDYou3Title: 'Cleanliness',
          WhatWDYou3Text: 'We offer professional cleaning using environmentally friendly products and methods to ensure that your home is perfectly clean and comfortable to live in.',
          WhatWDYou4Title: 'Quick Response',
          WhatWDYou4Text: 'We understand the importance of timely communication, so we always respond quickly to your messages and requests. You can count on us when you need it.',
          WhatWDYou5Title: 'Ensure Your Satisfaction',
          WhatWDYou5Text: 'Our main goal is your satisfaction. We work closely with you to understand your needs and preferences and strive to achieve results that exceed your expectations.',
          howWork: 'How it works',
          howWorkTxt1: 'Our team of experts will help you find the perfect accommodation, taking into account all your wishes and requirements, including price range, location, type of accommodation, and other factors.',
          howWorkTxt2: 'We also provide advice on all matters related to renting accommodation, including the rights and obligations of landlords and tenants. In addition, we provide support at all stages of the rental process, including moving in and settling. ',
          howWorkBx1Title: "Finding a home",
          howWorkBx1Text: "You start searching for a suitable rental property. You can go to our homes page and choose the one you like.",
          howWorkBx2Title: "Choosing the right home",
          howWorkBx2Text: "After viewing the listings, you select suitable options and schedule a viewing.",
          howWorkBx3Title: "Clarifying rental conditions",
          howWorkBx3Text: "You ask all the questions you have about rental conditions: cost, additional fees, rental period, rules of residence, and the possibility of making changes to the contract.",
          howWorkBx4Title: "House viewing",
          howWorkBx4Text: "It's time for house viewing. You come at the appointed time to view the selected homes. You inspect the house, check the condition of the rooms, furniture, plumbing, electricity, and other elements.",
          howWorkBx5Title: "Signing the contract",
          howWorkBx5Text: "If you decide to rent the house right away, you sign a contract with our company. The contract usually includes the rights and obligations of the parties, the cost of rent, payment dates, etc.",
          howWorkBx6Title: "Payment",
          howWorkBx6Text: "If you booked the house after the rental date specified on the website, then in accordance with the rental agreement terms of the chosen house, you may be required to make a deposit.",
          howWorkBx7Title: "Move-in",
          howWorkBx7Text: "After signing the contract and making a deposit, you can move into the rented house and start living there comfortably and cozy.",
          howWorkBx8Title: "Contact us.",
          howWorkBx8Text: "Our team is always ready to help you find the perfect home and provide a safe and comfortable rental process. Contact us to learn more about how we can help you in finding and renting a property.",

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
          lookHouses: 'Посмотреть дома',
          OurContacts: 'Наши контакты',
          aboutHouse: 'Информация о доме',
          price: 'Цена',
          pricePeriod: 'Узнать цену за период',
          contact: 'Контакты',
          houses: 'Дома',
          housesOnMap: 'Дома на карте',
          aboutUs: 'О нас',
          aboutUsTxt1: 'Мы - команда профессионалов, которая занимается арендой домов на Бали. Наша компания осуществляет\n' +
            '                долгосрочную аренду домов и вилл на острове, предоставляя качественный сервис для наших клиентов.',
          aboutUsTxt2: 'Мы не только предлагаем аренду домов на Бали, но и проводим работы по их реставрации и обслуживанию,\n' +
            '                чтобы обеспечить максимальный комфорт для наших гостей. Наша команда усердно трудится, чтобы каждый наш\n' +
            '                клиент получил первоклассное обслуживание и насладился незабываемым отдыхом на Бали.',
          advantages: 'Преимущества',
          WhatWDYou: 'What We Do For You',
          WhatWDYou1Title: 'Комфорт и доступность',
          WhatWDYou1Text: 'Мы также стараемся сделать наши   услуги доступными и обеспечить комфортное\n' +
            '              проживание в отреставрированных домах на Бали. Мы работаем над тем, чтобы наши клиенты получили наилучший\n' +
            '              сервис и могли насладиться пребыванием в своих домах.',
          WhatWDYou2Title: 'Легальность',
          WhatWDYou2Text: 'Мы - легально зарегистрированная компания, которая соответствует всем\n' +
            '              законодательным требованиям и правилам. Это означает, что вы можете работать с нами с уверенностью в том,\n' +
            '              что ваши деньги и личные данные находятся в безопасности.',
          WhatWDYou3Title: 'Чистота',
          WhatWDYou3Text: 'Мы предлагаем профессиональную уборку, используя экологически чистые\n' +
            '              средства и методы, чтобы ваш дом был идеально чистым и комфортным для проживания.',
          WhatWDYou4Title: 'Quick response',
          WhatWDYou4Text: 'Мы понимаем важность своевременной коммуникации, поэтому всегда быстро\n' +
            '              отвечаем на ваши сообщения и запросы. Вы можете рассчитывать на нас, когда вам нужно.',
          WhatWDYou5Title: 'Ensure Your Satisfaction',
          WhatWDYou5Text: 'Наша главная цель - ваше удовлетворение. Мы тесно сотрудничаем с вами, чтобы\n' +
            '              понимать ваши потребности и предпочтения, и стремимся достичь результатов, превышающих ваши ожидания.\n',

          howWork: 'Как мы работаем',
          howWorkTxt1: 'Наша команда экспертов поможет вам найти идеальное жилье, учитывая все ваши пожелания и требования,\n' +
            '                включая ценовой диапазон, местоположение, тип жилья и другие факторы.',
          howWorkTxt2: 'Мы также предоставляем консультации по всем вопросам, связанным с арендой жилья, включая права и обязанности арендодателей и арендаторов. Кроме того, мы оказываем поддержку на всех этапах процесса аренды, включая переезд и заселение. ',
          howWorkBx1Title: 'Поиск дома',
          howWorkBx1Text: 'Вы начинаете поиск подходящего варианта аренды жилья. Вы можете перейти на страницу с нашими домами и выбрать тот, который будет вам по душе.',
          howWorkBx2Title: 'Выбор подходящего дома',
          howWorkBx2Text: 'После просмотра объявлений вы выбираете подходящие варианты и записываетесь на осмотр.',
          howWorkBx3Title: 'Уточнение условий аренды',
          howWorkBx3Text: 'Вы задаете все интересующие вас вопросы по условиям аренды: стоимости,\n' +
            '                дополнительных платежах, сроку аренды, правилам проживания, а также возможности внесения изменений в договор.',
          howWorkBx4Title: 'Осмотр дома',
          howWorkBx4Text: 'Приходит время осмотра домов. Вы приходите в назначенное время на просмотр\n' +
            '                выбранных домов. Вы осматриваете дом, проверяете состояние комнат, мебели, сантехники, электрики и\n' +
            '                других элементов.',
          howWorkBx5Title: 'Заключение договора',
          howWorkBx5Text: 'Если вы решаете арендовать дом сразу, вы заключаете договор с нашей компанией.\n' +
            '                Договор обычно включает в себя права и обязанности сторон,\n' +
            '                стоимость аренды, даты платежей и др.',
          howWorkBx6Title: 'Оплата',
          howWorkBx6Text: 'Если вы забронировали дом позднее даты аренды, указанной на сайте, то в соответствии с условиями договора аренды выбранного вами дома, вам может потребоваться внести залог.\n',
          howWorkBx7Title: 'Заселение',
          howWorkBx7Text: 'После заключения договора и внесения залога, вы можете заселиться в арендованный дом и начать жить там с комфортом и уютом.',
          howWorkBx8Title: 'Свяжитесь с нами.',
          howWorkBx8Text: 'Наша команда всегда готова помочь вам найти идеальное жилье и обеспечить безопасный и комфортный\n' +
            '                процесс аренды. Свяжитесь с нами, чтобы узнать больше о том, как мы можем помочь вам в поиске и аренде жилья.',

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

import Vue from 'vue'

Vue.mixin({
  head: {
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        href: 'https://cdn.jsdelivr.net/npm/konva@latest/konva.min.js',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&family=Dosis:wght@300;400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
})

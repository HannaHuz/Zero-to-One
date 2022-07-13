export default {
  ssr: false,
  head: {
    title: '021 Zero to One',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        name: 'facebook-domain-verification',
        content: 'dqv56cpxnd7g6ztfunned6ld9zvhgx'
      },
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/normalize.scss',
    '@/assets/scss/layout.scss',
    '@/assets/scss/fonts.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/animate.js',
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    mode: 'history'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    ['fullpage-nuxt', {
      animate: true,
      mouseWheelSensitivity: 120,
      showIndicators: true
    }],
    'vue-social-sharing/nuxt'
  ],

  styleResources: {
  },

  generate: {
    dir: '../dist_server'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    target: 'static'
    // target: 'server'
  }
}

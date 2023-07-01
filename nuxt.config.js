const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTIxZTQwYTMyNjdhMjQ3NDVkNWM4MGJmZjVmNzliOCIsInN1YiI6IjY0NDIzYjg3YjNmNmY1MDQ5YzlkZGEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ej714Gyl54V-uJqkykAe5PZzWIrKSLbx61SeW3zKA5A"
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'netflex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/globalCss.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuelidate.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/vuetify',
  ],

  vuetify:{

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      // common: {
      //   Authorization: `Bearer ${token}`
      // }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    }
  },
  server: {
    port: 8000
  },
  ssr: false,
  env:{
    fbApiKey:'AIzaSyCQfCSE6RRhykUOTcq-vveIVIfoxaqvFHQ',
    moviedbApiKey:'aa21e40a3267a24745d5c80bff5f79b8',
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eTabulation',
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
  ],

  ssr: true,
  target: 'server',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/services/plugins/font_awesome',
    '~/services/plugins/lodash',
    {src: '~/services/plugins/v-calendar.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
    ['nuxt-tailvue', {toast: true}],
  ],

  auth: {
    localStorage: false,
    strategies: {
      local:{
        // cookie: false,

        token: {
          // prefix: '_token.',
          property: "accessToken",
          global: true,
          required: true,
          type: "Bearer"
        },
        // refreshToken: {
        //   property: 'refreshToken',
        //   // data: 'refreshToken',
        //   maxAge: 60 * 60 * 24 * 30
        // },
        user: {
          property: "user",
          autoFetch:  false,
        },
        endpoints: {
          login: { url: "/api/auth/login", method: "post"},
          refresh: { url: '/api/auth/refreshToken', method: 'post' },
          // logout: { url: "/api/auth/logout", method: "post"}, 
          //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/api/auth/user", method: "get"}
          // user: false,
        },
        // tokenRequired: true,
        // tokenType: 'Bearer',
      },
      // cookie: {
      //     token: {
      //       property: "data.accessToken",
      //       required: true,
      //       type: "Bearer",
      //     },
      //     user: {
      //       property: "data",
      //     },
      //     cookie: {
      //       // (optional) If set, we check this cookie existence for loggedIn check
      //       name: 'XSRF-TOKEN',
      //     },
      //     endpoints: {
      //       login: {
      //         url: "/api/auth/login",
      //         method: "post",
      //         property: "accessToken"
      //       },
      //       // logout: { url: "/v1/auth/logout", method: "delete" },
      //       user: { url: "/api/auth/user", method: "get" },
      //     },
      //     // prefix: 'auth.',
      //     // options: {
      //     //   secure: false,
      //       // path: '/'
      //     // }
      //   },
    },
    // redirect: {
    //     login: '/auth/login',
    //     logout: '/',
    //     home: '/',
    //     callback: '/auth/login',
    //   },
    // watchLoggedIn: true,
  },

  router: {
    middleware: 'isAuthenticated'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://localhost:8080",
    credentials: true,
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta:{
      title: 'Tabulation System',
      author: 'Pheakdey Khen',
    },
    manifest: {
      name: 'Tabulation System',
      description: 'This is tabulation system.',
      lang: 'en',
      useWebmanifestExtension: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

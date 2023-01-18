export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "eTabulation",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  ssr: false,
  target: "server",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/services/plugins/vuelidate",
    "~/services/plugins/font_awesome",
    "~/services/plugins/lodash",
    { src: "~/services/plugins/v-calendar.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/pwa",
    "cookie-universal-nuxt",
    ["nuxt-tailvue", { toast: true }],
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          // required: false,
          type: "Bearer",
        },
        // user: {
        //   property: "user",
        //   autoFetch: false,
        // },
        // refreshToken: {
        //   property: 'refreshToken',
        //   // data: 'refreshToken',
        //   maxAge: 60 * 60 * 24 * 30
        // },
        endpoints: {
          login: {
            url: "/api/auth/login",
            method: "post",
          },
          user: { url: "/api/auth/user", method: "get" },
        },
      },
    },
    redirect: {
      login: "/auth/login",
      home: "/",
      logout: "/auth/login",
      callback: false,
    },

    // watchLoggedIn: true,
  },

  router: {
    middleware: ["auth"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
    common: {
      Accept: "application/json, text/plain, */*",
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: "Tabulation System",
      author: "Pheakdey Khen",
    },
    manifest: {
      name: "Tabulation System",
      description: "This is tabulation system.",
      lang: "en",
      useWebmanifestExtension: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

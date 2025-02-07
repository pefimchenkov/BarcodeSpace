// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/google-fonts',
    "nuxt-lazy-hydrate",
    '@nuxt/image',
    'nuxt-mongoose',
    '@sidebase/nuxt-auth'
  ],

  imports: {
    dirs: ['stores'],
  },

  mongoose: {
    uri: process.env.MONGODB_URI + '/' + process.env.MONGODB_NAME,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },

  auth: {
    baseURL: process.env.NUXT_AUTH_ORIGIN,
    originEnvKey: process.env.NUXT_AUTH_ORIGIN,
    provider: {
      type: 'authjs',
    },
    isEnabled: true,
    disableServerSideAuth: false,
    sessionRefresh: {
      enablePeriodically: true,
    }
  },

  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET
  },



  css: ['~/styles/main.scss'],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  googleFonts: {
    families: {
        'Nunito Sans': [400, 500, 600, 700],
    },
  },


})
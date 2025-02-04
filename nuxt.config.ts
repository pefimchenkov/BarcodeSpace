// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/google-fonts',
    "nuxt-lazy-hydrate",
    '@nuxt/image',
  ],

  imports: {
    dirs: ['stores'],
  },

  googleFonts: {
    families: {
        'Nunito Sans': [400, 500, 600, 700],
    },
  },

  css: ['~/styles/main.scss'],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
})
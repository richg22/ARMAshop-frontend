export default defineNuxtConfig({
  modules: [['@pinia/nuxt',
    {
      autoImports: [
        'defineStore',
        'acceptHMRUpdate',
      ]
    },
  ],'pinia-plugin-persistedstate',],
  plugins: [
    '~/plugins/sync-cart.client.ts',
  ],
  imports: {
    dirs: ['stores'],
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBase:'http://127.0.0.1:8000',
    },
  },
})



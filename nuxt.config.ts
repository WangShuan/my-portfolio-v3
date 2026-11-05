// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  app: {
    baseURL: '/my-portfolio-v3',
    buildAssetsDir: '/assets/',
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirect: false
  }
})
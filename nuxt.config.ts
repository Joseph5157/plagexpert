// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/plagexpert.css'],
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      portalUrl: process.env.NUXT_PUBLIC_PORTAL_URL || 'https://portal.plagexpert.in'
    }
  }
})

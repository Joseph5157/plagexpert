// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/plagexpert.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'PlagExpert — Turnitin & Drillbit Plagiarism & AI Reports for Students',
      meta: [
        {
          name: 'description',
          content: 'Get accurate Turnitin and Drillbit plagiarism & AI detection reports for your thesis, dissertation, or assignment. Non-repository scans. Delivery in 10–30 minutes. Trusted by 50,000+ students in India.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      portalUrl: process.env.NUXT_PUBLIC_PORTAL_URL || 'https://portal.plagexpert.in'
    }
  }
})

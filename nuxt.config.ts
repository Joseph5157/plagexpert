// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  css: ['~/assets/css/plagexpert.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  site: {
    url: 'https://plagexpert.in',
    name: 'PlagExpert'
  },
  sitemap: {
    strictNuxtContentPaths: false,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/services', changefreq: 'monthly', priority: 0.8 },
      { loc: '/pricing', changefreq: 'weekly', priority: 0.9 },
      { loc: '/faq', changefreq: 'monthly', priority: 0.7 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.7 }
    ]
  },
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

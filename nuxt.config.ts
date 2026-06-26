// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en' }
    }
  },
  css: ['~/assets/css/plagexpert.css'],
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  runtimeConfig: {
    public: {
      portalUrl: process.env.NUXT_PUBLIC_PORTAL_URL || 'https://portal.plagexpert.in'
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/services',
        '/pricing',
        '/faq',
        '/contact',
        '/legal',
        '/what-is-non-repository-plagiarism',
        '/blog',
        '/blog/how-to-check-plagiarism-for-thesis-india',
        '/blog/what-is-non-repository-plagiarism-check',
        '/blog/drillbit-vs-similarity-check',
        '/blog/ugc-plagiarism-norms-india-2018',
        '/blog/how-to-reduce-ai-detection-score',
        '/blog/plagiarism-check-iit-vtu-anna-university',
        '/blog/how-long-does-plagiarism-report-take',
        '/blog/similarity-report-vs-ai-detection-difference'
      ]
    }
  }
})

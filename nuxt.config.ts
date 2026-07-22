// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  nitro: {
    noExternals: true,
    prerender: {
      routes: [
        '/',
        '/services',
        '/pricing',
        '/faq',
        '/contact',
        '/privacy-policy',
        '/terms-of-service',
        '/what-is-non-repository-plagiarism',
        '/blog',
        '/blog/how-to-check-plagiarism-for-thesis-india',
        '/blog/what-is-non-repository-plagiarism-check',
        '/blog/drillbit-vs-similarity-check',
        '/blog/ugc-plagiarism-norms-india-2018',
        '/blog/how-to-reduce-ai-detection-score',
        '/blog/plagiarism-check-iit-vtu-anna-university',
        '/blog/how-long-does-plagiarism-report-take',
        '/blog/similarity-report-vs-ai-detection-difference',
      ]
    }
  },
  css: ['~/assets/css/plagexpert.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'PlagExpert — Plagiarism & AI Detection Reports for Students',
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/fraunces-latin.woff2',
          crossorigin: ''
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Get accurate plagiarism and AI detection reports for your thesis, dissertation, or assignment. Non-repository scans. Delivery in 10–30 minutes. Trusted by 50,000+ students in India.'
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

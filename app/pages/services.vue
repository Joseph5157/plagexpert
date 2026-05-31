<template>
  <main class="overflow-hidden">
    <ServicesHero />
    <ServicesGrid />
    <ServiceGuide />
    <ServicesCta />
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Services — Plagiarism Check, Drillbit, AI Removal | PlagExpert',
  description: 'Choose from plagiarism & AI reports, Drillbit reports, plagiarism removal, AI removal, and thesis writing. Fast, private, non-repository checks.',
  ogTitle: 'PlagExpert Services — Plagiarism & AI Report Services',
  ogDescription: 'Plagiarism Check, Drillbit, AI Removal and Thesis Writing. Trusted by 50,000+ students in India.',
  ogImage: '/illustrations/hero-student-portal.png',
  twitterCard: 'summary_large_image'
})

import ServicesHero from '~/components/services/ServicesHero.vue'
import ServicesGrid from '~/components/services/ServicesGrid.vue'
import ServiceGuide from '~/components/services/ServiceGuide.vue'
import ServicesCta from '~/components/services/ServicesCta.vue'
</script>

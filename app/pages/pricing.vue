<template>
  <main class="overflow-hidden">
    <PricingHero />
    <PricingGrid />
    <PricingComparison />
    <PricingFaq />
    <PricingCta />
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Pricing — Turnitin & Drillbit Plans | PlagExpert',
  description: 'Affordable Turnitin plagiarism & AI report plans starting at ₹99. Single File, Basic Plan, Standard Plan, and Monthly Plan. Pay only for what you need.',
  ogTitle: 'PlagExpert Pricing — Plans from ₹99',
  ogDescription: 'Single File ₹99, Basic Plan ₹450, Standard Plan ₹1,275, Monthly Plan ₹2,400. Turnitin & Drillbit reports for students.',
  ogImage: '/illustrations/hero-student-portal.png',
  twitterCard: 'summary_large_image'
})

import PricingHero from '~/components/pricing/PricingHero.vue'
import PricingGrid from '~/components/pricing/PricingGrid.vue'
import PricingComparison from '~/components/pricing/PricingComparison.vue'
import PricingFaq from '~/components/pricing/PricingFaq.vue'
import PricingCta from '~/components/pricing/PricingCta.vue'
</script>

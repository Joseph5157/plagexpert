<template>
  <main class="overflow-hidden">
    <HeroSection />
    <TrustStrip />
    <TrustSection />
    <HowItWorksSection />
    <ServicesPreview />
    <StatsSection />
    <PricingPreview />
    <FaqPreview />
    <ContactSection />
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'PlagExpert — Turnitin & Drillbit Plagiarism & AI Reports for Students',
  description: 'Get accurate Turnitin and Drillbit plagiarism & AI detection reports for your thesis, dissertation, or assignment. Non-repository scans. Delivery in 10–30 minutes. Trusted by 50,000+ students in India.',
  ogTitle: 'PlagExpert — Plagiarism & AI Reports for Academic Success',
  ogDescription: 'Turnitin & Drillbit plagiarism and AI detection reports. Fast, private, non-repository. Trusted by 50,000+ students.',
  ogImage: '/illustrations/hero-student-portal.png',
  twitterCard: 'summary_large_image'
})

import HeroSection from '~/components/home/HeroSection.vue'
import TrustStrip from '~/components/home/TrustStrip.vue'
import TrustSection from '~/components/home/TrustSection.vue'
import HowItWorksSection from '~/components/home/HowItWorksSection.vue'
import ServicesPreview from '~/components/home/ServicesPreview.vue'
import StatsSection from '~/components/home/StatsSection.vue'
import PricingPreview from '~/components/home/PricingPreview.vue'
import FaqPreview from '~/components/home/FaqPreview.vue'
import ContactSection from '~/components/home/ContactSection.vue'
</script>

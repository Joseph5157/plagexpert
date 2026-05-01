<template>
  <main class="flex flex-col overflow-hidden">
    <!-- Mobile order: Hero→Stats→TrustStrip→TrustSection→HowItWorks→Services→Pricing→FAQ→Contact -->
    <!-- Desktop order: Hero→TrustStrip→TrustSection→HowItWorks→Services→Stats→Pricing→FAQ→Contact -->
    <div class="order-1  sm:order-1"><HeroSection /></div>
    <div class="order-3  sm:order-2"><TrustStrip /></div>
    <div class="order-4  sm:order-3"><TrustSection /></div>
    <div class="order-5  sm:order-4"><HowItWorksSection /></div>
    <div class="order-6  sm:order-5"><ServicesPreview /></div>
    <div class="order-2  sm:order-6"><StatsSection /></div>
    <div class="order-7  sm:order-7"><PricingPreview /></div>
    <div class="order-8  sm:order-8"><FaqPreview /></div>
    <div class="order-9  sm:order-9"><ContactSection /></div>
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

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I start using PlagExpert?',
            acceptedAnswer: { '@type': 'Answer', text: 'Check the plan details and message us on WhatsApp. Select the service you need, complete the payment, and send your full name. After payment confirmation, we will send you an invite link to create your Portal ID through Telegram.' }
          },
          {
            '@type': 'Question',
            name: 'How fast is report delivery?',
            acceptedAnswer: { '@type': 'Answer', text: 'Most reports are completed within 10–30 minutes, depending on file size, selected service, and current queue.' }
          },
          {
            '@type': 'Question',
            name: 'Do you store my document?',
            acceptedAnswer: { '@type': 'Answer', text: 'Your document is handled securely and used only for generating your report. After report delivery, files are removed according to our internal safety process.' }
          },
          {
            '@type': 'Question',
            name: 'Is AI detection included?',
            acceptedAnswer: { '@type': 'Answer', text: 'AI detection is included in Turnitin plans. Please check the plan details or message us on WhatsApp before payment.' }
          },
          {
            '@type': 'Question',
            name: 'Will my professor or university see my file?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Your file is processed privately through the selected checking service and is not submitted to your professor or university before your final submission.' }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PlagExpert',
        url: 'https://plagexpert.in',
        logo: 'https://plagexpert.in/brand/plagexpert-logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-6309872817',
          contactType: 'customer support',
          availableLanguage: ['English', 'Hindi']
        }
      })
    }
  ]
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

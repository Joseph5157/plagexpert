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
  </main>
</template>

<script setup>
import HeroSection from '~/components/home/HeroSection.vue'
import TrustStrip from '~/components/home/TrustStrip.vue'
import TrustSection from '~/components/home/TrustSection.vue'
import HowItWorksSection from '~/components/home/HowItWorksSection.vue'
import ServicesPreview from '~/components/home/ServicesPreview.vue'
import StatsSection from '~/components/home/StatsSection.vue'
import PricingPreview from '~/components/home/PricingPreview.vue'
import FaqPreview from '~/components/home/FaqPreview.vue'
</script>

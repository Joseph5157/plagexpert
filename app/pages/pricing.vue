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
import PricingHero from '~/components/pricing/PricingHero.vue'
import PricingGrid from '~/components/pricing/PricingGrid.vue'
import PricingComparison from '~/components/pricing/PricingComparison.vue'
import PricingFaq from '~/components/pricing/PricingFaq.vue'
import PricingCta from '~/components/pricing/PricingCta.vue'
</script>

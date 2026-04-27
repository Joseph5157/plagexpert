<template>
  <main class="overflow-hidden">
    <ServicesHero />
    <ServicesGrid />
    <ServiceGuide />
    <ServicesCta />
  </main>
</template>

<script setup>
import ServicesHero from '~/components/services/ServicesHero.vue'
import ServicesGrid from '~/components/services/ServicesGrid.vue'
import ServiceGuide from '~/components/services/ServiceGuide.vue'
import ServicesCta from '~/components/services/ServicesCta.vue'
</script>

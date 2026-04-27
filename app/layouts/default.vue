<template>
  <div class="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '~/components/layout/SiteHeader.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
</script>

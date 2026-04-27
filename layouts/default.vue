<template>
  <div class="min-h-screen bg-[var(--plagexpert-bg)] text-[var(--plagexpert-text-main)] antialiased">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '~/components/layout/SiteHeader.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
</script>

<script setup>
const tags = [
  'Turnitin',
  'Drillbit',
  'AI Detection',
  'Paraphrasing',
  'References',
  'Journal Ready'
]
</script>

<template>
  <section class="border-y border-[#E2E8F0] bg-white px-4 py-3 sm:py-4">
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-start gap-2.5 sm:justify-center sm:gap-3">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border border-[#E2E8F0] bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold text-[#1D4ED8] shadow-sm sm:px-4 sm:py-2 sm:text-sm"
      >
        {{ tag }}
      </span>
    </div>
  </section>
</template>

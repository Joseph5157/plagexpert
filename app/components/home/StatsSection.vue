<script setup>
const stats = [
  { value: '10,000+', label: 'Happy clients' },
  { value: '30m', label: 'Avg. delivery' },
  { value: '24/7', label: 'Support' },
  { value: '0%', label: 'Repository risk' },
  { value: '100%', label: 'Confidential' }
]
</script>

<template>
  <section class="bg-[linear-gradient(135deg,#0B1F3A_0%,#2563EB_100%)] px-4 py-8 sm:py-10 lg:py-12 text-white">
    <div class="mx-auto max-w-7xl">
      <div class="md:hidden">
        <div class="flex items-center justify-center gap-2 overflow-x-auto rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-3 shadow-[0_16px_40px_rgba(11,31,58,0.18)] backdrop-blur">
          <span class="whitespace-nowrap text-sm font-semibold text-white">10,000+ clients</span>
          <span class="text-white/50">|</span>
          <span class="whitespace-nowrap text-sm font-semibold text-[#EFF6FF]">30m delivery</span>
          <span class="text-white/50">|</span>
          <span class="whitespace-nowrap text-sm font-semibold text-[#EFF6FF]">24/7 support</span>
        </div>
      </div>

      <div class="hidden grid-cols-2 gap-3 md:grid md:grid-cols-5 md:gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-[1.75rem] border border-white/15 bg-white/10 p-4 text-center shadow-[0_16px_40px_rgba(11,31,58,0.18)] backdrop-blur sm:p-5 md:p-6"
        >
          <div class="text-2xl font-bold tracking-tight leading-none sm:text-3xl md:text-4xl">
            {{ stat.value }}
          </div>

          <p class="mt-2 text-xs leading-5 text-[#EFF6FF] sm:text-sm">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

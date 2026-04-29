<script setup>
const stats = [
  { value: '50,000+', label: 'Files Checked' },
  { value: '100%', label: 'Confidential' },
  { value: '20-30m', label: 'Avg. Delivery' },
  { value: '24/7', label: 'Support' },
  { value: '0%', label: 'Repository Risk' }
]
</script>

<template>
  <section class="bg-[linear-gradient(135deg,#0B1F3A_0%,#2563EB_100%)] px-4 py-8 sm:py-10 lg:py-12 text-white">
    <div class="mx-auto max-w-7xl">
      <div class="sm:hidden">
        <div class="flex items-center justify-center gap-2 overflow-x-auto rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-3 shadow-[0_16px_40px_rgba(11,31,58,0.18)] backdrop-blur">
          <span class="whitespace-nowrap text-sm font-semibold text-white">50,000+ Files Checked</span>
          <span class="text-white/50">|</span>
          <span class="whitespace-nowrap text-sm font-semibold text-[#EFF6FF]">100% Confidential</span>
          <span class="text-white/50">|</span>
          <span class="whitespace-nowrap text-sm font-semibold text-[#EFF6FF]">20-30m Delivery</span>
          <span class="text-white/50">|</span>
          <span class="whitespace-nowrap text-sm font-semibold text-[#EFF6FF]">24/7 Support</span>
        </div>
      </div>

      <div class="hidden grid-cols-2 gap-3 md:grid md:grid-cols-5 sm:gap-4">
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

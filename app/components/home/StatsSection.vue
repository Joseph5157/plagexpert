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
  <section class="bg-[linear-gradient(135deg,#0B1F3A_0%,#2563EB_100%)] px-4 py-8 text-white sm:py-10 lg:py-12">
    <div class="mx-auto max-w-7xl">
      <!-- Single responsive grid: 2-col on mobile, 5-col on desktop -->
      <div class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-[1.5rem] border border-white/15 bg-white/10 p-4 text-center shadow-[0_16px_40px_rgba(11,31,58,0.18)] backdrop-blur sm:p-5 md:rounded-[1.75rem] md:p-6"
          :class="stat.label === 'Repository Risk' ? 'col-span-2 md:col-span-1' : ''"
        >
          <div class="text-2xl font-bold leading-none tracking-tight sm:text-3xl md:text-4xl">
            {{ stat.value }}
          </div>

          <p class="mt-1.5 text-xs leading-5 text-[#EFF6FF] sm:mt-2 sm:text-sm">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

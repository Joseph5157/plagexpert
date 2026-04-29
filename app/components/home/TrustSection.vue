<script setup>
const trustCards = [
  {
    icon: '🛡️',
    title: 'Non-repository scan',
    description:
      'Your document is checked without being added to a public database.'
  },
  {
    icon: '⚡',
    title: '10-30 minute delivery',
    description:
      'Processed after portal upload, often within 15 minutes.'
  },
  {
    icon: '🗑️',
    title: 'Files never stored',
    description:
      'Reports are delivered to you, then files are permanently deleted.'
  }
]

const trustBadges = [
  'Non-repository scan',
  '10-30 min delivery',
  'Files deleted'
]
</script>

<template>
  <section class="bg-[#F8FAFC] px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Trust
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Fast, private reports without repository risk.
        </h2>

        <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
          Get your similarity report quickly with a confidential process designed
          for academic submission workflows.
        </p>
      </div>

      <div class="mt-8 flex flex-wrap gap-2 sm:hidden">
        <span
          v-for="badge in trustBadges"
          :key="badge"
          class="rounded-full border border-[#E2E8F0] bg-[#EFF6FF] px-3 py-2 text-xs font-semibold text-[#1D4ED8] shadow-sm"
        >
          {{ badge }}
        </span>
      </div>

      <div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <div
          v-for="card in trustCards"
          :key="card.title"
          class="hidden rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:block sm:p-7"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFDF5] text-2xl shadow-inner sm:h-12 sm:w-12">
            {{ card.icon }}
          </div>

          <h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
            {{ card.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[#334155]">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

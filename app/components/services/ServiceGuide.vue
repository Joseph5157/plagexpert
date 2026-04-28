<script setup>
const recommendations = [
  {
    icon: '🎓',
    title: 'For thesis or dissertation',
    description: 'Use Turnitin or Drillbit similarity report support for draft review and submission preparation.'
  },
  {
    icon: '🤖',
    title: 'For AI-written content concerns',
    description: 'Use AI Detection to review content before final submission and reduce last-minute uncertainty.'
  },
  {
    icon: '📝',
    title: 'For journal submission',
    description: 'Use References plus Journal Ready to improve citations, formatting, and manuscript readiness.'
  }
]
</script>

<template>
  <section class="bg-[#F8FAFC] px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Help choosing
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Not sure which service to choose?
        </h2>
      </div>

      <div class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <article
          v-for="item in recommendations"
          :key="item.title"
          class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] sm:p-7"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] text-2xl shadow-inner">
            {{ item.icon }}
          </div>

          <h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
            {{ item.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[#334155]">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

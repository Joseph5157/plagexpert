<script setup>
const recommendations = [
  {
    icon: '🎓',
    title: 'For thesis or dissertation',
    description: 'Use our similarity report or Drillbit support for draft review and submission preparation.'
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
  <section class="bg-surface px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Help choosing
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Not sure which service to choose?
        </h2>
      </div>

      <div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <article
          v-for="item in recommendations"
          :key="item.title"
          class="rounded-[2rem] border border-line bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] sm:p-7"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-2xl shadow-inner">
            {{ item.icon }}
          </div>

          <h3 class="mt-5 text-lg font-semibold tracking-tight text-ink">
            {{ item.title }}
          </h3>

          <p class="mt-3 text-base leading-7 text-body">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

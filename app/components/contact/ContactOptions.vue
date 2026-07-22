<script setup>
const options = [
  {
    title: 'Report Support',
    description: 'Help with plagiarism checks, Drillbit, AI detection, and report selection.',
    accent: 'bg-primary-50',
    dot: 'bg-primary',
    titleClass: 'text-primary'
  },
  {
    title: 'Pricing Help',
    description: 'Guidance for Single File, Thesis Bundle, and Custom plans.',
    accent: 'bg-primary-50',
    dot: 'bg-navy',
    titleClass: 'text-navy'
  },
  {
    title: 'Department Queries',
    description: 'Support for bulk files, department workflows, and custom pricing.',
    accent: 'bg-surface',
    dot: 'bg-primary',
    titleClass: 'text-primary'
  }
]
</script>

<template>
  <section class="px-4 pt-4 pb-6 sm:pt-5 sm:pb-8 lg:pt-6 lg:pb-10">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6 sm:mb-8">
        <p class="inline-flex rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy shadow-sm">
          Contact options
        </p>
        <h2 class="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Choose the kind of support you need
        </h2>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <article
          v-for="option in options"
          :key="option.title"
          class="rounded-[1.75rem] border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-7"
        >
          <div :class="['inline-flex h-12 w-12 items-center justify-center rounded-2xl', option.accent]">
            <span :class="['h-4 w-4 rounded-full', option.dot]"></span>
          </div>

          <h3 :class="['mt-5 text-xl font-semibold tracking-tight', option.titleClass]">
            {{ option.title }}
          </h3>

          <p class="mt-3 text-base leading-7 text-body sm:text-base">
            {{ option.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

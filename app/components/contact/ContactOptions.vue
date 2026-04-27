<script setup>
const options = [
  {
    title: 'Report Support',
    description: 'Help with Turnitin, Drillbit, AI detection, and report selection.',
    accent: 'bg-[#EFF6FF]',
    dot: 'bg-[#2563EB]',
    titleClass: 'text-[#2563EB]'
  },
  {
    title: 'Pricing Help',
    description: 'Guidance for Basic, Standard, Student, Department, and Enterprise plans.',
    accent: 'bg-[#EFF6FF]',
    dot: 'bg-[#0B1F3A]',
    titleClass: 'text-[#0B1F3A]'
  },
  {
    title: 'Department Queries',
    description: 'Support for bulk files, department workflows, and custom pricing.',
    accent: 'bg-[#F8FAFC]',
    dot: 'bg-[#2563EB]',
    titleClass: 'text-[#2563EB]'
  }
]
</script>

<template>
  <section class="px-4 py-6 sm:py-10 lg:py-14">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6 sm:mb-8">
        <p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm">
          Contact options
        </p>
        <h2 class="mt-4 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
          Choose the kind of support you need
        </h2>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <article
          v-for="option in options"
          :key="option.title"
          class="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-7"
        >
          <div :class="['inline-flex h-12 w-12 items-center justify-center rounded-2xl', option.accent]">
            <span :class="['h-4 w-4 rounded-full', option.dot]"></span>
          </div>

          <h3 :class="['mt-5 text-xl font-bold tracking-tight', option.titleClass]">
            {{ option.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[#334155] sm:text-base">
            {{ option.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

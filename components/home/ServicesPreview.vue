<script setup>
const services = [
  {
    title: 'Turnitin Similarity Check',
    description: 'Get a similarity report suitable for academic review workflows.',
    features: ['Similarity report', 'AI detection support', 'PDF delivery'],
    icon: '📄'
  },
  {
    title: 'Drillbit Report',
    description: 'Check your document through Drillbit-based report workflow.',
    features: ['Fast report', 'Student projects', 'Academic submissions'],
    icon: '📘'
  },
  {
    title: 'AI Detection',
    description: 'Review AI-written content indicators before final submission.',
    features: ['AI score support', 'Clear report', 'Quick delivery'],
    icon: '🤖'
  },
  {
    title: 'Paraphrasing Support',
    description: 'Improve text clarity while keeping academic meaning intact.',
    features: ['Clarity improvement', 'Academic tone', 'Better readability'],
    icon: '✍️'
  },
  {
    title: 'References',
    description: 'Support for reference formatting and citation cleanup.',
    features: ['Reference cleanup', 'Formatting help', 'Journal support'],
    icon: '📚'
  },
  {
    title: 'Journal Ready',
    description: 'Prepare your manuscript for journal submission requirements.',
    features: ['Submission support', 'Formatting review', 'Final document help'],
    icon: '🎓'
  }
]
</script>

<template>
  <section class="bg-white px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Services
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Choose the right report service
        </h2>

        <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
          Select the service that matches your thesis, project, journal, or department workflow.
        </p>
      </div>

      <div class="mt-8 sm:hidden">
        <div class="grid gap-4">
          <div
            v-for="service in services.slice(0, 3)"
            :key="service.title"
            class="flex h-full flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
          >
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner">
              {{ service.icon }}
            </div>

            <h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
              {{ service.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-[#334155]">
              {{ service.description }}
            </p>
          </div>
        </div>

        <div class="mt-6 text-center">
          <NuxtLink
            to="/services"
            class="inline-flex w-full justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[var(--plagexpert-primary-blue)] hover:bg-[var(--plagexpert-soft-blue)]"
          >
            View all services
          </NuxtLink>
        </div>
      </div>

      <div class="mt-10 hidden gap-4 sm:mt-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="flex h-full flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:p-7"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner sm:h-12 sm:w-12">
            {{ service.icon }}
          </div>

          <h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
            {{ service.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[#334155]">
            {{ service.description }}
          </p>

          <ul class="mt-5 space-y-2 text-sm text-[#334155]">
            <li v-for="feature in service.features" :key="feature" class="flex gap-2">
              <span class="text-[#0D9488]">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <a
            href="#"
            class="mt-6 inline-flex w-full justify-center rounded-full bg-[var(--plagexpert-primary-cta)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(225,29,72,0.22)] transition hover:bg-[var(--plagexpert-primary-cta-hover)] sm:w-auto"
          >
            Get on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

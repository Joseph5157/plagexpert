<script setup>
const services = [
  {
    title: 'Plagiarism & AI Checking',
    description: 'Get a detailed similarity and AI detection report for your academic document before final submission.',
    features: ['Similarity report', 'AI detection report', 'PDF report delivery'],
    icon: '📄'
  },
  {
    title: 'Drillbit Plagiarism & AI Checking',
    description: 'Check your document through Drillbit for plagiarism and AI detection support.',
    features: ['Drillbit plagiarism report', 'AI checking support', 'Fast report delivery'],
    icon: '📘'
  },
  {
    title: 'Plagiarism Removal',
    description: 'Improve originality by reducing matched content while keeping your academic meaning intact.',
    features: ['Similarity reduction', 'Proper paraphrasing', 'Academic tone maintained'],
    icon: '✍️'
  },
  {
    title: 'AI Removal',
    description: 'Make your content sound more natural and human-written by reducing AI-detectable writing patterns.',
    features: ['AI score reduction', 'Humanized writing', 'Meaning preserved'],
    icon: '🤖'
  },
  {
    title: 'Thesis Writing',
    description: 'Get professional thesis writing support for research, structure, formatting, and academic presentation.',
    features: ['Thesis chapter writing', 'Research support', 'Formatting assistance'],
    icon: '🎓'
  }
]
</script>

<template>
  <section id="services" class="bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Services
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Choose the Right Academic Support Service
        </h2>

        <p class="mt-4 text-base leading-7 text-body md:text-lg">
          Select the service that matches your requirement — plagiarism check, AI check, content improvement, or thesis support.
        </p>
      </div>

      <!-- Mobile: show all 5 cards with features + button -->
      <div class="mt-6 grid gap-4 sm:hidden">
        <div
          v-for="service in services"
          :key="service.title"
          class="flex flex-col rounded-[2rem] border border-line bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-2xl shadow-inner">
            {{ service.icon }}
          </div>
          <h3 class="mt-5 text-lg font-semibold tracking-tight text-ink">{{ service.title }}</h3>
          <p class="mt-3 text-base leading-7 text-body">{{ service.description }}</p>
          <ul class="mt-4 space-y-2 text-sm text-body">
            <li v-for="feature in service.features" :key="feature" class="flex gap-2">
              <span class="text-primary">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <div class="mt-6">
            <a
              :href="getWhatsAppUrl()"
              class="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-primary-hover"
            >
              Select Service
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop: show all 5 cards -->
      <div class="mt-6 hidden gap-4 sm:mt-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="flex h-full flex-col rounded-[2rem] border border-line bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:p-7"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-2xl shadow-inner sm:h-12 sm:w-12">
            {{ service.icon }}
          </div>

          <h3 class="mt-5 text-lg font-semibold tracking-tight text-ink">
            {{ service.title }}
          </h3>

          <p class="mt-3 text-base leading-7 text-body">
            {{ service.description }}
          </p>

          <ul class="mt-5 space-y-2 text-sm text-body">
            <li v-for="feature in service.features" :key="feature" class="flex gap-2">
              <span class="text-primary">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-auto pt-6">
            <a
              :href="getWhatsAppUrl()"
              class="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-primary-hover"
            >
              Select Service
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

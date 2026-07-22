<script setup>
const portalBase = 'https://portal.plagexpert.in'

const plans = [
  {
    slug: 'student',
    name: 'Single File',
    price: '₹150',
    files: '1 file',
    perFile: null,
    description: 'Best for a single quick report check.',
    features: ['Similarity report', 'AI detection report', 'PDF delivery']
  },
  {
    slug: 'research',
    name: 'Thesis Bundle',
    price: '₹2,100',
    files: '15 files',
    perFile: '₹140/file',
    description: 'Best value for thesis and repeated checks.',
    popular: true,
    features: ['15 report checks', 'AI detection included', 'Best for thesis drafts', 'Priority support']
  },
  {
    name: 'Custom Plan',
    price: 'Custom',
    files: 'Flexible volume',
    perFile: null,
    custom: true,
    description: 'For departments and large-volume submissions.',
    features: ['Custom volume', 'Multi-user / department workflow', 'Priority support']
  }
]

const getSignupUrl = (slug) => `${portalBase}/signup?plan=${slug}`
</script>

<template>
  <section class="bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Plans
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Pricing built for academic workflows
        </h2>
      </div>

      <div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-6">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="relative flex h-full flex-col rounded-[2rem] border border-line bg-surface p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"
          :class="plan.popular ? 'ring-2 ring-primary-50' : ''"
        >
          <div
            v-if="plan.popular"
            class="static mb-3 inline-flex w-fit self-start rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-lg sm:absolute sm:left-1/2 sm:top-0 sm:mb-0 sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            Most Popular
          </div>

          <h3 class="text-lg font-semibold tracking-tight text-ink">
            {{ plan.name }}
          </h3>

          <div class="mt-4">
            <span class="text-3xl font-bold tracking-tight text-ink">
              {{ plan.price }}
            </span>
          </div>

          <p class="mt-1 text-sm font-semibold text-primary">
            {{ plan.files }}<span v-if="plan.perFile" class="ml-2 font-normal text-muted">· {{ plan.perFile }}</span>
          </p>

          <p class="mt-4 text-base leading-7 text-body">
            {{ plan.description }}
          </p>

          <ul class="mt-5 space-y-2 text-sm text-body">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex gap-2"
            >
              <span class="text-primary">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-auto pt-6">
            <a
              :href="plan.custom ? getWhatsAppUrl('Hi PlagExpert! I need a custom plan. Can you help me?') : getSignupUrl(plan.slug)"
              :class="plan.popular
                ? 'flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-primary-hover'
                : 'flex w-full items-center justify-center rounded-full border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-50'"
            >
              {{ plan.custom ? 'Contact Us' : 'Get Started' }}
            </a>
          </div>
        </article>
      </div>

      <div class="mt-8 rounded-[1.75rem] border border-line bg-primary-50 p-5 text-base leading-7 text-body shadow-sm">
        <span class="font-semibold text-ink">
          Savings example: Buying Single File 15× costs ₹2,250 vs Thesis Bundle ₹2,100. Save ₹150.
        </span>
      </div>
    </div>
  </section>
</template>

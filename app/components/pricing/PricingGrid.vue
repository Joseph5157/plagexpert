<script setup>
const plans = [
  {
    name: 'Basic',
    price: '₹99',
    files: '1 file',
    description: 'Best for one quick report check.',
    features: ['Similarity report', 'PDF delivery', 'WhatsApp support'],
    waMsg: 'Hi PlagExpert! I want the Basic Plan (₹99 for 1 file). Please help me get started.'
  },
  {
    name: 'Standard',
    price: '₹399',
    files: '5 files',
    description: 'Good for project reports and small batches.',
    features: ['5 report checks', 'PDF delivery', 'Fast support'],
    waMsg: 'Hi PlagExpert! I want the Standard Plan (₹399 for 5 files). Please help me get started.'
  },
  {
    name: 'Student',
    price: '₹1,149',
    files: '15 files',
    description: 'Best value for thesis and repeated checks.',
    popular: true,
    features: ['15 report checks', 'Best for thesis drafts', 'Priority support', 'Best overall value'],
    waMsg: 'Hi PlagExpert! I want the Student Plan (₹1,149 for 15 files). Please help me get started.'
  },
  {
    name: 'Department',
    price: '₹2,949',
    files: '30 files',
    description: 'For departments and multiple submissions.',
    features: ['30 report checks', 'Bulk workflow', 'Department support'],
    waMsg: 'Hi PlagExpert! I want the Department Plan (₹2,949 for 30 files). Please help me get started.'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    files: '50+ files',
    description: 'For institutions and large-volume needs.',
    features: ['Custom volume', 'Multi-user workflow', 'Custom pricing'],
    waMsg: 'Hi PlagExpert! I am interested in Enterprise pricing for 50+ files. Can you share custom pricing details?'
  }
]
</script>

<template>
  <section class="bg-white px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
          Plans
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Pricing built for academic workflows
        </h2>
      </div>

      <div class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 sm:gap-6">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="relative flex h-full flex-col rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"
          :class="plan.popular ? 'ring-2 ring-[#EFF6FF]' : ''"
        >
          <div
            v-if="plan.popular"
            class="static mb-3 inline-flex w-fit self-start rounded-full bg-[#2563EB] px-4 py-1 text-xs font-semibold text-white shadow-lg sm:absolute sm:left-1/2 sm:top-0 sm:mb-0 sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            Most Popular
          </div>

          <h3 class="text-lg font-bold tracking-tight text-[#0F172A]">
            {{ plan.name }}
          </h3>

          <div class="mt-4">
            <span class="text-3xl font-bold tracking-tight text-[#0F172A]">
              {{ plan.price }}
            </span>
          </div>

          <p class="mt-1 text-sm font-semibold text-[#0F766E]">
            {{ plan.files }}
          </p>

          <p class="mt-4 text-sm leading-7 text-[#334155]">
            {{ plan.description }}
          </p>

          <ul class="mt-5 space-y-2 text-sm text-[#334155]">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex gap-2"
            >
              <span class="text-[#0F766E]">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <a
            :href="getWhatsAppUrl(plan.waMsg)"
            class="mt-6 inline-flex w-full justify-center rounded-full bg-[#15803D] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.22)] transition hover:bg-[#166534]"
          >
            Buy on WhatsApp
          </a>
        </article>
      </div>

      <div class="mt-8 rounded-[1.75rem] border border-[#E2E8F0] bg-[#EFF6FF] p-5 text-sm leading-7 text-[#334155] shadow-sm">
        <span class="font-semibold text-[#0F172A]">
          Buying Basic 15 times costs ₹1,485 vs Student ₹1,149.
        </span>
      </div>
    </div>
  </section>
</template>

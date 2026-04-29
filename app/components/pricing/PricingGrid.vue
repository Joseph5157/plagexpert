<script setup>
const plans = [
  {
    name: 'Single File',
    price: '₹99',
    files: '1 file',
    perFile: null,
    description: 'Best for a single quick report check.',
    features: ['Turnitin similarity report', 'AI detection report', 'PDF delivery']
  },
  {
    name: 'Basic Plan',
    price: '₹450',
    files: '5 files',
    perFile: '₹90/file',
    description: 'Good for project reports and small batches.',
    features: ['5 report checks', 'AI detection included', 'Fast support']
  },
  {
    name: 'Standard Plan',
    price: '₹1,275',
    files: '15 files',
    perFile: '₹85/file',
    description: 'Best value for thesis and repeated checks.',
    popular: true,
    features: ['15 report checks', 'Best for thesis drafts', 'Priority support']
  },
  {
    name: 'Monthly Plan',
    price: '₹2,400',
    files: '30 files',
    perFile: '₹80/file',
    description: 'For departments and multiple submissions.',
    features: ['30 report checks', 'Bulk workflow', 'Department support']
  }
]
</script>

<template>
  <section class="bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Plans
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Pricing built for academic workflows
        </h2>
      </div>

      <div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
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

          <p class="mt-1 text-sm font-semibold text-[#0D9488]">
            {{ plan.files }}<span v-if="plan.perFile" class="ml-2 font-normal text-[#64748B]">· {{ plan.perFile }}</span>
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
              <span class="text-[#0D9488]">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-auto pt-6">
            <a
              :href="getWhatsAppUrl()"
              class="inline-flex w-full justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"
            >
              Select Plan
            </a>
          </div>
        </article>
      </div>

      <div class="mt-8 rounded-[1.75rem] border border-[#E2E8F0] bg-[#EFF6FF] p-5 text-sm leading-7 text-[#334155] shadow-sm">
        <span class="font-semibold text-[#0F172A]">
          Savings example: Buying Single File 15× costs ₹1,485 vs Standard Plan ₹1,275.
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const fileCount = ref(1)
const pricePerFile = 99
const bulkRates = [
  { min: 1,  max: 1,  rate: 99 },
  { min: 2,  max: 5,  rate: 89 },
  { min: 6,  max: 15, rate: 80 },
  { min: 16, max: 999, rate: 73 },
]
const calculatedRate = computed(() => {
  const n = parseInt(fileCount.value) || 1
  return bulkRates.find(r => n >= r.min && n <= r.max)?.rate ?? 73
})
const calculatedTotal = computed(() => {
  const n = parseInt(fileCount.value) || 1
  return n * calculatedRate.value
})

const turnitinPlans = [
  {
    name: 'Single File',
    price: '₹99',
    files: '1 file',
    perFile: null,
    description: 'Best for a single quick report check.',
    features: ['Similarity report', 'AI detection report', 'PDF delivery']
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

const otherPlans = [
  {
    icon: '📘',
    name: 'Drillbit Report',
    price: '₹200',
    unit: 'per file',
    description: 'Plagiarism and AI detection via Drillbit.',
    cta: 'Select Service',
    whatsapp: true
  },
  {
    icon: '✍️',
    name: 'Plagiarism & AI Removal',
    price: 'Custom',
    unit: 'contact us',
    description: 'Expert content improvement for originality and AI score reduction.',
    cta: 'Select Service',
    whatsapp: true
  },
  {
    icon: '🎓',
    name: 'Thesis Writing',
    price: 'Custom',
    unit: 'contact us',
    description: 'Professional thesis writing support for research and formatting.',
    cta: 'Select Service',
    whatsapp: true
  }
]
</script>

<template>
  <section id="pricing" class="bg-[#F8FAFC] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Pricing
        </p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Choose the Right Plan for Your Document
        </h2>
        <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
          Pay only for what you need — from single file checks to bulk plans for thesis and repeated submissions.
        </p>
      </div>

      <!-- Plagiarism Check Plans -->
      <div class="mt-6 sm:mt-8">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0F172A]">Plagiarism & AI Check Plans</p>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          <div
            v-for="plan in turnitinPlans"
            :key="plan.name"
            class="relative flex flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"
            :class="plan.popular ? 'ring-2 ring-[#2563EB] mt-4 sm:mt-0' : ''"
          >
            <div
              v-if="plan.popular"
              class="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-[#2563EB] px-4 py-1 text-xs font-semibold text-white shadow-lg"
            >
              Most Popular
            </div>

            <h3 class="text-lg font-bold tracking-tight text-[#0F172A]">{{ plan.name }}</h3>

            <div class="mt-3">
              <span class="text-3xl font-bold tracking-tight text-[#0F172A]">{{ plan.price }}</span>
            </div>

            <p class="mt-1 text-sm font-semibold text-[#0D9488]">{{ plan.files }}<span v-if="plan.perFile" class="ml-2 text-[#64748B]">· {{ plan.perFile }}</span></p>

            <p class="mt-3 text-sm leading-7 text-[#334155]">{{ plan.description }}</p>

            <ul class="mt-4 space-y-2 text-sm text-[#334155]">
              <li v-for="feature in plan.features" :key="feature" class="flex gap-2">
                <span class="text-[#0D9488]">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <div class="mt-auto pt-5">
              <a
                :href="getWhatsAppUrl()"
                class="flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"
              >
                Select Plan
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Cost Calculator -->
      <div class="mt-6 rounded-[1.75rem] border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm font-bold uppercase tracking-widest text-[#64748B]">Quick Cost Calculator</p>
            <p class="mt-1 text-xs text-[#94A3B8]">No email needed — see your price instantly</p>
          </div>
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div class="flex items-center gap-3">
              <label class="text-sm font-semibold text-[#0F172A] whitespace-nowrap">Number of files:</label>
              <input
                v-model="fileCount"
                type="number"
                min="1"
                max="100"
                class="w-20 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-center text-sm font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              >
            </div>
            <div class="flex items-center gap-4">
              <div class="text-center">
                <p class="text-xs text-[#64748B]">Rate/file</p>
                <p class="text-lg font-bold text-[#0D9488]">₹{{ calculatedRate }}</p>
              </div>
              <div class="text-center">
                <p class="text-xs text-[#64748B]">Total</p>
                <p class="text-2xl font-bold text-[#0F172A]">₹{{ calculatedTotal.toLocaleString('en-IN') }}</p>
              </div>
              <a
                :href="getWhatsAppUrl(`Hi PlagExpert! I need ${fileCount} file check(s). Can you help me get started?`)"
                class="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] whitespace-nowrap"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Services -->
      <div class="mt-8">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0F172A]">Other Services</p>
        <div class="grid gap-4 sm:grid-cols-3 sm:gap-6">
          <div
            v-for="plan in otherPlans"
            :key="plan.name"
            class="flex flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"
          >
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner">
              {{ plan.icon }}
            </div>
            <h3 class="mt-4 text-lg font-bold tracking-tight text-[#0F172A]">{{ plan.name }}</h3>
            <div class="mt-2">
              <span class="text-2xl font-bold tracking-tight text-[#0F172A]">{{ plan.price }}</span>
              <span class="ml-1 text-sm text-[#64748B]">{{ plan.unit }}</span>
            </div>
            <p class="mt-3 text-sm leading-7 text-[#334155]">{{ plan.description }}</p>
            <div class="mt-auto pt-5">
              <a
                :href="getWhatsAppUrl()"
                class="flex w-full items-center justify-center rounded-full bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D]"
              >
                {{ plan.cta }}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

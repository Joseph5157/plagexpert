<script setup>
const faqs = [
  { question: 'Do you store my document?', answer: 'No. Documents are processed for the report workflow and deleted after delivery.' },
  { question: 'How fast is delivery?', answer: 'Most reports are delivered within 10-30 minutes depending on file size and queue.' },
  { question: 'Will my professor see it beforehand?', answer: 'No. The report is delivered only to you through the selected contact method.' },
  { question: 'Turnitin vs Drillbit - which should I choose?', answer: 'Choose based on your college or university requirement. If unsure, message us on WhatsApp and we will guide you.' },
  { question: 'Is AI detection included?', answer: 'AI detection support is available for selected report workflows and plans.' },
  { question: 'How do I submit my file?', answer: 'Message us on WhatsApp, select your plan, receive portal access or a guest upload link, and upload through the secure portal.' },
  { question: 'Can I track my report?', answer: 'Yes. After processing, you can track and download your report through the portal.' }
]
</script>

<template>
  <section class="bg-[#F8FAFC] px-4 pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
            FAQ
          </p>

          <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            Quick answers before you start
          </h2>

          <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
            Clear answers about document safety, delivery, reports, payments,
            and the WhatsApp process.
          </p>

          <NuxtLink
            to="/faq"
            class="mt-6 inline-flex w-full justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto"
          >
            View all FAQs
          </NuxtLink>
        </div>

        <div class="space-y-3 md:hidden">
          <details
            v-for="faq in faqs.slice(0, 3)"
            :key="faq.question"
            class="group rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0F172A]">
              <span>{{ faq.question }}</span>
              <span class="text-2xl leading-none text-[#0D9488] transition group-open:rotate-45">+</span>
            </summary>

            <p class="mt-4 text-sm leading-7 text-[#334155]">
              {{ faq.answer }}
            </p>
          </details>
        </div>

        <div class="hidden space-y-3 md:block md:space-y-4">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0F172A]">
              <span>{{ faq.question }}</span>
              <span class="text-2xl leading-none text-[#0D9488] transition group-open:rotate-45">+</span>
            </summary>

            <p class="mt-4 text-sm leading-7 text-[#334155]">
              {{ faq.answer }}
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

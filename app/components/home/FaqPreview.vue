<script setup>
const faqs = [
  {
    question: 'How do I start using PlagExpert?',
    answer: 'First, check the plan details and message us on WhatsApp. Select the service you need, complete the payment, and send your full name. After payment confirmation, we will send you an invite link to create your Portal ID through Telegram.'
  },
  {
    question: 'Why do I need Telegram?',
    answer: 'Telegram is required to create your Portal ID, receive login OTPs, get real-time report status updates, and receive notifications when your report is ready.'
  },
  {
    question: 'How do I submit my file?',
    answer: 'After creating your Portal ID, visit the PlagExpert portal, enter your Portal ID, verify with the Telegram OTP, and upload your document directly through the portal.'
  },
  {
    question: 'How fast is report delivery?',
    answer: 'Most reports are completed within 10–30 minutes, depending on file size, selected service, and current queue.'
  },
  {
    question: 'Can I track my report status?',
    answer: 'Yes. You will receive Telegram notifications at every important stage, including upload confirmation, processing updates, and final report readiness.'
  },
  {
    question: 'Where do I download my report?',
    answer: 'Once your report is ready, you will receive a Telegram notification. Then you can log in to your portal dashboard and download the final report.'
  },
  {
    question: 'Do you store my document?',
    answer: 'Your document is handled securely and used only for generating your report. After report delivery, files are removed according to our internal safety process.'
  },
  {
    question: 'Is AI detection included?',
    answer: 'AI detection is included in Turnitin plans. Please check the plan details or message us on WhatsApp before payment.'
  },
  {
    question: 'Turnitin vs Drillbit — which should I choose?',
    answer: 'Turnitin is commonly preferred for university-style similarity and AI checks. Drillbit is another plagiarism and AI checking option. The best choice depends on your requirement and university guidelines.'
  },
  {
    question: 'Will my professor or university see my file?',
    answer: 'No. Your file is processed privately through the selected checking service and is not submitted to your professor or university before your final submission.'
  }
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
            Clear answers about plans, payment, Portal ID setup, Telegram login, file upload, report delivery, and document safety.
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
            v-for="faq in faqs.slice(0, 4)"
            :key="faq.question"
            class="group rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0F172A]">
              <span>{{ faq.question }}</span>
              <span class="text-2xl leading-none text-[#0D9488] transition group-open:rotate-45">+</span>
            </summary>
            <p class="mt-4 text-sm leading-7 text-[#334155]">{{ faq.answer }}</p>
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
            <p class="mt-4 text-sm leading-7 text-[#334155]">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

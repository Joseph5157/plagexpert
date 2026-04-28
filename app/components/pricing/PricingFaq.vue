<script setup>
const faqs = [
  {
    question: 'Do credits expire?',
    answer: 'Credits are intended for use within your active service workflow. If you need clarity on a package, contact us on WhatsApp before purchase.'
  },
  {
    question: 'Can I buy more files later?',
    answer: 'Yes. You can upgrade or purchase additional file checks when needed.'
  },
  {
    question: 'Which plan is best for thesis?',
    answer: 'Student is the best fit for most thesis and repeated draft-check workflows.'
  },
  {
    question: 'Is payment handled through WhatsApp?',
    answer: 'Yes. We guide you through the process on WhatsApp and keep the flow simple.'
  },
  {
    question: 'Can departments get custom pricing?',
    answer: 'Yes. Department and Enterprise needs can be discussed for a custom arrangement.'
  }
]
</script>

<template>
  <section class="bg-[#F8FAFC] px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
            FAQ
          </p>

          <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            Pricing questions answered
          </h2>
        </div>

        <div class="space-y-3 sm:space-y-4">
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

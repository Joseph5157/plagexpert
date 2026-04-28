<script setup>
const steps = [
  'Choose your plan and service',
  'Pay through WhatsApp',
  'Upload your document securely',
  'Receive your PDF report'
]
</script>

<template>
  <section class="bg-[var(--plagexpert-soft-pink)] px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="md:hidden">
        <div class="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-[#E2E8F0]">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
            Get started today
          </p>

          <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A]">
            Get your report in 10 to 30 minutes
          </h2>

          <p class="mt-4 text-base leading-7 text-[#334155]">
            Send your document on WhatsApp and receive the PDF report quickly.
          </p>

          <div class="mt-6 flex flex-col gap-3">
            <a
              :href="getWhatsAppUrl()"
              class="inline-flex w-full items-center justify-center rounded-full bg-[var(--plagexpert-primary-cta)] px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(225,29,72,0.24)] transition hover:bg-[var(--plagexpert-primary-cta-hover)]"
            >
              Chat on WhatsApp
            </a>

            <NuxtLink
              to="/pricing"
              class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-7 py-3 text-center text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[var(--plagexpert-primary-blue)] hover:bg-[var(--plagexpert-soft-blue)]"
            >
              View Pricing
            </NuxtLink>
          </div>

          <p class="mt-5 text-sm leading-7 text-[#334155]">
            Non-repository scan. Files deleted after delivery.
          </p>
        </div>
      </div>

      <div class="hidden md:block">
        <div class="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-[#E2E8F0]">
          <div class="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="p-6 sm:p-8 md:p-12 lg:p-16">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
                Get started today
              </p>

              <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
                Get your report in 10 to 30 minutes
              </h2>

              <p class="mt-5 max-w-2xl text-base leading-8 text-[#334155] md:text-lg">
                Send your document on WhatsApp and receive the PDF report quickly.
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  :href="getWhatsAppUrl()"
                  class="inline-flex w-full items-center justify-center rounded-full bg-[var(--plagexpert-primary-cta)] px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(225,29,72,0.24)] transition hover:bg-[var(--plagexpert-primary-cta-hover)] sm:w-auto"
                >
                  Chat on WhatsApp
                </a>

                <NuxtLink
                  to="/pricing"
                  class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-7 py-3 text-center text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[var(--plagexpert-primary-blue)] hover:bg-[var(--plagexpert-soft-blue)] sm:w-auto"
                >
                  View Pricing
                </NuxtLink>
              </div>

              <p class="mt-6 text-sm leading-7 text-[#334155]">
                Non-repository scan. Files deleted after delivery.
              </p>
            </div>

            <div class="bg-[#0B1F3A] p-6 text-white sm:p-8 md:p-12 lg:p-16">
              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(11,31,58,0.18)] sm:p-6">
                <h3 class="text-xl font-bold tracking-tight">
                  Send your document on WhatsApp
                </h3>

                <p class="mt-3 text-sm leading-7 text-[#D0D5DD]">
                  Our support team will guide you through service selection,
                  payment, upload, and delivery.
                </p>

                <div class="mt-6 space-y-4">
                  <div v-for="(step, index) in steps" :key="step" class="flex gap-4">
                    <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--plagexpert-primary-blue)] text-sm font-bold text-white shadow-sm">
                      {{ index + 1 }}
                    </div>

                    <p class="pt-1 text-sm leading-6 text-[#E4E7EC]">
                      {{ step }}
                    </p>
                  </div>
                </div>

                <a
                  :href="getWhatsAppUrl()"
                  class="mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:bg-[var(--plagexpert-soft-blue)]"
                >
                  Start on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

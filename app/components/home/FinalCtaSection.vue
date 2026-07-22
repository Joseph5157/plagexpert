<script setup>
const portalUrl = getPortalUrl()

const steps = [
  'Choose your plan and service',
  'Pay through WhatsApp',
  'Receive portal access or a guest link',
  'Upload through the secure portal',
  'Track and download your report'
]
</script>

<template>
  <section class="bg-primary-50 px-4 py-12 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="md:hidden">
        <div class="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-line">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get started today
          </p>

          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Get your report through the secure portal
          </h2>

          <p class="mt-4 text-base leading-7 text-body">
            Start on WhatsApp, choose your plan, receive portal access or a guest upload link, and track your report after processing.
          </p>

          <div class="mt-6 flex flex-col gap-3">
            <a
              :href="getWhatsAppUrl()"
              class="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition hover:bg-primary-hover"
            >
              Start on WhatsApp
            </a>

            <NuxtLink
              to="/pricing"
              class="inline-flex w-full items-center justify-center rounded-full border border-line bg-white px-7 py-3 text-center text-sm font-semibold text-ink shadow-sm transition hover:border-primary hover:bg-primary-50"
            >
              View Pricing
            </NuxtLink>
          </div>

          <p class="mt-5 text-base leading-7 text-body">
            Non-repository scan. Files deleted after delivery.
          </p>
        </div>
      </div>

      <div class="hidden md:block">
        <div class="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-line">
          <div class="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="p-6 sm:p-8 md:p-12 lg:p-16">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Get started today
            </p>

            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
                Get your report through the secure portal
            </h2>

            <p class="mt-5 max-w-2xl text-base leading-8 text-body md:text-lg">
                Start on WhatsApp, choose your plan, receive portal access or a guest upload link, and track your report after processing.
            </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  :href="getWhatsAppUrl()"
                  class="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition hover:bg-primary-hover sm:w-auto"
                >
                  Start on WhatsApp
                </a>

                <NuxtLink
                  to="/pricing"
                  class="inline-flex w-full items-center justify-center rounded-full border border-line bg-white px-7 py-3 text-center text-sm font-semibold text-ink shadow-sm transition hover:border-primary hover:bg-primary-50 sm:w-auto"
                >
                  View Pricing
                </NuxtLink>
              </div>

              <p class="mt-6 text-base leading-7 text-body">
                Non-repository scan. Files deleted after delivery.
              </p>
            </div>

            <div class="bg-navy p-6 text-white sm:p-8 md:p-10 lg:p-12">
              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(11,31,58,0.18)] sm:p-6">
                <h3 class="text-xl font-semibold tracking-tight">
                  Get your report through the secure portal
                </h3>

                <p class="mt-3 text-base leading-7 text-[#D0D5DD]">
                  Our support team will guide you through service selection,
                  payment, portal access, upload, tracking, and delivery.
                </p>

                <div class="mt-6 space-y-4">
                  <div v-for="(step, index) in steps" :key="step" class="flex gap-4">
                    <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-whatsapp text-sm font-bold text-white shadow-sm">
                      {{ index + 1 }}
                    </div>

                    <p class="pt-1 text-sm leading-6 text-[#E4E7EC]">
                      {{ step }}
                    </p>
                  </div>
                </div>

                <a
                  :href="portalUrl"
                  class="mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-primary-50"
                >
                  Open Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

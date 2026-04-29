<script setup>
const portalUploadUrl = getPortalUploadUrl()
</script>

<template>
  <section class="px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12">
    <div class="mx-auto max-w-7xl">
      <div class="overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[linear-gradient(135deg,#0B1F3A_0%,#102A4D_55%,#2563EB_100%)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(11,31,58,0.26)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Next step
            </p>

            <h2 class="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to get your report?
            </h2>

            <p class="mt-4 max-w-2xl text-sm leading-7 text-[#DBEAFE] sm:text-base">
              Start a WhatsApp chat and we will guide you from service selection to portal access and report delivery.
            </p>
          </div>

            <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                :href="getWhatsAppUrl()"
                class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"
              >
                Chat on WhatsApp
              </a>

              <a
                :href="portalUploadUrl"
                class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto sm:px-8"
              >
              Open Portal
              </a>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

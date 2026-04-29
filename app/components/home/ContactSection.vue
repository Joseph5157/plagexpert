<template>
  <section class="bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[linear-gradient(135deg,#0B1F3A_0%,#102A4D_55%,#2563EB_100%)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(11,31,58,0.26)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
              Contact Us
            </p>

            <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Have questions? We're here to help
            </h2>

            <p class="mt-4 max-w-xl text-sm leading-7 text-[#DBEAFE] sm:text-base">
              Chat with us on WhatsApp for plan selection, payment, or any support. We respond quickly and guide you through every step.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              :href="getWhatsAppUrl()"
              class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"
            >
              Chat on WhatsApp
            </a>

            <NuxtLink
              to="/contact"
              class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto sm:px-8"
            >
              Contact Page
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="bg-[#EFF6FF] px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-[#E2E8F0]">
        <div class="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div class="p-6 sm:p-8 md:p-12 lg:p-16">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
              Need help now?
            </p>

            <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Get the right report service in 10 to 30 minutes
            </h2>

            <p class="mt-5 max-w-2xl text-base leading-8 text-[#334155] md:text-lg">
              Message us on WhatsApp and we will help you choose the correct service and plan.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                  :href="getWhatsAppUrl()"
                class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto"
              >
                Chat on WhatsApp
              </a>

              <NuxtLink
                to="/pricing"
                class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-7 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto"
              >
                View Pricing
              </NuxtLink>
            </div>
          </div>

          <div class="bg-[#0B1F3A] p-6 text-white sm:p-8 md:p-12 lg:p-16">
            <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(11,31,58,0.18)] sm:p-6">
              <h3 class="text-xl font-bold tracking-tight">
                Why students choose PlagExpert
              </h3>

              <ul class="mt-5 space-y-4 text-sm leading-7 text-[#E5E7EB]">
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#16A34A]"></span>
                  <span>Clear service guidance before you pay or open the portal.</span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span>
                  <span>Fast delivery and direct WhatsApp communication.</span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0D9488]"></span>
                  <span>Private handling for academic and journal workflows.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

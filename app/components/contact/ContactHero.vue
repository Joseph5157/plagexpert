<template>
  <section class="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_72%,#EFF6FF_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8">
    <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div>
    <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#EFF6FF] blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div class="max-w-2xl">
        <p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-sm">
          Contact
        </p>

        <h1 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
          Contact PlagExpert support
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
          Need help choosing a report service or pricing plan? Message us on WhatsApp and our support team will guide you to the secure portal upload flow.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#"
            class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"
          >
            Chat on WhatsApp
          </a>

          <NuxtLink
            to="/pricing"
            class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"
          >
            View Pricing
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE] blur-2xl"></div>
        <div class="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-5 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6">
          <div class="rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Support guide
            </p>

            <h2 class="mt-3 text-2xl font-bold tracking-tight text-[#0F172A]">
              Quick help for new and returning users
            </h2>

            <ul class="mt-6 space-y-3 text-sm leading-7 text-[#334155]">
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span>
                <span>Choose the report type that fits your requirement.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0B1F3A]"></span>
                <span>Confirm the right plan before you send the file.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0B1F3A]"></span>
                <span>Follow the WhatsApp guidance for payment and portal access steps.</span>
              </li>
            </ul>

            <div class="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              <div class="rounded-2xl bg-[#EFF6FF] p-4 text-center">
                <div class="text-lg font-bold tracking-tight text-[#2563EB] sm:text-xl">1 chat</div>
                <div class="mt-1 text-xs text-[#334155] sm:text-sm">To get started</div>
              </div>

              <div class="rounded-2xl bg-white p-4 text-center">
                <div class="text-lg font-bold tracking-tight text-[#0B1F3A] sm:text-xl">Clear</div>
                <div class="mt-1 text-xs text-[#334155] sm:text-sm">Step-by-step support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_60%,#EFF6FF_100%)] px-4 py-16 sm:py-20 lg:py-28">
    <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div>
    <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#ECFDF5] blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div class="max-w-2xl">
        <p class="mb-5 inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#0B1F3A] shadow-sm sm:text-sm">
          Confidential similarity reports
        </p>

        <h1 class="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
          Your thesis deserves a clean report.
        </h1>

        <p class="mt-5 max-w-xl text-base leading-7 text-[#334155] sm:mt-6 sm:text-lg sm:leading-8">
          Similarity reports with AI detection. Non-repository scans. Files never stored.
          Delivery in 10-30 minutes.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
          <a
            :href="getWhatsAppUrl()"
            class="inline-flex w-full items-center justify-center rounded-full bg-[var(--plagexpert-primary-cta)] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(225,29,72,0.24)] transition hover:bg-[var(--plagexpert-primary-cta-hover)] hover:shadow-[0_20px_48px_rgba(190,18,60,0.28)] sm:w-auto sm:px-8"
          >
            Get report on WhatsApp
          </a>

          <a
            href="#how-it-works"
            class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"
          >
            How it works
          </a>
        </div>
      </div>

      <div class="relative mt-2 sm:mt-0">
        <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFDF5] blur-2xl"></div>
        <div class="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-4 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6">
          <div class="rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">Similarity Report</p>
            <h2 class="mt-3 text-xl font-bold tracking-tight text-[#0F172A] sm:mt-4 sm:text-2xl">Report Preview</h2>

            <div class="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              <div class="h-3 w-full rounded-full bg-[#E2E8F0]"></div>
              <div class="h-3 w-10/12 rounded-full bg-[#E2E8F0]"></div>
              <div class="h-3 w-8/12 rounded-full bg-[#E2E8F0]"></div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              <div class="rounded-2xl bg-[var(--plagexpert-soft-blue)] p-3 text-center sm:p-4">
                <div class="text-xl font-bold tracking-tight text-[#2563EB] sm:text-2xl">30m</div>
                <div class="mt-1 text-xs text-[#334155] sm:text-sm">Avg. delivery</div>
              </div>

              <div class="rounded-2xl bg-[var(--plagexpert-soft-pink)] p-3 text-center sm:p-4">
                <div class="text-xl font-bold tracking-tight text-[#0D9488] sm:text-2xl">0%</div>
                <div class="mt-1 text-xs text-[#334155] sm:text-sm">Repository risk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

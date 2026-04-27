<script setup>
const portalLoginUrl = getPortalLoginUrl()
</script>

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
          Similarity reports with AI detection. Non-repository scans. Secure portal access for uploads and downloads.
          Delivery in 10-30 minutes.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
          <a
            href="#"
            class="inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition hover:bg-[#1D4ED8] hover:shadow-[0_20px_48px_rgba(29,78,216,0.28)] sm:w-auto sm:px-8"
          >
            Start on WhatsApp
          </a>

          <a
            :href="portalLoginUrl"
            class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"
          >
            Open Portal
          </a>
        </div>
      </div>

      <div class="relative mt-2 sm:mt-0">
        <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFDF5] blur-2xl"></div>
        <div class="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-4 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6">
          <img
            src="/illustrations/hero-portal-report.jpg"
            alt="Secure portal upload and similarity report dashboard"
            class="w-full rounded-3xl border border-slate-200 bg-white shadow-xl"
          >
        </div>
      </div>
    </div>
  </section>
</template>

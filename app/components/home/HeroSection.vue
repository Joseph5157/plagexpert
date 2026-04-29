<script setup>
const portalLoginUrl = getPortalLoginUrl()
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_60%,#EFF6FF_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8">
    <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div>
    <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#ECFDF5] blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <div class="max-w-2xl">
        <p class="mb-5 inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#0B1F3A] shadow-sm sm:text-sm">
          India's No.1 Plagiarism &amp; AI Checking Platform
        </p>

        <h1 class="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
          Accurate Plagiarism &amp; AI Reports for Academic Success
        </h1>

        <p class="mt-5 max-w-xl text-base leading-7 text-[#334155] sm:mt-6 sm:text-lg sm:leading-8">
          Check your research paper, thesis, dissertation, or assignment using an advanced Turnitin Instructor Account system. Non-repository scans. Delivery in 10–30 minutes.
        </p>

        <p class="mt-4 text-sm font-semibold text-[#0D9488]">
          Trusted by 50,000+ students &amp; researchers
        </p>

        <div class="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <a
            :href="getWhatsAppUrl()"
            class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16A34A] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>

          <a
            :href="portalLoginUrl"
            class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"
          >
            Login Portal
          </a>
        </div>
      </div>

      <div class="relative mt-2 sm:mt-0">
        <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFDF5] blur-2xl"></div>
        <div class="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-4 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6">
          <img
            src="/illustrations/hero-student-portal.png"
            alt="Student checking plagiarism report on PlagExpert portal showing 18% similarity and 7% AI detection"
            class="w-full rounded-3xl border border-slate-200 bg-white shadow-xl"
          >
        </div>
      </div>
    </div>
  </section>
</template>

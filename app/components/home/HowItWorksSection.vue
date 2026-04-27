<script setup>
const steps = [
  'Choose your plan and service',
  'Pay through WhatsApp',
  'Receive portal access or a guest link',
  'Upload your document through the secure portal',
  'Track and download your report through the portal'
]
</script>

<template>
  <section id="how-it-works" class="bg-[#F8FAFC] px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          How it works
        </h2>
      </div>

      <div class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
        <div class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] sm:p-7">
          <h3 class="font-bold tracking-tight text-[#0F172A]">1. Choose service</h3>
          <p class="mt-3 text-sm leading-7 text-[#334155]">
            Select Turnitin, Drillbit, AI detection, or another service.
          </p>
        </div>

        <div class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] sm:p-7">
          <h3 class="font-bold tracking-tight text-[#0F172A]">2. Select plan</h3>
          <p class="mt-3 text-sm leading-7 text-[#334155]">
            Choose a plan based on your number of files.
          </p>
        </div>

        <div class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] sm:p-7">
          <h3 class="font-bold tracking-tight text-[#0F172A]">3. Upload document</h3>
          <p class="mt-3 text-sm leading-7 text-[#334155]">
            Upload your document through the secure portal.
          </p>
        </div>

        <div class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] sm:p-7">
          <h3 class="font-bold tracking-tight text-[#0F172A]">4. Receive report</h3>
          <p class="mt-3 text-sm leading-7 text-[#334155]">
            Track and download your report through the portal.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

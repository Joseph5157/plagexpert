<script setup>
const items = [
  {
    icon: '🔒',
    title: 'No repository storage',
    description: 'Documents are not added to a public repository or searchable database.'
  },
  {
    icon: '🛡️',
    title: 'Confidential handling',
    description: 'Only you receive the report through the selected delivery method.'
  },
  {
    icon: '✅',
    title: 'Report workflow support',
    description: 'Reports are prepared for academic review and submission workflows.'
  }
]
</script>

<template>
  <section class="bg-[#020617] px-4 py-16 text-white sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#EFF6FF]">
            Confidential by design
          </p>

          <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            100% confidential report handling
          </h2>

          <p class="mt-5 max-w-xl text-base leading-8 text-[#D0D5DD] md:text-lg">
            Your document privacy matters. PlagExpert is designed around fast
            report delivery, private handling, portal access, and clear
            communication through WhatsApp support.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#" class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto">
              Start on WhatsApp
            </a>

            <NuxtLink to="/legal#privacy-policy" class="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
              Read privacy policy
            </NuxtLink>
          </div>
        </div>

        <div class="sm:hidden">
          <p class="text-sm leading-7 text-[#D0D5DD]">
            No repository storage. Only you receive the report. Files deleted after delivery.
          </p>
        </div>

        <div class="hidden lg:block">
          <img
            src="/illustrations/secure-document-vault.jpg"
            alt="Secure document vault with privacy and report protection"
            class="w-full rounded-3xl border border-white/10 bg-white/5 shadow-xl"
          >
        </div>
      </div>
    </div>
  </section>
</template>

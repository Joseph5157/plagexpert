<template>
  <section class="bg-[linear-gradient(135deg,#0B1F3A_0%,#2563EB_100%)] px-4 py-14 text-white sm:py-16 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="grid items-center gap-8 sm:grid-cols-[1.3fr_0.7fr] sm:gap-12">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-100">
            Did you know?
          </p>

          <h2 class="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Most Indian universities expect similarity under 10% for a thesis.
          </h2>

          <a
            :href="getWhatsAppUrl('Hi PlagExpert! What similarity limit does my university require?')"
            class="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Check your requirement on WhatsApp
            <span class="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div class="sm:text-right">
          <div class="text-7xl font-bold tracking-tight text-white sm:text-8xl">&lt;10%</div>
          <p class="mt-2 text-sm text-primary-100">Typical ceiling under UGC norms</p>
        </div>
      </div>
    </div>
  </section>
</template>

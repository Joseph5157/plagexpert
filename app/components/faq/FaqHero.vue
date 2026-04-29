<template>
  <section class="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8">
    <div class="mx-auto max-w-4xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--plagexpert-primary-blue)]">
        FAQ
      </p>

      <h1 class="mt-3 text-3xl font-bold tracking-tight text-[var(--plagexpert-primary-navy)] sm:text-4xl md:text-5xl">
        Frequently asked questions
      </h1>

      <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--plagexpert-text-body)] md:text-lg md:leading-8">
        Find clear answers about document safety, delivery time, report options, AI detection, payments, the WhatsApp process, and portal access.
      </p>

      <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
        <a
          href="#"
          class="inline-flex items-center justify-center rounded-full bg-[var(--plagexpert-trust-green)] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(22,163,74,0.24)] transition hover:bg-[var(--plagexpert-trust-green-hover)]"
        >
          Chat on WhatsApp
        </a>

        <NuxtLink
          to="/pricing"
          class="inline-flex items-center justify-center rounded-full border border-[var(--plagexpert-border)] bg-white px-7 py-3 text-sm font-semibold text-[var(--plagexpert-text-main)] shadow-sm transition hover:border-[var(--plagexpert-primary-blue)] hover:bg-[var(--plagexpert-soft-blue)]"
        >
          View Pricing
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

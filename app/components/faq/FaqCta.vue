<template>
  <section class="px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-4xl">
      <div class="rounded-[2rem] border border-[var(--plagexpert-border)] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-6 shadow-[0_24px_70px_rgba(16,24,40,0.06)] sm:p-8 md:p-10">
        <div class="text-center">
          <h2 class="text-2xl font-bold tracking-tight text-[var(--plagexpert-primary-navy)] sm:text-3xl md:text-4xl">
            Still have questions?
          </h2>

          <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--plagexpert-text-body)] md:text-lg">
            Message us on WhatsApp and we will guide you to the right service and plan.
          </p>

          <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#"
              class="inline-flex items-center justify-center rounded-full bg-[var(--plagexpert-trust-green)] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(22,163,74,0.24)] transition hover:bg-[var(--plagexpert-trust-green-hover)]"
            >
              Chat on WhatsApp
            </a>

            <NuxtLink
              to="/services"
              class="inline-flex items-center justify-center rounded-full border border-[var(--plagexpert-border)] bg-white px-7 py-3 text-sm font-semibold text-[var(--plagexpert-text-main)] shadow-sm transition hover:border-[var(--plagexpert-primary-blue)] hover:bg-[var(--plagexpert-soft-blue)]"
            >
              View Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

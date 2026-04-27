<template>
  <header class="sticky top-0 z-50 border-b border-[var(--plagexpert-border)] bg-white/92 backdrop-blur-xl">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="PlagExpert home">
        <img
          src="/brand/plagexpert-logo.svg"
          alt="PlagExpert logo"
          class="h-8 w-auto md:h-10"
        >
        <span class="text-lg font-bold text-[#0B1F3A] md:text-xl">
          PlagExpert
        </span>
      </NuxtLink>

      <nav class="hidden gap-2 md:flex">
        <NuxtLink to="/" class="rounded-full px-4 py-2 text-sm font-semibold text-[var(--plagexpert-text-body)] transition hover:bg-[var(--plagexpert-soft-blue)] hover:text-[var(--plagexpert-primary-blue)]">Home</NuxtLink>
        <NuxtLink to="/services" class="rounded-full px-4 py-2 text-sm font-semibold text-[var(--plagexpert-text-body)] transition hover:bg-[var(--plagexpert-soft-blue)] hover:text-[var(--plagexpert-primary-blue)]">Services</NuxtLink>
        <NuxtLink to="/pricing" class="rounded-full px-4 py-2 text-sm font-semibold text-[var(--plagexpert-text-body)] transition hover:bg-[var(--plagexpert-soft-blue)] hover:text-[var(--plagexpert-primary-blue)]">Pricing</NuxtLink>
        <NuxtLink to="/faq" class="rounded-full px-4 py-2 text-sm font-semibold text-[var(--plagexpert-text-body)] transition hover:bg-[var(--plagexpert-soft-blue)] hover:text-[var(--plagexpert-primary-blue)]">FAQ</NuxtLink>
        <NuxtLink to="/contact" class="rounded-full px-4 py-2 text-sm font-semibold text-[var(--plagexpert-text-body)] transition hover:bg-[var(--plagexpert-soft-blue)] hover:text-[var(--plagexpert-primary-blue)]">Contact</NuxtLink>
      </nav>

      <a
        href="#"
        class="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D]"
      >
        WhatsApp
      </a>
    </div>
  </header>
</template>

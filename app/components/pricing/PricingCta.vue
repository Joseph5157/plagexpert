<template>
  <section class="bg-[#EFF6FF] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-[#E2E8F0]">
        <div class="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div class="p-6 sm:p-8 md:p-12 lg:p-16">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
              Need help choosing?
            </p>

            <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Not sure which plan to choose?
            </h2>

            <p class="mt-5 max-w-2xl text-base leading-8 text-[#334155] md:text-lg">
              Message us on WhatsApp and we will help you choose the right plan based on your file count and report requirement.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#"
                class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto"
              >
                Chat on WhatsApp
              </a>

              <NuxtLink
                to="/services"
                class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-7 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto"
              >
                View Services
              </NuxtLink>
            </div>
          </div>

          <div class="bg-[#0B1F3A] p-6 text-white sm:p-8 md:p-12 lg:p-16">
            <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(11,31,58,0.18)] sm:p-6">
              <h3 class="text-xl font-bold tracking-tight">
                Quick reminders
              </h3>

              <ul class="mt-5 space-y-4 text-sm leading-7 text-[#E5E7EB]">
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#16A34A]"></span>
                  <span>Pricing depends on file count and workflow needs.</span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span>
                  <span>Support is available through WhatsApp before you purchase.</span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0D9488]"></span>
                  <span>Private handling stays consistent across all plans.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

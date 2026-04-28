<template>
  <footer class="bg-[#020617] text-white">
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div class="md:hidden">
        <NuxtLink to="/" class="inline-flex">
          <img
            src="/brand/plagexpert-logo.svg"
            alt="PlagExpert"
            class="h-11 w-auto rounded-xl bg-white px-2 py-1"
          >
        </NuxtLink>

        <p class="mt-3 max-w-sm text-sm leading-6 text-[#D0D5DD]">
          Non-repository scans. Files never stored. Reports delivered fast
          with private handling and WhatsApp support.
        </p>

        <div class="mt-4 flex flex-wrap gap-2 text-xs">
          <span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]">
            Non-repository scan
          </span>
          <span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]">
            Files never stored
          </span>
        </div>

        <a
          :href="getWhatsAppUrl()"
          class="mt-5 inline-flex w-full justify-center rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D]"
        >
          Chat on WhatsApp
        </a>

        <div class="mt-5 flex flex-wrap gap-3 text-sm text-[#D0D5DD]">
          <NuxtLink to="/legal#privacy-policy" class="transition hover:text-white">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/legal#terms-of-service" class="transition hover:text-white">
            Terms of Service
          </NuxtLink>
        </div>

        <div class="mt-5 border-t border-white/10 pt-4 text-sm text-[#D0D5DD]">
          <p>© 2026 PlagExpert Academic Integrity Services. All rights reserved.</p>
        </div>
      </div>

      <div class="hidden md:block">
        <div class="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <NuxtLink to="/" class="inline-flex">
              <img
                src="/brand/plagexpert-logo.svg"
                alt="PlagExpert"
                class="h-12 w-auto rounded-xl bg-white px-2 py-1"
              >
            </NuxtLink>

            <p class="mt-4 max-w-sm text-sm leading-7 text-[#D0D5DD]">
              Non-repository scans. Files never stored. Reports delivered fast
              with private handling and WhatsApp support.
            </p>

            <div class="mt-5 flex flex-wrap gap-2 text-xs">
              <span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]">
                Non-repository scan
              </span>
              <span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]">
                Files never stored
              </span>
            </div>
          </div>

          <div>
            <h3 class="font-semibold tracking-tight text-white">
              Product
            </h3>

            <ul class="mt-4 space-y-3 text-sm text-[#D0D5DD]">
              <li><NuxtLink to="/services" class="transition hover:text-white">Services</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="transition hover:text-white">Pricing</NuxtLink></li>
              <li><NuxtLink to="/faq" class="transition hover:text-white">FAQ</NuxtLink></li>
              <li><NuxtLink to="/contact" class="transition hover:text-white">Contact</NuxtLink></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold tracking-tight text-white">
              Services
            </h3>

            <ul class="mt-4 space-y-3 text-sm text-[#D0D5DD]">
              <li>Turnitin Similarity Check</li>
              <li>Drillbit Report</li>
              <li>AI Detection</li>
              <li>Paraphrasing Support</li>
              <li>References</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold tracking-tight text-white">
              Support
            </h3>

            <ul class="mt-4 space-y-3 text-sm text-[#D0D5DD]">
              <li><a :href="getWhatsAppUrl()" class="transition hover:text-white">WhatsApp Support</a></li>
              <li><NuxtLink to="/legal#privacy-policy" class="transition hover:text-white">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/legal#terms-of-service" class="transition hover:text-white">Terms of Service</NuxtLink></li>
            </ul>

            <a
              :href="getWhatsAppUrl()"
              class="mt-6 inline-flex rounded-full bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div class="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">
          <div class="flex flex-col gap-3 text-sm text-[#D0D5DD] md:flex-row md:items-center md:justify-between">
            <p>© 2026 PlagExpert Academic Integrity Services. All rights reserved.</p>

            <div class="flex flex-wrap gap-4">
              <span>0% repository risk</span>
              <span>100% confidential</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

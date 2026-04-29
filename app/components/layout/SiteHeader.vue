<script setup>
const portalLoginUrl = getPortalLoginUrl()
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' }
]

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-xl">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-3"
          @click="closeMobileMenu"
        >
          <img
            src="/brand/plagexpert-logo.svg"
            alt="PlagExpert"
            class="h-10 w-auto sm:h-12"
          >
        </NuxtLink>

        <nav class="hidden items-center gap-2 md:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-full px-4 py-2 text-sm font-semibold text-[#334155] transition duration-200 hover:bg-[#EFF6FF] hover:text-[#1D4ED8]"
            active-class="bg-[#EFF6FF] text-[#1D4ED8]"
          >
            {{ link.label }}
          </NuxtLink>

        </nav>

        <div class="hidden md:block">
          <a
            :href="portalLoginUrl"
            class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm transition duration-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]"
          >
            Login Portal
          </a>
        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] p-2.5 text-[#0B1F3A] transition duration-200 hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#1D4ED8] md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 5.25A.75.75 0 0 1 3.75 4.5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.75A.75.75 0 0 1 3.75 9.5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10Zm0 5A.75.75 0 0 1 3.75 14.5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 15.25Z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 4.22a.75.75 0 0 1 1.06 0L10 8.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L11.06 10l4.72 4.72a.75.75 0 1 1-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="border-t border-[#E2E8F0] py-4 md:hidden"
        >
          <nav class="grid gap-2">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#334155] transition duration-200 hover:bg-[#EFF6FF] hover:text-[#1D4ED8]"
              active-class="bg-[#EFF6FF] text-[#1D4ED8]"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </NuxtLink>

            <a
              :href="portalLoginUrl"
              class="mt-1 inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition duration-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]"
              @click="closeMobileMenu"
            >
              Login Portal
            </a>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { termsSections } from '~/utils/legal'

useHead({
  title: 'Terms of Service | PlagExpert',
  meta: [
    {
      name: 'description',
      content:
        'Read the terms that apply when using PlagExpert support, pricing guidance, and report delivery.'
    }
  ]
})
</script>

<template>
  <main class="overflow-hidden bg-[#F8FAFC] pb-10 sm:pb-14">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_72%,#EFF6FF_100%)] px-4 py-16 sm:py-20 lg:py-24">
      <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div>
      <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#DBEAFE] blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl">
        <p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-sm">
          Terms of Service
        </p>

        <h1 class="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
          Rules for using the service
        </h1>

        <p class="mt-5 max-w-3xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
          These terms explain how the website and WhatsApp support flow are intended to work when you request a report or ask for guidance.
        </p>
      </div>
    </section>

    <section class="px-4 py-6 sm:py-10 lg:py-14">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-4 md:grid-cols-2">
          <article
            v-for="section in termsSections"
            :key="section.title"
            class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <h2 class="text-xl font-bold tracking-tight text-[#0F172A]">
              {{ section.title }}
            </h2>

            <ul class="mt-5 space-y-3 text-sm leading-7 text-[#334155] sm:text-base">
              <li
                v-for="point in section.points"
                :key="point"
                class="flex items-start gap-3"
              >
                <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0B1F3A]"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="px-4 py-6 sm:py-10 lg:py-14">
      <div class="mx-auto max-w-7xl">
        <div class="rounded-[2rem] border border-[#E2E8F0] bg-[#0B1F3A] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBEAFE]">
                Need support?
              </p>
              <h2 class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Contact the team if you need help understanding the terms.
              </h2>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <a
                :href="getWhatsAppUrl()"
                class="inline-flex w-full items-center justify-center rounded-full bg-[#15803D] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#166534] sm:w-auto sm:px-8"
              >
                Chat on WhatsApp
              </a>
              <NuxtLink
                to="/privacy-policy"
                class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto sm:px-8"
              >
                View Privacy Policy
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

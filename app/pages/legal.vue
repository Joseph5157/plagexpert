<script setup>
const privacyPolicySections = [
  {
    title: 'Information you share',
    points: [
      'We may receive your name, contact details, and document files when you message us for support.',
      'We use the information only to help with service selection, payment guidance, upload instructions, and report delivery.'
    ]
  },
  {
    title: 'Document handling',
    points: [
      'Documents are handled for report workflow purposes and are not intended for public sharing.',
      'We aim to keep the process private and straightforward, and we do not ask for unnecessary details.'
    ]
  },
  {
    title: 'Communication',
    points: [
      'We may contact you on WhatsApp to confirm the selected service, plan, payment status, or delivery method.',
      'If you message us first, we will respond using the same support channel where possible.'
    ]
  },
  {
    title: 'Policy updates',
    points: [
      'We may update this policy when the website or support workflow changes.',
      'The most recent version on this page applies from the time it is published.'
    ]
  }
]

const termsSections = [
  {
    title: 'Service scope',
    points: [
      'PlagExpert provides support for report selection, WhatsApp guidance, and PDF report delivery.',
      'Service descriptions are meant to help you choose the right workflow for your needs.'
    ]
  },
  {
    title: 'User responsibility',
    points: [
      'You are responsible for the accuracy of the document and details you share with us.',
      'Please confirm the selected service and plan before payment or upload.'
    ]
  },
  {
    title: 'Payments and delivery',
    points: [
      'Payment steps and delivery instructions are shared through WhatsApp support.',
      'Delivery timing may vary by file size, queue, and service type.'
    ]
  },
  {
    title: 'Acceptable use',
    points: [
      'Use the service only for lawful and appropriate academic support purposes.',
      'Do not misuse the website, impersonate another person, or attempt to disrupt support operations.'
    ]
  },
  {
    title: 'Limitations',
    points: [
      'We aim to provide helpful guidance, but results and turnaround times may vary by case.',
      'Nothing on this page should be read as a promise of a specific institutional outcome.'
    ]
  }
]
</script>

<template>
  <main class="overflow-hidden bg-[#F8FAFC] pb-10 sm:pb-14">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_72%,#EFF6FF_100%)] px-4 pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-14 lg:pb-10">
      <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div>
      <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#DBEAFE] blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl">
        <p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-sm">
          Legal
        </p>

        <h1 class="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
          Privacy and terms for PlagExpert
        </h1>

        <p class="mt-5 max-w-3xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
          This page combines the core privacy policy and terms of service in one place so the legal information stays easy to find and simple to read.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#privacy-policy"
            class="inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8] sm:w-auto sm:px-8"
          >
            Privacy Policy
          </a>
          <a
            href="#terms-of-service"
            class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </section>

    <section id="privacy-policy" class="px-4 py-6 sm:py-10 lg:py-14">
      <div class="mx-auto max-w-7xl">
        <div class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
          <div class="flex flex-col gap-4 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                Privacy Policy
              </p>
              <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                How we handle your information
              </h2>
            </div>
            <p class="max-w-xl text-sm leading-6 text-[#64748B]">
              We keep the privacy guidance practical and limited to the support workflow used on this website.
            </p>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-2">
            <article
              v-for="section in privacyPolicySections"
              :key="section.title"
              class="rounded-[1.75rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6"
            >
              <h3 class="text-lg font-bold tracking-tight text-[#0F172A]">
                {{ section.title }}
              </h3>
              <ul class="mt-4 space-y-3 text-sm leading-7 text-[#334155] sm:text-base">
                <li
                  v-for="point in section.points"
                  :key="point"
                  class="flex items-start gap-3"
                >
                  <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2563EB]"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="terms-of-service" class="px-4 py-6 sm:py-10 lg:py-14">
      <div class="mx-auto max-w-7xl">
        <div class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
          <div class="flex flex-col gap-4 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">
                Terms of Service
              </p>
              <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Rules for using the service
              </h2>
            </div>
            <p class="max-w-xl text-sm leading-6 text-[#64748B]">
              These terms describe how the website and WhatsApp support flow are intended to work.
            </p>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-2">
            <article
              v-for="section in termsSections"
              :key="section.title"
              class="rounded-[1.75rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6"
            >
              <h3 class="text-lg font-bold tracking-tight text-[#0F172A]">
                {{ section.title }}
              </h3>
              <ul class="mt-4 space-y-3 text-sm leading-7 text-[#334155] sm:text-base">
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
      </div>
    </section>

    <section class="px-4 py-6 sm:py-10 lg:py-14">
      <div class="mx-auto max-w-7xl">
        <div class="rounded-[2rem] border border-[#E2E8F0] bg-[#0B1F3A] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBEAFE]">
                Need help?
              </p>
              <h2 class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Contact support if you need help reading the policy or terms.
              </h2>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <a
                  :href="getWhatsAppUrl()"
                class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"
              >
                Chat on WhatsApp
              </a>
              <NuxtLink
                to="/contact"
                class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto sm:px-8"
              >
                Contact Page
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

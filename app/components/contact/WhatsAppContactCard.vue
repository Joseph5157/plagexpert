<script setup>
const steps = [
  'Message us on WhatsApp',
  'Receive dashboard access or a guest upload link',
  'Upload document through the secure portal',
  'Report is processed',
  'Track and download the PDF report'
]
</script>

<template>
  <section class="px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12">
    <div class="mx-auto max-w-7xl">
      <div class="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-6 sm:p-8 lg:p-10">
            <p class="inline-flex rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              WhatsApp contact
            </p>

            <h2 class="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Get your secure portal upload link on WhatsApp
            </h2>

            <p class="mt-4 max-w-2xl text-base leading-7 text-body sm:text-lg">
              Our team will help you choose the right service, plan, payment process, portal access, upload instructions, and delivery method.
            </p>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                :href="getWhatsAppUrl()"
                class="inline-flex w-full items-center justify-center rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-whatsapp-hover sm:w-auto sm:px-8"
              >
                Start WhatsApp Chat
              </a>

              <p class="text-sm leading-6 text-muted">
                Upload happens through the secure portal, not on the marketing website.
              </p>
            </div>

            <p class="mt-4 text-sm font-semibold text-ink">
              WhatsApp: <a :href="getWhatsAppUrl()" class="text-whatsapp hover:underline">+91 63098 72817</a>
            </p>
          </div>

          <div class="border-t border-line bg-surface p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <img
              src="/illustrations/portal-workflow.jpg"
              alt="Workflow from WhatsApp support to secure upload, processing, and report download"
              class="w-full rounded-3xl border border-slate-200 bg-white shadow-xl"
            >

            <div class="flex items-center justify-between gap-4">
              <h3 class="mt-6 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                Simple 5-step process
              </h3>
              <span class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                WhatsApp guided
              </span>
            </div>

            <ol class="mt-6 space-y-3">
              <li
                v-for="(step, index) in steps"
                :key="step"
                class="flex items-start gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm"
              >
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {{ index + 1 }}
                </div>
                <div class="pt-0.5 text-sm font-semibold leading-6 text-ink sm:text-base">
                  {{ step }}
                </div>
              </li>
            </ol>

            <div class="mt-6 rounded-2xl border border-primary-200 bg-primary-50 p-4">
              <p class="text-sm font-semibold text-ink">
                Best for
              </p>
              <p class="mt-1 text-sm leading-6 text-body">
                Students, individuals, and departments that want a clear order flow with direct support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

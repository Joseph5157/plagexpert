<template>
  <section class="bg-white px-4 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

        <!-- Text content -->
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            How it works
          </p>

          <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            What is a non-repository plagiarism check?
          </h2>

          <div class="mt-5 space-y-4 text-base leading-8 text-[#334155]" data-speakable>
            <p>
              When your university runs a plagiarism check on your thesis through Turnitin or Drillbit, your document is permanently added to a global student repository. Every future student whose paper overlaps with yours will be flagged as a match — even if your original ideas are identical.
            </p>
            <p>
              A <strong class="text-[#0F172A]">non-repository scan</strong> gives you the same similarity check — against published journals, web sources, and indexed student papers — without adding your own document to any database. Your file is scanned, the report is generated, then your file is immediately deleted.
            </p>
            <p>
              This matters most when you want to check your plagiarism score <em>before</em> your official university submission. If you check through your university system, each draft you submit is permanently indexed — so your corrected final version may show your own earlier drafts as "matching sources."
            </p>
          </div>

          <NuxtLink
            to="/what-is-non-repository-plagiarism"
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:underline"
          >
            Learn more about non-repository checking →
          </NuxtLink>
        </div>

        <!-- Why it matters list -->
        <div class="rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8">
          <p class="text-sm font-bold uppercase tracking-[0.15em] text-[#64748B]">
            Why students choose non-repository checks
          </p>

          <ul class="mt-5 space-y-5">
            <li v-for="reason in reasons" :key="reason.title" class="flex gap-4">
              <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-lg">
                {{ reason.icon }}
              </div>
              <div>
                <p class="text-sm font-bold text-[#0F172A]">{{ reason.title }}</p>
                <p class="mt-1 text-sm leading-6 text-[#334155]">{{ reason.description }}</p>
              </div>
            </li>
          </ul>

          <div class="mt-7 border-t border-[#E2E8F0] pt-6">
            <p class="text-xs font-semibold uppercase tracking-widest text-[#64748B]">PlagExpert non-repository promise</p>
            <p class="mt-2 text-sm leading-6 text-[#334155]">
              Every report on PlagExpert uses non-repository scanning. Your document is scanned, your report is delivered, and your file is permanently deleted — starting at <strong class="text-[#0F172A]">₹99 per check</strong>.
            </p>
            <a
              :href="getWhatsAppUrl('Hi PlagExpert! I want to know more about non-repository plagiarism checking.')"
              class="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"
            >
              Get your report — ₹99
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    icon: '🔄',
    title: 'Revise without creating a permanent record',
    description: 'Check your draft multiple times before finalising. Each check stays private.'
  },
  {
    icon: '🎯',
    title: 'See your exact score before official submission',
    description: 'Know your similarity percentage before your university runs the official check.'
  },
  {
    icon: '🔒',
    title: 'Your research stays yours',
    description: 'Original ideas are not captured in a global database that other students match against.'
  },
  {
    icon: '⚡',
    title: 'Same accuracy, zero repository risk',
    description: 'Scans against the same journals and web sources as institutional tools — without the indexing.'
  }
]
</script>

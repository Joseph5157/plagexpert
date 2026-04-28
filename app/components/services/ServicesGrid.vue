<script setup>
const services = [
  {
    icon: '📄',
    title: 'Turnitin Similarity Check',
    description:
      'Get a similarity report that helps you review originality before submission.',
    features: ['Similarity report', 'PDF delivery', 'WhatsApp support']
  },
  {
    icon: '📘',
    title: 'Drillbit Report',
    description:
      'Review your document through a Drillbit-based workflow for academic checks.',
    features: ['Fast report', 'Student projects', 'Academic submissions']
  },
  {
    icon: '🤖',
    title: 'AI Detection',
    description:
      'Check content for AI-writing concerns before you finalize your document.',
    features: ['AI score support', 'Clear report', 'Quick delivery']
  },
  {
    icon: '✍️',
    title: 'Paraphrasing Support',
    description:
      'Improve clarity while preserving academic meaning and structure.',
    features: ['Clarity improvement', 'Academic tone', 'Better readability']
  },
  {
    icon: '📚',
    title: 'References',
    description:
      'Clean up citations and references for a more polished submission.',
    features: ['Reference cleanup', 'Formatting help', 'Journal support']
  },
  {
    icon: '🎓',
    title: 'Journal Ready',
    description:
      'Prepare a manuscript for journal submission requirements and formatting.',
    features: ['Submission support', 'Formatting review', 'Final document help']
  }
]
</script>

<template>
  <section class="bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          All services
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Practical support for academic documents
        </h2>

        <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
          Each service is focused on helping you prepare, review, and submit with confidence.
        </p>
      </div>

      <div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <article
          v-for="service in services"
          :key="service.title"
          class="flex h-full flex-col rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner">
            {{ service.icon }}
          </div>

          <h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
            {{ service.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[#334155]">
            {{ service.description }}
          </p>

          <ul class="mt-5 space-y-2 text-sm text-[#334155]">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex gap-2"
            >
              <span class="text-[#0D9488]">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <a
            href="#"
            class="mt-6 inline-flex w-full justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"
          >
            Get on WhatsApp
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

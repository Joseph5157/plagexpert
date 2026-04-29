<script setup>
const trustCards = [
  {
    icon: '🔒',
    title: 'Non-Repository Check',
    description: 'Your file is scanned privately without being added to a student repository or public database.'
  },
  {
    icon: '⚡',
    title: 'Fast Report Delivery',
    description: 'Most reports are processed within 10–30 minutes after upload, depending on file size.'
  },
  {
    icon: '🗑️',
    title: 'Secure File Handling',
    description: 'Your document is used only to generate your report and is automatically deleted after delivery.'
  },
  {
    icon: '✍️',
    title: 'Plagiarism Removal Support',
    description: 'Get expert help identifying matched content and improving originality before final submission.'
  },
  {
    icon: '🤖',
    title: 'AI Removal Support',
    description: 'Refine AI-like phrasing and make your writing read more naturally and authentically.'
  },
  {
    icon: '🎓',
    title: 'Thesis Writing',
    description: 'Get professional thesis writing support for research, structure, formatting, and academic presentation.'
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Flexible pricing for students, researchers, and academic professionals.'
  }
]
</script>

<template>
  <section class="bg-[#F8FAFC] px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Safe &amp; Confidential
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Private Plagiarism &amp; AI Reports Without Repository Risk
        </h2>

        <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
          Get your similarity and AI report quickly through a secure, non-repository process. Your document is checked confidentially and is never submitted to any public student database.
        </p>
      </div>

      <div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
        <div
          v-for="card in trustCards"
          :key="card.title"
          class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:p-7"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFDF5] text-2xl shadow-inner sm:h-12 sm:w-12">
            {{ card.icon }}
          </div>

          <h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
            {{ card.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[#334155]">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

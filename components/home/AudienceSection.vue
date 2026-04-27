<script setup>
const audiences = [
  { title: 'PhD Scholars', subtitle: 'Thesis checks', description: 'Ideal for thesis drafts, chapters, final submissions, and repeated similarity checks.', popular: 'Popular: Student plan', icon: '🎓' },
  { title: 'PG Students', subtitle: 'Project reports', description: 'Useful for project reports, dissertations, assignments, and final academic submissions.', popular: 'Popular: Standard plan', icon: '📘' },
  { title: 'Faculty & HODs', subtitle: 'Department checks', description: 'Suitable for checking multiple student files, department reports, and academic documents.', popular: 'Popular: Department plan', icon: '🏛️' },
  { title: 'Journal Authors', subtitle: 'Submission bundles', description: 'Helpful before journal submission, manuscript review, and reference cleanup.', popular: 'Popular: Similarity + references', icon: '📝' },
  { title: 'Departments', subtitle: 'Bulk report workflow', description: 'Best for colleges, departments, and institutions that need multiple report checks.', popular: 'Popular: Enterprise plan', icon: '🏢' }
]
</script>

<template>
  <section class="hidden bg-white px-4 py-16 sm:py-20 lg:py-24 md:block">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Who uses PlagExpert
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Built for students, scholars, authors, and departments
        </h2>

        <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
          From individual academic submissions to department-level workflows,
          choose the right report support for your needs.
        </p>
      </div>

      <div class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 sm:gap-6">
        <div
          v-for="audience in audiences"
          :key="audience.title"
          class="rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:p-6"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner sm:h-12 sm:w-12">
            {{ audience.icon }}
          </div>

          <h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
            {{ audience.title }}
          </h3>

          <p class="mt-1 text-sm font-semibold text-[#0D9488]">
            {{ audience.subtitle }}
          </p>

          <p class="mt-3 text-sm leading-7 text-[#334155]">
            {{ audience.description }}
          </p>

          <p class="mt-4 rounded-full bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#0D9488]">
            {{ audience.popular }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

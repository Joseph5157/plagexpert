<script setup>
const audiences = [
  { title: 'PhD Scholars', subtitle: 'Thesis checks', description: 'Ideal for thesis drafts, chapters, final submissions, and repeated similarity checks.', popular: 'Popular: Thesis Bundle', icon: '🎓' },
  { title: 'PG Students', subtitle: 'Project reports', description: 'Useful for project reports, dissertations, assignments, and final academic submissions.', popular: 'Popular: Thesis Bundle', icon: '📘' },
  { title: 'Faculty & HODs', subtitle: 'Department checks', description: 'Suitable for checking multiple student files, department reports, and academic documents.', popular: 'Popular: Custom Plan', icon: '🏛️' },
  { title: 'Journal Authors', subtitle: 'Submission bundles', description: 'Helpful before journal submission, manuscript review, and reference cleanup.', popular: 'Popular: Single File', icon: '📝' },
  { title: 'Departments', subtitle: 'Bulk report workflow', description: 'Best for colleges, departments, and institutions that need multiple report checks.', popular: 'Popular: Custom Plan', icon: '🏢' }
]
</script>

<template>
  <section class="hidden bg-white px-4 pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pt-6 lg:pb-14 md:block">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Who uses PlagExpert
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Built for students, scholars, authors, and departments
        </h2>

        <p class="mt-4 text-base leading-7 text-body md:text-lg">
          From individual academic submissions to department-level workflows,
          choose the right report support for your needs.
        </p>
      </div>

      <div class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 sm:gap-6">
        <div
          v-for="audience in audiences"
          :key="audience.title"
          class="rounded-[2rem] border border-line bg-surface p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:p-6"
        >
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-2xl shadow-inner sm:h-12 sm:w-12">
            {{ audience.icon }}
          </div>

          <h3 class="mt-5 text-lg font-semibold tracking-tight text-ink">
            {{ audience.title }}
          </h3>

          <p class="mt-1 text-sm font-semibold text-primary">
            {{ audience.subtitle }}
          </p>

          <p class="mt-3 text-base leading-7 text-body">
            {{ audience.description }}
          </p>

          <p class="mt-4 rounded-full bg-primary-50 px-3 py-2 text-xs font-semibold text-primary">
            {{ audience.popular }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

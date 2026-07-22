<script setup>
const points = [
  'Not submitted to any public or institutional repository',
  'Deleted automatically once your report is delivered',
  'Only you receive the report — never your professor'
]

const rows = [
  { icon: '📄', title: 'thesis-final-draft.docx', sub: 'Uploaded · 42 pages', status: 'Scanned', tone: 'ok' },
  { icon: '🛡️', title: 'Repository storage', sub: 'Never added to any database', status: 'Off', tone: 'ok' },
  { icon: '🗑️', title: 'File retention', sub: 'Removed after delivery', status: 'Auto-deleted', tone: 'del' }
]
</script>

<template>
  <section class="bg-surface px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Private by design
          </p>

          <h2 class="mt-3 max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Your document is never stored.
          </h2>

          <p class="mt-5 max-w-xl text-base leading-7 text-body md:text-lg">
            A non-repository scan checks your work for originality without adding it to any
            student database — so it can never be matched against your own paper later.
          </p>

          <ul class="mt-7 grid gap-3">
            <li
              v-for="point in points"
              :key="point"
              class="flex items-start gap-3 text-base leading-7 text-body"
            >
              <span class="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary">✓</span>
              <span>{{ point }}</span>
            </li>
          </ul>

          <NuxtLink
            to="/faq"
            class="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Read how it works
            <span class="transition group-hover:translate-x-1">→</span>
          </NuxtLink>
        </div>

        <div class="rounded-[2rem] border border-line bg-white p-6 shadow-[0_24px_50px_-36px_rgba(15,23,42,0.28)] sm:p-7">
          <div
            v-for="row in rows"
            :key="row.title"
            class="mb-3 flex items-center gap-3 rounded-2xl border border-line bg-white p-3.5 last:mb-0"
          >
            <span class="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-50 text-lg">
              {{ row.icon }}
            </span>
            <div class="flex-1">
              <p class="text-sm font-semibold text-ink">{{ row.title }}</p>
              <p class="text-xs text-muted">{{ row.sub }}</p>
            </div>
            <span
              :class="[
                'flex-none rounded-full px-2.5 py-1 text-xs font-bold',
                row.tone === 'del' ? 'bg-[#FFF1E6] text-[#C2570C]' : 'bg-primary-50 text-primary'
              ]"
            >
              {{ row.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

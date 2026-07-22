<script setup>
const rows = [
  { label: 'Number of files', singleFile: '1', thesisBundle: '15', customPlan: 'Flexible' },
  { label: 'Price', singleFile: '₹150', thesisBundle: '₹2,100', customPlan: 'Custom' },
  { label: 'Price per file', singleFile: '₹150', thesisBundle: '₹140', customPlan: 'Custom' },
  { label: 'AI detection report', singleFile: 'Yes', thesisBundle: 'Yes', customPlan: 'Yes' },
  { label: 'PDF report delivery', singleFile: 'Yes', thesisBundle: 'Yes', customPlan: 'Yes' },
  { label: 'WhatsApp support', singleFile: 'Yes', thesisBundle: 'Priority', customPlan: 'Priority' },
  { label: 'Best for', singleFile: 'One-off checks', thesisBundle: 'Thesis drafts', customPlan: 'Departments & institutions' },
  { label: 'Bulk workflow', singleFile: 'No', thesisBundle: 'Yes', customPlan: 'Yes' }
]
</script>

<template>
  <section class="bg-surface px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Compare plans
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Simple comparison at a glance
        </h2>
      </div>

      <div class="mt-6 space-y-4 md:hidden">
        <article
          v-for="row in rows"
          :key="row.label"
          class="rounded-[1.75rem] border border-line bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
        >
          <h3 class="text-base font-semibold text-ink">
            {{ row.label }}
          </h3>

          <div class="mt-4 grid grid-cols-3 gap-3 text-sm text-body">
            <div>
              <p class="font-semibold text-navy">Single File</p>
              <p class="mt-1">{{ row.singleFile }}</p>
            </div>
            <div>
              <p class="font-semibold text-navy">Thesis Bundle</p>
              <p class="mt-1">{{ row.thesisBundle }}</p>
            </div>
            <div>
              <p class="font-semibold text-navy">Custom Plan</p>
              <p class="mt-1">{{ row.customPlan }}</p>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-6 hidden overflow-hidden rounded-[2rem] border border-line bg-white md:block">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-line text-left text-sm">
            <thead class="bg-surface text-ink">
              <tr>
                <th class="px-5 py-4 font-semibold">Comparison</th>
                <th class="px-5 py-4 font-semibold">Single File</th>
                <th class="px-5 py-4 font-semibold">Thesis Bundle</th>
                <th class="px-5 py-4 font-semibold">Custom Plan</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-line text-body">
              <tr v-for="row in rows" :key="row.label">
                <td class="px-5 py-4 font-semibold text-ink">{{ row.label }}</td>
                <td class="px-5 py-4">{{ row.singleFile }}</td>
                <td class="px-5 py-4">{{ row.thesisBundle }}</td>
                <td class="px-5 py-4">{{ row.customPlan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

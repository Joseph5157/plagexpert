<script setup>
const rows = [
  { label: 'Number of files', singleFile: '1', basicPlan: '5', standardPlan: '15', monthlyPlan: '30' },
  { label: 'Price per file', singleFile: '₹99', basicPlan: '₹90', standardPlan: '₹85', monthlyPlan: '₹80' },
  { label: 'AI detection report', singleFile: 'Yes', basicPlan: 'Yes', standardPlan: 'Yes', monthlyPlan: 'Yes' },
  { label: 'PDF report delivery', singleFile: 'Yes', basicPlan: 'Yes', standardPlan: 'Yes', monthlyPlan: 'Yes' },
  { label: 'WhatsApp support', singleFile: 'Yes', basicPlan: 'Yes', standardPlan: 'Priority', monthlyPlan: 'Priority' },
  { label: 'Best for', singleFile: 'One-off checks', basicPlan: 'Small batches', standardPlan: 'Thesis drafts', monthlyPlan: 'Bulk submissions' },
  { label: 'Bulk workflow', singleFile: 'No', basicPlan: 'Limited', standardPlan: 'Some', monthlyPlan: 'Yes' }
]
</script>

<template>
  <section class="bg-[#F8FAFC] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Compare plans
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Simple comparison at a glance
        </h2>
      </div>

      <div class="mt-6 space-y-4 md:hidden">
        <article
          v-for="row in rows"
          :key="row.label"
          class="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
        >
          <h3 class="text-base font-bold text-[#0F172A]">
            {{ row.label }}
          </h3>

          <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-[#334155]">
            <div>
              <p class="font-semibold text-[#0B1F3A]">Single File</p>
              <p class="mt-1">{{ row.singleFile }}</p>
            </div>
            <div>
              <p class="font-semibold text-[#0B1F3A]">Basic Plan</p>
              <p class="mt-1">{{ row.basicPlan }}</p>
            </div>
            <div>
              <p class="font-semibold text-[#0B1F3A]">Standard Plan</p>
              <p class="mt-1">{{ row.standardPlan }}</p>
            </div>
            <div>
              <p class="font-semibold text-[#0B1F3A]">Monthly Plan</p>
              <p class="mt-1">{{ row.monthlyPlan }}</p>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-6 hidden overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white md:block">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-[#E2E8F0] text-left text-sm">
            <thead class="bg-[#F8FAFC] text-[#0F172A]">
              <tr>
                <th class="px-5 py-4 font-semibold">Comparison</th>
                <th class="px-5 py-4 font-semibold">Single File</th>
                <th class="px-5 py-4 font-semibold">Basic Plan</th>
                <th class="px-5 py-4 font-semibold">Standard Plan</th>
                <th class="px-5 py-4 font-semibold">Monthly Plan</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E2E8F0] text-[#334155]">
              <tr v-for="row in rows" :key="row.label">
                <td class="px-5 py-4 font-semibold text-[#0F172A]">{{ row.label }}</td>
                <td class="px-5 py-4">{{ row.singleFile }}</td>
                <td class="px-5 py-4">{{ row.basicPlan }}</td>
                <td class="px-5 py-4">{{ row.standardPlan }}</td>
                <td class="px-5 py-4">{{ row.monthlyPlan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

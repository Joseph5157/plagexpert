<script setup>
const rows = [
  { label: 'Number of files', basic: '1', standard: '5', student: '15', department: '30', enterprise: '50+' },
  { label: 'PDF report delivery', basic: 'Yes', standard: 'Yes', student: 'Yes', department: 'Yes', enterprise: 'Yes' },
  { label: 'WhatsApp support', basic: 'Yes', standard: 'Yes', student: 'Priority', department: 'Priority', enterprise: 'Priority' },
  { label: 'Best for', basic: 'One-off checks', standard: 'Small batches', student: 'Thesis drafts', department: 'Departments', enterprise: 'Institutions' },
  { label: 'Bulk workflow', basic: 'No', standard: 'Limited', student: 'Some', department: 'Yes', enterprise: 'Yes' },
  { label: 'Custom pricing', basic: 'No', standard: 'No', student: 'No', department: 'No', enterprise: 'Yes' }
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
              <p class="font-semibold text-[#0B1F3A]">Basic</p>
              <p class="mt-1">{{ row.basic }}</p>
            </div>
            <div>
              <p class="font-semibold text-[#0B1F3A]">Standard</p>
              <p class="mt-1">{{ row.standard }}</p>
            </div>
            <div>
              <p class="font-semibold text-[#0B1F3A]">Student</p>
              <p class="mt-1">{{ row.student }}</p>
            </div>
            <div>
              <p class="font-semibold text-[#0B1F3A]">Department</p>
              <p class="mt-1">{{ row.department }}</p>
            </div>
            <div class="col-span-2">
              <p class="font-semibold text-[#0B1F3A]">Enterprise</p>
              <p class="mt-1">{{ row.enterprise }}</p>
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
                <th class="px-5 py-4 font-semibold">Basic</th>
                <th class="px-5 py-4 font-semibold">Standard</th>
                <th class="px-5 py-4 font-semibold">Student</th>
                <th class="px-5 py-4 font-semibold">Department</th>
                <th class="px-5 py-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E2E8F0] text-[#334155]">
              <tr v-for="row in rows" :key="row.label">
                <td class="px-5 py-4 font-semibold text-[#0F172A]">{{ row.label }}</td>
                <td class="px-5 py-4">{{ row.basic }}</td>
                <td class="px-5 py-4">{{ row.standard }}</td>
                <td class="px-5 py-4">{{ row.student }}</td>
                <td class="px-5 py-4">{{ row.department }}</td>
                <td class="px-5 py-4">{{ row.enterprise }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

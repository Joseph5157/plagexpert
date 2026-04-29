<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="px-4 pt-4 pb-8 sm:pt-4 sm:pb-10 lg:pt-6 lg:pb-12">
    <div class="mx-auto max-w-4xl space-y-8">
      <div
        v-for="section in sections"
        :key="section.category"
        class="space-y-4"
      >
        <div class="text-left">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--plagexpert-primary-blue)]">
            {{ section.category }}
          </p>
        </div>

        <div class="space-y-3">
          <details
            v-for="item in section.items"
            :key="item.question"
            class="group rounded-[1.5rem] border border-[var(--plagexpert-border)] bg-white shadow-[0_18px_50px_rgba(16,24,40,0.05)]"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 sm:px-6">
              <h3 class="text-left text-base font-semibold text-[var(--plagexpert-text-main)] sm:text-lg">
                {{ item.question }}
              </h3>

              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--plagexpert-soft-blue)] text-2xl font-light text-[var(--plagexpert-primary-blue)] transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div class="px-5 pb-5 pt-0 sm:px-6">
              <div class="border-t border-[var(--plagexpert-border)] pt-4 text-sm leading-7 text-[var(--plagexpert-text-body)] sm:text-base sm:leading-8">
                {{ item.answer }}
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

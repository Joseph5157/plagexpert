<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="px-4 pt-4 pb-6 sm:pt-6 sm:pb-8">
    <div class="mx-auto max-w-4xl">
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="[
            'rounded-full border px-4 py-2 text-sm font-semibold transition sm:px-5',
            modelValue === category
              ? 'border-[var(--plagexpert-primary-blue)] bg-[var(--plagexpert-soft-blue)] text-[var(--plagexpert-primary-blue)]'
              : 'border-[var(--plagexpert-border)] bg-white text-[var(--plagexpert-text-body)] hover:border-[var(--plagexpert-primary-blue)] hover:text-[var(--plagexpert-primary-blue)]'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </section>
</template>

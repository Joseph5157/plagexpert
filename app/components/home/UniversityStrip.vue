<template>
  <section class="border-y border-line bg-surface px-4 py-5 sm:py-6">
    <div class="mx-auto max-w-7xl">
      <p class="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
        Trusted by students &amp; researchers from
      </p>

      <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8">
        <span
          v-for="uni in universities"
          :key="uni"
          class="text-xs font-semibold text-muted sm:text-sm"
        >
          {{ uni }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const universities = [
  'IIT Madras',
  'Anna University',
  'VTU',
  'Amity University',
  'SRM University',
  'VIT Vellore',
  'Manipal University',
  'JNTU Hyderabad',
  'Osmania University',
  'Saveetha University',
  'BITS Pilani',
  'Andhra University',
  'Jamia Millia',
  'Panjab University',
  'IGNOU',
]
</script>

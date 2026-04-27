<template>
  <img
    src="/brand/plagexpert-logo.svg"
    alt="PlagExpert"
    :class="compact ? 'h-10 w-auto sm:h-11' : 'h-12 w-auto sm:h-14'"
    loading="eager"
    decoding="async"
  >
</template>

<script setup>
defineProps({
  compact: {
    type: Boolean,
    default: false
  }
})
</script>

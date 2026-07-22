<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | whatsapp | ghost
  size: { type: String, default: 'md' }, // sm | md | lg
  href: { type: String, default: null },
  to: { type: [String, Object], default: null },
  block: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
})

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-center transition duration-200 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ' +
  'disabled:cursor-not-allowed disabled:opacity-60'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-sm sm:text-base',
}

const variants = {
  primary:
    'bg-primary text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] hover:bg-primary-hover active:translate-y-px',
  secondary:
    'border border-line bg-white text-ink shadow-sm hover:border-primary hover:bg-primary-50 active:translate-y-px',
  whatsapp:
    'bg-whatsapp text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] hover:bg-whatsapp-hover active:translate-y-px',
  ghost:
    'text-primary hover:bg-primary-50',
}

const classes = computed(() => [
  base,
  sizes[props.size] || sizes.md,
  variants[props.variant] || variants.primary,
  props.block ? 'w-full' : '',
])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </NuxtLink>
  <a v-else-if="href" :href="href" :class="classes">
    <slot />
  </a>
  <button v-else :type="type" :class="classes">
    <slot />
  </button>
</template>

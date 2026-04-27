<script setup>
import ContactHero from '~/components/contact/ContactHero.vue'
import WhatsAppContactCard from '~/components/contact/WhatsAppContactCard.vue'
import ContactOptions from '~/components/contact/ContactOptions.vue'
import ContactCta from '~/components/contact/ContactCta.vue'

useHead({
  title: 'Contact PlagExpert',
  meta: [
    {
      name: 'description',
      content:
        'Contact PlagExpert support on WhatsApp for help with report services, plan selection, payments, and secure portal access.'
    }
  ]
})
</script>

<template>
  <main class="overflow-hidden bg-[#F8FAFC] pb-8 sm:pb-12">
    <ContactHero />
    <WhatsAppContactCard />
    <ContactOptions />
    <ContactCta />
  </main>
</template>

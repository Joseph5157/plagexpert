<script setup>
const categories = [
  'Document Safety',
  'Delivery',
  'Reports',
  'AI Detection',
  'Pricing',
  'WhatsApp Process',
  'Portal Access'
]

const sections = [
  {
    category: 'Document Safety',
    items: [
      {
        question: 'Do you store my document?',
        answer: 'Documents are processed only for the report workflow and deleted after delivery.'
      },
      {
        question: 'Is my document added to any public repository?',
        answer: 'The workflow is designed for non-repository report handling.'
      },
      {
        question: 'Who receives the report?',
        answer: 'Only you receive the report through the selected delivery method.'
      }
    ]
  },
  {
    category: 'Delivery',
    items: [
      {
        question: 'How fast is delivery?',
        answer: 'Most reports are delivered within 10-30 minutes depending on file size and queue.'
      },
      {
        question: 'Can I get urgent delivery?',
        answer: 'Message us on WhatsApp and the support team will confirm the current delivery time.'
      }
    ]
  },
  {
    category: 'Reports',
    items: [
      {
        question: 'What type of report will I receive?',
        answer: 'You will receive a PDF report based on the service and plan selected.'
      },
      {
        question: 'Which service should I choose?',
        answer: 'Choose based on your university, college, journal, or department requirement. If unsure, message us on WhatsApp.'
      }
    ]
  },
  {
    category: 'AI Detection',
    items: [
      {
        question: 'Is AI detection included?',
        answer: 'AI detection support is available for selected report workflows and plans.'
      },
      {
        question: 'Can you check AI-written content?',
        answer: 'Yes, AI detection-related support can be selected where available.'
      }
    ]
  },
  {
    category: 'Pricing',
    items: [
      {
        question: 'Which plan is best for thesis work?',
        answer: 'The Student plan is usually best for repeated checks and thesis drafts.'
      },
      {
        question: 'Can departments get custom pricing?',
        answer: 'Yes, departments and institutions can contact support for custom pricing.'
      }
    ]
  },
  {
    category: 'WhatsApp Process',
    items: [
      {
        question: 'How do I submit my file?',
        answer: 'Message us on WhatsApp, choose a plan, receive portal access or a guest upload link, and upload through the secure portal.'
      },
      {
        question: 'How do I pay?',
        answer: 'Payment instructions are shared through WhatsApp during the order process.'
      }
    ]
  },
  {
    category: 'Portal Access',
    items: [
      {
        question: 'Where do I upload my document?',
        answer: 'Documents are uploaded through the secure PlagExpert portal or a guest upload link.'
      },
      {
        question: 'Can I track my report?',
        answer: 'Yes, clients can track and download results through the portal.'
      }
    ]
  }
]

</script>

<template>
  <main class="overflow-hidden bg-[var(--plagexpert-bg)] pb-8 sm:pb-12">
    <FaqHero />
    <FaqCategoryTabs
      :categories="categories"
      :model-value="categories[0]"
    />
    <FaqList :sections="sections" />
    <FaqCta />
  </main>
</template>

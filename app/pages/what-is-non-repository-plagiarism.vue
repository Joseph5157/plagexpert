<script setup lang="ts">
useSeoMeta({
  title: 'What is Non-Repository Plagiarism Checking? | PlagExpert',
  description: 'A complete guide for Indian students: what non-repository plagiarism scanning means, why it matters for thesis submission, and how it differs from checking through your university.',
  ogTitle: 'What is Non-Repository Plagiarism Checking?',
  ogDescription: 'Non-repository scanning checks your document for plagiarism without adding it to any student database. Essential for Indian thesis students.',
  ogImage: '/illustrations/hero-student-portal.png',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'What is Non-Repository Plagiarism Checking? A Complete Guide for Indian Students',
        description: 'Non-repository scanning checks your document for plagiarism without adding it to any student database.',
        datePublished: '2026-01-15',
        dateModified: '2026-06-17',
        author: { '@type': 'Organization', name: 'PlagExpert', url: 'https://plagexpert.in' },
        publisher: {
          '@type': 'Organization',
          name: 'PlagExpert',
          url: 'https://plagexpert.in',
          logo: { '@type': 'ImageObject', url: 'https://plagexpert.in/brand/plagexpert-logo.png' }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://plagexpert.in/what-is-non-repository-plagiarism'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a non-repository plagiarism check?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A non-repository plagiarism check scans your document against academic journals, websites, and existing student papers — but does not add your own document to any database. Your file is checked and then immediately deleted.'
            }
          },
          {
            '@type': 'Question',
            name: 'How is non-repository checking different from submitting through my university?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When you submit through your university\'s Turnitin portal, your document is permanently added to a global student repository. With a non-repository check, your document is scanned and then deleted — it is never indexed. Both give you a similarity score, but only one leaves a permanent record.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will a non-repository check show the same percentage as my university check?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The score may differ slightly based on database version and settings, but a non-repository check gives an accurate indication of your similarity percentage against published sources and indexed student papers.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is non-repository checking legitimate for Indian universities?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Non-repository checks are widely used for pre-submission review by PhD scholars, M.Phil. students, and research scholars across India. Many supervisors recommend checking externally before the official institutional submission required under UGC Regulations 2018.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I check my thesis multiple times without it affecting my score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. With non-repository checking, each check is independent and does not index your document. You can check multiple drafts as many times as needed without creating a permanent record.'
            }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['[data-speakable]']
        },
        url: 'https://plagexpert.in/what-is-non-repository-plagiarism'
      })
    }
  ]
})

const comparisonRows = [
  { feature: 'Document indexed?', university: 'Yes — permanently', plagexpert: 'No — deleted after' },
  { feature: 'Can recheck drafts?', university: 'Each check creates a record', plagexpert: 'Check as many times as needed' },
  { feature: 'Similarity score accuracy', university: 'Institutional database', plagexpert: 'Same sources, no indexing' },
  { feature: 'AI detection included?', university: 'Depends on plan', plagexpert: 'Yes, included' },
  { feature: 'Report delivery', university: 'Variable', plagexpert: '10–30 minutes' },
  { feature: 'Price', university: 'Free via university', plagexpert: 'From ₹99' },
]

const steps = [
  'Choose your plan and complete payment on WhatsApp',
  'Receive a secure portal link or guest upload link',
  'Upload your document through the secure portal',
  'The system scans against journals, websites, and indexed student papers',
  'Your PDF report (similarity + AI detection) is generated and delivered',
  'Your document is permanently deleted — nothing is stored or indexed',
]

const faqs = [
  {
    q: 'Will a non-repository check show the same percentage as my university check?',
    a: 'The score may differ slightly based on database version and institutional settings. A non-repository check gives an accurate indication of your similarity percentage against published sources. In most cases the scores are very close.'
  },
  {
    q: 'Can I use a non-repository report to submit to my university?',
    a: 'Most universities require their own institutional submission for the final check under UGC Regulations 2018. Non-repository reports are widely used for pre-submission review, draft improvement, and checking before your supervisor review.'
  },
  {
    q: 'Is the process confidential?',
    a: 'Yes. Your document is not shared with your university, supervisor, or any third party. It is deleted after your report is generated. Only you receive the report.'
  },
  {
    q: 'How many times can I check my thesis?',
    a: 'As many times as you need. Each check is independent and does not affect future checks. Multi-file plans start at ₹449 for 5 checks, which is useful for multiple thesis chapters or revisions.'
  }
]
</script>

<template>
  <main class="overflow-hidden bg-[#F8FAFC]">

    <!-- Hero -->
    <section class="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#EFF6FF_100%)] px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl" />
      <div class="mx-auto max-w-4xl">
        <div class="mb-5 flex items-center gap-3">
          <NuxtLink to="/" class="text-sm text-[#2563EB] hover:underline">← Home</NuxtLink>
          <span class="text-[#CBD5E1]">/</span>
          <span class="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">Guide</span>
        </div>

        <h1 class="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
          What is Non-Repository Plagiarism Checking?
        </h1>

        <p class="mt-2 text-sm text-[#64748B]">A complete guide for Indian students</p>

        <p class="mt-5 max-w-3xl text-base leading-8 text-[#334155] sm:text-lg" data-speakable>
          A non-repository plagiarism check scans your document against academic journals, websites, and indexed student papers — <strong>without adding your document to any database</strong>. You get the same similarity score as an institutional check, but your file is deleted immediately after your report is generated. Nothing is stored. Nothing is indexed.
        </p>

        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            :href="getWhatsAppUrl('Hi PlagExpert! I want a non-repository plagiarism check for my thesis.')"
            class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto"
          >
            Get your report — ₹99
          </a>
          <NuxtLink
            to="/pricing"
            class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-7 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto"
          >
            View all plans
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="bg-white px-4 py-10 sm:py-14">
      <div class="mx-auto max-w-3xl">
        <article>

          <h2 class="mb-4 text-2xl font-bold tracking-tight text-[#0F172A]">
            What does "repository" mean in plagiarism checking?
          </h2>

          <p class="mt-4 text-base leading-8 text-[#334155]" data-speakable>
            A <strong>repository</strong> is a database of student submissions that plagiarism tools like Turnitin use to check for matching content between students. When a university submits your thesis through their institutional account, your paper enters this global repository permanently. Every thesis submitted anywhere in the world after yours can now be matched against your content.
          </p>

          <p class="mt-4 text-base leading-8 text-[#334155]">
            For students wanting a pre-submission check, this creates a serious problem: if you check through your own university's system, each draft you submit becomes a permanent record. When you submit your corrected final version, the system may show your own earlier drafts as a "matching source" and inflate your similarity score.
          </p>

          <h2 class="mt-10 mb-4 text-2xl font-bold tracking-tight text-[#0F172A]">
            Why Indian students specifically need non-repository checks
          </h2>

          <p class="mt-4 text-base leading-8 text-[#334155]">
            Under UGC Regulations 2018 on Promotion of Academic Integrity, every PhD, M.Phil., and research thesis must be checked for plagiarism before submission. This has created a large demand for pre-submission checks — students want to see their score, reduce matched content, and resubmit a clean version before the official institutional check.
          </p>

          <p class="mt-4 text-base leading-8 text-[#334155]">
            If you run this pre-submission check through your university's Turnitin portal, your draft is indexed permanently. When you later submit the corrected version, the tool may flag your own draft as a matching source. A non-repository check avoids this entirely — scan as many drafts as you need, none of them are indexed.
          </p>

          <!-- Comparison table -->
          <div class="mt-8 overflow-hidden rounded-[1.5rem] border border-[#E2E8F0]">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-[#F8FAFC]">
                  <th class="px-5 py-3 text-left font-bold text-[#0F172A]">Feature</th>
                  <th class="px-5 py-3 text-center font-bold text-[#334155]">University Check</th>
                  <th class="px-5 py-3 text-center font-bold text-[#2563EB]">PlagExpert</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E8F0]">
                <tr v-for="row in comparisonRows" :key="row.feature">
                  <td class="px-5 py-3 font-medium text-[#0F172A]">{{ row.feature }}</td>
                  <td class="px-5 py-3 text-center text-[#64748B]">{{ row.university }}</td>
                  <td class="px-5 py-3 text-center font-semibold text-[#16A34A]">{{ row.plagexpert }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 class="mt-10 mb-4 text-2xl font-bold tracking-tight text-[#0F172A]">
            How non-repository checking works at PlagExpert
          </h2>

          <ul class="mt-4 space-y-3">
            <li v-for="(step, i) in steps" :key="i" class="flex gap-3 text-base leading-7 text-[#334155]">
              <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-xs font-bold text-[#2563EB]">{{ i + 1 }}</span>
              <span>{{ step }}</span>
            </li>
          </ul>

          <h2 class="mt-10 mb-4 text-2xl font-bold tracking-tight text-[#0F172A]">
            Is non-repository checking legitimate?
          </h2>

          <p class="mt-4 text-base leading-8 text-[#334155]">
            Yes. Non-repository plagiarism checks are widely used for pre-submission review by PhD scholars, M.Phil. students, and research scholars across India. Many supervisors recommend checking externally first before the official submission required under UGC Regulations 2018. PlagExpert provides non-repository reports for students at IIT Madras, Anna University, VTU, Amity University, SRM, VIT Vellore, Manipal, JNTU, Osmania University, BITS Pilani, and hundreds of other colleges across India. Reports start at ₹99 for a single check, with delivery in 10–30 minutes.
          </p>

          <!-- CTA box -->
          <div class="mt-10 flex flex-col gap-4 rounded-[2rem] border border-[#BFDBFE] bg-[#EFF6FF] p-6 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-base font-semibold text-[#0F172A]">Ready to check your thesis without repository risk?</p>
            <div class="flex flex-shrink-0 gap-3">
              <a
                :href="getWhatsAppUrl('Hi PlagExpert! I want a non-repository plagiarism check.')"
                class="inline-flex items-center rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D]"
              >
                WhatsApp
              </a>
              <NuxtLink
                to="/pricing"
                class="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition hover:border-[#2563EB] hover:bg-white"
              >
                View Plans
              </NuxtLink>
            </div>
          </div>

          <!-- FAQ section -->
          <h2 class="mb-6 mt-12 text-2xl font-bold tracking-tight text-[#0F172A]">
            Frequently asked questions
          </h2>

          <div class="space-y-4">
            <details v-for="faq in faqs" :key="faq.q" class="group rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC]">
              <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                <span class="text-sm font-semibold text-[#0F172A] sm:text-base">{{ faq.q }}</span>
                <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-xl font-light text-[#2563EB] transition group-open:rotate-45">+</span>
              </summary>
              <div class="border-t border-[#E2E8F0] px-5 pb-4 pt-3 text-sm leading-7 text-[#334155]">
                {{ faq.a }}
              </div>
            </details>
          </div>

          <!-- Internal links -->
          <div class="mt-12 border-t border-[#E2E8F0] pt-8">
            <p class="mb-4 text-sm font-bold uppercase tracking-widest text-[#64748B]">Related reading</p>
            <div class="grid gap-3 sm:grid-cols-2">
              <NuxtLink
                to="/blog/what-is-non-repository-plagiarism-check"
                class="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition hover:border-[#2563EB]/30 hover:bg-[#EFF6FF]/30"
              >
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#0D9488]">Blog</span>
                <p class="mt-1 text-sm font-semibold text-[#0F172A] transition-colors group-hover:text-[#2563EB]">What is non-repository plagiarism checking?</p>
              </NuxtLink>
              <NuxtLink
                to="/blog/ugc-plagiarism-norms-india-2018"
                class="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition hover:border-[#2563EB]/30 hover:bg-[#EFF6FF]/30"
              >
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#0D9488]">Blog</span>
                <p class="mt-1 text-sm font-semibold text-[#0F172A] transition-colors group-hover:text-[#2563EB]">UGC plagiarism norms India 2018</p>
              </NuxtLink>
              <NuxtLink
                to="/blog/how-to-check-plagiarism-for-thesis-india"
                class="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition hover:border-[#2563EB]/30 hover:bg-[#EFF6FF]/30"
              >
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#0D9488]">Blog</span>
                <p class="mt-1 text-sm font-semibold text-[#0F172A] transition-colors group-hover:text-[#2563EB]">How to check plagiarism for thesis in India</p>
              </NuxtLink>
              <NuxtLink
                to="/pricing"
                class="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition hover:border-[#2563EB]/30 hover:bg-[#EFF6FF]/30"
              >
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#0D9488]">Pricing</span>
                <p class="mt-1 text-sm font-semibold text-[#0F172A] transition-colors group-hover:text-[#2563EB]">View PlagExpert plans — from ₹99</p>
              </NuxtLink>
            </div>
          </div>

        </article>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { getBlogPost, blogPosts } from '~/utils/blogPosts'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const post = getBlogPost(slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

useSeoMeta({
  title: post.metaTitle,
  description: post.metaDescription,
  ogTitle: post.metaTitle,
  ogDescription: post.metaDescription,
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
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Organization',
          name: 'PlagExpert',
          url: 'https://plagexpert.in'
        },
        publisher: {
          '@type': 'Organization',
          name: 'PlagExpert',
          url: 'https://plagexpert.in',
          logo: {
            '@type': 'ImageObject',
            url: 'https://plagexpert.in/brand/plagexpert-logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://plagexpert.in/blog/${post.slug}`
        }
      })
    }
  ]
})

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)
</script>

<template>
  <main>
    <!-- Article Header -->
    <section class="bg-[linear-gradient(180deg,#F8FAFC_0%,#EFF6FF_100%)] px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div class="mx-auto max-w-3xl">
        <div class="flex items-center gap-3 mb-5">
          <NuxtLink to="/blog" class="text-sm text-primary hover:underline">← Blog</NuxtLink>
          <span class="text-[#CBD5E1]">/</span>
          <span class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary">{{ post.category }}</span>
        </div>

        <h1 class="text-3xl font-semibold tracking-tight text-ink sm:text-4xl leading-tight">
          {{ post.title }}
        </h1>

        <div class="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>{{ formatDate(post.date) }}</span>
          <span>·</span>
          <span>{{ post.readTime }}</span>
          <span>·</span>
          <span>PlagExpert</span>
        </div>
      </div>
    </section>

    <!-- Article Body -->
    <section class="bg-white px-4 py-10 sm:py-14">
      <div class="mx-auto max-w-3xl">
        <article class="prose prose-slate max-w-none">
          <template v-for="(section, i) in post.sections" :key="i">

            <h2
              v-if="section.type === 'heading'"
              class="mt-10 mb-4 text-2xl font-bold tracking-tight text-ink"
            >
              {{ section.text }}
            </h2>

            <h3
              v-else-if="section.type === 'subheading'"
              class="mt-6 mb-3 text-xl font-bold text-ink"
            >
              {{ section.text }}
            </h3>

            <p
              v-else-if="section.type === 'paragraph'"
              class="mt-4 text-base leading-8 text-body"
            >
              {{ section.text }}
            </p>

            <ul
              v-else-if="section.type === 'list'"
              class="mt-4 space-y-3"
            >
              <li
                v-for="item in section.items"
                :key="item"
                class="flex gap-3 text-base leading-7 text-body"
              >
                <span class="mt-1 text-primary flex-shrink-0">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <!-- CTA Box -->
            <div
              v-else-if="section.type === 'cta'"
              class="mt-10 rounded-[2rem] bg-primary-50 border border-primary-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <p class="text-base font-semibold text-ink">{{ section.text }}</p>
              <div class="flex gap-3 flex-shrink-0">
                <a
                  :href="getWhatsAppUrl()"
                  class="inline-flex items-center rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(22,163,74,0.22)] transition hover:bg-whatsapp-hover"
                >
                  WhatsApp
                </a>
                <NuxtLink
                  to="/pricing"
                  class="inline-flex items-center rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-primary hover:bg-white"
                >
                  View Plans
                </NuxtLink>
              </div>
            </div>

          </template>
        </article>

        <!-- Divider -->
        <hr class="mt-14 border-line">

        <!-- Related Articles -->
        <div class="mt-10">
          <p class="text-sm font-bold uppercase tracking-widest text-muted mb-6">Related Articles</p>
          <div class="grid gap-4 sm:grid-cols-3">
            <NuxtLink
              v-for="related in relatedPosts"
              :key="related.slug"
              :to="`/blog/${related.slug}`"
              class="group rounded-2xl border border-line bg-surface p-4 transition hover:border-primary/30 hover:bg-primary-50/30"
            >
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary">{{ related.category }}</span>
              <p class="mt-2 text-sm font-semibold text-ink group-hover:text-primary leading-snug transition-colors">{{ related.title }}</p>
              <p class="mt-1 text-xs text-[#94A3B8]">{{ related.readTime }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

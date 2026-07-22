<script setup>
import { blogPosts } from '~/utils/blogPosts'

useSeoMeta({
  title: 'Blog — Plagiarism & AI Detection Guides for Students | PlagExpert',
  description: 'Free guides for Indian students on plagiarism checks, AI detection, UGC norms, thesis submission tips, and more. Written for IIT, VTU, Anna University, SRM, and Amity students.',
  ogTitle: 'PlagExpert Blog — Academic Plagiarism & AI Detection Guides',
  ogDescription: 'Step-by-step guides on plagiarism reports, non-repository scans, UGC norms, and AI detection for Indian university students.',
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <main>
    <section class="bg-[linear-gradient(180deg,#F8FAFC_0%,#EFF6FF_100%)] px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Blog</p>
        <h1 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Plagiarism & AI Detection Guides
        </h1>
        <p class="mt-4 text-base leading-7 text-body md:text-lg">
          Free resources for students and researchers across IIT, VTU, Anna University, Amity, SRM, VIT and more.
        </p>
      </div>
    </section>

    <section class="bg-white px-4 py-10 sm:py-14">
      <div class="mx-auto max-w-5xl">
        <div class="grid gap-6 sm:grid-cols-2">
          <NuxtLink
            v-for="post in blogPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group flex flex-col rounded-[2rem] border border-line bg-surface p-6 shadow-[0_18px_50px_rgba(16,24,40,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.10)] hover:border-primary/30"
          >
            <div class="flex items-center gap-2 mb-4">
              <span class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary">
                {{ post.category }}
              </span>
              <span class="text-xs text-[#94A3B8]">{{ post.readTime }}</span>
            </div>

            <h2 class="text-lg font-semibold tracking-tight text-ink group-hover:text-primary transition-colors leading-snug">
              {{ post.title }}
            </h2>

            <p class="mt-3 text-base leading-7 text-body flex-1">
              {{ post.excerpt }}
            </p>

            <div class="mt-4 flex items-center justify-between">
              <span class="text-xs text-[#94A3B8]">{{ formatDate(post.date) }}</span>
              <span class="text-sm font-semibold text-primary group-hover:underline">Read →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

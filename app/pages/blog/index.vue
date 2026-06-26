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
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">Blog</p>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Plagiarism & AI Detection Guides
        </h1>
        <p class="mt-4 text-base leading-7 text-[#334155] md:text-lg">
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
            class="group flex flex-col rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_18px_50px_rgba(16,24,40,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.10)] hover:border-[#2563EB]/30"
          >
            <div class="flex items-center gap-2 mb-4">
              <span class="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
                {{ post.category }}
              </span>
              <span class="text-xs text-[#64748B]">{{ post.readTime }}</span>
            </div>

            <h2 class="text-lg font-bold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
              {{ post.title }}
            </h2>

            <p class="mt-3 text-sm leading-7 text-[#334155] flex-1">
              {{ post.excerpt }}
            </p>

            <div class="mt-4 flex items-center justify-between">
              <span class="text-xs text-[#64748B]">{{ formatDate(post.date) }}</span>
              <span class="text-sm font-semibold text-[#2563EB] group-hover:underline">Read →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

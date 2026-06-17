<script setup>
const reviews = [
  {
    name: 'Priya R.',
    role: 'PhD Scholar',
    university: 'Anna University',
    rating: 5,
    text: 'Got my similarity report within 20 minutes. Non-repository scan, so my document was never at risk. Exactly what I needed before my final thesis submission.',
  },
  {
    name: 'Arjun M.',
    role: 'M.Tech Student',
    university: 'VTU',
    rating: 5,
    text: 'Fast, private, and affordable. I\'ve used it three times for my thesis chapters. The WhatsApp support is quick and the portal is very easy to use.',
  },
  {
    name: 'Sneha K.',
    role: 'Research Scholar',
    university: 'Amity University',
    rating: 5,
    text: 'Submitted my dissertation draft at midnight and had my report ready by morning. Very impressed with the speed and confidentiality.',
  },
  {
    name: 'Rahul T.',
    role: 'MBA Student',
    university: 'SRM University',
    rating: 5,
    text: 'Affordable pricing for students and the report quality is excellent. AI detection was also included which helped me clean up my report before submission.',
  },
  {
    name: 'Divya S.',
    role: 'PhD Candidate',
    university: 'Osmania University',
    rating: 5,
    text: 'I was worried about my document being stored somewhere. PlagExpert does non-repository checks so my file was never added to any database. Highly recommend.',
  },
  {
    name: 'Karthik N.',
    role: 'Journal Author',
    university: 'IIT Madras',
    rating: 5,
    text: 'Used it before journal submission. Clean report, quick turnaround, and the team on WhatsApp helped me understand the results clearly.',
  },
]
</script>

<template>
  <section class="bg-white px-4 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
          Student Reviews
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Trusted by 50,000+ students across India
        </h2>

        <div class="mt-3 flex items-center justify-center gap-1">
          <span v-for="i in 5" :key="i" class="text-xl text-yellow-400">★</span>
          <span class="ml-2 text-sm font-semibold text-[#334155]">4.9 / 5 from verified students</span>
        </div>
      </div>

      <div class="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <article
          v-for="review in reviews"
          :key="review.name"
          class="flex flex-col rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.10)]"
          itemscope
          itemtype="https://schema.org/Review"
        >
          <div class="flex gap-0.5"
            itemprop="reviewRating"
            itemscope
            itemtype="https://schema.org/Rating"
          >
            <meta itemprop="ratingValue" :content="String(review.rating)">
            <meta itemprop="bestRating" content="5">
            <span v-for="i in review.rating" :key="i" class="text-base text-yellow-400">★</span>
          </div>

          <p class="mt-4 flex-1 text-sm leading-7 text-[#334155]" itemprop="reviewBody">
            "{{ review.text }}"
          </p>

          <div class="mt-5 flex items-center gap-3 border-t border-[#E2E8F0] pt-4">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-sm font-bold text-[#2563EB]">
              {{ review.name.charAt(0) }}
            </div>
            <div itemprop="author" itemscope itemtype="https://schema.org/Person">
              <p class="text-sm font-semibold text-[#0F172A]" itemprop="name">{{ review.name }}</p>
              <p class="text-xs text-[#64748B]">{{ review.role }} · {{ review.university }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from '~/components/home/HeroSection.vue'
import TrustStrip from '~/components/home/TrustStrip.vue'
import StatsSection from '~/components/home/StatsSection.vue'
import UniversityStrip from '~/components/home/UniversityStrip.vue'
import TrustSection from '~/components/home/TrustSection.vue'
import NonRepositorySection from '~/components/home/NonRepositorySection.vue'
import HowItWorksSection from '~/components/home/HowItWorksSection.vue'
import ServicesPreview from '~/components/home/ServicesPreview.vue'
import PricingPreview from '~/components/home/PricingPreview.vue'
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'
import FaqPreview from '~/components/home/FaqPreview.vue'
import ConfidentialSection from '~/components/home/ConfidentialSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'

useSeoMeta({
  title: 'PlagExpert — Plagiarism & AI Detection Reports for Students India',
  description: 'Get accurate plagiarism and AI detection reports for your thesis, dissertation, or assignment. Non-repository scans. Delivery in 10–30 minutes. Trusted by 50,000+ students across IIT, VTU, Anna University, Amity, SRM, VIT and more.',
  ogTitle: 'PlagExpert — Plagiarism & AI Reports for Academic Success',
  ogDescription: 'Plagiarism and AI detection reports. Fast, private, non-repository. Trusted by 50,000+ students across India.',
  ogImage: '/illustrations/hero-student-portal.jpg',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/illustrations/hero-student-portal.webp',
      fetchpriority: 'high'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PlagExpert',
        url: 'https://plagexpert.in',
        logo: 'https://plagexpert.in/brand/plagexpert-logo.png',
        description: 'PlagExpert provides non-repository plagiarism and AI detection reports for students and researchers across India. Reports delivered in 10–30 minutes.',
        foundingDate: '2022',
        areaServed: 'IN',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-6309872817',
          contactType: 'customer support',
          availableLanguage: ['English', 'Hindi', 'Telugu', 'Tamil']
        },
        sameAs: ['https://wa.me/916309872817']
      })
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'PlagExpert',
        description: 'Non-repository plagiarism and AI detection reports for students and researchers across India. Delivery in 10–30 minutes.',
        url: 'https://plagexpert.in',
        telephone: '+91-6309872817',
        email: 'support@plagexpert.in',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          addressCountry: 'IN'
        },
        areaServed: 'IN',
        priceRange: '₹99 - ₹2199',
        openingHours: 'Mo-Su 00:00-24:00',
        image: 'https://plagexpert.in/brand/plagexpert-logo.png'
      })
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Plagiarism & AI Detection Report',
        provider: {
          '@type': 'Organization',
          name: 'PlagExpert',
          url: 'https://plagexpert.in'
        },
        description: 'Non-repository plagiarism and AI detection reports for thesis, dissertation, research papers and assignments. Delivery in 10–30 minutes.',
        areaServed: 'IN',
        audience: {
          '@type': 'Audience',
          audienceType: 'Students, PhD Scholars, Research Scholars, Faculty, Journal Authors'
        },
        offers: [
          { '@type': 'Offer', name: 'Single File Check', price: '99', priceCurrency: 'INR', description: '1 plagiarism and AI detection report' },
          { '@type': 'Offer', name: 'Basic Plan', price: '450', priceCurrency: 'INR', description: '5 plagiarism and AI detection reports' },
          { '@type': 'Offer', name: 'Standard Plan', price: '1275', priceCurrency: 'INR', description: '15 plagiarism and AI detection reports' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        itemReviewed: {
          '@type': 'Service',
          name: 'PlagExpert Plagiarism & AI Detection',
          url: 'https://plagexpert.in'
        },
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '50000'
      })
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'PlagExpert Student Reviews',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Priya R.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'Got my similarity report within 20 minutes. Non-repository scan, so my document was never at risk. Exactly what I needed before my final thesis submission.',
              itemReviewed: { '@type': 'Service', name: 'PlagExpert Plagiarism Check', url: 'https://plagexpert.in' }
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Arjun M.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'Fast, private, and affordable. I\'ve used it three times for my thesis chapters. The WhatsApp support is quick and the portal is very easy to use.',
              itemReviewed: { '@type': 'Service', name: 'PlagExpert Plagiarism Check', url: 'https://plagexpert.in' }
            }
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Divya S.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'I was worried about my document being stored somewhere. PlagExpert does non-repository checks so my file was never added to any database. Highly recommend.',
              itemReviewed: { '@type': 'Service', name: 'PlagExpert Plagiarism Check', url: 'https://plagexpert.in' }
            }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I get a plagiarism report for my thesis in India?',
            acceptedAnswer: { '@type': 'Answer', text: 'Visit plagexpert.in, choose your plan, pay securely, and receive your upload link on WhatsApp. Upload your document and get your report in 10–30 minutes. No account or login required.' }
          },
          {
            '@type': 'Question',
            name: 'What is a non-repository plagiarism check?',
            acceptedAnswer: { '@type': 'Answer', text: 'A non-repository scan means your document is checked for plagiarism without being added to any student database or public repository. Your work stays private and cannot be matched against other students\' papers.' }
          },
          {
            '@type': 'Question',
            name: 'How fast is plagiarism report delivery?',
            acceptedAnswer: { '@type': 'Answer', text: 'Most reports are delivered within 10–30 minutes of uploading your document, depending on file size and current queue.' }
          },
          {
            '@type': 'Question',
            name: 'Is AI detection included in the plagiarism report?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, AI detection is included in our plagiarism check plans. You receive both the similarity score and the AI detection score in your report.' }
          },
          {
            '@type': 'Question',
            name: 'Which universities accept PlagExpert reports?',
            acceptedAnswer: { '@type': 'Answer', text: 'PlagExpert is used by students from IIT Madras, Anna University, VTU, Amity University, SRM University, VIT Vellore, Manipal, JNTU, Osmania University, Saveetha University, BITS Pilani, Andhra University and many other institutions across India.' }
          },
          {
            '@type': 'Question',
            name: 'Is the plagiarism check confidential?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your document is processed privately, never stored after report delivery, and never shared with your university, professor, or any third party.' }
          },
          {
            '@type': 'Question',
            name: 'What is the price for a plagiarism report?',
            acceptedAnswer: { '@type': 'Answer', text: 'Prices start at ₹99 for a single file check. Multi-file plans are available: 5 files for ₹449, 15 files for ₹1,199, and 30 files for ₹2,199.' }
          },
          {
            '@type': 'Question',
            name: 'Will my professor or university see my file?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Your file is processed privately and is not submitted to your professor or university before your final submission.' }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['[data-speakable]']
        },
        url: 'https://plagexpert.in'
      })
    }
  ]
})
</script>

<template>
  <main class="overflow-hidden">
    <HeroSection />
    <TrustStrip />
    <StatsSection />
    <UniversityStrip />
    <TrustSection />
    <NonRepositorySection />
    <HowItWorksSection />
    <ServicesPreview />
    <PricingPreview />
    <TestimonialsSection />
    <FaqPreview />
    <ConfidentialSection />
    <ContactSection />
  </main>
</template>

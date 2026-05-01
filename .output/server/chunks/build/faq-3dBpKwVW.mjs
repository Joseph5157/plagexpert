import { _ as __nuxt_component_0$1 } from './nuxt-link-D-zTMftl.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as useSeoMeta, u as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8" }, _attrs))}><div class="mx-auto max-w-4xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--plagexpert-primary-blue)]"> FAQ </p><h1 class="mt-3 text-3xl font-bold tracking-tight text-[var(--plagexpert-primary-navy)] sm:text-4xl md:text-5xl"> Frequently asked questions </h1><p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--plagexpert-text-body)] md:text-lg md:leading-8"> Find clear answers about document safety, delivery time, report options, AI detection, payments, the WhatsApp process, and portal access. </p><div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"><a href="#" class="inline-flex items-center justify-center rounded-full bg-[var(--plagexpert-trust-green)] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(22,163,74,0.24)] transition hover:bg-[var(--plagexpert-trust-green-hover)]"> Chat on WhatsApp </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/pricing",
    class: "inline-flex items-center justify-center rounded-full border border-[var(--plagexpert-border)] bg-white px-7 py-3 text-sm font-semibold text-[var(--plagexpert-text-main)] shadow-sm transition hover:border-[var(--plagexpert-primary-blue)] hover:bg-[var(--plagexpert-soft-blue)]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Pricing `);
      } else {
        return [
          createTextVNode(" View Pricing ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faq/FaqHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "FaqHero" });
const _sfc_main$3 = {
  __name: "FaqCategoryTabs",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 pt-4 pb-6 sm:pt-6 sm:pb-8" }, _attrs))}><div class="mx-auto max-w-4xl"><div class="flex flex-wrap justify-center gap-2 sm:gap-3"><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<button type="button" class="${ssrRenderClass([
          "rounded-full border px-4 py-2 text-sm font-semibold transition sm:px-5",
          __props.modelValue === category ? "border-[var(--plagexpert-primary-blue)] bg-[var(--plagexpert-soft-blue)] text-[var(--plagexpert-primary-blue)]" : "border-[var(--plagexpert-border)] bg-white text-[var(--plagexpert-text-body)] hover:border-[var(--plagexpert-primary-blue)] hover:text-[var(--plagexpert-primary-blue)]"
        ])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faq/FaqCategoryTabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "FaqList",
  __ssrInlineRender: true,
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 pt-4 pb-8 sm:pt-4 sm:pb-10 lg:pt-6 lg:pb-12" }, _attrs))}><div class="mx-auto max-w-4xl space-y-8"><!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<div class="space-y-4"><div class="text-left"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--plagexpert-primary-blue)]">${ssrInterpolate(section.category)}</p></div><div class="space-y-3"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<details class="group rounded-[1.5rem] border border-[var(--plagexpert-border)] bg-white shadow-[0_18px_50px_rgba(16,24,40,0.05)]"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 sm:px-6"><h3 class="text-left text-base font-semibold text-[var(--plagexpert-text-main)] sm:text-lg">${ssrInterpolate(item.question)}</h3><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--plagexpert-soft-blue)] text-2xl font-light text-[var(--plagexpert-primary-blue)] transition group-open:rotate-45"> + </span></summary><div class="px-5 pb-5 pt-0 sm:px-6"><div class="border-t border-[var(--plagexpert-border)] pt-4 text-sm leading-7 text-[var(--plagexpert-text-body)] sm:text-base sm:leading-8">${ssrInterpolate(item.answer)}</div></div></details>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faq/FaqList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-4xl"><div class="rounded-[2rem] border border-[var(--plagexpert-border)] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-6 shadow-[0_24px_70px_rgba(16,24,40,0.06)] sm:p-8 md:p-10"><div class="text-center"><h2 class="text-2xl font-bold tracking-tight text-[var(--plagexpert-primary-navy)] sm:text-3xl md:text-4xl"> Still have questions? </h2><p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--plagexpert-text-body)] md:text-lg"> Message us on WhatsApp and we will guide you to the right service and plan. </p><div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"><a href="#" class="inline-flex items-center justify-center rounded-full bg-[var(--plagexpert-trust-green)] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(22,163,74,0.24)] transition hover:bg-[var(--plagexpert-trust-green-hover)]"> Chat on WhatsApp </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "inline-flex items-center justify-center rounded-full border border-[var(--plagexpert-border)] bg-white px-7 py-3 text-sm font-semibold text-[var(--plagexpert-text-main)] shadow-sm transition hover:border-[var(--plagexpert-primary-blue)] hover:bg-[var(--plagexpert-soft-blue)]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Services `);
      } else {
        return [
          createTextVNode(" View Services ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faq/FaqCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "FaqCta" });
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "FAQ — Common Questions About Plagiarism & AI Reports | PlagExpert",
      description: "Answers to common questions about Turnitin & Drillbit reports, document safety, delivery time, portal access, AI detection, and pricing. Get help fast on WhatsApp.",
      ogTitle: "PlagExpert FAQ — Plagiarism & AI Report Questions Answered",
      ogDescription: "Everything you need to know about report delivery, document safety, pricing, and portal access at PlagExpert.",
      ogImage: "/illustrations/hero-student-portal.png",
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you store my document?",
                acceptedAnswer: { "@type": "Answer", text: "Documents are processed only for the report workflow and deleted after delivery." }
              },
              {
                "@type": "Question",
                name: "Is my document added to any public repository?",
                acceptedAnswer: { "@type": "Answer", text: "The workflow is designed for non-repository report handling." }
              },
              {
                "@type": "Question",
                name: "How fast is delivery?",
                acceptedAnswer: { "@type": "Answer", text: "Most reports are delivered within 10–30 minutes depending on file size and queue." }
              },
              {
                "@type": "Question",
                name: "Is AI detection included?",
                acceptedAnswer: { "@type": "Answer", text: "AI detection support is available for selected report workflows and plans." }
              },
              {
                "@type": "Question",
                name: "Which plan is best for thesis work?",
                acceptedAnswer: { "@type": "Answer", text: "The Standard Plan is usually best for repeated checks and thesis drafts." }
              },
              {
                "@type": "Question",
                name: "How do I submit my file?",
                acceptedAnswer: { "@type": "Answer", text: "Message us on WhatsApp, choose a plan, receive portal access, and upload through the secure portal." }
              },
              {
                "@type": "Question",
                name: "Where do I upload my document?",
                acceptedAnswer: { "@type": "Answer", text: "Documents are uploaded through the secure PlagExpert portal." }
              }
            ]
          })
        }
      ]
    });
    const categories = [
      "Document Safety",
      "Delivery",
      "Reports",
      "AI Detection",
      "Pricing",
      "WhatsApp Process",
      "Portal Access"
    ];
    const sections = [
      {
        category: "Document Safety",
        items: [
          {
            question: "Do you store my document?",
            answer: "Documents are processed only for the report workflow and deleted after delivery."
          },
          {
            question: "Is my document added to any public repository?",
            answer: "The workflow is designed for non-repository report handling."
          },
          {
            question: "Who receives the report?",
            answer: "Only you receive the report through the selected delivery method."
          }
        ]
      },
      {
        category: "Delivery",
        items: [
          {
            question: "How fast is delivery?",
            answer: "Most reports are delivered within 10-30 minutes depending on file size and queue."
          },
          {
            question: "Can I get urgent delivery?",
            answer: "Message us on WhatsApp and the support team will confirm the current delivery time."
          }
        ]
      },
      {
        category: "Reports",
        items: [
          {
            question: "What type of report will I receive?",
            answer: "You will receive a PDF report based on the service and plan selected."
          },
          {
            question: "Which service should I choose?",
            answer: "Choose based on your university, college, journal, or department requirement. If unsure, message us on WhatsApp."
          }
        ]
      },
      {
        category: "AI Detection",
        items: [
          {
            question: "Is AI detection included?",
            answer: "AI detection support is available for selected report workflows and plans."
          },
          {
            question: "Can you check AI-written content?",
            answer: "Yes, AI detection-related support can be selected where available."
          }
        ]
      },
      {
        category: "Pricing",
        items: [
          {
            question: "Which plan is best for thesis work?",
            answer: "The Student plan is usually best for repeated checks and thesis drafts."
          },
          {
            question: "Can departments get custom pricing?",
            answer: "Yes, departments and institutions can contact support for custom pricing."
          }
        ]
      },
      {
        category: "WhatsApp Process",
        items: [
          {
            question: "How do I submit my file?",
            answer: "Message us on WhatsApp, choose a plan, receive portal access or a guest upload link, and upload through the secure portal."
          },
          {
            question: "How do I pay?",
            answer: "Payment instructions are shared through WhatsApp during the order process."
          }
        ]
      },
      {
        category: "Portal Access",
        items: [
          {
            question: "Where do I upload my document?",
            answer: "Documents are uploaded through the secure PlagExpert portal or a guest upload link."
          },
          {
            question: "Can I track my report?",
            answer: "Yes, clients can track and download results through the portal."
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FaqHero = __nuxt_component_0;
      const _component_FaqCategoryTabs = _sfc_main$3;
      const _component_FaqList = _sfc_main$2;
      const _component_FaqCta = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "overflow-hidden bg-[var(--plagexpert-bg)] pb-8 sm:pb-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FaqHero, null, null, _parent));
      _push(ssrRenderComponent(_component_FaqCategoryTabs, {
        categories,
        "model-value": categories[0]
      }, null, _parent));
      _push(ssrRenderComponent(_component_FaqList, { sections }, null, _parent));
      _push(ssrRenderComponent(_component_FaqCta, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faq-3dBpKwVW.mjs.map

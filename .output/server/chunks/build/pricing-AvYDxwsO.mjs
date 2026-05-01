import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-D-zTMftl.mjs';
import { g as getWhatsAppUrl } from './links-v65J-ZX3.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as useSeoMeta } from './server.mjs';
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

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_65%,#EFF6FF_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8" }, _attrs))}><div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div><div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#ECFDF5] blur-3xl"></div><div class="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"><div class="max-w-3xl"><p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-sm"> Pricing </p><h1 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl"> Simple pricing for every report need </h1><p class="mt-5 max-w-2xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8"> Choose a plan based on the number of files you want to check. Message us on WhatsApp if you are unsure which plan suits your workflow. </p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"> Chat on WhatsApp </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"
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
  _push(`</div></div><div class="relative"><div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFDF5] blur-2xl"></div><div class="relative rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-5 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6"><div class="rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Plan guidance </p><h2 class="mt-3 text-2xl font-bold tracking-tight text-[#0F172A]"> Pick the right plan quickly </h2><ul class="mt-6 space-y-3 text-sm leading-7 text-[#334155]"><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span><span>Basic for one quick report check.</span></li><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#16A34A]"></span><span>Student for thesis drafts and repeated checks.</span></li><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0D9488]"></span><span>Department and Enterprise for larger workflows.</span></li></ul></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/PricingHero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PricingHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]), { __name: "PricingHero" });
const _sfc_main$4 = {
  __name: "PricingGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const plans = [
      {
        name: "Single File",
        price: "₹99",
        files: "1 file",
        perFile: null,
        description: "Best for a single quick report check.",
        features: ["Turnitin similarity report", "AI detection report", "PDF delivery"]
      },
      {
        name: "Basic Plan",
        price: "₹450",
        files: "5 files",
        perFile: "₹90/file",
        description: "Good for project reports and small batches.",
        features: ["5 report checks", "AI detection included", "Fast support"]
      },
      {
        name: "Standard Plan",
        price: "₹1,275",
        files: "15 files",
        perFile: "₹85/file",
        description: "Best value for thesis and repeated checks.",
        popular: true,
        features: ["15 report checks", "Best for thesis drafts", "Priority support"]
      },
      {
        name: "Monthly Plan",
        price: "₹2,400",
        files: "30 files",
        perFile: "₹80/file",
        description: "For departments and multiple submissions.",
        features: ["30 report checks", "Bulk workflow", "Department support"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mx-auto max-w-2xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Plans </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Pricing built for academic workflows </h2></div><div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6"><!--[-->`);
      ssrRenderList(plans, (plan) => {
        _push(`<article class="${ssrRenderClass([plan.popular ? "ring-2 ring-[#EFF6FF]" : "", "relative flex h-full flex-col rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"])}">`);
        if (plan.popular) {
          _push(`<div class="static mb-3 inline-flex w-fit self-start rounded-full bg-[#2563EB] px-4 py-1 text-xs font-semibold text-white shadow-lg sm:absolute sm:left-1/2 sm:top-0 sm:mb-0 sm:-translate-x-1/2 sm:-translate-y-1/2"> Most Popular </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(plan.name)}</h3><div class="mt-4"><span class="text-3xl font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(plan.price)}</span></div><p class="mt-1 text-sm font-semibold text-[#0D9488]">${ssrInterpolate(plan.files)}`);
        if (plan.perFile) {
          _push(`<span class="ml-2 font-normal text-[#64748B]">· ${ssrInterpolate(plan.perFile)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="mt-4 text-sm leading-7 text-[#334155]">${ssrInterpolate(plan.description)}</p><ul class="mt-5 space-y-2 text-sm text-[#334155]"><!--[-->`);
        ssrRenderList(plan.features, (feature) => {
          _push(`<li class="flex gap-2"><span class="text-[#0D9488]">✓</span><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="mt-auto pt-6"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"> Select Plan </a></div></article>`);
      });
      _push(`<!--]--></div><div class="mt-8 rounded-[1.75rem] border border-[#E2E8F0] bg-[#EFF6FF] p-5 text-sm leading-7 text-[#334155] shadow-sm"><span class="font-semibold text-[#0F172A]"> Savings example: Buying Single File 15× costs ₹1,485 vs Standard Plan ₹1,275. </span></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/PricingGrid.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "PricingComparison",
  __ssrInlineRender: true,
  setup(__props) {
    const rows = [
      { label: "Number of files", singleFile: "1", basicPlan: "5", standardPlan: "15", monthlyPlan: "30" },
      { label: "Price per file", singleFile: "₹99", basicPlan: "₹90", standardPlan: "₹85", monthlyPlan: "₹80" },
      { label: "AI detection report", singleFile: "Yes", basicPlan: "Yes", standardPlan: "Yes", monthlyPlan: "Yes" },
      { label: "PDF report delivery", singleFile: "Yes", basicPlan: "Yes", standardPlan: "Yes", monthlyPlan: "Yes" },
      { label: "WhatsApp support", singleFile: "Yes", basicPlan: "Yes", standardPlan: "Priority", monthlyPlan: "Priority" },
      { label: "Best for", singleFile: "One-off checks", basicPlan: "Small batches", standardPlan: "Thesis drafts", monthlyPlan: "Bulk submissions" },
      { label: "Bulk workflow", singleFile: "No", basicPlan: "Limited", standardPlan: "Some", monthlyPlan: "Yes" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#F8FAFC] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mx-auto max-w-2xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Compare plans </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Simple comparison at a glance </h2></div><div class="mt-6 space-y-4 md:hidden"><!--[-->`);
      ssrRenderList(rows, (row) => {
        _push(`<article class="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"><h3 class="text-base font-bold text-[#0F172A]">${ssrInterpolate(row.label)}</h3><div class="mt-4 grid grid-cols-2 gap-3 text-sm text-[#334155]"><div><p class="font-semibold text-[#0B1F3A]">Single File</p><p class="mt-1">${ssrInterpolate(row.singleFile)}</p></div><div><p class="font-semibold text-[#0B1F3A]">Basic Plan</p><p class="mt-1">${ssrInterpolate(row.basicPlan)}</p></div><div><p class="font-semibold text-[#0B1F3A]">Standard Plan</p><p class="mt-1">${ssrInterpolate(row.standardPlan)}</p></div><div><p class="font-semibold text-[#0B1F3A]">Monthly Plan</p><p class="mt-1">${ssrInterpolate(row.monthlyPlan)}</p></div></div></article>`);
      });
      _push(`<!--]--></div><div class="mt-6 hidden overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white md:block"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-[#E2E8F0] text-left text-sm"><thead class="bg-[#F8FAFC] text-[#0F172A]"><tr><th class="px-5 py-4 font-semibold">Comparison</th><th class="px-5 py-4 font-semibold">Single File</th><th class="px-5 py-4 font-semibold">Basic Plan</th><th class="px-5 py-4 font-semibold">Standard Plan</th><th class="px-5 py-4 font-semibold">Monthly Plan</th></tr></thead><tbody class="divide-y divide-[#E2E8F0] text-[#334155]"><!--[-->`);
      ssrRenderList(rows, (row) => {
        _push(`<tr><td class="px-5 py-4 font-semibold text-[#0F172A]">${ssrInterpolate(row.label)}</td><td class="px-5 py-4">${ssrInterpolate(row.singleFile)}</td><td class="px-5 py-4">${ssrInterpolate(row.basicPlan)}</td><td class="px-5 py-4">${ssrInterpolate(row.standardPlan)}</td><td class="px-5 py-4">${ssrInterpolate(row.monthlyPlan)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/PricingComparison.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "PricingFaq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        question: "Do credits expire?",
        answer: "Credits are intended for use within your active service workflow. If you need clarity on a package, contact us on WhatsApp before purchase."
      },
      {
        question: "Can I buy more files later?",
        answer: "Yes. You can upgrade or purchase additional file checks when needed."
      },
      {
        question: "Which plan is best for thesis?",
        answer: "Student is the best fit for most thesis and repeated draft-check workflows."
      },
      {
        question: "Is payment handled through WhatsApp?",
        answer: "Yes. We guide you through the process on WhatsApp and keep the flow simple."
      },
      {
        question: "Can departments get custom pricing?",
        answer: "Yes. Department and Enterprise needs can be discussed for a custom arrangement."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#F8FAFC] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> FAQ </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Pricing questions answered </h2></div><div class="space-y-3 sm:space-y-4"><!--[-->`);
      ssrRenderList(faqs, (faq) => {
        _push(`<details class="group rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0F172A]"><span>${ssrInterpolate(faq.question)}</span><span class="text-2xl leading-none text-[#0D9488] transition group-open:rotate-45">+</span></summary><p class="mt-4 text-sm leading-7 text-[#334155]">${ssrInterpolate(faq.answer)}</p></details>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/PricingFaq.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#EFF6FF] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-[#E2E8F0]"><div class="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]"><div class="p-6 sm:p-8 md:p-12 lg:p-16"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Need help choosing? </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Not sure which plan to choose? </h2><p class="mt-5 max-w-2xl text-base leading-8 text-[#334155] md:text-lg"> Message us on WhatsApp and we will help you choose the right plan based on your file count and report requirement. </p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto"> Chat on WhatsApp </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-7 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto"
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
  _push(`</div></div><div class="bg-[#0B1F3A] p-6 text-white sm:p-8 md:p-12 lg:p-16"><div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(11,31,58,0.18)] sm:p-6"><h3 class="text-xl font-bold tracking-tight"> Quick reminders </h3><ul class="mt-5 space-y-4 text-sm leading-7 text-[#E5E7EB]"><li class="flex gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#16A34A]"></span><span>Pricing depends on file count and workflow needs.</span></li><li class="flex gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span><span>Support is available through WhatsApp before you purchase.</span></li><li class="flex gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0D9488]"></span><span>Private handling stays consistent across all plans.</span></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/PricingCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PricingCta = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "PricingCta" });
const _sfc_main = {
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Pricing — Turnitin & Drillbit Plans | PlagExpert",
      description: "Affordable Turnitin plagiarism & AI report plans starting at ₹99. Single File, Basic Plan, Standard Plan, and Monthly Plan. Pay only for what you need.",
      ogTitle: "PlagExpert Pricing — Plans from ₹99",
      ogDescription: "Single File ₹99, Basic Plan ₹450, Standard Plan ₹1,275, Monthly Plan ₹2,400. Turnitin & Drillbit reports for students.",
      ogImage: "/illustrations/hero-student-portal.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(PricingHero, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(PricingCta, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pricing-AvYDxwsO.mjs.map

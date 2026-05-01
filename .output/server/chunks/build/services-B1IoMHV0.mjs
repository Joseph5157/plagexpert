import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_65%,#EFF6FF_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8" }, _attrs))}><div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div><div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#ECFDF5] blur-3xl"></div><div class="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"><div class="max-w-3xl"><p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-sm"> Services </p><h1 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl"> Services built for academic report workflows </h1><p class="mt-5 max-w-2xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8"> Choose the right similarity, AI detection, reference, or document support service for your thesis, project, journal, or department workflow. </p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"> Chat on WhatsApp </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/pricing",
    class: "inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"
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
  _push(`</div></div><div class="relative"><div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFDF5] blur-2xl"></div><div class="relative rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-5 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6"><div class="rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Academic support </p><h2 class="mt-3 text-2xl font-bold tracking-tight text-[#0F172A]"> Clear service options </h2><ul class="mt-6 space-y-3 text-sm leading-7 text-[#334155]"><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span><span>Similarity checks for drafts, submissions, and repeated review cycles.</span></li><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#16A34A]"></span><span>Fast WhatsApp support to help you choose the correct service.</span></li><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0D9488]"></span><span>Private handling, simple delivery, and clear academic guidance.</span></li></ul></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/ServicesHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ServicesHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "ServicesHero" });
const _sfc_main$3 = {
  __name: "ServicesGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        icon: "📄",
        title: "Turnitin Similarity Check",
        description: "Get a similarity report that helps you review originality before submission.",
        features: ["Similarity report", "PDF delivery", "WhatsApp support"]
      },
      {
        icon: "📘",
        title: "Drillbit Report",
        description: "Review your document through a Drillbit-based workflow for academic checks.",
        features: ["Fast report", "Student projects", "Academic submissions"]
      },
      {
        icon: "🤖",
        title: "AI Detection",
        description: "Check content for AI-writing concerns before you finalize your document.",
        features: ["AI score support", "Clear report", "Quick delivery"]
      },
      {
        icon: "✍️",
        title: "Paraphrasing Support",
        description: "Improve clarity while preserving academic meaning and structure.",
        features: ["Clarity improvement", "Academic tone", "Better readability"]
      },
      {
        icon: "📚",
        title: "References",
        description: "Clean up citations and references for a more polished submission.",
        features: ["Reference cleanup", "Formatting help", "Journal support"]
      },
      {
        icon: "🎓",
        title: "Journal Ready",
        description: "Prepare a manuscript for journal submission requirements and formatting.",
        features: ["Submission support", "Formatting review", "Final document help"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mx-auto max-w-2xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> All services </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Practical support for academic documents </h2><p class="mt-4 text-base leading-7 text-[#334155] md:text-lg"> Each service is focused on helping you prepare, review, and submit with confidence. </p></div><div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<article class="flex h-full flex-col rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner">${ssrInterpolate(service.icon)}</div><h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(service.title)}</h3><p class="mt-3 text-sm leading-7 text-[#334155]">${ssrInterpolate(service.description)}</p><ul class="mt-5 space-y-2 text-sm text-[#334155]"><!--[-->`);
        ssrRenderList(service.features, (feature) => {
          _push(`<li class="flex gap-2"><span class="text-[#0D9488]">✓</span><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="mt-auto pt-6"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"> Select Service </a></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/ServicesGrid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ServicesGrid = Object.assign(_sfc_main$3, { __name: "ServicesGrid" });
const _sfc_main$2 = {
  __name: "ServicesServiceGuide",
  __ssrInlineRender: true,
  setup(__props) {
    const recommendations = [
      {
        icon: "🎓",
        title: "For thesis or dissertation",
        description: "Use Turnitin or Drillbit similarity report support for draft review and submission preparation."
      },
      {
        icon: "🤖",
        title: "For AI-written content concerns",
        description: "Use AI Detection to review content before final submission and reduce last-minute uncertainty."
      },
      {
        icon: "📝",
        title: "For journal submission",
        description: "Use References plus Journal Ready to improve citations, formatting, and manuscript readiness."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#F8FAFC] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mx-auto max-w-2xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Help choosing </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Not sure which service to choose? </h2></div><div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"><!--[-->`);
      ssrRenderList(recommendations, (item) => {
        _push(`<article class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] sm:p-7"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] text-2xl shadow-inner">${ssrInterpolate(item.icon)}</div><h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-sm leading-7 text-[#334155]">${ssrInterpolate(item.description)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/ServiceGuide.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#EFF6FF] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-[#E2E8F0]"><div class="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]"><div class="p-6 sm:p-8 md:p-12 lg:p-16"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Need help now? </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Get the right report service in 10 to 30 minutes </h2><p class="mt-5 max-w-2xl text-base leading-8 text-[#334155] md:text-lg"> Message us on WhatsApp and we will help you choose the correct service and plan. </p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto"> Chat on WhatsApp </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/pricing",
    class: "inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-7 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto"
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
  _push(`</div></div><div class="bg-[#0B1F3A] p-6 text-white sm:p-8 md:p-12 lg:p-16"><div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(11,31,58,0.18)] sm:p-6"><h3 class="text-xl font-bold tracking-tight"> Why students choose PlagExpert </h3><ul class="mt-5 space-y-4 text-sm leading-7 text-[#E5E7EB]"><li class="flex gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#16A34A]"></span><span>Clear service guidance before you pay or open the portal.</span></li><li class="flex gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span><span>Fast delivery and direct WhatsApp communication.</span></li><li class="flex gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0D9488]"></span><span>Private handling for academic and journal workflows.</span></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/ServicesCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServicesCta = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "ServicesCta" });
const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Services — Turnitin, Drillbit, Plagiarism & AI Removal | PlagExpert",
      description: "Choose from Turnitin plagiarism & AI reports, Drillbit reports, plagiarism removal, AI removal, and thesis writing. Fast, private, non-repository checks.",
      ogTitle: "PlagExpert Services — Plagiarism & AI Report Services",
      ogDescription: "Turnitin, Drillbit, Plagiarism Removal, AI Removal and Thesis Writing. Trusted by 50,000+ students in India.",
      ogImage: "/illustrations/hero-student-portal.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(ServicesHero, null, null, _parent));
      _push(ssrRenderComponent(ServicesGrid, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(ServicesCta, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-B1IoMHV0.mjs.map

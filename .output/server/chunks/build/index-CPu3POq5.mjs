import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { b as getPortalLoginUrl, g as getWhatsAppUrl } from './links-CTAyys35.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D6SIVGu0.mjs';
import { a as useSeoMeta, u as useHead } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _imports_0$1 = publicAssetsURL("/illustrations/hero-student-portal.png");
const _sfc_main$9 = {
  __name: "HomeHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const portalLoginUrl = getPortalLoginUrl();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_60%,#EFF6FF_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8" }, _attrs))}><div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div><div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#ECFDF5] blur-3xl"></div><div class="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16"><div class="max-w-2xl"><p class="mb-5 inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#0B1F3A] shadow-sm sm:text-sm"> India&#39;s No.1 Plagiarism &amp; AI Checking Platform </p><h1 class="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl"> Accurate Plagiarism &amp; AI Reports for Academic Success </h1><p class="mt-5 max-w-xl text-base leading-7 text-[#334155] sm:mt-6 sm:text-lg sm:leading-8"> Check your research paper, thesis, dissertation, or assignment using an advanced Turnitin Instructor Account system. Non-repository scans. Delivery in 10–30 minutes. </p><p class="mt-4 text-sm font-semibold text-[#0D9488]"> Trusted by 50,000+ students &amp; researchers </p><div class="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16A34A] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg> WhatsApp </a><a${ssrRenderAttr("href", unref(portalLoginUrl))} class="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto sm:px-8"> Login Portal </a></div></div><div class="relative mt-2 sm:mt-0"><div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFDF5] blur-2xl"></div><div class="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-4 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6"><img${ssrRenderAttr("src", _imports_0$1)} alt="Student checking plagiarism report on PlagExpert portal showing 18% similarity and 7% AI detection" class="w-full rounded-3xl border border-slate-200 bg-white shadow-xl" width="800" height="600" fetchpriority="high"></div></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "HomeTrustStrip",
  __ssrInlineRender: true,
  setup(__props) {
    const tags = [
      "Turnitin Plag Report",
      "Turnitin AI Report",
      "Drillbit Plag & AI Report",
      "Plag Removal",
      "AI Removal",
      "Thesis Writing"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "border-y border-[#E2E8F0] bg-white px-4 py-3 sm:py-4" }, _attrs))}><div class="mx-auto flex max-w-7xl flex-wrap items-center justify-start gap-2.5 sm:justify-center sm:gap-3"><!--[-->`);
      ssrRenderList(tags, (tag) => {
        _push(`<span class="rounded-full border border-[#E2E8F0] bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold text-[#1D4ED8] shadow-sm sm:px-4 sm:py-2 sm:text-sm">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/TrustStrip.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "HomeTrustSection",
  __ssrInlineRender: true,
  setup(__props) {
    const trustCards = [
      {
        icon: "🔒",
        title: "Non-Repository Check",
        description: "Your file is scanned privately without being added to a student repository or public database."
      },
      {
        icon: "⚡",
        title: "Fast Report Delivery",
        description: "Most reports are processed within 10–30 minutes after upload, depending on file size."
      },
      {
        icon: "🗑️",
        title: "Secure File Handling",
        description: "Your document is used only to generate your report and is automatically deleted after delivery."
      },
      {
        icon: "✍️",
        title: "Plagiarism Removal Support",
        description: "Get expert help identifying matched content and improving originality before final submission."
      },
      {
        icon: "🤖",
        title: "AI Removal Support",
        description: "Refine AI-like phrasing and make your writing read more naturally and authentically."
      },
      {
        icon: "🎓",
        title: "Thesis Writing",
        description: "Get professional thesis writing support for research, structure, formatting, and academic presentation."
      },
      {
        icon: "💰",
        title: "Affordable Pricing",
        description: "Flexible pricing for students, researchers, and academic professionals."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#F8FAFC] px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mx-auto max-w-3xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Safe &amp; Confidential </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Private Plagiarism &amp; AI Reports Without Repository Risk </h2><p class="mt-4 text-base leading-7 text-[#334155] md:text-lg"> Get your similarity and AI report quickly through a secure, non-repository process. Your document is checked confidentially and is never submitted to any public student database. </p></div><div class="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"><!--[-->`);
      ssrRenderList(trustCards, (card) => {
        _push(`<div class="rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:p-7"><div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFDF5] text-2xl shadow-inner sm:h-12 sm:w-12">${ssrInterpolate(card.icon)}</div><h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(card.title)}</h3><p class="mt-3 text-sm leading-7 text-[#334155]">${ssrInterpolate(card.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/TrustSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/illustrations/how-it-works.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "how-it-works",
    class: "bg-[#F8FAFC] px-4 pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-8"
  }, _attrs))}><div class="mx-auto max-w-5xl"><img${ssrRenderAttr("src", _imports_0)} alt="How PlagExpert Works: Pay on WhatsApp, Create Portal ID via Telegram, Login with OTP, Upload and Download Report" class="w-full rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_18px_50px_rgba(16,24,40,0.08)]" width="1200" height="600" loading="lazy"></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HowItWorksSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HowItWorksSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeHowItWorksSection" });
const _sfc_main$5 = {
  __name: "HomeServicesPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Turnitin Plagiarism & AI Checking",
        description: "Get a detailed Turnitin similarity and AI report for your academic document before final submission.",
        features: ["Turnitin similarity report", "AI detection report", "PDF report delivery"],
        icon: "📄"
      },
      {
        title: "Drillbit Plagiarism & AI Checking",
        description: "Check your document through Drillbit for plagiarism and AI detection support.",
        features: ["Drillbit plagiarism report", "AI checking support", "Fast report delivery"],
        icon: "📘"
      },
      {
        title: "Plagiarism Removal",
        description: "Improve originality by reducing matched content while keeping your academic meaning intact.",
        features: ["Similarity reduction", "Proper paraphrasing", "Academic tone maintained"],
        icon: "✍️"
      },
      {
        title: "AI Removal",
        description: "Make your content sound more natural and human-written by reducing AI-detectable writing patterns.",
        features: ["AI score reduction", "Humanized writing", "Meaning preserved"],
        icon: "🤖"
      },
      {
        title: "Thesis Writing",
        description: "Get professional thesis writing support for research, structure, formatting, and academic presentation.",
        features: ["Thesis chapter writing", "Research support", "Formatting assistance"],
        icon: "🎓"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "bg-white px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14"
      }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mx-auto max-w-2xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Services </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Choose the Right Academic Support Service </h2><p class="mt-4 text-base leading-7 text-[#334155] md:text-lg"> Select the service that matches your requirement — plagiarism check, AI check, content improvement, or thesis support. </p></div><div class="mt-6 grid gap-4 sm:hidden"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<div class="flex flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"><div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner">${ssrInterpolate(service.icon)}</div><h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(service.title)}</h3><p class="mt-3 text-sm leading-7 text-[#334155]">${ssrInterpolate(service.description)}</p><ul class="mt-4 space-y-2 text-sm text-[#334155]"><!--[-->`);
        ssrRenderList(service.features, (feature) => {
          _push(`<li class="flex gap-2"><span class="text-[#0D9488]">✓</span><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="mt-6"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"> Select Service </a></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-6 hidden gap-4 sm:mt-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-6"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<div class="flex h-full flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] sm:p-7"><div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner sm:h-12 sm:w-12">${ssrInterpolate(service.icon)}</div><h3 class="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(service.title)}</h3><p class="mt-3 text-sm leading-7 text-[#334155]">${ssrInterpolate(service.description)}</p><ul class="mt-5 space-y-2 text-sm text-[#334155]"><!--[-->`);
        ssrRenderList(service.features, (feature) => {
          _push(`<li class="flex gap-2"><span class="text-[#0D9488]">✓</span><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="mt-auto pt-6"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"> Select Service </a></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ServicesPreview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "HomeStatsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "50,000+", label: "Files Checked" },
      { value: "100%", label: "Confidential" },
      { value: "20-30m", label: "Avg. Delivery" },
      { value: "24/7", label: "Support" },
      { value: "0%", label: "Repository Risk" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[linear-gradient(135deg,#0B1F3A_0%,#2563EB_100%)] px-4 py-8 sm:py-10 lg:py-12 text-white" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="grid grid-cols-2 gap-3 sm:hidden"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="${ssrRenderClass([stat.label === "Repository Risk" ? "col-span-2" : "", "rounded-[1.5rem] border border-white/15 bg-white/10 p-4 text-center shadow-[0_16px_40px_rgba(11,31,58,0.18)] backdrop-blur"])}"><div class="text-2xl font-bold tracking-tight leading-none">${ssrInterpolate(stat.value)}</div><p class="mt-1.5 text-xs leading-5 text-[#EFF6FF]">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div><div class="hidden grid-cols-2 gap-3 md:grid md:grid-cols-5 sm:gap-4"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="rounded-[1.75rem] border border-white/15 bg-white/10 p-4 text-center shadow-[0_16px_40px_rgba(11,31,58,0.18)] backdrop-blur sm:p-5 md:p-6"><div class="text-2xl font-bold tracking-tight leading-none sm:text-3xl md:text-4xl">${ssrInterpolate(stat.value)}</div><p class="mt-2 text-xs leading-5 text-[#EFF6FF] sm:text-sm">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/StatsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "HomePricingPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const turnitinPlans = [
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
    const otherPlans = [
      {
        icon: "📘",
        name: "Drillbit Report",
        price: "₹200",
        unit: "per file",
        description: "Plagiarism and AI detection via Drillbit.",
        cta: "Select Service",
        whatsapp: true
      },
      {
        icon: "✍️",
        name: "Plagiarism & AI Removal",
        price: "Custom",
        unit: "contact us",
        description: "Expert content improvement for originality and AI score reduction.",
        cta: "Select Service",
        whatsapp: true
      },
      {
        icon: "🎓",
        name: "Thesis Writing",
        price: "Custom",
        unit: "contact us",
        description: "Professional thesis writing support for research and formatting.",
        cta: "Select Service",
        whatsapp: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "bg-[#F8FAFC] px-4 pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14"
      }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mx-auto max-w-2xl text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> Pricing </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Choose the Right Plan for Your Document </h2><p class="mt-4 text-base leading-7 text-[#334155] md:text-lg"> Pay only for what you need — from single file checks to bulk plans for thesis and repeated submissions. </p></div><div class="mt-6 sm:mt-8"><p class="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0F172A]">Turnitin Plans</p><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"><!--[-->`);
      ssrRenderList(turnitinPlans, (plan) => {
        _push(`<div class="${ssrRenderClass([plan.popular ? "ring-2 ring-[#2563EB] mt-4 sm:mt-0" : "", "relative flex flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"])}">`);
        if (plan.popular) {
          _push(`<div class="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-[#2563EB] px-4 py-1 text-xs font-semibold text-white shadow-lg"> Most Popular </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(plan.name)}</h3><div class="mt-3"><span class="text-3xl font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(plan.price)}</span></div><p class="mt-1 text-sm font-semibold text-[#0D9488]">${ssrInterpolate(plan.files)}`);
        if (plan.perFile) {
          _push(`<span class="ml-2 text-[#64748B]">· ${ssrInterpolate(plan.perFile)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="mt-3 text-sm leading-7 text-[#334155]">${ssrInterpolate(plan.description)}</p><ul class="mt-4 space-y-2 text-sm text-[#334155]"><!--[-->`);
        ssrRenderList(plan.features, (feature) => {
          _push(`<li class="flex gap-2"><span class="text-[#0D9488]">✓</span><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="mt-auto pt-5"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8]"> Select Plan </a></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-4 rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 text-center text-sm leading-7 text-[#334155] shadow-sm"> Savings example: <span class="font-semibold text-[#0F172A]">Buying Basic 15× costs ₹1,485 vs Monthly Plan ₹1,275.</span></div><div class="mt-8"><p class="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0F172A]">Other Services</p><div class="grid gap-4 sm:grid-cols-3 sm:gap-6"><!--[-->`);
      ssrRenderList(otherPlans, (plan) => {
        _push(`<div class="flex flex-col rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)]"><div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl shadow-inner">${ssrInterpolate(plan.icon)}</div><h3 class="mt-4 text-lg font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(plan.name)}</h3><div class="mt-2"><span class="text-2xl font-bold tracking-tight text-[#0F172A]">${ssrInterpolate(plan.price)}</span><span class="ml-1 text-sm text-[#64748B]">${ssrInterpolate(plan.unit)}</span></div><p class="mt-3 text-sm leading-7 text-[#334155]">${ssrInterpolate(plan.description)}</p><div class="mt-auto pt-5"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="flex w-full items-center justify-center rounded-full bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D]">${ssrInterpolate(plan.cta)}</a></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/PricingPreview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "HomeFaqPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        question: "How do I start using PlagExpert?",
        answer: "First, check the plan details and message us on WhatsApp. Select the service you need, complete the payment, and send your full name. After payment confirmation, we will send you an invite link to create your Portal ID through Telegram."
      },
      {
        question: "Why do I need Telegram?",
        answer: "Telegram is required to create your Portal ID, receive login OTPs, get real-time report status updates, and receive notifications when your report is ready."
      },
      {
        question: "How do I submit my file?",
        answer: "After creating your Portal ID, visit the PlagExpert portal, enter your Portal ID, verify with the Telegram OTP, and upload your document directly through the portal."
      },
      {
        question: "How fast is report delivery?",
        answer: "Most reports are completed within 10–30 minutes, depending on file size, selected service, and current queue."
      },
      {
        question: "Can I track my report status?",
        answer: "Yes. You will receive Telegram notifications at every important stage, including upload confirmation, processing updates, and final report readiness."
      },
      {
        question: "Where do I download my report?",
        answer: "Once your report is ready, you will receive a Telegram notification. Then you can log in to your portal dashboard and download the final report."
      },
      {
        question: "Do you store my document?",
        answer: "Your document is handled securely and used only for generating your report. After report delivery, files are removed according to our internal safety process."
      },
      {
        question: "Is AI detection included?",
        answer: "AI detection is included in Turnitin plans. Please check the plan details or message us on WhatsApp before payment."
      },
      {
        question: "Turnitin vs Drillbit — which should I choose?",
        answer: "Turnitin is commonly preferred for university-style similarity and AI checks. Drillbit is another plagiarism and AI checking option. The best choice depends on your requirement and university guidelines."
      },
      {
        question: "Will my professor or university see my file?",
        answer: "No. Your file is processed privately through the selected checking service and is not submitted to your professor or university before your final submission."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "bg-[#F8FAFC] px-4 pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12"
      }, _attrs))}><div class="mx-auto max-w-7xl"><div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D9488]"> FAQ </p><h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"> Quick answers before you start </h2><p class="mt-4 text-base leading-7 text-[#334155] md:text-lg"> Clear answers about plans, payment, Portal ID setup, Telegram login, file upload, report delivery, and document safety. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "mt-6 flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all FAQs `);
          } else {
            return [
              createTextVNode(" View all FAQs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-3 md:hidden"><!--[-->`);
      ssrRenderList(faqs.slice(0, 4), (faq) => {
        _push(`<details class="group rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0F172A]"><span>${ssrInterpolate(faq.question)}</span><span class="text-2xl leading-none text-[#0D9488] transition group-open:rotate-45">+</span></summary><p class="mt-4 text-sm leading-7 text-[#334155]">${ssrInterpolate(faq.answer)}</p></details>`);
      });
      _push(`<!--]--></div><div class="hidden space-y-3 md:block md:space-y-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/FaqPreview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12"
  }, _attrs))}><div class="mx-auto max-w-7xl"><div class="overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[linear-gradient(135deg,#0B1F3A_0%,#102A4D_55%,#2563EB_100%)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(11,31,58,0.26)] sm:px-8 sm:py-12 lg:px-10 lg:py-14"><div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90"> Contact Us </p><h2 class="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"> Have questions? We&#39;re here to help. </h2><p class="mt-4 max-w-2xl text-sm leading-7 text-[#DBEAFE] sm:text-base"> Chat with us on WhatsApp for instant support — or browse our contact page for all available options. We respond within minutes. </p></div><div class="flex flex-col gap-3 sm:flex-row lg:justify-end"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} target="_blank" rel="noopener noreferrer" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"> WhatsApp </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto sm:px-8"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact Page `);
      } else {
        return [
          createTextVNode(" Contact Page ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "HomeContactSection" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "PlagExpert — Turnitin & Drillbit Plagiarism & AI Reports for Students",
      description: "Get accurate Turnitin and Drillbit plagiarism & AI detection reports for your thesis, dissertation, or assignment. Non-repository scans. Delivery in 10–30 minutes. Trusted by 50,000+ students in India.",
      ogTitle: "PlagExpert — Plagiarism & AI Reports for Academic Success",
      ogDescription: "Turnitin & Drillbit plagiarism and AI detection reports. Fast, private, non-repository. Trusted by 50,000+ students.",
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
                name: "How do I start using PlagExpert?",
                acceptedAnswer: { "@type": "Answer", text: "Check the plan details and message us on WhatsApp. Select the service you need, complete the payment, and send your full name. After payment confirmation, we will send you an invite link to create your Portal ID through Telegram." }
              },
              {
                "@type": "Question",
                name: "How fast is report delivery?",
                acceptedAnswer: { "@type": "Answer", text: "Most reports are completed within 10–30 minutes, depending on file size, selected service, and current queue." }
              },
              {
                "@type": "Question",
                name: "Do you store my document?",
                acceptedAnswer: { "@type": "Answer", text: "Your document is handled securely and used only for generating your report. After report delivery, files are removed according to our internal safety process." }
              },
              {
                "@type": "Question",
                name: "Is AI detection included?",
                acceptedAnswer: { "@type": "Answer", text: "AI detection is included in Turnitin plans. Please check the plan details or message us on WhatsApp before payment." }
              },
              {
                "@type": "Question",
                name: "Will my professor or university see my file?",
                acceptedAnswer: { "@type": "Answer", text: "No. Your file is processed privately through the selected checking service and is not submitted to your professor or university before your final submission." }
              }
            ]
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PlagExpert",
            url: "https://plagexpert.in",
            logo: "https://plagexpert.in/brand/plagexpert-logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-6309872817",
              contactType: "customer support",
              availableLanguage: ["English", "Hindi"]
            }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col overflow-hidden" }, _attrs))}><div class="order-1 sm:order-1">`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div><div class="order-3 sm:order-2">`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`</div><div class="order-4 sm:order-3">`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div><div class="order-5 sm:order-4">`);
      _push(ssrRenderComponent(HowItWorksSection, null, null, _parent));
      _push(`</div><div class="order-6 sm:order-5">`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div><div class="order-2 sm:order-6">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div><div class="order-7 sm:order-7">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div><div class="order-8 sm:order-8">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><div class="order-9 sm:order-9">`);
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CPu3POq5.mjs.map

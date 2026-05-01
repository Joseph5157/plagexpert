import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-D-zTMftl.mjs';
import { g as getWhatsAppUrl, a as getPortalUploadUrl } from './links-v65J-ZX3.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_72%,#EFF6FF_100%)] px-4 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8" }, _attrs))}><div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl"></div><div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#EFF6FF] blur-3xl"></div><div class="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"><div class="max-w-2xl"><p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-sm"> Contact </p><h1 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl"> Contact PlagExpert support </h1><p class="mt-5 max-w-2xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8"> Need help choosing a report service or pricing plan? Message us on WhatsApp and our support team will guide you to the secure portal upload flow. </p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"> Chat on WhatsApp </a>`);
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
  _push(`</div></div><div class="relative"><div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE] blur-2xl"></div><div class="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/95 p-5 shadow-[0_30px_80px_rgba(16,24,40,0.12)] ring-1 ring-white/70 backdrop-blur sm:p-6"><div class="rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]"> Support guide </p><h2 class="mt-3 text-2xl font-bold tracking-tight text-[#0F172A]"> Quick help for new and returning users </h2><ul class="mt-6 space-y-3 text-sm leading-7 text-[#334155]"><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]"></span><span>Choose the report type that fits your requirement.</span></li><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0B1F3A]"></span><span>Confirm the right plan before you send the file.</span></li><li class="flex items-start gap-3"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#0B1F3A]"></span><span>Follow the WhatsApp guidance for payment and portal access steps.</span></li></ul><div class="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4"><div class="rounded-2xl bg-[#EFF6FF] p-4 text-center"><div class="text-lg font-bold tracking-tight text-[#2563EB] sm:text-xl">1 chat</div><div class="mt-1 text-xs text-[#334155] sm:text-sm">To get started</div></div><div class="rounded-2xl bg-white p-4 text-center"><div class="text-lg font-bold tracking-tight text-[#0B1F3A] sm:text-xl">Clear</div><div class="mt-1 text-xs text-[#334155] sm:text-sm">Step-by-step support</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ContactHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]), { __name: "ContactHero" });
const _imports_0 = publicAssetsURL("/illustrations/portal-workflow.jpg");
const _sfc_main$3 = {
  __name: "ContactWhatsAppContactCard",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      "Message us on WhatsApp",
      "Receive dashboard access or a guest upload link",
      "Upload document through the secure portal",
      "Report is processed",
      "Track and download the PDF report"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]"><div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div class="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-6 sm:p-8 lg:p-10"><p class="inline-flex rounded-full bg-[#EFF6FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]"> WhatsApp contact </p><h2 class="mt-4 max-w-xl text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl"> Get your secure portal upload link on WhatsApp </h2><p class="mt-4 max-w-2xl text-base leading-7 text-[#334155] sm:text-lg"> Our team will help you choose the right service, plan, payment process, portal access, upload instructions, and delivery method. </p><div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"> Start WhatsApp Chat </a><p class="text-sm leading-6 text-[#64748B]"> Upload happens through the secure portal, not on the marketing website. </p></div><p class="mt-4 text-sm font-semibold text-[#0F172A]"> WhatsApp: <a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="text-[#16A34A] hover:underline">+91 63098 72817</a></p></div><div class="border-t border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10"><img${ssrRenderAttr("src", _imports_0)} alt="Workflow from WhatsApp support to secure upload, processing, and report download" class="w-full rounded-3xl border border-slate-200 bg-white shadow-xl"><div class="flex items-center justify-between gap-4"><h3 class="mt-6 text-lg font-bold tracking-tight text-[#0F172A] sm:text-xl"> Simple 5-step process </h3><span class="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB] shadow-sm"> WhatsApp guided </span></div><ol class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<li class="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-sm font-bold text-white">${ssrInterpolate(index + 1)}</div><div class="pt-0.5 text-sm font-semibold leading-6 text-[#0F172A] sm:text-base">${ssrInterpolate(step)}</div></li>`);
      });
      _push(`<!--]--></ol><div class="mt-6 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-4"><p class="text-sm font-semibold text-[#0F172A]"> Best for </p><p class="mt-1 text-sm leading-6 text-[#334155]"> Students, individuals, and departments that want a clear order flow with direct support. </p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/WhatsAppContactCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ContactOptions",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      {
        title: "Report Support",
        description: "Help with Turnitin, Drillbit, AI detection, and report selection.",
        accent: "bg-[#EFF6FF]",
        dot: "bg-[#2563EB]",
        titleClass: "text-[#2563EB]"
      },
      {
        title: "Pricing Help",
        description: "Guidance for Basic, Standard, Student, Department, and Enterprise plans.",
        accent: "bg-[#EFF6FF]",
        dot: "bg-[#0B1F3A]",
        titleClass: "text-[#0B1F3A]"
      },
      {
        title: "Department Queries",
        description: "Support for bulk files, department workflows, and custom pricing.",
        accent: "bg-[#F8FAFC]",
        dot: "bg-[#2563EB]",
        titleClass: "text-[#2563EB]"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 pt-4 pb-6 sm:pt-5 sm:pb-8 lg:pt-6 lg:pb-10" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="mb-6 sm:mb-8"><p class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm"> Contact options </p><h2 class="mt-4 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl"> Choose the kind of support you need </h2></div><div class="grid gap-4 md:grid-cols-3"><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<article class="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-7"><div class="${ssrRenderClass(["inline-flex h-12 w-12 items-center justify-center rounded-2xl", option.accent])}"><span class="${ssrRenderClass(["h-4 w-4 rounded-full", option.dot])}"></span></div><h3 class="${ssrRenderClass(["mt-5 text-xl font-bold tracking-tight", option.titleClass])}">${ssrInterpolate(option.title)}</h3><p class="mt-3 text-sm leading-7 text-[#334155] sm:text-base">${ssrInterpolate(option.description)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactOptions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ContactCta",
  __ssrInlineRender: true,
  setup(__props) {
    const portalUploadUrl = getPortalUploadUrl();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12" }, _attrs))}><div class="mx-auto max-w-7xl"><div class="overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[linear-gradient(135deg,#0B1F3A_0%,#102A4D_55%,#2563EB_100%)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(11,31,58,0.26)] sm:px-8 sm:py-12 lg:px-10 lg:py-14"><div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90"> Next step </p><h2 class="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"> Ready to get your report? </h2><p class="mt-4 max-w-2xl text-sm leading-7 text-[#DBEAFE] sm:text-base"> Start a WhatsApp chat and we will guide you from service selection to portal access and report delivery. </p></div><div class="flex flex-col gap-3 sm:flex-row lg:justify-end"><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="inline-flex w-full items-center justify-center rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D] sm:w-auto sm:px-8"> Chat on WhatsApp </a><a${ssrRenderAttr("href", unref(portalUploadUrl))} class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto sm:px-8"> Open Portal </a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact PlagExpert",
      meta: [
        {
          name: "description",
          content: "Contact PlagExpert support on WhatsApp for help with report services, plan selection, payments, and secure portal access."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "overflow-hidden bg-[#F8FAFC] pb-8 sm:pb-12" }, _attrs))}>`);
      _push(ssrRenderComponent(ContactHero, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-DWkEzhR7.mjs.map

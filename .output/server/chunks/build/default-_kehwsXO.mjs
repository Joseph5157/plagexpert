import { mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-D-zTMftl.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { b as getPortalLoginUrl, g as getWhatsAppUrl } from './links-v65J-ZX3.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/brand/plagexpert-logo.png");
const _sfc_main$2 = {
  __name: "LayoutSiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const portalLoginUrl = getPortalLoginUrl();
    const mobileMenuOpen = ref(false);
    const navLinks = [
      { label: "Home", to: "/" },
      { label: "Services", to: "/#services" },
      { label: "Pricing", to: "/#pricing" },
      { label: "FAQ", to: "/#faq" },
      { label: "Contact", to: "/#contact" }
    ];
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-xl" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-20 items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-3",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="PlagExpert" class="h-10 w-auto sm:h-12"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "PlagExpert",
                class: "h-10 w-auto sm:h-12"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden items-center gap-2 md:flex"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: "rounded-full px-4 py-2 text-sm font-semibold text-[#334155] transition duration-200 hover:bg-[#EFF6FF] hover:text-[#1D4ED8]",
          "active-class": "bg-[#EFF6FF] text-[#1D4ED8]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="hidden md:block"><a${ssrRenderAttr("href", unref(portalLoginUrl))} class="inline-flex rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm transition duration-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]"> Login Portal </a></div><button type="button" class="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] p-2.5 text-[#0B1F3A] transition duration-200 hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#1D4ED8] md:hidden"${ssrRenderAttr("aria-expanded", unref(mobileMenuOpen))} aria-label="Toggle navigation menu">`);
      if (!unref(mobileMenuOpen)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 5.25A.75.75 0 0 1 3.75 4.5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.75A.75.75 0 0 1 3.75 9.5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10Zm0 5A.75.75 0 0 1 3.75 14.5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 15.25Z" clip-rule="evenodd"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.22 4.22a.75.75 0 0 1 1.06 0L10 8.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L11.06 10l4.72 4.72a.75.75 0 1 1-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="border-t border-[#E2E8F0] py-4 md:hidden"><nav class="grid gap-2"><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: link.to,
            class: "rounded-2xl px-4 py-3 text-sm font-semibold text-[#334155] transition duration-200 hover:bg-[#EFF6FF] hover:text-[#1D4ED8]",
            "active-class": "bg-[#EFF6FF] text-[#1D4ED8]",
            onClick: closeMobileMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><a${ssrRenderAttr("href", unref(portalLoginUrl))} class="mt-1 inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition duration-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]"> Login Portal </a></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#020617] text-white" }, _attrs))}><div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8"><div class="md:hidden">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "inline-flex"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="PlagExpert" class="h-11 w-auto rounded-xl bg-white px-2 py-1"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "PlagExpert",
            class: "h-11 w-auto rounded-xl bg-white px-2 py-1"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="mt-3 max-w-sm text-sm leading-6 text-[#D0D5DD]"> Non-repository scans. Files never stored. Reports delivered fast with private handling and WhatsApp support. </p><div class="mt-4 flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]"> Non-repository scan </span><span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]"> Files never stored </span></div><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="mt-5 flex w-full items-center justify-center rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D]"> Chat on WhatsApp </a><div class="mt-5 flex flex-wrap gap-3 text-sm text-[#D0D5DD]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/legal#privacy-policy",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Privacy Policy `);
      } else {
        return [
          createTextVNode(" Privacy Policy ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/legal#terms-of-service",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Terms of Service `);
      } else {
        return [
          createTextVNode(" Terms of Service ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mt-5 border-t border-white/10 pt-4 text-sm text-[#D0D5DD]"><p>© 2026 PlagExpert Academic Integrity Services. All rights reserved.</p></div></div><div class="hidden md:block"><div class="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4"><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "inline-flex"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="PlagExpert" class="h-12 w-auto rounded-xl bg-white px-2 py-1"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "PlagExpert",
            class: "h-12 w-auto rounded-xl bg-white px-2 py-1"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="mt-4 max-w-sm text-sm leading-7 text-[#D0D5DD]"> Non-repository scans. Files never stored. Reports delivered fast with private handling and WhatsApp support. </p><div class="mt-5 flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]"> Non-repository scan </span><span class="rounded-full bg-white/10 px-3 py-1 text-[#E2E8F0]"> Files never stored </span></div></div><div><h3 class="font-semibold tracking-tight text-white"> Product </h3><ul class="mt-4 space-y-3 text-sm text-[#D0D5DD]"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/pricing",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pricing`);
      } else {
        return [
          createTextVNode("Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/faq",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h3 class="font-semibold tracking-tight text-white"> Services </h3><ul class="mt-4 space-y-3 text-sm text-[#D0D5DD]"><li>Turnitin Similarity Check</li><li>Drillbit Report</li><li>AI Detection</li><li>Paraphrasing Support</li><li>References</li></ul></div><div><h3 class="font-semibold tracking-tight text-white"> Support </h3><ul class="mt-4 space-y-3 text-sm text-[#D0D5DD]"><li><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="transition hover:text-white">WhatsApp Support</a></li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/legal#privacy-policy",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/legal#terms-of-service",
    class: "transition hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms of Service`);
      } else {
        return [
          createTextVNode("Terms of Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><a${ssrRenderAttr("href", ("getWhatsAppUrl" in _ctx ? _ctx.getWhatsAppUrl : unref(getWhatsAppUrl))())} class="mt-6 inline-flex rounded-full bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.24)] transition hover:bg-[#15803D]"> Chat on WhatsApp </a></div></div><div class="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6"><div class="flex flex-col gap-3 text-sm text-[#D0D5DD] md:flex-row md:items-center md:justify-between"><p>© 2026 PlagExpert Academic Integrity Services. All rights reserved.</p><div class="flex flex-wrap gap-4"><span>0% repository risk</span><span>100% confidential</span><span>24/7 support</span></div></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "LayoutSiteFooter" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-_kehwsXO.mjs.map

import { _ as _export_sfc } from "./index.2cb11b81.js";
import { d as defineComponent, r as resolveComponent, c as createElementBlock, a as createBaseVNode, e as createVNode, F as Fragment, z as pushScopeId, A as popScopeId, o as openBlock } from "./vendor.6521623a.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-376dc8fa"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u5934\u50CF\u5927\u5C0F", -1));
const _hoisted_2 = { class: "content" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u5934\u50CF\u5F62\u72B6", -1));
const _hoisted_4 = { class: "content" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u5934\u50CF\u5C55\u793A\u7C7B\u578B", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "caption" }, "\u9ED8\u8BA4\u4E3A\u521D\u59CB\u5934\u50CF\uFF0C\u6216src\u586B\u5165\u6307\u5B9A\u56FE\u7247\u5730\u5740", -1));
const _hoisted_7 = { class: "content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const onClick = () => {
      console.log("clicked.");
    };
    return (_ctx, _cache) => {
      const _component_co_avatar = resolveComponent("co-avatar");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", null, [
          _hoisted_1,
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_co_avatar, { onClick }),
            createVNode(_component_co_avatar, { size: "large" }),
            createVNode(_component_co_avatar, { size: "medium" }),
            createVNode(_component_co_avatar, { size: "small" })
          ])
        ]),
        createBaseVNode("section", null, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_co_avatar, { onClick }),
            createVNode(_component_co_avatar, { shape: "circle" })
          ])
        ]),
        createBaseVNode("section", null, [
          _hoisted_5,
          _hoisted_6,
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_co_avatar, { onClick }),
            createVNode(_component_co_avatar, { src: "https://cn.vuejs.org/images/logo.svg" })
          ])
        ])
      ], 64);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-376dc8fa"]]);
export { index as default };

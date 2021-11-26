import { _ as _export_sfc } from "./index.2cb11b81.js";
import { d as defineComponent, r as resolveComponent, c as createElementBlock, a as createBaseVNode, e as createVNode, w as withCtx, F as Fragment, z as pushScopeId, A as popScopeId, o as openBlock, f as createTextVNode } from "./vendor.6521623a.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-4c41eccf"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u57FA\u672C\u7528\u6CD5", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_3 = { class: "content" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u6587\u5B57", -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_10 = { class: "content" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u5E26\u6709icon", -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_16 = { class: "content" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u6587\u5B57\u5C45\u4E2D", -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_23 = { class: "content" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "\u5E26\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD", -1));
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_30 = { class: "content" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode("default alert");
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_33 = /* @__PURE__ */ createTextVNode("primary alert");
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_35 = /* @__PURE__ */ createTextVNode("success alert");
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_37 = /* @__PURE__ */ createTextVNode("warning alert");
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_39 = /* @__PURE__ */ createTextVNode("danger alert");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const onClick = () => {
      console.log("clicked.");
    };
    return (_ctx, _cache) => {
      const _component_co_alert = resolveComponent("co-alert");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", null, [
          _hoisted_1,
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_co_alert, {
              title: "default alert",
              onClose: onClick
            }),
            _hoisted_4,
            createVNode(_component_co_alert, {
              title: "primary alert",
              type: "primary"
            }),
            _hoisted_5,
            createVNode(_component_co_alert, {
              title: "success alert",
              type: "success"
            }),
            _hoisted_6,
            createVNode(_component_co_alert, {
              title: "warning alert",
              type: "warning"
            }),
            _hoisted_7,
            createVNode(_component_co_alert, {
              title: "danger alert",
              type: "danger"
            })
          ])
        ]),
        createBaseVNode("section", null, [
          _hoisted_8,
          _hoisted_9,
          createBaseVNode("div", _hoisted_10, [
            createVNode(_component_co_alert, {
              title: "\u4E0D\u53EF\u5173\u95ED\u7684 alert",
              closable: false
            }),
            _hoisted_11,
            createVNode(_component_co_alert, {
              title: "\u81EA\u5B9A\u4E49 close-text",
              "close-text": "close",
              type: "primary"
            }),
            _hoisted_12,
            createVNode(_component_co_alert, {
              title: "\u8BBE\u7F6E\u4E86\u56DE\u8C03\u7684 alert",
              type: "success",
              onClose: onClick
            }),
            _hoisted_13
          ])
        ]),
        createBaseVNode("section", null, [
          _hoisted_14,
          _hoisted_15,
          createBaseVNode("div", _hoisted_16, [
            createVNode(_component_co_alert, {
              title: "title",
              "show-icon": ""
            }),
            _hoisted_17,
            createVNode(_component_co_alert, {
              title: "title",
              "show-icon": "",
              type: "primary"
            }),
            _hoisted_18,
            createVNode(_component_co_alert, {
              title: "title",
              "show-icon": "",
              type: "success"
            }),
            _hoisted_19,
            createVNode(_component_co_alert, {
              title: "title",
              "show-icon": "",
              type: "warning"
            }),
            _hoisted_20,
            createVNode(_component_co_alert, {
              title: "title",
              "show-icon": "",
              type: "danger"
            })
          ])
        ]),
        createBaseVNode("section", null, [
          _hoisted_21,
          _hoisted_22,
          createBaseVNode("div", _hoisted_23, [
            createVNode(_component_co_alert, {
              title: "\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",
              center: ""
            }),
            _hoisted_24,
            createVNode(_component_co_alert, {
              title: "\u9ED8\u8BA4\u63D0\u793A\u7684\u6587\u6848",
              center: "",
              type: "primary"
            }),
            _hoisted_25,
            createVNode(_component_co_alert, {
              title: "\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",
              center: "",
              type: "success"
            }),
            _hoisted_26,
            createVNode(_component_co_alert, {
              title: "\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",
              center: "",
              type: "warning"
            }),
            _hoisted_27,
            createVNode(_component_co_alert, {
              title: "\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",
              center: "",
              type: "danger"
            })
          ])
        ]),
        createBaseVNode("section", null, [
          _hoisted_28,
          _hoisted_29,
          createBaseVNode("div", _hoisted_30, [
            createVNode(_component_co_alert, {
              title: "title",
              closable: false
            }, {
              default: withCtx(() => [
                _hoisted_31
              ]),
              _: 1
            }),
            _hoisted_32,
            createVNode(_component_co_alert, {
              title: "title",
              "close-text": "close",
              type: "primary"
            }, {
              default: withCtx(() => [
                _hoisted_33
              ]),
              _: 1
            }),
            _hoisted_34,
            createVNode(_component_co_alert, {
              title: "title",
              "close-text": "close",
              type: "success"
            }, {
              default: withCtx(() => [
                _hoisted_35
              ]),
              _: 1
            }),
            _hoisted_36,
            createVNode(_component_co_alert, {
              title: "title",
              "close-text": "close",
              type: "warning"
            }, {
              default: withCtx(() => [
                _hoisted_37
              ]),
              _: 1
            }),
            _hoisted_38,
            createVNode(_component_co_alert, {
              title: "title",
              "close-text": "close",
              type: "danger"
            }, {
              default: withCtx(() => [
                _hoisted_39
              ]),
              _: 1
            })
          ])
        ])
      ], 64);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c41eccf"]]);
export { index as default };

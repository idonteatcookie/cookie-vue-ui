import { d as defineComponent, r as resolveComponent, c as createElementBlock, a as createBaseVNode, F as Fragment, b as renderList, e as createVNode, o as openBlock, w as withCtx, f as createTextVNode, t as toDisplayString, g as createRouter, h as createWebHistory, i as computed, j as ref, n as normalizeClass, k as createCommentVNode, l as renderSlot, p as provide, m as createBlock, q as normalizeStyle, s as resolveDynamicComponent, u as inject, T as Transition, v as withDirectives, x as vShow, y as createApp } from "./vendor.6521623a.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var App_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "comp-nav" };
const _hoisted_2$1 = { class: "page-container" };
const _hoisted_3 = { class: "comp-content" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const components = ["button", "layout", "icon", "alert", "avatar"];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("nav", _hoisted_1$3, [
          (openBlock(), createElementBlock(Fragment, null, renderList(components, (item) => {
            return createVNode(_component_router_link, {
              key: item,
              to: "/" + item,
              class: "link-item"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item), 1)
              ]),
              _: 2
            }, 1032, ["to"]);
          }), 64))
        ]),
        createBaseVNode("main", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_view)
          ])
        ])
      ], 64);
    };
  }
});
const scriptRel = "modulepreload";
const seen = {};
const base = "/cookie-vue-ui/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const routes = [
  {
    path: "/button",
    name: "button",
    component: () => __vitePreload(() => import("./index.302b1ecd.js"), true ? ["assets/index.302b1ecd.js","assets/index.6266634c.css","assets/vendor.6521623a.js"] : void 0)
  },
  {
    path: "/layout",
    name: "layout",
    component: () => __vitePreload(() => import("./index.8245c2cf.js"), true ? ["assets/index.8245c2cf.js","assets/index.b167d42f.css","assets/vendor.6521623a.js"] : void 0)
  },
  {
    path: "/icon",
    name: "icon",
    component: () => __vitePreload(() => import("./index.6f859c3e.js"), true ? ["assets/index.6f859c3e.js","assets/index.37ae789b.css","assets/vendor.6521623a.js"] : void 0)
  },
  {
    path: "/alert",
    name: "alert",
    component: () => __vitePreload(() => import("./index.f04c0775.js"), true ? ["assets/index.f04c0775.js","assets/index.46da5d64.css","assets/vendor.6521623a.js"] : void 0)
  },
  {
    path: "/avatar",
    name: "avatar",
    component: () => __vitePreload(() => import("./index.82015038.js"), true ? ["assets/index.82015038.js","assets/index.fa57a55f.css","assets/vendor.6521623a.js"] : void 0)
  }
];
const router = createRouter({
  history: createWebHistory("/cookie-vue-ui/"),
  routes
});
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$5 = defineComponent({
  name: "CoButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    ripple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefix = "co-button";
      const { type, size, disabled } = props;
      return {
        [prefix]: true,
        [prefix + "--" + type]: type,
        [prefix + "--" + size]: size,
        [prefix + "--disabled"]: disabled
      };
    });
    const buttonRef = ref(null);
    const onMouseDown = (e) => {
      if (!props.ripple || props.disabled) {
        return;
      }
      const { offsetX, offsetY } = e;
      const { offsetWidth, offsetHeight } = buttonRef.value;
      const vertexList = [
        [0, 0],
        [offsetWidth, 0],
        [0, offsetHeight],
        [offsetWidth, offsetHeight]
      ];
      let r = 0;
      for (let [vx, vy] of vertexList) {
        const dx = vx - offsetX, dy = vy - offsetY;
        r = Math.max(r, Math.sqrt(dx * dx + dy * dy));
      }
      const ripple = document.createElement("div");
      ripple.className = "co-ripple";
      ripple.style.top = offsetY + "px";
      ripple.style.left = offsetX + "px";
      ripple.style.width = "0px";
      ripple.style.height = "0px";
      buttonRef.value.appendChild(ripple);
      setTimeout(() => {
        ripple.style.width = r * 2 + "px";
        ripple.style.height = r * 2 + "px";
      });
      setTimeout(() => {
        buttonRef.value.removeChild(ripple);
      }, 500);
    };
    const onClick = (e) => {
      emit("click", e);
    };
    return {
      classes,
      onClick,
      onMouseDown,
      buttonRef
    };
  }
});
const _hoisted_1$2 = { key: 1 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    ref: "buttonRef",
    class: normalizeClass(_ctx.classes),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
    onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.onMouseDown && _ctx.onMouseDown(...args))
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("i", {
      key: 0,
      class: normalizeClass(_ctx.icon)
    }, null, 2)) : createCommentVNode("", true),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_1$2, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ], 34);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
Button.install = (app2) => {
  app2.component(Button.name, Button);
};
const _sfc_main$4 = defineComponent({
  name: "CoRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "top"
    }
  },
  setup(props) {
    const gutter = computed(() => props.gutter);
    provide("CoRow", {
      gutter
    });
    const classes = computed(() => {
      const clz = ["co-row"];
      if (props.type === "flex") {
        clz.push("co-row--flex");
      }
      if (props.justify !== "start") {
        clz.push(`co-row--justify-${props.justify}`);
      }
      if (props.align !== "start") {
        clz.push(`co-row--align-${props.align}`);
      }
      return clz;
    });
    const style = computed(() => {
      const { gutter: gutter2 } = props;
      return gutter2 ? {
        marginLeft: `-${gutter2 / 2}px`,
        marginRight: `-${gutter2 / 2}px`
      } : {};
    });
    return {
      classes,
      style
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.style),
    class: normalizeClass(_ctx.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["style", "class"]);
}
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
Row.install = (app2) => {
  app2.component(Row.name, Row);
};
const colProps = {
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  }
};
const _sfc_main$3 = defineComponent({
  name: "CoCol",
  props: colProps,
  setup(props) {
    const classes = computed(() => {
      const clz = ["co-col"];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const val = props[prop];
        if (typeof val === "number") {
          if (prop === "span") {
            clz.push(`co-col-${val}`);
          } else if (val > 0) {
            clz.push(`co-col-${prop}-${val}`);
          }
        }
      });
      return clz;
    });
    const style = computed(() => {
      const { gutter } = inject("CoRow", { gutter: { value: 0 } });
      const gv = gutter.value;
      return gv ? {
        paddingLeft: `${gv / 2}px`,
        paddingRight: `${gv / 2}px`
      } : {};
    });
    return {
      classes,
      style
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.style),
    class: normalizeClass(_ctx.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["style", "class"]);
}
var Col = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
Col.install = (app2) => {
  app2.component(Col.name, Col);
};
const _sfc_main$2 = defineComponent({
  name: "CoIcon",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass("co-icon-" + _ctx.name)
  }, null, 2);
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
Icon.install = (app2) => {
  app2.component(Icon.name, Icon);
};
const _sfc_main$1 = defineComponent({
  name: "CoAlert",
  components: { CoIcon: Icon },
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    center: {
      type: Boolean
    },
    showIcon: {
      type: Boolean
    }
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const visible = ref(true);
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    var iconEnum;
    (function(iconEnum2) {
      iconEnum2["default"] = "xiaoxi2";
      iconEnum2["primary"] = "tongbu";
      iconEnum2["success"] = "shoucang";
      iconEnum2["warning"] = "weixiu";
      iconEnum2["danger"] = "xihuan";
    })(iconEnum || (iconEnum = {}));
    const iconName = computed(() => `co-icon-${iconEnum[props.type]}`);
    const typeIcon = computed(() => `co-alert__icon--${props.type}`);
    const isBigIcon = computed(() => props.description ? "is-big" : slots.default ? "is-big" : "");
    const typeClass = computed(() => `co-alert--${props.type}`);
    const isBoldTitle = computed(() => props.description || slots.default ? "is-bold" : "");
    return {
      visible,
      typeClass,
      iconName,
      typeIcon,
      isBigIcon,
      isBoldTitle,
      close
    };
  }
});
const _hoisted_1$1 = { class: "co-alert__content" };
const _hoisted_2 = {
  key: 1,
  class: "co-alert__description"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CoIcon = resolveComponent("CoIcon");
  return openBlock(), createBlock(Transition, { name: "co-alert-fade" }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
        class: normalizeClass(["co-alert", [_ctx.typeClass, _ctx.center ? "is-center" : ""]]),
        role: "alert"
      }, [
        _ctx.showIcon ? (openBlock(), createBlock(_component_CoIcon, {
          key: 0,
          class: normalizeClass(["co-alert__icon", [_ctx.iconName, _ctx.typeIcon, _ctx.isBigIcon]])
        }, null, 8, ["class"])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1$1, [
          _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["co-alert__title", [_ctx.isBoldTitle]])
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default || _ctx.description ? (openBlock(), createElementBlock("p", _hoisted_2, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ])
          ])) : createCommentVNode("", true),
          _ctx.closable ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            _ctx.closeText ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "co-alert__closebtn",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
            }, toDisplayString(_ctx.closeText), 1)) : (openBlock(), createElementBlock("i", {
              key: 1,
              class: "co-alert__closebtn co-icon-guanbi",
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.close && _ctx.close(...args))
            }))
          ], 64)) : createCommentVNode("", true)
        ])
      ], 2), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
Alert.install = (app2) => {
  app2.component(Alert.name, Alert);
};
const _sfc_main = defineComponent({
  name: "CoAvatar",
  props: {
    size: {
      type: String,
      default: "default"
    },
    shape: {
      type: String,
      default: "square"
    },
    src: {
      type: String
    }
  },
  emits: ["click"],
  setup(props, { emit, slots }) {
    const classes = computed(() => {
      const prefix = "co-avatar";
      const { size, shape } = props;
      return {
        [prefix]: true,
        [prefix + "--" + size]: size,
        [prefix + "--" + shape]: shape
      };
    });
    const Url = ref("src/packages/avatar/user.png");
    const onClick = (e) => {
      emit("click", e);
    };
    return {
      classes,
      onClick,
      Url
    };
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("img", {
      class: normalizeClass(_ctx.classes),
      src: [_ctx.src ? _ctx.src : _ctx.Url],
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, null, 10, _hoisted_1)
  ]);
}
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Avatar.install = (app2) => {
  app2.component(Avatar.name, Avatar);
};
const packages = [Button, Row, Col, Icon, Alert, Avatar];
function install(app2) {
  packages.forEach((item) => {
    if (item.install) {
      app2.use(item);
    } else if (item.name) {
      app2.component(item.name, item);
    }
  });
}
var CookieUI = { install };
var index = "";
const app = createApp(_sfc_main$6);
app.use(CookieUI);
app.use(router);
app.mount("#app");
export { _export_sfc as _ };

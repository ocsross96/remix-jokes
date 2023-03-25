import {
  styles_default
} from "/build/_shared/chunk-QHBQ2JC6.js";
import {
  Links,
  LiveReload,
  import_react_router_dom
} from "/build/_shared/chunk-LC72RCUK.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-LUVXQXD3.js.map

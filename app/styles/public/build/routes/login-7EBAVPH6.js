import {
  require_db
} from "/build/_shared/chunk-7ZXSSUSH.js";
import {
  Link,
  React,
  __toModule,
  import_react_router_dom,
  init_react,
  useActionData
} from "/build/_shared/chunk-CIAIWM7L.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/login.tsx?browser
init_react();

// app/routes/login.tsx
init_react();
var import_db = __toModule(require_db());

// app/styles/login.css
var login_default = "/build/_assets/login-TB27ASMI.css";

// app/routes/login.tsx
var links = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function Login() {
  var _a, _b;
  let actionData = useActionData();
  let [searchParams] = (0, import_react_router_dom.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Login or Register?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: true
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    type: "password"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))), /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/jokes"
  }, "Jokes")))));
}
export {
  Login as default,
  links
};
//# sourceMappingURL=/build/routes/login-7EBAVPH6.js.map

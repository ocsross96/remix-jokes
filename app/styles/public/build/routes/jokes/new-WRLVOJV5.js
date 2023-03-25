import "/build/_shared/chunk-L3KUFKYZ.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  useActionData,
  useCatch
} from "/build/_shared/chunk-RAM3SJIQ.js";
import "/build/_shared/chunk-A4MDZ53X.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes/new.tsx?browser
init_react();

// app/routes/jokes/new.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = useActionData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name:", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    name: "name",
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
  })), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "name-error"
  }, actionData.fieldErrors.name) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content:", /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
    name: "content",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
  })), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 401) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, /* @__PURE__ */ React.createElement("p", null, "You must be logged in to create a joke"), /* @__PURE__ */ React.createElement(Link, {
      to: "/login"
    }, "Login"));
  }
}
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `Something unexpected went wrong. Sorry about that.`);
}
export {
  CatchBoundary,
  ErrorBoundary,
  NewJokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/new-WRLVOJV5.js.map

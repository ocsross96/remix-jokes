import {
  require_db
} from "/build/_shared/chunk-ZINBJXHK.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-VAHUWBNW.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-TPAJOTVN.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes/index.tsx?browser
init_react();

// app/routes/jokes/index.tsx
init_react();
var import_db = __toModule(require_db());
function JokesIndexRoute() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.randomJoke.name, " Permalink"));
}
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "I did a whoopsies.");
}
export {
  ErrorBoundary,
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-Z2BK4CDA.js.map

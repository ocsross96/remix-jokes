import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-YLQGPZBB.js";
import "/build/_shared/chunk-KNZAXA4D.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

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
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, "There are no jokes to display.");
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "I did a whoopsies.");
}
export {
  CatchBoundary,
  ErrorBoundary,
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-UJWUYES6.js.map

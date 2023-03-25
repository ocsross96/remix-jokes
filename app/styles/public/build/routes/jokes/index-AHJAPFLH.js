import {
  require_db
} from "/build/_shared/chunk-RQCQXXPV.js";
import {
  Link,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-6TITPXB6.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes/index.tsx?browser
init_react();

// app/routes/jokes/index.tsx
init_react();
var import_db = __toESM(require_db());
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
function ErrorBoundary({ error }) {
  console.error();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "I did a whoopsies.");
}
export {
  CatchBoundary,
  ErrorBoundary,
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-AHJAPFLH.js.map

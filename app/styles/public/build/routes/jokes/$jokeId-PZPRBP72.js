import "/build/_shared/chunk-S56WWJJK.js";
import {
  require_session
} from "/build/_shared/chunk-GFSOSMUT.js";
import {
  require_db
} from "/build/_shared/chunk-ZINBJXHK.js";
import {
  Link,
  import_react_router_dom,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-VAHUWBNW.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-TPAJOTVN.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes/$jokeId.tsx?browser
init_react();

// app/routes/jokes/$jokeId.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function JokeRoute() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.joke.name, " Permalink"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Delete")));
}
function CatchBoundary() {
  const caught = useCatch();
  const params = (0, import_react_router_dom.useParams)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, 'Huh? What the heck is "', params.jokeId, '"');
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
function ErrorBoundary() {
  const { jokeId } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading joke by the id ${jokeId}. Sorry.`);
}
export {
  CatchBoundary,
  ErrorBoundary,
  JokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-PZPRBP72.js.map

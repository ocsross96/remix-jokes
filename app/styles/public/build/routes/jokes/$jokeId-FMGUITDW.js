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
function JokeRoute() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.joke.name, " Permalink"));
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
//# sourceMappingURL=/build/routes/jokes/$jokeId-FMGUITDW.js.map

import {
  require_db
} from "/build/_shared/chunk-ZINBJXHK.js";
import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-QICD5KN4.js";
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
  throw new Error("Joke not found");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.joke.name, " Permalink"));
}
function ErrorBoundary() {
  const { jokeId } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading joke by the id ${jokeId}. Sorry.`);
}
export {
  ErrorBoundary,
  JokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-C6Z5D6MI.js.map

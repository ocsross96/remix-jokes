import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-P6METENO.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

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
export {
  JokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-O3MW4VEQ.js.map

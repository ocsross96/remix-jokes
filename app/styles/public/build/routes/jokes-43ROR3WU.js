import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-V6Y7QRAJ.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes.tsx?browser
init_react();

// app/routes/jokes.tsx
init_react();
var import_db = __toModule(require_db());

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-HMHWW3JD.css";

// app/routes/jokes.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: jokes_default
    }
  ];
};
function JokesRoute() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "jokes-list"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.jokeListItems.map((joke) => /* @__PURE__ */ React.createElement("li", {
    key: joke.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: joke.id
  }, joke.name)))), /* @__PURE__ */ React.createElement(Link, {
    to: "new",
    className: "button"
  }, "Add your own")), /* @__PURE__ */ React.createElement("div", {
    className: "jokes-outlet"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)))));
}
export {
  JokesRoute as default,
  links
};
//# sourceMappingURL=/build/routes/jokes-43ROR3WU.js.map

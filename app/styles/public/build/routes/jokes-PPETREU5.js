import {
  require_session
} from "/build/_shared/chunk-4W5KLFXU.js";
import {
  require_db
} from "/build/_shared/chunk-RQCQXXPV.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-6TITPXB6.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes.tsx?browser
init_react();

// app/routes/jokes.tsx
init_react();
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());

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
  console.log("jokes route");
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))), data.user ? /* @__PURE__ */ React.createElement("div", {
    className: "user-info"
  }, /* @__PURE__ */ React.createElement("span", null, `Hi ${data.user.username}`), /* @__PURE__ */ React.createElement(Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Logout"))) : /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/login"
  }, "Login"))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "jokes-list"
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.jokeListItems.map((joke) => /* @__PURE__ */ React.createElement("li", {
    key: joke.id
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: joke.id
  }, joke.name)))), /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "new",
    className: "button"
  }, "Add your own")), /* @__PURE__ */ React.createElement("div", {
    className: "jokes-outlet"
  }, /* @__PURE__ */ React.createElement(Outlet, null)))));
}
export {
  JokesRoute as default,
  links
};
//# sourceMappingURL=/build/routes/jokes-PPETREU5.js.map

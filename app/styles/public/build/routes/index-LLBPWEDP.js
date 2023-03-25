import {
  Link
} from "/build/_shared/chunk-IGJRE5UP.js";
import "/build/_shared/chunk-KNZAXA4D.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/styles/index.css
var styles_default = "/build/_assets/index-XHO2WWOU.css";

// app/routes/index.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
var meta = () => {
  return {
    title: "Remix: So great, it's funny!",
    description: "Remix jokes app. Learn Remix and laugh at the same time!"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "jokes"
  }, "Read Jokes"))))));
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-LLBPWEDP.js.map

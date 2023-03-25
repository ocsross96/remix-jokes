import {
  Form,
  Link
} from "/build/_shared/chunk-6TITPXB6.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// app/components/joke.tsx
init_react();
function JokeDisplay({
  joke,
  isOwner,
  canDelete = true
}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, joke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, joke.name, " Permalink"), isOwner ? /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button",
    disabled: !canDelete
  }, "Delete")) : null);
}

export {
  JokeDisplay
};
//# sourceMappingURL=/build/_shared/chunk-S7IMUGHJ.js.map

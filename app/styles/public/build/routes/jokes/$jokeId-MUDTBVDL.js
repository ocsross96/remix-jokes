import "/build/_shared/chunk-L3KUFKYZ.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  import_react_router_dom,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-E7VCKNQ3.js";
import "/build/_shared/chunk-A4MDZ53X.js";
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
var import_session = __toModule(require_session());
var meta = ({
  data
}) => {
  if (!data) {
    return {
      title: "No joke",
      description: "No joke found"
    };
  }
  return {
    title: `"${data.joke.name}" joke`,
    description: `Enjoy the "${data.joke.name}" joke and much more`
  };
};
function JokeRoute() {
  const data = useLoaderData();
  console.log({ data });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.joke.name, " Permalink"), data.isOwner ? /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Delete")) : null);
}
function CatchBoundary() {
  const caught = useCatch();
  const params = (0, import_react_router_dom.useParams)();
  switch (caught.status) {
    case 404: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Huh? What the heck is ", params.jokeId, "?");
    }
    case 401: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Sorry, but ", params.jokeId, " is not your joke.");
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}
function ErrorBoundary({ error }) {
  console.error(error);
  const { jokeId } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading joke by the id ${jokeId}. Sorry.`);
}
export {
  CatchBoundary,
  ErrorBoundary,
  JokeRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-MUDTBVDL.js.map

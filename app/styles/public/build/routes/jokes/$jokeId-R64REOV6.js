import {
  JokeDisplay
} from "/build/_shared/chunk-U2XIXGRH.js";
import {
  require_session
} from "/build/_shared/chunk-4W5KLFXU.js";
import {
  require_db
} from "/build/_shared/chunk-RQCQXXPV.js";
import {
  useCatch,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-7ER64ANL.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes/$jokeId.tsx?browser
init_react();

// app/routes/jokes/$jokeId.tsx
init_react();
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
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
  return /* @__PURE__ */ React.createElement(JokeDisplay, {
    joke: data.joke,
    isOwner: data.isOwner
  });
}
function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
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
  const { jokeId } = useParams();
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
//# sourceMappingURL=/build/routes/jokes/$jokeId-R64REOV6.js.map

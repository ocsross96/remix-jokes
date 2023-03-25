import {
  require_session
} from "/build/_shared/chunk-4W5KLFXU.js";
import {
  redirect
} from "/build/_shared/chunk-7ER64ANL.js";
import {
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/logout.tsx?browser
init_react();

// app/routes/logout.tsx
init_react();
var import_session = __toESM(require_session());
var action = async ({ request }) => {
  return (0, import_session.logout)(request);
};
var loader = async () => {
  return redirect("/");
};
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/logout-BH5SRGHR.js.map

import {
  import_server_runtime
} from "/build/_shared/chunk-S56WWJJK.js";
import {
  require_session
} from "/build/_shared/chunk-GFSOSMUT.js";
import {
  __toModule,
  init_react
} from "/build/_shared/chunk-TPAJOTVN.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/logout.tsx?browser
init_react();

// app/routes/logout.tsx
init_react();
var import_session = __toModule(require_session());
var action = async ({ request }) => {
  return (0, import_session.logout)(request);
};
var loader = async () => {
  return (0, import_server_runtime.redirect)("/");
};
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/logout-H4DCRP7V.js.map

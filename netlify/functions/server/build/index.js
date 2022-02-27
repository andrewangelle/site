var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_styled_components = __toModule(require("styled-components"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/andrewangelle/code/site/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/components/NotFound.tsx
init_react();
var import_remix4 = __toModule(require_remix());

// app/styles/Contact.styled.tsx
init_react();
var import_remix2 = __toModule(require_remix());
var import_styled_components2 = __toModule(require("styled-components"));
var ContactWrapper = import_styled_components2.default.div`
  background: #f0f0f0;
  width: 72%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  > * {
    padding: 1rem;
  }


  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;
var ContactFormWrapper = import_styled_components2.default.div`
  display: flex;
  flex-direction: column;
`;
var CenterItems = import_styled_components2.default.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
var StyledContactForm = (0, import_styled_components2.default)(import_remix2.Form)` 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;

  label {
    font-family: 'Montserrat', sans-serif;
  }

  input {
    margin-bottom: 1rem;
    border-radius: 5px;
    border-width: 1px;
  }

  input[type='textarea'] {
    padding: 0px 100px 100px 0px;  
  }

  button {
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border-radius: 8px;
    padding: 8px;
    margin: 10px auto;
    align-self: flex-end;
  }
`;
var SuccessMessage = import_styled_components2.default.div` 
  width: 100%;
  height: 25px;
  margin: auto;
  background: lightgreen;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;
var SuccessX = import_styled_components2.default.div` 
  cursor: pointer;
`;

// app/styles/Home.styled.tsx
init_react();
var import_remix3 = __toModule(require_remix());
var import_styled_components3 = __toModule(require("styled-components"));
var NavLink = (0, import_styled_components3.default)(import_remix3.Link)`
  margin: 1rem;
  a:-webkit-any-link {
    text-decoration: none;

  }
  
`;
var Wrapper = import_styled_components3.default.div` 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Cordova", "Montserrat",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


`;
var SplitLeft = import_styled_components3.default.div`
  position: fixed;
  height: 100%;
  width: 72%;
  background-color: #f0f2f5;
  overflow: scroll;
`;
var SplitRight = import_styled_components3.default.div`
  position: fixed;
  height: 100%;
  width: 28%;
  right: 0;
  background-color: #8B0000;
  color: #f0f2f5;
`;
var NameWrapper = import_styled_components3.default.div` 
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding-left: 1rem;
  text-align: center;
  max-height: 100%;
  overflow: scroll;
  @media screen and (max-width: 524px) {
    top: 45%;
    text-align: center;
    padding-left: 0rem;
  }
`;
var NameText = import_styled_components3.default.div` 
  font-size: 2.5rem;
  font-weight: 3;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;
var NameTitle = import_styled_components3.default.div` 
  font-family: 'Helvetica Neue';
  font-size: 1.25rem;
  color: #8B0000;

  @media screen and (max-width: 550px) {
    font-size: 1.25rem;
  }
`;
var FlipWrapper = import_styled_components3.default.div` 
  margin: 0;
  padding: 0;
  height: 89vh;
  width: 100%;
  overflow: hidden;
  user-select: none;

  @media screen and (max-width: 484px) {
    height: 100vh;
  }

  @media screen and (max-height: 630px) {
    height: 100vh;
  }
`;
var NavList = import_styled_components3.default.div` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (max-width: 550px) {
    top: 45%;
  }
`;
var NavItem = import_styled_components3.default.div` 
  font-size: 1.75rem;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.35rem;
  }
`;

// app/styles/Portfolio.styled.tsx
init_react();
var import_styled_components4 = __toModule(require("styled-components"));
var Card = import_styled_components4.default.div`
  height: 30vh;
  position: relative;
  box-sizing: border-box;
  padding: 1rem;
  margin: 1rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum', "tnum";
  position: relative;
  border-radius: 2px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  h3 {
    margin: 0;
  }  

  p {
    text-align: left;
    width: 100%;
    display: flex;
  }
  
  footer {
    display: flex;
    margin: 0.25rem auto;
    align-items: start;
    width: 100%;

    > * {
      margin-right: 1rem;
    }
  }

  @media screen and (max-height: 675px) {
    padding: 0.25rem;
    margin: 0;
  }

  @media screen and (max-height: 432px) {
    padding: 0 0 0 12px;
    margin: 0;
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    margin: 0.5rem;
  }

  @media screen and (max-width: 484px) {
    padding: 0.25rem 0.5rem;
  }
`;

// app/styles/GlobalFonts.ts
init_react();
var import_styled_components5 = __toModule(require("styled-components"));

// app/styles/fonts/Montserrat-VariableFont_wght.ttf
var Montserrat_VariableFont_wght_default = "/build/_assets/Montserrat-VariableFont_wght-5KS4G4TM.ttf";

// app/styles/GlobalFonts.ts
var GlobalFonts_default = import_styled_components5.createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${Montserrat_VariableFont_wght_default}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;

// app/components/NotFound.tsx
function NotFound() {
  const caught = (0, import_remix4.useCatch)();
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oops!"), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(GlobalFonts_default, null), /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, /* @__PURE__ */ React.createElement(NameText, null, "Oops!"), /* @__PURE__ */ React.createElement(NameTitle, null, caught.status, " ", caught.statusText))), /* @__PURE__ */ React.createElement(SplitRight, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null)));
}

// app/components/PortfolioCard.tsx
init_react();
var import_react_fontawesome = __toModule(require("@fortawesome/react-fontawesome"));
var Icons = __toModule(require("@fortawesome/free-brands-svg-icons"));
function PortfolioCard({ title, description, githubLink, demoLink, demoText }) {
  return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("h3", null, title), /* @__PURE__ */ React.createElement("p", null, description), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("a", {
    href: githubLink,
    target: "_blank",
    style: { color: "inherit" }
  }, /* @__PURE__ */ React.createElement(import_react_fontawesome.FontAwesomeIcon, {
    icon: Icons.faGithub,
    size: "2x"
  })), demoLink && /* @__PURE__ */ React.createElement("a", {
    href: demoLink,
    target: "_blank",
    style: { color: "inherit" }
  }, /* @__PURE__ */ React.createElement("button", null, demoText))));
}

// app/components/CatchBoundary.tsx
init_react();
var import_remix5 = __toModule(require_remix());
function CatchBoundary({ error }) {
  console.log(error.message);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Error caught"), /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(GlobalFonts_default, null), /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, /* @__PURE__ */ React.createElement(NameText, null, "Oops!"), /* @__PURE__ */ React.createElement(NameTitle, null, error.message))), /* @__PURE__ */ React.createElement(SplitRight, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null)));
}

// app/components/ContactForm.tsx
init_react();
var import_react = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
function ContactForm() {
  const transition = (0, import_remix6.useTransition)();
  const [name, setName] = (0, import_react.useState)("");
  const [subject, setSubject] = (0, import_react.useState)("");
  const [message, setMessage] = (0, import_react.useState)("");
  const [requestState, setRequestState] = (0, import_react.useState)("idle");
  async function submitForm() {
    const body = JSON.stringify({ name, subject, message });
    const response = await fetch("/resources/contact-form", { method: "post", body });
    const data = await response.json();
    return data;
  }
  function onSubmit() {
    return submitForm().then((res) => {
      setRequestState("success");
      setName("");
      setSubject("");
      setMessage("");
    }).catch((e) => console.log(e));
  }
  (0, import_react.useEffect)(() => {
    if (transition.state === "submitting") {
      setRequestState("submitting");
    }
  }, [transition, setRequestState]);
  return /* @__PURE__ */ React.createElement(StyledContactForm, {
    onSubmit
  }, requestState === "success" && /* @__PURE__ */ React.createElement(SuccessMessage, null, /* @__PURE__ */ React.createElement("div", null, "Success!"), /* @__PURE__ */ React.createElement(SuccessX, {
    onClick: () => setRequestState("idle")
  }, "X")), /* @__PURE__ */ React.createElement("fieldset", {
    disabled: transition.state === "submitting",
    style: { display: "flex", flexDirection: "column", border: "none" }
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    name: "name",
    type: "text",
    value: name,
    onChange: (event) => setName(event.target.value)
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, "Subject"), /* @__PURE__ */ React.createElement("input", {
    name: "subject",
    type: "text",
    value: subject,
    onChange: (event) => setSubject(event.target.value)
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, "Message"), /* @__PURE__ */ React.createElement("input", {
    name: "message",
    type: "textarea",
    value: message,
    onChange: (event) => setMessage(event.target.value)
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: transition.state === "submitting"
  }, "Submit"));
}

// app/components/ContactPageIcon.tsx
init_react();
var import_react2 = __toModule(require("react"));
var import_react_fontawesome2 = __toModule(require("@fortawesome/react-fontawesome"));
var Icons2 = __toModule(require("@fortawesome/free-brands-svg-icons"));
var Iconz = __toModule(require("@fortawesome/free-solid-svg-icons"));
function ContactPageIcon({ iconName, href, index }) {
  return /* @__PURE__ */ import_react2.default.createElement("a", {
    key: iconName,
    href,
    target: "_blank",
    style: { color: "inherit" }
  }, /* @__PURE__ */ import_react2.default.createElement(import_react_fontawesome2.FontAwesomeIcon, {
    icon: index === 2 ? Iconz[iconName] : Icons2[iconName],
    size: "6x"
  }));
}

// route-module:/Users/andrewangelle/code/site/app/root.tsx
var meta = () => {
  return { title: "Andrew Angelle: front end software developer" };
};
function CatchBoundary2() {
  return /* @__PURE__ */ React.createElement(NotFound, null);
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix7.Meta, null), /* @__PURE__ */ React.createElement(import_remix7.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null), /* @__PURE__ */ React.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React.createElement(GlobalFonts_default, null), /* @__PURE__ */ React.createElement(import_remix7.LiveReload, null)));
}

// route-module:/Users/andrewangelle/code/site/app/routes/resources/contact-form.ts
var contact_form_exports = {};
__export(contact_form_exports, {
  action: () => action,
  loader: () => loader
});
init_react();
var import_remix8 = __toModule(require_remix());
var import_mail = __toModule(require("@sendgrid/mail"));
async function action({ request }) {
  const data = await request.json();
  const msg = {
    to: "andrewangelle@gmail.com",
    from: `websiteMessage@andrewangelle.com`,
    subject: `${data.name}-${data.subject}`,
    text: data.message
  };
  import_mail.default.setApiKey(process.env.SEND_GRID_API_KEY);
  await import_mail.default.send(msg).then((res) => res).catch((e) => e.message);
  const body = JSON.stringify({ message: "success" });
  const options = {
    status: 200,
    headers: {
      "Access-Controll-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
  return new Response(body, options);
}
async function loader() {
  return (0, import_remix8.redirect)("/contact");
}

// route-module:/Users/andrewangelle/code/site/app/routes/resources/portfolio.ts
var portfolio_exports = {};
__export(portfolio_exports, {
  loader: () => loader2
});
init_react();

// app/utils/constants.ts
init_react();
var contactIcons = [
  { href: "http://www.github.com/andrewangelle", iconName: "faGithub" },
  { href: "https://www.linkedin.com/in/andrew-angelle-21299774/", iconName: "faLinkedin" },
  { href: "mailto:andrewangelle@gmail.com?&subject=Development Services Inquiry", iconName: "faEnvelopeSquare" }
];
var portfolioData = [
  {
    title: "React Glide",
    description: "a multi purpose carousel module built in react",
    githubLink: "http://www.github.com/andrewangelle/react-glide",
    demoLink: "https://codesandbox.io/s/r7166733lm",
    demoText: "Demo"
  },
  {
    title: "React PayPal Button",
    description: "A button component to implement PayPal's Express Checkout in React",
    githubLink: "http://www.github.com/andrewangelle/react-paypal-button",
    demoLink: "",
    demoText: ""
  },
  {
    title: "Websynth",
    description: "A synthesizer built as a webapp using the Web Audio API",
    githubLink: "https://github.com/andrewangelle/websynth",
    demoLink: "",
    demoText: ""
  }
];

// route-module:/Users/andrewangelle/code/site/app/routes/resources/portfolio.ts
async function loader2() {
  const body = JSON.stringify(portfolioData);
  const options = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return new Response(body, options);
}

// route-module:/Users/andrewangelle/code/site/app/routes/resources/contact.ts
var contact_exports = {};
__export(contact_exports, {
  loader: () => loader3
});
init_react();
async function loader3() {
  const body = JSON.stringify(contactIcons);
  const options = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return new Response(body, options);
}

// route-module:/Users/andrewangelle/code/site/app/routes/portfolio.tsx
var portfolio_exports2 = {};
__export(portfolio_exports2, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Portfolio,
  loader: () => loader4
});
init_react();
var import_react3 = __toModule(require("react"));
var import_remix9 = __toModule(require_remix());
var portfolioDataPath = "http://andrewangelle.com/resources/portfolio";
var loader4 = async (args) => {
  const response = await fetch(portfolioDataPath);
  const data = await response.json();
  return data;
};
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(CatchBoundary, {
    error
  });
}
function Portfolio() {
  const transition = (0, import_remix9.useTransition)();
  const data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, transition.state === "loading" && null, transition.state !== "loading" && /* @__PURE__ */ React.createElement("section", null, data.map((portfolioData2, index) => /* @__PURE__ */ React.createElement(import_react3.Fragment, {
    key: index
  }, index === 0 && /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(PortfolioCard, __spreadValues({}, portfolioData2)), /* @__PURE__ */ React.createElement("hr", null)))))), /* @__PURE__ */ React.createElement(SplitRight, null, /* @__PURE__ */ React.createElement(NavList, null, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/",
    style: { color: "white", textDecoration: "none" }
  }, "Home")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/contact",
    style: { color: "white", textDecoration: "none" }
  }, "Contact")))));
}

// route-module:/Users/andrewangelle/code/site/app/routes/contact.tsx
var contact_exports2 = {};
__export(contact_exports2, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Contact,
  loader: () => loader5
});
init_react();
var import_remix10 = __toModule(require_remix());
var contactDataPath = "http://andrewangelle.com/resources/contact";
var loader5 = async (args) => {
  const response = await fetch(contactDataPath);
  const data = await response.json();
  return data;
};
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement(CatchBoundary, {
    error
  });
}
function Contact() {
  const data = (0, import_remix10.useLoaderData)();
  const transition = (0, import_remix10.useTransition)();
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(CenterItems, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ContactWrapper, null, transition.state === "loading" && null, transition.state !== "loading" && data.map((iconData, index) => /* @__PURE__ */ React.createElement(ContactPageIcon, __spreadProps(__spreadValues({
    key: index
  }, iconData), {
    index
  })))), /* @__PURE__ */ React.createElement(ContactForm, null)))), /* @__PURE__ */ React.createElement(SplitRight, null, /* @__PURE__ */ React.createElement(NavList, null, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/",
    style: { color: "white", textDecoration: "none" }
  }, "Home")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/portfolio",
    style: { color: "white", textDecoration: "none" }
  }, "Portfolio")))));
}

// route-module:/Users/andrewangelle/code/site/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_remix11 = __toModule(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, /* @__PURE__ */ React.createElement(NameText, null, "Andrew Angelle"), /* @__PURE__ */ React.createElement(NameTitle, null, "front end software developer"))), /* @__PURE__ */ React.createElement(SplitRight, null, /* @__PURE__ */ React.createElement(NavList, null, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/portfolio",
    style: { color: "white", textDecoration: "none" }
  }, "Portfolio")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/contact",
    style: { color: "white", textDecoration: "none" }
  }, "Contact")))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resources/contact-form": {
    id: "routes/resources/contact-form",
    parentId: "root",
    path: "resources/contact-form",
    index: void 0,
    caseSensitive: void 0,
    module: contact_form_exports
  },
  "routes/resources/portfolio": {
    id: "routes/resources/portfolio",
    parentId: "root",
    path: "resources/portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/resources/contact": {
    id: "routes/resources/contact",
    parentId: "root",
    path: "resources/contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports2
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTm90Rm91bmQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvQ29udGFjdC5zdHlsZWQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvSG9tZS5zdHlsZWQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvUG9ydGZvbGlvLnN0eWxlZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3N0eWxlcy9HbG9iYWxGb250cy50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Qb3J0Zm9saW9DYXJkLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DYXRjaEJvdW5kYXJ5LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29udGFjdFBhZ2VJY29uLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QtZm9ybS50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL3BvcnRmb2xpby50cyIsICIuLi8uLi8uLi8uLi9hcHAvdXRpbHMvY29uc3RhbnRzLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3JvdXRlcy9yZXNvdXJjZXMvY29udGFjdC50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcG9ydGZvbGlvLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvY29udGFjdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QtZm9ybS50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3JvdXRlcy9yZXNvdXJjZXMvcG9ydGZvbGlvLnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL3Jlc291cmNlcy9jb250YWN0LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL3BvcnRmb2xpby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvY29udGFjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9yZXNvdXJjZXMvY29udGFjdC1mb3JtXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QtZm9ybVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlc291cmNlcy9jb250YWN0LWZvcm1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9yZXNvdXJjZXMvcG9ydGZvbGlvXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzL3BvcnRmb2xpb1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlc291cmNlcy9wb3J0Zm9saW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9yZXNvdXJjZXMvY29udGFjdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Jlc291cmNlcy9jb250YWN0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVzb3VyY2VzL2NvbnRhY3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9wb3J0Zm9saW9cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wb3J0Zm9saW9cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwb3J0Zm9saW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9jb250YWN0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG5cbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIHNoZWV0LmNvbGxlY3RTdHlsZXMoXG4gICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgIClcbiAgKTtcblxuICBjb25zdCBzdHlsZXMgPSBzaGVldC5nZXRTdHlsZVRhZ3MoKTtcbiAgXG4gIG1hcmt1cCA9IG1hcmt1cC5yZXBsYWNlKFwiX19TVFlMRVNfX1wiLCBzdHlsZXMpO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBOb3RGb3VuZCB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tIFwiLi9zdHlsZXMvR2xvYmFsRm9udHNcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQW5kcmV3IEFuZ2VsbGU6IGZyb250IGVuZCBzb2Z0d2FyZSBkZXZlbG9wZXJcIiB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIHJldHVybiAoXG4gICAgPE5vdEZvdW5kIC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAge3R5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgID8gXCJfX1NUWUxFU19fXCJcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPEdsb2JhbEZvbnRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTWV0YSwgTGlua3MsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNwbGl0TGVmdCwgTmFtZVdyYXBwZXIsIE5hbWVUZXh0LCBOYW1lVGl0bGUsIFNwbGl0UmlnaHQgfSBmcm9tIFwifi9zdHlsZXNcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tIFwifi9zdHlsZXMvR2xvYmFsRm9udHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5Pb3BzITwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7dHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgPyBcIl9fU1RZTEVTX19cIlxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8R2xvYmFsRm9udHMgLz5cbiAgICAgICAgPFNwbGl0TGVmdD5cbiAgICAgICAgICA8TmFtZVdyYXBwZXI+XG4gICAgICAgICAgICA8TmFtZVRleHQ+XG4gICAgICAgICAgICAgIE9vcHMhXG4gICAgICAgICAgICA8L05hbWVUZXh0PlxuICAgICAgICAgICAgPE5hbWVUaXRsZT5cbiAgICAgICAgICAgICAge2NhdWdodC5zdGF0dXN9IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgICAgIDwvTmFtZVRpdGxlPlxuICAgICAgICAgIDwvTmFtZVdyYXBwZXI+XG4gICAgICAgIDwvU3BsaXRMZWZ0PlxuICAgICAgICA8U3BsaXRSaWdodD48L1NwbGl0UmlnaHQ+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufSIsICJpbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIHdpZHRoOiA3MiU7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgPiAqIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFjdEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBDZW50ZXJJdGVtcyA9IHN0eWxlZC5kaXZgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENvbnRhY3RGb3JtID0gc3R5bGVkKEZvcm0pYCBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIGxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT0ndGV4dGFyZWEnXSB7XG4gICAgcGFkZGluZzogMHB4IDEwMHB4IDEwMHB4IDBweDsgIFxuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdWNjZXNzTWVzc2FnZSA9IHN0eWxlZC5kaXZgIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gIHBhZGRpbmc6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuXG5leHBvcnQgY29uc3QgU3VjY2Vzc1ggPSBzdHlsZWQuZGl2YCBcbiAgY3Vyc29yOiBwb2ludGVyO1xuYCIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkKExpbmspYFxuICBtYXJnaW46IDFyZW07XG4gIGE6LXdlYmtpdC1hbnktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gIH1cbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmAgXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIixcbiAgICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkNvcmRvdmFcIiwgXCJNb250c2VycmF0XCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cblxuYFxuXG5leHBvcnQgY29uc3QgU3BsaXRMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG5gXG5cbmV4cG9ydCBjb25zdCBTcGxpdFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyOCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEIwMDAwO1xuICBjb2xvcjogI2YwZjJmNTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYW1lV3JhcHBlciA9IHN0eWxlZC5kaXZgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDklO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNHB4KSB7XG4gICAgdG9wOiA0NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTmFtZVRleHQgPSBzdHlsZWQuZGl2YCBcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmFtZVRpdGxlID0gc3R5bGVkLmRpdmAgXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjOEIwMDAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGbGlwV3JhcHBlciA9IHN0eWxlZC5kaXZgIFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogODl2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NHB4KSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MzBweCkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE5hdkxpc3QgPSBzdHlsZWQuZGl2YCBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgdG9wOiA0NSU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmAgXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgfVxuYFxuXG5cblxuLy8gLmMge1xuLy8gICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuLy8gfVxuIiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMzB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJywgXCJ0bnVtXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9ICBcblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIGZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAuMjVyZW0gYXV0bztcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICA+ICoge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NzVweCkge1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQzMnB4KSB7XG4gICAgcGFkZGluZzogMCAwIDAgMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NHB4KSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIH1cbmAiLCAiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBNb250c2VycmF0IGZyb20gJy4vZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYnO1xuaW1wb3J0IE5hbWVPZllvdXJGb250V29mZjIgZnJvbSAnLi9uYW1lT2ZZb3VyRm9udC53b2ZmMic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIHNyYzogbG9jYWwoJ01vbnRzZXJyYXQnKSxcbiAgICB1cmwoJHtNb250c2VycmF0fSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5gOyIsICJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnfi9zdHlsZXMnO1xuaW1wb3J0IHsgUG9ydGZvbGlvRGF0YSB9IGZyb20gJ34vcm91dGVzL3BvcnRmb2xpbyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3J0Zm9saW9DYXJkKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBnaXRodWJMaW5rLCBkZW1vTGluaywgZGVtb1RleHQgfTogUG9ydGZvbGlvRGF0YSl7XG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtnaXRodWJMaW5rfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17SWNvbnMuZmFHaXRodWJ9XG4gICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAge2RlbW9MaW5rICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17ZGVtb0xpbmt9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b24+e2RlbW9UZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvQ2FyZD5cbiAgKVxufSIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTWV0YSwgTGlua3MsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNwbGl0TGVmdCwgTmFtZVdyYXBwZXIsIE5hbWVUZXh0LCBOYW1lVGl0bGUsIFNwbGl0UmlnaHQgfSBmcm9tIFwifi9zdHlsZXNcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tIFwifi9zdHlsZXMvR2xvYmFsRm9udHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoe2Vycm9yfToge2Vycm9yOiBFcnJvcn0pIHtcbiAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+RXJyb3IgY2F1Z2h0PC90aXRsZT5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPEdsb2JhbEZvbnRzIC8+XG4gICAgICAgIDxTcGxpdExlZnQ+XG4gICAgICAgICAgPE5hbWVXcmFwcGVyPlxuICAgICAgICAgICAgPE5hbWVUZXh0PlxuICAgICAgICAgICAgICBPb3BzIVxuICAgICAgICAgICAgPC9OYW1lVGV4dD5cbiAgICAgICAgICAgIDxOYW1lVGl0bGU+XG4gICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxuICAgICAgICAgICAgPC9OYW1lVGl0bGU+XG4gICAgICAgICAgPC9OYW1lV3JhcHBlcj5cbiAgICAgICAgPC9TcGxpdExlZnQ+XG4gICAgICAgIDxTcGxpdFJpZ2h0PjwvU3BsaXRSaWdodD5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59IiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBTdHlsZWRDb250YWN0Rm9ybSwgU3VjY2Vzc01lc3NhZ2UsIFN1Y2Nlc3NYIH0gZnJvbSAnfi9zdHlsZXMnXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCl7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgW3JlcXVlc3RTdGF0ZSwgc2V0UmVxdWVzdFN0YXRlXSA9IHVzZVN0YXRlKCdpZGxlJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0Rm9ybSgpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bmFtZSwgc3ViamVjdCwgbWVzc2FnZX0pXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3Jlc291cmNlcy9jb250YWN0LWZvcm0nLCB7bWV0aG9kOiAncG9zdCcsIGJvZHl9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvblN1Ym1pdCgpe1xuICAgIHJldHVybiBzdWJtaXRGb3JtKClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0ZSgnc3VjY2VzcycpXG4gICAgICAgIHNldE5hbWUoJycpXG4gICAgICAgIHNldFN1YmplY3QoJycpXG4gICAgICAgIHNldE1lc3NhZ2UoJycpXG5cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnKXtcbiAgICAgIHNldFJlcXVlc3RTdGF0ZSgnc3VibWl0dGluZycpO1xuICAgIH1cbiAgfSwgW3RyYW5zaXRpb24sIHNldFJlcXVlc3RTdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRhY3RGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICB7cmVxdWVzdFN0YXRlID09PSAnc3VjY2VzcycgJiYgKFxuICAgICAgICA8U3VjY2Vzc01lc3NhZ2U+XG4gICAgICAgICAgPGRpdj5TdWNjZXNzITwvZGl2PlxuICAgICAgICAgIDxTdWNjZXNzWCBvbkNsaWNrPXsoKSA9PiBzZXRSZXF1ZXN0U3RhdGUoJ2lkbGUnKX0+WDwvU3VjY2Vzc1g+XG4gICAgICAgIDwvU3VjY2Vzc01lc3NhZ2U+XG4gICAgICApfVxuICAgICAgPGZpZWxkc2V0IFxuICAgICAgICBkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnfSBcbiAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBib3JkZXI6ICdub25lJ319XG4gICAgICA+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT0nbmFtZScgXG4gICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgdmFsdWU9e25hbWV9IFxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT0nc3ViamVjdCcgXG4gICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgdmFsdWU9e3N1YmplY3R9IFxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRTdWJqZWN0KGV2ZW50LnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT0nbWVzc2FnZScgXG4gICAgICAgICAgdHlwZT0ndGV4dGFyZWEnIFxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSBcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgLz5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8YnV0dG9uIFxuICAgICAgICB0eXBlPSdzdWJtaXQnIFxuICAgICAgICBkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnfVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvU3R5bGVkQ29udGFjdEZvcm0+XG4gIClcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5pbXBvcnQgKiBhcyBJY29ueiBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbmltcG9ydCB7IENvbnRhY3RJY29uRGF0YSB9IGZyb20gXCJ+L3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWN0UGFnZUljb24oe2ljb25OYW1lLCBocmVmLCBpbmRleH06IENvbnRhY3RJY29uRGF0YSAmIHtpbmRleDogbnVtYmVyfSl7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGtleT17aWNvbk5hbWV9XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcgfX1cbiAgICA+XG4gICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgIGljb249e1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICBpbmRleCA9PT0gMiA/IEljb256W2ljb25OYW1lXSA6IEljb25zW2ljb25OYW1lXVxuICAgICAgICB9XG4gICAgICAgIHNpemU9XCI2eFwiXG4gICAgICAvPlxuICAgIDwvYT4gICAgICAgICAgICBcbiAgKVxufSIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHNlbmRncmlkIGZyb20gJ0BzZW5kZ3JpZC9tYWlsJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7cmVxdWVzdH06IHtyZXF1ZXN0OiBSZXF1ZXN0fSl7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgY29uc3QgbXNnID0ge1xuICAgIHRvOiAnYW5kcmV3YW5nZWxsZUBnbWFpbC5jb20nLCAvLyBDaGFuZ2UgdG8geW91ciByZWNpcGllbnRcbiAgICBmcm9tOiBgd2Vic2l0ZU1lc3NhZ2VAYW5kcmV3YW5nZWxsZS5jb21gLCAvLyBDaGFuZ2UgdG8geW91ciB2ZXJpZmllZCBzZW5kZXJcbiAgICBzdWJqZWN0OiBgJHtkYXRhLm5hbWV9LSR7ZGF0YS5zdWJqZWN0fWAsXG4gICAgdGV4dDogZGF0YS5tZXNzYWdlXG4gIH1cbiAgc2VuZGdyaWQuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRfR1JJRF9BUElfS0VZISlcbiAgYXdhaXQgc2VuZGdyaWQuc2VuZChtc2cpLnRoZW4ocmVzID0+IHJlcykuY2F0Y2goZSA9PiBlLm1lc3NhZ2UpXG5cblxuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnc3VjY2Vzcyd9KTtcbiAgXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc3RhdHVzOiAyMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBY2Nlc3MtQ29udHJvbGwtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCl7XG4gIHJldHVybiByZWRpcmVjdCgnL2NvbnRhY3QnKVxufSIsICJpbXBvcnQgeyBwb3J0Zm9saW9EYXRhIH0gZnJvbSBcIn4vdXRpbHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpe1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9ydGZvbGlvRGF0YSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc3RhdHVzOiAyMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9XG4gIH07XG4gIFxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpXG59IiwgIlxuZXhwb3J0IHR5cGUgQ29udGFjdEljb25EYXRhID0ge1xuICBocmVmOiBzdHJpbmc7XG4gIGljb25OYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFjdEljb25zOiBDb250YWN0SWNvbkRhdGFbXSA9IFtcbiAgeyBocmVmOiAnaHR0cDovL3d3dy5naXRodWIuY29tL2FuZHJld2FuZ2VsbGUnLCBpY29uTmFtZTogJ2ZhR2l0aHViJyB9LFxuICB7IGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW5kcmV3LWFuZ2VsbGUtMjEyOTk3NzQvJywgaWNvbk5hbWU6ICdmYUxpbmtlZGluJyB9LFxuICB7IGhyZWY6ICdtYWlsdG86YW5kcmV3YW5nZWxsZUBnbWFpbC5jb20/JnN1YmplY3Q9RGV2ZWxvcG1lbnQgU2VydmljZXMgSW5xdWlyeScsIGljb25OYW1lOiAnZmFFbnZlbG9wZVNxdWFyZScgfVxuXTtcblxuZXhwb3J0IHR5cGUgUG9ydGZvbGlvRGF0YSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZ2l0aHViTGluazogc3RyaW5nO1xuICBkZW1vTGluaz86IHN0cmluZztcbiAgZGVtb1RleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBwb3J0Zm9saW9EYXRhOiBQb3J0Zm9saW9EYXRhW10gPSBbXG4gIHtcbiAgICB0aXRsZTogJ1JlYWN0IEdsaWRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ2EgbXVsdGkgcHVycG9zZSBjYXJvdXNlbCBtb2R1bGUgYnVpbHQgaW4gcmVhY3QnLFxuICAgIGdpdGh1Ykxpbms6ICdodHRwOi8vd3d3LmdpdGh1Yi5jb20vYW5kcmV3YW5nZWxsZS9yZWFjdC1nbGlkZScsXG4gICAgZGVtb0xpbms6ICdodHRwczovL2NvZGVzYW5kYm94LmlvL3MvcjcxNjY3MzNsbScsXG4gICAgZGVtb1RleHQ6ICdEZW1vJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSZWFjdCBQYXlQYWwgQnV0dG9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYnV0dG9uIGNvbXBvbmVudCB0byBpbXBsZW1lbnQgUGF5UGFsXFwncyBFeHByZXNzIENoZWNrb3V0IGluIFJlYWN0JyxcbiAgICBnaXRodWJMaW5rOiAnaHR0cDovL3d3dy5naXRodWIuY29tL2FuZHJld2FuZ2VsbGUvcmVhY3QtcGF5cGFsLWJ1dHRvbicsXG4gICAgZGVtb0xpbms6ICcnLFxuICAgIGRlbW9UZXh0OiAnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXZWJzeW50aCcsXG4gICAgZGVzY3JpcHRpb246ICdBIHN5bnRoZXNpemVyIGJ1aWx0IGFzIGEgd2ViYXBwIHVzaW5nIHRoZSBXZWIgQXVkaW8gQVBJJyxcbiAgICBnaXRodWJMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJld2FuZ2VsbGUvd2Vic3ludGgnLFxuICAgIGRlbW9MaW5rOiAnJyxcbiAgICBkZW1vVGV4dDogJycgXG4gIH1cbl07IiwgImltcG9ydCB7IGNvbnRhY3RJY29ucyB9IGZyb20gXCJ+L3V0aWxzL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCl7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb250YWN0SWNvbnMpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHN0YXR1czogMjAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucylcbn0iLCAiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHsgQ2F0Y2hCb3VuZGFyeSwgUG9ydGZvbGlvQ2FyZCB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBXcmFwcGVyLCBTcGxpdExlZnQsIFNwbGl0UmlnaHQsIE5hdkl0ZW0sIE5hbWVXcmFwcGVyLCBOYXZMaXN0IH0gZnJvbSAnfi9zdHlsZXMnO1xuaW1wb3J0IHsgUG9ydGZvbGlvRGF0YSB9IGZyb20gJ34vdXRpbHMnO1xuXG5jb25zdCBwb3J0Zm9saW9EYXRhUGF0aCA9ICdodHRwOi8vYW5kcmV3YW5nZWxsZS5jb20vcmVzb3VyY2VzL3BvcnRmb2xpbyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgYXJncyA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocG9ydGZvbGlvRGF0YVBhdGgpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7ZXJyb3J9OiB7ZXJyb3I6IEVycm9yfSl7XG4gIHJldHVybihcbiAgICA8Q2F0Y2hCb3VuZGFyeSBlcnJvcj17ZXJyb3J9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCl7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPFBvcnRmb2xpb0RhdGFbXT4oKTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxTcGxpdExlZnQ+XG4gICAgICAgIDxOYW1lV3JhcHBlcj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIG51bGx9XG4gICAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgIT09ICdsb2FkaW5nJyAmJiAoXG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChwb3J0Zm9saW9EYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCAmJiA8aHIgLz59XG4gICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9DYXJkIHsuLi5wb3J0Zm9saW9EYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9OYW1lV3JhcHBlcj5cbiAgICAgIDwvU3BsaXRMZWZ0PlxuICAgICAgXG4gICAgICA8U3BsaXRSaWdodD5cbiAgICAgICAgPE5hdkxpc3Q+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgdGV4dERlY29yYXRpb246ICdub25lJ319PkhvbWU8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9jb250YWN0JyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2TGlzdD5cbiAgICAgIDwvU3BsaXRSaWdodD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59IiwgImltcG9ydCB7IExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IFdyYXBwZXIsIFNwbGl0TGVmdCwgU3BsaXRSaWdodCwgTmF2SXRlbSwgTmF2TGlzdCwgQ29udGFjdFdyYXBwZXIsIENlbnRlckl0ZW1zIH0gZnJvbSBcIn4vc3R5bGVzXCI7XG5pbXBvcnQgeyBDYXRjaEJvdW5kYXJ5LCBDb250YWN0Rm9ybSwgQ29udGFjdFBhZ2VJY29uIH0gZnJvbSBcIn4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ29udGFjdEljb25EYXRhIH0gZnJvbSBcIn4vdXRpbHNcIjtcblxuY29uc3QgY29udGFjdERhdGFQYXRoID0gJ2h0dHA6Ly9hbmRyZXdhbmdlbGxlLmNvbS9yZXNvdXJjZXMvY29udGFjdCc7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgYXJncyA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29udGFjdERhdGFQYXRoKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoe2Vycm9yfToge2Vycm9yOiBFcnJvcn0pe1xuICByZXR1cm4gKFxuICAgIDxDYXRjaEJvdW5kYXJ5IGVycm9yPXtlcnJvcn0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCl7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPENvbnRhY3RJY29uRGF0YVtdPigpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNwbGl0TGVmdD5cbiAgICAgICAgPENlbnRlckl0ZW1zPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q29udGFjdFdyYXBwZXI+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlID09PSAnbG9hZGluZycgJiYgbnVsbH1cbiAgICAgICAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgIT09ICdsb2FkaW5nJyAmJiBkYXRhLm1hcCgoaWNvbkRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbnRhY3RQYWdlSWNvbiBrZXk9e2luZGV4fSB7Li4uaWNvbkRhdGF9IGluZGV4PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgKSl9ICBcbiAgICAgICAgICAgIDwvQ29udGFjdFdyYXBwZXI+XG4gICAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DZW50ZXJJdGVtcz5cbiAgICAgIDwvU3BsaXRMZWZ0PlxuICAgIFxuICAgICAgPFNwbGl0UmlnaHQ+XG4gICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZSd9fT5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvcG9ydGZvbGlvJyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPC9OYXZMaXN0PlxuICAgICAgPC9TcGxpdFJpZ2h0PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgXG4gIFdyYXBwZXIsICBcbiAgTmFtZVRleHQsIFxuICBOYW1lVGl0bGUsIFxuICBOYW1lV3JhcHBlciwgXG4gIFNwbGl0TGVmdCwgXG4gIFNwbGl0UmlnaHQsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpc3Rcbn0gZnJvbSAnfi9zdHlsZXMvSG9tZS5zdHlsZWQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNwbGl0TGVmdD5cbiAgICAgICAgPE5hbWVXcmFwcGVyPlxuICAgICAgICAgIDxOYW1lVGV4dD5BbmRyZXcgQW5nZWxsZTwvTmFtZVRleHQ+XG4gICAgICAgICAgPE5hbWVUaXRsZT5mcm9udCBlbmQgc29mdHdhcmUgZGV2ZWxvcGVyPC9OYW1lVGl0bGU+XG4gICAgICAgIDwvTmFtZVdyYXBwZXI+XG4gICAgICA8L1NwbGl0TGVmdD5cblxuICAgICAgPFNwbGl0UmlnaHQ+XG4gICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9wb3J0Zm9saW8nIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZSd9fT5Qb3J0Zm9saW88L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9jb250YWN0JyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2TGlzdD5cbiAgICAgIDwvU3BsaXRSaWdodD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3Mi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

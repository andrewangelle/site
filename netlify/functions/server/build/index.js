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
    padding: 8px;
  }

  input[type='textarea'] {
    padding: 8px 100px 100px 8px;  
  }

  button {
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border-radius: 8px;
    padding: 8px;
    margin: 10px auto;
    align-self: flex-end;
    cursor: pointer;

    &:active {
      background: lightskyblue;
    }
  }
`;
var StyledFieldSet = import_styled_components2.default.fieldset` 
  display: flex; 
  flex-direction: column; 
  border: none;
`;
var SuccessMessage = import_styled_components2.default.div` 
  width: 100%;
  height: 25px;
  margin: auto;
  background: lightgreen;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  font-weight: 600;
  font-family: Montserrat;
`;
var ErrorMessage = (0, import_styled_components2.default)(SuccessMessage)`
  background: indianred;
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
  async function onFormSubmission() {
    try {
      const response = await submitForm();
      if (response.message === "success") {
        setRequestState("success");
      }
      if (response.message === "error") {
        setRequestState("error");
      }
      setName("");
      setSubject("");
      setMessage("");
    } catch (e) {
      setRequestState("error");
    }
  }
  function onSubmit(event) {
    event == null ? void 0 : event.preventDefault();
    return onFormSubmission();
  }
  return /* @__PURE__ */ React.createElement(StyledContactForm, {
    onSubmit
  }, requestState === "success" && /* @__PURE__ */ React.createElement(SuccessMessage, null, /* @__PURE__ */ React.createElement("div", null, "Success!"), /* @__PURE__ */ React.createElement(SuccessX, {
    onClick: () => setRequestState("idle")
  }, "X")), requestState === "error" && /* @__PURE__ */ React.createElement(ErrorMessage, null, /* @__PURE__ */ React.createElement("div", null, "Error!"), /* @__PURE__ */ React.createElement(SuccessX, {
    onClick: () => setRequestState("idle")
  }, "X")), /* @__PURE__ */ React.createElement(StyledFieldSet, {
    disabled: transition.state === "submitting"
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
  try {
    const data = await request.json();
    const msg = {
      to: "andrewangelle@gmail.com",
      from: `websiteMessage@andrewangelle.com`,
      subject: `${data.name}-${data.subject}`,
      text: data.message
    };
    import_mail.default.setApiKey(process.env.SEND_GRID_API_KEY);
    await import_mail.default.send(msg);
    const body = JSON.stringify({ message: "success" });
    const options = {
      status: 200,
      headers: {
        "Access-Controll-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
    return new Response(body, options);
  } catch (e) {
    const body = JSON.stringify({ message: "error" });
    const options = {
      status: 500,
      headers: {
        "Access-Controll-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
    return new Response(body, options);
  }
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
  },
  {
    title: "Stacks - a trello clone",
    description: "A full stack task management web app built with React, Remix, Supabase",
    githubLink: "https://github.com/andrewangelle/stacks",
    demoLink: "https://stacks-trello-clone.netlify.app/",
    demoText: "Demo"
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
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(SplitLeft, null, transition.state === "loading" && null, transition.state !== "loading" && /* @__PURE__ */ React.createElement(CenterItems, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ContactWrapper, null, data.map((iconData, index) => /* @__PURE__ */ React.createElement(ContactPageIcon, __spreadProps(__spreadValues({
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTm90Rm91bmQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvQ29udGFjdC5zdHlsZWQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvSG9tZS5zdHlsZWQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvUG9ydGZvbGlvLnN0eWxlZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3N0eWxlcy9HbG9iYWxGb250cy50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Qb3J0Zm9saW9DYXJkLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DYXRjaEJvdW5kYXJ5LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29udGFjdFBhZ2VJY29uLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QtZm9ybS50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL3BvcnRmb2xpby50cyIsICIuLi8uLi8uLi8uLi9hcHAvdXRpbHMvY29uc3RhbnRzLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3JvdXRlcy9yZXNvdXJjZXMvY29udGFjdC50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcG9ydGZvbGlvLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvY29udGFjdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QtZm9ybS50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3JvdXRlcy9yZXNvdXJjZXMvcG9ydGZvbGlvLnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL3Jlc291cmNlcy9jb250YWN0LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL3BvcnRmb2xpby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvY29udGFjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9yZXNvdXJjZXMvY29udGFjdC1mb3JtXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QtZm9ybVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlc291cmNlcy9jb250YWN0LWZvcm1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9yZXNvdXJjZXMvcG9ydGZvbGlvXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzL3BvcnRmb2xpb1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlc291cmNlcy9wb3J0Zm9saW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9yZXNvdXJjZXMvY29udGFjdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Jlc291cmNlcy9jb250YWN0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVzb3VyY2VzL2NvbnRhY3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9wb3J0Zm9saW9cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wb3J0Zm9saW9cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwb3J0Zm9saW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9jb250YWN0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG5cbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIHNoZWV0LmNvbGxlY3RTdHlsZXMoXG4gICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgIClcbiAgKTtcblxuICBjb25zdCBzdHlsZXMgPSBzaGVldC5nZXRTdHlsZVRhZ3MoKTtcbiAgXG4gIG1hcmt1cCA9IG1hcmt1cC5yZXBsYWNlKFwiX19TVFlMRVNfX1wiLCBzdHlsZXMpO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBOb3RGb3VuZCB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tIFwiLi9zdHlsZXMvR2xvYmFsRm9udHNcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQW5kcmV3IEFuZ2VsbGU6IGZyb250IGVuZCBzb2Z0d2FyZSBkZXZlbG9wZXJcIiB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIHJldHVybiAoXG4gICAgPE5vdEZvdW5kIC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAge3R5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgID8gXCJfX1NUWUxFU19fXCJcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPEdsb2JhbEZvbnRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTWV0YSwgTGlua3MsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNwbGl0TGVmdCwgTmFtZVdyYXBwZXIsIE5hbWVUZXh0LCBOYW1lVGl0bGUsIFNwbGl0UmlnaHQgfSBmcm9tIFwifi9zdHlsZXNcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tIFwifi9zdHlsZXMvR2xvYmFsRm9udHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5Pb3BzITwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7dHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgPyBcIl9fU1RZTEVTX19cIlxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8R2xvYmFsRm9udHMgLz5cbiAgICAgICAgPFNwbGl0TGVmdD5cbiAgICAgICAgICA8TmFtZVdyYXBwZXI+XG4gICAgICAgICAgICA8TmFtZVRleHQ+XG4gICAgICAgICAgICAgIE9vcHMhXG4gICAgICAgICAgICA8L05hbWVUZXh0PlxuICAgICAgICAgICAgPE5hbWVUaXRsZT5cbiAgICAgICAgICAgICAge2NhdWdodC5zdGF0dXN9IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgICAgIDwvTmFtZVRpdGxlPlxuICAgICAgICAgIDwvTmFtZVdyYXBwZXI+XG4gICAgICAgIDwvU3BsaXRMZWZ0PlxuICAgICAgICA8U3BsaXRSaWdodD48L1NwbGl0UmlnaHQ+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufSIsICJpbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIHdpZHRoOiA3MiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gID4gKiB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENlbnRlckl0ZW1zID0gc3R5bGVkLmRpdmAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29udGFjdEZvcm0gPSBzdHlsZWQoRm9ybSlgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IGF1dG87XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT0ndGV4dGFyZWEnXSB7XG4gICAgcGFkZGluZzogOHB4IDEwMHB4IDEwMHB4IDhweDsgIFxuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRza3libHVlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpZWxkU2V0ID0gc3R5bGVkLmZpZWxkc2V0YCBcbiAgZGlzcGxheTogZmxleDsgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBib3JkZXI6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3VjY2Vzc01lc3NhZ2UgPSBzdHlsZWQuZGl2YCBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xuICBwYWRkaW5nOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQoU3VjY2Vzc01lc3NhZ2UpYFxuICBiYWNrZ3JvdW5kOiBpbmRpYW5yZWQ7XG5gXG5cbmV4cG9ydCBjb25zdCBTdWNjZXNzWCA9IHN0eWxlZC5kaXZgIFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQoTGluaylgXG4gIG1hcmdpbjogMXJlbTtcbiAgYTotd2Via2l0LWFueS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgfVxuICBcbmBcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YCBcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLFxuICAgIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiQ29yZG92YVwiLCBcIk1vbnRzZXJyYXRcIixcbiAgICBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxuXG5gXG5cbmV4cG9ydCBjb25zdCBTcGxpdExlZnQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbmBcblxuZXhwb3J0IGNvbnN0IFNwbGl0UmlnaHQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI4JTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4QjAwMDA7XG4gIGNvbG9yOiAjZjBmMmY1O1xuYDtcblxuZXhwb3J0IGNvbnN0IE5hbWVXcmFwcGVyID0gc3R5bGVkLmRpdmAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0OSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI0cHgpIHtcbiAgICB0b3A6IDQ1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBOYW1lVGV4dCA9IHN0eWxlZC5kaXZgIFxuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDM7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYW1lVGl0bGUgPSBzdHlsZWQuZGl2YCBcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSc7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICM4QjAwMDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEZsaXBXcmFwcGVyID0gc3R5bGVkLmRpdmAgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA4OXZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg0cHgpIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYzMHB4KSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTmF2TGlzdCA9IHN0eWxlZC5kaXZgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICB0b3A6IDQ1JTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YCBcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICB9XG5gXG5cblxuXG4vLyAuYyB7XG4vLyAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4vLyB9XG4iLCAiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAzMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nLCBcInRudW1cIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gIH0gIFxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMC4yNXJlbSBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgID4gKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3NXB4KSB7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDMycHgpIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIG1hcmdpbjogMC41cmVtO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg0cHgpIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgfVxuYCIsICJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IE1vbnRzZXJyYXQgZnJvbSAnLi9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zic7XG5pbXBvcnQgTmFtZU9mWW91ckZvbnRXb2ZmMiBmcm9tICcuL25hbWVPZllvdXJGb250LndvZmYyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgc3JjOiBsb2NhbCgnTW9udHNlcnJhdCcpLFxuICAgIHVybCgke01vbnRzZXJyYXR9KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbmA7IiwgImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5cbmltcG9ydCB7IENhcmQgfSBmcm9tICd+L3N0eWxlcyc7XG5pbXBvcnQgeyBQb3J0Zm9saW9EYXRhIH0gZnJvbSBcIn4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBvcnRmb2xpb0NhcmQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGdpdGh1YkxpbmssIGRlbW9MaW5rLCBkZW1vVGV4dCB9OiBQb3J0Zm9saW9EYXRhKXtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e2dpdGh1Ykxpbmt9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtJY29ucy5mYUdpdGh1Yn1cbiAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICB7ZGVtb0xpbmsgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtkZW1vTGlua31cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvbj57ZGVtb1RleHR9PC9idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9DYXJkPlxuICApXG59IiwgImltcG9ydCB7IHVzZUNhdGNoLCBNZXRhLCBMaW5rcywgU2NyaXB0cyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgU3BsaXRMZWZ0LCBOYW1lV3JhcHBlciwgTmFtZVRleHQsIE5hbWVUaXRsZSwgU3BsaXRSaWdodCB9IGZyb20gXCJ+L3N0eWxlc1wiO1xuaW1wb3J0IEdsb2JhbEZvbnRzIGZyb20gXCJ+L3N0eWxlcy9HbG9iYWxGb250c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSh7ZXJyb3J9OiB7ZXJyb3I6IEVycm9yfSkge1xuICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5FcnJvciBjYXVnaHQ8L3RpdGxlPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8R2xvYmFsRm9udHMgLz5cbiAgICAgICAgPFNwbGl0TGVmdD5cbiAgICAgICAgICA8TmFtZVdyYXBwZXI+XG4gICAgICAgICAgICA8TmFtZVRleHQ+XG4gICAgICAgICAgICAgIE9vcHMhXG4gICAgICAgICAgICA8L05hbWVUZXh0PlxuICAgICAgICAgICAgPE5hbWVUaXRsZT5cbiAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L05hbWVUaXRsZT5cbiAgICAgICAgICA8L05hbWVXcmFwcGVyPlxuICAgICAgICA8L1NwbGl0TGVmdD5cbiAgICAgICAgPFNwbGl0UmlnaHQ+PC9TcGxpdFJpZ2h0PlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn0iLCAiaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IEVycm9yTWVzc2FnZSwgU3R5bGVkQ29udGFjdEZvcm0sIFN0eWxlZEZpZWxkU2V0LCBTdWNjZXNzTWVzc2FnZSwgU3VjY2Vzc1ggfSBmcm9tICd+L3N0eWxlcydcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCl7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdGUsIHNldFJlcXVlc3RTdGF0ZV0gPSB1c2VTdGF0ZSgnaWRsZScpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEZvcm0oKXtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe25hbWUsIHN1YmplY3QsIG1lc3NhZ2V9KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9yZXNvdXJjZXMvY29udGFjdC1mb3JtJywge21ldGhvZDogJ3Bvc3QnLCBib2R5fSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Gb3JtU3VibWlzc2lvbigpe1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN1Ym1pdEZvcm0oKTtcbiAgICAgIGlmKHJlc3BvbnNlLm1lc3NhZ2UgPT09ICdzdWNjZXNzJyl7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0ZSgnc3VjY2VzcycpXG4gICAgICB9XG5cbiAgICAgIGlmKHJlc3BvbnNlLm1lc3NhZ2UgPT09ICdlcnJvcicpe1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdGUoJ2Vycm9yJylcbiAgICAgIH1cblxuICAgICAgc2V0TmFtZSgnJylcbiAgICAgIHNldFN1YmplY3QoJycpXG4gICAgICBzZXRNZXNzYWdlKCcnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldFJlcXVlc3RTdGF0ZSgnZXJyb3InKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50PzogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pe1xuICAgIGV2ZW50Py5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBvbkZvcm1TdWJtaXNzaW9uKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRhY3RGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICB7cmVxdWVzdFN0YXRlID09PSAnc3VjY2VzcycgJiYgKFxuICAgICAgICA8U3VjY2Vzc01lc3NhZ2U+XG4gICAgICAgICAgPGRpdj5TdWNjZXNzITwvZGl2PlxuICAgICAgICAgIDxTdWNjZXNzWCBvbkNsaWNrPXsoKSA9PiBzZXRSZXF1ZXN0U3RhdGUoJ2lkbGUnKX0+WDwvU3VjY2Vzc1g+XG4gICAgICAgIDwvU3VjY2Vzc01lc3NhZ2U+XG4gICAgICApfVxuXG4gICAgICB7cmVxdWVzdFN0YXRlID09PSAnZXJyb3InICYmIChcbiAgICAgICAgPEVycm9yTWVzc2FnZT5cbiAgICAgICAgICA8ZGl2PkVycm9yITwvZGl2PlxuICAgICAgICAgIDxTdWNjZXNzWCBvbkNsaWNrPXsoKSA9PiBzZXRSZXF1ZXN0U3RhdGUoJ2lkbGUnKX0+WDwvU3VjY2Vzc1g+XG4gICAgICAgIDwvRXJyb3JNZXNzYWdlPlxuICAgICAgKX1cblxuICAgICAgPFN0eWxlZEZpZWxkU2V0IGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZyd9ID5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPSduYW1lJyBcbiAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICB2YWx1ZT17bmFtZX0gXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPlN1YmplY3Q8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPSdzdWJqZWN0JyBcbiAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICB2YWx1ZT17c3ViamVjdH0gXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFN1YmplY3QoZXZlbnQudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPSdtZXNzYWdlJyBcbiAgICAgICAgICB0eXBlPSd0ZXh0YXJlYScgXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9IFxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRGaWVsZFNldD5cblxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgdHlwZT0nc3VibWl0JyBcbiAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ31cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L1N0eWxlZENvbnRhY3RGb3JtPlxuICApXG59IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuaW1wb3J0ICogYXMgSWNvbnogZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5pbXBvcnQgeyBDb250YWN0SWNvbkRhdGEgfSBmcm9tIFwifi91dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFjdFBhZ2VJY29uKHtpY29uTmFtZSwgaHJlZiwgaW5kZXh9OiBDb250YWN0SWNvbkRhdGEgJiB7aW5kZXg6IG51bWJlcn0pe1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBrZXk9e2ljb25OYW1lfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnIH19XG4gICAgPlxuICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICBpY29uPXtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgaW5kZXggPT09IDIgPyBJY29ueltpY29uTmFtZV0gOiBJY29uc1tpY29uTmFtZV1cbiAgICAgICAgfVxuICAgICAgICBzaXplPVwiNnhcIlxuICAgICAgLz5cbiAgICA8L2E+ICAgICAgICAgICAgXG4gIClcbn0iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCBzZW5kZ3JpZCBmcm9tICdAc2VuZGdyaWQvbWFpbCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oe3JlcXVlc3R9OiB7cmVxdWVzdDogUmVxdWVzdH0pe1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCBtc2cgPSB7XG4gICAgICB0bzogJ2FuZHJld2FuZ2VsbGVAZ21haWwuY29tJywgLy8gQ2hhbmdlIHRvIHlvdXIgcmVjaXBpZW50XG4gICAgICBmcm9tOiBgd2Vic2l0ZU1lc3NhZ2VAYW5kcmV3YW5nZWxsZS5jb21gLCAvLyBDaGFuZ2UgdG8geW91ciB2ZXJpZmllZCBzZW5kZXJcbiAgICAgIHN1YmplY3Q6IGAke2RhdGEubmFtZX0tJHtkYXRhLnN1YmplY3R9YCxcbiAgICAgIHRleHQ6IGRhdGEubWVzc2FnZVxuICAgIH1cbiAgICBzZW5kZ3JpZC5zZXRBcGlLZXkocHJvY2Vzcy5lbnYuU0VORF9HUklEX0FQSV9LRVkhKVxuICAgIGF3YWl0IHNlbmRncmlkLnNlbmQobXNnKVxuICAgIFxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdzdWNjZXNzJ30pO1xuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbGwtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH07XG4gIFxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZSl7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ2Vycm9yJ30pO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHN0YXR1czogNTAwLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkFjY2Vzcy1Db250cm9sbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSAgICBcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCl7XG4gIHJldHVybiByZWRpcmVjdCgnL2NvbnRhY3QnKVxufSIsICJpbXBvcnQgeyBwb3J0Zm9saW9EYXRhIH0gZnJvbSBcIn4vdXRpbHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpe1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9ydGZvbGlvRGF0YSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc3RhdHVzOiAyMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9XG4gIH07XG4gIFxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpXG59IiwgIlxuZXhwb3J0IHR5cGUgQ29udGFjdEljb25EYXRhID0ge1xuICBocmVmOiBzdHJpbmc7XG4gIGljb25OYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFjdEljb25zOiBDb250YWN0SWNvbkRhdGFbXSA9IFtcbiAgeyBocmVmOiAnaHR0cDovL3d3dy5naXRodWIuY29tL2FuZHJld2FuZ2VsbGUnLCBpY29uTmFtZTogJ2ZhR2l0aHViJyB9LFxuICB7IGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW5kcmV3LWFuZ2VsbGUtMjEyOTk3NzQvJywgaWNvbk5hbWU6ICdmYUxpbmtlZGluJyB9LFxuICB7IGhyZWY6ICdtYWlsdG86YW5kcmV3YW5nZWxsZUBnbWFpbC5jb20/JnN1YmplY3Q9RGV2ZWxvcG1lbnQgU2VydmljZXMgSW5xdWlyeScsIGljb25OYW1lOiAnZmFFbnZlbG9wZVNxdWFyZScgfVxuXTtcblxuZXhwb3J0IHR5cGUgUG9ydGZvbGlvRGF0YSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZ2l0aHViTGluazogc3RyaW5nO1xuICBkZW1vTGluaz86IHN0cmluZztcbiAgZGVtb1RleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBwb3J0Zm9saW9EYXRhOiBQb3J0Zm9saW9EYXRhW10gPSBbXG4gIHtcbiAgICB0aXRsZTogJ1JlYWN0IEdsaWRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ2EgbXVsdGkgcHVycG9zZSBjYXJvdXNlbCBtb2R1bGUgYnVpbHQgaW4gcmVhY3QnLFxuICAgIGdpdGh1Ykxpbms6ICdodHRwOi8vd3d3LmdpdGh1Yi5jb20vYW5kcmV3YW5nZWxsZS9yZWFjdC1nbGlkZScsXG4gICAgZGVtb0xpbms6ICdodHRwczovL2NvZGVzYW5kYm94LmlvL3MvcjcxNjY3MzNsbScsXG4gICAgZGVtb1RleHQ6ICdEZW1vJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSZWFjdCBQYXlQYWwgQnV0dG9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYnV0dG9uIGNvbXBvbmVudCB0byBpbXBsZW1lbnQgUGF5UGFsXFwncyBFeHByZXNzIENoZWNrb3V0IGluIFJlYWN0JyxcbiAgICBnaXRodWJMaW5rOiAnaHR0cDovL3d3dy5naXRodWIuY29tL2FuZHJld2FuZ2VsbGUvcmVhY3QtcGF5cGFsLWJ1dHRvbicsXG4gICAgZGVtb0xpbms6ICcnLFxuICAgIGRlbW9UZXh0OiAnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXZWJzeW50aCcsXG4gICAgZGVzY3JpcHRpb246ICdBIHN5bnRoZXNpemVyIGJ1aWx0IGFzIGEgd2ViYXBwIHVzaW5nIHRoZSBXZWIgQXVkaW8gQVBJJyxcbiAgICBnaXRodWJMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJld2FuZ2VsbGUvd2Vic3ludGgnLFxuICAgIGRlbW9MaW5rOiAnJyxcbiAgICBkZW1vVGV4dDogJycgXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1N0YWNrcyAtIGEgdHJlbGxvIGNsb25lJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZnVsbCBzdGFjayB0YXNrIG1hbmFnZW1lbnQgd2ViIGFwcCBidWlsdCB3aXRoIFJlYWN0LCBSZW1peCwgU3VwYWJhc2UnLFxuICAgIGdpdGh1Ykxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYW5kcmV3YW5nZWxsZS9zdGFja3MnLFxuICAgIGRlbW9MaW5rOiAnaHR0cHM6Ly9zdGFja3MtdHJlbGxvLWNsb25lLm5ldGxpZnkuYXBwLycsXG4gICAgZGVtb1RleHQ6ICdEZW1vJyBcbiAgfSwgXG5dOyIsICJpbXBvcnQgeyBjb250YWN0SWNvbnMgfSBmcm9tIFwifi91dGlscy9jb25zdGFudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpe1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29udGFjdEljb25zKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBzdGF0dXM6IDIwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpXG59IiwgImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IENhdGNoQm91bmRhcnksIFBvcnRmb2xpb0NhcmQgfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgV3JhcHBlciwgU3BsaXRMZWZ0LCBTcGxpdFJpZ2h0LCBOYXZJdGVtLCBOYW1lV3JhcHBlciwgTmF2TGlzdCB9IGZyb20gJ34vc3R5bGVzJztcbmltcG9ydCB7IFBvcnRmb2xpb0RhdGEgfSBmcm9tICd+L3V0aWxzJztcblxuY29uc3QgcG9ydGZvbGlvRGF0YVBhdGggPSAnaHR0cDovL2FuZHJld2FuZ2VsbGUuY29tL3Jlc291cmNlcy9wb3J0Zm9saW8nO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jIGFyZ3MgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBvcnRmb2xpb0RhdGFQYXRoKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoe2Vycm9yfToge2Vycm9yOiBFcnJvcn0pe1xuICByZXR1cm4oXG4gICAgPENhdGNoQm91bmRhcnkgZXJyb3I9e2Vycm9yfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbygpe1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxQb3J0Zm9saW9EYXRhW10+KCk7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8U3BsaXRMZWZ0PlxuICAgICAgICA8TmFtZVdyYXBwZXI+XG4gICAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJyAmJiBudWxsfVxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlICE9PSAnbG9hZGluZycgJiYgKFxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgocG9ydGZvbGlvRGF0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDAgJiYgPGhyIC8+fVxuICAgICAgICAgICAgICAgICAgICA8UG9ydGZvbGlvQ2FyZCB7Li4ucG9ydGZvbGlvRGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTmFtZVdyYXBwZXI+XG4gICAgICA8L1NwbGl0TGVmdD5cbiAgICAgIFxuICAgICAgPFNwbGl0UmlnaHQ+XG4gICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZSd9fT5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvY29udGFjdCcgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgdGV4dERlY29yYXRpb246ICdub25lJ319PkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdkxpc3Q+XG4gICAgICA8L1NwbGl0UmlnaHQ+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufSIsICJpbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBXcmFwcGVyLCBTcGxpdExlZnQsIFNwbGl0UmlnaHQsIE5hdkl0ZW0sIE5hdkxpc3QsIENvbnRhY3RXcmFwcGVyLCBDZW50ZXJJdGVtcyB9IGZyb20gXCJ+L3N0eWxlc1wiO1xuaW1wb3J0IHsgQ2F0Y2hCb3VuZGFyeSwgQ29udGFjdEZvcm0sIENvbnRhY3RQYWdlSWNvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbnRhY3RJY29uRGF0YSB9IGZyb20gXCJ+L3V0aWxzXCI7XG5cbmNvbnN0IGNvbnRhY3REYXRhUGF0aCA9ICdodHRwOi8vYW5kcmV3YW5nZWxsZS5jb20vcmVzb3VyY2VzL2NvbnRhY3QnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jIGFyZ3MgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbnRhY3REYXRhUGF0aCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHtlcnJvcn06IHtlcnJvcjogRXJyb3J9KXtcbiAgcmV0dXJuIChcbiAgICA8Q2F0Y2hCb3VuZGFyeSBlcnJvcj17ZXJyb3J9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpe1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxDb250YWN0SWNvbkRhdGFbXT4oKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxTcGxpdExlZnQ+XG4gICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlID09PSAnbG9hZGluZycgJiYgbnVsbH1cbiAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgIT09ICdsb2FkaW5nJyAmJiAoXG4gICAgICAgICAgPENlbnRlckl0ZW1zPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPENvbnRhY3RXcmFwcGVyPlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaWNvbkRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q29udGFjdFBhZ2VJY29uIGtleT17aW5kZXh9IHsuLi5pY29uRGF0YX0gaW5kZXg9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICkpfSAgXG4gICAgICAgICAgICAgIDwvQ29udGFjdFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DZW50ZXJJdGVtcz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3BsaXRMZWZ0PlxuICAgIFxuICAgICAgPFNwbGl0UmlnaHQ+XG4gICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZSd9fT5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvcG9ydGZvbGlvJyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPC9OYXZMaXN0PlxuICAgICAgPC9TcGxpdFJpZ2h0PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgXG4gIFdyYXBwZXIsICBcbiAgTmFtZVRleHQsIFxuICBOYW1lVGl0bGUsIFxuICBOYW1lV3JhcHBlciwgXG4gIFNwbGl0TGVmdCwgXG4gIFNwbGl0UmlnaHQsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpc3Rcbn0gZnJvbSAnfi9zdHlsZXMvSG9tZS5zdHlsZWQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNwbGl0TGVmdD5cbiAgICAgICAgPE5hbWVXcmFwcGVyPlxuICAgICAgICAgIDxOYW1lVGV4dD5BbmRyZXcgQW5nZWxsZTwvTmFtZVRleHQ+XG4gICAgICAgICAgPE5hbWVUaXRsZT5mcm9udCBlbmQgc29mdHdhcmUgZGV2ZWxvcGVyPC9OYW1lVGl0bGU+XG4gICAgICAgIDwvTmFtZVdyYXBwZXI+XG4gICAgICA8L1NwbGl0TGVmdD5cblxuICAgICAgPFNwbGl0UmlnaHQ+XG4gICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9wb3J0Zm9saW8nIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZSd9fT5Qb3J0Zm9saW88L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9jb250YWN0JyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2TGlzdD5cbiAgICAgIDwvU3BsaXRSaWdodD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDNUlsQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDcEQxQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNoQ2pDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxXQUFXO0FBSWYsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztBQUN4QyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBR25DLFdBQU8sS0FBSyxVQUFVLFFBQVEsU0FBVSxHQUFHO0FBQzFDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNuQ3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFDNUIsK0JBQWlDO0FBSWxCLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sUUFBUSxJQUFJO0FBRWxCLE1BQUksU0FBUyxrQ0FDWCxNQUFNLGNBQ0osb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBSXJELFFBQU0sU0FBUyxNQUFNO0FBRXJCLFdBQVMsT0FBTyxRQUFRLGNBQWM7QUFFdEMsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQzVCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9POzs7QUNQUDtBQUFBLG9CQUErQzs7O0FDQS9DO0FBQUEsb0JBQXFCO0FBQ3JCLGdDQUFtQjtBQUVaLElBQU0saUJBQWlCLGtDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQjlCLElBQU0sY0FBYyxrQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPM0IsSUFBTSxvQkFBb0IsdUNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9DakMsSUFBTSxpQkFBaUIsa0NBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU05QixJQUFNLGlCQUFpQixrQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhOUIsSUFBTSxlQUFlLHVDQUFPO0FBQUE7QUFBQTtBQUk1QixJQUFNLFdBQVcsa0NBQU87QUFBQTtBQUFBOzs7QUN2Ri9CO0FBQUEsb0JBQXFCO0FBQ3JCLGdDQUFtQjtBQUVaLElBQU0sVUFBVSx1Q0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3ZCLElBQU0sVUFBVSxrQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVdkIsSUFBTSxZQUFZLGtDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUXpCLElBQU0sYUFBYSxrQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUzFCLElBQU0sY0FBYyxrQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCM0IsSUFBTSxXQUFXLGtDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVV4QixJQUFNLFlBQVksa0NBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVXpCLElBQU0sY0FBYyxrQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCM0IsSUFBTSxVQUFVLGtDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZdkIsSUFBTSxVQUFVLGtDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDekc5QjtBQUFBLGdDQUFtQjtBQUVaLElBQU0sT0FBTyxrQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0YzQjtBQUFBLGdDQUFrQzs7Ozs7O0FBS2xDLElBQU8sc0JBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBSkxILG9CQUFvQjtBQUN6QixRQUFNLFNBQVM7QUFDZixTQUNFLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsU0FBRCxNQUFPLFVBQ1Asb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxPQUNDLE9BQU8sYUFBYSxjQUNqQixlQUNBLE9BRU4sb0NBQUMsUUFBRCxNQUNFLG9DQUFDLHFCQUFELE9BQ0Esb0NBQUMsV0FBRCxNQUNFLG9DQUFDLGFBQUQsTUFDRSxvQ0FBQyxVQUFELE1BQVUsVUFHVixvQ0FBQyxXQUFELE1BQ0csT0FBTyxRQUFPLEtBQUUsT0FBTyxlQUk5QixvQ0FBQyxZQUFELE9BQ0Esb0NBQUMsdUJBQUQ7QUFBQTs7O0FLN0JSO0FBQUEsK0JBQWdDO0FBQ2hDLFlBQXVCO0FBS2hCLHVCQUF1QixFQUFFLE9BQU8sYUFBYSxZQUFZLFVBQVUsWUFBMEI7QUFDbEcsU0FDRSxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUFLLFFBQ0wsb0NBQUMsS0FBRCxNQUFJLGNBQ0osb0NBQUMsVUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPO0FBQUEsS0FFaEIsb0NBQUMsMENBQUQ7QUFBQSxJQUNFLE1BQVk7QUFBQSxJQUNaLE1BQUs7QUFBQSxPQUdSLFlBQ0Msb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsT0FBTyxFQUFFLE9BQU87QUFBQSxLQUVoQixvQ0FBQyxVQUFELE1BQVM7QUFBQTs7O0FDNUJyQjtBQUFBLG9CQUErQztBQUl4Qyx1QkFBdUIsRUFBQyxTQUF3QjtBQUNyRCxVQUFRLElBQUksTUFBTTtBQUNsQixTQUNFLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsU0FBRCxNQUFPLGlCQUNQLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMscUJBQUQsT0FDQSxvQ0FBQyxXQUFELE1BQ0Usb0NBQUMsYUFBRCxNQUNFLG9DQUFDLFVBQUQsTUFBVSxVQUdWLG9DQUFDLFdBQUQsTUFDRyxNQUFNLFlBSWIsb0NBQUMsWUFBRCxPQUNBLG9DQUFDLHVCQUFEO0FBQUE7OztBQzFCUjtBQUFBLG1CQUFvQztBQUNwQyxvQkFBOEI7QUFJdkIsdUJBQXNCO0FBQzNCLFFBQU0sYUFBYTtBQUNuQixRQUFNLENBQUMsTUFBTSxXQUFXLDJCQUFTO0FBQ2pDLFFBQU0sQ0FBQyxTQUFTLGNBQWMsMkJBQVM7QUFDdkMsUUFBTSxDQUFDLFNBQVMsY0FBYywyQkFBUztBQUN2QyxRQUFNLENBQUMsY0FBYyxtQkFBbUIsMkJBQVM7QUFFakQsOEJBQTJCO0FBQ3pCLFVBQU0sT0FBTyxLQUFLLFVBQVUsRUFBQyxNQUFNLFNBQVM7QUFDNUMsVUFBTSxXQUFXLE1BQU0sTUFBTSwyQkFBMkIsRUFBQyxRQUFRLFFBQVE7QUFDekUsVUFBTSxPQUFPLE1BQU0sU0FBUztBQUM1QixXQUFPO0FBQUE7QUFHVCxvQ0FBaUM7QUFDL0IsUUFBSTtBQUNGLFlBQU0sV0FBVyxNQUFNO0FBQ3ZCLFVBQUcsU0FBUyxZQUFZLFdBQVU7QUFDaEMsd0JBQWdCO0FBQUE7QUFHbEIsVUFBRyxTQUFTLFlBQVksU0FBUTtBQUM5Qix3QkFBZ0I7QUFBQTtBQUdsQixjQUFRO0FBQ1IsaUJBQVc7QUFDWCxpQkFBVztBQUFBLGFBQ0osR0FBUDtBQUNBLHNCQUFnQjtBQUFBO0FBQUE7QUFJcEIsb0JBQWtCLE9BQW1DO0FBQ25ELG1DQUFPO0FBQ1AsV0FBTztBQUFBO0FBR1QsU0FDRSxvQ0FBQyxtQkFBRDtBQUFBLElBQW1CO0FBQUEsS0FDaEIsaUJBQWlCLGFBQ2hCLG9DQUFDLGdCQUFELE1BQ0Usb0NBQUMsT0FBRCxNQUFLLGFBQ0wsb0NBQUMsVUFBRDtBQUFBLElBQVUsU0FBUyxNQUFNLGdCQUFnQjtBQUFBLEtBQVMsT0FJckQsaUJBQWlCLFdBQ2hCLG9DQUFDLGNBQUQsTUFDRSxvQ0FBQyxPQUFELE1BQUssV0FDTCxvQ0FBQyxVQUFEO0FBQUEsSUFBVSxTQUFTLE1BQU0sZ0JBQWdCO0FBQUEsS0FBUyxPQUl0RCxvQ0FBQyxnQkFBRDtBQUFBLElBQWdCLFVBQVUsV0FBVyxVQUFVO0FBQUEsS0FDN0Msb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQU8sU0FDdEIsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBVSxXQUFTLFFBQVEsTUFBTSxPQUFPO0FBQUEsTUFHMUMsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQU8sWUFDdEIsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBVSxXQUFTLFdBQVcsTUFBTSxPQUFPO0FBQUEsTUFHN0Msb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQU8sWUFDdEIsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBVSxXQUFTLFdBQVcsTUFBTSxPQUFPO0FBQUEsT0FJL0Msb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsVUFBVSxXQUFXLFVBQVU7QUFBQSxLQUNoQztBQUFBOzs7QUN4RlA7QUFBQSxvQkFBa0I7QUFDbEIsZ0NBQWdDO0FBQ2hDLGFBQXVCO0FBQ3ZCLFlBQXVCO0FBSWhCLHlCQUF5QixFQUFDLFVBQVUsTUFBTSxTQUEwQztBQUN6RixTQUNFLG9EQUFDLEtBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMO0FBQUEsSUFDQSxRQUFPO0FBQUEsSUFDUCxPQUFPLEVBQUUsT0FBTztBQUFBLEtBRWhCLG9EQUFDLDJDQUFEO0FBQUEsSUFDRSxNQUVFLFVBQVUsSUFBSSxNQUFNLFlBQVksT0FBTTtBQUFBLElBRXhDLE1BQUs7QUFBQTtBQUFBOzs7QVRSTixJQUFNLE9BQXFCLE1BQU07QUFDdEMsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUdYLDBCQUF5QjtBQUM5QixTQUNFLG9DQUFDLFVBQUQ7QUFBQTtBQUdXLGVBQWU7QUFDNUIsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsT0FDQyxPQUFPLGFBQWEsY0FDakIsZUFDQSxPQUVOLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQyxxQkFBRCxPQUMyQyxvQ0FBQywwQkFBRDtBQUFBOzs7QVV0Q25EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF5QjtBQUN6QixrQkFBcUI7QUFFckIsc0JBQTZCLEVBQUMsV0FBNkI7QUFDekQsTUFBSTtBQUNGLFVBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsVUFBTSxNQUFNO0FBQUEsTUFDVixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixTQUFTLEdBQUcsS0FBSyxRQUFRLEtBQUs7QUFBQSxNQUM5QixNQUFNLEtBQUs7QUFBQTtBQUViLHdCQUFTLFVBQVUsUUFBUSxJQUFJO0FBQy9CLFVBQU0sb0JBQVMsS0FBSztBQUVwQixVQUFNLE9BQU8sS0FBSyxVQUFVLEVBQUUsU0FBUztBQUV2QyxVQUFNLFVBQVU7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLGdDQUFnQztBQUFBLFFBQ2hDLGdCQUFnQjtBQUFBO0FBQUE7QUFJcEIsV0FBTyxJQUFJLFNBQVMsTUFBTTtBQUFBLFdBQ25CLEdBQVA7QUFDQSxVQUFNLE9BQU8sS0FBSyxVQUFVLEVBQUUsU0FBUztBQUV2QyxVQUFNLFVBQVU7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLGdDQUFnQztBQUFBLFFBQ2hDLGdCQUFnQjtBQUFBO0FBQUE7QUFJcEIsV0FBTyxJQUFJLFNBQVMsTUFBTTtBQUFBO0FBQUE7QUFJOUIsd0JBQThCO0FBQzVCLFNBQU8sNEJBQVM7QUFBQTs7O0FDMUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQU1PLElBQU0sZUFBa0M7QUFBQSxFQUM3QyxFQUFFLE1BQU0sdUNBQXVDLFVBQVU7QUFBQSxFQUN6RCxFQUFFLE1BQU0sd0RBQXdELFVBQVU7QUFBQSxFQUMxRSxFQUFFLE1BQU0sd0VBQXdFLFVBQVU7QUFBQTtBQVdyRixJQUFNLGdCQUFpQztBQUFBLEVBQzVDO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUE7QUFBQSxFQUVaO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUE7QUFBQSxFQUVaO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUE7QUFBQSxFQUVaO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUE7QUFBQTs7O0FEN0NkLHlCQUE4QjtBQUM1QixRQUFNLE9BQU8sS0FBSyxVQUFVO0FBQzVCLFFBQU0sVUFBVTtBQUFBLElBQ2QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUE7QUFBQTtBQUlwQixTQUFPLElBQUksU0FBUyxNQUFNO0FBQUE7OztBRVg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEseUJBQThCO0FBQzVCLFFBQU0sT0FBTyxLQUFLLFVBQVU7QUFDNUIsUUFBTSxVQUFVO0FBQUEsSUFDZCxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQTtBQUFBO0FBSXBCLFNBQU8sSUFBSSxTQUFTLE1BQU07QUFBQTs7O0FDWDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXlCO0FBQ3pCLG9CQUFtRTtBQU1uRSxJQUFNLG9CQUFvQjtBQUVuQixJQUFNLFVBQXlCLE9BQU0sU0FBUTtBQUNsRCxRQUFNLFdBQVcsTUFBTSxNQUFNO0FBQzdCLFFBQU0sT0FBTyxNQUFNLFNBQVM7QUFDNUIsU0FBTztBQUFBO0FBR0YsdUJBQXVCLEVBQUMsU0FBdUI7QUFDcEQsU0FDRSxvQ0FBQyxlQUFEO0FBQUEsSUFBZTtBQUFBO0FBQUE7QUFJSixxQkFBb0I7QUFDakMsUUFBTSxhQUFhO0FBQ25CLFFBQU0sT0FBTztBQUNiLFNBQ0Usb0NBQUMsU0FBRCxNQUNFLG9DQUFDLFdBQUQsTUFDRSxvQ0FBQyxhQUFELE1BQ0csV0FBVyxVQUFVLGFBQWEsTUFDbEMsV0FBVyxVQUFVLGFBQ3BCLG9DQUFDLFdBQUQsTUFDRyxLQUFLLElBQUksQ0FBQyxnQkFBZSxVQUN4QixvQ0FBQyx3QkFBRDtBQUFBLElBQVUsS0FBSztBQUFBLEtBQ1osVUFBVSxLQUFLLG9DQUFDLE1BQUQsT0FDZCxvQ0FBQyxlQUFELG1CQUFtQixrQkFDckIsb0NBQUMsTUFBRCxZQVFaLG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxTQUFELE1BQ0Usb0NBQUMsU0FBRCxNQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSSxPQUFPLEVBQUMsT0FBTyxTQUFTLGdCQUFnQjtBQUFBLEtBQVMsVUFFaEUsb0NBQUMsU0FBRCxNQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBVyxPQUFPLEVBQUMsT0FBTyxTQUFTLGdCQUFnQjtBQUFBLEtBQVM7QUFBQTs7O0FDakRqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFtRTtBQU1uRSxJQUFNLGtCQUFrQjtBQUVqQixJQUFNLFVBQXlCLE9BQU0sU0FBUTtBQUNsRCxRQUFNLFdBQVcsTUFBTSxNQUFNO0FBQzdCLFFBQU0sT0FBTyxNQUFNLFNBQVM7QUFDNUIsU0FBTztBQUFBO0FBR0Ysd0JBQXVCLEVBQUMsU0FBdUI7QUFDcEQsU0FDRSxvQ0FBQyxlQUFEO0FBQUEsSUFBZTtBQUFBO0FBQUE7QUFJSixtQkFBa0I7QUFDL0IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxhQUFhO0FBQ25CLFNBQ0Usb0NBQUMsU0FBRCxNQUNFLG9DQUFDLFdBQUQsTUFDRyxXQUFXLFVBQVUsYUFBYSxNQUNsQyxXQUFXLFVBQVUsYUFDcEIsb0NBQUMsYUFBRCxNQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxnQkFBRCxNQUNHLEtBQUssSUFBSSxDQUFDLFVBQVUsVUFDbkIsb0NBQUMsaUJBQUQ7QUFBQSxJQUFpQixLQUFLO0FBQUEsS0FBVyxXQUFqQztBQUFBLElBQTJDO0FBQUEsU0FHL0Msb0NBQUMsYUFBRCxVQU1SLG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxTQUFELE1BQ0Usb0NBQUMsU0FBRCxNQUNFLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSSxPQUFPLEVBQUMsT0FBTyxTQUFTLGdCQUFnQjtBQUFBLEtBQVMsVUFFaEUsb0NBQUMsU0FBRCxNQUNFLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBYSxPQUFPLEVBQUMsT0FBTyxTQUFTLGdCQUFnQjtBQUFBLEtBQVM7QUFBQTs7O0FDL0NuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFCO0FBYU4saUJBQWlCO0FBQzlCLFNBQ0Usb0NBQUMsU0FBRCxNQUNFLG9DQUFDLFdBQUQsTUFDRSxvQ0FBQyxhQUFELE1BQ0Usb0NBQUMsVUFBRCxNQUFVLG1CQUNWLG9DQUFDLFdBQUQsTUFBVyxtQ0FJZixvQ0FBQyxZQUFELE1BQ0Usb0NBQUMsU0FBRCxNQUNFLG9DQUFDLFNBQUQsTUFDRSxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQWEsT0FBTyxFQUFDLE9BQU8sU0FBUyxnQkFBZ0I7QUFBQSxLQUFTLGVBRXpFLG9DQUFDLFNBQUQsTUFDRSxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQVcsT0FBTyxFQUFDLE9BQU8sU0FBUyxnQkFBZ0I7QUFBQSxLQUFTO0FBQUE7OztBbEJwQmpGLG9CQUFrQztBQUMzQixJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsaUNBQWlDO0FBQUEsSUFDL0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFViw4QkFBOEI7QUFBQSxJQUM1QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLDRCQUE0QjtBQUFBLElBQzFCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsb0JBQW9CO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixrQkFBa0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==

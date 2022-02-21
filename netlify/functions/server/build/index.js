var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
var import_remix5 = __toModule(require_remix());

// app/components/NotFound.tsx
init_react();
var import_remix3 = __toModule(require_remix());

// app/styles/Contact.styled.tsx
init_react();
var import_styled_components2 = __toModule(require("styled-components"));
var ContactWrapper = import_styled_components2.default.div`
  background: #f0f0f0;
  width: 72%;
  height: 100%;
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

// app/styles/Home.styled.tsx
init_react();
var import_remix2 = __toModule(require_remix());
var import_styled_components3 = __toModule(require("styled-components"));
var NavLink = (0, import_styled_components3.default)(import_remix2.Link)`
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
  const caught = (0, import_remix3.useCatch)();
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oops!"), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(GlobalFonts_default, null), /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, /* @__PURE__ */ React.createElement(NameText, null, "Oops!"), /* @__PURE__ */ React.createElement(NameTitle, null, caught.status, " ", caught.statusText))), /* @__PURE__ */ React.createElement(SplitRight, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)));
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
var import_remix4 = __toModule(require_remix());
function CatchBoundary({ error }) {
  console.log(error.message);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Error caught"), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(GlobalFonts_default, null), /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, /* @__PURE__ */ React.createElement(NameText, null, "Oops!"), /* @__PURE__ */ React.createElement(NameTitle, null, error.message))), /* @__PURE__ */ React.createElement(SplitRight, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null)));
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
  }), /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null), /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), /* @__PURE__ */ React.createElement(GlobalFonts_default, null), /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null)));
}

// route-module:/Users/andrewangelle/code/site/app/routes/resources/portfolio.ts
var portfolio_exports = {};
__export(portfolio_exports, {
  loader: () => loader
});
init_react();
async function loader() {
  const data = [
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
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// route-module:/Users/andrewangelle/code/site/app/routes/resources/contact.ts
var contact_exports = {};
__export(contact_exports, {
  loader: () => loader2
});
init_react();
async function loader2() {
  const contactIcons = [
    { href: "http://www.github.com/andrewangelle", iconName: "faGithub" },
    { href: "https://www.linkedin.com/in/andrew-angelle-21299774/", iconName: "faLinkedin" },
    { href: "mailto:andrewangelle@gmail.com?&subject=Development Services Inquiry", iconName: "faEnvelopeSquare" }
  ];
  return new Response(JSON.stringify(contactIcons), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// route-module:/Users/andrewangelle/code/site/app/routes/portfolio.tsx
var portfolio_exports2 = {};
__export(portfolio_exports2, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Portfolio,
  loader: () => loader3
});
init_react();
var import_react = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
var portfolioDataPath = "http://andrewangelle.com/resources/portfolio";
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(CatchBoundary, {
    error
  });
}
var loader3 = async (args) => {
  const response = await fetch(portfolioDataPath);
  const data = await response.json();
  return data;
};
function Portfolio() {
  const transition = (0, import_remix6.useTransition)();
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, transition.state === "loading" && null, transition.state !== "loading" && /* @__PURE__ */ React.createElement("section", null, data.map((portfolioData, index) => /* @__PURE__ */ React.createElement(import_react.Fragment, {
    key: index
  }, index === 0 && /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(PortfolioCard, __spreadValues({}, portfolioData)), /* @__PURE__ */ React.createElement("hr", null)))))), /* @__PURE__ */ React.createElement(SplitRight, null, /* @__PURE__ */ React.createElement(NavList, null, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/",
    style: { color: "white", textDecoration: "none" }
  }, "Home")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/contact",
    style: { color: "white", textDecoration: "none" }
  }, "Contact")))));
}

// route-module:/Users/andrewangelle/code/site/app/routes/contact.tsx
var contact_exports2 = {};
__export(contact_exports2, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Contact,
  loader: () => loader4
});
init_react();
var import_react_fontawesome2 = __toModule(require("@fortawesome/react-fontawesome"));
var Icons2 = __toModule(require("@fortawesome/free-brands-svg-icons"));
var Iconz = __toModule(require("@fortawesome/free-solid-svg-icons"));
var import_remix7 = __toModule(require_remix());
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement(CatchBoundary, {
    error
  });
}
var contactDataPath = "http://andrewangelle.com/resources/contact";
var loader4 = async (args) => {
  const response = await fetch(contactDataPath);
  const data = await response.json();
  return data;
};
function Contact() {
  const data = (0, import_remix7.useLoaderData)();
  const transition = (0, import_remix7.useTransition)();
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(ContactWrapper, null, transition.state === "loading" && null, transition.state !== "loading" && data.map(({ href, iconName }, index) => {
    return /* @__PURE__ */ React.createElement("a", {
      key: iconName,
      href,
      target: "_blank",
      style: { color: "inherit" }
    }, /* @__PURE__ */ React.createElement(import_react_fontawesome2.FontAwesomeIcon, {
      icon: index === 2 ? Iconz[iconName] : Icons2[iconName],
      size: "6x"
    }));
  }))), /* @__PURE__ */ React.createElement(SplitRight, null, /* @__PURE__ */ React.createElement(NavList, null, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/",
    style: { color: "white", textDecoration: "none" }
  }, "Home")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
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
var import_remix8 = __toModule(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(SplitLeft, null, /* @__PURE__ */ React.createElement(NameWrapper, null, /* @__PURE__ */ React.createElement(NameText, null, "Andrew Angelle"), /* @__PURE__ */ React.createElement(NameTitle, null, "front end software developer"))), /* @__PURE__ */ React.createElement(SplitRight, null, /* @__PURE__ */ React.createElement(NavList, null, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/portfolio",
    style: { color: "white", textDecoration: "none" }
  }, "Portfolio")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTm90Rm91bmQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvQ29udGFjdC5zdHlsZWQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvSG9tZS5zdHlsZWQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zdHlsZXMvUG9ydGZvbGlvLnN0eWxlZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3N0eWxlcy9HbG9iYWxGb250cy50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Qb3J0Zm9saW9DYXJkLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DYXRjaEJvdW5kYXJ5LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL3BvcnRmb2xpby50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL3BvcnRmb2xpby50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL2NvbnRhY3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3JvdXRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9hbmRyZXdhbmdlbGxlL2NvZGUvc2l0ZS9hcHAvcm91dGVzL3Jlc291cmNlcy9wb3J0Zm9saW8udHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3QudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2FuZHJld2FuZ2VsbGUvY29kZS9zaXRlL2FwcC9yb3V0ZXMvcG9ydGZvbGlvLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3JvdXRlcy9jb250YWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvYW5kcmV3YW5nZWxsZS9jb2RlL3NpdGUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3Jlc291cmNlcy9wb3J0Zm9saW9cIjoge1xuICAgIGlkOiBcInJvdXRlcy9yZXNvdXJjZXMvcG9ydGZvbGlvXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVzb3VyY2VzL3BvcnRmb2xpb1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3Jlc291cmNlcy9jb250YWN0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzL2NvbnRhY3RcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJyZXNvdXJjZXMvY29udGFjdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL3BvcnRmb2xpb1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BvcnRmb2xpb1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInBvcnRmb2xpb1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2NvbnRhY3RcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcblxuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgc2hlZXQuY29sbGVjdFN0eWxlcyhcbiAgICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICAgKVxuICApO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHNoZWV0LmdldFN0eWxlVGFncygpO1xuICBcbiAgbWFya3VwID0gbWFya3VwLnJlcGxhY2UoXCJfX1NUWUxFU19fXCIsIHN0eWxlcyk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IE5vdEZvdW5kIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IEdsb2JhbEZvbnRzIGZyb20gXCIuL3N0eWxlcy9HbG9iYWxGb250c1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJBbmRyZXcgQW5nZWxsZTogZnJvbnQgZW5kIHNvZnR3YXJlIGRldmVsb3BlclwiIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Tm90Rm91bmQgLz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7dHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgPyBcIl9fU1RZTEVTX19cIlxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8R2xvYmFsRm9udHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBNZXRhLCBMaW5rcywgU2NyaXB0cyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgU3BsaXRMZWZ0LCBOYW1lV3JhcHBlciwgTmFtZVRleHQsIE5hbWVUaXRsZSwgU3BsaXRSaWdodCB9IGZyb20gXCJ+L3N0eWxlc1wiO1xuaW1wb3J0IEdsb2JhbEZvbnRzIGZyb20gXCJ+L3N0eWxlcy9HbG9iYWxGb250c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPk9vcHMhPC90aXRsZT5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICA/IFwiX19TVFlMRVNfX1wiXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxHbG9iYWxGb250cyAvPlxuICAgICAgICA8U3BsaXRMZWZ0PlxuICAgICAgICAgIDxOYW1lV3JhcHBlcj5cbiAgICAgICAgICAgIDxOYW1lVGV4dD5cbiAgICAgICAgICAgICAgT29wcyFcbiAgICAgICAgICAgIDwvTmFtZVRleHQ+XG4gICAgICAgICAgICA8TmFtZVRpdGxlPlxuICAgICAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c30ge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICAgICAgPC9OYW1lVGl0bGU+XG4gICAgICAgICAgPC9OYW1lV3JhcHBlcj5cbiAgICAgICAgPC9TcGxpdExlZnQ+XG4gICAgICAgIDxTcGxpdFJpZ2h0PjwvU3BsaXRSaWdodD5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59IiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFjdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gID4gKiB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuYCIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkKExpbmspYFxuICBtYXJnaW46IDFyZW07XG4gIGE6LXdlYmtpdC1hbnktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gIH1cbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmAgXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIixcbiAgICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkNvcmRvdmFcIiwgXCJNb250c2VycmF0XCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cblxuYFxuXG5leHBvcnQgY29uc3QgU3BsaXRMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XG5gXG5cbmV4cG9ydCBjb25zdCBTcGxpdFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyOCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEIwMDAwO1xuICBjb2xvcjogI2YwZjJmNTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYW1lV3JhcHBlciA9IHN0eWxlZC5kaXZgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDklO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNHB4KSB7XG4gICAgdG9wOiA0NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTmFtZVRleHQgPSBzdHlsZWQuZGl2YCBcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmFtZVRpdGxlID0gc3R5bGVkLmRpdmAgXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjOEIwMDAwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGbGlwV3JhcHBlciA9IHN0eWxlZC5kaXZgIFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogODl2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NHB4KSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MzBweCkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE5hdkxpc3QgPSBzdHlsZWQuZGl2YCBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgdG9wOiA0NSU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmAgXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgfVxuYFxuXG5cblxuLy8gLmMge1xuLy8gICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuLy8gfVxuIiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMzB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJywgXCJ0bnVtXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9ICBcblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIGZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAuMjVyZW0gYXV0bztcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICA+ICoge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NzVweCkge1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQzMnB4KSB7XG4gICAgcGFkZGluZzogMCAwIDAgMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NHB4KSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIH1cbmAiLCAiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBNb250c2VycmF0IGZyb20gJy4vZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYnO1xuaW1wb3J0IE5hbWVPZllvdXJGb250V29mZjIgZnJvbSAnLi9uYW1lT2ZZb3VyRm9udC53b2ZmMic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIHNyYzogbG9jYWwoJ01vbnRzZXJyYXQnKSxcbiAgICB1cmwoJHtNb250c2VycmF0fSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5gOyIsICJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnfi9zdHlsZXMnO1xuaW1wb3J0IHsgUG9ydGZvbGlvRGF0YSB9IGZyb20gJ34vcm91dGVzL3BvcnRmb2xpbyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3J0Zm9saW9DYXJkKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBnaXRodWJMaW5rLCBkZW1vTGluaywgZGVtb1RleHQgfTogUG9ydGZvbGlvRGF0YSl7XG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtnaXRodWJMaW5rfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgaWNvbj17SWNvbnMuZmFHaXRodWJ9XG4gICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAge2RlbW9MaW5rICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17ZGVtb0xpbmt9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b24+e2RlbW9UZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvQ2FyZD5cbiAgKVxufSIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTWV0YSwgTGlua3MsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFNwbGl0TGVmdCwgTmFtZVdyYXBwZXIsIE5hbWVUZXh0LCBOYW1lVGl0bGUsIFNwbGl0UmlnaHQgfSBmcm9tIFwifi9zdHlsZXNcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tIFwifi9zdHlsZXMvR2xvYmFsRm9udHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoe2Vycm9yfToge2Vycm9yOiBFcnJvcn0pIHtcbiAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+RXJyb3IgY2F1Z2h0PC90aXRsZT5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPEdsb2JhbEZvbnRzIC8+XG4gICAgICAgIDxTcGxpdExlZnQ+XG4gICAgICAgICAgPE5hbWVXcmFwcGVyPlxuICAgICAgICAgICAgPE5hbWVUZXh0PlxuICAgICAgICAgICAgICBPb3BzIVxuICAgICAgICAgICAgPC9OYW1lVGV4dD5cbiAgICAgICAgICAgIDxOYW1lVGl0bGU+XG4gICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxuICAgICAgICAgICAgPC9OYW1lVGl0bGU+XG4gICAgICAgICAgPC9OYW1lV3JhcHBlcj5cbiAgICAgICAgPC9TcGxpdExlZnQ+XG4gICAgICAgIDxTcGxpdFJpZ2h0PjwvU3BsaXRSaWdodD5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59IiwgImV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKXtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlYWN0IEdsaWRlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnYSBtdWx0aSBwdXJwb3NlIGNhcm91c2VsIG1vZHVsZSBidWlsdCBpbiByZWFjdCcsXG4gICAgICBnaXRodWJMaW5rOiAnaHR0cDovL3d3dy5naXRodWIuY29tL2FuZHJld2FuZ2VsbGUvcmVhY3QtZ2xpZGUnLFxuICAgICAgZGVtb0xpbms6ICdodHRwczovL2NvZGVzYW5kYm94LmlvL3MvcjcxNjY3MzNsbScsXG4gICAgICBkZW1vVGV4dDogJ0RlbW8nXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlYWN0IFBheVBhbCBCdXR0b24nLFxuICAgICAgZGVzY3JpcHRpb246ICdBIGJ1dHRvbiBjb21wb25lbnQgdG8gaW1wbGVtZW50IFBheVBhbFxcJ3MgRXhwcmVzcyBDaGVja291dCBpbiBSZWFjdCcsXG4gICAgICBnaXRodWJMaW5rOiAnaHR0cDovL3d3dy5naXRodWIuY29tL2FuZHJld2FuZ2VsbGUvcmVhY3QtcGF5cGFsLWJ1dHRvbicsXG4gICAgICBkZW1vTGluazogJycsXG4gICAgICBkZW1vVGV4dDogJydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnV2Vic3ludGgnLFxuICAgICAgZGVzY3JpcHRpb246ICdBIHN5bnRoZXNpemVyIGJ1aWx0IGFzIGEgd2ViYXBwIHVzaW5nIHRoZSBXZWIgQXVkaW8gQVBJJyxcbiAgICAgIGdpdGh1Ykxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYW5kcmV3YW5nZWxsZS93ZWJzeW50aCcsXG4gICAgICBkZW1vTGluazogJycsXG4gICAgICBkZW1vVGV4dDogJycgXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcbiAgICBzdGF0dXM6IDIwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cbiAgfSlcbn0iLCAiZXhwb3J0IHR5cGUgQ29udGFjdEljb25EYXRhID0ge1xuICBocmVmOiBzdHJpbmc7XG4gIGljb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKXtcbiAgY29uc3QgY29udGFjdEljb25zOiBDb250YWN0SWNvbkRhdGFbXSA9IFtcbiAgICB7aHJlZjogJ2h0dHA6Ly93d3cuZ2l0aHViLmNvbS9hbmRyZXdhbmdlbGxlJywgaWNvbk5hbWU6ICdmYUdpdGh1Yid9LFxuICAgIHtocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FuZHJldy1hbmdlbGxlLTIxMjk5Nzc0LycsIGljb25OYW1lOiAnZmFMaW5rZWRpbid9LFxuICAgIHtocmVmOiAnbWFpbHRvOmFuZHJld2FuZ2VsbGVAZ21haWwuY29tPyZzdWJqZWN0PURldmVsb3BtZW50IFNlcnZpY2VzIElucXVpcnknLCBpY29uTmFtZTogJ2ZhRW52ZWxvcGVTcXVhcmUnfVxuICBdO1xuICBcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShjb250YWN0SWNvbnMpLCB7XG4gICAgc3RhdHVzOiAyMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9XG4gIH0pXG59IiwgImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZVRyYW5zaXRpb24sIHVzZUNhdGNoLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IENhdGNoQm91bmRhcnkgfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgUG9ydGZvbGlvQ2FyZCB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3J0Zm9saW9DYXJkJztcblxuaW1wb3J0IHsgIFdyYXBwZXIsIFNwbGl0TGVmdCwgU3BsaXRSaWdodCwgTmF2SXRlbSwgTmFtZVdyYXBwZXIsIE5hdkxpc3QgfSBmcm9tICd+L3N0eWxlcyc7XG5cbmNvbnN0IHBvcnRmb2xpb0RhdGFQYXRoID0gJ2h0dHA6Ly9hbmRyZXdhbmdlbGxlLmNvbS9yZXNvdXJjZXMvcG9ydGZvbGlvJztcblxuZXhwb3J0IHR5cGUgUG9ydGZvbGlvRGF0YSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZ2l0aHViTGluazogc3RyaW5nO1xuICBkZW1vTGluaz86IHN0cmluZztcbiAgZGVtb1RleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHtlcnJvcn06IHtlcnJvcjogRXJyb3J9KXtcbiAgcmV0dXJuKFxuICAgIDxDYXRjaEJvdW5kYXJ5IGVycm9yPXtlcnJvcn0gLz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jIGFyZ3MgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBvcnRmb2xpb0RhdGFQYXRoKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCl7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPFBvcnRmb2xpb0RhdGFbXT4oKTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxTcGxpdExlZnQ+XG4gICAgICAgIDxOYW1lV3JhcHBlcj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIG51bGx9XG4gICAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgIT09ICdsb2FkaW5nJyAmJiAoXG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChwb3J0Zm9saW9EYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCAmJiA8aHIgLz59XG4gICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9DYXJkIHsuLi5wb3J0Zm9saW9EYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9OYW1lV3JhcHBlcj5cbiAgICAgIDwvU3BsaXRMZWZ0PlxuICAgICAgXG4gICAgICA8U3BsaXRSaWdodD5cbiAgICAgICAgPE5hdkxpc3Q+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgdGV4dERlY29yYXRpb246ICdub25lJ319PkhvbWU8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9jb250YWN0JyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2TGlzdD5cbiAgICAgIDwvU3BsaXRSaWdodD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59IiwgImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5pbXBvcnQgKiBhcyBJY29ueiBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlQ2F0Y2gsIHVzZUxvYWRlckRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgV3JhcHBlciwgU3BsaXRMZWZ0LCBTcGxpdFJpZ2h0LCBOYXZJdGVtLCBOYXZMaXN0LCBDb250YWN0V3JhcHBlciB9IGZyb20gXCJ+L3N0eWxlc1wiO1xuaW1wb3J0IHsgQ29udGFjdEljb25EYXRhIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2NvbnRhY3RcIjtcbmltcG9ydCB7IENhdGNoQm91bmRhcnkgfSBmcm9tIFwifi9jb21wb25lbnRzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoe2Vycm9yfToge2Vycm9yOiBFcnJvcn0pe1xuICByZXR1cm4gKFxuICAgIDxDYXRjaEJvdW5kYXJ5IGVycm9yPXtlcnJvcn0gLz5cbiAgKVxufVxuXG5jb25zdCBjb250YWN0RGF0YVBhdGggPSAnaHR0cDovL2FuZHJld2FuZ2VsbGUuY29tL3Jlc291cmNlcy9jb250YWN0JztcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyBhcmdzID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb250YWN0RGF0YVBhdGgpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCl7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPENvbnRhY3RJY29uRGF0YVtdPigpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNwbGl0TGVmdD5cbiAgICAgICAgPENvbnRhY3RXcmFwcGVyPlxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlID09PSAnbG9hZGluZycgJiYgbnVsbH1cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdGF0ZSAhPT0gJ2xvYWRpbmcnICYmIGRhdGEubWFwKCh7aHJlZiwgaWNvbk5hbWV9LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBrZXk9e2ljb25OYW1lfVxuICAgICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gMiA/IEljb256W2ljb25OYW1lXSA6IEljb25zW2ljb25OYW1lXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjZ4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+ICAgICAgICAgICAgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQ29udGFjdFdyYXBwZXI+XG4gICAgICA8L1NwbGl0TGVmdD5cbiAgICAgIFxuICAgICAgPFNwbGl0UmlnaHQ+XG4gICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZSd9fT5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvcG9ydGZvbGlvJyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPC9OYXZMaXN0PlxuICAgICAgPC9TcGxpdFJpZ2h0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn0iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IFxuICBXcmFwcGVyLCAgXG4gIE5hbWVUZXh0LCBcbiAgTmFtZVRpdGxlLCBcbiAgTmFtZVdyYXBwZXIsIFxuICBTcGxpdExlZnQsIFxuICBTcGxpdFJpZ2h0LFxuICBOYXZJdGVtLFxuICBOYXZMaXN0XG59IGZyb20gJ34vc3R5bGVzL0hvbWUuc3R5bGVkJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxTcGxpdExlZnQ+XG4gICAgICAgIDxOYW1lV3JhcHBlcj5cbiAgICAgICAgICA8TmFtZVRleHQ+QW5kcmV3IEFuZ2VsbGU8L05hbWVUZXh0PlxuICAgICAgICAgIDxOYW1lVGl0bGU+ZnJvbnQgZW5kIHNvZnR3YXJlIGRldmVsb3BlcjwvTmFtZVRpdGxlPlxuICAgICAgICA8L05hbWVXcmFwcGVyPlxuICAgICAgPC9TcGxpdExlZnQ+XG5cbiAgICAgIDxTcGxpdFJpZ2h0PlxuICAgICAgICA8TmF2TGlzdD5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvcG9ydGZvbGlvJyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvY29udGFjdCcgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgdGV4dERlY29yYXRpb246ICdub25lJ319PkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdkxpc3Q+XG4gICAgICA8L1NwbGl0UmlnaHQ+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxN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

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { NotFound } from "./components";
import GlobalFonts from "./styles/GlobalFonts";

export const meta: MetaFunction = () => {
  return { title: "Andrew Angelle: front end software developer" };
};

export function CatchBoundary() {
  return (
    <NotFound />
  );
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <GlobalFonts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

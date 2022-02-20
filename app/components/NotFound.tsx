import { useCatch, Meta, Links, Scripts } from "remix";
import { SplitLeft, NameWrapper, NameText, NameTitle, SplitRight } from "~/styles";
import GlobalFonts from "~/styles/GlobalFonts";

export function NotFound() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>
        <GlobalFonts />
        <SplitLeft>
          <NameWrapper>
            <NameText>
              Oops!
            </NameText>
            <NameTitle>
              {caught.status} {caught.statusText}
            </NameTitle>
          </NameWrapper>
        </SplitLeft>
        <SplitRight></SplitRight>
        <Scripts />
      </body>
    </html>
  );
}
import { useCatch, Meta, Links, Scripts } from "remix";
import { SplitLeft, NameWrapper, NameText, NameTitle, SplitRight } from "~/styles";
import GlobalFonts from "~/styles/GlobalFonts";

export function CatchBoundary({error}: {error: Error}) {
  console.log(error.message)
  return (
    <html>
      <head>
        <title>Error caught</title>
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalFonts />
        <SplitLeft>
          <NameWrapper>
            <NameText>
              Oops!
            </NameText>
            <NameTitle>
              {error.message}
            </NameTitle>
          </NameWrapper>
        </SplitLeft>
        <SplitRight></SplitRight>
        <Scripts />
      </body>
    </html>
  );
}
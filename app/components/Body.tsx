import { ReactNode } from "react";

export function Body({ children }: { children: ReactNode }) {
  return (
    <body>
      {children}
    </body>
  )
}
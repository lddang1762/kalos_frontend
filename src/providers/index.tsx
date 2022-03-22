import React from "react";
import ThemeProvider from "./ThemeProvider";

export default function Providers({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

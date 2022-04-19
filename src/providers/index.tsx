import React from "react";
import ThemeProvider from "./ThemeProvider";
import ModalProvider from "./ModalProvider";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}

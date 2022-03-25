import React from "react";
import { AppShell, CSSObject, MantineTheme } from "@mantine/core";

import Navbar from "./Navbar";
import Footer from "./Footer";

const styles = (theme: MantineTheme): CSSObject => ({
  backgroundColor: theme.colorScheme === "light" ? theme.white : theme.colors.dark[4],
  minHeight: "calc(100vh)",
});

export default function PageWrapper({ children }: any) {
  return (
    <>
      <AppShell header={<Navbar />} padding="md" sx={styles}>
        {children}
      </AppShell>
      <Footer />
    </>
  );
}

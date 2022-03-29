import React, { useLayoutEffect, useState } from "react";
import { AppShell, Transition, MantineTransition, CSSObject, MantineTheme } from "@mantine/core";

import Navbar from "./Navbar";
import Footer from "./Footer";

const styles = (theme: MantineTheme): CSSObject => ({
  backgroundColor: theme.colorScheme === "light" ? theme.white : theme.colors.dark[4],
  minHeight: "calc(100vh)",
});

const puffIn: MantineTransition = {
  in: { opacity: 1, filter: "blur(0px)" },
  out: {},
  common: { opacity: 0, filter: "blur(4px)" },
  transitionProperty: "opacity, filter",
};

export default function PageWrapper({ children }: any) {
  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Transition mounted={loaded} transition={puffIn} duration={1000} timingFunction="ease-in-out">
      {(style) => (
        <>
          <AppShell header={<Navbar />} padding="md" sx={styles}>
            <div style={style}>{children}</div>
          </AppShell>
          <Footer />
        </>
      )}
    </Transition>
  );
}

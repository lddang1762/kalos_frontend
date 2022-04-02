import React from "react";
import { Container, CSSObject, MantineTheme } from "@mantine/core";

const styles = (theme: MantineTheme): CSSObject => ({
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  paddingTop: "15px",
});

export default function Page({ children }: any) {
  return (
    <Container size="xl" sx={styles}>
      {children}
    </Container>
  );
}

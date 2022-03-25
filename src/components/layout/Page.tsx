import React from "react";
import { Container, CSSObject, MantineTheme } from "@mantine/core";

const styles = (theme: MantineTheme): CSSObject => ({
  // backgroundColor: theme.colorScheme === "light" ? theme.colors.blue[2] : theme.colors.blue[5],
});

export default function Page({ children }: any) {
  return (
    <Container size="xl" sx={styles}>
      {children}
    </Container>
  );
}

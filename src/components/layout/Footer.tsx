import React from "react";
import { AppShell, Container, CSSObject, MantineTheme } from "@mantine/core";

const styles = (theme: MantineTheme): CSSObject => ({
  backgroundColor: "white",
  minHeight: 200,
});

export default function Footer() {
  return (
    <Container sx={styles} fluid>
      <Container p="xl">Footer</Container>
    </Container>
  );
}

import React from "react";
import { Container, ContainerProps, MantineTheme, CSSObject } from "@mantine/core";

const styles = (theme: MantineTheme): CSSObject => ({
  padding: theme.spacing.xl,
  margin: "auto", //theme.spacing.sm,
  backgroundColor: "white",
  borderRadius: theme.radius.xl,
  boxShadow: "0px 7px 4px -2px rgb(0 0 0 / 10%)",
});

export default function StyledContainer({ children, ...props }: ContainerProps) {
  return (
    <Container sx={styles} {...props}>
      {children}
    </Container>
  );
}

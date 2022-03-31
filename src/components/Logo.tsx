import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Image, Transition, MantineTransition, CSSObject, MantineTheme } from "@mantine/core";
import logo from "../logo.svg";

const logoStyle = (theme: MantineTheme): CSSObject => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  letterSpacing: 4,
  color: theme.white,
});

const labelStyle = (): CSSObject => ({
  transition: "transform 0.2s ease-out",
  ":hover": {
    transform: "translateX(4px)",
  },
});

const logoTransition: MantineTransition = {
  in: { opacity: 1, transform: "translateX(0)" },
  out: {},
  common: { opacity: 0, transform: "translateX(-150px)" },
  transitionProperty: "opacity, transform",
};

export default function Logo() {
  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Transition mounted={loaded} transition={logoTransition} duration={1000} timingFunction="ease-in-out">
      {(styles) => (
        <Box component={Link} to="/" sx={logoStyle} style={styles}>
          <Image src={logo} height={40} width={40} />
          <Text mx={"sm"} size="xl" sx={labelStyle}>
            KALOS
          </Text>
        </Box>
      )}
    </Transition>
  );
}

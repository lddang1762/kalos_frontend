import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useModals } from "@mantine/modals";
import {
  ActionIcon,
  Button,
  Header,
  Container,
  Text,
  Group,
  createStyles,
  Box,
  Image,
  GroupedTransition,
  MantineTransition,
} from "@mantine/core";
import { Link as LinkIcon } from "tabler-icons-react";
import logo from "../../../logo.svg";

import { navItems } from "./NavItems";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    letterSpacing: 1,
    border: "none",
  },
  logo: { display: "flex", alignItems: "center", textDecoration: "none", letterSpacing: 4, color: "white" },
  label: {
    transition: "transform 0.2s ease-out",
    "&:hover": {
      transform: "translateX(4px)",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  link: {
    color: "white",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: 2,
      bottom: 0,
      left: 0,
      backgroundColor: "white",
      transition: "transform 0.2s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1.1)",
    },
  },
  chainIcon: { color: theme.colors.primary },
  chain: {
    backgroundColor: "white",
    color: theme.colors.primary,
    boxShadow: `0px 3px 0 0 rgb(0 0 0 / 10%)`,
  },
  connectButton: { borderRadius: theme.radius.xl, height: 32 },
}));

const logoTransition: MantineTransition = {
  in: { opacity: 1, transform: "translateX(0)" },
  out: {},
  common: { opacity: 0, transform: "translateX(-200px)" },
  transitionProperty: "opacity, transform",
};

const itemTransition: MantineTransition = {
  in: { opacity: 1, transform: "translateY(0)" },
  out: {},
  common: { opacity: 0, transform: "translateY(-50px)" },
  transitionProperty: "opacity, transform",
};

const connectorTransition: MantineTransition = {
  in: { opacity: 1, transform: "translateX(0)" },
  out: {},
  common: { opacity: 0, transform: "translateX(200px)" },
  transitionProperty: "opacity, transform",
};

export default function Navbar() {
  const duration = 1500;
  const { classes } = useStyles();
  const modals = useModals();
  const openContextModal = () => {
    modals.openContextModal("login", { title: "Login", innerProps: {}, centered: true });
  };

  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Header className={classes.header} height={56} p="md">
      <GroupedTransition
        mounted={loaded}
        transitions={{
          logo: { duration, transition: logoTransition, timingFunction: "ease-in-out" },
          items: { duration, transition: itemTransition, timingFunction: "ease-in-out" },
          connector: { duration, transition: connectorTransition, timingFunction: "ease-in-out" },
        }}
      >
        {(styles) => (
          <Container className={classes.flex} fluid>
            <Box className={classes.logo} component={Link} to="/" style={styles.logo}>
              <Image src={logo} height={32} width={32} />
              <Text className={classes.label} mx="sm" size="lg">
                KALOS
              </Text>
            </Box>
            <Group spacing={40} style={styles.items} noWrap>
              {navItems.map((navItem) => {
                return (
                  <Text className={classes.link} key={navItem.label} component={Link} to={navItem.href} size="md">
                    {navItem.label}
                  </Text>
                );
              })}
            </Group>
            <Group spacing="sm" style={styles.connector} noWrap>
              <ActionIcon className={classes.chain} radius="lg">
                <LinkIcon className={classes.chainIcon} size={20} />
              </ActionIcon>
              <Button className={classes.connectButton} variant="white" px="lg" onClick={openContextModal}>
                Log In
              </Button>
            </Group>
          </Container>
        )}
      </GroupedTransition>
    </Header>
  );
}

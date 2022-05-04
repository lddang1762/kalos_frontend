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
  connectButton: { borderRadius: theme.radius.xl },
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
    <Header height={80} p="md" className={classes.header}>
      <GroupedTransition
        mounted={loaded}
        transitions={{
          logo: { duration, transition: logoTransition, timingFunction: "ease-in-out" },
          items: { duration, transition: itemTransition, timingFunction: "ease-in-out" },
          connector: { duration, transition: connectorTransition, timingFunction: "ease-in-out" },
        }}
      >
        {(styles) => (
          <Container size="xl" className={classes.flex}>
            <Box component={Link} to="/" className={classes.logo} style={styles.logo}>
              <Image src={logo} height={40} width={40} />
              <Text mx={"sm"} size="xl" className={classes.label}>
                KALOS
              </Text>
            </Box>
            <Group spacing={40} style={styles.items} noWrap>
              {navItems.map((navItem) => {
                return (
                  <Text key={navItem.label} component={Link} to={navItem.href} size="lg" className={classes.link}>
                    {navItem.label}
                  </Text>
                );
              })}
            </Group>
            <Group spacing="md" style={styles.connector} noWrap>
              <ActionIcon radius="lg" className={classes.chain}>
                <LinkIcon size={20} className={classes.chainIcon} />
              </ActionIcon>
              <Button variant="white" size="md" className={classes.connectButton} onClick={openContextModal}>
                Log In
              </Button>
            </Group>
          </Container>
        )}
      </GroupedTransition>
    </Header>
  );
}

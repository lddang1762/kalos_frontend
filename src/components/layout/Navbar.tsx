import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ActionIcon,
  Button,
  Header,
  Container,
  Text,
  Modal,
  Group,
  useMantineColorScheme,
  CSSObject,
  MantineTheme,
} from "@mantine/core";
import { Link as LinkIcon } from "tabler-icons-react";
import Logo from "../Logo";

const navStyle = (theme: MantineTheme): CSSObject => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#3386CC",
  letterSpacing: 1,
});

const styles = (theme: MantineTheme): CSSObject => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

const linkStyle = (theme: MantineTheme): CSSObject => ({
  color: theme.white,
  position: "relative",
  ":after": {
    content: "''",
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: 2,
    bottom: 0,
    left: 0,
    backgroundColor: theme.white,
    transition: "transform 0.2s ease-out",
  },
  ":hover:after": {
    transform: "scaleX(1.1)",
  },
});

const labelStyle = (theme: MantineTheme): CSSObject => ({
  transition: "transform 0.3s ease-out",
  ":hover": {
    transform: "translateX(3px)",
  },
});

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={80} p="md" sx={navStyle}>
      <Container size="xl" sx={styles}>
        <Logo />
        <Group spacing={40} noWrap>
          <Text component={Link} to="/dashboard" size="lg" sx={linkStyle}>
            Dashboard
          </Text>
          <Text component={Link} to="/trade" size="lg" sx={linkStyle}>
            Trade
          </Text>
          <Text component={Link} to="/stake" size="lg" sx={linkStyle}>
            Stake
          </Text>
        </Group>
        <Group spacing="md" noWrap>
          <ActionIcon radius="lg" variant="light">
            <LinkIcon size={20} />
          </ActionIcon>
          <Button size="md" variant="light" onClick={() => setOpened(true)}>
            Connect
          </Button>
        </Group>

        <Modal opened={opened} onClose={() => setOpened(false)} title="Test" centered>
          <Text>Hello</Text>
        </Modal>
      </Container>
    </Header>
  );
}

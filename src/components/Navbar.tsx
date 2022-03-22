import React from "react";
import { Link } from "react-router-dom";
import { ActionIcon, Button, Header, Text, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

export default function Navbar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={80} p={"md"}>
      <Button component={Link} to="/" mx={10}>
        Home
      </Button>
      <Button component={Link} to="/dashboard">
        Dashboard
      </Button>
      <ActionIcon
        variant="filled"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        mx={10}
      >
        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </Header>
  );
}

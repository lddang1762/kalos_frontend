import React, { useState } from "react";
import { Container, Title, Divider, Button, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";

import Page from "../../components/layout/Page";
import PerformersCarousel from "./components/Performers/PerformersCarousel";
import PortfolioView from "./components/PortfolioView";
import NoPortfolio from "./components/NoPortfolio";

const performers = [
  { change: 50, time: 3, timeframe: "weeks" },
  { change: 35, time: 5, timeframe: "weeks" },
  { change: 21, time: 6, timeframe: "weeks" },
];

export default function Dashboard() {
  const theme = useMantineTheme();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Page>
      <Container fluid px={0} sx={{ display: "flex" }}>
        <Title order={2} sx={{ color: theme.colors.dark[9] }}>
          Your Portfolios
        </Title>
        <Button onClick={() => setLoggedIn(!loggedIn)} size="xs" ml={8} px={8}>
          Toggle Log In (testing)
        </Button>
        <Button component={Link} color="accent" px="lg" ml="auto" to="./create">
          + New Portfolio
        </Button>
      </Container>
      <Divider color="dark" my="sm" />
      {loggedIn ? <PortfolioView /> : <NoPortfolio />}

      <PerformersCarousel performers={performers}></PerformersCarousel>
    </Page>
  );
}

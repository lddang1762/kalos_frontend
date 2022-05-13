import React from "react";
import { Container, Title, Divider, Button, Stack, Grid, Group } from "@mantine/core";
import { Settings } from "tabler-icons-react";

import StyledContainer from "../../../components/layout/StyledContainer";
import PortfolioChart from "./Charts/PortfolioChart";
import RingChart from "./Charts/RingChart";

const data = [
  {
    time: "5/12",
    value: 2400,
  },
  {
    time: "5/13",
    value: 1398,
  },
  {
    time: "5/14",
    value: 9800,
  },
  {
    time: "5/15",
    value: 4500,
  },
  {
    time: "5/16",
    value: 5300,
  },
  {
    time: "5/17",
    value: 7800,
  },
  {
    time: "5/18",
    value: 6100,
  },
];

const pieData = [
  { label: "USDT", value: 60 },
  { label: "ETH", value: 25 },
  { label: "BTC", value: 15 },
];

export default function PortfolioView() {
  return (
    <Grid columns={24} mb={40}>
      <Grid.Col span={3}>
        <Stack>
          <Button variant="white">Overview</Button>
          <Divider />
          <Button>My Portfolio 1</Button>
          <Button variant="white">My Portfolio 2</Button>
          <Button variant="white">Test Portfolio</Button>
        </Stack>
      </Grid.Col>
      <Grid.Col span={21} pl="lg">
        <StyledContainer fluid style={{ height: 600 }}>
          <Group mb="md">
            <Title>My Portfolio 1</Title>
            <Button leftIcon={<Settings />} px="sm" color="gray">
              edit
            </Button>
          </Group>
          <Group px={0} spacing={0} sx={{ height: "90%" }}>
            <Container px={0} sx={{ width: "70%", height: "100%" }}>
              <PortfolioChart data={data} />
            </Container>
            <Container px={0} sx={{ width: "30%", height: "100%" }}>
              <RingChart data={pieData} />
            </Container>
          </Group>
        </StyledContainer>
      </Grid.Col>
    </Grid>
  );
}

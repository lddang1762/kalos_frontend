import React from "react";
import { Container, Center, Title, Divider, useMantineTheme } from "@mantine/core";
import ExchangeGrid from "./ExchangeGrid";

const ExchangeList = Array.from(Array(16).keys());
export default function ExchangeSelect({ onStepComplete }) {
  const theme = useMantineTheme();

  return (
    <Container fluid px={0} sx={{ display: "flex", justifyContent: "space-around" }}>
      <Container px={0} m={0}>
        <Center>
          <Title order={2} mb={50} sx={{ color: theme.colors.dark[9] }}>
            Centralized Exchange (CEX)
          </Title>
        </Center>
        <Container>
          <Center mb={100}>
            <ExchangeGrid exchanges={ExchangeList} onSelect={onStepComplete} />
          </Center>
        </Container>
      </Container>
      <Divider orientation="vertical" size="sm" sx={{ height: "auto" }} />

      <Container px={0} m={0}>
        <Center>
          <Title order={2} mb={50} sx={{ color: theme.colors.dark[9] }}>
            Decentralized Exchange (DEX)
          </Title>
        </Center>
        <Container>
          <Center mb={100}>
            <ExchangeGrid exchanges={ExchangeList} onSelect={onStepComplete} />
          </Center>
        </Container>
      </Container>
    </Container>
  );
}

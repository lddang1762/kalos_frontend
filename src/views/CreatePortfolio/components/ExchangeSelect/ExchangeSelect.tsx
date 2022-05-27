import React from "react";
import { Container, Center, Title, Divider, useMantineTheme } from "@mantine/core";
import StyledContainer from "../../../../components/layout/StyledContainer";
import ExchangeGrid from "./ExchangeGrid";

const ExchangeList = Array.from(Array(16).keys());
export default function ExchangeSelect({ onStepComplete }) {
  const theme = useMantineTheme();

  return (
    <Container fluid px={0} sx={{ display: "flex", justifyContent: "space-evenly", gap: 20 }}>
      <Container px={0} m={0} fluid>
        <StyledContainer fluid>
          <Center>
            <Title order={2} mb={50} sx={{ color: theme.colors.dark[9] }}>
              Centralized Exchanges (CEX)
            </Title>
          </Center>
          <Center>
            <ExchangeGrid exchanges={ExchangeList} onSelect={onStepComplete} />
          </Center>
        </StyledContainer>
      </Container>
      <Divider
        orientation="vertical"
        size="sm"
        sx={{ height: "auto", borderColor: theme.colorScheme === "light" ? theme.colors.medium : theme.colors.gray[7] }}
      />

      <Container px={0} m={0} fluid>
        <StyledContainer fluid>
          <Center>
            <Title order={2} mb={50} sx={{ color: theme.colors.dark[9] }}>
              Decentralized Exchanges (DEX)
            </Title>
          </Center>
          <Center>
            <ExchangeGrid exchanges={ExchangeList} onSelect={onStepComplete} />
          </Center>
        </StyledContainer>
      </Container>
    </Container>
  );
}

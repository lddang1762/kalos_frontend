import React from "react";
import { Container, ActionIcon, Box, Text, Group, Stack, Divider, useMantineTheme, createStyles } from "@mantine/core";

import StyledContainer from "../../../../components/layout/StyledContainer";
import StyledInput from "../../../../components/Input/StyledInput";

export default function PortfolioConfig() {
  const theme = useMantineTheme();
  return (
    <StyledContainer fluid>
      <Container fluid sx={{ display: "flex" }}>
        <Stack pr="md" spacing="xl" sx={{ flexGrow: 2 }}>
          <StyledInput
            label="Initial Investment"
            labelProps={{ style: { fontSize: theme.fontSizes.md } }}
            radius="sm"
          />
          <StyledInput label="Asset Ratio" labelProps={{ style: { fontSize: theme.fontSizes.md } }} radius="sm" />
          <Text>Stable Asset</Text>
          <Divider />
          <Text>Volatile Asset</Text>
        </Stack>
        <Container p="md" style={{ backgroundColor: theme.colors.paper[0], flexGrow: 1 }}>
          asdf
        </Container>
      </Container>
    </StyledContainer>
  );
}

import React, { useState } from "react";
import {
  Container,
  Group,
  Text,
  Stack,
  useMantineTheme,
  Title,
  Tooltip,
  UnstyledButton,
  Loader,
  Select,
} from "@mantine/core";
import { Help } from "tabler-icons-react";
import StyledContainer from "../../../../components/layout/StyledContainer";
import StyledNumberInput from "../../../../components/Input/StyledNumberInput";
import CurrencyIcon from "../../../../components/CurrencyIcon";

export default function PortfolioConfig() {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);
  const precision = 18;

  return (
    <StyledContainer size="sm">
      <Container fluid sx={{ display: "flex" }}>
        <Stack pr="lg" spacing="xl">
          <Group align="flex-end" spacing={5}>
            <StyledNumberInput
              label={
                <Group spacing="sm">
                  <Text>Take Profit Rate</Text>
                  <Tooltip
                    label="The amount of portfolio growth to take profit"
                    position="right"
                    sx={{ display: "flex" }}
                    withArrow
                  >
                    <Help size={theme.fontSizes.sm} />
                  </Tooltip>
                </Group>
              }
              placeholder="2.5"
              labelProps={{ style: { fontSize: theme.fontSizes.md } }}
              styles={{ label: { width: 200 } }}
              radius="sm"
              size="md"
              sx={{ width: 100 }}
              min={0.1}
              step={1}
              precision={3}
              hideControls
            />

            <Text color="gray" size="lg" pb={5}>
              %
            </Text>
          </Group>
          <Group spacing="sm" mb={-20}>
            <Text>Initial Price</Text>
            <Tooltip
              label="Stable asset entry price for first position"
              position="right"
              sx={{ display: "flex" }}
              withArrow
            >
              <Help size={theme.fontSizes.sm} />
            </Tooltip>
          </Group>
          <Group>
            <CurrencyIcon size={48} />
            <Title order={4} ml={-8} mr="lg" sx={{ width: 35 }}>
              TEST
            </Title>
            <StyledNumberInput
              placeholder="Initial price"
              radius="sm"
              size="md"
              sx={{ width: 275 }}
              min={1 / Math.pow(10, precision)}
              precision={precision}
              rightSection={
                <UnstyledButton color="red" onClick={() => setLoading(!loading)}>
                  <Text color="primary">Latest</Text>
                </UnstyledButton>
              }
              rightSectionWidth={70}
              hideControls
            />
            {loading && <Loader size="sm" />}
          </Group>
          <Group spacing="sm" mb={-20}>
            <Text>Timeframe</Text>
            <Tooltip label="Periods needed to detect signal" position="right" sx={{ display: "flex" }} withArrow>
              <Help size={theme.fontSizes.sm} />
            </Tooltip>
          </Group>
          <Group>
            <StyledNumberInput
              placeholder="1"
              radius="sm"
              size="md"
              sx={{ width: 150 }}
              min={1 / Math.pow(10, precision)}
              hideControls
            />
            <Select
              data={[
                { value: "0", label: "Hour (1H)" },
                { value: "1", label: "Day (1D)" },
                { value: "2", label: "Week (1W)" },
                { value: "3", label: "Month (1M)" },
                { value: "4", label: "Year (1Y)" },
              ]}
              defaultValue="0"
              size="md"
              sx={{ width: 150 }}
            />
          </Group>
          <Group align="flex-end" spacing={5}>
            <StyledNumberInput
              label={
                <Group spacing="sm">
                  <Text>Equilibrium Band</Text>
                  <Tooltip
                    label="Percent change from the equilibrium price to detect signal"
                    position="right"
                    sx={{ display: "flex" }}
                    withArrow
                  >
                    <Help size={theme.fontSizes.sm} />
                  </Tooltip>
                </Group>
              }
              placeholder="1"
              labelProps={{ style: { fontSize: theme.fontSizes.md } }}
              styles={{ label: { width: 200 } }}
              radius="sm"
              size="md"
              sx={{ width: 100 }}
              min={0.0001}
              step={1}
              precision={4}
              hideControls
            />

            <Text color="gray" size="lg" pb={5}>
              %
            </Text>
          </Group>
        </Stack>
      </Container>
    </StyledContainer>
  );
}

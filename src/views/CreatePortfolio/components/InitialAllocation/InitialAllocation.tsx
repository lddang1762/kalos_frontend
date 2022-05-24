import React, { useState } from "react";
import {
  Container,
  Center,
  Group,
  Text,
  ActionIcon,
  Stack,
  Divider,
  RingProgress,
  useMantineTheme,
  createStyles,
  Title,
} from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { Plus } from "tabler-icons-react";
import RingChart from "../../../Dashboard/components/Charts/RingChart";
import StyledContainer from "../../../../components/layout/StyledContainer";
import StyledInput from "../../../../components/Input/StyledInput";
import AssetInput from "./AssetInput";

interface TokenData {
  symbol: string;
  icon: string;
  other?: any;
}

const pieData = [
  { label: "USDT", value: 60 },
  { label: "ETH", value: 25 },
  { label: "BTC", value: 15 },
];

export default function InitialAllocation() {
  const theme = useMantineTheme();
  const [ratio, setRatio] = useState(5);
  const stableAsset: TokenData = { symbol: "USDT", icon: "" };
  const [volatileAssets, handlers] = useListState<TokenData>([
    { symbol: "ETH", icon: "" },
    { symbol: "BTC", icon: "" },
  ]);

  const handleRemoveAsset = (index: number) => {
    handlers.remove(index);
  };

  const handleAddAsset = () => {
    handlers.append({ symbol: "TEST", icon: "" });
  };

  return (
    <StyledContainer fluid>
      <Container fluid sx={{ display: "flex" }}>
        <Stack pr="lg" spacing="md" sx={{ flexGrow: 2 }}>
          <Group align="flex-end">
            <StyledInput
              label="Initial Investment"
              labelProps={{ style: { fontSize: theme.fontSizes.md } }}
              radius="sm"
              sx={{ width: 200 }}
            />
            <Text color="gray">{"(Balance: $10000)"}</Text>
          </Group>
          <StyledInput
            label="Asset Ratio"
            labelProps={{ style: { fontSize: theme.fontSizes.md } }}
            radius="sm"
            sx={{ width: 200 }}
          />
          <Text>Stable Asset</Text>
          <AssetInput token={stableAsset} onRemove={handleRemoveAsset} hideControls />
          <Divider />
          <Text>Volatile Asset</Text>

          {volatileAssets.length ? (
            volatileAssets.map((asset, index) => (
              <AssetInput key={index} token={asset} onRemove={() => handleRemoveAsset(index)} />
            ))
          ) : (
            <Text color="dimmed">Add assets to for rebalancing</Text>
          )}
          <Center mt="lg">
            <ActionIcon
              sx={{
                height: 48,
                width: 48,
                backgroundColor: theme.colors.secondary,
                borderRadius: "50%",
                ":hover": {
                  backgroundColor: theme.colors.secondary,
                },
              }}
              onClick={handleAddAsset}
            >
              <Plus size={24} strokeWidth={3} color={theme.white} />
            </ActionIcon>
          </Center>
        </Stack>

        <Container p="md" style={{ backgroundColor: theme.colors.paper[0], maxWidth: "30%" }}>
          <Center sx={{ height: "100%" }}>
            <RingProgress
              label={
                <Center>
                  <Title sx={{ color: "lime" }}>APR: 25%</Title>
                </Center>
              }
              size={300}
              thickness={20}
              sections={[
                { value: 60, color: "#F1BE42" },
                { value: 25, color: "#5185EC" },
                { value: 15, color: "#D85140" },
              ]}
            />
          </Center>
        </Container>
      </Container>
    </StyledContainer>
  );
}

import React, { useState } from "react";
import {
  Container,
  Box,
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
import { useModals } from "@mantine/modals";
import { useListState } from "@mantine/hooks";
import { ChevronLeft, ChevronRight, Plus } from "tabler-icons-react";
import RingChart from "../../../Dashboard/components/Charts/RingChart";
import StyledContainer from "../../../../components/layout/StyledContainer";
import StyledNumberInput from "../../../../components/Input/StyledNumberInput";
import NumericalInput from "../../../../components/Input/ControlledNumericalInput";
import StyledInput from "../../../../components/Input/StyledInput";
import AssetInput from "./AssetInput";

interface TokenData {
  symbol: string;
  icon: string;
  other?: any;
}

export default function InitialAllocation() {
  const theme = useMantineTheme();
  const balance = 10000;
  const [configRatio, setRatio] = useState(5);
  const [stableAsset, setStableAsset] = useState<TokenData>({ symbol: "USDT", icon: "" });
  const [volatileAssets, handlers] = useListState<TokenData>([
    { symbol: "ETH", icon: "" },
    { symbol: "BTC", icon: "" },
  ]);

  const modals = useModals();
  const openContextModal = () => {
    modals.openContextModal("assets", { innerProps: { onSelect: handleAddAsset } });
  };

  const handleRatioDecrease = () => {
    if (configRatio > 1) {
      setRatio((prev) => prev - 1);
    }
  };

  const handleRatioIncrease = () => {
    if (configRatio < 9) {
      setRatio((prev) => prev + 1);
    }
  };

  const handleRemoveAsset = (index: number) => {
    handlers.remove(index);
  };

  const handleAddAsset = (asset: string) => {
    handlers.append({ symbol: asset, icon: "" });
    modals.closeModal("assets");
  };

  return (
    <StyledContainer fluid>
      <Container fluid sx={{ display: "flex" }}>
        <Stack pr="lg" spacing="md" sx={{ flexGrow: 2 }}>
          <Group align="flex-end">
            <StyledNumberInput
              label="Initial Investment"
              placeholder={balance.toString()}
              labelProps={{ style: { fontSize: theme.fontSizes.md } }}
              radius="sm"
              size="sm"
              sx={{ width: 200 }}
              min={100}
              max={balance}
              hideControls
            />
            <Text color="gray">{"(Balance: $10000)"}</Text>
          </Group>
          <Text>Asset Ratio</Text>
          <Group align="center" spacing={0} mt={-15} ml={-10}>
            <Box
              component="button"
              px={0}
              sx={{ border: "none", backgroundColor: "transparent", cursor: "pointer", display: " inherit" }}
            >
              <ChevronLeft size={32} color="#5185EC" onClick={handleRatioDecrease} />
            </Box>
            <Text>Stable</Text>
            <Box
              component="span"
              ml={8}
              sx={{ width: 30, height: 36, borderRadius: theme.radius.sm, backgroundColor: theme.colors.light }}
            >
              <Center sx={{ height: "100%" }}>
                <Title order={4}>{`${configRatio}`}</Title>
              </Center>
            </Box>
            <Box component="span" mx={5}>
              <Title order={4}>{" : "}</Title>
            </Box>
            <Box
              component="span"
              mr={8}
              sx={{ width: 30, height: 36, borderRadius: theme.radius.sm, backgroundColor: theme.colors.light }}
            >
              <Center sx={{ height: "100%" }}>
                <Title order={4}>{`${10 - configRatio}`}</Title>
              </Center>
            </Box>
            <Text>Volatile</Text>
            <Box
              component="button"
              px={0}
              sx={{ border: "none", backgroundColor: "transparent", cursor: "pointer", display: " inherit" }}
            >
              <ChevronRight size={32} color="#5185EC" onClick={handleRatioIncrease} />
            </Box>
          </Group>
          <Text mb={-10}>Stable Asset</Text>
          <AssetInput
            token={stableAsset}
            max={100}
            color={theme.colors.accent[0]}
            onRemove={handleRemoveAsset}
            hideControls
          />
          <Divider />
          <Text mb={-10}>Volatile Asset</Text>

          {volatileAssets.length ? (
            volatileAssets.map((asset, index) => (
              <AssetInput key={index} token={asset} max={100} onRemove={() => handleRemoveAsset(index)} />
            ))
          ) : (
            <Text sx={{ opacity: 0.5 }}>Add assets to for rebalancing</Text>
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
              onClick={openContextModal}
            >
              <Plus size={24} strokeWidth={3} color={theme.white} />
            </ActionIcon>
          </Center>
        </Stack>

        <Container
          p="md"
          style={{ backgroundColor: theme.colors.paper[0], borderRadius: theme.radius.md, maxWidth: "30%" }}
        >
          <Center sx={{ height: "100%" }}>
            <RingProgress
              label={
                <Center>
                  <Title sx={{ color: "lime" }}>APR: ?%</Title>
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

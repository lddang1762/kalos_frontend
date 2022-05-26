import React, { Dispatch } from "react";
import { Box, Text, Group, Title, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import StyledNumberInput from "../../../../components/Input/StyledNumberInput";
import CurrencyIcon from "../../../../components/CurrencyIcon";

interface AssetInputProps {
  token: any;
  max: number;
  color?: string;
  onRemove: Dispatch<any>;
  hideControls?: boolean;
}

export default function AssetInput({ token, max, color, onRemove, hideControls = false }: AssetInputProps) {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <Group>
      <Box
        component="div"
        ref={ref}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: theme.fontSizes.xs,
          height: theme.fontSizes.xs,
          backgroundColor: hovered ? "red" : color ?? theme.colors.primary[0],
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={onRemove}
      >
        {hovered && "-"}
      </Box>
      <CurrencyIcon size={48} />
      <Title order={4} ml={-8} mr="lg" sx={{ width: 35 }}>
        {token.symbol}
      </Title>
      <StyledNumberInput radius="sm" hideControls={hideControls} min={1} max={max} />
      <Text size="md" sx={{ opacity: 0.7 }}>
        ~$0
      </Text>
    </Group>
  );
}

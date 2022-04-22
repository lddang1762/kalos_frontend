import React from "react";
import { Image, Center, DefaultProps, MantineStyleSystemProps } from "@mantine/core";
import getIconURL from "../hooks/getIconURI";

interface IconProps extends DefaultProps, MantineStyleSystemProps {
  size?: number;
  symbol?: string | undefined;
}

export default function CurrencyIcon({ size = 64, symbol, ...props }: IconProps) {
  const src = getIconURL(symbol);
  return (
    <Center
      sx={(theme) => ({ backgroundColor: theme.colors.light, borderRadius: "100%", minWidth: size, height: size })}
      {...props}
    >
      <Image src={src} height={0.5 * size} width={0.5 * size} />
    </Center>
  );
}

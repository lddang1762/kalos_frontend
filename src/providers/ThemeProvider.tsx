import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";

export default function ThemeProvider({ children }: any) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, white: "#d9f1ff" }}>{children}</MantineProvider>
    </ColorSchemeProvider>
  );
}

import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  fontFamily: "Karla", // Poppins, Roboto, Varela, Karla, Manrope
  white: "#ECF6FD",
};

export default function ThemeProvider({ children }: any) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, ...theme }}>{children}</MantineProvider>
    </ColorSchemeProvider>
  );
}

import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  fontFamily: "Karla", // Poppins, Roboto, Varela, Karla, Manrope
  white: "#DCEEFB",
  headings: { fontFamily: "Karla" },
  colors: {
    primary: [
      "#003E6B",
      "#0A558C",
      "#0F609B",
      "#186FAF",
      "#2680C2",
      "#4098D7",
      "#62B0E8",
      "#84C5F4",
      "#B6E0FE",
      "#DCEEFB",
    ],
    accent: [
      "#F0B429",
      "#5CCCD6",
      "#5CCCD6",
      "#5CCCD6",
      "#5CCCD6",
      "#5CCCD6",
      "#5CCCD6",
      "#5CCCD6",
      "#5CCCD6",
      "#5CCCD6",
    ],
  },
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

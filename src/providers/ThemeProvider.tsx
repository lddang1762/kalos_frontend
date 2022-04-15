import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  fontFamily: "Karla", // Poppins, Roboto, Varela, Karla, Manrope
  white: "#ECF6FD",
  headings: { fontFamily: "Karla" },
  fontSizes: { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 },
  colors: {
    primary: [
      "#5185EC",
      "#5185EC",
      "#5185EC",
      "#5185EC",
      "#5185EC",
      "#5185EC",
      "#5185EC",
      "#5185EC",
      "#5185EC",
      "#5185EC",
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
  primaryColor: "primary",
  radius: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
  defaultRadius: "md",
};

export default function ThemeProvider({ children }: any) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        styles={{
          Button: (theme, params) => ({
            root: {
              height: 40,
              padding: "0 30px",
              backgroundColor: theme.colors[params.color || theme.colors.primary[5]],
              boxShadow: `0px 3px 0 0 rgb(0 0 0 / 20%)`,
              "&:not(:disabled):active": {
                transform: "translateY(3px)",
              },
            },
          }),
          Switch: (theme, params) => ({
            input: { backgroundColor: theme.colors.dark[0], "&:hover": { cursor: "pointer" } },
          }),
        }}
        theme={{ colorScheme, ...theme }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

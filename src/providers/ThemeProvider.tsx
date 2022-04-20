import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const lightTheme: MantineThemeOverride = {
  fontFamily: "Karla", // Poppins, Roboto, Varela, Karla, Manrope
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
      "#F0B429",
      "#F0B429",
      "#F0B429",
      "#F0B429",
      "#F0B429",
      "#F0B429",
      "#F0B429",
      "#F0B429",
      "#F0B429",
    ],
    light: [
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
    ],
    paper: ["#ECF6FD"],
  },
  primaryColor: "primary",
  radius: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
  defaultRadius: "md",
};

const darkTheme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily: "Karla", // Poppins, Roboto, Varela, Karla, Manrope
  headings: { fontFamily: "Karla" },
  fontSizes: { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 },
  white: "#434F65",
  colors: {
    dark: [
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
      "#ECF6FD",
    ],

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
    light: [
      "#576277",
      "#576277",
      "#576277",
      "#576277",
      "#576277",
      "#576277",
      "#576277",
      "#576277",
      "#576277",
      "#576277",
    ],
    paper: ["#263146"],
  },
  primaryColor: "primary",
  radius: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
  defaultRadius: "md",
};

export default function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

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
            white: {
              backgroundColor: "white",
            },
          }),
          Switch: (theme, params) => ({
            input: {
              backgroundColor: "#829DB1",
              border: "none",
              "&:hover": { cursor: "pointer" },
              "::before": {
                backgroundColor: "white",
                borderColor: "white",
              },
              ":checked::before": { borderColor: "white" },
            },
          }),
        }}
        theme={colorScheme === "dark" ? darkTheme : lightTheme}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

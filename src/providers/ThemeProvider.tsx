import React from "react";
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
    secondary: ["#5CCCD6"],
    accent: [
      "#ffb624",
      "#ffb624",
      "#ffb624",
      "#ffb624",
      "#ffb624",
      "#ffb624",
      "#ffb624",
      "#ffb624",
      "#ffb624",
      "#ffb624",
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
    light2: ["#5185EC"],
    medium: ["#DBE5FB"],
    paper: ["#ECF6FD"],
    paper2: ["#DBE5FB"],
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
    secondary: ["#5CCCD6"],
    primary: [
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
      "#6c92e0",
    ],
    accent: [
      "#FFC968",
      "#FFC968",
      "#FFC968",
      "#FFC968",
      "#FFC968",
      "#FFC968",
      "#FFC968",
      "#FFC968",
      "#FFC968",
      "#FFC968",
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

    medium: ["#DBE5FB"],
    paper: ["#263146"],
    paper2: ["#313D54"],
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
              boxShadow: `0px 3px 0 0 rgb(0 0 0 / 20%)`,
              "&:not(:disabled):active": {
                transform: "translateY(3px)",
              },
            },
            white: {
              backgroundColor: "white",
              color: theme.colors.primary,
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
          Tooltip: (theme, params) => ({
            body: {
              color: theme.colorScheme === "light" ? "white" : "black",
              borderRadius: theme.radius.sm,
            },
          }),
          Select: (theme, params) => ({
            input: { backgroundColor: theme.colorScheme === "light" ? "white" : theme.colors.paper2[0] },
            dropdown: {
              borderColor: theme.colors.light[0],
              backgroundColor: theme.colorScheme === "light" ? "white" : theme.colors.paper2[0],
            },
            selected: {
              color: theme.colors.primary[0],
              backgroundColor: theme.colors.light[0],
            },
            hovered: {
              backgroundColor: `${theme.colors.light[0]}${theme.colorScheme === "light" ? 90 : 50}`,
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

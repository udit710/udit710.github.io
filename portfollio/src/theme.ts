// src/theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light", // or "dark"
  useSystemColorMode: false, // Enable this if you want to respect system settings
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "light" ? "#1d1d1d" : "#f0f0f0",
        color: props.colorMode === "light" ? "white" : "#1a202c",
      },
    }),
  },
});

export default theme;

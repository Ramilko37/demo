import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { TextStyle } from "../components/Text/textStyle";
import { ButtonStyle } from "../components/Button/buttonStyles";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "390px",
  md: "768px",
  lg: "1366px",
  xl: "1920px",
  "2xl": "2500px",
};

const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    display: { base: "none", md: "none" },
    width: "0",
    borderRadius: "1000px",
    backgroundColor: "gray",
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "1000px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "1000px",
    backgroundColor: "black",
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    "*": scrollbarStyles,
    "html, body": {
      scrollBehavior: "smooth",
      color: "Black.1",
      // bg: mode('white', 'gray.800')(props),
      touchAction: "pan-x pan-y !important", // Disable pinch-zoom and other gestures
    },
    a: {
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      UserSelect: "none",
    },
    svg: {
      ":active, :focus": {
        backgroundColor: "none",
      },
    },
    button: {
      _focusVisible: { boxShadow: "none", outline: "none" },
    },
  }),
};

const theme = extendTheme({
  config,
  styles,

  breakpoints,
  components: {
    [TextStyle.key]: TextStyle.style,
    [ButtonStyle.key]: ButtonStyle.style,
  },
  colors: {
    White: "#FFF",
    Yellow: "#FFE179",
    PinkDark: "#D12E64",
    Purple: "#8E44EC",
    Black: "#4F4521",
    Gray: {
      1: "#F2F2F2",
      2: "#EDEDED",
      3: "#E0E0E0",
      4: "#D6D6D6",
      5: "#B8B8B8",
      6: "#8F8F8F",
    },
  },
  fonts: {
    heading: "Alegreya",
    body: "Inter",
  },
});

export default theme;

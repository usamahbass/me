import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Overpass', sans-serif`,
    heading: `'Overpass', sans-serif`,
    text: `'Overpass', sans-serif`,
  },
  colors: {
    blue: {
      500: "#343aa4",
    },
  },
});

export default theme;

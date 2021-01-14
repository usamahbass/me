import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import theme from "../theme";

class Document extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default Document;

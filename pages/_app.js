import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ContextProvider } from "../context";
import { Backtop } from "../components";
import Head from "next/head";
import Layout from "../layout";
import theme from "../theme";
import "nprogress/nprogress.css";
import "../styles/globals.css";

const TopProgress = dynamic(() => import("../components/top-progress"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href="/bass.jpg" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Layout>
          <TopProgress />
          <Component {...pageProps} />
          <Backtop />
        </Layout>
      </ChakraProvider>
    </ContextProvider>
  );
}

export default MyApp;

import {
  Avatar,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../layout";

export default function Home() {
  const [md] = useMediaQuery("(max-width: 960px)");
  return (
    <>
      <Head>
        <title>@usamahbass - frontend dev</title>
      </Head>

      <Layout title="UsamahBass">
        <Grid
          templateColumns={md ? "1fr" : "20rem 1fr"}
          templateRows={md ? "14rem 1fr" : null}
          gap="1rem"
          position="relative"
          justifyContent="center"
          alignItems="center"
          textAlign={md ? "center" : "left"}
        >
          <GridItem>
            <a href="https://github.com/usamahbass">
              <Avatar
                width={256}
                height="auto"
                src="/bass.jpg"
                name="Usamah Basalamah"
              />
            </a>
          </GridItem>
          <GridItem>
            <Text fontSize="1.3rem" fontWeight="bold" color="blue.500">
              Ahlan !
            </Text>
            <Heading fontSize="clamp(1.25rem,calc(5vw + 1.25rem),3.5rem)" mt={3}>
              Ane Usamah Basalamah
            </Heading>
          </GridItem>
        </Grid>
      </Layout>
    </>
  );
}

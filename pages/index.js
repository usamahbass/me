import { Box, Button, Divider, Grid, GridItem } from "@chakra-ui/react";
import { Title, Hero, Card } from "../components";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>@usamahbass - frontend dev</title>
      </Head>

      <Hero />

      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title title="Coretan Terbaru" />

        <Grid
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {Array.from(new Array(6)).map((el, i) => (
            <GridItem>
              <Card />
            </GridItem>
          ))}
        </Grid>

        <Link href="coretan">
          <Button
            color="white"
            size="md"
            display="block"
            margin="50px auto"
            justifyContent="center"
            bg="blue.500"
          >
            Lihat Selengkapnya
          </Button>
        </Link>
      </Box>

      <Divider mb={10} mt={5} colorScheme="grey.500" />

      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title title="Proyek Terbaru" />

        <Grid
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {Array.from(new Array(6)).map((el, i) => (
            <GridItem>
              <Card />
            </GridItem>
          ))}
        </Grid>

        <Link href="coretan">
          <Button
            color="white"
            size="md"
            display="block"
            margin="50px auto"
            justifyContent="center"
            bg="blue.500"
          >
            Lihat Selengkapnya
          </Button>
        </Link>
      </Box>
    </>
  );
}

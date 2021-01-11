import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { Title, Hero, Card, Divider } from "../components";
import Head from "next/head";
import Link from "next/link";

export default function Home({ coretan, proyek, oss }) {
  return (
    <>
      <Head>
        <title>@usamahbass - frontend dev</title>
      </Head>

      <Hero />

      {/* Coretan */}

      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title title="Coretan Terbaru" />

        <Grid
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {coretan
            ? coretan.map((el, i) => (
                <GridItem key={i}>
                  <Link href={`/coretan/${el.slug}`}>
                    <a>
                      <Card
                        isNew
                        title={el.title}
                        date={el.date}
                        desc={el.slug}
                      />
                    </a>
                  </Link>
                </GridItem>
              ))
            : "loading.."}
        </Grid>

        <Link href="/coretan">
          <a>
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
          </a>
        </Link>
      </Box>

      {/* End Coretan */}

      <Divider mb={10} mt={5} />

      {/* Proyek */}

      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title title="Proyek Terbaru" />

        <Grid
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {proyek
            ? proyek.map((el, i) => (
                <GridItem key={i}>
                  <Link href={`/proyek/${el.slug}`}>
                    <a>
                      <Card
                        isNew
                        isImage
                        image={el.thumbnail}
                        alt={el.title}
                        title={el.title}
                        date={el.date}
                        desc={el.slug}
                      />
                    </a>
                  </Link>
                </GridItem>
              ))
            : "loading.."}
        </Grid>

        <Link href="/proyek">
          <a>
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
          </a>
        </Link>
      </Box>

      {/* End Proyek */}

      <Divider mb={10} mt={5} />

      {/* OSS */}

      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title title="OSS Terbaru" />

        <Grid
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {oss
            ? oss.map((el, i) => (
                <GridItem key={i}>
                  <Link href={`/oss/${el.slug}`}>
                    <a>
                      <Card
                        isNew
                        isImage
                        image={el.thumbnail}
                        alt={el.title}
                        title={el.title}
                        date={el.date}
                        desc={el.slug}
                      />
                    </a>
                  </Link>
                </GridItem>
              ))
            : "loading.."}
        </Grid>

        <Link href="/oss">
          <a>
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
          </a>
        </Link>
      </Box>

      {/* End OSS */}
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");

  const { v4: uuid } = require("uuid");

  const filesCoretan = fs.readdirSync(
    `${process.cwd()}/contents/coretan`,
    "utf-8"
  );
  const filesProyek = fs.readdirSync(
    `${process.cwd()}/contents/proyek`,
    "utf-8"
  );
  const filesOSS = fs.readdirSync(`${process.cwd()}/contents/oss`, "utf-8");

  const coretan = filesCoretan
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/coretan/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  const proyek = filesProyek
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/proyek/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  const oss = filesOSS
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/oss/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: {
      coretan,
      proyek,
      oss,
    },
  };
}

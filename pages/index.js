import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import fs from "fs";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import { Title, Hero, Card, Divider } from "../components";
import { DefaultSEO } from "../next-seo.config";
import Link from "next/link";

export default function Home({ coretan, eksperimen }) {
  const isCoretan = coretan.sort(
    (a, b) =>
      Math.abs(Date.now() - new Date(b.date)) -
      Math.abs(Date.now() - new Date(a.date))
  );

  const isEksperimen = eksperimen.sort(
    (a, b) =>
      Math.abs(Date.now() - new Date(a.date)) -
      Math.abs(Date.now() - new Date(b.date))
  );

  return (
    <>
      <NextSeo {...DefaultSEO} />

      <Hero />

      {/* Coretan */}

      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title title="Coretan" />

        <Grid
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {isCoretan
            ? isCoretan
                .reverse()
                .slice(0, 3)
                .map((el, i) => (
                  <GridItem key={i}>
                    <Link href={`/coretan/${el.slug}`}>
                      <Card
                        isNew
                        tags={el.tags}
                        title={el.title}
                        date={el.date}
                        desc={el.spoiler}
                      />
                    </Link>
                  </GridItem>
                ))
            : "memuat data.."}
        </Grid>

        <Link href="/coretan">
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

      {/* End Coretan */}

      <Divider mb={10} mt={5} />

      {/* Eksperimen */}

      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title title="Eksperimen" />

        <Grid
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {isEksperimen
            ? isEksperimen.slice(0, 3).map((el, i) => (
                <GridItem key={i}>
                  <Link href={`/eksperimen/${el.slug}`}>
                    <Card
                      isNew
                      isImage
                      source_code={el.source_code}
                      demo={el.demo}
                      image={el.thumbnail}
                      alt={el.title}
                      title={el.title}
                      date={el.date}
                      desc={el.spoiler}
                    />
                  </Link>
                </GridItem>
              ))
            : "memuat data.."}
        </Grid>

        <Link href="/eksperimen">
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

      {/* End OSS */}
    </>
  );
}

export async function getStaticProps() {
  const filesCoretan = fs.readdirSync(
    `${process.cwd()}/contents/coretan`,
    "utf-8"
  );
  const filesEksperimen = fs.readdirSync(
    `${process.cwd()}/contents/eksperimen`,
    "utf-8"
  );

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

  const eksperimen = filesEksperimen
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/eksperimen/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: {
      coretan,
      eksperimen,
    },
  };
}

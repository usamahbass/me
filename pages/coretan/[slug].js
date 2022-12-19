import {
  Box,
  Container,
  GridItem,
  Heading,
  Link,
  Text,
  Grid,
} from "@chakra-ui/react";
import { Calendar, Edit } from "react-feather";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Markdown, Divider, Shared, Card } from "../../components";

export default function IsCoretan({ coretan, coretanExisting }) {
  const {
    query: { slug },
  } = useRouter();

  console.log(coretanExisting, "HERE");

  return (
    <>
      <Head>
        <meta name="author" property="og:author" content="Usamah Basalamah" />
        <meta
          name="publish_date"
          property="og:publish_date"
          content={coretan?.date}
        />
      </Head>
      <NextSeo
        title={`${coretan.title} - @usamahbass`}
        description={coretan.spoiler}
        type="article"
        openGraph={{
          type: "article",
          locale: "id",
          site_name: "@usamahbass",
          url: `https://usamahbass.vercel.app/coretan/${slug}`,
          title: coretan.title,
          description: coretan.spoiler,
          images: [
            {
              url: coretan.thumbnail,
              width: 800,
              height: 600,
              alt: coretan.title,
            },
          ],
        }}
      />
      <Container maxW="3xl">
        <Box textAlign="center" mb={10}>
          <Heading>{coretan.title}</Heading>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mr="5"
              flexWrap="wrap"
            >
              <Calendar style={{ marginRight: 5 }} />
              <Text position="relative" top="3px">
                {coretan.date}
              </Text>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <Edit style={{ marginRight: 5 }} />
              <Link href={coretan.edit} position="relative" top="3px">
                Ubah di Github
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider mb={10} />
        <Markdown source={coretan.content} />

        <Box mt={10}>
          <Shared path="coretan" title={coretan.title} />
        </Box>
        {coretanExisting?.length > 0 && (
          <>
            <Divider mt={10} mb={10} />
            <Box mb={5}>
              <Text fontSize="1.5rem" fontWeight="bold" mb={5}>
                Coretan Terkait
              </Text>

              <Grid
                gap="1.25rem"
                templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
              >
                {coretanExisting?.map((el, i) => (
                  <GridItem key={i}>
                    <NextLink href={`/coretan/${el.slug}`}>
                      <Card
                        tags={el.tags}
                        title={el.title}
                        date={el.date}
                        desc={el.spoiler}
                      />
                    </NextLink>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const slug = params.slug;
  const path = `${process.cwd()}/contents/coretan/${slug}.md`;

  const filesCoretan = fs.readdirSync(
    `${process.cwd()}/contents/coretan`,
    "utf-8"
  );

  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent);

  const coretanExisting = filesCoretan
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/coretan/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    })
    .filter((elem) => elem.title !== data.title)
    ?.map((elem) => {
      if (elem?.tags?.some((tag) => data?.tags?.includes(tag))) {
        return elem;
      }
    })
    .filter((elem) => typeof elem !== "undefined")
    ?.slice(0, 2);

  return {
    props: {
      coretan: {
        ...data,
        content: content.toString(),
      },
      coretanExisting,
    },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");

  const path = `${process.cwd()}/contents/coretan`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { Calendar, Edit } from "react-feather";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Markdown, Divider, Shared } from "../../components";

export default function IsCoretan({ coretan }) {
  const {
    query: { slug },
  } = useRouter();

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
        <Divider mt={10} mb={10} />
        <Shared textTwitter={coretan.title} />
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const matter = require("gray-matter");

  const slug = params.slug;
  const path = `${process.cwd()}/contents/coretan/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent);

  return {
    props: {
      coretan: {
        ...data,
        content: content.toString(),
      },
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

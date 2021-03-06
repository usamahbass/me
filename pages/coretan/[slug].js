import { useContext, useEffect } from "react";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { Calendar, Edit } from "react-feather";
import { NextSeo } from "next-seo";
import { IsContext } from "../../context";
import { Markdown, Divider, Shared } from "../../components";

export default function IsCoretan({ coretan }) {
  const [path, setPath] = useContext(IsContext);

  useEffect(() => {
    setPath((path) => ({ ...path, path: window.location.pathname }));
  }, []);

  return (
    <>
      <NextSeo
        title={`${coretan.title} - @usamahbass`}
        description={coretan.spoiler}
        type="blog"
        openGraph={{
          type: "blog",
          url: `https://usamahbass.vercel.app${path.path}`,
          title: coretan.title,
          description: coretan.spoiler,
          images: [
            {
              url: coretan.thumbnail,
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
              <Link
                href={coretan.edit}
                position="relative"
                top="3px"
              >
                Ubah di Github
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider mb={10} />
        <Markdown source={coretan.content} />
        <Divider mb={10} />
        <Shared textTwitter={coretan.title} />
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = params.slug;
  const path = `${process.cwd()}/contents/coretan/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight)
    .use(html)
    .process(content);

  return {
    props: {
      coretan: {
        ...data,
        content: result.toString(),
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

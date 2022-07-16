import { useContext, useEffect } from "react";
import { Box, Button, Divider, Heading, Image } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Code, Globe } from "react-feather";
import { CardStack, Markdown } from "../../components";
import { IsContext } from "../../context";
import { OssContainer } from "../../containers";

export default function IsOSS({ oss }) {
  const [path, setPath] = useContext(IsContext);

  useEffect(() => {
    setPath((path) => ({ ...path, path: window.location.pathname }));
  }, []);
  return (
    <>
      <NextSeo
        title={`${oss.title} - @usamahbass`}
        description={oss.spoiler}
        type="blog"
        openGraph={{
          type: "article",
          locale: "id",
          site_name: "@usamahbass",
          url: `https://usamahbass.vercel.app${path.path}`,
          title: oss.title,
          description: oss.spoiler,
          images: [
            {
              url: oss.thumbnail,
              width: 800,
              height: 600,
              alt: coretan.title,
            },
          ],
        }}
      />
      <OssContainer
        photo={
          <Image
            display="block"
            width="100%"
            fallbackSrc="https://via.placeholder.com/653x406"
            height={["100%", "406px"]}
            src={oss.thumbnail}
            alt={oss.title}
          />
        }
        stack={<CardStack stack={oss.tech} />}
        content={
          <Box display="block" mt="3">
            <Heading>{oss.title}</Heading>

            <Box display="flex" mt="3">
              {oss.source_code == null ? null : (
                <Button
                  as="a"
                  href={oss.source_code}
                  mr="5"
                  colorScheme="blue"
                  rightIcon={<Code />}
                >
                  Kode Sumber
                </Button>
              )}
              {oss.demo == null ? null : (
                <Button
                  as="a"
                  href={oss.demo}
                  color="grey.500"
                  rightIcon={<Globe />}
                >
                  Demo
                </Button>
              )}
            </Box>

            <Divider
              mt={10}
              mb={10}
              borderColor="#EDF2F7"
              opacity="1"
              borderWidth="2px"
            />

            <Markdown source={oss.content} />
          </Box>
        }
      />
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
  const path = `${process.cwd()}/contents/eksperimen/${slug}.md`;

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
      oss: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");

  const path = `${process.cwd()}/contents/eksperimen`;
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
